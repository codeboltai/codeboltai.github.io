---
name: checkCli
cbbaseinfo:
  description: Call checkCli on the Plugin SDK systemApi module.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<CliStatus>"
    description: ""
data:
  name: checkCli
  category: systemApi
  link: checkCli.md
---
# checkCli

```typescript
plugin.systemApi.checkCli(): Promise<CliStatus>
```



## Parameters

_None_

## Returns

**`Promise<CliStatus>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.systemApi.checkCli();
```
