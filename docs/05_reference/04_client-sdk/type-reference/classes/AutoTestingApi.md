---
title: AutoTestingApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: AutoTestingApi

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:11

Provides methods for managing automated testing in the CodeBolt runtime.

This API supports the full automated testing lifecycle including test suites,
test cases, and test runs. Suites organize related cases, cases define individual
test scenarios, and runs track the execution and results of those tests.

## Constructors

### Constructor

```ts
new AutoTestingApi(http: HttpClient): AutoTestingApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`AutoTestingApi`

## Methods

### addCaseToSuite()

```ts
addCaseToSuite(suiteId: string, data: AddTestCaseToSuiteRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:113

Adds a test case to a test suite.

Associates an existing test case with the specified suite, making
it part of the suite's execution set.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `suiteId` | `string` | The unique identifier of the test suite |
| `data` | `AddTestCaseToSuiteRequest` | The test case association payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the case has been added to the suite

#### Example

```typescript
await client.autoTesting.addCaseToSuite('suite-1', {
  caseId: 'case-abc'
});
```

***

### createCase()

```ts
createCase(data: CreateTestCaseRequest): Promise<TestCase>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:168

Creates a new test case.

Defines an individual test scenario with steps, expected outcomes,
and validation criteria.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateTestCaseRequest` | The test case creation payload |

#### Returns

`Promise`\<`TestCase`\>

A promise that resolves to the newly created TestCase

#### Example

```typescript
const testCase = await client.autoTesting.createCase({
  name: 'Login with valid credentials',
  steps: [{ action: 'navigate', target: '/login' }]
});
```

***

### createRun()

```ts
createRun(data: CreateTestRunRequest): Promise<TestRun>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:247

Creates a new test run.

Initiates an execution of one or more test suites or cases,
tracking the results as they complete.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateTestRunRequest` | The test run creation payload |

#### Returns

`Promise`\<`TestRun`\>

A promise that resolves to the newly created TestRun

#### Example

```typescript
const run = await client.autoTesting.createRun({
  suiteId: 'suite-1'
});
console.log(`Test run started: ${run.id}`);
```

***

### createSuite()

```ts
createSuite(data: CreateTestSuiteRequest): Promise<TestSuite>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:51

Creates a new test suite.

Defines a new collection of test cases that can be executed together.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateTestSuiteRequest` | The test suite creation payload |

#### Returns

`Promise`\<`TestSuite`\>

A promise that resolves to the newly created TestSuite

#### Example

```typescript
const suite = await client.autoTesting.createSuite({
  name: 'Auth Tests',
  description: 'Tests for the authentication module'
});
```

***

### deleteCase()

```ts
deleteCase(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:206

Deletes a test case.

Permanently removes the specified test case from the system.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the test case to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the test case has been deleted

***

### deleteSuite()

```ts
deleteSuite(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:91

Deletes a test suite.

Permanently removes the specified test suite. This does not delete
the test cases themselves, only their association with the suite.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the test suite to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the suite has been deleted

***

### getCase()

```ts
getCase(id: string): Promise<TestCase>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:181

Retrieves a specific test case by ID.

Returns the full test case definition including its steps,
expected results, and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the test case |

#### Returns

`Promise`\<`TestCase`\>

A promise that resolves to the TestCase object

***

### getRun()

```ts
getRun(id: string): Promise<TestRun>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:260

Retrieves a specific test run by ID.

Returns the full test run record including per-case results,
timing, and overall status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the test run |

#### Returns

`Promise`\<`TestRun`\>

A promise that resolves to the TestRun object

***

### getSuite()

```ts
getSuite(id: string): Promise<TestSuite>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:64

Retrieves a specific test suite by ID.

Returns the full suite definition including its metadata and
associated test case references.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the test suite |

#### Returns

`Promise`\<`TestSuite`\>

A promise that resolves to the TestSuite object

***

### listCases()

```ts
listCases(params?: Record<string, unknown>): Promise<TestCase[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:145

Retrieves all test cases.

Returns every test case in the system, regardless of suite membership.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`TestCase`[]\>

A promise that resolves to an array of TestCase objects

#### Example

```typescript
const cases = await client.autoTesting.listCases();
console.log(`Total test cases: ${cases.length}`);
```

***

### listRuns()

```ts
listRuns(params?: Record<string, unknown>): Promise<TestRun[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:225

Retrieves all test runs.

Returns the history of test run executions, including their status,
results, and timing information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`TestRun`[]\>

A promise that resolves to an array of TestRun objects

#### Example

```typescript
const runs = await client.autoTesting.listRuns();
const passed = runs.filter(r => r.status === 'passed');
```

***

### listSuites()

```ts
listSuites(params?: Record<string, unknown>): Promise<TestSuite[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:29

Retrieves all test suites.

Returns the complete list of test suites, which are collections of
related test cases grouped for organized execution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`TestSuite`[]\>

A promise that resolves to an array of TestSuite objects

#### Example

```typescript
const suites = await client.autoTesting.listSuites();
suites.forEach(s => console.log(s.name, s.caseCount));
```

***

### patchRunCase()

```ts
patchRunCase(
   runId: string, 
   caseId: string, 
data: PatchTestRunCaseRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:295

Patches a specific test case result within a test run.

Updates the status or outcome of an individual test case within
an active test run, allowing incremental result reporting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `runId` | `string` | The unique identifier of the test run |
| `caseId` | `string` | The unique identifier of the test case within the run |
| `data` | `PatchTestRunCaseRequest` | The patch data to apply to the case result |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the patch has been applied

#### Example

```typescript
await client.autoTesting.patchRunCase('run-1', 'case-abc', {
  status: 'passed'
});
```

***

### patchRunCaseStep()

```ts
patchRunCaseStep(
   runId: string, 
   caseId: string, 
   stepId: string, 
data: PatchTestRunCaseStepRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:311

Patches a specific step result within a test case of a test run.

Updates the status or outcome of an individual step within a
test case, providing granular progress tracking.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `runId` | `string` | The unique identifier of the test run |
| `caseId` | `string` | The unique identifier of the test case |
| `stepId` | `string` | The unique identifier of the step within the case |
| `data` | `PatchTestRunCaseStepRequest` | The patch data to apply to the step result |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the patch has been applied

***

### removeCaseFromSuite()

```ts
removeCaseFromSuite(suiteId: string, caseId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:127

Removes a test case from a test suite.

Disassociates a test case from the specified suite without deleting
the test case itself.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `suiteId` | `string` | The unique identifier of the test suite |
| `caseId` | `string` | The unique identifier of the test case to remove |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the case has been removed from the suite

***

### updateCase()

```ts
updateCase(id: string, data: UpdateTestCaseRequest): Promise<TestCase>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:194

Updates a test case.

Modifies the steps, name, or other properties of an existing test case.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the test case to update |
| `data` | `UpdateTestCaseRequest` | The fields to update on the test case |

#### Returns

`Promise`\<`TestCase`\>

A promise that resolves to the updated TestCase

***

### updateRun()

```ts
updateRun(id: string, data: UpdateTestRunRequest): Promise<TestRun>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:273

Updates a test run.

Modifies the status or metadata of an in-progress or completed test run.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the test run to update |
| `data` | `UpdateTestRunRequest` | The fields to update on the test run |

#### Returns

`Promise`\<`TestRun`\>

A promise that resolves to the updated TestRun

***

### updateSuite()

```ts
updateSuite(id: string, data: UpdateTestSuiteRequest): Promise<TestSuite>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/auto-testing.api.ts:78

Updates a test suite.

Modifies the name, description, or other properties of an
existing test suite.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the test suite to update |
| `data` | `UpdateTestSuiteRequest` | The fields to update on the suite |

#### Returns

`Promise`\<`TestSuite`\>

A promise that resolves to the updated TestSuite
