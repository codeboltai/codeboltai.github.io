---
title: RequirementPlanApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: RequirementPlanApi

Defined in: CodeBolt/packages/clientsdk/src/api/requirement-plan.api.ts:17

Manages requirement plans for project specifications.

Requirement plans capture structured project requirements including features,
acceptance criteria, and project constraints. This API handles plan creation,
retrieval, and updates throughout the project lifecycle.

## Constructors

### Constructor

```ts
new RequirementPlanApi(http: HttpClient): RequirementPlanApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/requirement-plan.api.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`RequirementPlanApi`

## Methods

### create()

```ts
create(data: CreateRequirementPlanRequest): Promise<RequirementPlan>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/requirement-plan.api.ts:68

Creates a new requirement plan.

Registers a new requirement plan with the system using the provided
specification. The plan can include project goals, feature lists,
acceptance criteria, and other requirement documentation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateRequirementPlanRequest` | Request containing the plan details |

#### Returns

`Promise`\<`RequirementPlan`\>

A promise that resolves to the created RequirementPlan object

#### Example

```typescript
const plan = await client.requirementPlan.create({
  title: 'E-commerce Platform',
  description: 'Core requirements for online store',
  requirements: [
    { title: 'User Authentication', priority: 'high' },
    { title: 'Product Catalog', priority: 'high' }
  ]
});
```

***

### ensureFolder()

```ts
ensureFolder(data?: EnsureRequirementPlanFolderRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/requirement-plan.api.ts:37

Ensures the requirement plan folder exists in the workspace.

Creates the requirement plan directory if it doesn't already exist,
establishing a location for storing plan files and related documents.
This operation is idempotent and safe to call multiple times.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `EnsureRequirementPlanFolderRequest` | Optional parameters for folder creation |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the folder is ensured

#### Example

```typescript
await client.requirementPlan.ensureFolder();
console.log('Requirement plan folder ready');
```

***

### get()

```ts
get(params?: GetRequirementPlanParams): Promise<RequirementPlan>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/requirement-plan.api.ts:89

Retrieves a requirement plan based on query parameters.

Returns the plan matching the specified criteria, typically by project
ID or plan name. If multiple plans match, the most relevant one is returned.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `GetRequirementPlanParams` | Query parameters to identify the plan |

#### Returns

`Promise`\<`RequirementPlan`\>

A promise that resolves to the RequirementPlan object

#### Example

```typescript
const plan = await client.requirementPlan.get({ projectId: 'proj-123' });
console.log('Plan title:', plan.title);
```

***

### update()

```ts
update(data: UpdateRequirementPlanRequest): Promise<RequirementPlan>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/requirement-plan.api.ts:117

Updates an existing requirement plan.

Modifies the content, status, or structure of a requirement plan.
Use this to add new requirements, update priorities, change status,
or make other modifications as the project evolves.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateRequirementPlanRequest` | Request containing the plan updates |

#### Returns

`Promise`\<`RequirementPlan`\>

A promise that resolves to the updated RequirementPlan object

#### Example

```typescript
const updated = await client.requirementPlan.update({
  planId: 'plan-123',
  status: 'approved',
  requirements: [
    { title: 'User Authentication', priority: 'high', status: 'completed' }
  ]
});
```
