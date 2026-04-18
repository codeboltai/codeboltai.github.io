---
name: getAll
cbbaseinfo:
  description: "Retrieves all review-merge requests, optionally filtered by query parameters.

Returns the complete list of review-merge requests. Use the optional params to filter
by status, date range, or other criteria supported by the server."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering the results
      isOptional: true
  returns:
    signatureTypeName: "Promise<ReviewMergeRequest[]>"
    description: A promise that resolves to an array of ReviewMergeRequest objects
data:
  name: getAll
  category: reviewMerge
  link: getAll.md
---
# getAll

```typescript
client.reviewMerge.getAll(params?: Record<string, unknown>): Promise<ReviewMergeRequest[]>
```

Retrieves all review-merge requests, optionally filtered by query parameters.

Returns the complete list of review-merge requests. Use the optional params to filter
by status, date range, or other criteria supported by the server.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering the results |

## Returns

**`Promise<ReviewMergeRequest[]>`** — A promise that resolves to an array of ReviewMergeRequest objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.getAll();
```
