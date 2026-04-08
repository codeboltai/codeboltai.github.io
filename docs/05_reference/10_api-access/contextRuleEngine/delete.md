---
name: delete
cbbaseinfo:
  description: Deletes a rule engine.
cbparameters:
  parameters:
    - name: id
      type: string
      required: true
      description: The unique identifier of the rule engine.
  returns:
    signatureTypeName: "Promise<ContextRuleEngineDeleteResponse>"
    description: A promise that resolves with deletion status.
data:
  name: delete
  category: contextRuleEngine
  link: delete.md
---
# delete

```typescript
codebolt.contextRuleEngine.delete(id: undefined): Promise<ContextRuleEngineDeleteResponse>
```

Deletes a rule engine.
### Parameters

- **`id`** (unknown): The unique identifier of the rule engine.

### Returns

- **`Promise<[ContextRuleEngineDeleteResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ContextRuleEngineDeleteResponse)>`**: A promise that resolves with deletion status.

### Examples

#### Example 1: Delete Rule Engine
```javascript
const result = await codebolt.contextRuleEngine.delete('engine-id-123');

if (result.success && result.data.deleted) {
  console.log('Rule engine deleted');
}
```

#### Example 2: Delete with Confirmation
```javascript
async function deleteWithConfirmation(engineId) {
  const engine = await codebolt.contextRuleEngine.get(engineId);

  console.log(`Delete engine "${engine.data.ruleEngine.name}"?`);
  console.log(`Rules: ${engine.data.ruleEngine.rules.length}`);

  // Confirm before deleting
  const confirmed = true;

  if (confirmed) {
    const result = await codebolt.contextRuleEngine.delete(engineId);
    return result.data.deleted;
  }

  return false;
}
```

### Notes
- Permanent deletion, use with caution
- Consider disabling instead of deleting for testing