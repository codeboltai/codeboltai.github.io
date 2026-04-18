---
name: unregister
cbbaseinfo:
  description: "Unregister this plugin's provider."
cbparameters:
  parameters:
    - name: providerId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<LlmProviderResponse>"
    description: ""
data:
  name: unregister
  category: llmProvider
  link: unregister.md
---
# unregister

```typescript
plugin.llmProvider.unregister(providerId: string): Promise<LlmProviderResponse>
```

Unregister this plugin's provider.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `providerId` | `string` |  |

## Returns

**`Promise<LlmProviderResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.llmProvider.unregister('providerId');
```
