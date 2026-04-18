---
name: getReservations
cbbaseinfo:
  description: Call getReservations on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<MailReservation[]>"
    description: ""
data:
  name: getReservations
  category: mailApi
  link: getReservations.md
---
# getReservations

```typescript
plugin.mailApi.getReservations(params?: Record<string, unknown>): Promise<MailReservation[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<MailReservation[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.getReservations();
```
