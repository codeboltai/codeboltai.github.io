---
cbapicategory:
  - name: addCaseToSuite
    link: /docs/reference/client-sdk/api-reference/autoTesting/addCaseToSuite
    description: "Adds a test case to a test suite.

Associates an existing test case with the specified suite, making
it part of the suite's execution set."
  - name: createCase
    link: /docs/reference/client-sdk/api-reference/autoTesting/createCase
    description: "Creates a new test case.

Defines an individual test scenario with steps, expected outcomes,
and validation criteria."
  - name: createRun
    link: /docs/reference/client-sdk/api-reference/autoTesting/createRun
    description: "Creates a new test run.

Initiates an execution of one or more test suites or cases,
tracking the results as they complete."
  - name: createSuite
    link: /docs/reference/client-sdk/api-reference/autoTesting/createSuite
    description: "Creates a new test suite.

Defines a new collection of test cases that can be executed together."
  - name: deleteCase
    link: /docs/reference/client-sdk/api-reference/autoTesting/deleteCase
    description: "Deletes a test case.

Permanently removes the specified test case from the system."
  - name: deleteSuite
    link: /docs/reference/client-sdk/api-reference/autoTesting/deleteSuite
    description: "Deletes a test suite.

Permanently removes the specified test suite. This does not delete
the test cases themselves, only their association with the suite."
  - name: getCase
    link: /docs/reference/client-sdk/api-reference/autoTesting/getCase
    description: "Retrieves a specific test case by ID.

Returns the full test case definition including its steps,
expected results, and metadata."
  - name: getRun
    link: /docs/reference/client-sdk/api-reference/autoTesting/getRun
    description: "Retrieves a specific test run by ID.

Returns the full test run record including per-case results,
timing, and overall status."
  - name: getSuite
    link: /docs/reference/client-sdk/api-reference/autoTesting/getSuite
    description: "Retrieves a specific test suite by ID.

Returns the full suite definition including its metadata and
associated test case references."
  - name: listCases
    link: /docs/reference/client-sdk/api-reference/autoTesting/listCases
    description: "Retrieves all test cases.

Returns every test case in the system, regardless of suite membership."
  - name: listRuns
    link: /docs/reference/client-sdk/api-reference/autoTesting/listRuns
    description: "Retrieves all test runs.

Returns the history of test run executions, including their status,
results, and timing information."
  - name: listSuites
    link: /docs/reference/client-sdk/api-reference/autoTesting/listSuites
    description: "Retrieves all test suites.

Returns the complete list of test suites, which are collections of
related test cases grouped for organized execution."
  - name: patchRunCase
    link: /docs/reference/client-sdk/api-reference/autoTesting/patchRunCase
    description: "Patches a specific test case result within a test run.

Updates the status or outcome of an individual test case within
an active test run, allowing incremental result reporting."
  - name: patchRunCaseStep
    link: /docs/reference/client-sdk/api-reference/autoTesting/patchRunCaseStep
    description: "Patches a specific step result within a test case of a test run.

Updates the status or outcome of an individual step within a
test case, providing granular progress tracking."
  - name: removeCaseFromSuite
    link: /docs/reference/client-sdk/api-reference/autoTesting/removeCaseFromSuite
    description: "Removes a test case from a test suite.

Disassociates a test case from the specified suite without deleting
the test case itself."
  - name: updateCase
    link: /docs/reference/client-sdk/api-reference/autoTesting/updateCase
    description: "Updates a test case.

Modifies the steps, name, or other properties of an existing test case."
  - name: updateRun
    link: /docs/reference/client-sdk/api-reference/autoTesting/updateRun
    description: "Updates a test run.

Modifies the status or metadata of an in-progress or completed test run."
  - name: updateSuite
    link: /docs/reference/client-sdk/api-reference/autoTesting/updateSuite
    description: "Updates a test suite.

Modifies the name, description, or other properties of an
existing test suite."
---
# AutoTesting API

Auto Testing API

<CBAPICategory />

## Methods

- [`addCaseToSuite()`](./addCaseToSuite) — Adds a test case to a test suite.

Associates an existing test case with the specified suite, making
it part of the suite's execution set.
- [`createCase()`](./createCase) — Creates a new test case.

Defines an individual test scenario with steps, expected outcomes,
and validation criteria.
- [`createRun()`](./createRun) — Creates a new test run.

Initiates an execution of one or more test suites or cases,
tracking the results as they complete.
- [`createSuite()`](./createSuite) — Creates a new test suite.

Defines a new collection of test cases that can be executed together.
- [`deleteCase()`](./deleteCase) — Deletes a test case.

Permanently removes the specified test case from the system.
- [`deleteSuite()`](./deleteSuite) — Deletes a test suite.

Permanently removes the specified test suite. This does not delete
the test cases themselves, only their association with the suite.
- [`getCase()`](./getCase) — Retrieves a specific test case by ID.

Returns the full test case definition including its steps,
expected results, and metadata.
- [`getRun()`](./getRun) — Retrieves a specific test run by ID.

Returns the full test run record including per-case results,
timing, and overall status.
- [`getSuite()`](./getSuite) — Retrieves a specific test suite by ID.

Returns the full suite definition including its metadata and
associated test case references.
- [`listCases()`](./listCases) — Retrieves all test cases.

Returns every test case in the system, regardless of suite membership.
- [`listRuns()`](./listRuns) — Retrieves all test runs.

Returns the history of test run executions, including their status,
results, and timing information.
- [`listSuites()`](./listSuites) — Retrieves all test suites.

Returns the complete list of test suites, which are collections of
related test cases grouped for organized execution.
- [`patchRunCase()`](./patchRunCase) — Patches a specific test case result within a test run.

Updates the status or outcome of an individual test case within
an active test run, allowing incremental result reporting.
- [`patchRunCaseStep()`](./patchRunCaseStep) — Patches a specific step result within a test case of a test run.

Updates the status or outcome of an individual step within a
test case, providing granular progress tracking.
- [`removeCaseFromSuite()`](./removeCaseFromSuite) — Removes a test case from a test suite.

Disassociates a test case from the specified suite without deleting
the test case itself.
- [`updateCase()`](./updateCase) — Updates a test case.

Modifies the steps, name, or other properties of an existing test case.
- [`updateRun()`](./updateRun) — Updates a test run.

Modifies the status or metadata of an in-progress or completed test run.
- [`updateSuite()`](./updateSuite) — Updates a test suite.

Modifies the name, description, or other properties of an
existing test suite.
