---
name: getRunningInstances
cbbaseinfo:
  description: "Retrieves all currently running environment instances.

Returns only instances that are in an active/running state, which is
useful for monitoring dashboards and health checks."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<EnvironmentDebugInstance[]>"
    description: A promise that resolves to an array of running  objects
data:
  name: getRunningInstances
  category: environmentDebugApi
  link: getRunningInstances.md
---
# getRunningInstances

```typescript
client.environmentDebugApi.getRunningInstances(): Promise<EnvironmentDebugInstance[]>
```

Retrieves all currently running environment instances.

Returns only instances that are in an active/running state, which is
useful for monitoring dashboards and health checks.

## Parameters

_None_

## Returns

**`Promise<EnvironmentDebugInstance[]>`** — A promise that resolves to an array of running  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environmentDebugApi.getRunningInstances();
```
