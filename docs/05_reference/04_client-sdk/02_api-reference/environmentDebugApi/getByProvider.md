---
name: getByProvider
cbbaseinfo:
  description: "Retrieves environment instances associated with a specific provider.

Filters instances by the provider that created or manages them, useful
for diagnosing issues with a particular environment provider."
cbparameters:
  parameters:
    - name: providerId
      typeName: string
      description: The unique identifier of the environment provider
      isOptional: false
  returns:
    signatureTypeName: "Promise<EnvironmentDebugInstance[]>"
    description: A promise that resolves to an array of  objects for the given provider
data:
  name: getByProvider
  category: environmentDebugApi
  link: getByProvider.md
---
# getByProvider

```typescript
client.environmentDebugApi.getByProvider(providerId: string): Promise<EnvironmentDebugInstance[]>
```

Retrieves environment instances associated with a specific provider.

Filters instances by the provider that created or manages them, useful
for diagnosing issues with a particular environment provider.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `providerId` | `string` | The unique identifier of the environment provider |

## Returns

**`Promise<EnvironmentDebugInstance[]>`** — A promise that resolves to an array of  objects for the given provider

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environmentDebugApi.getByProvider('providerId');
```
