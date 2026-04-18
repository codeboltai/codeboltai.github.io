---
sidebar_position: 79
---

# Project Structure Update Request

Tools for managing project structure update requests for multi-agent coordination. These tools enable agents to propose, review, dispute, and merge changes to project structure in a collaborative workflow.

## Overview

Update requests provide a structured workflow for coordinating changes across multiple agents. Each request goes through a lifecycle from draft to merged status, with support for disputes, comments, and watchers.

## Workflow

```
draft → waiting_for_dispute → actively_being_worked → waiting_to_merge → merged
                             ↓
                         disputed
```

## Available Tools

### Update Request Management

#### update_request_create

Create a new project structure update request.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | Short title describing the change |
| description | string | No | Detailed description of what and why |
| author | string | Yes | Who created the request |
| authorType | string | Yes | Type of author. One of: `user`, `agent` |
| changes | array | Yes | All changes to be applied (see Change Structure) |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_create",
  {
    title: "Add user authentication API",
    description: "Add login and registration endpoints to the API",
    author: "agent-001",
    authorType: "agent",
    changes: [
      {
        packageId: "api-service",
        packageAction: "update",
        apiRoutes: [
          {
            id: "route-001",
            action: "create",
            item: {
              path: "/api/auth/login",
              method: "POST",
              description: "User login endpoint"
            }
          }
        ]
      }
    ]
  }
);
```

---

#### update_request_get

Get an update request by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_get",
  {
    id: "ur-123"
  }
);
```

---

#### update_request_list

List update requests with optional filters.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filters | object | No | Optional filters |
| filters.status | string[] | No | Filter by status |
| filters.author | string | No | Filter by author |
| filters.search | string | No | Search text |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_list",
  {
    filters: {
      status: ["waiting_for_dispute", "actively_being_worked"],
      author: "agent-001"
    }
  }
);
```

---

#### update_request_update

Update an existing update request.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| title | string | No | New title |
| description | string | No | New description |
| changes | array | No | Updated changes |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_update",
  {
    id: "ur-123",
    title: "Add user authentication and authorization API",
    description: "Updated description with more details"
  }
);
```

---

#### update_request_delete

Delete an update request.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_delete",
  {
    id: "ur-123"
  }
);
```

### Workflow Management

#### update_request_submit

Submit an update request for review.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_submit",
  {
    id: "ur-123"
  }
);
```

---

#### update_request_start_work

Start working on an update request.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_start_work",
  {
    id: "ur-123"
  }
);
```

---

#### update_request_complete

Complete work on an update request.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_complete",
  {
    id: "ur-123"
  }
);
```

### Dispute Management

#### update_request_add_dispute

Add a dispute to an update request.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| raisedBy | string | Yes | Who raised the dispute |
| raisedByType | string | Yes | Type of actor. One of: `user`, `agent` |
| reason | string | Yes | Reason for the dispute |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_add_dispute",
  {
    id: "ur-123",
    raisedBy: "agent-002",
    raisedByType: "agent",
    reason: "This change conflicts with existing API routes"
  }
);
```

---

#### update_request_resolve_dispute

Resolve a dispute on an update request.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| disputeId | string | Yes | Dispute ID |
| resolutionSummary | string | No | Optional resolution summary |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_resolve_dispute",
  {
    id: "ur-123",
    disputeId: "dispute-001",
    resolutionSummary: "Routes updated to avoid conflict"
  }
);
```

### Watch & Comments

#### update_request_watch

Watch an update request for updates.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| watcherId | string | Yes | Watcher ID (agent or user) |
| watcherType | string | Yes | Type of watcher. One of: `user`, `agent` |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_watch",
  {
    id: "ur-123",
    watcherId: "agent-002",
    watcherType: "agent"
  }
);
```

---

#### update_request_unwatch

Stop watching an update request.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| watcherId | string | Yes | Watcher ID to remove |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_unwatch",
  {
    id: "ur-123",
    watcherId: "agent-002"
  }
);
```

---

#### update_request_add_comment

Add a comment to a dispute on an update request.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| disputeId | string | Yes | Dispute ID |
| author | string | Yes | Comment author |
| authorType | string | Yes | Type of author. One of: `user`, `agent` |
| content | string | Yes | Comment content |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_add_comment",
  {
    id: "ur-123",
    disputeId: "dispute-001",
    author: "agent-001",
    authorType: "agent",
    content: "I can update the routes to use a different prefix"
  }
);
```

---

#### update_request_merge

Merge an update request into the project structure.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Update request ID |
| workspacePath | string | No | Optional workspace path |

**Example:**
```javascript
const result = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_merge",
  {
    id: "ur-123"
  }
);
```

## Change Structure

The `changes` parameter accepts an array of change objects with the following structure:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| packageId | string | Yes | Target package ID |
| packageAction | string | Yes | Action for the package. One of: `create`, `update`, `delete`, `none` |
| packageName | string | No | Package name (for display and create) |
| packagePath | string | No | Package path (for create) |
| packageInfo | object | No | Package-level info changes |
| apiRoutes | array | No | API routes changes |
| uiRoutes | array | No | UI routes changes |
| database | object | No | Database changes |
| dependencies | array | No | Dependency changes |
| runCommands | array | No | Run command changes |
| deploymentConfigs | array | No | Deployment config changes |
| frontendFramework | object | No | Frontend framework change |
| designGuidelines | object | No | Design guidelines change |

Each array item (e.g., `apiRoutes`, `dependencies`) is a `ChangeWrapper` object:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | string | Yes | Unique identifier for this change |
| action | string | Yes | Action to perform. One of: `create`, `update`, `delete`, `none` |
| item | object | Yes | The item data (new state for create/update) |
| originalItem | object | No | Original item before change (for update/delete) |

## Complete Workflow Example

```javascript
// 1. Create a new update request
const createResult = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_create",
  {
    title: "Add user management module",
    description: "Add CRUD operations for user management",
    author: "agent-001",
    authorType: "agent",
    changes: [
      {
        packageId: "api-service",
        packageAction: "update",
        apiRoutes: [
          {
            id: "route-users-create",
            action: "create",
            item: {
              path: "/api/users",
              method: "POST",
              description: "Create a new user",
              handler: "createUser",
              file: "src/controllers/users.ts"
            }
          }
        ],
        database: {
          tables: [
            {
              id: "table-users",
              action: "create",
              item: {
                name: "users",
                description: "Users table",
                columns: [
                  { name: "id", type: "uuid", primaryKey: true },
                  { name: "email", type: "varchar(255)", nullable: false },
                  { name: "name", type: "varchar(100)" }
                ]
              }
            }
          ]
        }
      }
    ]
  }
);

// 2. Submit the request for review
await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_submit",
  {
    id: createResult.data.id
  }
);

// 3. Another agent watches the request
await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_watch",
  {
    id: createResult.data.id,
    watcherId: "agent-002",
    watcherType: "agent"
  }
);

// 4. Another agent raises a dispute
await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_add_dispute",
  {
    id: createResult.data.id,
    raisedBy: "agent-002",
    raisedByType: "agent",
    reason: "Missing password field in users table"
  }
);

// 5. Add a comment to the dispute
await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_add_comment",
  {
    id: createResult.data.id,
    disputeId: "dispute-001",
    author: "agent-001",
    authorType: "agent",
    content: "Will add password_hash field for security"
  }
);

// 6. Resolve the dispute
await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_resolve_dispute",
  {
    id: createResult.data.id,
    disputeId: "dispute-001",
    resolutionSummary: "Password hash field will be added"
  }
);

// 7. Start work on the request
await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_start_work",
  {
    id: createResult.data.id
  }
);

// 8. Complete work
await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_complete",
  {
    id: createResult.data.id
  }
);

// 9. Merge the changes
await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_merge",
  {
    id: createResult.data.id
  }
);
```

## Filtering Example

```javascript
// List all requests waiting for review
const pendingReview = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_list",
  {
    filters: {
      status: ["waiting_for_dispute", "actively_being_worked"]
    }
  }
);

// Search requests by text
const searchResults = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_list",
  {
    filters: {
      search: "authentication"
    }
  }
);

// Get requests by author
const myRequests = await codebolt.tools.executeTool(
  "codebolt.projectStructureUpdateRequest",
  "update_request_list",
  {
    filters: {
      author: "agent-001"
    }
  }
);
```

:::info

**Status Values:**
- `draft` - Just created, not submitted
- `waiting_for_dispute` - Submitted, waiting for others to review
- `disputed` - Someone raised a dispute
- `actively_being_worked` - Work in progress, no disputes
- `waiting_to_merge` - Work complete, ready to merge
- `merged` - Successfully merged into project structure

**Dispute Workflow:**
1. Agent raises a dispute → request status becomes `disputed`
2. Other agents add comments to discuss the dispute
3. Dispute is resolved with a summary
4. Request can proceed to `actively_being_worked` status

:::
