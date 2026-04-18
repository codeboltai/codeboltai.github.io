---
name: getStatistics
cbbaseinfo:
  description: "Retrieves aggregate statistics about review-merge requests.

Returns counts and metrics across all review states, useful for monitoring review
throughput and identifying bottlenecks in the review process."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ReviewMergeStatistics>"
    description: A promise that resolves to a ReviewMergeStatistics object with aggregate data
data:
  name: getStatistics
  category: reviewMerge
  link: getStatistics.md
---
# getStatistics

```typescript
client.reviewMerge.getStatistics(): Promise<ReviewMergeStatistics>
```

Retrieves aggregate statistics about review-merge requests.

Returns counts and metrics across all review states, useful for monitoring review
throughput and identifying bottlenecks in the review process.

## Parameters

_None_

## Returns

**`Promise<ReviewMergeStatistics>`** — A promise that resolves to a ReviewMergeStatistics object with aggregate data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.getStatistics();
```
