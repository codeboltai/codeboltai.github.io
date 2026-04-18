---
name: checkout
cbbaseinfo:
  description: Call checkout on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitCheckoutRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: checkout
  category: gitApi
  link: checkout.md
---
# checkout

```typescript
plugin.gitApi.checkout(data: GitCheckoutRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitCheckoutRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.checkout(/* GitCheckoutRequest */);
```
