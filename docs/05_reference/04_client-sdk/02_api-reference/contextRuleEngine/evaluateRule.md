---
name: evaluateRule
cbbaseinfo:
  description: "Evaluates a specific rule against provided data.

Runs a single rule evaluation against the supplied context data and
returns whether the rule matched and what actions should be executed.
Useful for testing individual rules or targeted evaluation."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the rule to evaluate
      isOptional: false
    - name: data
      typeName: EvaluateRuleRequest
      description: Request containing context data for evaluation
      isOptional: false
  returns:
    signatureTypeName: "Promise<EvaluateRuleResult>"
    description: A promise that resolves to an evaluation result
data:
  name: evaluateRule
  category: contextRuleEngine
  link: evaluateRule.md
---
# evaluateRule

```typescript
client.contextRuleEngine.evaluateRule(id: string, data: EvaluateRuleRequest): Promise<EvaluateRuleResult>
```

Evaluates a specific rule against provided data.

Runs a single rule evaluation against the supplied context data and
returns whether the rule matched and what actions should be executed.
Useful for testing individual rules or targeted evaluation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the rule to evaluate |
| `data` | `EvaluateRuleRequest` | Request containing context data for evaluation |

## Returns

**`Promise<EvaluateRuleResult>`** — A promise that resolves to an evaluation result

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextRuleEngine.evaluateRule('id', /* EvaluateRuleRequest */);
```
