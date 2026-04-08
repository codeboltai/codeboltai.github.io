---
sidebar_position: 39
---

# Swarm

Tools for managing swarms, teams, roles, and vacancies in multi-agent systems.

## Tools

### swarm_list
Lists all available swarms in the system.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_list", {});
```

---

### swarm_create
Creates a new swarm for organizing and managing agents, teams, roles, and vacancies.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the swarm |
| description | string | No | Optional description of the swarm |
| allow_external_agents | boolean | No | Whether to allow external agents to join |
| max_agents | number | No | Maximum number of agents allowed in the swarm |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_create", {
  name: "development-swarm",
  description: "A swarm for development agents",
  allow_external_agents: true,
  max_agents: 50
});
```

---

### swarm_get
Gets details of a specific swarm by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm to retrieve |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_get", {
  swarm_id: "swarm-123"
});
```

---

### swarm_get_agents
Gets all agents registered in a specific swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_get_agents", {
  swarm_id: "swarm-123"
});
```

---

### swarm_register_agent
Registers an agent to a swarm with specified capabilities and configuration.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm to register the agent to |
| name | string | Yes | The name of the agent |
| agent_id | string | No | Optional agent ID (will be generated if not provided) |
| capabilities | string[] | No | Optional capabilities of the agent |
| agent_type | string | No | Type of agent: "internal" or "external" |
| connection_endpoint | string | No | Optional connection endpoint for external agents |
| connection_protocol | string | No | Optional connection protocol: "websocket" or "http" |
| metadata | object | No | Optional metadata for the agent |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_register_agent", {
  swarm_id: "swarm-123",
  name: "code-reviewer",
  capabilities: ["code-review", "testing"],
  agent_type: "internal",
  metadata: { priority: "high" }
});
```

---

### swarm_unregister_agent
Unregisters an agent from a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| agent_id | string | Yes | The ID of the agent to unregister |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_unregister_agent", {
  swarm_id: "swarm-123",
  agent_id: "agent-456"
});
```

---

### swarm_create_team
Creates a new team within a swarm for organizing agents.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm to create the team in |
| name | string | Yes | The name of the team |
| created_by | string | Yes | The ID of the agent creating the team |
| description | string | No | Optional description of the team |
| max_members | number | No | Maximum number of members allowed in the team |
| metadata | object | No | Optional metadata for the team |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_create_team", {
  swarm_id: "swarm-123",
  name: "backend-team",
  description: "Team for backend development",
  max_members: 10,
  created_by: "agent-456"
});
```

---

### swarm_list_teams
Lists all teams in a specific swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_list_teams", {
  swarm_id: "swarm-123"
});
```

---

### swarm_get_team
Gets details of a specific team including its members.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| team_id | string | Yes | The ID of the team to retrieve |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_get_team", {
  swarm_id: "swarm-123",
  team_id: "team-789"
});
```

---

### swarm_join_team
Adds an agent to a team within a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| team_id | string | Yes | The ID of the team to join |
| agent_id | string | Yes | The ID of the agent joining the team |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_join_team", {
  swarm_id: "swarm-123",
  team_id: "team-789",
  agent_id: "agent-456"
});
```

---

### swarm_leave_team
Removes an agent from a team within a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| team_id | string | Yes | The ID of the team to leave |
| agent_id | string | Yes | The ID of the agent leaving the team |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_leave_team", {
  swarm_id: "swarm-123",
  team_id: "team-789",
  agent_id: "agent-456"
});
```

---

### swarm_delete_team
Deletes a team from a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| team_id | string | Yes | The ID of the team to delete |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_delete_team", {
  swarm_id: "swarm-123",
  team_id: "team-789"
});
```

---

### swarm_create_role
Creates a new role within a swarm with specified permissions and constraints.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm to create the role in |
| name | string | Yes | The name of the role |
| created_by | string | Yes | The ID of the agent creating the role |
| description | string | No | Optional description of the role |
| permissions | string[] | No | Optional permissions associated with the role |
| max_assignees | number | No | Maximum number of agents that can be assigned this role |
| metadata | object | No | Optional metadata for the role |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_create_role", {
  swarm_id: "swarm-123",
  name: "lead-developer",
  description: "Lead developer role with elevated permissions",
  permissions: ["approve-pr", "deploy", "manage-team"],
  max_assignees: 3,
  created_by: "agent-456"
});
```

---

### swarm_list_roles
Lists all roles defined in a specific swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_list_roles", {
  swarm_id: "swarm-123"
});
```

---

### swarm_get_role
Gets details of a specific role including its assignees.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| role_id | string | Yes | The ID of the role to retrieve |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_get_role", {
  swarm_id: "swarm-123",
  role_id: "role-101"
});
```

---

### swarm_assign_role
Assigns a role to an agent within a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| role_id | string | Yes | The ID of the role to assign |
| agent_id | string | Yes | The ID of the agent to assign the role to |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_assign_role", {
  swarm_id: "swarm-123",
  role_id: "role-101",
  agent_id: "agent-456"
});
```

---

### swarm_unassign_role
Unassigns a role from an agent within a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| role_id | string | Yes | The ID of the role to unassign |
| agent_id | string | Yes | The ID of the agent to unassign the role from |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_unassign_role", {
  swarm_id: "swarm-123",
  role_id: "role-101",
  agent_id: "agent-456"
});
```

---

### swarm_get_agents_by_role
Gets all agents that have been assigned a specific role.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| role_id | string | Yes | The ID of the role |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_get_agents_by_role", {
  swarm_id: "swarm-123",
  role_id: "role-101"
});
```

---

### swarm_delete_role
Deletes a role from a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| role_id | string | Yes | The ID of the role to delete |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_delete_role", {
  swarm_id: "swarm-123",
  role_id: "role-101"
});
```

---

### swarm_create_vacancy
Creates a new vacancy for a role within a swarm that agents can apply for.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm to create the vacancy in |
| role_id | string | Yes | The ID of the role associated with the vacancy |
| title | string | Yes | The title of the vacancy |
| created_by | string | Yes | The ID of the agent creating the vacancy |
| description | string | No | Optional description of the vacancy |
| requirements | string[] | No | Optional requirements for the vacancy |
| metadata | object | No | Optional metadata for the vacancy |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_create_vacancy", {
  swarm_id: "swarm-123",
  role_id: "role-101",
  title: "Senior Code Reviewer Needed",
  description: "Looking for an experienced agent to handle code reviews",
  requirements: ["code-review", "testing", "documentation"],
  created_by: "agent-456"
});
```

---

### swarm_list_vacancies
Lists all vacancies in a specific swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_list_vacancies", {
  swarm_id: "swarm-123"
});
```

---

### swarm_apply_vacancy
Allows an agent to apply for a vacancy in a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| vacancy_id | string | Yes | The ID of the vacancy to apply for |
| agent_id | string | Yes | The ID of the agent applying |
| message | string | No | Optional application message |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_apply_vacancy", {
  swarm_id: "swarm-123",
  vacancy_id: "vacancy-202",
  agent_id: "agent-456",
  message: "I have extensive experience in code review and testing"
});
```

---

### swarm_close_vacancy
Closes a vacancy in a swarm with a specified reason.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| vacancy_id | string | Yes | The ID of the vacancy to close |
| reason | string | Yes | The reason for closing the vacancy |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_close_vacancy", {
  swarm_id: "swarm-123",
  vacancy_id: "vacancy-202",
  reason: "Position has been filled"
});
```

---

### swarm_update_status
Updates the status of an agent in a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |
| agent_id | string | Yes | The ID of the agent |
| status | string | Yes | The new status: "active", "idle", "busy", or "offline" |
| current_task | string | No | Optional current task the agent is working on |
| metadata | object | No | Optional metadata for the status update |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_update_status", {
  swarm_id: "swarm-123",
  agent_id: "agent-456",
  status: "busy",
  current_task: "Reviewing PR #42",
  metadata: { estimated_completion: "2 hours" }
});
```

---

### swarm_get_status_summary
Gets a status summary for a swarm including counts of agents by status.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_get_status_summary", {
  swarm_id: "swarm-123"
});
```

---

### swarm_get_default_job_group
Gets the default job group ID associated with a swarm.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| swarm_id | string | Yes | The ID of the swarm |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.swarm", "swarm_get_default_job_group", {
  swarm_id: "swarm-123"
});
```
