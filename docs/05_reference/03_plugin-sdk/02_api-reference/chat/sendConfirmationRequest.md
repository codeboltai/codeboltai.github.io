---
name: sendConfirmationRequest
cbbaseinfo:
  description: "Sends a confirmation request to the server with two options: Yes or No."
cbparameters:
  parameters:
    - name: confirmationMessage
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
    description: "A promise that resolves with the server's response."
data:
  name: sendConfirmationRequest
  category: chat
  link: sendConfirmationRequest.md
---
# sendConfirmationRequest

```typescript
plugin.chat.sendConfirmationRequest(confirmationMessage: string, buttons: string[], withFeedback: boolean): Promise<string>
```

Sends a confirmation request to the server with two options: Yes or No.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `confirmationMessage` | `string` |  |
| `buttons` | `string[]` |  Default: `[]` |
| `withFeedback` | `boolean` |  Default: `false` |

## Returns

**`Promise<string>`** — A promise that resolves with the server's response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.sendConfirmationRequest('confirmationMessage', /* string[] */, true);
```
