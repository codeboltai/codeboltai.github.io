---
name: installCli
cbbaseinfo:
  description: Call installCli on the Plugin SDK systemApi module.
cbparameters:
  parameters:
    - name: data
      typeName: InstallCliRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<InstallCliResponse>"
    description: ""
data:
  name: installCli
  category: systemApi
  link: installCli.md
---
# installCli

```typescript
plugin.systemApi.installCli(data?: InstallCliRequest): Promise<InstallCliResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InstallCliRequest` _(optional)_ |  |

## Returns

**`Promise<InstallCliResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.systemApi.installCli();
```
