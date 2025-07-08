---
name: addTask
cbbaseinfo:
  description: Adds a new task to the task management system via WebSocket communication. This method creates a new task with the provided description and stores it in the system for tracking and management.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The task description to be added. This should be a clear, descriptive string that explains what needs to be accomplished.
  returns:
    signatureTypeName: Promise<AddTaskResponse>
    description: A promise that resolves with the response containing the newly created task information.
data:
  name: addTask
  category: taskplaner
  link: addTask.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `AddTaskResponse` object with the following properties:

- **`type`** (string): Always "addTaskResponse".
- **`task`** (Task, optional): The newly created Task object containing:
  - **`id`** (string, optional): Unique identifier for the task.
  - **`title`** (string, optional): The title or name of the task.
  - **`description`** (string, optional): Detailed description of the task.
  - **`completed`** (boolean, optional): Indicates whether the task is completed (typically false for new tasks).
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic task addition
const addResult = await codebolt.taskplaner.addTask('Complete project documentation');
console.log('✅ Task added successfully');
console.log('New task:', addResult.task);
console.log('Task ID:', addResult.task?.id);

// Example 2: Add task with error handling
const addTaskSafely = async (taskDescription) => {
  try {
    const result = await codebolt.taskplaner.addTask(taskDescription);
    
    if (result.success) {
      console.log('✅ Task added successfully');
      console.log('Task details:', result.task);
      return result.task;
    } else {
      console.error('❌ Failed to add task:', result.error);
      return null;
    }
  } catch (error) {
    console.error('❌ Exception while adding task:', error.message);
    return null;
  }
};

// Usage
const newTask = await addTaskSafely('Review code changes');

// Example 3: Add multiple tasks in sequence
const addMultipleTasks = async (taskDescriptions) => {
  const results = [];
  
  for (const description of taskDescriptions) {
    try {
      const result = await codebolt.taskplaner.addTask(description);
      results.push({
        description,
        success: result.success,
        task: result.task,
        error: result.error
      });
      
      console.log(`${result.success ? '✅' : '❌'} ${description}`);
    } catch (error) {
      console.error(`❌ Failed to add "${description}":`, error);
      results.push({
        description,
        success: false,
        error: error.message
      });
    }
  }
  
  return results;
};

// Usage
const tasks = [
  'Review code changes',
  'Update unit tests', 
  'Fix bug in authentication module',
  'Prepare release notes'
];

const addResults = await addMultipleTasks(tasks);
console.log('✅ Multiple tasks added');
console.log('Results:', addResults);

// Example 4: Add task with validation
const addValidatedTask = async (taskDescription) => {
  // Validate input
  if (!taskDescription || typeof taskDescription !== 'string') {
    throw new Error('Task description must be a non-empty string');
  }
  
  if (taskDescription.trim().length === 0) {
    throw new Error('Task description cannot be empty');
  }
  
  if (taskDescription.length > 500) {
    throw new Error('Task description is too long (max 500 characters)');
  }
  
  const trimmedDescription = taskDescription.trim();
  
  console.log(`🔄 Adding task: "${trimmedDescription}"`);
  
  const result = await codebolt.taskplaner.addTask(trimmedDescription);
  
  if (result.success) {
    console.log('✅ Validated task added successfully');
    console.log('Task details:', result.task);
  } else {
    console.error('❌ Validated task addition failed:', result.error);
  }
  
  return result;
};

// Usage
await addValidatedTask('  Complete API documentation  ');

// Example 5: Add task with priority and category
const addCategorizedTask = async (taskData) => {
  const { description, priority, category, assignee } = taskData;
  
  // Format task description with metadata
  let formattedDescription = description;
  
  if (priority) {
    formattedDescription += ` [PRIORITY: ${priority.toUpperCase()}]`;
  }
  
  if (category) {
    formattedDescription += ` [CATEGORY: ${category}]`;
  }
  
  if (assignee) {
    formattedDescription += ` [ASSIGNED: ${assignee}]`;
  }
  
  const result = await codebolt.taskplaner.addTask(formattedDescription);
  
  if (result.success) {
    console.log('✅ Categorized task added');
    console.log('Task:', result.task);
  } else {
    console.error('❌ Failed to add categorized task:', result.error);
  }
  
  return result;
};

// Usage
await addCategorizedTask({
  description: 'Implement user authentication',
  priority: 'high',
  category: 'Security',
  assignee: 'John Doe'
});

// Example 6: Add task with deadline and dependencies
const addDetailedTask = async (taskInfo) => {
  const { 
    title, 
    description, 
    deadline, 
    dependencies, 
    estimatedHours,
    tags 
  } = taskInfo;
  
  let taskDescription = title || description;
  
  if (deadline) {
    taskDescription += ` [DEADLINE: ${deadline}]`;
  }
  
  if (estimatedHours) {
    taskDescription += ` [ESTIMATE: ${estimatedHours}h]`;
  }
  
  if (dependencies && dependencies.length > 0) {
    taskDescription += ` [DEPENDS: ${dependencies.join(', ')}]`;
  }
  
  if (tags && tags.length > 0) {
    taskDescription += ` [TAGS: ${tags.join(', ')}]`;
  }
  
  const result = await codebolt.taskplaner.addTask(taskDescription);
  
  if (result.success) {
    console.log('✅ Detailed task added');
    console.log('Task:', result.task);
  } else {
    console.error('❌ Failed to add detailed task:', result.error);
  }
  
  return result;
};

// Usage
await addDetailedTask({
  title: 'Database Migration',
  description: 'Migrate user data to new schema',
  deadline: '2024-02-15',
  dependencies: ['Schema Design', 'Backup Creation'],
  estimatedHours: 8,
  tags: ['database', 'migration', 'critical']
});

// Example 7: Bulk task creation with progress tracking
const bulkAddTasks = async (taskList, onProgress) => {
  const results = {
    successful: [],
    failed: [],
    total: taskList.length
  };
  
  console.log(`🔄 Adding ${taskList.length} tasks...`);
  
  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    
    try {
      const result = await codebolt.taskplaner.addTask(task);
      
      if (result.success) {
        results.successful.push({ task, result });
        console.log(`✅ [${i + 1}/${taskList.length}] Added: ${task}`);
      } else {
        results.failed.push({ task, error: result.error });
        console.error(`❌ [${i + 1}/${taskList.length}] Failed: ${task}`);
      }
    } catch (error) {
      results.failed.push({ task, error: error.message });
      console.error(`❌ [${i + 1}/${taskList.length}] Exception: ${task}`);
    }
    
    // Call progress callback if provided
    if (onProgress) {
      onProgress(i + 1, taskList.length, results);
    }
    
    // Small delay to avoid overwhelming the system
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`✅ Bulk operation completed: ${results.successful.length} successful, ${results.failed.length} failed`);
  
  return results;
};

// Usage
const taskList = [
  'Set up development environment',
  'Create project structure',
  'Implement core functionality',
  'Write unit tests',
  'Create documentation',
  'Deploy to staging'
];

const bulkResults = await bulkAddTasks(taskList, (current, total, results) => {
  console.log(`Progress: ${current}/${total} (${Math.round(current/total*100)}%)`);
});

// Example 8: Add task with retry mechanism
const addTaskWithRetry = async (taskDescription, maxRetries = 3) => {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Attempt ${attempt} to add task: ${taskDescription}`);
      
      const result = await codebolt.taskplaner.addTask(taskDescription);
      
      if (result.success) {
        console.log(`✅ Task added successfully on attempt ${attempt}`);
        return result;
      } else {
        lastError = result.error || 'Unknown error';
        console.warn(`⚠️ Attempt ${attempt} failed: ${lastError}`);
      }
    } catch (error) {
      lastError = error.message;
      console.warn(`⚠️ Attempt ${attempt} failed with exception: ${lastError}`);
    }
    
    if (attempt < maxRetries) {
      const delay = attempt * 1000; // Exponential backoff
      console.log(`⏳ Waiting ${delay}ms before retry...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error(`Failed to add task after ${maxRetries} attempts. Last error: ${lastError}`);
};

// Usage
try {
  await addTaskWithRetry('Critical task - must be added');
} catch (error) {
  console.error('❌ Task addition failed permanently:', error.message);
}

### Common Use Cases

1. **Project Planning**: Add tasks for project milestones and deliverables
2. **Issue Tracking**: Create tasks for bug fixes and feature requests
3. **Team Coordination**: Add tasks for team members with specific assignments
4. **Workflow Management**: Create tasks for different stages of a process
5. **Personal Task Management**: Add individual tasks for personal productivity
6. **Sprint Planning**: Add tasks for agile development sprints
7. **Maintenance Tasks**: Create recurring or maintenance-related tasks
8. **Documentation**: Add tasks for writing and updating documentation

### Notes

- The `task` parameter should be a descriptive string that clearly explains what needs to be done
- Task descriptions can include additional metadata like priority, deadlines, or assignments
- The method returns the created task object for immediate use or reference
- New tasks are typically created with `completed: false` status
- Consider implementing validation to ensure task descriptions meet your requirements
- Use meaningful task descriptions to improve task management and tracking
- The response includes success/error status to confirm the creation operation
- For bulk operations, consider implementing delays to avoid overwhelming the system