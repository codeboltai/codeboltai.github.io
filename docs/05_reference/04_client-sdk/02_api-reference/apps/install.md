---
name: install
cbbaseinfo:
  description: "Installs an application.

Downloads and registers an app, making it available in the CodeBolt
environment for use."
cbparameters:
  parameters:
    - name: data
      typeName: InstallAppRequest
      description: The installation configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the app has been installed
data:
  name: install
  category: apps
  link: install.md
---
# install

```typescript
client.apps.install(data: InstallAppRequest): Promise<unknown>
```

Installs an application.

Downloads and registers an app, making it available in the CodeBolt
environment for use.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InstallAppRequest` | The installation configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the app has been installed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.apps.install(/* InstallAppRequest */);
```
