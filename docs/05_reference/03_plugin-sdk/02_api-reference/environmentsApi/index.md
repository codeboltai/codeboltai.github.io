---
title: EnvironmentsApi API
---

# EnvironmentsApi API

The `environmentsApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`createEnvironment`](./createEnvironment) |  |
| [`createInstalledProvider`](./createInstalledProvider) |  |
| [`deleteEnvironment`](./deleteEnvironment) |  |
| [`deleteInstalledProvider`](./deleteInstalledProvider) |  |
| [`getDiffFiles`](./getDiffFiles) |  |
| [`getEnvironment`](./getEnvironment) |  |
| [`getFullProject`](./getFullProject) |  |
| [`getInstalledProvider`](./getInstalledProvider) |  |
| [`getLocalProviders`](./getLocalProviders) |  |
| [`getProviderStatus`](./getProviderStatus) |  |
| [`getRunningProviders`](./getRunningProviders) |  |
| [`installProvider`](./installProvider) |  |
| [`listEnvironments`](./listEnvironments) |  |
| [`listInstalledProviders`](./listInstalledProviders) |  |
| [`mergePatch`](./mergePatch) |  |
| [`readFile`](./readFile) |  |
| [`restartEnvironment`](./restartEnvironment) |  |
| [`sendPullRequest`](./sendPullRequest) |  |
| [`setDefaultProvider`](./setDefaultProvider) |  |
| [`startEnvironment`](./startEnvironment) |  |
| [`startProvider`](./startProvider) |  |
| [`stopEnvironment`](./stopEnvironment) |  |
| [`stopProvider`](./stopProvider) |  |
| [`updateEnvironment`](./updateEnvironment) |  |
| [`updateInstalledProvider`](./updateInstalledProvider) |  |
| [`writeFile`](./writeFile) |  |

## Methods

---

### `createEnvironment`

```typescript
plugin.environmentsApi.createEnvironment(data: CreateEnvironmentRequest): Promise<Environment>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateEnvironmentRequest` | Yes |  |

**Returns:** `Promise<Environment>`

[Full reference →](./createEnvironment)

---

### `createInstalledProvider`

```typescript
plugin.environmentsApi.createInstalledProvider(data: CreateInstalledProviderRequest): Promise<InstalledProvider>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateInstalledProviderRequest` | Yes |  |

**Returns:** `Promise<InstalledProvider>`

[Full reference →](./createInstalledProvider)

---

### `deleteEnvironment`

```typescript
plugin.environmentsApi.deleteEnvironment(id: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteEnvironment)

---

### `deleteInstalledProvider`

```typescript
plugin.environmentsApi.deleteInstalledProvider(id: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./deleteInstalledProvider)

---

### `getDiffFiles`

```typescript
plugin.environmentsApi.getDiffFiles(id: string, data: GetDiffFilesRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `GetDiffFilesRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./getDiffFiles)

---

### `getEnvironment`

```typescript
plugin.environmentsApi.getEnvironment(id: string): Promise<Environment>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<Environment>`

[Full reference →](./getEnvironment)

---

### `getFullProject`

```typescript
plugin.environmentsApi.getFullProject(id: string): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./getFullProject)

---

### `getInstalledProvider`

```typescript
plugin.environmentsApi.getInstalledProvider(id: string): Promise<InstalledProvider>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<InstalledProvider>`

[Full reference →](./getInstalledProvider)

---

### `getLocalProviders`

```typescript
plugin.environmentsApi.getLocalProviders(): Promise<ProviderData[]>
```



_No parameters._

**Returns:** `Promise<ProviderData[]>`

[Full reference →](./getLocalProviders)

---

### `getProviderStatus`

```typescript
plugin.environmentsApi.getProviderStatus(id: string): Promise<EnvironmentProviderStatus>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

**Returns:** `Promise<EnvironmentProviderStatus>`

[Full reference →](./getProviderStatus)

---

### `getRunningProviders`

```typescript
plugin.environmentsApi.getRunningProviders(): Promise<InstalledProvider[]>
```



_No parameters._

**Returns:** `Promise<InstalledProvider[]>`

[Full reference →](./getRunningProviders)

---

### `installProvider`

```typescript
plugin.environmentsApi.installProvider(data: InstallProviderRequest): Promise<InstalledProvider>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `InstallProviderRequest` | Yes |  |

**Returns:** `Promise<InstalledProvider>`

[Full reference →](./installProvider)

---

### `listEnvironments`

```typescript
plugin.environmentsApi.listEnvironments(params?: Record<string, unknown>): Promise<Environment[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<Environment[]>`

[Full reference →](./listEnvironments)

---

### `listInstalledProviders`

```typescript
plugin.environmentsApi.listInstalledProviders(params?: Record<string, unknown>): Promise<InstalledProvider[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<InstalledProvider[]>`

[Full reference →](./listInstalledProviders)

---

### `mergePatch`

```typescript
plugin.environmentsApi.mergePatch(id: string, data: MergePatchRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `MergePatchRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./mergePatch)

---

### `readFile`

```typescript
plugin.environmentsApi.readFile(id: string, data: ReadEnvironmentFileRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `ReadEnvironmentFileRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./readFile)

---

### `restartEnvironment`

```typescript
plugin.environmentsApi.restartEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./restartEnvironment)

---

### `sendPullRequest`

```typescript
plugin.environmentsApi.sendPullRequest(id: string, data: SendPullRequestRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `SendPullRequestRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./sendPullRequest)

---

### `setDefaultProvider`

```typescript
plugin.environmentsApi.setDefaultProvider(id: string, data?: Record<string, unknown>): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./setDefaultProvider)

---

### `startEnvironment`

```typescript
plugin.environmentsApi.startEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./startEnvironment)

---

### `startProvider`

```typescript
plugin.environmentsApi.startProvider(id: string, data?: Record<string, unknown>): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./startProvider)

---

### `stopEnvironment`

```typescript
plugin.environmentsApi.stopEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./stopEnvironment)

---

### `stopProvider`

```typescript
plugin.environmentsApi.stopProvider(id: string, data?: Record<string, unknown>): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<unknown>`

[Full reference →](./stopProvider)

---

### `updateEnvironment`

```typescript
plugin.environmentsApi.updateEnvironment(id: string, data: UpdateEnvironmentRequest): Promise<Environment>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateEnvironmentRequest` | Yes |  |

**Returns:** `Promise<Environment>`

[Full reference →](./updateEnvironment)

---

### `updateInstalledProvider`

```typescript
plugin.environmentsApi.updateInstalledProvider(id: string, data: UpdateInstalledProviderRequest): Promise<InstalledProvider>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateInstalledProviderRequest` | Yes |  |

**Returns:** `Promise<InstalledProvider>`

[Full reference →](./updateInstalledProvider)

---

### `writeFile`

```typescript
plugin.environmentsApi.writeFile(id: string, data: WriteEnvironmentFileRequest): Promise<unknown>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `WriteEnvironmentFileRequest` | Yes |  |

**Returns:** `Promise<unknown>`

[Full reference →](./writeFile)

