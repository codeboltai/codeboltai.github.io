---
name: refresh
cbbaseinfo:
  description: "Refreshes the capability registry.

Forces a re-scan and reload of all registered capabilities, picking
up any newly added or modified capability definitions."
cbparameters:
  parameters:
    - name: data
      typeName: Record<string, unknown>
      description: Optional configuration for the refresh operation
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the refresh is complete
data:
  name: refresh
  category: capability
  link: refresh.md
---
# refresh

```typescript
client.capability.refresh(data?: Record<string, unknown>): Promise<unknown>
```

Refreshes the capability registry.

Forces a re-scan and reload of all registered capabilities, picking
up any newly added or modified capability definitions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `Record<string, unknown>` _(optional)_ | Optional configuration for the refresh operation |

## Returns

**`Promise<unknown>`** — A promise that resolves when the refresh is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.capability.refresh();
```
