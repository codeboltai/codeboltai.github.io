---
cbapicategory:
  - name: GetAllPlans
    link: /docs/api/apiaccess/actionPlan/getAllPlans
    description: Retrieves all action plans in the system.
  - name: GetPlanDetail
    link: /docs/api/apiaccess/actionPlan/getPlanDetail
    description: Gets detailed information about a specific action plan by ID.
  - name: GetActionPlanDetail
    link: /docs/api/apiaccess/actionPlan/getActionPlanDetail
    description: Alternative method to get action plan details with extended information.
  - name: CreateActionPlan
    link: /docs/api/apiaccess/actionPlan/createActionPlan
    description: Creates a new action plan with specified configuration.
  - name: UpdateActionPlan
    link: /docs/api/apiaccess/actionPlan/updateActionPlan
    description: Updates an existing action plan's properties.
  - name: AddTaskToActionPlan
    link: /docs/api/apiaccess/actionPlan/addTaskToActionPlan
    description: Adds a new task to an existing action plan.
  - name: AddGroupToActionPlan
    link: /docs/api/apiaccess/actionPlan/addGroupToActionPlan
    description: Adds a task group (parallel, loop, conditional, or wait) to an action plan.
  - name: StartTaskStep
    link: /docs/api/apiaccess/actionPlan/startTaskStep
    description: Executes a specific task step within an action plan.
  - name: StartTaskStepWithListener
    link: /docs/api/apiaccess/actionPlan/startTaskStepWithListener
    description: Executes a task step with real-time event listening capabilities.
---

# Action Plan

<CBAPICategory />

The Action Plan module provides comprehensive functionality for creating, managing, and executing structured action plans within your Codebolt applications. Action plans allow you to organize complex workflows into manageable tasks and task groups with support for parallel execution, loops, conditionals, and wait conditions.

## Quick Start Guide

### Basic Action Plan Workflow

```javascript
import codebolt from '@codebolt/codeboltjs';

async function quickStart() {
  try {
    // Step 1: Create a new action plan
    const plan = await codebolt.actionPlan.createActionPlan({
      name: 'API Development Plan',
      description: 'Build a complete REST API with authentication',
      agentId: 'my-agent-id',
      status: 'active'
    });

    console.log('Created plan:', plan.planId);

    // Step 2: Add tasks to the plan
    await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
      name: 'Setup Express Server',
      description: 'Initialize Express.js application',
      priority: 'high',
      taskType: 'setup'
    });

    await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
      name: 'Create Authentication Routes',
      description: 'Implement login and registration endpoints',
      priority: 'high',
      taskType: 'development'
    });

    // Step 3: Execute tasks
    const planDetails = await codebolt.actionPlan.getPlanDetail(plan.planId);
    for (const task of planDetails.tasks) {
      const result = await codebolt.actionPlan.startTaskStep(
        plan.planId,
        task.id
      );
      console.log(`Task ${task.name} completed:`, result.success);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Minimal Example

```javascript
// Create and execute a simple action plan
const plan = await codebolt.actionPlan.createActionPlan({
  name: 'Quick Task',
  description: 'Simple one-task plan'
});

await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
  name: 'Generate README',
  description: 'Create project documentation'
});

const details = await codebolt.actionPlan.getPlanDetail(plan.planId);
await codebolt.actionPlan.startTaskStep(plan.planId, details.tasks[0].id);
```

## Common Workflows

### Workflow 1: Sequential Task Execution

```javascript
async function sequentialWorkflow() {
  // Create plan
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Database Migration',
    description: 'Step-by-step database setup'
  });

  // Add sequential tasks
  const tasks = [
    { name: 'Backup Database', description: 'Create backup before migration' },
    { name: 'Run Migrations', description: 'Execute migration scripts' },
    { name: 'Verify Data', description: 'Check data integrity' },
    { name: 'Update Indexes', description: 'Rebuild database indexes' }
  ];

  for (const task of tasks) {
    await codebolt.actionPlan.addTaskToActionPlan(plan.planId, task);
  }

  // Execute tasks in sequence
  const planDetails = await codebolt.actionPlan.getPlanDetail(plan.planId);
  
  for (const task of planDetails.tasks) {
    console.log(`Starting: ${task.name}`);
    const result = await codebolt.actionPlan.startTaskStep(plan.planId, task.id);
    
    if (!result.success) {
      console.error(`Task failed: ${task.name}`);
      break; // Stop on first failure
    }
    
    console.log(`Completed: ${task.name}`);
  }
}
```

### Workflow 2: Parallel Task Execution

```javascript
async function parallelWorkflow() {
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Multi-Service Deployment',
    description: 'Deploy multiple services simultaneously'
  });

  // Add a parallel group
  await codebolt.actionPlan.addGroupToActionPlan(plan.planId, {
    type: 'parallelGroup',
    name: 'Deploy Services',
    groupItems: {
      'api-service': [
        { name: 'Deploy API', description: 'Deploy API service' }
      ],
      'web-service': [
        { name: 'Deploy Web', description: 'Deploy web frontend' }
      ],
      'worker-service': [
        { name: 'Deploy Worker', description: 'Deploy background worker' }
      ]
    }
  });

  // Execute the parallel group
  const details = await codebolt.actionPlan.getPlanDetail(plan.planId);
  const parallelGroup = details.tasks.find(t => t.type === 'parallelGroup');
  
  await codebolt.actionPlan.startTaskStep(plan.planId, parallelGroup.id);
}
```

### Workflow 3: Conditional Execution (If Group)

```javascript
async function conditionalWorkflow() {
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Conditional Deployment',
    description: 'Deploy based on environment'
  });

  // Add conditional group
  await codebolt.actionPlan.addGroupToActionPlan(plan.planId, {
    type: 'ifGroup',
    name: 'Environment Check',
    ifTasks: [
      {
        condition: 'process.env.NODE_ENV === "production"',
        tasks: [
          { name: 'Production Deploy', description: 'Deploy to production' },
          { name: 'Notify Team', description: 'Send deployment notification' }
        ]
      },
      {
        condition: 'process.env.NODE_ENV === "staging"',
        tasks: [
          { name: 'Staging Deploy', description: 'Deploy to staging' }
        ]
      }
    ]
  });

  const details = await codebolt.actionPlan.getPlanDetail(plan.planId);
  const ifGroup = details.tasks.find(t => t.type === 'ifGroup');
  
  await codebolt.actionPlan.startTaskStep(plan.planId, ifGroup.id);
}
```

### Workflow 4: Loop Execution

```javascript
async function loopWorkflow() {
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Batch Processing',
    description: 'Process multiple items in a loop'
  });

  // Add loop group
  await codebolt.actionPlan.addGroupToActionPlan(plan.planId, {
    type: 'loopGroup',
    name: 'Process Files',
    loopTasks: [
      {
        name: 'Process File',
        description: 'Process each file in the directory',
        loopVariable: 'file',
        loopCollection: ['file1.txt', 'file2.txt', 'file3.txt']
      }
    ]
  });

  const details = await codebolt.actionPlan.getPlanDetail(plan.planId);
  const loopGroup = details.tasks.find(t => t.type === 'loopGroup');
  
  await codebolt.actionPlan.startTaskStep(plan.planId, loopGroup.id);
}
```

### Workflow 5: Wait Until Condition

```javascript
async function waitWorkflow() {
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Deployment with Health Check',
    description: 'Deploy and wait for service to be healthy'
  });

  // Add deployment task
  await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
    name: 'Deploy Service',
    description: 'Deploy the application'
  });

  // Add wait group
  await codebolt.actionPlan.addGroupToActionPlan(plan.planId, {
    type: 'waitUntilGroup',
    name: 'Wait for Health Check',
    waitTasks: [
      {
        name: 'Check Service Health',
        description: 'Wait until service responds with 200 OK',
        condition: 'serviceHealthy === true',
        timeout: 300000, // 5 minutes
        checkInterval: 5000 // Check every 5 seconds
      }
    ]
  });

  // Execute plan
  const details = await codebolt.actionPlan.getPlanDetail(plan.planId);
  for (const task of details.tasks) {
    await codebolt.actionPlan.startTaskStep(plan.planId, task.id);
  }
}
```

### Workflow 6: Real-time Task Monitoring

```javascript
async function monitoredWorkflow() {
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Monitored Build',
    description: 'Build with real-time progress tracking'
  });

  await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
    name: 'Build Application',
    description: 'Compile and bundle application'
  });

  const details = await codebolt.actionPlan.getPlanDetail(plan.planId);
  const task = details.tasks[0];

  // Start task with listener for real-time updates
  const cleanup = codebolt.actionPlan.startTaskStepWithListener(
    plan.planId,
    task.id,
    (response) => {
      console.log('Task update:', {
        status: response.status,
        progress: response.progress,
        message: response.message
      });

      if (response.status === 'completed') {
        console.log('Task completed successfully!');
        cleanup(); // Remove listener
      } else if (response.status === 'failed') {
        console.error('Task failed:', response.error);
        cleanup(); // Remove listener
      }
    }
  );

  // Cleanup will be called automatically when task completes
  // or you can call it manually to stop listening
}
```

## Advanced Patterns

### Pattern 1: Dynamic Plan Generation

```javascript
async function dynamicPlanGeneration(requirements) {
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Dynamic Plan',
    description: 'Generated based on requirements'
  });

  // Analyze requirements and generate tasks
  for (const requirement of requirements) {
    if (requirement.type === 'feature') {
      await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
        name: `Implement ${requirement.name}`,
        description: requirement.description,
        priority: requirement.priority || 'medium'
      });
    } else if (requirement.type === 'test') {
      await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
        name: `Test ${requirement.name}`,
        description: `Write tests for ${requirement.name}`,
        priority: 'high',
        taskType: 'testing'
      });
    }
  }

  return plan;
}

// Usage
const requirements = [
  { type: 'feature', name: 'User Authentication', description: 'Login/Signup', priority: 'high' },
  { type: 'feature', name: 'Profile Management', description: 'User profiles' },
  { type: 'test', name: 'Authentication', description: 'Auth tests' }
];

const plan = await dynamicPlanGeneration(requirements);
```

### Pattern 2: Plan Templates

```javascript
class ActionPlanTemplate {
  static async createFromTemplate(templateName, variables = {}) {
    const templates = {
      'api-development': {
        name: 'API Development',
        tasks: [
          { name: 'Setup Project', description: 'Initialize project structure' },
          { name: 'Create Models', description: 'Define data models' },
          { name: 'Implement Routes', description: 'Create API endpoints' },
          { name: 'Add Tests', description: 'Write unit and integration tests' },
          { name: 'Documentation', description: 'Generate API documentation' }
        ]
      },
      'deployment': {
        name: 'Deployment Pipeline',
        tasks: [
          { name: 'Run Tests', description: 'Execute test suite' },
          { name: 'Build Application', description: 'Compile and bundle' },
          { name: 'Deploy to Staging', description: 'Deploy to staging environment' },
          { name: 'Run Smoke Tests', description: 'Verify deployment' },
          { name: 'Deploy to Production', description: 'Production deployment' }
        ]
      }
    };

    const template = templates[templateName];
    if (!template) {
      throw new Error(`Template ${templateName} not found`);
    }

    // Create plan from template
    const plan = await codebolt.actionPlan.createActionPlan({
      name: template.name,
      description: `Generated from ${templateName} template`,
      ...variables
    });

    // Add tasks from template
    for (const task of template.tasks) {
      await codebolt.actionPlan.addTaskToActionPlan(plan.planId, task);
    }

    return plan;
  }
}

// Usage
const plan = await ActionPlanTemplate.createFromTemplate('api-development', {
  agentId: 'my-agent'
});
```

### Pattern 3: Plan Composition

```javascript
async function composePlans(subPlans) {
  const masterPlan = await codebolt.actionPlan.createActionPlan({
    name: 'Master Plan',
    description: 'Composed of multiple sub-plans'
  });

  // Add each sub-plan as a task group
  for (const subPlan of subPlans) {
    const details = await codebolt.actionPlan.getPlanDetail(subPlan.planId);
    
    await codebolt.actionPlan.addGroupToActionPlan(masterPlan.planId, {
      type: 'parallelGroup',
      name: subPlan.name,
      groupItems: {
        [subPlan.planId]: details.tasks
      }
    });
  }

  return masterPlan;
}
```

### Pattern 4: Error Recovery

```javascript
async function executeWithRecovery(planId) {
  const details = await codebolt.actionPlan.getPlanDetail(planId);
  const results = [];

  for (const task of details.tasks) {
    let attempts = 0;
    const maxAttempts = 3;
    let success = false;

    while (attempts < maxAttempts && !success) {
      try {
        const result = await codebolt.actionPlan.startTaskStep(planId, task.id);
        
        if (result.success) {
          success = true;
          results.push({ taskId: task.id, status: 'success', attempts: attempts + 1 });
        } else {
          attempts++;
          if (attempts < maxAttempts) {
            console.log(`Retrying task ${task.name} (attempt ${attempts + 1})`);
            await new Promise(resolve => setTimeout(resolve, 2000 * attempts));
          }
        }
      } catch (error) {
        attempts++;
        if (attempts >= maxAttempts) {
          results.push({
            taskId: task.id,
            status: 'failed',
            error: error.message,
            attempts
          });
        }
      }
    }
  }

  return results;
}
```

## Best Practices

### 1. Plan Organization

```javascript
// Good: Well-structured plan with clear task hierarchy
const plan = await codebolt.actionPlan.createActionPlan({
  name: 'Feature Development',
  description: 'Implement user authentication feature',
  agentId: 'dev-agent',
  metadata: {
    feature: 'authentication',
    sprint: 'sprint-23',
    priority: 'high'
  }
});

// Add tasks in logical order
await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
  name: 'Design Database Schema',
  description: 'Create user and session tables',
  priority: 'high',
  taskType: 'design'
});

await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
  name: 'Implement Authentication Logic',
  description: 'Create login/signup functions',
  priority: 'high',
  taskType: 'development'
});
```

### 2. Task Naming Conventions

```javascript
// Good: Clear, action-oriented task names
const goodTasks = [
  'Setup Express Server',
  'Create User Model',
  'Implement JWT Authentication',
  'Write Integration Tests',
  'Deploy to Staging'
];

// Bad: Vague or unclear names
const badTasks = [
  'Do stuff',
  'Fix things',
  'Update',
  'Task 1'
];
```

### 3. Error Handling

```javascript
async function robustPlanExecution(planId) {
  try {
    const details = await codebolt.actionPlan.getPlanDetail(planId);
    
    if (!details.success) {
      throw new Error(`Failed to get plan details: ${details.error}`);
    }

    for (const task of details.tasks) {
      try {
        const result = await codebolt.actionPlan.startTaskStep(planId, task.id);
        
        if (!result.success) {
          console.error(`Task ${task.name} failed:`, result.error);
          
          // Decide whether to continue or stop
          if (task.priority === 'critical') {
            throw new Error(`Critical task failed: ${task.name}`);
          }
        }
      } catch (taskError) {
        console.error(`Error executing task ${task.name}:`, taskError);
        
        // Log error for debugging
        await logTaskError(planId, task.id, taskError);
        
        // Continue with next task or rethrow based on severity
        if (task.priority === 'critical') {
          throw taskError;
        }
      }
    }
  } catch (error) {
    console.error('Plan execution failed:', error);
    throw error;
  }
}
```

### 4. Progress Tracking

```javascript
class PlanProgressTracker {
  constructor(planId) {
    this.planId = planId;
    this.progress = {
      total: 0,
      completed: 0,
      failed: 0,
      inProgress: 0
    };
  }

  async initialize() {
    const details = await codebolt.actionPlan.getPlanDetail(this.planId);
    this.progress.total = details.tasks.length;
  }

  async executeWithTracking() {
    await this.initialize();
    const details = await codebolt.actionPlan.getPlanDetail(this.planId);

    for (const task of details.tasks) {
      this.progress.inProgress++;
      this.logProgress();

      try {
        const result = await codebolt.actionPlan.startTaskStep(
          this.planId,
          task.id
        );

        if (result.success) {
          this.progress.completed++;
        } else {
          this.progress.failed++;
        }
      } catch (error) {
        this.progress.failed++;
      } finally {
        this.progress.inProgress--;
        this.logProgress();
      }
    }

    return this.progress;
  }

  logProgress() {
    const percentage = (this.progress.completed / this.progress.total) * 100;
    console.log(`Progress: ${percentage.toFixed(1)}% (${this.progress.completed}/${this.progress.total})`);
  }

  getProgress() {
    return {
      ...this.progress,
      percentage: (this.progress.completed / this.progress.total) * 100
    };
  }
}

// Usage
const tracker = new PlanProgressTracker(planId);
const finalProgress = await tracker.executeWithTracking();
console.log('Final progress:', finalProgress);
```

### 5. Plan Validation

```javascript
async function validatePlan(planId) {
  const details = await codebolt.actionPlan.getPlanDetail(planId);
  const issues = [];

  // Check if plan has tasks
  if (!details.tasks || details.tasks.length === 0) {
    issues.push('Plan has no tasks');
  }

  // Check for duplicate task names
  const taskNames = details.tasks.map(t => t.name);
  const duplicates = taskNames.filter((name, index) => 
    taskNames.indexOf(name) !== index
  );
  
  if (duplicates.length > 0) {
    issues.push(`Duplicate task names found: ${duplicates.join(', ')}`);
  }

  // Check for circular dependencies
  // (Implementation depends on your task dependency structure)

  // Check for missing required fields
  for (const task of details.tasks) {
    if (!task.name) {
      issues.push(`Task ${task.id} is missing a name`);
    }
    if (!task.description) {
      issues.push(`Task ${task.name || task.id} is missing a description`);
    }
  }

  return {
    valid: issues.length === 0,
    issues
  };
}

// Usage
const validation = await validatePlan(planId);
if (!validation.valid) {
  console.error('Plan validation failed:', validation.issues);
}
```

## Performance Considerations

1. **Batch Operations**: When adding multiple tasks, consider batching them if the API supports it
2. **Parallel Execution**: Use parallel groups for independent tasks to reduce total execution time
3. **Task Granularity**: Balance between too many small tasks (overhead) and too few large tasks (lack of progress visibility)
4. **Listener Cleanup**: Always clean up event listeners to prevent memory leaks
5. **Plan Caching**: Cache plan details when executing multiple tasks to reduce API calls

## Security Considerations

1. **Input Validation**: Validate all task inputs before adding to plans
2. **Access Control**: Ensure proper authorization before executing plans
3. **Sensitive Data**: Don't store sensitive information in task descriptions
4. **Audit Logging**: Log all plan modifications and executions
5. **Resource Limits**: Implement limits on plan size and execution time

## Common Pitfalls

### Pitfall 1: Not Checking Plan Existence

```javascript
// Problem: Assuming plan exists
const result = await codebolt.actionPlan.startTaskStep(planId, taskId);

// Solution: Verify plan exists first
const details = await codebolt.actionPlan.getPlanDetail(planId);
if (!details.success) {
  throw new Error('Plan not found');
}
const result = await codebolt.actionPlan.startTaskStep(planId, taskId);
```

### Pitfall 2: Forgetting to Clean Up Listeners

```javascript
// Problem: Memory leak from uncleaned listeners
codebolt.actionPlan.startTaskStepWithListener(planId, taskId, callback);

// Solution: Store and call cleanup function
const cleanup = codebolt.actionPlan.startTaskStepWithListener(
  planId,
  taskId,
  callback
);

// Later, when done:
cleanup();
```

### Pitfall 3: Not Handling Task Dependencies

```javascript
// Problem: Starting tasks without checking dependencies
for (const task of tasks) {
  await codebolt.actionPlan.startTaskStep(planId, task.id);
}

// Solution: Check and respect task dependencies
const taskGraph = buildDependencyGraph(tasks);
const executionOrder = topologicalSort(taskGraph);

for (const taskId of executionOrder) {
  await codebolt.actionPlan.startTaskStep(planId, taskId);
}
```

## Integration Examples

### With Agent Module

```javascript
async function agentDrivenPlan(agentId, task) {
  // Create plan for agent
  const plan = await codebolt.actionPlan.createActionPlan({
    name: `Agent Task: ${task}`,
    description: task,
    agentId: agentId
  });

  // Let agent break down the task
  const breakdown = await codebolt.agent.startAgent(agentId, 
    `Break down this task into steps: ${task}`
  );

  // Add steps as tasks
  for (const step of breakdown.steps) {
    await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
      name: step.name,
      description: step.description
    });
  }

  return plan;
}
```

### With File System

```javascript
async function fileBasedPlan(projectPath) {
  const plan = await codebolt.actionPlan.createActionPlan({
    name: 'Project Setup',
    description: `Setup project at ${projectPath}`
  });

  // Analyze project structure
  const files = await codebolt.fs.listFiles(projectPath);
  
  // Generate tasks based on files
  if (!files.some(f => f.name === 'package.json')) {
    await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
      name: 'Initialize NPM',
      description: 'Create package.json'
    });
  }

  if (!files.some(f => f.name === 'README.md')) {
    await codebolt.actionPlan.addTaskToActionPlan(plan.planId, {
      name: 'Create README',
      description: 'Generate project documentation'
    });
  }

  return plan;
}
```

