---
name: list
cbbaseinfo:
  description: List all hooks
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<HookListResponse>"
    description: ""
data:
  name: list
  category: hook
  link: list.md
---
# list

```typescript
plugin.hook.list(): Promise<HookListResponse>
```

List all hooks

## Parameters

_None_

## Returns

**`Promise<HookListResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hook.list();
```
