---
name: assemble
cbbaseinfo:
  description: "Assembles context from multiple sources.

Gathers and merges data from configured context sources (memory types,
rules, files) into a single unified context object for agent consumption."
cbparameters:
  parameters:
    - name: data
      typeName: ContextAssembleRequest
      description: The assembly request specifying sources and parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<ContextAssembleResult>"
    description: A promise that resolves to the assembled
data:
  name: assemble
  category: contextAssembly
  link: assemble.md
---
# assemble

```typescript
client.contextAssembly.assemble(data: ContextAssembleRequest): Promise<ContextAssembleResult>
```

Assembles context from multiple sources.

Gathers and merges data from configured context sources (memory types,
rules, files) into a single unified context object for agent consumption.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ContextAssembleRequest` | The assembly request specifying sources and parameters |

## Returns

**`Promise<ContextAssembleResult>`** — A promise that resolves to the assembled

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextAssembly.assemble(/* ContextAssembleRequest */);
```
