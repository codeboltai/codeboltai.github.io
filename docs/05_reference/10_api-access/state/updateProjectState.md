---
name: updateProjectState
cbbaseinfo:
  description: "Updates the project state with a key-value pair."
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key to update in the project state.
    - name: value
      typeName: any
      description: "The value to set for the key (can be any type)."
  returns:
    signatureTypeName: "Promise<UpdateProjectStateResponse>"
    description: A promise that resolves with the response to the update request.
    typeArgs: []
data:
  name: updateProjectState
  category: state
  link: updateProjectState.md
---
# updateProjectState

```typescript
codebolt.state.updateProjectState(key: string, value: any): Promise<UpdateProjectStateResponse>
```

Updates the project state with a key-value pair.
### Parameters

- **`key`** (string): The key to update in the project state.
- **`value`** (any): The value to set for the key (can be any type).

### Returns

- **`Promise<UpdateProjectStateResponse>`**: A promise that resolves with the response to the update request.

### Example 1: Update Simple Project Status

```js
// Update project status
const result = await codebolt.state.updateProjectState('status', 'completed');
console.log('Project state updated:', result);

// Response structure:
// {
//   success: true,
//   key: 'status',
//   value: 'completed'
// }
```

### Example 2: Track Project Progress

```js
// Update project progress metrics
async function updateProjectProgress(completed, total) {
  const percentage = Math.round((completed / total) * 100);

  // Update individual metrics
  await codebolt.state.updateProjectState('tasksCompleted', completed);
  await codebolt.state.updateProjectState('tasksTotal', total);
  await codebolt.state.updateProjectState('completionPercentage', percentage);

  // Update timestamp
  await codebolt.state.updateProjectState(
    'lastProgressUpdate',
    new Date().toISOString()
  );

  console.log(`Project progress: ${percentage}% (${completed}/${total} tasks)`);

  return { completed, total, percentage };
}

// Usage
await updateProjectProgress(45, 100);
```

### Example 3: Milestone Tracking

```js
// Mark milestone as completed
async function completeMilestone(milestoneId) {
  // Get current state
  const state = await codebolt.state.getProjectState();

  // Update completed milestones list
  const completed = state.completedMilestones || [];
  completed.push({
    id: milestoneId,
    completedAt: new Date().toISOString()
  });

  await codebolt.state.updateProjectState('completedMilestones', completed);

  // Update current milestone
  await codebolt.state.updateProjectState('currentMilestone', milestoneId);

  console.log(`Milestone ${milestoneId} completed`);

  return { milestoneId, completedAt: new Date().toISOString() };
}

// Usage
await completeMilestone('milestone-001');
```

### Example 4: Project Phase Management

```js
// Update project phase
async function updateProjectPhase(newPhase) {
  const state = await codebolt.state.getProjectState();

  // Store previous phase
  await codebolt.state.updateProjectState('previousPhase', state.phase || 'unknown');

  // Update current phase
  await codebolt.state.updateProjectState('phase', newPhase);

  // Update phase change timestamp
  await codebolt.state.updateProjectState(
    'phaseChangeDate',
    new Date().toISOString()
  );

  console.log(`Project phase updated: ${newPhase}`);

  // Verify update
  const updatedState = await codebolt.state.getProjectState();
  return updatedState;
}

// Usage
await updateProjectPhase('development');
await updateProjectPhase('testing');
await updateProjectPhase('deployment');
```

### Example 5: Team Management Updates

```js
// Update project team information
async function addTeamMember(member) {
  const state = await codebolt.state.getProjectState();

  // Get current team
  const team = state.teamMembers || [];

  // Add new member
  team.push({
    ...member,
    addedAt: new Date().toISOString()
  });

  // Update team
  await codebolt.state.updateProjectState('teamMembers', team);

  // Update team size
  await codebolt.state.updateProjectState('teamSize', team.length);

  console.log(`Team member added: ${member.name}`);

  return { teamSize: team.length, members: team };
}

// Usage
await addTeamMember({
  name: 'John Doe',
  role: 'Developer',
  email: 'john@example.com'
});
```

### Example 6: Budget and Resource Tracking

```js
// Update project budget tracking
async function updateBudgetSpent(amount, category) {
  const state = await codebolt.state.getProjectState();

  // Get current budget tracking
  const budgetTracking = state.budgetTracking || {
    totalSpent: 0,
    byCategory: {}
  };

  // Update total spent
  budgetTracking.totalSpent += amount;

  // Update category spending
  if (!budgetTracking.byCategory[category]) {
    budgetTracking.byCategory[category] = 0;
  }
  budgetTracking.byCategory[category] += amount;

  // Calculate remaining budget
  const budgetTotal = state.budgetTotal || 0;
  const remaining = budgetTotal - budgetTracking.totalSpent;

  // Update state
  await codebolt.state.updateProjectState('budgetTracking', budgetTracking);
  await codebolt.state.updateProjectState('budgetUsed', budgetTracking.totalSpent);
  await codebolt.state.updateProjectState('budgetRemaining', remaining);

  console.log(`Budget updated: spent $${budgetTracking.totalSpent}, remaining $${remaining}`);

  return {
    spent: budgetTracking.totalSpent,
    remaining,
    byCategory: budgetTracking.byCategory
  };
}

// Usage
await updateBudgetSpent(5000, 'development');
await updateBudgetSpent(2000, 'design');
```

### Explanation

The `codebolt.state.updateProjectState(key, value)` function updates the project state with a key-value pair. Unlike `addToAgentState()`, this function accepts any type of value, not just strings.

**Key Points:**
- **Any Value Type**: Accepts any type (string, number, object, array)
- **Project-Level**: Updates project-wide state
- **Overwrites**: Replaces existing values for the key
- **Flexible**: Suitable for complex data structures
- **Persistent**: Changes persist until updated again

**Parameters:**
1. **key** (string): The key to update
2. **value** (any): The value to set (any type)

**Return Value Structure:**
```js
{
  success: boolean,        // Whether the operation succeeded
  key: string,            // The key that was updated
  value: any,             // The value that was set
  timestamp?: string,     // Optional timestamp of operation
  previousValue?: any     // Optional previous value if key existed
}
```

**Common Use Cases:**
- Progress tracking
- Status updates
- Milestone management
- Team updates
- Budget tracking
- Phase management
- Configuration changes

**Best Practices:**
1. Use descriptive, consistent key names
2. Store related data in objects
3. Update related keys together
4. Verify updates with getProjectState()
5. Handle errors gracefully
6. Document state structure

**Data Storage Patterns:**

**Simple Values:**
```js
await codebolt.state.updateProjectState('status', 'active');
await codebolt.state.updateProjectState('version', '2.0.0');
await codebolt.state.updateProjectState('completionPercentage', 75);
```

**Objects:**
```js
await codebolt.state.updateProjectState('settings', {
  theme: 'dark',
  language: 'en',
  notifications: true
});
```

**Arrays:**
```js
await codebolt.state.updateProjectState('completedMilestones', [
  'milestone-001',
  'milestone-002'
]);
```

**Nested Data:**
```js
await codebolt.state.updateProjectState('metrics', {
  performance: {
    loadTime: 1200,
    responseTime: 300
  },
  usage: {
    activeUsers: 150,
    totalRequests: 5000
  }
});
```

**Typical Workflow:**
```js
// 1. Get current state
const state = await codebolt.state.getProjectState();

// 2. Modify data
const completed = (state.tasksCompleted || 0) + 1;

// 3. Update state
await codebolt.state.updateProjectState('tasksCompleted', completed);

// 4. Update related fields
await codebolt.state.updateProjectState(
  'lastTaskCompletion',
  new Date().toISOString()
);

// 5. Verify update
const updatedState = await codebolt.state.getProjectState();
```

**Advanced Patterns:**
- Incremental updates (counters)
- Array manipulation (add/remove items)
- Object merging (partial updates)
- Complex data structures
- Related field updates
- Transaction-like updates

**Related Functions:**
- `getProjectState()`: Retrieve project state
- `getApplicationState()`: Get application state
- `getAgentState()`: Get agent state
- `addToAgentState()`: Add to agent state

**Comparison with addToAgentState():**
- `updateProjectState()`: Any value type, project-level
- `addToAgentState()`: String values only, agent-level

**Notes:**
- Accepts any value type (not just strings)
- Overwrites existing keys
- No automatic merging of objects
- Use getProjectState() to read current value
- Consider atomic updates for related fields
- Suitable for complex data structures
- Changes are immediate and persistent
- No automatic rollback on failure
- Validate data before updating