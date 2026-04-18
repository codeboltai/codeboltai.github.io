---
name: evaluateRules
cbbaseinfo:
  description: "Evaluates context rules against provided data.

Runs the configured context rules to determine which context
sources should be included based on the current state."
cbparameters:
  parameters:
    - name: data
      typeName: EvaluateContextRulesRequest
      description: The evaluation request with rule inputs
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves with the rule evaluation results
data:
  name: evaluateRules
  category: contextAssembly
  link: evaluateRules.md
---
# evaluateRules

```typescript
client.contextAssembly.evaluateRules(data: EvaluateContextRulesRequest): Promise<unknown>
```

Evaluates context rules against provided data.

Runs the configured context rules to determine which context
sources should be included based on the current state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `EvaluateContextRulesRequest` | The evaluation request with rule inputs |

## Returns

**`Promise<unknown>`** — A promise that resolves with the rule evaluation results

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextAssembly.evaluateRules(/* EvaluateContextRulesRequest */);
```
