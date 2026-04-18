---
name: createInstance
cbbaseinfo:
  description: Create a new event log instance
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: Instance name
      isOptional: false
    - name: description
      typeName: string
      description: Optional description
      isOptional: true
  returns:
    signatureTypeName: "Promise<EventLogInstanceResponse>"
    description: ""
data:
  name: createInstance
  category: eventLog
  link: createInstance.md
---
# createInstance

```typescript
plugin.eventLog.createInstance(name: string, description?: string): Promise<EventLogInstanceResponse>
```

Create a new event log instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | Instance name |
| `description` | `string` _(optional)_ | Optional description |

## Returns

**`Promise<EventLogInstanceResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.eventLog.createInstance('name');
```
