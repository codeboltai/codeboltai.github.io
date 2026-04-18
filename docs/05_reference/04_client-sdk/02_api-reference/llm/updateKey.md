---
name: updateKey
cbbaseinfo:
  description: "Updates the API key for a specific LLM provider.

Sets or rotates the authentication key used to communicate with an LLM provider's API.
The key is stored securely and used for all subsequent requests to that provider."
cbparameters:
  parameters:
    - name: data
      typeName: LLMUpdateKeyRequest
      description: The key update request
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the key has been updated
data:
  name: updateKey
  category: llm
  link: updateKey.md
---
# updateKey

```typescript
client.llm.updateKey(data: LLMUpdateKeyRequest): Promise<unknown>
```

Updates the API key for a specific LLM provider.

Sets or rotates the authentication key used to communicate with an LLM provider's API.
The key is stored securely and used for all subsequent requests to that provider.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `LLMUpdateKeyRequest` | The key update request |

## Returns

**`Promise<unknown>`** — A promise that resolves when the key has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.updateKey(/* LLMUpdateKeyRequest */);
```
