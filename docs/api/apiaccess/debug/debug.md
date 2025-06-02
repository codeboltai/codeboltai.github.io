---
name: debug
cbbaseinfo:
  description: Sends a log message to the debug websocket and waits for a response.
cbparameters:
  parameters:
    - name: log
      typeName: string
      description: The log message to send.
    - name: type
      typeName: logType
      description: The type of the log message (info, error, warning).
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the debug event.
    typeArgs:
      - type: reference
        name: DebugAddLogResponse
data:
  name: debug
  category: debug
  link: debug.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Example

```js
//error is a varialbe that stored error log 
const error = "error log"

//// Calling the `codebolt.debug.debug` method to log the error with its type (e.g., "warning", "error", etc.)
const fileData = await codebolt.debug.debug(error, "error")

//after executing this command then show the error in debug section on coltbolt.

```

![debug](/img/debug.png)


### Explaination

While executing the codebolt.debug.debug method, the error will be shown in the debug section of Codebolt.