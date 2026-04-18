---
title: sendConfirmationRequest
---

# `sendConfirmationRequest`

```typescript
plugin.chat.sendConfirmationRequest(confirmationMessage: string, buttons: string[], withFeedback: boolean): Promise<string>
```

Sends a confirmation request to the server with two options: Yes or No.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `confirmationMessage` | `string` | Yes |  |
| `buttons` | `string[]` | Yes |  _(default: `[]`)_ |
| `withFeedback` | `boolean` | Yes |  _(default: `false`)_ |

## Returns

`Promise<string>` — A promise that resolves with the server's response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.sendConfirmationRequest('confirmationMessage', /* string[] */, true);
console.log(result);
```
