---
name: getStats
cbbaseinfo:
  description: "Retrieves theme statistics and metrics.

Returns aggregated data about themes including counts, usage statistics,
and other analytical information useful for monitoring and reporting."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ThemeStats>"
    description: A promise that resolves to a ThemeStats object containing metrics
data:
  name: getStats
  category: themes
  link: getStats.md
---
# getStats

```typescript
client.themes.getStats(): Promise<ThemeStats>
```

Retrieves theme statistics and metrics.

Returns aggregated data about themes including counts, usage statistics,
and other analytical information useful for monitoring and reporting.

## Parameters

_None_

## Returns

**`Promise<ThemeStats>`** — A promise that resolves to a ThemeStats object containing metrics

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.getStats();
```
