---
name: sendAction
cbbaseinfo:
  description: "Sends a generic browser action.

Executes an arbitrary browser action command. Use this for actions
that don't have a dedicated convenience method, or for sending
complex multi-step actions."
cbparameters:
  parameters:
    - name: data
      typeName: BrowserSendActionRequest
      description: The browser action payload describing the action to perform
      isOptional: false
  returns:
    signatureTypeName: "Promise<BrowserActionResult>"
    description: A promise that resolves to the BrowserActionResult with the action outcome
data:
  name: sendAction
  category: browser
  link: sendAction.md
---
# sendAction

```typescript
client.browser.sendAction(data: BrowserSendActionRequest): Promise<BrowserActionResult>
```

Sends a generic browser action.

Executes an arbitrary browser action command. Use this for actions
that don't have a dedicated convenience method, or for sending
complex multi-step actions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BrowserSendActionRequest` | The browser action payload describing the action to perform |

## Returns

**`Promise<BrowserActionResult>`** — A promise that resolves to the BrowserActionResult with the action outcome

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.browser.sendAction(/* BrowserSendActionRequest */);
```
