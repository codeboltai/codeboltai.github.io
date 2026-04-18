---
name: createReservation
cbbaseinfo:
  description: Call createReservation on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateReservationRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailReservation>"
    description: ""
data:
  name: createReservation
  category: mailApi
  link: createReservation.md
---
# createReservation

```typescript
plugin.mailApi.createReservation(data: CreateReservationRequest): Promise<MailReservation>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateReservationRequest` |  |

## Returns

**`Promise<MailReservation>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.createReservation(/* CreateReservationRequest */);
```
