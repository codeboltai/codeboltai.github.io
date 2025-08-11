---
name: updateTask
cbbaseinfo:
  description: Updates an existing task in the task management system via WebSocket communication. This method allows modification of task properties including title, description, and completion status.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The updated task information. This can include the task ID, title, description, and completion status in string format.
  returns:
    signatureTypeName: Promise<UpdateTasksResponse>
    description: A promise that resolves with the response containing the updated task information.
data:
  name: updateTask
  category: taskplaner
  link: updateTask.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `UpdateTasksResponse` object with the following properties:

- **`type`** (string): Always "updateTasksResponse".
- **`task`** (Task, optional): The updated Task object containing:
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
// Example 1: Basic task update
const updateResult = await codebolt.taskplaner.updateTask('Complete project documentation - UPDATED with new requirements');
console.log('✅ Task updated successfully');
console.log('Updated task:', updateResult.task);
console.log('Success:', updateResult.success);

// Example 2: Update task with completion status
const markTaskComplete = async (taskDescription) => {
  const updateString = `${taskDescription} - COMPLETED`;
  const result = await codebolt.taskplaner.updateTask(updateString);
  
  if (result.success) {
    console.log('✅ Task marked as completed');
    console.log('Task details:', result.task);
  } else {
    console.error('❌ Failed to update task:', result.error);
  }
  
  return result;
};

// Usage
await markTaskComplete('Review code changes');

// Example 3: Batch task updates with status tracking
const updateMultipleTasks = async (taskUpdates) => {
  const results = [];
  
  for (const update of taskUpdates) {
    try {
      const result = await codebolt.taskplaner.updateTask(update);
      results.push({
        update,
        success: result.success,
        task: result.task,
        error: result.error
      });
      
      console.log(`${result.success ? '✅' : '❌'} ${update}`);
    } catch (error) {
      console.error(`❌ Failed to update "${update}":`, error);
      results.push({
        update,
        success: false,
        error: error.message
      });
    }
  }
  
  return results;
};

// Usage
const taskUpdates = [
  'Review code changes - COMPLETED',
  'Update unit tests - IN PROGRESS',
  'Fix bug in authentication module - ASSIGNED to John',
  'Prepare release notes - PENDING review'
];

const updateResults = await updateMultipleTasks(taskUpdates);
console.log('✅ Batch update completed');
console.log('Results:', updateResults);

// Example 4: Task status update with validation
const updateTaskStatus = async (taskId, newStatus) => {
  const statusMap = {
    'pending': 'PENDING',
    'in_progress': 'IN PROGRESS',
    'completed': 'COMPLETED',
    'cancelled': 'CANCELLED'
  };
  
  const statusString = statusMap[newStatus.toLowerCase()];
  if (!statusString) {
    throw new Error(`Invalid status: ${newStatus}. Valid statuses: ${Object.keys(statusMap).join(', ')}`);
  }
  
  const updateString = `Task ${taskId} - ${statusString}`;
  const result = await codebolt.taskplaner.updateTask(updateString);
  
  if (result.success) {
    console.log(`✅ Task ${taskId} status updated to ${statusString}`);
  } else {
    console.error(`❌ Failed to update task ${taskId}:`, result.error);
  }
  
  return result;
};

// Usage
await updateTaskStatus('task-123', 'completed');
await updateTaskStatus('task-456', 'in_progress');

// Example 5: Task update with priority and assignee
const updateTaskDetails = async (taskId, updates) => {
  const { title, description, priority, assignee, status } = updates;
  
  let updateString = `Task ${taskId}`;
  
  if (title) {
    updateString += ` - TITLE: ${title}`;
  }
  
  if (description) {
    updateString += ` - DESC: ${description}`;
  }
  
  if (priority) {
    updateString += ` - PRIORITY: ${priority}`;
  }
  
  if (assignee) {
    updateString += ` - ASSIGNED: ${assignee}`;
  }
  
  if (status) {
    updateString += ` - STATUS: ${status}`;
  }
  
  const result = await codebolt.taskplaner.updateTask(updateString);
  
  if (result.success) {
    console.log('✅ Task details updated successfully');
    console.log('Updated task:', result.task);
  } else {
    console.error('❌ Failed to update task details:', result.error);
  }
  
  return result;
};

// Usage
await updateTaskDetails('task-789', {
  title: 'Complete API Documentation',
  description: 'Write comprehensive API documentation for all endpoints',
  priority: 'HIGH',
  assignee: 'Sarah Johnson',
  status: 'IN PROGRESS'
});

// Example 6: Task update with error handling and retry
const updateTaskWithRetry = async (taskUpdate, maxRetries = 3) => {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Attempt ${attempt} to update task: ${taskUpdate}`);
      
      const result = await codebolt.taskplaner.updateTask(taskUpdate);
      
      if (result.success) {
        console.log(`✅ Task updated successfully on attempt ${attempt}`);
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
  
  throw new Error(`Failed to update task after ${maxRetries} attempts. Last error: ${lastError}`);
};

// Usage
try {
  await updateTaskWithRetry('Critical task - URGENT UPDATE REQUIRED');
} catch (error) {
  console.error('❌ Task update failed permanently:', error.message);
}

// Example 7: Task update with validation and formatting
const updateTaskWithValidation = async (taskData) => {
  // Validate input
  if (!taskData || typeof taskData !== 'object') {
    throw new Error('Task data must be an object');
  }
  
  const { id, title, description, completed, priority } = taskData;
  
  if (!id && !title && !description) {
    throw new Error('At least one of id, title, or description must be provided');
  }
  
  // Format update string
  let updateParts = [];
  
  if (id) {
    updateParts.push(`ID: ${id}`);
  }
  
  if (title) {
    updateParts.push(`TITLE: ${title}`);
  }
  
  if (description) {
    updateParts.push(`DESC: ${description}`);
  }
  
  if (typeof completed === 'boolean') {
    updateParts.push(`COMPLETED: ${completed ? 'YES' : 'NO'}`);
  }
  
  if (priority) {
    updateParts.push(`PRIORITY: ${priority.toUpperCase()}`);
  }
  
  const updateString = updateParts.join(' - ');
  
  console.log(`🔄 Updating task: ${updateString}`);
  
  const result = await codebolt.taskplaner.updateTask(updateString);
  
  if (result.success) {
    console.log('✅ Task updated with validation');
    console.log('Updated task:', result.task);
  } else {
    console.error('❌ Validated task update failed:', result.error);
  }
  
  return result;
};

// Usage
await updateTaskWithValidation({
  id: 'task-001',
  title: 'Updated Task Title',
  description: 'Updated task description with more details',
  completed: true,
  priority: 'high'
});

// Example 8: Task update workflow with confirmation
const updateTaskWorkflow = async (taskUpdate) => {
  console.log('🔄 Starting task update workflow...');
  
  // Step 1: Update the task
  const updateResult = await codebolt.taskplaner.updateTask(taskUpdate);
  
  if (!updateResult.success) {
    console.error('❌ Task update failed:', updateResult.error);
    return {
      success: false,
      error: updateResult.error,
      step: 'update'
    };
  }
  
  console.log('✅ Task update successful');
  
  // Step 2: Verify the update by retrieving all tasks
  try {
    const tasksResult = await codebolt.taskplaner.getTasks();
    
    if (tasksResult.success) {
      console.log('✅ Task verification completed');
      
      const updatedTask = updateResult.task;
      const allTasks = tasksResult.tasks || [];
      
      return {
        success: true,
        updatedTask,
        totalTasks: allTasks.length,
        completedTasks: allTasks.filter(t => t.completed).length,
        pendingTasks: allTasks.filter(t => !t.completed).length
      };
    } else {
      console.warn('⚠️ Task verification failed, but update was successful');
      return {
        success: true,
        updatedTask: updateResult.task,
        verificationError: tasksResult.error
      };
    }
  } catch (error) {
    console.warn('⚠️ Task verification failed with exception:', error.message);
    return {
      success: true,
      updatedTask: updateResult.task,
      verificationError: error.message
    };
  }
};

// Usage
const workflowResult = await updateTaskWorkflow('Project milestone - COMPLETED with documentation');
console.log('Workflow result:', workflowResult);
```

### Common Use Cases

1. **Task Status Updates**: Change task completion status from pending to completed
2. **Task Assignment**: Update task assignments to team members
3. **Priority Changes**: Modify task priority levels (high, medium, low)
4. **Description Updates**: Add more details or clarifications to existing tasks
5. **Bulk Updates**: Update multiple tasks with similar changes
6. **Progress Tracking**: Update task progress with percentage completion
7. **Workflow Management**: Move tasks through different workflow stages
8. **Task Corrections**: Fix errors or typos in task information

### Notes

- The `task` parameter accepts a string that contains the updated task information
- The format of the task string can be flexible - include relevant details like ID, title, description, and status
- The method returns the updated task object in the response for confirmation
- Task updates are processed via WebSocket communication for real-time updates
- Consider implementing validation before sending updates to ensure data integrity
- The response includes success/error status to confirm the update operation
- Use descriptive update strings to make task changes clear and trackable
- For complex updates, consider breaking them into multiple smaller update operations