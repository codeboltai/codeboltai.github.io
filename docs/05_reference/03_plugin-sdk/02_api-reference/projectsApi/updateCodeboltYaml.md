---
title: updateCodeboltYaml
---

# `updateCodeboltYaml`

```typescript
plugin.projectsApi.updateCodeboltYaml(data: UpdateCodeboltYamlRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `UpdateCodeboltYamlRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.updateCodeboltYaml(/* UpdateCodeboltYamlRequest */);
console.log(result);
```
