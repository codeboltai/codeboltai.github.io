---
title: createThreadInBackground
---

# `createThreadInBackground`

```typescript
plugin.thread.createThreadInBackground(options: object): Promise<object | object>
```

Creates a thread in the background and resolves when the agent starts or fails.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread creation and start parameters |

## Returns

`Promise<object | object>` — A promise that resolves with ThreadAgentStarted or ThreadAgentStartFailed response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.createThreadInBackground(/* object */);
console.log(result);
```
