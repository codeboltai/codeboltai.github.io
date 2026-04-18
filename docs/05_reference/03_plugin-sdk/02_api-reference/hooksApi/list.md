---
name: list
cbbaseinfo:
  description: Call list on the Plugin SDK hooksApi module.
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<Hook[]>"
    description: ""
data:
  name: list
  category: hooksApi
  link: list.md
---
# list

```typescript
plugin.hooksApi.list(params?: Record<string, unknown>): Promise<Hook[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<Hook[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hooksApi.list();
```
