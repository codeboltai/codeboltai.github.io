---
title: File Intent MCP
sidebar_label: codebolt.file_intent
sidebar_position: 9
---

# codebolt.file_intent

File update intent management tools for coordinating file modifications across multiple agents. This system prevents conflicts by allowing agents to declare their intention to modify files before making changes.

## Overview

The File Intent system provides a coordination mechanism for multi-agent environments where multiple agents may need to modify the same files. Agents declare their intent to modify files, and the system checks for overlaps and conflicts before allowing modifications to proceed.

### Intent Levels

File intents support different levels of modification scope:

- **Level 1**: Read-only access
- **Level 2**: Minor modifications (e.g., formatting, comments)
- **Level 3**: Moderate modifications (e.g., function changes)
- **Level 4**: Major modifications (e.g., file restructuring)

## Available Tools

- `file_intent_create` - Create a new file update intent
- `file_intent_update` - Update an existing intent
- `file_intent_get` - Retrieve a specific intent by ID
- `file_intent_list` - List intents with filters
- `file_intent_complete` - Mark an intent as completed
- `file_intent_cancel` - Cancel an active intent
- `file_intent_check_overlap` - Check for overlaps with other intents
- `file_intent_get_blocked` - Get intents blocked by a specific intent
- `file_intent_get_by_agent` - Get all intents for a specific agent
- `file_intent_get_files_with_intents` - Get all files that have active intents
- `file_intent_delete` - Delete an intent

## Tool Parameters

### `file_intent_create`

Creates a new file update intent to declare files an agent intends to modify. Returns overlap information if other agents have intents on the same files.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| environmentId | string | Yes | The environment ID for the intent. |
| files | array | Yes | List of files with their intent levels. Each file has filePath (string), intentLevel (1-4), and optional targetSections (string array). |
| description | string | Yes | Description of the intended change. |
| claimedBy | string | Yes | Agent ID who is claiming this intent. |
| claimedByName | string | No | Display name of the agent. |
| estimatedDuration | number | No | Estimated duration in minutes. |
| priority | number | No | Priority 1-10, higher = more important (default: 5). |
| autoExpire | boolean | No | Whether to auto-expire (default: false). |
| maxAutoExpireMinutes | number | No | Max duration before auto-expire in minutes (default: 60). |

### `file_intent_update`

Updates an existing file update intent with new values for files, description, priority, or other fields.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the intent to update. |
| files | array | No | Updated list of files with their intent levels. |
| description | string | No | Updated description of the intended change. |
| estimatedDuration | number | No | Updated estimated duration in minutes. |
| priority | number | No | Updated priority 1-10. |
| autoExpire | boolean | No | Updated auto-expire setting. |
| maxAutoExpireMinutes | number | No | Updated max auto-expire minutes. |

### `file_intent_get`

Retrieves a single file update intent by its ID, including all details about files, status, and ownership.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the intent to retrieve. |

### `file_intent_list`

Lists file update intents with optional filters for environment, status, agent, file path, and date range.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| environmentId | string | No | Filter by environment ID. |
| status | array | No | Filter by status array: 'active', 'completed', 'expired', 'cancelled'. |
| claimedBy | string | No | Filter by agent ID who claimed the intent. |
| filePathContains | string | No | Filter by file path containing this string. |
| createdAfter | string | No | Filter by creation date after this ISO timestamp. |
| createdBefore | string | No | Filter by creation date before this ISO timestamp. |

### `file_intent_complete`

Marks a file update intent as completed, releasing the reservation on the files.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the intent to complete. |
| closedBy | string | Yes | The agent ID who is completing this intent. |

### `file_intent_cancel`

Cancels an active file update intent, releasing the reservation on the files without completing the work.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the intent to cancel. |
| closedBy | string | Yes | The agent ID who is cancelling this intent. |

### `file_intent_check_overlap`

Checks if the specified files have overlapping intents with other active intents.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| environmentId | string | Yes | The environment ID to check in. |
| files | array | Yes | List of files to check for overlaps. |
| excludeIntentId | string | No | Intent ID to exclude from overlap check (useful when updating). |

### `file_intent_get_blocked`

Gets all intents that are blocked by a specific intent due to file overlaps.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the intent to check. |

### `file_intent_get_by_agent`

Gets all file update intents for a specific agent.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The agent ID to get intents for. |
| status | array | No | Filter by status array: 'active', 'completed', 'expired', 'cancelled'. |

### `file_intent_get_files_with_intents`

Gets all files that currently have active intents in an environment.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| environmentId | string | Yes | The environment ID to check. |

### `file_intent_delete`

Deletes a file update intent permanently.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the intent to delete. |

## Sample Usage

```javascript
// Create a new file intent
const createResult = await codebolt.tools.executeTool(
  "codebolt.file_intent",
  "file_intent_create",
  {
    environmentId: "env-123",
    files: [
      {
        filePath: "/src/components/Button.tsx",
        intentLevel: 3,
        targetSections: ["handleClick", "render"]
      },
      {
        filePath: "/src/styles/button.css",
        intentLevel: 2
      }
    ],
    description: "Update button component styling and click handler",
    claimedBy: "agent-456",
    claimedByName: "UI Agent",
    estimatedDuration: 15,
    priority: 7
  }
);

// Check for overlaps before creating an intent
const overlapResult = await codebolt.tools.executeTool(
  "codebolt.file_intent",
  "file_intent_check_overlap",
  {
    environmentId: "env-123",
    files: [
      {
        filePath: "/src/components/Button.tsx",
        intentLevel: 3
      }
    ]
  }
);

// List all active intents for an environment
const listResult = await codebolt.tools.executeTool(
  "codebolt.file_intent",
  "file_intent_list",
  {
    environmentId: "env-123",
    status: ["active"]
  }
);

// Get a specific intent
const getResult = await codebolt.tools.executeTool(
  "codebolt.file_intent",
  "file_intent_get",
  { id: "intent-789" }
);

// Update an intent
const updateResult = await codebolt.tools.executeTool(
  "codebolt.file_intent",
  "file_intent_update",
  {
    id: "intent-789",
    priority: 9,
    estimatedDuration: 20
  }
);

// Complete an intent when work is done
const completeResult = await codebolt.tools.executeTool(
  "codebolt.file_intent",
  "file_intent_complete",
  {
    id: "intent-789",
    closedBy: "agent-456"
  }
);

// Cancel an intent if work cannot be completed
const cancelResult = await codebolt.tools.executeTool(
  "codebolt.file_intent",
  "file_intent_cancel",
  {
    id: "intent-789",
    closedBy: "agent-456"
  }
);

// Get all intents for a specific agent
const agentIntentsResult = await codebolt.tools.executeTool(
  "codebolt.file_intent",
  "file_intent_get_by_agent",
  {
    agentId: "agent-456",
    status: ["active", "completed"]
  }
);

// Get all files with active intents
const filesResult = await codebolt.tools.executeTool(
  "codebolt.file_intent",
  "file_intent_get_files_with_intents",
  { environmentId: "env-123" }
);
```

## Workflow Example

```javascript
// Complete workflow for coordinated file modification
async function modifyFilesWithIntent() {
  const agentId = "agent-456";
  const environmentId = "env-123";
  
  // 1. Check for overlaps first
  const overlapCheck = await codebolt.tools.executeTool(
    "codebolt.file_intent",
    "file_intent_check_overlap",
    {
      environmentId,
      files: [
        { filePath: "/src/app.ts", intentLevel: 3 }
      ]
    }
  );
  
  if (overlapCheck.hasOverlap && !overlapCheck.canProceed) {
    console.log("Cannot proceed - file is locked by another agent");
    return;
  }
  
  // 2. Create the intent
  const intent = await codebolt.tools.executeTool(
    "codebolt.file_intent",
    "file_intent_create",
    {
      environmentId,
      files: [
        { filePath: "/src/app.ts", intentLevel: 3 }
      ],
      description: "Refactor main application logic",
      claimedBy: agentId,
      priority: 8,
      autoExpire: true,
      maxAutoExpireMinutes: 30
    }
  );
  
  try {
    // 3. Perform the actual file modifications
    await codebolt.tools.executeTool(
      "codebolt.fs",
      "edit",
      {
        absolute_path: "/src/app.ts",
        old_string: "// old code",
        new_string: "// new code"
      }
    );
    
    // 4. Mark intent as completed
    await codebolt.tools.executeTool(
      "codebolt.file_intent",
      "file_intent_complete",
      {
        id: intent.id,
        closedBy: agentId
      }
    );
  } catch (error) {
    // 5. Cancel intent if something goes wrong
    await codebolt.tools.executeTool(
      "codebolt.file_intent",
      "file_intent_cancel",
      {
        id: intent.id,
        closedBy: agentId
      }
    );
    throw error;
  }
}
```

:::info
This functionality provides file update intent coordination through the MCP interface. It helps prevent conflicts when multiple agents need to modify the same files.
:::

## Best Practices

1. **Always check for overlaps** before creating an intent if you want to avoid conflicts
2. **Use appropriate intent levels** - don't claim Level 4 if you only need Level 2
3. **Complete or cancel intents** when done to release file locks
4. **Set realistic priorities** - reserve high priorities (8-10) for critical work
5. **Use auto-expire** for long-running tasks to prevent indefinite locks
6. **Specify target sections** when possible to allow finer-grained coordination

## Related Tools

- [File System MCP](./fs.md) - File operations
- [Project Structure MCP](./projectStructure.md) - Project structure management
- [State MCP](./state.md) - State management
