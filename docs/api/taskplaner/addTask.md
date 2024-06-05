---
name: addTask
cbbaseinfo:
  description: Adds a task using a WebSocket message.
cbparameters:
  parameters:
    - name: task
      typeName: string
      description: The task to be added.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the add task event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: addTask
  category: taskplaner
  link: addTask.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

```js 

await codebolt.taskplaner.addTask("Task Name")

```

### Explaination 

The codebolt.taskplaner.addTask function takes a single parameter, task, which is a string representing the task you want to add. This function sends the task to the task planner system using a WebSocket message.

task (string): The description of the task to be added.