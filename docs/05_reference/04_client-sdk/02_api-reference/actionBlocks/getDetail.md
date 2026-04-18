---
name: getDetail
cbbaseinfo:
  description: "Retrieves detailed information for a specific action block.

Returns the full configuration, metadata, and current state of the
action block identified by the given identifier string."
cbparameters:
  parameters:
    - name: identifier
      typeName: string
      description: The unique identifier or name of the action block
      isOptional: false
  returns:
    signatureTypeName: "Promise<ActionBlockDetail>"
    description: A promise that resolves to the detailed ActionBlockDetail object
data:
  name: getDetail
  category: actionBlocks
  link: getDetail.md
---
# getDetail

```typescript
client.actionBlocks.getDetail(identifier: string): Promise<ActionBlockDetail>
```

Retrieves detailed information for a specific action block.

Returns the full configuration, metadata, and current state of the
action block identified by the given identifier string.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `identifier` | `string` | The unique identifier or name of the action block |

## Returns

**`Promise<ActionBlockDetail>`** — A promise that resolves to the detailed ActionBlockDetail object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionBlocks.getDetail('identifier');
```
