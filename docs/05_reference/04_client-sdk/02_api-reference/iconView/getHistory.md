---
name: getHistory
cbbaseinfo:
  description: "Retrieves the icon view history for a specific conversation thread.

Returns a chronologically ordered list of history entries representing
the actions and messages that occurred within the thread."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the conversation thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<IconViewHistoryEntry[]>"
    description: A promise that resolves to an array of  objects
data:
  name: getHistory
  category: iconView
  link: getHistory.md
---
# getHistory

```typescript
client.iconView.getHistory(threadId: string): Promise<IconViewHistoryEntry[]>
```

Retrieves the icon view history for a specific conversation thread.

Returns a chronologically ordered list of history entries representing
the actions and messages that occurred within the thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the conversation thread |

## Returns

**`Promise<IconViewHistoryEntry[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.iconView.getHistory('threadId');
```
