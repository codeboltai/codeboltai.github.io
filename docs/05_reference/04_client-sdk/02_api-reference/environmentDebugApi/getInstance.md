---
name: getInstance
cbbaseinfo:
  description: "Retrieves a specific environment debug instance by its ID.

Returns the full detail of a single environment instance including
its current state, provider information, and metadata."
cbparameters:
  parameters:
    - name: environmentId
      typeName: string
      description: The unique identifier of the environment instance
      isOptional: false
  returns:
    signatureTypeName: "Promise<EnvironmentDebugInstance>"
    description: A promise that resolves to the
data:
  name: getInstance
  category: environmentDebugApi
  link: getInstance.md
---
# getInstance

```typescript
client.environmentDebugApi.getInstance(environmentId: string): Promise<EnvironmentDebugInstance>
```

Retrieves a specific environment debug instance by its ID.

Returns the full detail of a single environment instance including
its current state, provider information, and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `environmentId` | `string` | The unique identifier of the environment instance |

## Returns

**`Promise<EnvironmentDebugInstance>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environmentDebugApi.getInstance('environmentId');
```
