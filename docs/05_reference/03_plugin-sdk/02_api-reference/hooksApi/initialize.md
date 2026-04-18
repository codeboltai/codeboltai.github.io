---
name: initialize
cbbaseinfo:
  description: Call initialize on the Plugin SDK hooksApi module.
cbparameters:
  parameters:
    - name: data
      typeName: InitializeHooksRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: initialize
  category: hooksApi
  link: initialize.md
---
# initialize

```typescript
plugin.hooksApi.initialize(data?: InitializeHooksRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InitializeHooksRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hooksApi.initialize();
```
