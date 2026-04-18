---
title: logs
---

# `logs`

```typescript
plugin.git.logs(path: string): Promise<GitLogsResponse>
```

Retrieves the commit logs for the local repository at the given path.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The file system path of the local Git repository. |

## Returns

`Promise<GitLogsResponse>` — A promise that resolves with the response from the logs event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.logs('path');
console.log(result);
```
