---
title: Workflow
---

[**@codebolt/agent**](../../index)

***

# Class: Workflow

Defined in: packages/agent/src/unified/agent/workflow.ts:4

## Implements

- `BaseWorkflow`

## Constructors

### Constructor

```ts
new Workflow(config: workflowConfig): Workflow;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `workflowConfig` |

#### Returns

`Workflow`

## Methods

### execute()

```ts
execute(): WorkflowResult;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:16

#### Returns

`WorkflowResult`

#### Implementation of

```ts
BaseWorkflow.execute
```

***

### executeAsync()

```ts
executeAsync(): Promise<WorkflowResult>;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:188

#### Returns

`Promise`\<`WorkflowResult`\>

***

### executeStep()

```ts
executeStep(): workflowStepOutput;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:65

#### Returns

`workflowStepOutput`

#### Implementation of

```ts
BaseWorkflow.executeStep
```

***

### executeStepAsync()

```ts
executeStepAsync(): Promise<workflowStepOutput>;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:236

#### Returns

`Promise`\<`workflowStepOutput`\>

***

### executeSteps()

```ts
executeSteps(): workflowStepOutput[];
```

Defined in: packages/agent/src/unified/agent/workflow.ts:104

#### Returns

`workflowStepOutput`[]

#### Implementation of

```ts
BaseWorkflow.executeSteps
```

***

### executeStepsAsync()

```ts
executeStepsAsync(): Promise<workflowStepOutput[]>;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:278

#### Returns

`Promise`\<`workflowStepOutput`[]\>

***

### getContext()

```ts
getContext(): any;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:149

#### Returns

`any`

#### Implementation of

```ts
BaseWorkflow.getContext
```

***

### getCurrentStepIndex()

```ts
getCurrentStepIndex(): number;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:166

#### Returns

`number`

***

### getExecutionId()

```ts
getExecutionId(): string;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:174

#### Returns

`string`

***

### getStepResults()

```ts
getStepResults(): workflowStepOutput[];
```

Defined in: packages/agent/src/unified/agent/workflow.ts:182

#### Returns

`workflowStepOutput`[]

***

### getTotalSteps()

```ts
getTotalSteps(): number;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:170

#### Returns

`number`

***

### reset()

```ts
reset(): void;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:158

#### Returns

`void`

***

### setInitialContext()

```ts
setInitialContext(context: any): void;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:178

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `any` |

#### Returns

`void`

***

### updateContext()

```ts
updateContext(newContext: any): void;
```

Defined in: packages/agent/src/unified/agent/workflow.ts:153

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newContext` | `any` |

#### Returns

`void`

#### Implementation of

```ts
BaseWorkflow.updateContext
```
