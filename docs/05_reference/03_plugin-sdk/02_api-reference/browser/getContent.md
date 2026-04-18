---
name: getContent
cbbaseinfo:
  description: Retrieves the content of the current page.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<GetContentResponse>"
    description: A promise that resolves with the content.
data:
  name: getContent
  category: browser
  link: getContent.md
---
# getContent

```typescript
plugin.browser.getContent(options?: BrowserOperationOptions): Promise<GetContentResponse>
```

Retrieves the content of the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<GetContentResponse>`** — A promise that resolves with the content.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.getContent();
```
