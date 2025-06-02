---
name: addTask
cbbaseinfo:
  description: Adds a task to the system via WebSocket.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The task to be added.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the add task event.
    typeArgs:
      - type: reference
        name: AddTaskResponse
data:
  name: addTask
  category: taskplaner
  link: addTask.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
import codebolt from '@codebolt/codeboltjs';

async function exampleAddTask() {
    try {
        const response = await codebolt.taskplaner.addTask("Complete project documentation");
        console.log("Task added successfully:", response);
    } catch (error) {
        console.error("Failed to add task:", error);
    }
}

exampleAddTask();
```

### Explaination 

The codebolt.taskplaner.addTask function takes a single parameter, task, which is a string representing the task you want to add. This function sends the task to the task planner system using a WebSocket message.

task (string): The description of the task to be added.