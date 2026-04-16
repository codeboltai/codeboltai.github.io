---
sidebar_position: 5
title: Packaging and Publishing Plugins
---

# Packaging and Publishing Plugins

Plugins are normal packages with a `package.json`, a compiled entry point, and a `codebolt.plugin` manifest block. Codebolt also exposes CLI commands to create, publish, and list plugins.

## Create a plugin

The CLI surface in [`packages/cli/src/actions/plugin.ts`](D:/Codeboltapps/CodeBolt/packages/cli/src/actions/plugin.ts) currently supports:

```bash
codebolt plugin create --name my-plugin --path ./plugins
```

Supported options include:

- `--name`
- `--path`
- `--project`
- `--template`
- `--id`
- `--description`
- `--skip-install`

That gives you a plugin scaffold from a template. After that, you implement your runtime using [`@codebolt/plugin-sdk`](D:/Codeboltapps/CodeBolt/packages/pluginSdk).

## Package structure

A practical plugin package needs at least:

```text
my-plugin/
  package.json
  src/
    index.ts
  dist/
    index.js
```

A typical `package.json` looks like this:

```json
{
  "name": "@acme/my-plugin",
  "version": "1.0.0",
  "description": "Example Codebolt plugin",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc"
  },
  "codebolt": {
    "plugin": {
      "type": "channel",
      "triggers": [
        { "type": "startup" }
      ]
    }
  },
  "dependencies": {
    "@codebolt/plugin-sdk": "*"
  }
}
```

## Local development loop

A practical local workflow is:

1. scaffold the plugin with `codebolt plugin create`
2. implement `src/index.ts` using `plugin.onStart()` and the plugin SDK modules you need
3. build the plugin so `main` points to a real compiled file
4. load it through Codebolt so the server discovers the package and starts it

The server-side discovery logic currently looks in bundled, global, and project plugin directories and starts plugins as child processes when their triggers fire.

## Publish a plugin

The CLI supports publishing directly:

```bash
codebolt plugin publish --path ./plugins/my-plugin
```

The same action file also supports listing published plugins:

```bash
codebolt plugin list
```

Those commands are defined in [`plugin.ts`](D:/Codeboltapps/CodeBolt/packages/cli/src/actions/plugin.ts).

## What must be true before publish

At minimum, make sure:

- `package.json` includes a valid `codebolt.plugin` block
- `main` points at the compiled runtime entry file
- your plugin builds successfully
- the plugin starts cleanly under Codebolt and handles `onStart()` without crashing
- any required environment variables or provider credentials are documented

## Packaging guidance by plugin type

- **Gateway plugins** should document their external platform credentials and thread strategy.
- **Execution plugins** should document what requests they claim and the response shapes they return.
- **LLM provider plugins** should document provider IDs, supported models, and user config fields.
- **UI-oriented plugins** should document how they open dynamic panels and how the panel frontend communicates back.

## Existing examples to study

The most useful packaging references in the repo are:

- [`cloud-plugin/package.json`](D:/Codeboltapps/CodeBolt/packages/plugins/cloud-plugin/package.json)
- [`custom-llm-plugin/package.json`](D:/Codeboltapps/CodeBolt/packages/plugins/custom-llm-plugin/package.json)
- [`remote-execution-plugin/package.json`](D:/Codeboltapps/CodeBolt/packages/plugins/remote-execution-plugin/package.json)
- [`test-execution-plugin/package.json`](D:/Codeboltapps/CodeBolt/packages/plugins/test-execution-plugin/package.json)

These show the real manifest fields currently used by the system.

## Common mistakes

- using `@codebolt/client-sdk` instead of `@codebolt/plugin-sdk`
- forgetting to build `dist/index.js` before trying to load the plugin
- omitting the `codebolt.plugin` block in `package.json`
- assuming plugins are only for hooks, when the real surface is much broader
- returning the wrong response shape from an execution plugin
- registering a custom LLM provider but not handling streaming or completion requests correctly

## See also

- [Plugins Overview](./01_overview.md)
- [Plugin SDK and lifecycle](./02_sdk-and-lifecycle.md)
- [Gateway, execution, and LLM providers](./04_major-patterns.md)
