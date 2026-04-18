---
name: execute
cbbaseinfo:
  description: "Executes a thread with optional configuration parameters.

Starts or resumes execution of the specified thread. You can provide
additional execution parameters to customize the run. The thread will
process its configured tasks and operations."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to execute
      isOptional: false
    - name: data
      typeName: ExecuteThreadRequest
      description: Optional execution configuration parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<Thread>"
    description: A promise that resolves to the updated Thread object
data:
  name: execute
  category: threadsApi
  link: execute.md
---
# execute

```typescript
plugin.threadsApi.execute(threadId: string, data?: ExecuteThreadRequest): Promise<Thread>
```

Executes a thread with optional configuration parameters.

Starts or resumes execution of the specified thread. You can provide
additional execution parameters to customize the run. The thread will
process its configured tasks and operations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to execute |
| `data` | `ExecuteThreadRequest` _(optional)_ | Optional execution configuration parameters |

## Returns

**`Promise<Thread>`** — A promise that resolves to the updated Thread object

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.threadsApi.execute('threadId');
```
