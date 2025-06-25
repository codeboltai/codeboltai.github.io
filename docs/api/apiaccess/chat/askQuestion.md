---
name: askQuestion
cbbaseinfo:
  description: Asks a question to the user.
cbparameters:
  parameters:
    - name: question
      typeName: string
      description: The question text to present to the user.
    - name: buttons
      typeName: string[]
      description: An array of button labels. Defaults to an empty array if not specified.
    - name: withFeedback
      typeName: boolean
      description: Whether to allow additional feedback input. Default is false.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the user's response.
    typeArgs:
      - type: intrinsic
        name: string
data:
  name: askQuestion
  category: chat
  link: askQuestion.md
---
<CBBaseInfo/>
<CBParameters/>

### Examples

```js
// Example 1: Simple question with default options (no buttons)
const response1 = await codebolt.chat.askQuestion("What would you like to do next?");
console.log('User response:', response1);

// Example 2: Question with custom button options
const response2 = await codebolt.chat.askQuestion(
    "How would you like to proceed?",
    ["Continue", "Skip", "Cancel"]
);
console.log('Selected option:', response2);

// Example 3: Question with buttons and feedback input enabled
const response3 = await codebolt.chat.askQuestion(
    "Are you satisfied with the current results?",
    ["Yes", "No", "Need Improvements"],
    true
);
console.log('User feedback:', response3);

// Example 4: Configuration choice question
const configChoice = await codebolt.chat.askQuestion(
    "Which configuration would you like to use?",
    ["Development", "Staging", "Production"],
    false
);
console.log('Selected configuration:', configChoice);

// Example 5: Error handling with question
const errorAction = await codebolt.chat.askQuestion(
    "An error occurred during processing. What would you like to do?",
    ["Retry", "Skip this step", "Abort process"],
    true
);
console.log('Error action choice:', errorAction);

```

### Explanation

- **Interactive Communication**: This function creates an interactive dialog with the user, pausing script execution until a response is received
- **Button Customization**: You can provide custom button labels to give users specific options to choose from
- **Feedback Option**: When `withFeedback` is true, users can provide additional text input along with their button selection
- **Asynchronous Operation**: The function returns a Promise that resolves with the user's response as a string
- **Default Behavior**: If no buttons are provided, the user can input free-form text as their response