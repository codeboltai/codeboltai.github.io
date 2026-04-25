---
sidebar_position: 3
title: Level 2 Separate App with Local Server
---

import CustomUIArchitecture from '@site/src/components/diagrams/CustomUIArchitecture';

# Level 2: Separate Application with a Local Codebolt Server

Level 2 is the standalone local model.

Your application runs outside Codebolt as its own frontend, frontend-plus-backend application, or backend script, and connects to a local Codebolt server.

## Core shape

Typical Level 2 architecture:

- A local Codebolt server runs, commonly on `localhost:12345`
- Your application connects to Codebolt over HTTP and WebSockets
- Your application owns the product shell, routing, auth, and business logic
- Codebolt provides the agent, workspace, task, memory, and runtime layer behind the app

<CustomUIArchitecture />

## Common forms

Level 2 can be:

- A Vite or React frontend
- A Next.js application with frontend and backend
- A Node.js or backend-only script
- A standalone app that can later also be embedded as a plugin UI

## How it works

1. Start a local Codebolt server.
2. Connect your application to the server over REST and WebSockets.
3. Use Codebolt APIs and sockets for agents, threads, tasks, files, jobs, and memory.
4. Keep your own application responsible for product-specific UI and orchestration.

## SDK choice

### Use the Client SDK

The Client SDK is the default choice for most Level 2 applications.

Use it when:

- The app behaves like an external client of Codebolt
- You want typed REST APIs and realtime sockets
- You are building a normal standalone frontend or application against the local server

### Use the Plugin SDK

Use the Plugin SDK in Level 2 when:

- Plugin-style lifecycle or plugin-oriented capabilities are still important
- You want code sharing between embedded and standalone modes
- The standalone app may later be packaged back into Codebolt

## Practical pattern

A useful pattern is:

1. Build the application as a standalone app first.
2. Connect it to the local Codebolt server.
3. If needed later, package the built frontend into a plugin UI for Level 1.

This lets the same application support both standalone and embedded deployment styles.

## When to use Level 2

- You want a branded or product-specific app outside the Codebolt shell
- You want full control over application routing and deployment
- You still want the local Codebolt server to provide the agent/runtime substrate

## Tradeoffs

Advantages:

- Maximum flexibility for the application shell and frontend architecture
- Clean separation between your app and Codebolt itself
- Good fit for custom products, internal tools, and external dashboards

Limits:

- Requires a local Codebolt server to be available
- You own more of the application integration surface yourself

## Related docs

- [Client SDK](../../04_build-on-codebolt/04_custom-uis/02_client-sdk.md)
- [Custom Interfaces Overview](../../04_build-on-codebolt/04_custom-uis/01_overview.md)
- [Choosing the Right Architecture](./05_choosing-the-right-architecture.md)
