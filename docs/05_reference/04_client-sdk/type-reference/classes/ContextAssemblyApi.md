---
title: ContextAssemblyApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ContextAssemblyApi

Defined in: CodeBolt/packages/clientsdk/src/api/context-assembly.api.ts:11

Manages context assembly for agent interactions in the CodeBolt runtime.

Context assembly combines information from multiple sources (memory, files,
rules, variables) into a unified context that agents use for decision making.
This API handles assembling, validating, and inspecting context configurations.

## Constructors

### Constructor

```ts
new ContextAssemblyApi(http: HttpClient): ContextAssemblyApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-assembly.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ContextAssemblyApi`

## Methods

### assemble()

```ts
assemble(data: ContextAssembleRequest): Promise<ContextAssembleResult>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-assembly.api.ts:31

Assembles context from multiple sources.

Gathers and merges data from configured context sources (memory types,
rules, files) into a single unified context object for agent consumption.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ContextAssembleRequest` | The assembly request specifying sources and parameters |

#### Returns

`Promise`\<`ContextAssembleResult`\>

A promise that resolves to the assembled ContextAssembleResult

#### Example

```typescript
const context = await client.contextAssembly.assemble({
  sources: ['episodic-memory', 'project-files'],
  agentId: 'agent-001',
});
```

***

### evaluateRules()

```ts
evaluateRules(data: EvaluateContextRulesRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-assembly.api.ts:89

Evaluates context rules against provided data.

Runs the configured context rules to determine which context
sources should be included based on the current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `EvaluateContextRulesRequest` | The evaluation request with rule inputs |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves with the rule evaluation results

#### Example

```typescript
const result = await client.contextAssembly.evaluateRules({
  variables: { taskType: 'code-review' },
});
```

***

### getMemoryTypes()

```ts
getMemoryTypes(): Promise<ContextMemoryType[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-assembly.api.ts:69

Retrieves available memory types for context assembly.

Returns the list of memory type sources that can be used when
assembling context (e.g., episodic, semantic, working memory).

#### Returns

`Promise`\<`ContextMemoryType`[]\>

A promise that resolves to an array of ContextMemoryType objects

#### Example

```typescript
const types = await client.contextAssembly.getMemoryTypes();
types.forEach(t => console.log(t.name, t.description));
```

***

### getRequiredVariables()

```ts
getRequiredVariables(data: GetRequiredVariablesRequest): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-assembly.api.ts:110

Retrieves required variables for a context assembly configuration.

Returns the list of variable names that must be provided when
assembling context with the given configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `GetRequiredVariablesRequest` | The configuration to inspect for required variables |

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of variable name strings

#### Example

```typescript
const vars = await client.contextAssembly.getRequiredVariables({
  sources: ['episodic-memory'],
});
console.log('Required:', vars);
```

***

### validate()

```ts
validate(data: ValidateContextAssemblyRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/context-assembly.api.ts:51

Validates a context assembly configuration.

Checks that the provided assembly configuration is valid and all
referenced sources and rules exist before execution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ValidateContextAssemblyRequest` | The configuration to validate |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves with the validation result

#### Example

```typescript
const result = await client.contextAssembly.validate({
  sources: ['episodic-memory'],
});
```
