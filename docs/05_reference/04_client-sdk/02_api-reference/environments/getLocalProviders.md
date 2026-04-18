---
name: getLocalProviders
cbbaseinfo:
  description: "Retrieves the list of available local environment providers.

Discovers providers installed on the local machine that can be used
to create new environments. Useful for populating provider selection UIs."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ProviderData[]>"
    description: A promise that resolves to an array of  descriptors
data:
  name: getLocalProviders
  category: environments
  link: getLocalProviders.md
---
# getLocalProviders

```typescript
client.environments.getLocalProviders(): Promise<ProviderData[]>
```

Retrieves the list of available local environment providers.

Discovers providers installed on the local machine that can be used
to create new environments. Useful for populating provider selection UIs.

## Parameters

_None_

## Returns

**`Promise<ProviderData[]>`** — A promise that resolves to an array of  descriptors

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.getLocalProviders();
```
