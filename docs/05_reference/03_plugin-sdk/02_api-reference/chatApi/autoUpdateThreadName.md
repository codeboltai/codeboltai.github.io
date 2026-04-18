---
name: autoUpdateThreadName
cbbaseinfo:
  description: "Automatically generates and updates the thread name based on content.

Uses the user's message or conversation context to generate a
descriptive name for the thread, replacing any existing name."
cbparameters:
  parameters:
    - name: data
      typeName: AutoUpdateThreadNameRequest
      description: The auto-update request
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the name has been auto-updated
data:
  name: autoUpdateThreadName
  category: chatApi
  link: autoUpdateThreadName.md
---
# autoUpdateThreadName

```typescript
plugin.chatApi.autoUpdateThreadName(data: AutoUpdateThreadNameRequest): Promise<void>
```

Automatically generates and updates the thread name based on content.

Uses the user's message or conversation context to generate a
descriptive name for the thread, replacing any existing name.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AutoUpdateThreadNameRequest` | The auto-update request |

## Returns

**`Promise<void>`** — A promise that resolves when the name has been auto-updated

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chatApi.autoUpdateThreadName(/* AutoUpdateThreadNameRequest */);
```
