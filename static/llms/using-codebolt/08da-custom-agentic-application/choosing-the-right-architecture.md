# Choosing the Right Architecture

> The right model depends on two questions:

The right model depends on two questions:

1. Where should the application run?
2. What should it connect to?

## Quick decision guide

Choose [Level 1](./02_level-1-inside-codebolt.md) if:

- The application should live inside Codebolt
- You want plugin-first architecture
- The UI should be a Dynamic Panel or plugin-hosted UI

Choose [Level 2](./03_level-2-separate-app-local-server.md) if:

- The application should be its own standalone product or interface
- You want to connect to a local Codebolt server
- You want full control over frontend and backend architecture

Choose [Level 3](./04_level-3-hosted-runtimes.md) if:

- The application should connect to cloud-hosted Codebolt runtimes
- You do not want to depend on a local server on the user machine
- Runtime provisioning and remote execution are part of the product design

## SDK selection

Use the **Plugin SDK** when:

- The application is embedded in Codebolt
- Plugin lifecycle and plugin-specific extension points matter
- You want plugin-oriented backend logic

Use the **Client SDK** when:

- The application is a standalone external client of Codebolt
- You want typed HTTP and WebSocket access to the server
- You are building a normal custom application against a local Codebolt server

Use **cloud relay / remote runtime transport** when:

- The application talks to hosted runtimes instead of a local server
- Runtime selection, provisioning, and remote lifecycle are core parts of the system

## Recommended path

For most teams:

1. Start by deciding whether the product should be embedded or standalone.
2. If standalone, decide whether local or hosted runtimes are the long-term target.
3. Choose the smallest architecture that fits today.
4. Only add remote runtime infrastructure when the product actually needs hosted execution.

## Related docs

- [Level 1: Inside Codebolt](./02_level-1-inside-codebolt.md)
- [Level 2: Separate App, Local Codebolt Server](./03_level-2-separate-app-local-server.md)
- [Level 3: Hosted Runtimes](./04_level-3-hosted-runtimes.md)
