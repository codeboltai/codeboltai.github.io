---
name: setDefault
cbbaseinfo:
  description: "Sets the default LLM model and provider for the workspace.

Configures which model is used by default when no specific model is requested.
This affects all operations that rely on LLM inference without explicit model selection."
cbparameters:
  parameters:
    - name: data
      typeName: LLMSetDefaultRequest
      description: The default LLM configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the default has been updated
data:
  name: setDefault
  category: llm
  link: setDefault.md
---
# setDefault

```typescript
client.llm.setDefault(data: LLMSetDefaultRequest): Promise<unknown>
```

Sets the default LLM model and provider for the workspace.

Configures which model is used by default when no specific model is requested.
This affects all operations that rely on LLM inference without explicit model selection.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `LLMSetDefaultRequest` | The default LLM configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the default has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.setDefault(/* LLMSetDefaultRequest */);
```
