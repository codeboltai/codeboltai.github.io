---
name: close
cbbaseinfo:
  description: Closes the current page.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: close
  category: browser
  link: close.md
---
# close

```typescript
plugin.browser.close(options?: BrowserOperationOptions): Promise<void>
```

Closes the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.close();
```
