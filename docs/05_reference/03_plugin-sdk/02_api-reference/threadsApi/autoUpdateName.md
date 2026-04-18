---
name: autoUpdateName
cbbaseinfo:
  description: "Automatically updates a thread's name based on its content.

Analyzes the thread's execution history, messages, and context to generate
an appropriate name that reflects its purpose and activity. This is useful
for maintaining descriptive thread labels without manual intervention."
cbparameters:
  parameters:
    - name: data
      typeName: AutoUpdateNameRequest
      description: The request containing the thread ID to rename
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread name has been updated
data:
  name: autoUpdateName
  category: threadsApi
  link: autoUpdateName.md
---
# autoUpdateName

```typescript
plugin.threadsApi.autoUpdateName(data: AutoUpdateNameRequest): Promise<void>
```

Automatically updates a thread's name based on its content.

Analyzes the thread's execution history, messages, and context to generate
an appropriate name that reflects its purpose and activity. This is useful
for maintaining descriptive thread labels without manual intervention.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AutoUpdateNameRequest` | The request containing the thread ID to rename |

## Returns

**`Promise<void>`** — A promise that resolves when the thread name has been updated

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.threadsApi.autoUpdateName(/* AutoUpdateNameRequest */);
```
