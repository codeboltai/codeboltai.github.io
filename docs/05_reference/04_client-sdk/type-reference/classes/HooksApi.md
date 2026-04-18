---
title: HooksApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: HooksApi

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:12

Manages lifecycle hooks that execute in response to system events.

Hooks allow you to register callback actions that fire automatically
when specific events occur (e.g., file changes, builds, deployments).
This API supports the full CRUD lifecycle as well as enabling and
disabling individual hooks.

## Constructors

### Constructor

```ts
new HooksApi(http: HttpClient): HooksApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`HooksApi`

## Methods

### create()

```ts
create(data: CreateHookRequest): Promise<Hook>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:89

Creates a new hook.

Registers a hook that will fire when the specified event occurs.
The hook is enabled by default upon creation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateHookRequest` | Hook creation payload including event type and action |

#### Returns

`Promise`\<`Hook`\>

A promise that resolves to the newly created Hook

#### Example

```typescript
const hook = await client.hooks.create({
  name: 'on-file-save',
  event: 'file:save',
  action: 'lint',
});
```

***

### delete()

```ts
delete(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:128

Deletes a hook.

Permanently removes a hook registration. The hook will no longer
fire for any events after deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the hook to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.hooks.delete('hook-123');
```

***

### disable()

```ts
disable(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:164

Disables a hook without deleting it.

Prevents the hook from firing while preserving its configuration.
The hook can be re-enabled later with [enable](#enable).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the hook to disable |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the hook has been disabled

#### Example

```typescript
await client.hooks.disable('hook-123');
```

***

### enable()

```ts
enable(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:146

Enables a previously disabled hook.

Re-activates the hook so it will fire again when its event occurs.
Has no effect if the hook is already enabled.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the hook to enable |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the hook has been enabled

#### Example

```typescript
await client.hooks.enable('hook-123');
```

***

### get()

```ts
get(id: string): Promise<Hook>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:67

Retrieves a specific hook by its ID.

Returns the full configuration and state of a single hook.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the hook |

#### Returns

`Promise`\<`Hook`\>

A promise that resolves to the Hook

#### Example

```typescript
const hook = await client.hooks.get('hook-123');
console.log(hook.name, hook.event);
```

***

### initialize()

```ts
initialize(data?: InitializeHooksRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:30

Initializes the hooks subsystem.

Sets up the hooks infrastructure, loading any persisted hooks and
preparing event listeners. Should be called once during application
bootstrap before registering or triggering hooks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `InitializeHooksRequest` | Optional initialization configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when initialization is complete

#### Example

```typescript
await client.hooks.initialize();
```

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<Hook[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:49

Lists all registered hooks.

Returns every hook in the system, including both enabled and disabled
hooks. Use optional parameters to filter or paginate the results.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`Hook`[]\>

A promise that resolves to an array of Hook objects

#### Example

```typescript
const hooks = await client.hooks.list();
hooks.forEach(h => console.log(h.name, h.enabled));
```

***

### update()

```ts
update(id: string, data: UpdateHookRequest): Promise<Hook>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/hooks.api.ts:110

Updates an existing hook's configuration.

Modifies hook properties such as its name, event trigger, or action.
Only the fields provided in the request body are updated.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the hook to update |
| `data` | `UpdateHookRequest` | The fields to update |

#### Returns

`Promise`\<`Hook`\>

A promise that resolves to the updated Hook

#### Example

```typescript
const updated = await client.hooks.update('hook-123', {
  name: 'renamed-hook',
});
```
