---
name: update
cbbaseinfo:
  description: Update an existing hook
cbparameters:
  parameters:
    - name: hookId
      typeName: string
      description: Hook ID
      isOptional: false
    - name: config
      typeName: Partial<HookConfig>
      description: Updated hook configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<HookResponse>"
    description: ""
data:
  name: update
  category: hook
  link: update.md
---
# update

```typescript
plugin.hook.update(hookId: string, config: Partial<HookConfig>): Promise<HookResponse>
```

Update an existing hook

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `hookId` | `string` | Hook ID |
| `config` | `Partial<HookConfig>` | Updated hook configuration |

## Returns

**`Promise<HookResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hook.update('hookId', /* Partial<HookConfig> */);
```
