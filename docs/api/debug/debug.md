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