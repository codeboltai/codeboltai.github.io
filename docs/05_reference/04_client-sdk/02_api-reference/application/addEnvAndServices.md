---
name: addEnvAndServices
cbbaseinfo:
  description: "Triggers the addition of environment variables and services.

Initiates the process of detecting and adding environment variables
and service configurations to the current workspace."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the operation is complete
data:
  name: addEnvAndServices
  category: application
  link: addEnvAndServices.md
---
# addEnvAndServices

```typescript
client.application.addEnvAndServices(): Promise<void>
```

Triggers the addition of environment variables and services.

Initiates the process of detecting and adding environment variables
and service configurations to the current workspace.

## Parameters

_None_

## Returns

**`Promise<void>`** — A promise that resolves when the operation is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.addEnvAndServices();
```
