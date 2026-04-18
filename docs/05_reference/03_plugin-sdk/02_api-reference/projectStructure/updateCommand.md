---
name: updateCommand
cbbaseinfo:
  description: Update a run command
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: commandId
      typeName: string
      description: ""
      isOptional: false
    - name: updates
      typeName: Partial<RunCommand>
      description: ""
      isOptional: false
    - name: workspacePath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ProjectStructureUpdateResponse>"
    description: ""
data:
  name: updateCommand
  category: projectStructure
  link: updateCommand.md
---
# updateCommand

```typescript
plugin.projectStructure.updateCommand(packageId: string, commandId: string, updates: Partial<RunCommand>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a run command

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `commandId` | `string` |  |
| `updates` | `Partial<RunCommand>` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateCommand('packageId', 'commandId', /* Partial<RunCommand> */);
```
