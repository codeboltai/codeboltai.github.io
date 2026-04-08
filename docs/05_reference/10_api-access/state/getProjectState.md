---
name: getProjectState
cbbaseinfo:
  description: Gets the current project state.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<GetProjectStateResponse>"
    description: "A promise that resolves with the project's state data."
    typeArgs: []
data:
  name: getProjectState
  category: state
  link: getProjectState.md
---
# getProjectState

```typescript
codebolt.state.getProjectState(): Promise<GetProjectStateResponse>
```

Gets the current project state.
### Returns

- **`Promise<GetProjectStateResponse>`**: A promise that resolves with the project's state data.

### Example 1: Basic Project State Retrieval

```js
// Get the current project state
const projectState = await codebolt.state.getProjectState();
console.log('Project state:', projectState);

// Response structure:
// {
//   name: 'my-project',
//   status: 'active',
//   version: '1.0.0',
//   // ... other project-specific properties
// }
```

### Example 2: Check Project Status

```js
// Check current project status
async function checkProjectStatus() {
  const state = await codebolt.state.getProjectState();

  const status = {
    name: state.name || 'unknown',
    status: state.status || 'unknown',
    version: state.version || '0.0.0',
    phase: state.phase || 'unknown',
    lastUpdate: state.lastUpdate || null
  };

  console.log('Project Status:', status);

  return status;
}

// Usage
const status = await checkProjectStatus();
console.log(`Project ${status.name} is ${status.status}`);
```

### Example 3: Project Configuration Access

```js
// Get project configuration from state
async function getProjectConfig() {
  const state = await codebolt.state.getProjectState();

  const config = {
    name: state.name,
    version: state.version,
    settings: state.settings || {},
    features: state.features || {},
    environment: state.environment || 'unknown',
    team: state.team || []
  };

  console.log('Project configuration:', config);

  return config;
}

// Usage
const config = await getProjectConfig();
if (config.features.experimental) {
  console.log('Experimental features enabled');
}
```

### Example 4: Project Milestones Tracking

```js
// Check project milestones
async function checkProjectMilestones() {
  const state = await codebolt.state.getProjectState();

  const milestones = {
    current: state.currentMilestone || 'unknown',
    completed: state.completedMilestones || [],
    pending: state.pendingMilestones || [],
    progress: state.milestoneProgress || 0
  };

  console.log('Project Milestones:');
  console.log(`  Current: ${milestones.current}`);
  console.log(`  Completed: ${milestones.completed.length}`);
  console.log(`  Pending: ${milestones.pending.length}`);
  console.log(`  Progress: ${milestones.progress}%`);

  return milestones;
}

// Usage
const milestones = await checkProjectMilestones();
if (milestones.progress === 100) {
  console.log('All milestones completed!');
}
```

### Example 5: Project Team Information

```js
// Get project team information from state
async function getProjectTeam() {
  const state = await codebolt.state.getProjectState();

  const team = {
    members: state.teamMembers || [],
    lead: state.teamLead || null,
    size: state.teamSize || 0,
    roles: state.teamRoles || {}
  };

  console.log('Project Team:');
  console.log(`  Lead: ${team.lead}`);
  console.log(`  Members: ${team.members.length}`);

  team.members.forEach(member => {
    console.log(`    - ${member.name} (${member.role})`);
  });

  return team;
}

// Usage
const team = await getProjectTeam();
console.log(`Team size: ${team.size}`);
```

### Example 6: Project Metrics Dashboard

```js
// Generate project metrics dashboard
async function generateProjectDashboard() {
  const state = await codebolt.state.getProjectState();

  const dashboard = {
    overview: {
      name: state.name,
      status: state.status,
      version: state.version,
      phase: state.phase
    },
    progress: {
      completion: state.completionPercentage || 0,
      tasksCompleted: state.tasksCompleted || 0,
      tasksTotal: state.tasksTotal || 0,
      milestonesCompleted: state.milestonesCompleted || 0,
      milestonesTotal: state.milestonesTotal || 0
    },
    timeline: {
      startDate: state.startDate,
      endDate: state.endDate,
      lastUpdate: state.lastUpdate,
      daysRemaining: state.daysRemaining
    },
    resources: {
      teamSize: state.teamSize || 0,
      budgetUsed: state.budgetUsed || 0,
      budgetTotal: state.budgetTotal || 0
    }
  };

  console.log('Project Dashboard:');
  console.log(`  Progress: ${dashboard.progress.completion}%`);
  console.log(`  Tasks: ${dashboard.progress.tasksCompleted}/${dashboard.progress.tasksTotal}`);
  console.log(`  Timeline: ${dashboard.timeline.daysRemaining} days remaining`);

  return dashboard;
}

// Usage
const dashboard = await generateProjectDashboard();
if (dashboard.progress.completion === 100) {
  console.log('Project completed!');
}
```

### Explanation

The `codebolt.state.getProjectState()` function retrieves the current state of the project. This provides access to project-level information including configuration, status, team details, and progress metrics.

**Key Points:**
- **Project-Level**: Returns project-wide state information
- **Comprehensive**: Includes various project properties
- **Read-Only**: Retrieves state without modifying it
- **Real-Time**: Reflects current project state
- **Dynamic**: Structure depends on project configuration

**Return Value Structure:**
```js
{
  // Basic project info
  name: string,              // Project name
  version: string,           // Project version
  status: string,            // Project status
  phase: string,             // Current phase

  // Configuration
  settings: object,          // Project settings
  features: object,          // Feature flags
  environment: string,       // Environment type

  // Progress tracking
  completionPercentage: number,
  tasksCompleted: number,
  tasksTotal: number,
  milestonesCompleted: number,
  milestonesTotal: number,

  // Timeline
  startDate: string,
  endDate: string,
  lastUpdate: string,
  daysRemaining: number,

  // Team
  teamMembers: array,
  teamLead: string,
  teamSize: number,
  teamRoles: object,

  // Resources
  budgetUsed: number,
  budgetTotal: number,

  // ... other project-specific properties
}
```

**Common Use Cases:**
- Project status monitoring
- Configuration access
- Progress tracking
- Team information retrieval
- Metrics reporting
- Dashboard generation

**Best Practices:**
1. Handle missing properties gracefully
2. Use for monitoring and reporting
3. Combine with updateProjectState() for updates
4. Cache when appropriate
5. Validate data before use

**Typical Workflow:**
```js
// 1. Get project state
const state = await codebolt.state.getProjectState();

// 2. Check project status
if (state.status === 'active') {
  // 3. Access project data
  console.log(`Project ${state.name} is active`);

  // 4. Update if needed
  await codebolt.state.updateProjectState('lastCheck', new Date().toISOString());
}
```

**Common Project Properties:**
- **name**: Project identifier
- **status**: Current status (active, paused, completed)
- **version**: Project version
- **phase**: Current development phase
- **completionPercentage**: Progress percentage
- **teamSize**: Number of team members

**Advanced Patterns:**
- Dashboard generation
- Progress monitoring
- Team management
- Resource tracking
- Milestone tracking
- Timeline monitoring

**Related Functions:**
- `updateProjectState()`: Update project state
- `getApplicationState()`: Get application state
- `getAgentState()`: Get agent state
- `addToAgentState()`: Add to agent state

**Notes:**
- State structure varies by project
- Some properties may be optional
- Use for project-level data only
- Consider state consistency for reporting
- May include sensitive information
- Update with updateProjectState() for changes
- Reflects current point in time