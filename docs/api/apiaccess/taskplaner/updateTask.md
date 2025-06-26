---
name: updateTask
cbbaseinfo:
  description: Updates an existing task in the system via WebSocket.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The updated task information.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the update task event.
data:
  name: updateTask
  category: taskplaner
  link: updateTask.md
---
<CBBaseInfo/> 
<CBParameters/>


## Example

```javascript
const updateResult = await codebolt.taskplaner.updateTask('Complete project documentation - UPDATED with new requirements');
console.log('✅ Task updated successfully');
console.log('   - Response:', updateResult);
console.log('   - Success:', updateResult?.success);

// Update multiple tasks with status
const taskUpdates = [
    'Review code changes - COMPLETED',
    'Update unit tests - IN PROGRESS',
    'Fix bug in authentication module - ASSIGNED to John',
    'Prepare release notes - PENDING review'
];

for (const update of taskUpdates) {
    await codebolt.taskplaner.updateTask(update);
}
console.log('✅ Multiple task updates completed');
```