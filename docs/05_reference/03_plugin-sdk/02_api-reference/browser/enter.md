---
name: enter
cbbaseinfo:
  description: Simulates the Enter key press on the current page.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserActionResponseData>"
    description: A promise that resolves when the Enter action is complete.
data:
  name: enter
  category: browser
  link: enter.md
---
# enter

```typescript
plugin.browser.enter(options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Simulates the Enter key press on the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<BrowserActionResponseData>`** — A promise that resolves when the Enter action is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.enter();
```
