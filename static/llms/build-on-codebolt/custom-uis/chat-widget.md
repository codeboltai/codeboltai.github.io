# Chat Widget

> The chat components live inside the shared @codebolt/ui package (packages/ui)

The chat components live inside the shared `@codebolt/ui` package (`packages/ui`). They are the fastest path when you want a chat interface connected to a running Codebolt server without rebuilding all the message UI yourself.

## What's Available

The `packages/ui/src/components/Chat/` directory exports:

| Component | Description |
|---|---|
| `ChatWidget` | Full-featured chat widget — drop in and go |
| `ChatBox` | Main chat box container |
| `ChatPanel` | Chat panel layout |
| `ChatInput` | Input component with sub-components |
| `ChatMessage` | Message rendering with tool and MCP support |
| `UserChatBubble` | User message bubble |
| `Agent/` | Agent-related chat components |

### Hooks

| Hook | Description |
|---|---|
| `useChatSocket` | WebSocket connection hook for chat — handles message streaming, send/receive, and connection state |

These are exported from `packages/ui/src/hooks/`.

## How to Use

### Option 1: Full Widget

Use `ChatWidget` for the fastest integration. It bundles the input, message list, and socket connection into a single component.

```tsx

function App() {
  return <ChatWidget />;
}
```

### Option 2: Compose Lower-Level Pieces

Recompose the building blocks into your own chat UI while keeping the existing socket and message plumbing.

```tsx

function CustomChat() {
  const { messages, sendMessage, connected } = useChatSocket();

  return (

        {messages.map((msg) => (

        ))}

  );
}
```

## Dependencies

The chat components use:

- **React 18** — components are React functional components
- **Radix UI** — for accessible UI primitives (dialogs, tooltips, etc.)
- **Tailwind CSS** — for styling (import `@codebolt/ui/dist/index.css`)
- **Zustand** — for state management
- **Socket.IO client** — for WebSocket communication
- **React Markdown** + **React Syntax Highlighter** — for rendering code blocks in messages

## When to Use

- You want a custom chat interface in an existing React app
- You want a branded assistant panel quickly
- You want to embed a Codebolt-connected chat surface without building the full client yourself
- You need agent interaction UI without building message rendering from scratch

## Chat Widget vs Client SDK

| Approach | When |
|---|---|
| **Chat Widget** (`@codebolt/ui`) | You're building a React app and want ready-made chat components |
| **Client SDK** (`@codebolt/client-sdk`) | You need full API access, non-chat features, or aren't using React |

You can combine both — use the Client SDK for data operations (tasks, git, files) and the chat components for the conversation UI.

## See Also

- [Client SDK](./02_client-sdk.md) — full API access beyond chat
- [Dynamic Panels](./05_dynamic-panels.md) — embed UI inside the existing app
- [Existing UIs](./03_existing-uis.md) — see how the built-in apps use these components
- [Build your first custom UI](../../03_guides/02_first-steps/build-your-first-custom-ui.md) — hands-on tutorial
