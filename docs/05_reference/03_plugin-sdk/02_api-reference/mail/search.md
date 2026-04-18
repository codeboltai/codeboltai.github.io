---
name: search
cbbaseinfo:
  description: Call search on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: ISearchParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ISearchResponse>"
    description: ""
data:
  name: search
  category: mail
  link: search.md
---
# search

```typescript
plugin.mail.search(params: ISearchParams): Promise<ISearchResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ISearchParams` |  |

## Returns

**`Promise<ISearchResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.search(/* ISearchParams */);
```
