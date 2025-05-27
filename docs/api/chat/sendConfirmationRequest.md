---
name: sendConfirmationRequest
cbbaseinfo:
  description: Sends a confirmation request to the server with customizable buttons.
cbparameters:
  parameters:
    - name: confirmationMessage
      typeName: string
      description: The message to display in the confirmation.
    - name: buttons
      typeName: string[]
      description: An array of button labels. Defaults to Yes/No if not specified.
    - name: withFeedback
      typeName: boolean
      description: Whether to allow additional feedback input. Default is false.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server's response.
    typeArgs:
      - type: string
        name: string
data:
  name: sendConfirmationRequest
  category: chat
  link: sendConfirmationRequest.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
// Send a confirmation request with custom buttons
const response = await codebolt.chat.sendConfirmationRequest(
  "Would you like to continue with this operation?",
  ["Yes, continue", "No, cancel"],
  true
);

console.log("User response:", response);
```

### Explanation

The `sendConfirmationRequest` function sends a confirmation request to the user with customizable buttons and optional feedback input. This is useful for getting user approval before performing operations or collecting simple input from the user. 