---
name: getProviderStatus
cbbaseinfo:
  description: Call getProviderStatus on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<EnvironmentProviderStatus>"
    description: ""
data:
  name: getProviderStatus
  category: environmentsApi
  link: getProviderStatus.md
---
# getProviderStatus

```typescript
plugin.environmentsApi.getProviderStatus(id: string): Promise<EnvironmentProviderStatus>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<EnvironmentProviderStatus>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.getProviderStatus('id');
```
