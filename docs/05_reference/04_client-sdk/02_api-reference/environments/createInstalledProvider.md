---
name: createInstalledProvider
cbbaseinfo:
  description: "Registers a new installed environment provider.

Creates a provider record from an already-installed provider on the system.
This makes the provider available for environment creation."
cbparameters:
  parameters:
    - name: data
      typeName: CreateInstalledProviderRequest
      description: The provider registration details
      isOptional: false
  returns:
    signatureTypeName: "Promise<InstalledProvider>"
    description: A promise that resolves to the newly created
data:
  name: createInstalledProvider
  category: environments
  link: createInstalledProvider.md
---
# createInstalledProvider

```typescript
client.environments.createInstalledProvider(data: CreateInstalledProviderRequest): Promise<InstalledProvider>
```

Registers a new installed environment provider.

Creates a provider record from an already-installed provider on the system.
This makes the provider available for environment creation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateInstalledProviderRequest` | The provider registration details |

## Returns

**`Promise<InstalledProvider>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.createInstalledProvider(/* CreateInstalledProviderRequest */);
```
