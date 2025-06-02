---
name: getTasks
cbbaseinfo:
  description: Retrieves all tasks using a WebSocket message.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the get tasks event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: getTasks
  category: taskplaner
  link: getTasks.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples


### Example

```js
import codebolt from '@codebolt/codeboltjs';

async function exampleGetTasks() {
    try {
        const response =  await codebolt.taskplaner.getTasks()

        console.log("Tasks retrieved successfully:", response);
    } catch (error) {
        console.error("Failed to retrieve tasks:", error);
    }
}

exampleGetTasks();

```

### Explaination 

The codebolt.taskplaner.getTasks function does not take any parameters. It retrieves the current list of tasks from the task planner.
