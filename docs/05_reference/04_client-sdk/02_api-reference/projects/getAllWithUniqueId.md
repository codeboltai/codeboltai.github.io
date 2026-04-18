---
name: getAllWithUniqueId
cbbaseinfo:
  description: "Retrieves all projects with their unique identifiers.

Returns the complete list of projects matching the request criteria, each with a
guaranteed unique ID for cross-referencing."
cbparameters:
  parameters:
    - name: data
      typeName: GetAllProjectsRequest
      description: The request specifying which projects to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<Project[]>"
    description: A promise that resolves to an array of projects with unique IDs
data:
  name: getAllWithUniqueId
  category: projects
  link: getAllWithUniqueId.md
---
# getAllWithUniqueId

```typescript
client.projects.getAllWithUniqueId(data: GetAllProjectsRequest): Promise<Project[]>
```

Retrieves all projects with their unique identifiers.

Returns the complete list of projects matching the request criteria, each with a
guaranteed unique ID for cross-referencing.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GetAllProjectsRequest` | The request specifying which projects to retrieve |

## Returns

**`Promise<Project[]>`** — A promise that resolves to an array of projects with unique IDs

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getAllWithUniqueId(/* GetAllProjectsRequest */);
```
