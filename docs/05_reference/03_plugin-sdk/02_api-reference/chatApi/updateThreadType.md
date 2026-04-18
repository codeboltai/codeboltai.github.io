---
name: updateThreadType
cbbaseinfo:
  description: "Updates the type of a chat thread.

Changes the thread's type classification, which can affect routing,
display, and agent behavior."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateThreadTypeRequest
      description: The type update payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the type has been updated
data:
  name: updateThreadType
  category: chatApi
  link: updateThreadType.md
---
# updateThreadType

```typescript
plugin.chatApi.updateThreadType(data: UpdateThreadTypeRequest): Promise<void>
```

Updates the type of a chat thread.

Changes the thread's type classification, which can affect routing,
display, and agent behavior.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateThreadTypeRequest` | The type update payload |

## Returns

**`Promise<void>`** — A promise that resolves when the type has been updated

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.updateThreadType(/* UpdateThreadTypeRequest */);
```
