---
title: HooksApi API
---

# HooksApi API

The `hooksApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`create`](./create) |  |
| [`delete`](./delete) |  |
| [`disable`](./disable) |  |
| [`enable`](./enable) |  |
| [`get`](./get) |  |
| [`initialize`](./initialize) |  |
| [`list`](./list) |  |
| [`update`](./update) |  |

## Methods

---

### `create`

```typescript
plugin.hooksApi.create(data: CreateHookRequest): Promise<Hook>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateHookRequest` | Yes |  |

**Returns:** `Promise<Hook>`

[Full reference →](./create)

---

### `delete`

```typescript
plugin.hooksApi.delete(id: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./delete)

---

### `disable`

```typescript
plugin.hooksApi.disable(id: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./disable)

---

### `enable`

```typescript
plugin.hooksApi.enable(id: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./enable)

---

### `get`

```typescript
plugin.hooksApi.get(id: string): Promise<Hook>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<Hook>`

[Full reference →](./get)

---

### `initialize`

```typescript
plugin.hooksApi.initialize(data?: InitializeHooksRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `InitializeHooksRequest` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./initialize)

---

### `list`

```typescript
plugin.hooksApi.list(params?: Record<string, unknown>): Promise<Hook[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<Hook[]>`

[Full reference →](./list)

---

### `update`

```typescript
plugin.hooksApi.update(id: string, data: UpdateHookRequest): Promise<Hook>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateHookRequest` | Yes |  |

**Returns:** `Promise<Hook>`

[Full reference →](./update)

