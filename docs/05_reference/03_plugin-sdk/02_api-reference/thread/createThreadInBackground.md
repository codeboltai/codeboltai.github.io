---
name: createThreadInBackground
cbbaseinfo:
  description: Creates a thread in the background and resolves when the agent starts or fails.
cbparameters:
  parameters:
    - name: options
      typeName: object
      description: The thread creation and start parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<object | object>"
    description: A promise that resolves with ThreadAgentStarted or ThreadAgentStartFailed response
data:
  name: createThreadInBackground
  category: thread
  link: createThreadInBackground.md
---
# createThreadInBackground

```typescript
plugin.thread.createThreadInBackground(options: object): Promise<object | object>
```

Creates a thread in the background and resolves when the agent starts or fails.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `object` | The thread creation and start parameters |

## Returns

**`Promise<object | object>`** — A promise that resolves with ThreadAgentStarted or ThreadAgentStartFailed response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.createThreadInBackground(/* object */);
```
