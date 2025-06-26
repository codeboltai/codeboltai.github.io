---
name: getTasks
cbbaseinfo:
  description: Retrieves all tasks using a WebSocket message.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the get tasks event.
data:
  name: getTasks
  category: taskplaner
  link: getTasks.md
---
<CBBaseInfo/> 
<CBParameters/>

## Example

```javascript
const tasksResult = await codebolt.taskplaner.getTasks();
console.log('✅ Tasks retrieved successfully');
console.log('   - Tasks:', tasksResult);
console.log('   - Total tasks:', tasksResult?.data?.length || 0);

// Check if tasks exist
if (tasksResult?.data && tasksResult.data.length > 0) {
    console.log('   - Sample tasks:');
    tasksResult.data.slice(0, 3).forEach((task, index) => {
        console.log(`     ${index + 1}. ${task}`);
    });
}
```
