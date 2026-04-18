---
sidebar_position: 6
title: Custom Execution Backends
---

# Custom Execution Backends

Plug in a custom sandbox or remote execution environment. When an agent run is dispatched to your backend, your provider handles spawning, lifecycle, and teardown.

## When to write a custom execution backend

- You have a proprietary sandboxing system (internal VM pool, custom container runtime).
- You want agents to run on a platform not supported out of the box (Firecracker, Fly Machines, internal HPC cluster).
- You need custom credential injection, network topology, or resource tagging per run.

For standard backends (Docker, Kubernetes, SSH, cloud VMs), see [Agent Infrastructure → Remote Execution](../11_agent-infrastructure/09_remote-execution.md).

## Provider interface

```ts
import { defineExecutionProvider } from '@codebolt/plugin-sdk';

export const provider = defineExecutionProvider({
  id: 'my-org/hpc-cluster',
  label: 'HPC Cluster',

  async spawn(run) {
    // run.agentImage, run.env, run.resources, run.callbackUrl
    const jobId = await this.submitJob({
      image: run.agentImage,
      env: run.env,
      callbackUrl: run.callbackUrl,
      cpus: run.resources.cpu,
      memoryMb: run.resources.memory_mb,
    });
    return { handle: jobId };
  },

  async stop(handle, { graceful }) {
    await this.cancelJob(handle, { signal: graceful ? 'SIGTERM' : 'SIGKILL' });
  },

  async status(handle) {
    const job = await this.getJob(handle);
    return { state: job.state, exitCode: job.exitCode };
  },
});
```

Declare in `plugin.yaml`:

```yaml
contributes:
  executionProviders:
    - id: my-org/hpc-cluster
      label: HPC Cluster
      configSchema:
        endpoint: { type: string }
        token: { type: string, secret: true }
```

## See also

- [Remote Execution](../11_agent-infrastructure/09_remote-execution.md) — configuring built-in providers
- [Plugin SDK — Remote Execution Provider](../05_plugins/08_remote-execution-provider.md)
