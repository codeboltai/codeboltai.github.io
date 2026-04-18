---
title: hook
---

[**@codebolt/codeboltjs**](../index.md)

***

# Variable: hook

```ts
const hook: {
  create: (config: HookConfig) => Promise<HookResponse>;
  delete: (hookId: string) => Promise<HookDeleteResponse>;
  disable: (hookId: string) => Promise<HookResponse>;
  enable: (hookId: string) => Promise<HookResponse>;
  get: (hookId: string) => Promise<HookResponse>;
  initialize: (projectPath: string) => Promise<HookInitializeResponse>;
  list: () => Promise<HookListResponse>;
  update: (hookId: string, config: Partial<HookConfig>) => Promise<HookResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/hook.ts:16

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="create"></a> `create()` | (`config`: [`HookConfig`](../interfaces/HookConfig)) => `Promise`\<[`HookResponse`](../interfaces/HookResponse)\> | Create a new hook | packages/codeboltjs/src/modules/hook.ts:37 |
| <a id="delete"></a> `delete()` | (`hookId`: `string`) => `Promise`\<[`HookDeleteResponse`](../interfaces/HookDeleteResponse)\> | Delete a hook | packages/codeboltjs/src/modules/hook.ts:70 |
| <a id="disable"></a> `disable()` | (`hookId`: `string`) => `Promise`\<[`HookResponse`](../interfaces/HookResponse)\> | Disable a hook | packages/codeboltjs/src/modules/hook.ts:133 |
| <a id="enable"></a> `enable()` | (`hookId`: `string`) => `Promise`\<[`HookResponse`](../interfaces/HookResponse)\> | Enable a hook | packages/codeboltjs/src/modules/hook.ts:117 |
| <a id="get"></a> `get()` | (`hookId`: `string`) => `Promise`\<[`HookResponse`](../interfaces/HookResponse)\> | Get a hook by ID | packages/codeboltjs/src/modules/hook.ts:101 |
| <a id="initialize"></a> `initialize()` | (`projectPath`: `string`) => `Promise`\<[`HookInitializeResponse`](../interfaces/HookInitializeResponse)\> | Initialize the hook manager for a project | packages/codeboltjs/src/modules/hook.ts:21 |
| <a id="list"></a> `list()` | () => `Promise`\<[`HookListResponse`](../interfaces/HookListResponse)\> | List all hooks | packages/codeboltjs/src/modules/hook.ts:85 |
| <a id="update"></a> `update()` | (`hookId`: `string`, `config`: `Partial`\<[`HookConfig`](../interfaces/HookConfig)\>) => `Promise`\<[`HookResponse`](../interfaces/HookResponse)\> | Update an existing hook | packages/codeboltjs/src/modules/hook.ts:54 |
