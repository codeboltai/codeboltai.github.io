---
name: create
cbbaseinfo:
  description: Call create on the Plugin SDK hooksApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateHookRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Hook>"
    description: ""
data:
  name: create
  category: hooksApi
  link: create.md
---
# create

```typescript
plugin.hooksApi.create(data: CreateHookRequest): Promise<Hook>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateHookRequest` |  |

## Returns

**`Promise<Hook>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hooksApi.create(/* CreateHookRequest */);
```
