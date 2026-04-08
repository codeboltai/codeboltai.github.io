---
sidebar_position: 3
title: Hook Examples
---

# Hook Examples

Concrete hooks for common tasks. Copy, adapt, use.

## 1. Block writes outside business hours

```yaml
# .codebolt/hooks/no-writes-after-hours.yaml
name: no-writes-after-hours
phase: before_tool_call
match:
  tool: "codebolt_fs.write_file"
when:
  hour_range: "09:00-18:00"
  timezone: "America/Los_Angeles"
  invert: true        # fire OUTSIDE the hour range
verdict: deny
reason: "Writes are only allowed during business hours (9am-6pm PT)."
```

No code. Pure YAML. Prevents file writes from any agent outside the configured hours.

## 2. Block pushes to main from any agent

```yaml
# .codebolt/hooks/no-push-to-main.yaml
name: no-push-to-main
phase: before_tool_call
match:
  tool: "codebolt_git.push"
  args:
    branch: "main"
verdict: deny
reason: "Agents cannot push to main. Open a PR via `codebolt_git.create_pr` instead."
```

The reason message is read by the agent — including the alternative action in the reason is what lets the agent recover instead of looping.

## 3. Redact secrets from LLM prompts

```ts
// .codebolt/hooks/redact-secrets.ts
export default {
  phase: "before_llm_call",
  handler: async (ctx) => {
    const redacted = ctx.messages.map(m => ({
      ...m,
      content: redactSecrets(m.content),
    }));
    return {
      verdict: "allow_with_modification",
      context: { ...ctx, messages: redacted },
    };
  },
};

function redactSecrets(text: string): string {
  return text
    // AWS access keys
    .replace(/AKIA[0-9A-Z]{16}/g, "[REDACTED_AWS_KEY]")
    // Generic "Bearer <token>" patterns
    .replace(/Bearer\s+[A-Za-z0-9._~+/-]+=*/gi, "Bearer [REDACTED]")
    // Private keys
    .replace(/-----BEGIN [A-Z]+ PRIVATE KEY-----[\s\S]*?-----END [A-Z]+ PRIVATE KEY-----/g, "[REDACTED_PRIVATE_KEY]")
    // GitHub tokens
    .replace(/ghp_[A-Za-z0-9]{36}/g, "[REDACTED_GH_TOKEN]");
}
```

Runs on every LLM call. Strips common secret patterns before they leave the workspace. Not a substitute for proper secret management, but a useful safety net.

## 4. Log every tool call to the SIEM

```ts
// .codebolt/hooks/audit-tool-calls.ts
export default {
  phase: "after_tool_call",
  handler: async (ctx) => {
    // Fire and forget — don't block the run
    fetch("https://siem.my-org.com/events", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.SIEM_TOKEN}` },
      body: JSON.stringify({
        type: "codebolt.tool_call",
        run_id: ctx.runId,
        agent: ctx.agent,
        tool: ctx.tool,
        args: ctx.args,
        ok: ctx.result.ok !== false,
        timestamp: new Date().toISOString(),
      }),
    }).catch(err => ctx.log.warn("SIEM post failed", err));

    return { verdict: "observe" };
  },
};
```

Note the fire-and-forget: the hook returns immediately without waiting for the SIEM. Blocking the run on external logging is a bad tradeoff.

## 5. Notify Slack when a review rejects

```ts
export default {
  phase: "on_run_end",
  match: { agent: "reviewer" },
  handler: async (ctx) => {
    if (ctx.output?.verdict !== "rejected") return { verdict: "observe" };

    await fetch(process.env.SLACK_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `Reviewer rejected run ${ctx.runId}: ${ctx.output.comments?.[0]?.message ?? "no comment"}`,
      }),
    });

    return { verdict: "observe" };
  },
};
```

## 6. Enforce a per-agent LLM budget

```ts
export default {
  phase: "after_llm_call",
  handler: async (ctx) => {
    const key = `budget:${ctx.runId}`;
    const spent = (await ctx.kvStore.get(key)) ?? 0;
    const newSpent = spent + ctx.cost_usd;
    await ctx.kvStore.set(key, newSpent);

    if (newSpent > 1.0) {
      return {
        verdict: "deny",
        reason: `Run exceeded $1 budget. Stopping to prevent runaway cost.`,
      };
    }
    return { verdict: "observe" };
  },
};
```

The budget is per-run and persisted in kvStore so it survives restarts.

## 7. Run a linter after every write

```ts
export default {
  phase: "after_file_write",
  match: { path_ends_with: ".ts" },
  handler: async (ctx) => {
    const result = await ctx.shell.run(`npx eslint --fix ${ctx.path}`);
    if (result.exit_code !== 0) {
      ctx.log.warn(`Lint issues in ${ctx.path}:\n${result.stdout}`);
    }
    return { verdict: "observe" };
  },
};
```

This is the `on_save` pattern automated: every TypeScript file written by an agent gets auto-linted.

## 8. Rate-limit a tool

```ts
export default {
  phase: "before_tool_call",
  match: { tool: "external_api.query" },
  handler: async (ctx) => {
    const now = Date.now();
    const window = 60_000; // 1 minute
    const key = `rate:external_api.query`;
    const calls = (await ctx.kvStore.get(key)) ?? [];
    const recent = calls.filter(t => now - t < window);

    if (recent.length >= 10) {
      return {
        verdict: "deny",
        reason: `Rate limit: external_api.query is capped at 10 calls/minute. Retry after ${Math.ceil((recent[0] + window - now) / 1000)}s.`,
      };
    }

    recent.push(now);
    await ctx.kvStore.set(key, recent);
    return { verdict: "allow" };
  },
};
```

Caps any tool to 10 calls/minute across all runs in the workspace.

## 9. Prevent agents from reading specific files

```yaml
name: no-reading-secrets
phase: before_tool_call
match:
  tool: "codebolt_fs.read_file"
  args:
    path_starts_with:
      - "secrets/"
      - ".env"
      - "private/"
verdict: deny
reason: "This file is in a restricted path. Agents cannot read it."
```

## 10. Auto-checkpoint before dangerous operations

```ts
export default {
  phase: "before_tool_call",
  match: {
    tool_in: ["codebolt_fs.delete", "codebolt_git.reset", "codebolt_fs.move_many"],
  },
  handler: async (ctx) => {
    await ctx.checkpoint.create({
      reason: `before ${ctx.tool}`,
      pinned: true,
    });
    return { verdict: "allow" };
  },
};
```

Creates a pinned checkpoint (never auto-pruned) before any dangerous operation.

## Where to put these

Hooks live in `.codebolt/hooks/` in your project. Filename becomes the hook name. For YAML hooks, use `.yaml`; for code hooks, use `.ts` or `.js`.

Hooks are loaded on server start and reload automatically when files change.

## Testing hooks

Test code hooks as pure functions:

```ts
import hook from "./redact-secrets";

test("redacts AWS keys", async () => {
  const ctx = {
    messages: [{ role: "user", content: "my key is AKIAIOSFODNN7EXAMPLE" }],
  };
  const result = await hook.handler(ctx as any);
  expect(result.verdict).toBe("allow_with_modification");
  expect(result.context.messages[0].content).toContain("[REDACTED_AWS_KEY]");
});
```

YAML hooks are harder to unit-test in isolation; test them via `codebolt agent test` and inspect the trace for hook decisions.

## See also

- [Hooks Overview](./01_hooks-overview.md)
- [Hook Types](./02_hook-types.md)
- [Guardrails & Eval (internals)](../08_internals/03_subsystems/09_guardrails-and-eval.md)
