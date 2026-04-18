---
name: getThreadInfo
cbbaseinfo:
  description: "Retrieves detailed information about a specific thread.

Returns comprehensive metadata and status information for the specified
thread, including its configuration, current state, and related attributes."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadInfo>"
    description: A promise that resolves to ThreadInfo containing thread details
data:
  name: getThreadInfo
  category: threadsApi
  link: getThreadInfo.md
---
# getThreadInfo

```typescript
plugin.threadsApi.getThreadInfo(threadId: string): Promise<ThreadInfo>
```

Retrieves detailed information about a specific thread.

Returns comprehensive metadata and status information for the specified
thread, including its configuration, current state, and related attributes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to retrieve |

## Returns

**`Promise<ThreadInfo>`** — A promise that resolves to ThreadInfo containing thread details

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.threadsApi.getThreadInfo('threadId');
```
