---
name: askQuestion
cbbaseinfo:
  description: Call askQuestion on the Plugin SDK chat module.
cbparameters:
  parameters:
    - name: question
      typeName: string
      description: ""
      isOptional: false
    - name: buttons
      typeName: string[]
      description: ""
      isOptional: false
    - name: withFeedback
      typeName: boolean
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<string>"
    description: ""
data:
  name: askQuestion
  category: chat
  link: askQuestion.md
---
# askQuestion

```typescript
plugin.chat.askQuestion(question: string, buttons: string[], withFeedback: boolean): Promise<string>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `question` | `string` |  |
| `buttons` | `string[]` |  Default: `[]` |
| `withFeedback` | `boolean` |  Default: `false` |

## Returns

**`Promise<string>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.askQuestion('question', /* string[] */, true);
```
