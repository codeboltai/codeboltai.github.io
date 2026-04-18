---
name: getRemixAgent
cbbaseinfo:
  description: "Retrieves a specific remix agent by name.

Returns the full definition of a remix agent, including its
base agent reference and customizations."
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The name of the remix agent to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<RemixAgent>"
    description: A promise that resolves to the RemixAgent object
data:
  name: getRemixAgent
  category: agents
  link: getRemixAgent.md
---
# getRemixAgent

```typescript
client.agents.getRemixAgent(name: string): Promise<RemixAgent>
```

Retrieves a specific remix agent by name.

Returns the full definition of a remix agent, including its
base agent reference and customizations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the remix agent to retrieve |

## Returns

**`Promise<RemixAgent>`** — A promise that resolves to the RemixAgent object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getRemixAgent('name');
```
