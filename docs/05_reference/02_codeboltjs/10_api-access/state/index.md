---
cbapicategory:
  - name: getApplicationState
    link: /docs/api/apiaccess/state/getApplicationState
    description: Gets the current application state.
  - name: addToAgentState
    link: /docs/api/apiaccess/state/addToAgentState
    description: "Adds a key-value pair to the agent's state."
  - name: getAgentState
    link: /docs/api/apiaccess/state/getAgentState
    description: Gets the current state of the agent.
  - name: getProjectState
    link: /docs/api/apiaccess/state/getProjectState
    description: Gets the current project state.
  - name: updateProjectState
    link: /docs/api/apiaccess/state/updateProjectState
    description: "Updates the project state with a key-value pair."
---

# State API

The State API provides comprehensive state management capabilities for applications, agents, and projects. It allows you to read and update state information across different contexts.

## Overview

The state module enables you to:
- **Application State**: Access global application state
- **Agent State**: Manage agent-specific state data
- **Project State**: Handle project-level state information

## Quick Start Example

```js
// Get application state
const appState = await codebolt.cbstate.getApplicationState();
console.log('Application state:', appState);

// Add to agent state
await codebolt.cbstate.addToAgentState('lastTask', 'data-processing');

// Get agent state
const agentState = await codebolt.cbstate.getAgentState();
console.log('Agent state:', agentState);

// Update project state
await codebolt.cbstate.updateProjectState('status', 'active');

// Get project state
const projectState = await codebolt.cbstate.getProjectState();
console.log('Project state:', projectState);
```

## Common Use Cases

### Task Tracking
Track task progress in agent state:

```js
async function trackTask(taskId, status) {
  await codebolt.cbstate.addToAgentState(`task_${taskId}`, status);

  const agentState = await codebolt.cbstate.getAgentState();
  return agentState;
}
```

### Project Management
Manage project-level state:

```js
async function updateProjectStatus(status, metadata) {
  await codebolt.cbstate.updateProjectState('status', status);
  await codebolt.cbstate.updateProjectState('metadata', metadata);

  return await codebolt.cbstate.getProjectState();
}
```

## Response Structure

State API functions return typed responses:

**Application State:**
- [`ApplicationState`](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/ApplicationState): Global application state object

**Agent State:**
- [`AddToAgentStateResponse`](/docs/reference/codeboltjs/type-reference/types/interfaces/AddToAgentStateResponse): Result of adding to agent state
- [`GetAgentStateResponse`](/docs/reference/codeboltjs/type-reference/types/interfaces/GetAgentStateResponse): Current agent state data

**Project State:**
- [`GetProjectStateResponse`](/docs/reference/codeboltjs/type-reference/types/interfaces/GetProjectStateResponse): Current project state
- [`UpdateProjectStateResponse`](/docs/reference/codeboltjs/type-reference/types/interfaces/UpdateProjectStateResponse): Result of updating project state

<CBAPICategory />
