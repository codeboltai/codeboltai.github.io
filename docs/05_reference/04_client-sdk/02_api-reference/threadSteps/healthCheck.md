---
name: healthCheck
cbbaseinfo:
  description: Health check for thread step service
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<HealthCheckResponse>"
    description: ""
data:
  name: healthCheck
  category: threadSteps
  link: healthCheck.md
---
# healthCheck

```typescript
client.threadSteps.healthCheck(): Promise<HealthCheckResponse>
```

Health check for thread step service

## Parameters

_None_

## Returns

**`Promise<HealthCheckResponse>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threadSteps.healthCheck();
```
