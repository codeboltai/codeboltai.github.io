---
title: Orchestrator MCP
sidebar_label: codebolt.orchestrator
sidebar_position: 51
---

# codebolt.orchestrator

Orchestrator lifecycle management tools for creating, updating, and managing orchestrator instances. Note: This is different from orchestration.md which covers task/thread/agent management workflows.

## Available Tools

- `orchestrator_list` - Lists all orchestrators with their IDs, names, descriptions, and status
- `orchestrator_get` - Gets a specific orchestrator by ID with full details
- `orchestrator_get_settings` - Gets settings for a specific orchestrator
- `orchestrator_create` - Creates a new orchestrator instance
- `orchestrator_update` - Updates an existing orchestrator's properties
- `orchestrator_update_settings` - Updates settings for a orchestrator
- `orchestrator_delete` - Deletes an orchestrator by ID
- `orchestrator_update_status` - Updates the status of an orchestrator (idle/running/paused)

## Tool Parameters

### orchestrator_list

Lists all available orchestrators in the system.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | No | No parameters required |

---

### orchestrator_get

Retrieves detailed information about a specific orchestrator by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| orchestrator_id | string | Yes | The unique identifier of the orchestrator to retrieve |

---

### orchestrator_get_settings

Retrieves the configuration settings for a specific orchestrator.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| orchestrator_id | string | Yes | The unique identifier of the orchestrator to get settings for |

---

### orchestrator_create

Creates a new orchestrator instance with the specified configuration.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The display name of the orchestrator |
| description | string | Yes | A detailed description of the orchestrator's purpose and functionality |
| agent_id | string | Yes | The unique identifier of the agent to associate with this orchestrator |
| default_worker_agent_id | string | No | The unique identifier of the default worker agent to use for tasks |
| metadata | object | No | Additional metadata as key-value pairs for custom organization and filtering |

---

### orchestrator_update

Updates one or more properties of an existing orchestrator.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| orchestrator_id | string | Yes | The unique identifier of the orchestrator to update |
| name | string | No | New display name for the orchestrator |
| description | string | No | New description for the orchestrator |
| agent_id | string | No | New agent ID to associate with this orchestrator |
| default_worker_agent_id | string | No | New default worker agent ID for task execution |
| metadata | object | No | Updated metadata as key-value pairs (replaces existing metadata) |

---

### orchestrator_update_settings

Updates the configuration settings for a specific orchestrator.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| orchestrator_id | string | Yes | The unique identifier of the orchestrator to update settings for |
| name | string | No | New display name for the orchestrator |
| description | string | No | New description for the orchestrator |
| default_worker_agent_id | string | No | New default worker agent ID |
| metadata | object | No | Updated metadata as key-value pairs |

---

### orchestrator_delete

Permanently removes an orchestrator from the system.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| orchestrator_id | string | Yes | The unique identifier of the orchestrator to delete |

---

### orchestrator_update_status

Changes the operational status of an orchestrator.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| orchestrator_id | string | Yes | The unique identifier of the orchestrator to update status for |
| status | string | Yes | The new status to assign to the orchestrator. Must be one of: `idle`, `running`, or `paused` |

## Sample Usage

```javascript
const codebolt = require('codebolt');

// List all orchestrators
await codebolt.tools.execute('orchestrator_list', {});

// Get a specific orchestrator
await codebolt.tools.execute('orchestrator_get', {
  orchestrator_id: 'orch_1234567890'
});

// Create a new orchestrator
await codebolt.tools.execute('orchestrator_create', {
  name: 'Data Processing Orchestrator',
  description: 'Handles automated data processing workflows',
  agent_id: 'agent_9876543210',
  default_worker_agent_id: 'worker_5555555555',
  metadata: {
    environment: 'production',
    priority: 'high',
    owner: 'data-team'
  }
});

// Update orchestrator status to running
await codebolt.tools.execute('orchestrator_update_status', {
  orchestrator_id: 'orch_1234567890',
  status: 'running'
});

// Update orchestrator properties
await codebolt.tools.execute('orchestrator_update', {
  orchestrator_id: 'orch_1234567890',
  name: 'Advanced Data Processing Orchestrator',
  description: 'Enhanced data processing with multi-step validation'
});

// Get orchestrator settings
await codebolt.tools.execute('orchestrator_get_settings', {
  orchestrator_id: 'orch_1234567890'
});

// Delete an orchestrator
await codebolt.tools.execute('orchestrator_delete', {
  orchestrator_id: 'orch_1234567890'
});
```

:::info
**Orchestrator Status Values:**
- `idle` - Orchestrator is not actively processing and is available for work
- `running` - Orchestrator is currently processing tasks and executing workflows
- `paused` - Orchestrator is temporarily suspended and not accepting new tasks

**Important Notes:**
- `orchestrator_update` is used to modify core properties (name, description, agent_id)
- `orchestrator_update_settings` is used to modify configuration settings
- Both update tools accept partial updates - only include fields you want to change
- Deleting an orchestrator is permanent and cannot be undone
- All operations with `orchestrator_id` require a valid UUID or identifier
- Metadata can store arbitrary key-value pairs for custom integrations
:::
