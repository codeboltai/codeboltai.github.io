---
name: search
cbbaseinfo:
  description: "Searches for tasks using optional query parameters.

Returns tasks that match the specified search criteria. Use this method
to find tasks by various attributes including status, priority, date
ranges, or custom filters. Returns an empty array if no tasks match."
cbparameters:
  parameters:
    - name: params
      typeName: TaskSearchParams
      description: Optional search parameters for filtering and sorting tasks
      isOptional: true
  returns:
    signatureTypeName: "Promise<Task[]>"
    description: A promise that resolves to an array of matching Task objects
data:
  name: search
  category: tasks
  link: search.md
---
# search

```typescript
client.tasks.search(params?: TaskSearchParams): Promise<Task[]>
```

Searches for tasks using optional query parameters.

Returns tasks that match the specified search criteria. Use this method
to find tasks by various attributes including status, priority, date
ranges, or custom filters. Returns an empty array if no tasks match.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TaskSearchParams` _(optional)_ | Optional search parameters for filtering and sorting tasks |

## Returns

**`Promise<Task[]>`** — A promise that resolves to an array of matching Task objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.tasks.search();
```
