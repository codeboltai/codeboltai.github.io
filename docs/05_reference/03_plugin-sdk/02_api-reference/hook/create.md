---
name: create
cbbaseinfo:
  description: Create a new hook
cbparameters:
  parameters:
    - name: config
      typeName: HookConfig
      description: Hook configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<HookResponse>"
    description: ""
data:
  name: create
  category: hook
  link: create.md
---
# create

```typescript
plugin.hook.create(config: HookConfig): Promise<HookResponse>
```

Create a new hook

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `config` | `HookConfig` | Hook configuration |

## Returns

**`Promise<HookResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hook.create(/* HookConfig */);
```
