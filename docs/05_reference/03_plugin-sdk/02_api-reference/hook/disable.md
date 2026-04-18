---
name: disable
cbbaseinfo:
  description: Disable a hook
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
  name: disable
  category: hook
  link: disable.md
---
# disable

```typescript
plugin.hook.disable(hookId: string): Promise<HookResponse>
```

Disable a hook

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `hookId` | `string` | Hook ID |

## Returns

**`Promise<HookResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hook.disable('hookId');
```
