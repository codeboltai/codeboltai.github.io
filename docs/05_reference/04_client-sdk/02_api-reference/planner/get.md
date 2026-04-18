---
name: get
cbbaseinfo:
  description: "Retrieves the planner overview with aggregated status information.

Returns a high-level summary of the planner state including total tasks, completion
statistics, and agent utilization. Use this for dashboard views and progress monitoring."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<PlannerOverview>"
    description: A promise that resolves to the planner overview data
data:
  name: get
  category: planner
  link: get.md
---
# get

```typescript
client.planner.get(): Promise<PlannerOverview>
```

Retrieves the planner overview with aggregated status information.

Returns a high-level summary of the planner state including total tasks, completion
statistics, and agent utilization. Use this for dashboard views and progress monitoring.

## Parameters

_None_

## Returns

**`Promise<PlannerOverview>`** — A promise that resolves to the planner overview data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.planner.get();
```
