---
name: getEnvAndServices
cbbaseinfo:
  description: "Retrieves environment variables and service configurations.

Returns the environment variables and external service connection
details configured for the current workspace."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<EnvAndServices>"
    description: A promise that resolves to the EnvAndServices object
data:
  name: getEnvAndServices
  category: application
  link: getEnvAndServices.md
---
# getEnvAndServices

```typescript
client.application.getEnvAndServices(): Promise<EnvAndServices>
```

Retrieves environment variables and service configurations.

Returns the environment variables and external service connection
details configured for the current workspace.

## Parameters

_None_

## Returns

**`Promise<EnvAndServices>`** — A promise that resolves to the EnvAndServices object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.getEnvAndServices();
```
