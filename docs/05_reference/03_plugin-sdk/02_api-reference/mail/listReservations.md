---
name: listReservations
cbbaseinfo:
  description: Call listReservations on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IListReservationsParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IListReservationsResponse>"
    description: ""
data:
  name: listReservations
  category: mail
  link: listReservations.md
---
# listReservations

```typescript
plugin.mail.listReservations(params: IListReservationsParams): Promise<IListReservationsResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IListReservationsParams` |  |

## Returns

**`Promise<IListReservationsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.listReservations(/* IListReservationsParams */);
```
