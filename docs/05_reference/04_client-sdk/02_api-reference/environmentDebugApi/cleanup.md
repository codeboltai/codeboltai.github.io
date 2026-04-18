---
name: cleanup
cbbaseinfo:
  description: "Cleans up stale or orphaned environment instances.

Removes environment instances that are no longer active or have been
orphaned due to provider failures. This is a maintenance operation that
should be run periodically to keep the debug index clean."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when cleanup is complete
data:
  name: cleanup
  category: environmentDebugApi
  link: cleanup.md
---
# cleanup

```typescript
client.environmentDebugApi.cleanup(): Promise<unknown>
```

Cleans up stale or orphaned environment instances.

Removes environment instances that are no longer active or have been
orphaned due to provider failures. This is a maintenance operation that
should be run periodically to keep the debug index clean.

## Parameters

_None_

## Returns

**`Promise<unknown>`** — A promise that resolves when cleanup is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environmentDebugApi.cleanup();
```
