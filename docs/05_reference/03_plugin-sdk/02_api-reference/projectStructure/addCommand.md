---
name: addCommand
cbbaseinfo:
  description: Add a run command to a package
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: command
      typeName: Omit<RunCommand, "id">
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
  name: addCommand
  category: projectStructure
  link: addCommand.md
---
# addCommand

```typescript
plugin.projectStructure.addCommand(packageId: string, command: Omit<RunCommand, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a run command to a package

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `command` | `Omit<RunCommand, "id">` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.addCommand('packageId', /* Omit<RunCommand, "id"> */);
```
