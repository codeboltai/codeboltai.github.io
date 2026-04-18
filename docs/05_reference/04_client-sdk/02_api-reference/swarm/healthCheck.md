---
name: healthCheck
cbbaseinfo:
  description: "Health check for swarm service.

Returns service status, useful for monitoring and health dashboards."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves to service status
data:
  name: healthCheck
  category: swarm
  link: healthCheck.md
---
# healthCheck

```typescript
client.swarm.healthCheck(): Promise<object>
```

Health check for swarm service.

Returns service status, useful for monitoring and health dashboards.

## Parameters

_None_

## Returns

**`Promise<object>`** — A promise that resolves to service status

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.healthCheck();
```
