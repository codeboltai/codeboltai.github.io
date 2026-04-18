---
name: listEnvironments
cbbaseinfo:
  description: Call listEnvironments on the Plugin SDK environment module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: listEnvironments
  category: environment
  link: listEnvironments.md
---
# listEnvironments

```typescript
plugin.environment.listEnvironments(): Promise<any>
```



## Parameters

_None_

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environment.listEnvironments();
```
