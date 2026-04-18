---
title: ActionPlansApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ActionPlansApi

Defined in: CodeBolt/packages/clientsdk/src/api/action-plans.api.ts:11

Provides methods for managing action plans in the CodeBolt runtime.

Action plans are structured sequences of tasks that define a workflow
for agents or users to follow. This API supports creating, reading,
updating, and deleting plans as well as adding tasks to them.

## Constructors

### Constructor

```ts
new ActionPlansApi(http: HttpClient): ActionPlansApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-plans.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ActionPlansApi`

## Methods

### addTask()

```ts
addTask(planId: string, data: AddActionPlanTaskRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-plans.api.ts:132

Adds a task to an existing action plan.

Appends a new task to the plan's task list. Tasks represent individual
steps that need to be completed as part of the overall plan.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `planId` | `string` | The unique identifier of the action plan |
| `data` | `AddActionPlanTaskRequest` | The task definition to add to the plan |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the task has been added

#### Example

```typescript
await client.actionPlans.addTask('plan-abc-123', {
  name: 'Run tests',
  description: 'Execute the full test suite'
});
```

***

### create()

```ts
create(data: CreateActionPlanRequest): Promise<ActionPlan>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-plans.api.ts:70

Creates a new action plan.

Defines a new structured workflow plan that can be populated with tasks
and executed by agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateActionPlanRequest` | The creation payload for the new action plan |

#### Returns

`Promise`\<`ActionPlan`\>

A promise that resolves to the newly created ActionPlan

#### Example

```typescript
const plan = await client.actionPlans.create({
  name: 'Deploy Pipeline',
  description: 'Steps to deploy the application'
});
```

***

### delete()

```ts
delete(planId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-plans.api.ts:108

Deletes an action plan.

Permanently removes the specified action plan and all its associated tasks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `planId` | `string` | The unique identifier of the action plan to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the plan has been deleted

#### Example

```typescript
await client.actionPlans.delete('plan-abc-123');
```

***

### get()

```ts
get(planId: string): Promise<ActionPlan>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-plans.api.ts:47

Retrieves a specific action plan by its ID.

Returns the full action plan including its tasks, status, and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `planId` | `string` | The unique identifier of the action plan |

#### Returns

`Promise`\<`ActionPlan`\>

A promise that resolves to the ActionPlan object

#### Example

```typescript
const plan = await client.actionPlans.get('plan-abc-123');
console.log(plan.name, plan.tasks.length);
```

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<ActionPlan[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-plans.api.ts:29

Retrieves all action plans.

Returns every action plan in the system. Use optional query parameters
to paginate or filter the results.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`ActionPlan`[]\>

A promise that resolves to an array of ActionPlan objects

#### Example

```typescript
const plans = await client.actionPlans.list();
console.log(`Found ${plans.length} action plans`);
```

***

### update()

```ts
update(planId: string, data: UpdateActionPlanRequest): Promise<ActionPlan>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/action-plans.api.ts:91

Updates an existing action plan.

Modifies the properties of an action plan such as its name, description,
or status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `planId` | `string` | The unique identifier of the action plan to update |
| `data` | `UpdateActionPlanRequest` | The fields to update on the action plan |

#### Returns

`Promise`\<`ActionPlan`\>

A promise that resolves to the updated ActionPlan

#### Example

```typescript
const updated = await client.actionPlans.update('plan-abc-123', {
  name: 'Updated Deploy Pipeline'
});
```
