---
title: CapabilityApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: CapabilityApi

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:12

Provides methods for managing capabilities in the CodeBolt runtime.

Capabilities define what actions or skills are available in the system.
Each capability has executors that implement the actual functionality.
This API supports listing, creating, and inspecting capabilities and
their executors, as well as managing the capability registry.

## Constructors

### Constructor

```ts
new CapabilityApi(http: HttpClient): CapabilityApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`CapabilityApi`

## Methods

### create()

```ts
create(data: CreateCapabilityRequest): Promise<Capability>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:86

Creates a new capability.

Registers a new capability in the system, defining a skill or action
that agents can use.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateCapabilityRequest` | The capability creation payload |

#### Returns

`Promise`\<`Capability`\>

A promise that resolves to the newly created Capability

#### Example

```typescript
const cap = await client.capability.create({
  name: 'code-analysis',
  type: 'analysis',
  description: 'Analyzes code for patterns and issues'
});
```

***

### createExecutor()

```ts
createExecutor(data: CreateCapabilityExecutorRequest): Promise<CapabilityExecutor>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:114

Creates a new capability executor.

Registers an executor implementation that can handle invocations
of a specific capability.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateCapabilityExecutorRequest` | The executor creation payload |

#### Returns

`Promise`\<`CapabilityExecutor`\>

A promise that resolves to the created CapabilityExecutor

***

### getDetail()

```ts
getDetail(name: string): Promise<Capability>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:49

Retrieves detailed information for a specific capability.

Returns the full definition of a capability including its
configuration, executors, and usage documentation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The unique name of the capability |

#### Returns

`Promise`\<`Capability`\>

A promise that resolves to the Capability object

#### Example

```typescript
const cap = await client.capability.getDetail('file-editing');
console.log(cap.description, cap.executors);
```

***

### getExecutors()

```ts
getExecutors(params?: Record<string, unknown>): Promise<CapabilityExecutor[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:99

Retrieves all capability executors.

Returns the list of executor implementations that are registered
to handle capability invocations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering |

#### Returns

`Promise`\<`CapabilityExecutor`[]\>

A promise that resolves to an array of CapabilityExecutor objects

***

### getStats()

```ts
getStats(): Promise<CapabilityStats>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:145

Retrieves aggregate statistics about capabilities.

Returns summary metrics about the capability system including
total counts, usage rates, and executor distribution.

#### Returns

`Promise`\<`CapabilityStats`\>

A promise that resolves to the CapabilityStats object

#### Example

```typescript
const stats = await client.capability.getStats();
console.log(`Total capabilities: ${stats.total}`);
```

***

### getTypes()

```ts
getTypes(): Promise<string[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:61

Retrieves the list of available capability types.

Returns the distinct type identifiers that capabilities can belong to,
useful for categorizing or filtering capabilities.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of type name strings

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<Capability[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:30

Retrieves all registered capabilities.

Returns the complete list of capabilities available in the system,
representing the skills and actions that agents can perform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`Capability`[]\>

A promise that resolves to an array of Capability objects

#### Example

```typescript
const capabilities = await client.capability.list();
capabilities.forEach(c => console.log(c.name, c.type));
```

***

### refresh()

```ts
refresh(data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/capability.api.ts:127

Refreshes the capability registry.

Forces a re-scan and reload of all registered capabilities, picking
up any newly added or modified capability definitions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `Record`\<`string`, `unknown`\> | Optional configuration for the refresh operation |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the refresh is complete
