---
name: list
cbbaseinfo:
  description: "Lists all threads with optional filtering.

Returns threads matching the provided query parameters, allowing you to
filter and paginate through the thread collection. Use this to browse
threads or find specific sets of threads based on criteria."
cbparameters:
  parameters:
    - name: params
      typeName: ThreadListParams
      description: Optional query parameters for filtering threads
      isOptional: true
  returns:
    signatureTypeName: "Promise<Thread[]>"
    description: A promise that resolves to an array of Thread objects
data:
  name: list
  category: threads
  link: list.md
---
# list

```typescript
client.threads.list(params?: ThreadListParams): Promise<Thread[]>
```

Lists all threads with optional filtering.

Returns threads matching the provided query parameters, allowing you to
filter and paginate through the thread collection. Use this to browse
threads or find specific sets of threads based on criteria.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ThreadListParams` _(optional)_ | Optional query parameters for filtering threads |

## Returns

**`Promise<Thread[]>`** — A promise that resolves to an array of Thread objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.list();
```
