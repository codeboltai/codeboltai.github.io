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

```js
// It retrieves the current list of tasks from the task planner
const getTask = await codebolt.taskplaner.getTasks()

```

### Explaination 

The codebolt.taskplaner.getTasks function does not take any parameters. It retrieves the current list of tasks from the task planner.
