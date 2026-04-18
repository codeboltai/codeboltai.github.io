---
name: runCommand
cbbaseinfo:
  description: Call runCommand on the Plugin SDK projectsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: RunCommandRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: runCommand
  category: projectsApi
  link: runCommand.md
---
# runCommand

```typescript
plugin.projectsApi.runCommand(data: RunCommandRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `RunCommandRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectsApi.runCommand(/* RunCommandRequest */);
```
