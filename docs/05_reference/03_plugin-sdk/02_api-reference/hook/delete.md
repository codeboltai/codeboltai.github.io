---
name: delete
cbbaseinfo:
  description: Delete a hook
cbparameters:
  parameters:
    - name: hookId
      typeName: string
      description: Hook ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<HookDeleteResponse>"
    description: ""
data:
  name: delete
  category: hook
  link: delete.md
---
# delete

```typescript
plugin.hook.delete(hookId: string): Promise<HookDeleteResponse>
```

Delete a hook

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `hookId` | `string` | Hook ID |

## Returns

**`Promise<HookDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hook.delete('hookId');
```
