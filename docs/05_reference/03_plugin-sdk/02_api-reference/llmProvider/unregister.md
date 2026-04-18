---
title: unregister
---

# `unregister`

```typescript
plugin.llmProvider.unregister(providerId: string): Promise<LlmProviderResponse>
```

Unregister this plugin's provider.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `providerId` | `string` | Yes |  |

## Returns

`Promise<LlmProviderResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.llmProvider.unregister('providerId');
console.log(result);
```
