---
name: batchHistory
cbbaseinfo:
  description: "Retrieves icon view history for multiple threads in a single request.

More efficient than calling  individually for each
thread when you need history for several threads at once."
cbparameters:
  parameters:
    - name: data
      typeName: BatchIconViewHistoryRequest
      description: Request containing the list of thread IDs to fetch history for
      isOptional: false
  returns:
    signatureTypeName: "Promise<Record<string, IconViewHistoryEntry[]>>"
    description: A promise that resolves to a record mapping thread IDs to their  arrays
data:
  name: batchHistory
  category: iconView
  link: batchHistory.md
---
# batchHistory

```typescript
client.iconView.batchHistory(data: BatchIconViewHistoryRequest): Promise<Record<string, IconViewHistoryEntry[]>>
```

Retrieves icon view history for multiple threads in a single request.

More efficient than calling  individually for each
thread when you need history for several threads at once.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BatchIconViewHistoryRequest` | Request containing the list of thread IDs to fetch history for |

## Returns

**`Promise<Record<string, IconViewHistoryEntry[]>>`** — A promise that resolves to a record mapping thread IDs to their  arrays

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.iconView.batchHistory(/* BatchIconViewHistoryRequest */);
```
