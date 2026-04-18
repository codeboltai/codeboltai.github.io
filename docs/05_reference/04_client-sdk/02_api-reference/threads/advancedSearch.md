---
name: advancedSearch
cbbaseinfo:
  description: "Performs an advanced search for threads based on multiple criteria.

Allows complex queries with filtering, sorting, and pagination to find
threads matching specific conditions. Use this for flexible thread discovery
and management operations."
cbparameters:
  parameters:
    - name: data
      typeName: ThreadSearchRequest
      description: The search request containing filter and query parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<Thread[]>"
    description: A promise that resolves to an array of matching Thread objects
data:
  name: advancedSearch
  category: threads
  link: advancedSearch.md
---
# advancedSearch

```typescript
client.threads.advancedSearch(data: ThreadSearchRequest): Promise<Thread[]>
```

Performs an advanced search for threads based on multiple criteria.

Allows complex queries with filtering, sorting, and pagination to find
threads matching specific conditions. Use this for flexible thread discovery
and management operations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ThreadSearchRequest` | The search request containing filter and query parameters |

## Returns

**`Promise<Thread[]>`** — A promise that resolves to an array of matching Thread objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.advancedSearch(/* ThreadSearchRequest */);
```
