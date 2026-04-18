---
name: checkOverlap
cbbaseinfo:
  description: "Checks for overlapping file update intents.

Evaluates whether proposed file operations would conflict with existing
intents from other agents or processes. Returns detailed conflict information
to help resolve concurrent modification issues."
cbparameters:
  parameters:
    - name: data
      typeName: CheckOverlapRequest
      description: Request containing overlap check parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<CheckOverlapResult>"
    description: A promise that resolves to overlap detection results
data:
  name: checkOverlap
  category: fileUpdateIntents
  link: checkOverlap.md
---
# checkOverlap

```typescript
client.fileUpdateIntents.checkOverlap(data: CheckOverlapRequest): Promise<CheckOverlapResult>
```

Checks for overlapping file update intents.

Evaluates whether proposed file operations would conflict with existing
intents from other agents or processes. Returns detailed conflict information
to help resolve concurrent modification issues.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckOverlapRequest` | Request containing overlap check parameters |

## Returns

**`Promise<CheckOverlapResult>`** — A promise that resolves to overlap detection results

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.checkOverlap(/* CheckOverlapRequest */);
```
