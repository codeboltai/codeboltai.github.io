---
name: deleteFeature
cbbaseinfo:
  description: "Deletes a feature from the roadmap.

Permanently removes a feature. This action cannot be undone."
cbparameters:
  parameters:
    - name: featureId
      typeName: string
      description: The unique identifier of the feature to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the feature has been deleted
data:
  name: deleteFeature
  category: roadmap
  link: deleteFeature.md
---
# deleteFeature

```typescript
client.roadmap.deleteFeature(featureId: string): Promise<unknown>
```

Deletes a feature from the roadmap.

Permanently removes a feature. This action cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `featureId` | `string` | The unique identifier of the feature to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the feature has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.deleteFeature('featureId');
```
