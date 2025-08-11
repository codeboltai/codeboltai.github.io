---
name: getTasks
cbbaseinfo:
  description: Retrieves all tasks from the task management system using WebSocket communication. This method returns a comprehensive list of all tasks currently stored in the system.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetTasksResponse>
    description: A promise that resolves with the response containing all tasks from the task management system.
data:
  name: getTasks
  category: taskplaner
  link: getTasks.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetTasksResponse` object with the following properties:

- **`type`** (string): Always "getTasksResponse".
- **`tasks`** (Task[], optional): An array of Task objects containing all tasks in the system. Each Task object has:
  - **`id`** (string, optional): Unique identifier for the task.
  - **`title`** (string, optional): The title or name of the task.
  - **`description`** (string, optional): Detailed description of the task.
  - **`completed`** (boolean, optional): Indicates whether the task is completed.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic task retrieval
const tasksResult = await codebolt.taskplaner.getTasks();
console.log('✅ Tasks retrieved successfully');
console.log('Tasks:', tasksResult.tasks);
console.log('Total tasks:', tasksResult.tasks?.length || 0);

// Example 2: Processing task list with error handling
try {
  const taskResponse = await codebolt.taskplaner.getTasks();
  
  if (taskResponse.success && taskResponse.tasks) {
    console.log(`Found ${taskResponse.tasks.length} tasks:`);
    
    taskResponse.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title || task.description || 'Untitled Task'}`);
      if (task.completed) {
        console.log('   ✅ Completed');
      } else {
        console.log('   ⏳ Pending');
      }
    });
  } else {
    console.warn('No tasks available or failed to retrieve tasks');
  }
} catch (error) {
  console.error('Error retrieving tasks:', error);
}

// Example 3: Filtering tasks by completion status
const filterTasksByStatus = async () => {
  const tasksResponse = await codebolt.taskplaner.getTasks();
  
  if (!tasksResponse.success || !tasksResponse.tasks) {
    return { completed: [], pending: [] };
  }
  
  const completed = tasksResponse.tasks.filter(task => task.completed === true);
  const pending = tasksResponse.tasks.filter(task => task.completed !== true);
  
  return {
    completed,
    pending,
    total: tasksResponse.tasks.length
  };
};

// Usage
const taskStats = await filterTasksByStatus();
console.log(`Completed: ${taskStats.completed.length}`);
console.log(`Pending: ${taskStats.pending.length}`);
console.log(`Total: ${taskStats.total}`);

// Example 4: Task summary and reporting
const generateTaskSummary = async () => {
  const tasksResult = await codebolt.taskplaner.getTasks();
  
  if (!tasksResult.success) {
    throw new Error('Failed to retrieve tasks');
  }
  
  const tasks = tasksResult.tasks || [];
  
  const summary = {
    totalTasks: tasks.length,
    completedTasks: tasks.filter(t => t.completed).length,
    pendingTasks: tasks.filter(t => !t.completed).length,
    tasksWithTitles: tasks.filter(t => t.title).length,
    tasksWithDescriptions: tasks.filter(t => t.description).length,
    taskList: tasks.map(task => ({
      id: task.id,
      title: task.title || 'No title',
      status: task.completed ? 'Completed' : 'Pending'
    }))
  };
  
  return summary;
};

// Example 5: Task search and filtering
const searchTasks = async (searchTerm) => {
  const tasksResponse = await codebolt.taskplaner.getTasks();
  
  if (!tasksResponse.tasks) {
    return [];
  }
  
  const searchLower = searchTerm.toLowerCase();
  
  return tasksResponse.tasks.filter(task => 
    (task.title && task.title.toLowerCase().includes(searchLower)) ||
    (task.description && task.description.toLowerCase().includes(searchLower))
  );
};

// Usage
const searchResults = await searchTasks('documentation');
console.log('Tasks matching "documentation":', searchResults);

// Example 6: Task list with detailed display
const displayTaskList = async () => {
  const tasksResult = await codebolt.taskplaner.getTasks();
  
  if (!tasksResult.success) {
    console.error('❌ Failed to retrieve tasks');
    return;
  }
  
  const tasks = tasksResult.tasks || [];
  
  if (tasks.length === 0) {
    console.log('📝 No tasks found');
    return;
  }
  
  console.log('📋 Task List:');
  console.log('─'.repeat(50));
  
  tasks.forEach((task, index) => {
    const status = task.completed ? '✅' : '⏳';
    const title = task.title || task.description || `Task ${index + 1}`;
    const id = task.id ? ` (ID: ${task.id})` : '';
    
    console.log(`${status} ${title}${id}`);
    
    if (task.description && task.title !== task.description) {
      console.log(`   📄 ${task.description}`);
    }
  });
  
  console.log('─'.repeat(50));
  console.log(`Total: ${tasks.length} tasks`);
};

// Example 7: Task validation and cleanup
const validateTasks = async () => {
  const tasksResponse = await codebolt.taskplaner.getTasks();
  
  if (!tasksResponse.success) {
    return { valid: [], invalid: [], errors: ['Failed to retrieve tasks'] };
  }
  
  const tasks = tasksResponse.tasks || [];
  const valid = [];
  const invalid = [];
  const errors = [];
  
  tasks.forEach((task, index) => {
    if (!task.title && !task.description) {
      invalid.push({ task, reason: 'No title or description', index });
      errors.push(`Task ${index + 1}: Missing title and description`);
    } else if (typeof task.completed !== 'boolean') {
      invalid.push({ task, reason: 'Invalid completion status', index });
      errors.push(`Task ${index + 1}: Invalid completion status`);
    } else {
      valid.push(task);
    }
  });
  
  return { valid, invalid, errors };
};

// Example 8: Task monitoring and refresh
const monitorTasks = async () => {
  console.log('🔄 Monitoring tasks...');
  
  const tasksResponse = await codebolt.taskplaner.getTasks();
  
  const monitor = {
    timestamp: new Date().toISOString(),
    success: tasksResponse.success,
    taskCount: tasksResponse.tasks?.length || 0,
    completedCount: tasksResponse.tasks?.filter(t => t.completed).length || 0,
    pendingCount: tasksResponse.tasks?.filter(t => !t.completed).length || 0,
    hasErrors: !tasksResponse.success,
    errorMessage: tasksResponse.error || tasksResponse.message
  };
  
  console.log('📊 Task Monitor Report:');
  console.log(`   Total Tasks: ${monitor.taskCount}`);
  console.log(`   Completed: ${monitor.completedCount}`);
  console.log(`   Pending: ${monitor.pendingCount}`);
  console.log(`   Status: ${monitor.success ? '✅ OK' : '❌ Error'}`);
  
  if (monitor.hasErrors) {
    console.log(`   Error: ${monitor.errorMessage}`);
  }
  
  return monitor;
};

### Common Use Cases

1. **Task Dashboard**: Display all tasks in a dashboard or management interface
2. **Progress Tracking**: Monitor completion status across all tasks
3. **Task Reporting**: Generate reports and statistics about task completion
4. **Task Search**: Find specific tasks based on title or description content
5. **Task Validation**: Verify task data integrity and completeness
6. **Workflow Management**: Understand current workload and task distribution
7. **Task Synchronization**: Keep local task lists synchronized with the server

### Notes

- This method retrieves all tasks from the system without filtering
- The `tasks` array may be empty if no tasks exist in the system
- Each task object may have optional properties - check for existence before using
- Task completion status is represented by the `completed` boolean property
- Task identification can be done through the `id` property when available
- The method provides a snapshot of tasks at the time of the request
- Consider implementing local caching if this method is called frequently
- Task data structure follows the `Task` interface with optional properties
