---
name: generate
cbbaseinfo:
  description: "Generates a new codemap for specified files.

Parses the target files and produces a structural representation
capturing symbols, dependencies, and relationships."
cbparameters:
  parameters:
    - name: data
      typeName: GenerateCodemapRequest
      description: The generation request specifying target files or directories
      isOptional: false
  returns:
    signatureTypeName: "Promise<Codemap>"
    description: A promise that resolves to the newly generated
data:
  name: generate
  category: codemap
  link: generate.md
---
# generate

```typescript
client.codemap.generate(data: GenerateCodemapRequest): Promise<Codemap>
```

Generates a new codemap for specified files.

Parses the target files and produces a structural representation
capturing symbols, dependencies, and relationships.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GenerateCodemapRequest` | The generation request specifying target files or directories |

## Returns

**`Promise<Codemap>`** — A promise that resolves to the newly generated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codemap.generate(/* GenerateCodemapRequest */);
```
