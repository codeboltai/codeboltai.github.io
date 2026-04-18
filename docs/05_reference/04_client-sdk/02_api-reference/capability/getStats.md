---
name: getStats
cbbaseinfo:
  description: "Retrieves aggregate statistics about capabilities.

Returns summary metrics about the capability system including
total counts, usage rates, and executor distribution."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<CapabilityStats>"
    description: A promise that resolves to the CapabilityStats object
data:
  name: getStats
  category: capability
  link: getStats.md
---
# getStats

```typescript
client.capability.getStats(): Promise<CapabilityStats>
```

Retrieves aggregate statistics about capabilities.

Returns summary metrics about the capability system including
total counts, usage rates, and executor distribution.

## Parameters

_None_

## Returns

**`Promise<CapabilityStats>`** — A promise that resolves to the CapabilityStats object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.capability.getStats();
```
