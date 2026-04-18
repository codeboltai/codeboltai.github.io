---
name: goToPage
cbbaseinfo:
  description: Navigates to a specified URL.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL to navigate to.
      isOptional: false
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<GoToPageResponse>"
    description: A promise that resolves when navigation is complete.
data:
  name: goToPage
  category: browser
  link: goToPage.md
---
# goToPage

```typescript
plugin.browser.goToPage(url: string, options?: BrowserOperationOptions): Promise<GoToPageResponse>
```

Navigates to a specified URL.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `url` | `string` | The URL to navigate to. |
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<GoToPageResponse>`** — A promise that resolves when navigation is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.goToPage('url');
```
