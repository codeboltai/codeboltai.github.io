---
name: enable
cbbaseinfo:
  description: Enable a hook
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
  name: enable
  category: hook
  link: enable.md
---
# enable

```typescript
plugin.hook.enable(hookId: string): Promise<HookResponse>
```

Enable a hook

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `hookId` | `string` | Hook ID |

## Returns

**`Promise<HookResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hook.enable('hookId');
```
