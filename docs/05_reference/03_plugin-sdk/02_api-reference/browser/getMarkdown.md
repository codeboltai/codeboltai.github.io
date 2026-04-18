---
name: getMarkdown
cbbaseinfo:
  description: Retrieves the Markdown content of the current page.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<GetMarkdownResponse>"
    description: A promise that resolves with the Markdown content.
data:
  name: getMarkdown
  category: browser
  link: getMarkdown.md
---
# getMarkdown

```typescript
plugin.browser.getMarkdown(options?: BrowserOperationOptions): Promise<GetMarkdownResponse>
```

Retrieves the Markdown content of the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<GetMarkdownResponse>`** — A promise that resolves with the Markdown content.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.getMarkdown();
```
