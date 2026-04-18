---
title: Codemap API
---

# Codemap API

The `codemap` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`create`](./create) | Create a placeholder codemap (status: 'creating') |
| [`delete`](./delete) | Delete a codemap |
| [`get`](./get) | Get a specific codemap by ID |
| [`list`](./list) | List all codemaps for a project |
| [`save`](./save) | Save a complete codemap with content |
| [`setStatus`](./setStatus) | Set the status of a codemap |
| [`update`](./update) | Update codemap info (title, description, etc.) |

## Methods

---

### `create`

```typescript
plugin.codemap.create(data: CreateCodemapData, projectPath?: string): Promise<CodemapCreateResponse>
```

Create a placeholder codemap (status: 'creating')
Call this before generating the actual codemap content

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateCodemapData` | Yes |  |
| `projectPath` | `string` | No |  |

**Returns:** `Promise<CodemapCreateResponse>`

[Full reference →](./create)

---

### `delete`

```typescript
plugin.codemap.delete(codemapId: string, projectPath?: string): Promise<CodemapDeleteResponse>
```

Delete a codemap

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `projectPath` | `string` | No |  |

**Returns:** `Promise<CodemapDeleteResponse>`

[Full reference →](./delete)

---

### `get`

```typescript
plugin.codemap.get(codemapId: string, projectPath?: string): Promise<CodemapGetResponse>
```

Get a specific codemap by ID

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `projectPath` | `string` | No |  |

**Returns:** `Promise<CodemapGetResponse>`

[Full reference →](./get)

---

### `list`

```typescript
plugin.codemap.list(projectPath?: string): Promise<CodemapListResponse>
```

List all codemaps for a project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `projectPath` | `string` | No |  |

**Returns:** `Promise<CodemapListResponse>`

[Full reference →](./list)

---

### `save`

```typescript
plugin.codemap.save(codemapId: string, codemap: Codemap, projectPath?: string): Promise<CodemapSaveResponse>
```

Save a complete codemap with content

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `codemap` | `Codemap` | Yes |  |
| `projectPath` | `string` | No |  |

**Returns:** `Promise<CodemapSaveResponse>`

[Full reference →](./save)

---

### `setStatus`

```typescript
plugin.codemap.setStatus(codemapId: string, status: CodemapStatus, error?: string, projectPath?: string): Promise<CodemapUpdateResponse>
```

Set the status of a codemap

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `status` | `CodemapStatus` | Yes |  |
| `error` | `string` | No |  |
| `projectPath` | `string` | No |  |

**Returns:** `Promise<CodemapUpdateResponse>`

[Full reference →](./setStatus)

---

### `update`

```typescript
plugin.codemap.update(codemapId: string, data: UpdateCodemapData, projectPath?: string): Promise<CodemapUpdateResponse>
```

Update codemap info (title, description, etc.)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `codemapId` | `string` | Yes |  |
| `data` | `UpdateCodemapData` | Yes |  |
| `projectPath` | `string` | No |  |

**Returns:** `Promise<CodemapUpdateResponse>`

[Full reference →](./update)

