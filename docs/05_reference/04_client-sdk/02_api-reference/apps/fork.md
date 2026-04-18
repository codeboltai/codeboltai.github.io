---
name: fork
cbbaseinfo:
  description: "Forks an existing application.

Creates a copy of an app that can be independently modified and
customized. Useful for creating variants of existing apps."
cbparameters:
  parameters:
    - name: data
      typeName: ForkAppRequest
      description: The fork configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the app has been forked
data:
  name: fork
  category: apps
  link: fork.md
---
# fork

```typescript
client.apps.fork(data: ForkAppRequest): Promise<unknown>
```

Forks an existing application.

Creates a copy of an app that can be independently modified and
customized. Useful for creating variants of existing apps.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ForkAppRequest` | The fork configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the app has been forked

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.apps.fork(/* ForkAppRequest */);
```
