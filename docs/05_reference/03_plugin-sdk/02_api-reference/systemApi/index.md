---
title: SystemApi API
---

# SystemApi API

The `systemApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`checkCli`](./checkCli) |  |
| [`installCli`](./installCli) |  |
| [`openFolder`](./openFolder) |  |

## Methods

---

### `checkCli`

```typescript
plugin.systemApi.checkCli(): Promise<CliStatus>
```



_No parameters._

**Returns:** `Promise<CliStatus>`

[Full reference →](./checkCli)

---

### `installCli`

```typescript
plugin.systemApi.installCli(data?: InstallCliRequest): Promise<InstallCliResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `InstallCliRequest` | No |  |

**Returns:** `Promise<InstallCliResponse>`

[Full reference →](./installCli)

---

### `openFolder`

```typescript
plugin.systemApi.openFolder(data: OpenFolderRequest): Promise<OpenFolderResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `OpenFolderRequest` | Yes |  |

**Returns:** `Promise<OpenFolderResponse>`

[Full reference →](./openFolder)

