---
name: register
cbbaseinfo:
  description: "Register this plugin as a custom LLM provider on the server.
After registration, the provider appears in the provider list and
can be selected by users like any built-in provider."
cbparameters:
  parameters:
    - name: manifest
      typeName: LlmProviderManifest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<LlmProviderRegisterResponse>"
    description: ""
data:
  name: register
  category: llmProvider
  link: register.md
---
# register

```typescript
plugin.llmProvider.register(manifest: LlmProviderManifest): Promise<LlmProviderRegisterResponse>
```

Register this plugin as a custom LLM provider on the server.
After registration, the provider appears in the provider list and
can be selected by users like any built-in provider.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `manifest` | `LlmProviderManifest` |  |

## Returns

**`Promise<LlmProviderRegisterResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.llmProvider.register(/* LlmProviderManifest */);
```
