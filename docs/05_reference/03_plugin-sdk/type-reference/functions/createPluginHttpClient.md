---
title: createPluginHttpClient
---

[**@codebolt/plugin-sdk**](../index)

***

# Function: createPluginHttpClient()

```ts
function createPluginHttpClient(): HttpClient;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/httpClient.ts:73

Creates an HttpClient configured for the current plugin's server connection.
Uses the same env vars that PluginProcessManager sets.

## Returns

[`HttpClient`](../classes/HttpClient)
