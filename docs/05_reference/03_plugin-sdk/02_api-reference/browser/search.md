---
name: search
cbbaseinfo:
  description: Performs a search on the current page using a specified query.
cbparameters:
  parameters:
    - name: elementid
      typeName: string
      description: The ID of the element to perform the search in.
      isOptional: false
    - name: query
      typeName: string
      description: The search query.
      isOptional: false
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserActionResponseData>"
    description: A promise that resolves with the search results.
data:
  name: search
  category: browser
  link: search.md
---
# search

```typescript
plugin.browser.search(elementid: string, query: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Performs a search on the current page using a specified query.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `elementid` | `string` | The ID of the element to perform the search in. |
| `query` | `string` | The search query. |
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<BrowserActionResponseData>`** — A promise that resolves with the search results.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.search('elementid', 'query');
```
