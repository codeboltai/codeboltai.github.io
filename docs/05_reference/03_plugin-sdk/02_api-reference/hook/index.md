---
title: Hook API
---

# Hook API

The `hook` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`create`](./create) | Create a new hook |
| [`delete`](./delete) | Delete a hook |
| [`disable`](./disable) | Disable a hook |
| [`enable`](./enable) | Enable a hook |
| [`get`](./get) | Get a hook by ID |
| [`initialize`](./initialize) | Initialize the hook manager for a project |
| [`list`](./list) | List all hooks |
| [`update`](./update) | Update an existing hook |

## Methods

---

### `create`

```typescript
plugin.hook.create(config: HookConfig): Promise<HookResponse>
```

Create a new hook

| Parameter | Type | Required | Description |
|---|---|---|---|
| `config` | `HookConfig` | Yes | Hook configuration |

**Returns:** `Promise<HookResponse>`

[Full reference →](./create)

---

### `delete`

```typescript
plugin.hook.delete(hookId: string): Promise<HookDeleteResponse>
```

Delete a hook

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |

**Returns:** `Promise<HookDeleteResponse>`

[Full reference →](./delete)

---

### `disable`

```typescript
plugin.hook.disable(hookId: string): Promise<HookResponse>
```

Disable a hook

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |

**Returns:** `Promise<HookResponse>`

[Full reference →](./disable)

---

### `enable`

```typescript
plugin.hook.enable(hookId: string): Promise<HookResponse>
```

Enable a hook

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |

**Returns:** `Promise<HookResponse>`

[Full reference →](./enable)

---

### `get`

```typescript
plugin.hook.get(hookId: string): Promise<HookResponse>
```

Get a hook by ID

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |

**Returns:** `Promise<HookResponse>`

[Full reference →](./get)

---

### `initialize`

```typescript
plugin.hook.initialize(projectPath: string): Promise<HookInitializeResponse>
```

Initialize the hook manager for a project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `projectPath` | `string` | Yes | Path to the project |

**Returns:** `Promise<HookInitializeResponse>`

[Full reference →](./initialize)

---

### `list`

```typescript
plugin.hook.list(): Promise<HookListResponse>
```

List all hooks

_No parameters._

**Returns:** `Promise<HookListResponse>`

[Full reference →](./list)

---

### `update`

```typescript
plugin.hook.update(hookId: string, config: Partial<HookConfig>): Promise<HookResponse>
```

Update an existing hook

| Parameter | Type | Required | Description |
|---|---|---|---|
| `hookId` | `string` | Yes | Hook ID |
| `config` | `Partial<HookConfig>` | Yes | Updated hook configuration |

**Returns:** `Promise<HookResponse>`

[Full reference →](./update)

