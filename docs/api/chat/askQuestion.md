---
name: askQuestion
cbbaseinfo:
  description: Asks a question to the user and waits for a response.
cbparameters:
  parameters:
    - name: question
      typeName: string
      description: The question text to present to the user.
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

### Example:

```js
const userResponse = await codebolt.chat.askQuestion(question: string)

```