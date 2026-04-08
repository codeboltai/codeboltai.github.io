---
sidebar_position: 3
title: Custom Remote Execution Provider
---

# Custom Remote Execution Provider

A remote execution provider lets agents run their work somewhere other than the local machine — a cloud VM, a container orchestrator, a dedicated sandbox. The agent process is spawned remotely instead of as a local child of the server.

## When you'd build one

- **Sandboxing** — run agents in isolated containers so their tool calls can't touch the host.
- **Scale** — run many agents in parallel on dedicated compute.
- **Specialised hardware** — agents that need GPUs, large memory, or specific OS images the local machine can't provide.
- **Compliance** — agent runs must happen in a specific environment (a customer's VPC, an air-gapped zone, a machine with audit logging).

For normal use, the built-in local execution is fine. Remote execution is for specific operational needs.

## The interface

```ts
interface RemoteExecutionProvider {
  name: string;

  spawn(req: SpawnRequest): Promise<RemoteRun>;
  status(runId: string): Promise<RemoteRunStatus>;
  kill(runId: string): Promise<void>;

  testConnection(): Promise<TestResult>;
}

interface SpawnRequest {
  agent: AgentManifest;
  input: object;
  runId: string;                    // Codebolt's run ID (for correlation)
  callbackUrl: string;              // WebSocket URL the remote run should connect back to
  env: Record<string, string>;
  resources: {
    cpu?: number;
    memoryMB?: number;
    gpuCount?: number;
  };
  timeout?: number;
}

interface RemoteRun {
  id: string;                       // provider-specific ID (container ID, VM ID, etc.)
  status: "starting" | "running" | "succeeded" | "failed" | "killed";
  remoteHost?: string;
}
```

## How it fits into Codebolt

Normally, `AgentProcessManager` spawns agents as local processes. With a remote execution provider, the provider becomes the spawner:

```
agentService.startRun({ agent, input })
      │
      ▼
AgentProcessManager.spawn(...)
      │
      ├── local? ──▶ child_process.spawn(entrypoint)
      │
      └── remote?──▶ RemoteExecutionProvider.spawn(req)
                           │
                           ▼
                     provider creates the sandbox
                     (container, VM, etc.)
                           │
                           ▼
                  sandbox connects back via WebSocket
                  using req.callbackUrl + runId
                           │
                           ▼
                  Codebolt treats it like any other run
                  — tool calls, LLM calls, events all
                  flow through the normal protocol
```

**Key insight:** the remote process is still a Codebolt agent. It uses the same `codeboltjs` SDK, speaks the same WebSocket protocol, and integrates with the event log, memory, and guardrails the same way a local run does. The only difference is *where* the process lives.

## Minimal provider — using Docker

```ts
import { RemoteExecutionProvider, SpawnRequest, RemoteRun } from "@codebolt/provider-sdk";
import Docker from "dockerode";

export default class DockerProvider implements RemoteExecutionProvider {
  name = "docker";
  private docker = new Docker();

  async spawn(req: SpawnRequest): Promise<RemoteRun> {
    // Build or pull an image containing the agent
    const image = await this.buildImage(req.agent);

    const container = await this.docker.createContainer({
      Image: image,
      Env: [
        `RUN_ID=${req.runId}`,
        `CODEBOLT_SERVER_URL=${req.callbackUrl}`,
        ...Object.entries(req.env).map(([k, v]) => `${k}=${v}`),
      ],
      HostConfig: {
        Memory: (req.resources.memoryMB ?? 2048) * 1024 * 1024,
        CpuShares: (req.resources.cpu ?? 1) * 1024,
        AutoRemove: true,
      },
    });

    await container.start();
    return {
      id: container.id,
      status: "running",
      remoteHost: "local-docker",
    };
  }

  async status(id: string) {
    const container = this.docker.getContainer(id);
    const inspect = await container.inspect();
    return {
      id,
      status: inspect.State.Status === "running" ? "running" :
              inspect.State.ExitCode === 0 ? "succeeded" : "failed",
      remoteHost: "local-docker",
    };
  }

  async kill(id: string) {
    const container = this.docker.getContainer(id);
    try { await container.stop({ t: 5 }); } catch {}
    try { await container.remove({ force: true }); } catch {}
  }

  async testConnection() {
    try {
      await this.docker.ping();
      return { ok: true };
    } catch (err) {
      return { ok: false, error: String(err) };
    }
  }

  private async buildImage(agent: AgentManifest): Promise<string> {
    // Build or pull the image for this agent's runtime.
    // Implementation omitted — depends on your registry setup.
    return "codebolt-agent-base:latest";
  }
}
```

Real providers handle: image management, resource limits, network policies, logging, cleanup of dead containers.

## Callback URL and connectivity

The remote process needs to connect back to the Codebolt server. This requires network connectivity from the sandbox to the server. For:

- **Local Docker / Kubernetes:** the server URL uses the host network (e.g. `host.docker.internal:3456`).
- **Cloud VMs / containers:** the server must be reachable at a public or VPC-internal URL. Configure `server.public_url` in Codebolt settings.
- **Firewalled environments:** you may need a reverse tunnel — the sandbox initiates an outbound connection and Codebolt uses that for bidirectional traffic.

Your provider is responsible for telling the sandbox how to reach the server. Codebolt passes the URL in `req.callbackUrl`.

## Resource limits

Codebolt passes declared resource limits in `req.resources`. Your provider should honour them and reject spawn requests that exceed your infrastructure's capacity:

```ts
async spawn(req) {
  if (req.resources.memoryMB > 32_000) {
    throw new Error("Provider does not support > 32 GB memory");
  }
  // ...
}
```

## Registering

Same plugin pattern:

```json
{
  "name": "@my-org/codebolt-exec-docker",
  "codebolt": {
    "kind": "remote-execution-provider",
    "entrypoint": "dist/index.js"
  }
}
```

Configure in **Settings → Execution → Remote providers**.

Agents opt into remote execution in their manifest:

```yaml
execution:
  provider: docker                # name of the provider
  resources:
    memoryMB: 4096
    cpu: 2
```

Or per-run:

```bash
codebolt agent start my-agent --execution docker --task "..."
```

## Security considerations

Remote execution providers are trust-sensitive:

- **The provider controls where agent code runs.** A malicious provider could exfiltrate code or credentials.
- **The sandbox needs credentials** — API keys, tokens — to call tools. Handle them carefully. Prefer short-lived credentials minted per-run.
- **Network policy matters.** The sandbox should not be able to reach the internet unless the agent's tools require it.
- **Isolation between runs.** Never reuse containers across runs unless you've fully wiped state between them.

Built-in providers (when added) go through security review. Third-party providers should be treated with the same skepticism as any extension that runs code on your behalf.

## See also

- [Custom LLM Provider](./01_llm-provider.md)
- [Process Model (internals)](../08_internals/02_process-model.md)
- [Agent Subsystem (internals)](../08_internals/03_subsystems/01_agent-subsystem.md)
- [Remote Execution](../10_remote-execution.md)
