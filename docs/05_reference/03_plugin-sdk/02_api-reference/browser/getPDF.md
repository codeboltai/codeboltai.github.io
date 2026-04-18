---
name: getPDF
cbbaseinfo:
  description: Retrieves the PDF content of the current page.
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
  name: getPDF
  category: browser
  link: getPDF.md
---
# getPDF

```typescript
plugin.browser.getPDF(options?: BrowserOperationOptions): Promise<void>
```

Retrieves the PDF content of the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.getPDF();
```
