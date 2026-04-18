---
name: updateGit
cbbaseinfo:
  description: Update git information
cbparameters:
  parameters:
    - name: gitInfo
      typeName: GitInfo
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
  name: updateGit
  category: projectStructure
  link: updateGit.md
---
# updateGit

```typescript
plugin.projectStructure.updateGit(gitInfo: GitInfo, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update git information

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `gitInfo` | `GitInfo` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.updateGit(/* GitInfo */);
```
