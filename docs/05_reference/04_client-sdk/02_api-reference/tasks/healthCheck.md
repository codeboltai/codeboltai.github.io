---
name: healthCheck
cbbaseinfo:
  description: "Performs a health check on the task service.

Verifies that the task management service is operational and responding.
Use this to monitor service availability or for health monitoring in
production environments."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves to an object containing the service status
data:
  name: healthCheck
  category: tasks
  link: healthCheck.md
---
# healthCheck

```typescript
client.tasks.healthCheck(): Promise<object>
```

Performs a health check on the task service.

Verifies that the task management service is operational and responding.
Use this to monitor service availability or for health monitoring in
production environments.

## Parameters

_None_

## Returns

**`Promise<object>`** — A promise that resolves to an object containing the service status

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.tasks.healthCheck();
```
