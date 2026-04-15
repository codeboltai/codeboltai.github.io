---
sidebar_position: 4
title: Writing a Custom Processor
---

# Writing a Custom Processor

Walkthrough of writing a message modifier from scratch and wiring it into an agent. Once you've done this, the other processor types follow the same shape.

## Example: an email-redacting processor

We'll write a processor that removes email addresses from every message before they reach the LLM. Use case: a workspace where customer data occasionally shows up in chat and you don't want it in LLM prompts.

## Step 1 — write the class

```ts
// processors/redact-emails.ts
import { MessageModifier, type Message, type Context } from "@codebolt/agent";

export class RedactEmailsModifier implements MessageModifier {
  readonly name = "RedactEmailsModifier";

  async modify(messages: Message[], ctx: Context): Promise<Message[]> {
    return messages.map(m => ({
      ...m,
      content: this.redact(m.content),
    }));
  }

  private redact(content: string): string {
    if (typeof content !== "string") return content;
    return content.replace(
      /[\w.+-]+@[\w-]+(\.[\w-]+)+/g,
      "[redacted-email]"
    );
  }
}
```

Three things to notice:

- **Implement `MessageModifier`** — one method, `modify`.
- **`name` field** — used for identification in traces and logs.
- **Pure transformation** — no side effects. Processors should be stateless and deterministic.

## Step 2 — add it to an agent

### In Unified Agent

```ts
import { UnifiedAgent } from "@codebolt/agent/patterns";
import { RedactEmailsModifier } from "./processors/redact-emails";

export default new UnifiedAgent({
  name: "my-agent",
  systemPrompt: "...",
  tools: ["codebolt_fs.*"],
  processors: {
    additionalMessageModifiers: [new RedactEmailsModifier()],
  },
});
```

### In agent.yaml (for yaml-configured agents)

```yaml
processors:
  message_modifiers:
    - ./processors/redact-emails.ts#RedactEmailsModifier
```

## Step 3 — test in isolation

Processors are pure functions. Unit-test them directly:

```ts
import { RedactEmailsModifier } from "./redact-emails";

test("redacts single email", async () => {
  const mod = new RedactEmailsModifier();
  const result = await mod.modify(
    [{ role: "user", content: "contact alice@example.com" }],
    {} as any
  );
  expect(result[0].content).toBe("contact [redacted-email]");
});

test("redacts multiple emails", async () => {
  const mod = new RedactEmailsModifier();
  const result = await mod.modify(
    [{ role: "user", content: "a@b.c and x@y.z" }],
    {} as any
  );
  expect(result[0].content).toBe("[redacted-email] and [redacted-email]");
});

test("leaves non-email content alone", async () => {
  const mod = new RedactEmailsModifier();
  const result = await mod.modify(
    [{ role: "user", content: "nothing to see here" }],
    {} as any
  );
  expect(result[0].content).toBe("nothing to see here");
});
```

Pure functions are the easiest thing in the world to test. Take advantage.

## Step 4 — verify end-to-end

Run the agent with an email in the prompt and inspect the trace:

```bash
codebolt agent test my-agent --task "email me at alice@example.com"
codebolt agent trace <run_id> --phase 1
```

The trace shows the assembled messages sent to the LLM. Confirm `alice@example.com` is replaced with `[redacted-email]`.

## Patterns for common processor tasks

### Injecting context from an external system

```ts
export class JiraTicketModifier implements MessageModifier {
  async modify(messages, ctx) {
    const ticketMentions = messages
      .flatMap(m => m.content.match(/[A-Z]+-\d+/g) ?? []);

    if (ticketMentions.length === 0) return messages;

    const ticketInfo = await Promise.all(
      ticketMentions.map(id => this.fetchTicket(id))
    );

    return [
      ...messages,
      {
        role: "system",
        content: `Referenced tickets:\n${ticketInfo.map(t => `- ${t.id}: ${t.title}`).join("\n")}`,
      },
    ];
  }

  private async fetchTicket(id: string) {
    // Call your ticket system API
  }
}
```

### Rewriting user content

```ts
export class ExpandShortcutsModifier implements MessageModifier {
  async modify(messages) {
    return messages.map(m => ({
      ...m,
      content: m.content
        .replace(/\btfc\b/g, "the feature code")
        .replace(/\bMR\b/g, "merge request"),
    }));
  }
}
```

Use with care — changing user input invisibly is surprising behaviour.

### Conditionally halting the loop

```ts
export class BudgetEnforcer implements MessageModifier {
  async modify(messages, ctx) {
    if (ctx.state.get("cost_usd") > 5.0) {
      return {
        messages: [
          ...messages,
          { role: "system", content: "Budget exceeded. Stop and report." },
        ],
        halt: true,
        reason: "budget_exceeded",
      };
    }
    return messages;
  }
}
```

## What NOT to do in a processor

- **Expensive I/O on every call.** Processors run on the critical path of every turn. Cache, batch, or use a [hook](../06_hooks-and-capabilities/01_hooks-overview.md) instead.
- **Mutating the input.** Always return a new array/object. Mutation breaks replay.
- **Side effects** like writing files, calling APIs, or emitting metrics. Use hooks for observational side effects.
- **State between calls.** Processors should be stateless. If you need state, put it in `ctx.state`.
- **Logging to stdout.** Use `ctx.log.*` so logs go to the right place.

## Writing other processor types

The pattern is the same for other families. Implement the interface, register it, test it:

### Tool parameter modifier

```ts
export class PathNormalizer implements ToolParameterModifier {
  async modify(call, ctx) {
    if (call.tool.startsWith("codebolt_fs.")) {
      return {
        ...call,
        args: { ...call.args, path: path.resolve(ctx.workspace.root, call.args.path) },
      };
    }
    return call;
  }
}
```

### Response modifier

```ts
export class RemoveThinkingModifier implements ResponseModifier {
  async modify(response) {
    return {
      ...response,
      content: response.content.replace(/<thinking>[\s\S]*?<\/thinking>/g, ""),
    };
  }
}
```

## Publishing a processor

If you want to share a processor across agents or with your team, package it:

- **Same project:** put it in `.codebolt/processors/` and reference it by relative path.
- **Across projects:** publish as an npm package and import it.
- **Bundled with an agent:** include it in the agent's directory and reference it from the manifest.
- **As part of a capability:** bundle it in a capability package.

## See also

- [What are processors](./01_what-are-processors.md)
- [Processor types](./02_processor-types.md)
- [Built-in processors](./03_built-in-processors.md)
- [Hooks](../06_hooks-and-capabilities/01_hooks-overview.md) — when a hook fits better
