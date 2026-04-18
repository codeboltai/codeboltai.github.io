---
name: createRun
cbbaseinfo:
  description: "Creates a new test run.

Initiates an execution of one or more test suites or cases,
tracking the results as they complete."
cbparameters:
  parameters:
    - name: data
      typeName: CreateTestRunRequest
      description: The test run creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<TestRun>"
    description: A promise that resolves to the newly created TestRun
data:
  name: createRun
  category: autoTesting
  link: createRun.md
---
# createRun

```typescript
client.autoTesting.createRun(data: CreateTestRunRequest): Promise<TestRun>
```

Creates a new test run.

Initiates an execution of one or more test suites or cases,
tracking the results as they complete.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTestRunRequest` | The test run creation payload |

## Returns

**`Promise<TestRun>`** — A promise that resolves to the newly created TestRun

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.autoTesting.createRun(/* CreateTestRunRequest */);
```
