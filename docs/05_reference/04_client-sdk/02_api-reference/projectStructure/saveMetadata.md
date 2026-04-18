---
name: saveMetadata
cbbaseinfo:
  description: "Saves the complete workspace metadata, replacing any existing structure.

Persists a full workspace metadata object. This is a wholesale replacement operation;
use the individual package endpoints for targeted updates."
cbparameters:
  parameters:
    - name: data
      typeName: SaveWorkspaceMetadataRequest
      description: The complete workspace metadata to save
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the metadata has been saved
data:
  name: saveMetadata
  category: projectStructure
  link: saveMetadata.md
---
# saveMetadata

```typescript
client.projectStructure.saveMetadata(data: SaveWorkspaceMetadataRequest): Promise<void>
```

Saves the complete workspace metadata, replacing any existing structure.

Persists a full workspace metadata object. This is a wholesale replacement operation;
use the individual package endpoints for targeted updates.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SaveWorkspaceMetadataRequest` | The complete workspace metadata to save |

## Returns

**`Promise<void>`** — A promise that resolves when the metadata has been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projectStructure.saveMetadata(/* SaveWorkspaceMetadataRequest */);
```
