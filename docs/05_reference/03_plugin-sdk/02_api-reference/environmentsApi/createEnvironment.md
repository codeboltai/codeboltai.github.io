---
name: createEnvironment
cbbaseinfo:
  description: Call createEnvironment on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateEnvironmentRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Environment>"
    description: ""
data:
  name: createEnvironment
  category: environmentsApi
  link: createEnvironment.md
---
# createEnvironment

```typescript
plugin.environmentsApi.createEnvironment(data: CreateEnvironmentRequest): Promise<Environment>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateEnvironmentRequest` |  |

## Returns

**`Promise<Environment>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.createEnvironment(/* CreateEnvironmentRequest */);
```
