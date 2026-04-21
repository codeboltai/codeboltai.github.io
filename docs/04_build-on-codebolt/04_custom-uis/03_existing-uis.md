---
sidebar_position: 3
title: Existing UIs
---

# Existing UIs

Codebolt ships with multiple UI surfaces built on the same backend. Study or fork these as starting points for your own interface.

## Packages

| Package | Name | Language | Role |
|---|---|---|---|
| `packages/desktop` | `codebolt` | TypeScript | Electron desktop shell |
| `packages/ui` | `@codebolt/ui` | TypeScript | Shared React component library |
| `packages/web` | `@codebolt/web` | TypeScript | Browser SPA surface |
| `packages/gotui` | `codebolt-tui` | Go | Terminal UI |

### Desktop App — `packages/desktop`

The Electron-based desktop shell that hosts the Codebolt UI.

- **Tech**: Electron, electron-vite, electron-updater, electron-store
- **Entry**: `src/main/index.ts` (main process), `src/preload/index.ts` (preload)
- **Role**: Window management, native OS integration, auto-updates, and local storage. Renders the shared `@codebolt/ui` components inside an Electron window.
- **Build targets**: Windows, macOS, Linux

### Shared UI — `packages/ui`

The core React component library used by both the desktop app and the web surface.

- **Tech**: React 18, Radix UI primitives, Monaco Editor, Zustand, Tailwind CSS, Framer Motion, Lucide icons, React Markdown, React Syntax Highlighter, TanStack Virtual
- **Entry**: `src/index.ts` → exports components, hooks, stores, types
- **Key directories**:
  - `src/components/` — React components (Chat, Editor, Agent panels, etc.)
  - `src/hooks/` — Custom hooks (`useChatSocket`, etc.)
  - `src/stores/` — Zustand state stores
  - `src/pages/` — Page-level components
- **Exports**: All components, hooks, and stores via barrel export. Also exports `dist/index.css` for styles.
- **Chat components** live here — see [Chat Widget](./04_chat-widget.md).

### Web Surface — `packages/web`

A Vite-powered React SPA for browser access.

- **Tech**: React 18, Vite, React Router, Socket.IO client, Tailwind CSS
- **Entry**: `src/main.tsx` → `src/App.tsx`
- **Routing**: `/` → Home, `/:projectSlug` → MainLayout (main project view)
- **Depends on**: `@codebolt/ui` for all shared components
- **Role**: What users see when accessing Codebolt through a browser. Adds routing, socket connection setup, and web-specific layout on top of the shared UI library.

### Terminal UI — `packages/gotui`

A full-featured terminal UI built in Go.

- **Tech**: Go, Bubble Tea (TUI framework), Glamour (Markdown rendering), Lipgloss (styling), Gorilla WebSocket, Chroma (syntax highlighting)
- **Entry**: `main.go`
- **Key files**: `model.go` (main TUI model), `chat.go` (chat view), `message_renderer.go`, `websocket.go`, `sidebar.go`, `input.go`, `settings.go`, `styles.go`
- **Connection**: Reads `CODEBOLT_URL` env var (defaults to `ws://localhost:12345`), connects via WebSocket to the `/gotui` namespace
- **Role**: Chat interaction, settings management, and sidebar navigation entirely within the terminal.

## How They Connect

All UIs connect to the same Codebolt server:

```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ Desktop  │  │   Web    │  │   TUI    │
│ Electron │  │   SPA    │  │    Go    │
└────┬─────┘  └────┬─────┘  └────┬─────┘
     │             │              │
     └──────┬──────┘──────────────┘
            │
   HTTP + WebSocket (Socket.IO)
            │
     ┌──────┴──────┐
     │   Server    │
     │ codebolt    │
     │  --server   │
     └─────────────┘
```

- **Desktop** and **Web** share the `@codebolt/ui` React component library and connect via Socket.IO.
- **TUI** connects directly via raw WebSocket (Gorilla) to a dedicated `/gotui` namespace.
- All three consume the same HTTP REST API and WebSocket events.

## When to Study or Fork These

- You want to understand the product's current UI architecture
- You want a head start instead of starting from scratch
- You want to build a specialized UI while keeping a familiar Codebolt structure
- You're building a different surface (mobile, IDE extension) and want to see how existing ones handle state, routing, and socket connections

If your goal is a completely separate product, inspect these packages first, then design your own client architecture using the [Client SDK](./02_client-sdk.md).

## See Also

- [Client SDK](./02_client-sdk.md) — the typed SDK for building external clients
- [Chat Widget](./04_chat-widget.md) — reusing chat components from `@codebolt/ui`
- [Build your first custom UI](../../03_guides/02_first-steps/build-your-first-custom-ui.md) — hands-on tutorial
