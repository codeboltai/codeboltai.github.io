---
title: askQuestion
---

# `askQuestion`

```typescript
plugin.chat.askQuestion(question: string, buttons: string[], withFeedback: boolean): Promise<string>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `question` | `string` | Yes |  |
| `buttons` | `string[]` | Yes |  _(default: `[]`)_ |
| `withFeedback` | `boolean` | Yes |  _(default: `false`)_ |

## Returns

`Promise<string>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.askQuestion('question', /* string[] */, true);
console.log(result);
```
