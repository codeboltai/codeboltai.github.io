---
sidebar_position: 5
title: Build your first custom UI
description: Create a standalone web interface that talks to Codebolt in ~15 minutes using the Client SDK.
---

# Build your first custom UI

Create a standalone web interface that talks to Codebolt in ~15 minutes using the Client SDK.

**You'll need:** Codebolt installed and running, Node.js 18+, a package manager (npm/yarn/pnpm).

## What we're building

A minimal **task dashboard** that connects to Codebolt, lists tasks for the current project, and streams real-time updates over WebSocket. By the end you'll have:

1. A working project that imports `@codebolt/client-sdk`.
2. HTTP API calls to fetch data.
3. A WebSocket subscription for live updates.

## Step 1: Start the Codebolt backend

Run Codebolt in server-only mode so your custom UI can connect to it:

```bash
codebolt --server
```

By default this listens on `localhost:12345`.

## Step 2: Scaffold a project

```bash
mkdir my-codebolt-ui && cd my-codebolt-ui
npm init -y
npm install @codebolt/client-sdk
```

If you're using TypeScript (recommended):

```bash
npm install -D typescript tsx
npx tsc --init
```

## Step 3: Connect the client

Create `src/index.ts`:

```typescript
import { CodeBoltClient, ConnectionPreset } from '@codebolt/client-sdk';

const client = new CodeBoltClient({
  host: 'localhost',
  port: 12345,
  defaultPreset: ConnectionPreset.MINIMAL,
});

async function main() {
  // Fetch tasks for the current project
  const tasks = await client.tasks.getForCurrentProject();
  console.log('Tasks:', tasks);

  // Fetch project info
  const project = await client.projects.getRoot();
  console.log('Project:', project);

  // Clean up
  await client.disconnectAll();
}

main().catch(console.error);
```

Run it:

```bash
npx tsx src/index.ts
```

You should see task and project data printed to the console.

## Step 4: Add real-time updates

Extend the script to listen for task changes over WebSocket:

```typescript
import { CodeBoltClient, ConnectionPreset } from '@codebolt/client-sdk';

const client = new CodeBoltClient({
  host: 'localhost',
  port: 12345,
  defaultPreset: ConnectionPreset.STANDARD,
});

async function main() {
  // Fetch initial data
  const tasks = await client.tasks.getForCurrentProject();
  console.log(`Loaded ${tasks.length} tasks`);

  // Subscribe to task socket for live updates
  client.sockets.tasks.on('taskUpdated', (data) => {
    console.log('Task updated:', data);
  });

  // Subscribe to chat socket for new messages
  client.sockets.chat.on('message', (data) => {
    console.log('Chat message:', data);
  });

  // Listen to all events (useful for debugging)
  client.onAllEvents((event) => {
    console.log(`[${event.socketName}] ${event.eventType}`);
  });

  console.log('Listening for updates... (Ctrl+C to stop)');
}

main().catch(console.error);
```

## Step 5: Add error handling

Use the SDK's typed errors for robust error handling:

```typescript
import {
  CodeBoltClient,
  CodeBoltApiError,
  CodeBoltConnectionError,
} from '@codebolt/client-sdk';

const client = new CodeBoltClient({ host: 'localhost', port: 12345 });

try {
  const tasks = await client.tasks.search({ status: 'pending' });
} catch (err) {
  if (err instanceof CodeBoltConnectionError) {
    console.error('Cannot reach Codebolt server — is it running?');
  } else if (err instanceof CodeBoltApiError) {
    console.error(`API error ${err.status}: ${err.message}`);
  } else {
    throw err;
  }
}
```

## Step 6: Build a web UI (optional)

Wrap the SDK in any web framework. Here's a minimal React example:

```typescript
// hooks/useCodebolt.ts
import { useEffect, useRef } from 'react';
import { CodeBoltClient } from '@codebolt/client-sdk';

export function useCodebolt() {
  const clientRef = useRef<CodeBoltClient>();

  if (!clientRef.current) {
    clientRef.current = new CodeBoltClient({
      host: 'localhost',
      port: 12345,
    });
  }

  useEffect(() => {
    return () => {
      clientRef.current?.disconnectAll();
    };
  }, []);

  return clientRef.current;
}
```

```typescript
// components/TaskList.tsx
import { useEffect, useState } from 'react';
import { useCodebolt } from '../hooks/useCodebolt';

export function TaskList() {
  const client = useCodebolt();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    client.tasks.getForCurrentProject().then(setTasks);

    client.sockets.tasks.on('taskUpdated', () => {
      client.tasks.getForCurrentProject().then(setTasks);
    });
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title} — {task.status}</li>
      ))}
    </ul>
  );
}
```

## What you learned

- **Start the backend** with `codebolt --server` — the SDK connects to it over HTTP and WebSocket.
- **HTTP API modules** (`client.tasks`, `client.projects`, etc.) handle request/response calls.
- **WebSocket modules** (`client.sockets.tasks`, `client.sockets.chat`, etc.) provide real-time event streams.
- **Connection presets** control how many sockets open — use `MINIMAL` for lightweight scripts, `STANDARD` for UIs that need live updates.
- **Typed errors** let you handle connection failures and API errors gracefully.

## Where to next

- **Add more API modules** — see the full [Client SDK reference](../../04_build-on-codebolt/04_custom-uis/02_client-sdk.md) for all 72 HTTP and 34 WebSocket modules.
- **Embed a chat widget** — see [Chat Widget](../../04_build-on-codebolt/04_custom-uis/04_chat-widget.md) for a drop-in React chat component.
- **Add a panel inside the existing app** — see [Dynamic Panels](../../04_build-on-codebolt/04_custom-uis/05_dynamic-panels.md).

## See also

- [Client SDK Reference](../../04_build-on-codebolt/04_custom-uis/02_client-sdk.md)
- [Custom Interfaces Overview](../../04_build-on-codebolt/04_custom-uis/01_overview.md)
- [Existing UIs](../../04_build-on-codebolt/04_custom-uis/03_existing-uis.md)
