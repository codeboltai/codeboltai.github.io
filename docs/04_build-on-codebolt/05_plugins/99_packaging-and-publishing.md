---
sidebar_position: 99
title: Packaging and Publishing Plugins
---

# Packaging and Publishing Plugins

Plugins are normal npm packages with a `package.json`, a compiled entry point, and a `codebolt.plugin` manifest block.

## Create a Plugin

### Via CLI

```bash
codebolt plugin create --name my-plugin --path ./plugins
```

Supported options:

| Option | Description |
|--------|-------------|
| `--name` | Plugin name |
| `--path` | Target directory |
| `--project` | Associate with project |
| `--template` | Template to scaffold from |
| `--id` | Unique plugin ID |
| `--description` | Plugin description |
| `--skip-install` | Skip npm install |

### Manual Setup

```
my-plugin/
├── package.json
├── tsconfig.json
├── src/
│   └── index.ts
├── ui/                       # Optional: UI panel
│   └── default/
│       └── index.html
└── dist/
    └── index.js              # Compiled entry point
```

## Package Structure

### Minimal `package.json`

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "My CodeBolt plugin",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  },
  "codebolt": {
    "plugin": {
      "type": "channel",
      "triggers": [
        { "type": "manual" }
      ],
      "ui": {
        "path": "./ui/default/index.html"
      }
    }
  },
  "dependencies": {
    "@codebolt/plugin-sdk": "*"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

### Minimal `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"]
}
```

For ES modules, set `"type": "module"` in `package.json` and use `"module": "ESNext"` in tsconfig. The server auto-detects ESM and adds `--experimental-specifier-resolution=node`.

## Local Development Loop

1. **Scaffold** the plugin with `codebolt plugin create` or manual setup
2. **Implement** `src/index.ts` using `plugin.onStart()` and SDK modules
3. **Build** the plugin: `npm run build`
4. **Install** to a plugin directory:
   ```bash
   # Per-project (for testing)
   cp -r my-plugin/ /path/to/project/.codeboltPlugins/my-plugin/

   # Or global
   cp -r my-plugin/ ~/.codebolt/plugins/my-plugin/
   ```
5. **Reload** in Plugins panel (click Reload button) or restart CodeBolt
6. **Start** the plugin (click Play button or set startup trigger)
7. **Debug** via the Plugin Debug panel (stdout/stderr streaming)

### Hot reload during development

For faster iteration:
```bash
# Terminal 1: watch & rebuild
cd my-plugin && npm run dev

# The plugin directory is scanned live — after rebuild,
# stop and restart the plugin from the Plugins panel
```

## Publish a Plugin

```bash
codebolt plugin publish --path ./plugins/my-plugin
```

List published plugins:

```bash
codebolt plugin list
```

## Pre-publish Checklist

- `package.json` includes a valid `codebolt.plugin` block
- `main` field points to the compiled runtime entry file
- Plugin builds successfully (`npm run build`)
- Plugin starts cleanly and handles `onStart()` without crashing
- `onStop()` performs proper cleanup (unregister providers, close connections)
- Required environment variables or credentials are documented
- If using UI panels, the HTML file exists at the declared `ui.path`

## Packaging by Plugin Type

### LLM Provider Plugins

- Document `providerId` and supported models
- Document config fields users need to fill in
- If using OAuth: document the auth flow and where tokens are stored
- Handle both `onCompletionRequest` and `onStreamRequest`
- Handle `onLoginRequest` if `requiresKey: false` (OAuth-based)

### Channel Plugins

- Document the external platform setup (bot tokens, webhook URLs)
- Use `kvStore` for configuration persistence (not filesystem)
- Provide a UI panel (`ui.path`) for connection configuration
- Use `manual` trigger (users configure before starting)
- Handle reconnection gracefully on plugin restart
- Document supported thread strategies

### Execution Plugins

- Document what types of requests are intercepted
- Document the response shape returned via `sendReply`
- Explain the remote environment setup
- If using narrative module, document workspace sync behavior
- Use `startup` trigger for always-on execution proxying

### UI Panel Plugins

- Keep panel HTML self-contained or use relative asset paths
- Use `window.codeboltPlugin.sendMessage()` / `onMessage()` for communication
- Document what messages the panel sends/receives

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Using `@codebolt/client-sdk` instead of `@codebolt/plugin-sdk` | Client SDK is for standalone UIs, plugin SDK is for server extensions |
| Forgetting to build `dist/index.js` | Always run `npm run build` before loading |
| Omitting `codebolt.plugin` in package.json | Server won't recognize as a plugin |
| Storing config in filesystem | Use `plugin.kvStore` for persistence |
| Not handling `onStop()` cleanup | Leads to dangling connections, leaked subscriptions |
| Wrong response shape from execution plugin | Match expected `sendReply` format |
| Not normalizing provider IDs | Provider IDs are auto-normalized (lowercase, no spaces) |
| Using `startup` trigger for channel plugins that need config | Use `manual` — auto-load saved config in `onStart` |

## See Also

- [Plugins Overview](./01_overview.md)
- [Plugin SDK and Lifecycle](./02_sdk-and-lifecycle.md)
- [Gateway, Execution, and LLM Providers](./04_major-patterns.md)
