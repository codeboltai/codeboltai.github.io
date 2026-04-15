---
sidebar_position: 2
title: Client SDK
---

# Client SDK

The main entry point for a separate custom UI is [`@codebolt/client-sdk`](D:/Codeboltapps/CodeBolt/packages/clientsdk/package.json), implemented in [packages/clientsdk](D:/Codeboltapps/CodeBolt/packages/clientsdk).

It is a typed TypeScript client for Codebolt HTTP routes and WebSocket channels.

## Backend Shape

The normal setup is:

1. Run [packages/cli](D:/Codeboltapps/CodeBolt/packages/cli) in server-only mode.
2. Let it host the backend from [packages/server](D:/Codeboltapps/CodeBolt/packages/server).
3. Connect your UI to that backend through `@codebolt/client-sdk`.

```bash
codebolt --server
```

## What It Gives You

The SDK exposes:

- chat streams
- agent control
- file and project access
- memory and context queries
- flow and swarm control
- notifications and telemetry

Its README also documents a large set of REST modules and socket modules, so it is the right starting point when you want a full custom application rather than a single embedded widget.

## When To Use It

- you want to own the whole application shell
- your UI runs outside the built-in app
- you need your own branding, routing, layout, or device-specific UX

## See also

- [Existing UIs](./03_existing-uis.md)
- [Chat Widget](./04_chat-widget.md)
- [Internals → Communication](../09_internals/03_subsystems/11_communication.md)
