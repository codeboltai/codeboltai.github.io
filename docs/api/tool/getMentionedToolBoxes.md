---
name: getMentionedToolBoxes
cbbaseinfo:
  description: Extracts toolbox mentions from a user message object.
cbparameters:
  parameters:
    - name: userMessage
      typeName: UserMessage
      description: Message object containing user input with toolbox mentions
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an array of mentioned toolbox names
    typeArgs:
      - type: any
data:
  name: getMentionedToolBoxes
  category: tool
  link: getMentionedToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
const message = {
  content: "Please use @analyticsTools and @dataProcessing",
  mentionedMCPs: ["analyticsTools", "dataProcessing"]
};
const mentioned = await codebolt.codebolttools.getMentionedToolBoxes(message);
console.log("Mentioned ToolBoxes:", mentioned);