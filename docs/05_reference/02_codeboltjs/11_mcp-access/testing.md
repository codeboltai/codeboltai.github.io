---
title: Testing MCP
sidebar_label: codebolt.testing
sidebar_position: 31
---

# codebolt.testing

Automated test management tools for creating, managing, and executing test suites, test cases, and test runs.

## Available Tools

### Test Suite Tools

- `test_suite_create` - Creates a new test suite with the specified name and optional description
- `test_suite_get` - Retrieves a test suite by its ID, including its associated test cases
- `test_suite_list` - Lists all available test suites with their names, descriptions, and test case counts
- `test_suite_update` - Updates an existing test suite with new name, description, or test case associations
- `test_suite_delete` - Permanently deletes a test suite by its ID

### Test Case Tools

- `test_case_create` - Creates a new test case with the specified key, name, steps, and optional metadata
- `test_case_get` - Retrieves a test case by its ID, including all steps and metadata
- `test_case_list` - Lists all available test cases with their keys, names, priorities, and step counts
- `test_case_update` - Updates an existing test case with new key, name, description, steps, labels, priority, or type

### Test Run Tools

- `test_run_create` - Creates a new test run for a specified test suite
- `test_run_get` - Retrieves a test run by its ID, including status, test case results, and summary statistics
- `test_run_update_status` - Updates the status of a test run (pending, running, completed, or cancelled)

## Tool Parameters

### `test_suite_create`

Creates a new test suite with the specified name and optional description. Test suites are used to group related test cases together.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the test suite to create. |
| description | string | No | Optional description of the test suite. |
| test_case_ids | array | No | Optional array of test case IDs to include in the suite. |

### `test_suite_get`

Retrieves a test suite by its ID, including its associated test cases.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| suite_id | string | Yes | The ID of the test suite to retrieve. |

### `test_suite_list`

Lists all available test suites with their names, descriptions, and test case counts.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filters | object | No | Optional filters for listing suites (reserved for future use). |

### `test_suite_update`

Updates an existing test suite with new name, description, or test case associations.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| suite_id | string | Yes | The ID of the test suite to update. |
| name | string | No | Optional new name for the test suite. |
| description | string | No | Optional new description for the test suite. |
| test_case_ids | array | No | Optional new array of test case IDs to associate with the suite. |

### `test_suite_delete`

Permanently deletes a test suite by its ID. This action cannot be undone.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| suite_id | string | Yes | The ID of the test suite to delete. |

### `test_case_create`

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

### `test_case_get`

Retrieves a test case by its ID, including all steps and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| case_id | string | Yes | The ID of the test case to retrieve. |

### `test_case_list`

Lists all available test cases with their keys, names, priorities, and step counts.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| suite_id | string | No | Optional suite ID to filter test cases by suite. |
| filters | object | No | Optional filters for listing cases (reserved for future use). |

### `test_case_update`

Updates an existing test case with new key, name, description, steps, labels, priority, or type.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| case_id | string | Yes | The ID of the test case to update. |
| key | string | No | Optional new key for the test case. |
| name | string | No | Optional new name for the test case. |
| description | string | No | Optional new description for the test case. |
| steps | array | No | Optional new array of steps. |
| labels | array | No | Optional new labels for categorization. |
| priority | string | No | Optional new priority level: low, medium, high, or automated. |
| type | string | No | Optional new test type. |

### `test_run_create`

Creates a new test run for a specified test suite. A test run tracks the execution and results of all test cases in the suite.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| test_suite_id | string | Yes | The ID of the test suite to create a run for. |
| name | string | No | Optional name for the test run (e.g., "Sprint 1 Regression"). |

### `test_run_get`

Retrieves a test run by its ID, including status, test case results, and summary statistics.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| run_id | string | Yes | The ID of the test run to retrieve. |

### `test_run_update_status`

Updates the status of a test run. Use this to mark a run as running, completed, or cancelled.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| run_id | string | Yes | The ID of the test run to update. |
| status | string | Yes | The new status for the test run: pending, running, completed, or cancelled. |

## Sample Usage

### Create a Test Suite

```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.testing",
  "test_suite_create",
  {
    name: "Authentication Tests",
    description: "Tests for user authentication flows"
  }
);
```

### Create a Test Case

```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.testing",
  "test_case_create",
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
    labels: ["authentication", "smoke"]
  }
);
```

### Create and Manage a Test Run

```javascript
// Create a test run
const createResult = await codebolt.tools.executeTool(
  "codebolt.testing",
  "test_run_create",
  {
    test_suite_id: "suite-123",
    name: "Sprint 1 Regression"
  }
);

// Update test run status
const updateResult = await codebolt.tools.executeTool(
  "codebolt.testing",
  "test_run_update_status",
  {
    run_id: "run-456",
    status: "completed"
  }
);
```

### List and Get Test Suites

```javascript
// List all test suites
const listResult = await codebolt.tools.executeTool(
  "codebolt.testing",
  "test_suite_list",
  {}
);

// Get a specific test suite
const getResult = await codebolt.tools.executeTool(
  "codebolt.testing",
  "test_suite_get",
  { suite_id: "suite-123" }
);
```

:::info
Test suites are used to group related test cases together. Test cases define individual tests with steps, and test runs track the execution and results of all test cases in a suite.
:::
