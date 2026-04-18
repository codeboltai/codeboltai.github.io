---
name: start
cbbaseinfo:
  description: "Starts an installed application.

Launches an app that has been previously installed, making its
functionality active in the runtime."
cbparameters:
  parameters:
    - name: data
      typeName: StartAppRequest
      description: The start configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the app has been started
data:
  name: start
  category: apps
  link: start.md
---
# start

```typescript
client.apps.start(data: StartAppRequest): Promise<unknown>
```

Starts an installed application.

Launches an app that has been previously installed, making its
functionality active in the runtime.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `StartAppRequest` | The start configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the app has been started

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.apps.start(/* StartAppRequest */);
```
