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
    typeArgs:
      - type: reference
        name: UpdateTasksResponse
data:
  name: updateTask
  category: taskplaner
  link: updateTask.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js

import codebolt from '@codebolt/codeboltjs';

async function exampleUpdateTask() {
    try {
        const response = await codebolt.taskplaner.updateTask("Update project documentation");
        console.log("Task updated successfully:", response);
    } catch (error) {
        console.error("Failed to update task:", error);
    }
}

exampleUpdateTask();
```