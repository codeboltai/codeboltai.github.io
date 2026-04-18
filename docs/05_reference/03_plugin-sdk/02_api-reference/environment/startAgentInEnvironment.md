---
name: startAgentInEnvironment
cbbaseinfo:
  description: Call startAgentInEnvironment on the Plugin SDK environment module.
cbparameters:
  parameters:
    - name: environmentId
      typeName: string
      description: ""
      isOptional: false
    - name: task
      typeName: string
      description: ""
      isOptional: false
    - name: agentId
      typeName: string
      description: ""
      isOptional: true
    - name: threadId
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: startAgentInEnvironment
  category: environment
  link: startAgentInEnvironment.md
---
# startAgentInEnvironment

```typescript
plugin.environment.startAgentInEnvironment(environmentId: string, task: string, agentId?: string, threadId?: string): Promise<any>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `environmentId` | `string` |  |
| `task` | `string` |  |
| `agentId` | `string` _(optional)_ |  |
| `threadId` | `string` _(optional)_ |  |

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environment.startAgentInEnvironment('environmentId', 'task');
```
