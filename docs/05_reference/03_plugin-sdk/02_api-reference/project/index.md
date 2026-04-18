---
title: Project API
---

# Project API

The `project` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`getEditorFileStatus`](./getEditorFileStatus) |  |
| [`getProjectPath`](./getProjectPath) | Retrieves the path of the current project. |
| [`getProjectSettings`](./getProjectSettings) | Retrieves the project settings from the server. |
| [`getRepoMap`](./getRepoMap) |  |
| [`runProject`](./runProject) |  |

## Methods

---

### `getEditorFileStatus`

```typescript
plugin.project.getEditorFileStatus(): Promise<any>
```



_No parameters._

**Returns:** `Promise<any>`

[Full reference →](./getEditorFileStatus)

---

### `getProjectPath`

```typescript
plugin.project.getProjectPath(): Promise<GetProjectPathResponse>
```

Retrieves the path of the current project.

_No parameters._

**Returns:** `Promise<GetProjectPathResponse>` — A promise that resolves with the project path response.

[Full reference →](./getProjectPath)

---

### `getProjectSettings`

```typescript
plugin.project.getProjectSettings(): Promise<GetProjectSettingsResponse>
```

Retrieves the project settings from the server.

_No parameters._

**Returns:** `Promise<GetProjectSettingsResponse>` — A promise that resolves with the project settings response.

[Full reference →](./getProjectSettings)

---

### `getRepoMap`

```typescript
plugin.project.getRepoMap(message: any): Promise<GetProjectPathResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `any` | Yes |  |

**Returns:** `Promise<GetProjectPathResponse>`

[Full reference →](./getRepoMap)

---

### `runProject`

```typescript
plugin.project.runProject(): void
```



_No parameters._

**Returns:** `void`

[Full reference →](./runProject)

