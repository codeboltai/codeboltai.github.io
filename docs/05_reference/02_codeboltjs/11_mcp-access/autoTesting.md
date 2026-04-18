---
title: AutoTesting MCP
sidebar_label: codebolt.autotesting
sidebar_position: 71
---

# codebolt.autotesting

Automated test management tools for creating, managing, and executing test suites, test cases, and test runs.

## Available Tools

### Suite Management Tools

- `autotesting_create_suite` - Creates a new test suite with the specified name and optional description
- `autotesting_get_suite` - Retrieves a test suite by its ID, including its associated test cases
- `autotesting_list_suites` - Lists all available test suites with their names, descriptions, and test case counts
- `autotesting_update_suite` - Updates an existing test suite with new name, description, or test case associations
- `autotesting_delete_suite` - Permanently deletes a test suite by its ID
- `autotesting_add_case_to_suite` - Adds a test case to an existing test suite
- `autotesting_remove_case_from_suite` - Removes a test case from a test suite

### Case Management Tools

- `autotesting_create_case` - Creates a new test case with the specified key, name, steps, and optional metadata
- `autotesting_get_case` - Retrieves a test case by its ID, including all steps and metadata
- `autotesting_list_cases` - Lists all available test cases with their keys, names, priorities, and step counts
- `autotesting_update_case` - Updates an existing test case with new key, name, description, steps, labels, priority, or type
- `autotesting_delete_case` - Permanently deletes a test case by its ID

### Run Management Tools

- `autotesting_create_run` - Creates a new test run for a specified test suite
- `autotesting_get_run` - Retrieves a test run by its ID, including status, test case results, and summary statistics
- `autotesting_list_runs` - Lists all test runs, optionally filtered by suite ID
- `autotesting_update_run_status` - Updates the status of a test run (pending, running, completed, or cancelled)
- `autotesting_update_run_case` - Updates the status of a specific test case within a run
- `autotesting_update_run_step` - Updates the status of a specific test step within a run

## Tool Parameters

### `autotesting_create_suite`

Creates a new test suite with the specified name and optional description. Test suites are used to group related test cases together.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the test suite to create. |
| description | string | No | Optional description of the test suite. |
| testCaseIds | array | No | Optional array of test case IDs to include in the suite. |

### `autotesting_get_suite`

Retrieves a test suite by its ID, including its associated test cases.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the test suite to retrieve. |

### `autotesting_list_suites`

Lists all available test suites with their names, descriptions, and test case counts.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

### `autotesting_update_suite`

Updates an existing test suite with new name, description, or test case associations.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the test suite to update. |
| name | string | No | Optional new name for the test suite. |
| description | string | No | Optional new description for the test suite. |
| testCaseIds | array | No | Optional new array of test case IDs to associate with the suite. |

### `autotesting_delete_suite`

Permanently deletes a test suite by its ID. This action cannot be undone.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the test suite to delete. |

### `autotesting_add_case_to_suite`

Adds an existing test case to a test suite.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| suiteId | string | Yes | The ID of the test suite to add the case to. |
| caseId | string | Yes | The ID of the test case to add. |

### `autotesting_remove_case_from_suite`

Removes a test case from a test suite.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| suiteId | string | Yes | The ID of the test suite to remove the case from. |
| caseId | string | Yes | The ID of the test case to remove. |

### `autotesting_create_case`

Creates a new test case with the specified key, name, steps, and optional metadata. Test cases define individual tests that can be added to test suites.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| key | string | Yes | Unique key identifier for the test case (e.g., "TC-001"). |
| name | string | Yes | The name of the test case. |
| description | string | No | Optional description of what the test case validates. |
| steps | array | Yes | Array of test steps, each with content and optional order. |
| labels | array | No | Optional labels for categorization. |
| priority | string | No | Optional priority level: low, medium, high, or automated. |
| type | string | No | Optional test type (e.g., "functional", "regression"). |

### `autotesting_get_case`

Retrieves a test case by its ID, including all steps and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the test case to retrieve. |

### `autotesting_list_cases`

Lists all available test cases with their keys, names, priorities, and step counts.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

### `autotesting_update_case`

Updates an existing test case with new key, name, description, steps, labels, priority, or type.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the test case to update. |
| key | string | No | Optional new key for the test case. |
| name | string | No | Optional new name for the test case. |
| description | string | No | Optional new description for the test case. |
| steps | array | No | Optional new array of steps. |
| labels | array | No | Optional new labels for categorization. |
| priority | string | No | Optional new priority level: low, medium, high, or automated. |
| type | string | No | Optional new test type. |

### `autotesting_delete_case`

Permanently deletes a test case by its ID. This action cannot be undone.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the test case to delete. |

### `autotesting_create_run`

Creates a new test run for a specified test suite. A test run tracks the execution and results of all test cases in the suite.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| testSuiteId | string | Yes | The ID of the test suite to create a run for. |
| name | string | No | Optional name for the test run (e.g., "Sprint 1 Regression"). |

### `autotesting_get_run`

Retrieves a test run by its ID, including status, test case results, and summary statistics.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the test run to retrieve. |

### `autotesting_list_runs`

Lists all test runs, optionally filtered by suite ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| suiteId | string | No | Optional suite ID to filter runs by. |

### `autotesting_update_run_status`

Updates the status of a test run. Use this to mark a run as running, completed, or cancelled.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| runId | string | Yes | The ID of the test run to update. |
| status | string | Yes | The new status for the test run: pending, running, completed, or cancelled. |

### `autotesting_update_run_case`

Updates the status of a specific test case within a test run.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| runId | string | Yes | The ID of the test run. |
| caseId | string | Yes | The ID of the test case to update. |
| status | string | Yes | The new status for the test case: pending, running, passed, failed, or skipped. |
| userOverride | boolean | No | Whether this is a user override. |

### `autotesting_update_run_step`

Updates the status of a specific test step within a test case run.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| runId | string | Yes | The ID of the test run. |
| caseId | string | Yes | The ID of the test case. |
| stepId | string | Yes | The ID of the test step to update. |
| status | string | Yes | The new status for the test step: pending, running, passed, failed, or skipped. |
| logs | string | No | Logs for the test step. |
| userOverride | boolean | No | Whether this is a user override. |

## Sample Usage

### Create a Test Suite

```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_create_suite",
  {
    name: "Authentication Tests",
    description: "Tests for user authentication flows",
    testCaseIds: []
  }
);
```

### Create a Test Case

```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_create_case",
  {
    key: "TC-001",
    name: "User Login Test",
    description: "Validates user login functionality",
    steps: [
      { content: "Navigate to login page", order: 1 },
      { content: "Enter valid credentials", order: 2 },
      { content: "Click login button", order: 3 },
      { content: "Verify dashboard is displayed", order: 4 }
    ],
    priority: "high",
    labels: ["authentication", "smoke"],
    type: "functional"
  }
);
```

### Add Case to Suite and Create Test Run

```javascript
// Add case to suite
const addResult = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_add_case_to_suite",
  {
    suiteId: "suite-123",
    caseId: "case-456"
  }
);

// Create a test run
const runResult = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_create_run",
  {
    testSuiteId: "suite-123",
    name: "Sprint 1 Regression"
  }
);
```

### Manage Test Run Status

```javascript
// Update test run status
const statusResult = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_update_run_status",
  {
    runId: "run-789",
    status: "running"
  }
);

// Update individual test case status
const caseResult = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_update_run_case",
  {
    runId: "run-789",
    caseId: "case-456",
    status: "passed",
    userOverride: false
  }
);
```

### Update Test Step with Logs

```javascript
const stepResult = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_update_run_step",
  {
    runId: "run-789",
    caseId: "case-456",
    stepId: "step-101",
    status: "passed",
    logs: "Successfully validated user credentials",
    userOverride: false
  }
);
```

### List and Query Test Resources

```javascript
// List all test suites
const suitesResult = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_list_suites",
  {}
);

// List all test cases
const casesResult = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_list_cases",
  {}
);

// List test runs for a specific suite
const runsResult = await codebolt.tools.executeTool(
  "codebolt.autotesting",
  "autotesting_list_runs",
  {
    suiteId: "suite-123"
  }
);
```

:::info Test Status Values

**Test Run Status:**
- `pending` - Test run is waiting to start
- `running` - Test run is currently executing
- `completed` - Test run has finished execution
- `cancelled` - Test run was cancelled before completion

**Test Case/Step Status:**
- `pending` - Test case or step is waiting to run
- `running` - Test case or step is currently executing
- `passed` - Test case or step completed successfully
- `failed` - Test case or step failed during execution
- `skipped` - Test case or step was skipped
:::
