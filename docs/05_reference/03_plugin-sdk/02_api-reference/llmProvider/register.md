---
title: register
---

# `register`

```typescript
plugin.llmProvider.register(manifest: LlmProviderManifest): Promise<LlmProviderRegisterResponse>
```

Register this plugin as a custom LLM provider on the server.
After registration, the provider appears in the provider list and
can be selected by users like any built-in provider.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `manifest` | `LlmProviderManifest` | Yes |  |

## Returns

`Promise<LlmProviderRegisterResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llmProvider.register(/* LlmProviderManifest */);
console.log(result);
```
