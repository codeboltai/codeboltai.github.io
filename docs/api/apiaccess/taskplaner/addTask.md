---
name: addTask
cbbaseinfo:
  description: Adds a task to the system via WebSocket.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The task description to be added.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the add task event.
data:
  name: addTask
  category: taskplaner
  link: addTask.md
---
<CBBaseInfo/> 
<CBParameters/>

## Example

```javascript
const addResult = await codebolt.taskplaner.addTask('Complete project documentation');
console.log('✅ Task added successfully', addResult);

// Adding multiple tasks
const tasks = [
    'Review code changes',
    'Update unit tests', 
    'Fix bug in authentication module',
    'Prepare release notes'
];

for (const task of tasks) {
    await codebolt.taskplaner.addTask(task);
}
console.log('✅ Multiple tasks added successfully');
```