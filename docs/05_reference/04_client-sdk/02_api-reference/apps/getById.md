---
name: getById
cbbaseinfo:
  description: "Retrieves a specific application by its ID.

Returns the full App object including its metadata, configuration,
and current status."
cbparameters:
  parameters:
    - name: appId
      typeName: string
      description: The unique identifier of the app
      isOptional: false
  returns:
    signatureTypeName: "Promise<App>"
    description: A promise that resolves to the App object
data:
  name: getById
  category: apps
  link: getById.md
---
# getById

```typescript
client.apps.getById(appId: string): Promise<App>
```

Retrieves a specific application by its ID.

Returns the full App object including its metadata, configuration,
and current status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `appId` | `string` | The unique identifier of the app |

## Returns

**`Promise<App>`** — A promise that resolves to the App object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.apps.getById('appId');
```
