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

### Example

```js
// Simple question with default options
const response1 = await codebolt.chat.askQuestion("What would you like to do next?");

// Question with custom buttons and feedback option
const response2 = await codebolt.chat.askQuestion(
  "How would you like to proceed?",
  ["Continue", "Skip", "Cancel"],
  true
);
```

### Explanation

The `askQuestion` function presents a question to the user and waits for their response. It allows you to customize the available response options through buttons and optionally collect additional feedback.