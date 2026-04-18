---
name: get
cbbaseinfo:
  description: Get a hook by ID
cbparameters:
  parameters:
    - name: hookId
      typeName: string
      description: Hook ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<HookResponse>"
    description: ""
data:
  name: get
  category: hook
  link: get.md
---
# get

```typescript
plugin.hook.get(hookId: string): Promise<HookResponse>
```

Get a hook by ID

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `hookId` | `string` | Hook ID |

## Returns

**`Promise<HookResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hook.get('hookId');
```
