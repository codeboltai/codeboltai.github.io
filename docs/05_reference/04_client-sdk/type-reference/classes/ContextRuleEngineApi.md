---
title: ContextRuleEngineApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ContextRuleEngineApi

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:19

Manages context rules for intelligent behavior control.

Context rules define conditions and actions that determine how agents
and systems respond in different scenarios. The rule engine evaluates
these rules against runtime data to dynamically adjust behavior.

## Constructors

### Constructor

```ts
new ContextRuleEngineApi(http: HttpClient): ContextRuleEngineApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ContextRuleEngineApi`

## Methods

### create()

```ts
create(data: CreateContextRuleRequest): Promise<ContextRuleDefinition>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:137

Creates a new context rule.

Registers a new rule with the system using the provided configuration.
The rule can be configured with conditions, priority, and actions to
execute when the rule matches.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateContextRuleRequest` | Request containing the new rule configuration |

#### Returns

`Promise`\<`ContextRuleDefinition`\>

A promise that resolves to the created ContextRuleDefinition object

#### Example

```typescript
const newRule = await client.contextRuleEngine.create({
  name: 'Admin Access Rule',
  conditions: [{ field: 'userRole', operator: 'equals', value: 'admin' }],
  actions: [{ type: 'grant', permission: 'all' }]
});
```

***

### delete()

```ts
delete(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:185

Deletes a context rule from the system.

Permanently removes the specified rule. Any behavior or logic dependent
on this rule will no longer be executed. This operation cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the rule to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the rule has been deleted

#### Example

```typescript
await client.contextRuleEngine.delete('rule-123');
console.log('Rule deleted');
```

***

### evaluate()

```ts
evaluate(data: EvaluateAllRulesRequest): Promise<EvaluateRuleResult[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:89

Evaluates all context rules against provided data.

Runs every rule in the system against the supplied context data and
returns the evaluation results. Useful for batch testing or determining
which rules would trigger in a given scenario.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `EvaluateAllRulesRequest` | Request containing context data for evaluation |

#### Returns

`Promise`\<`EvaluateRuleResult`[]\>

A promise that resolves to an array of evaluation results

#### Example

```typescript
const results = await client.contextRuleEngine.evaluate({
  context: { userType: 'admin', region: 'us-east' }
});
results.forEach(r => console.log(r.ruleId, r.matched));
```

***

### evaluateRule()

```ts
evaluateRule(id: string, data: EvaluateRuleRequest): Promise<EvaluateRuleResult>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:209

Evaluates a specific rule against provided data.

Runs a single rule evaluation against the supplied context data and
returns whether the rule matched and what actions should be executed.
Useful for testing individual rules or targeted evaluation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the rule to evaluate |
| `data` | `EvaluateRuleRequest` | Request containing context data for evaluation |

#### Returns

`Promise`\<`EvaluateRuleResult`\>

A promise that resolves to an evaluation result

#### Example

```typescript
const result = await client.contextRuleEngine.evaluateRule('rule-123', {
  context: { userType: 'admin' }
});
console.log('Matched:', result.matched);
```

***

### get()

```ts
get(id: string): Promise<ContextRuleDefinition>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:111

Retrieves a specific context rule by its unique identifier.

Returns detailed information about a single rule including its
conditions, actions, metadata, and evaluation configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the context rule |

#### Returns

`Promise`\<`ContextRuleDefinition`\>

A promise that resolves to the ContextRuleDefinition object

#### Example

```typescript
const rule = await client.contextRuleEngine.get('rule-123');
console.log('Rule:', rule.name);
```

***

### getVariables()

```ts
getVariables(params?: Record<string, unknown>): Promise<ContextRuleVariable[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:61

Retrieves all available variables for rule evaluation.

Returns the list of context variables that can be referenced in rule
conditions. Each variable includes its type, description, and available
values, helping developers construct valid rule expressions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering variables |

#### Returns

`Promise`\<`ContextRuleVariable`[]\>

A promise that resolves to an array of ContextRuleVariable objects

#### Example

```typescript
const variables = await client.contextRuleEngine.getVariables();
variables.forEach(v => console.log(v.name, v.type));
```

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<ContextRuleDefinition[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:37

Lists all available context rules in the system.

Returns every context rule regardless of status or category. Use this
for comprehensive rule browsing or to populate rule management UIs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering rules |

#### Returns

`Promise`\<`ContextRuleDefinition`[]\>

A promise that resolves to an array of ContextRuleDefinition objects

#### Example

```typescript
const rules = await client.contextRuleEngine.list();
rules.forEach(r => console.log(r.name, r.active));
```

***

### update()

```ts
update(id: string, data: UpdateContextRuleRequest): Promise<ContextRuleDefinition>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-rule-engine.api.ts:160

Updates an existing context rule.

Modifies the properties, conditions, or actions of a rule identified
by its ID. Use this to make incremental changes to a rule without
recreating it from scratch.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the rule to update |
| `data` | `UpdateContextRuleRequest` | Request containing the rule updates to apply |

#### Returns

`Promise`\<`ContextRuleDefinition`\>

A promise that resolves to the updated ContextRuleDefinition object

#### Example

```typescript
const updated = await client.contextRuleEngine.update('rule-123', {
  name: 'Updated Rule Name',
  active: false
});
```
