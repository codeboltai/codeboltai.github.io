---
name: initialize
cbbaseinfo:
  description: Initialize the hook manager for a project
cbparameters:
  parameters:
    - name: projectPath
      typeName: string
      description: Path to the project
      isOptional: false
  returns:
    signatureTypeName: "Promise<HookInitializeResponse>"
    description: ""
data:
  name: initialize
  category: hook
  link: initialize.md
---
# initialize

```typescript
plugin.hook.initialize(projectPath: string): Promise<HookInitializeResponse>
```

Initialize the hook manager for a project

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `projectPath` | `string` | Path to the project |

## Returns

**`Promise<HookInitializeResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.hook.initialize('projectPath');
```
