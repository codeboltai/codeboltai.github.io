---
name: installProvider
cbbaseinfo:
  description: "Installs a new environment provider from a remote source.

Downloads and registers a provider, making it available for creating
environments. Use this when the provider is not yet present locally."
cbparameters:
  parameters:
    - name: data
      typeName: InstallProviderRequest
      description: Installation parameters including provider source and configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<InstalledProvider>"
    description: A promise that resolves to the newly installed
data:
  name: installProvider
  category: environments
  link: installProvider.md
---
# installProvider

```typescript
client.environments.installProvider(data: InstallProviderRequest): Promise<InstalledProvider>
```

Installs a new environment provider from a remote source.

Downloads and registers a provider, making it available for creating
environments. Use this when the provider is not yet present locally.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InstallProviderRequest` | Installation parameters including provider source and configuration |

## Returns

**`Promise<InstalledProvider>`** — A promise that resolves to the newly installed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.installProvider(/* InstallProviderRequest */);
```
