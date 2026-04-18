---
name: logs
cbbaseinfo:
  description: Retrieves the commit logs for the local repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
      isOptional: false
  returns:
    signatureTypeName: "Promise<GitLogsResponse>"
    description: A promise that resolves with the response from the logs event.
data:
  name: logs
  category: git
  link: logs.md
---
# logs

```typescript
plugin.git.logs(path: string): Promise<GitLogsResponse>
```

Retrieves the commit logs for the local repository at the given path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | The file system path of the local Git repository. |

## Returns

**`Promise<GitLogsResponse>`** — A promise that resolves with the response from the logs event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.logs('path');
```
