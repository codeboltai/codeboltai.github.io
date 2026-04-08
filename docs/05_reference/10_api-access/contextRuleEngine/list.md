---
name: list
cbbaseinfo:
  description: Lists all available rule engines.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<ContextRuleEngineListResponse>"
    description: A promise that resolves with an array of all rule engines.
data:
  name: list
  category: contextRuleEngine
  link: list.md
---
# list

```typescript
codebolt.contextRuleEngine.list(): Promise<ContextRuleEngineListResponse>
```

Lists all available rule engines.
### Returns

- **`Promise<[ContextRuleEngineListResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ContextRuleEngineListResponse)>`**: A promise that resolves with an array of all rule engines.

### Examples

#### Example 1: List All Rule Engines
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.contextRuleEngine.list();

console.log(`Found ${result.data.ruleEngines.length} rule engines`);

result.data.ruleEngines.forEach(engine => {
  console.log(`- ${engine.name} (${engine.id})`);
  console.log(`  Enabled: ${engine.enabled}`);
  console.log(`  Rules: ${engine.rules.length}`);
});
```

#### Example 2: Find Enabled Engines
```javascript
const result = await codebolt.contextRuleEngine.list();

const enabledEngines = result.data.ruleEngines.filter(e => e.enabled);

console.log(`Active engines: ${enabledEngines.length}`);
```

#### Example 3: Find Engine by Name
```javascript
const result = await codebolt.contextRuleEngine.list();

const engine = result.data.ruleEngines.find(
  e => e.name === 'task-rules'
);

if (engine) {
  console.log('Found engine:', engine.id);
} else {
  console.log('Engine not found');
}
```

### Notes
- Returns all engines regardless of enabled status
- Use get() for detailed engine information