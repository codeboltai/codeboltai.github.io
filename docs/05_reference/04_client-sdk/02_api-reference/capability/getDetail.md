---
name: getDetail
cbbaseinfo:
  description: "Retrieves detailed information for a specific capability.

Returns the full definition of a capability including its
configuration, executors, and usage documentation."
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The unique name of the capability
      isOptional: false
  returns:
    signatureTypeName: "Promise<Capability>"
    description: A promise that resolves to the Capability object
data:
  name: getDetail
  category: capability
  link: getDetail.md
---
# getDetail

```typescript
client.capability.getDetail(name: string): Promise<Capability>
```

Retrieves detailed information for a specific capability.

Returns the full definition of a capability including its
configuration, executors, and usage documentation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The unique name of the capability |

## Returns

**`Promise<Capability>`** — A promise that resolves to the Capability object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.capability.getDetail('name');
```
