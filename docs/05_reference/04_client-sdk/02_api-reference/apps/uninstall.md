---
name: uninstall
cbbaseinfo:
  description: "Uninstalls an application.

Removes an installed app and cleans up its associated resources."
cbparameters:
  parameters:
    - name: data
      typeName: UninstallAppRequest
      description: The uninstall configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the app has been uninstalled
data:
  name: uninstall
  category: apps
  link: uninstall.md
---
# uninstall

```typescript
client.apps.uninstall(data: UninstallAppRequest): Promise<unknown>
```

Uninstalls an application.

Removes an installed app and cleans up its associated resources.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UninstallAppRequest` | The uninstall configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the app has been uninstalled

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.apps.uninstall(/* UninstallAppRequest */);
```
