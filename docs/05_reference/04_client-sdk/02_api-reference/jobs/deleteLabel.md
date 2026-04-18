---
name: deleteLabel
cbbaseinfo:
  description: "Deletes a job label by its name.

Removes the label definition. Jobs that previously had this label
will lose the association."
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The unique name of the label to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteLabel
  category: jobs
  link: deleteLabel.md
---
# deleteLabel

```typescript
client.jobs.deleteLabel(name: string): Promise<void>
```

Deletes a job label by its name.

Removes the label definition. Jobs that previously had this label
will lose the association.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The unique name of the label to delete |

## Returns

**`Promise<void>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.deleteLabel('name');
```
