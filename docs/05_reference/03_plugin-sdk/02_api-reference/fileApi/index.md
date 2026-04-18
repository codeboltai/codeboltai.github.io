---
title: FileApi API
---

# FileApi API

The `fileApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`addFile`](./addFile) |  |
| [`checkFileExists`](./checkFileExists) |  |
| [`deleteZip`](./deleteZip) |  |
| [`zipFile`](./zipFile) |  |

## Methods

---

### `addFile`

```typescript
plugin.fileApi.addFile(data: AddFileRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `AddFileRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./addFile)

---

### `checkFileExists`

```typescript
plugin.fileApi.checkFileExists(data: CheckFileExistsRequest): Promise<CheckFileExistsResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CheckFileExistsRequest` | Yes |  |

**Returns:** `Promise<CheckFileExistsResponse>`

[Full reference →](./checkFileExists)

---

### `deleteZip`

```typescript
plugin.fileApi.deleteZip(data: DeleteZipRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `DeleteZipRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteZip)

---

### `zipFile`

```typescript
plugin.fileApi.zipFile(data: ZipFileRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ZipFileRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./zipFile)

