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

### Response Structure

The method returns a Promise that resolves to a `string` containing the user's response or button selection.

This method waits for the user to respond to the confirmation request and returns their selection as a string. The response corresponds to:
- The text of the button the user clicked (e.g., "Yes", "No", "Continue", etc.)
- The feedback text if `withFeedback` is enabled and the user provides additional input
- The exact button label if custom buttons are provided

**Note**: While the underlying WebSocket response contains additional metadata (messageId, threadId, timestamp, etc.), this method extracts and returns only the user's actual response/selection for simplicity.

### Examples

```js
// Example 1: Send a confirmation request with custom buttons
const response = await codebolt.chat.sendConfirmationRequest(
    "Would you like to continue with this operation?",
    ["Yes, continue", "No, cancel"],
    true
);

console.log("User response:", response);
// Access the actual user selection
const userChoice = response.message.feedbackMessage;
console.log("User selected:", userChoice);

// Example 2: Simple Yes/No confirmation (default buttons)
const confirmResponse = await codebolt.chat.sendConfirmationRequest(
    "Are you sure you want to delete this file?",
    [], // Uses default Yes/No buttons
    false
);

if (confirmResponse.message.feedbackMessage === "Yes") {
    console.log("User confirmed deletion");
} else {
    console.log("User cancelled deletion");
}

// Example 3: Multiple choice confirmation with feedback
const actionResponse = await codebolt.chat.sendConfirmationRequest(
    "How would you like to handle this conflict?",
    ["Overwrite", "Skip", "Merge", "Cancel"],
    true
);

const selectedAction = actionResponse.message.feedbackMessage;
console.log("Selected action:", selectedAction);

// Example 4: Processing confirmation response
const deployResponse = await codebolt.chat.sendConfirmationRequest(
    "Ready to deploy to production?",
    ["Deploy Now", "Schedule Later", "Cancel"],
    false
);

```

### Explanation

The `sendConfirmationRequest` function sends a confirmation request to the user with customizable buttons and optional feedback input. This is useful for getting user approval before performing operations or collecting simple input from the user. The function returns a comprehensive response object containing the user's selection and additional metadata for tracking and processing. 