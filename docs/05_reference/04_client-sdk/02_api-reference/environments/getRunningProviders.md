---
name: getRunningProviders
cbbaseinfo:
  description: "Retrieves all currently running environment providers.

Returns only providers that are actively running and available to serve
environment requests."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<InstalledProvider[]>"
    description: A promise that resolves to an array of running  objects
data:
  name: getRunningProviders
  category: environments
  link: getRunningProviders.md
---
# getRunningProviders

```typescript
client.environments.getRunningProviders(): Promise<InstalledProvider[]>
```

Retrieves all currently running environment providers.

Returns only providers that are actively running and available to serve
environment requests.

## Parameters

_None_

## Returns

**`Promise<InstalledProvider[]>`** — A promise that resolves to an array of running  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.getRunningProviders();
```
