---
cbapicategory:
  - name: createSuite
    link: /docs/api/apiaccess/autotesting/createSuite
    description: Creates a new test suite for organizing test cases.
  - name: getSuite
    link: /docs/api/apiaccess/autotesting/getSuite
    description: Retrieves details of a specific test suite including its test cases.
  - name: listSuites
    link: /docs/api/apiaccess/autotesting/listSuites
    description: Lists all available test suites.
  - name: updateSuite
    link: /docs/api/apiaccess/autotesting/updateSuite
    description: "Updates an existing test suite's name, description, or test case assignments."
  - name: deleteSuite
    link: /docs/api/apiaccess/autotesting/deleteSuite
    description: Deletes a test suite and all its associations.
  - name: addCaseToSuite
    link: /docs/api/apiaccess/autotesting/addCaseToSuite
    description: Adds a test case to a test suite.
  - name: removeCaseFromSuite
    link: /docs/api/apiaccess/autotesting/removeCaseFromSuite
    description: Removes a test case from a test suite.
  - name: createCase
    link: /docs/api/apiaccess/autotesting/createCase
    description: Creates a new test case with steps, labels, and priority.
  - name: getCase
    link: /docs/api/apiaccess/autotesting/getCase
    description: Retrieves details of a specific test case.
  - name: listCases
    link: /docs/api/apiaccess/autotesting/listCases
    description: Lists all available test cases.
  - name: updateCase
    link: /docs/api/apiaccess/autotesting/updateCase
    description: "Updates an existing test case's properties or steps."
  - name: deleteCase
    link: /docs/api/apiaccess/autotesting/deleteCase
    description: Deletes a test case.
  - name: createRun
    link: /docs/api/apiaccess/autotesting/createRun
    description: Creates a new test run from a test suite.
  - name: getRun
    link: /docs/api/apiaccess/autotesting/getRun
    description: Retrieves details of a specific test run including case results.
  - name: listRuns
    link: /docs/api/apiaccess/autotesting/listRuns
    description: Lists test runs, optionally filtered by suite.
  - name: updateRunStatus
    link: /docs/api/apiaccess/autotesting/updateRunStatus
    description: Updates the overall status of a test run.
  - name: updateRunCaseStatus
    link: /docs/api/apiaccess/autotesting/updateRunCaseStatus
    description: Updates the status of a specific test case within a run.
  - name: updateRunStepStatus
    link: /docs/api/apiaccess/autotesting/updateRunStepStatus
    description: Updates the status of a specific test step within a run.
---

# AutoTesting API

The AutoTesting API provides comprehensive functionality for managing automated testing workflows, including test suites, test cases, and test runs. It enables structured testing with detailed execution tracking.

## Overview

The AutoTesting module enables you to:
- **Organize Tests**: Create test suites to group related test cases
- **Define Tests**: Create detailed test cases with multiple steps
- **Execute Tests**: Run test suites and track execution progress
- **Track Results**: Monitor test run status and results at case and step levels
- **Manage Workflows**: Add/remove cases from suites, update statuses

## Key Concepts

### Test Suites
Collections of test cases that are executed together. Suites help organize tests by feature, module, or testing type.

### Test Cases
Individual tests with multiple steps. Each case has a name, description, priority, and ordered steps to execute.

### Test Runs
Executions of test suites. Runs track the status of each test case and step as they execute.

### Status Values
- **Pending**: Not yet started
- **Running**: Currently executing
- **Passed**: Completed successfully
- **Failed**: Completed with errors
- **Skipped**: Intentionally not executed

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Initialize connection
await codebolt.waitForReady();

// Create a test suite
const suite = await codebolt.autoTesting.createSuite({
  name: 'User Authentication Tests',
  description: 'Tests for user login and registration'
});

// Create test cases
const case1 = await codebolt.autoTesting.createCase({
  key: 'AUTH-001',
  name: 'Valid Login',
  description: 'Test user can login with valid credentials',
  steps: [
    { content: 'Navigate to login page', order: 1 },
    { content: 'Enter valid username', order: 2 },
    { content: 'Enter valid password', order: 3 },
    { content: 'Click login button', order: 4 },
    { content: 'Verify redirect to dashboard', order: 5 }
  ],
  priority: 'high',
  labels: ['authentication', 'smoke']
});

const case2 = await codebolt.autoTesting.createCase({
  key: 'AUTH-002',
  name: 'Invalid Login',
  description: 'Test login fails with invalid credentials',
  steps: [
    { content: 'Navigate to login page', order: 1 },
    { content: 'Enter invalid username', order: 2 },
    { content: 'Enter invalid password', order: 3 },
    { content: 'Click login button', order: 4 },
    { content: 'Verify error message displayed', order: 5 }
  ],
  priority: 'high',
  labels: ['authentication']
});

// Add cases to suite
await codebolt.autoTesting.addCaseToSuite({
  suiteId: suite.payload.suite.id,
  caseId: case1.payload.testCase.id
});

await codebolt.autoTesting.addCaseToSuite({
  suiteId: suite.payload.suite.id,
  caseId: case2.payload.testCase.id
});

// Create a test run
const run = await codebolt.autoTesting.createRun({
  testSuiteId: suite.payload.suite.id,
  name: 'Nightly Authentication Test Run'
});

console.log('Test run created:', run.payload.run.id);

// Update run status
await codebolt.autoTesting.updateRunStatus({
  runId: run.payload.run.id,
  status: 'running'
});

// Update individual case status
await codebolt.autoTesting.updateRunCaseStatus({
  runId: run.payload.run.id,
  caseId: case1.payload.testCase.id,
  status: 'passed'
});
```

## Common Use Cases

### 1. Creating Test Suites

```typescript
const suite = await codebolt.autoTesting.createSuite({
  name: 'API Integration Tests',
  description: 'Tests for API endpoints',
  testCaseIds: ['case-1', 'case-2', 'case-3']
});
```

### 2. Running Test Suites

```typescript
// Create run
const run = await codebolt.autoTesting.createRun({
  testSuiteId: 'suite-123',
  name: 'Daily Test Run'
});

// Monitor execution
const status = await codebolt.autoTesting.getRun({ id: run.payload.run.id });
console.log('Run status:', status.payload.run.status);
```

### 3. Tracking Test Results

```typescript
// Update case status
await codebolt.autoTesting.updateRunCaseStatus({
  runId: 'run-123',
  caseId: 'case-456',
  status: 'failed',
  userOverride: true
});

// Update step status
await codebolt.autoTesting.updateRunStepStatus({
  runId: 'run-123',
  caseId: 'case-456',
  stepId: 'step-789',
  status: 'failed',
  logs: 'Expected 200 but got 500'
});
```

### 4. Organizing Tests

```typescript
// Add case to suite
await codebolt.autoTesting.addCaseToSuite({
  suiteId: 'suite-123',
  caseId: 'case-456'
});

// Remove case from suite
await codebolt.autoTesting.removeCaseFromSuite({
  suiteId: 'suite-123',
  caseId: 'case-456'
});
```

<CBAPICategory />
