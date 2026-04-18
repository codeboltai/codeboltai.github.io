---
name: getStatistics
cbbaseinfo:
  description: "Retrieves statistics about threads in the system.

Returns aggregated metrics including total thread counts, status distributions,
and other statistical data. Use this to gain insights into thread activity
and system performance."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ThreadStatistics>"
    description: A promise that resolves to ThreadStatistics containing various metrics
data:
  name: getStatistics
  category: threadsApi
  link: getStatistics.md
---
# getStatistics

```typescript
plugin.threadsApi.getStatistics(): Promise<ThreadStatistics>
```

Retrieves statistics about threads in the system.

Returns aggregated metrics including total thread counts, status distributions,
and other statistical data. Use this to gain insights into thread activity
and system performance.

## Parameters

_None_

## Returns

**`Promise<ThreadStatistics>`** — A promise that resolves to ThreadStatistics containing various metrics

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.threadsApi.getStatistics();
```
