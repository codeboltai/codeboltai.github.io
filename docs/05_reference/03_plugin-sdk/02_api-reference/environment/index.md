---
title: Environment API
---

# Environment API

The `environment` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`createEnvironment`](./createEnvironment) |  |
| [`deleteEnvironment`](./deleteEnvironment) |  |
| [`getEnvironment`](./getEnvironment) |  |
| [`getEnvironmentStatistics`](./getEnvironmentStatistics) |  |
| [`getEnvironmentStatus`](./getEnvironmentStatus) |  |
| [`getLocalProviders`](./getLocalProviders) |  |
| [`getRunningProviders`](./getRunningProviders) |  |
| [`listEnvironments`](./listEnvironments) |  |
| [`restartEnvironment`](./restartEnvironment) |  |
| [`sendMessageToEnvironment`](./sendMessageToEnvironment) |  |
| [`startAgentInEnvironment`](./startAgentInEnvironment) |  |
| [`startEnvironment`](./startEnvironment) |  |
| [`stopEnvironment`](./stopEnvironment) |  |
| [`updateEnvironment`](./updateEnvironment) |  |

## Methods

---

### `createEnvironment`

```typescript
plugin.environment.createEnvironment(environmentData: object): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentData` | `object` | Yes |  |

**Returns:** `Promise<any>`

[Full reference →](./createEnvironment)

---

### `deleteEnvironment`

```typescript
plugin.environment.deleteEnvironment(environmentId: string): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |

**Returns:** `Promise<any>`

[Full reference →](./deleteEnvironment)

---

### `getEnvironment`

```typescript
plugin.environment.getEnvironment(environmentId: string): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |

**Returns:** `Promise<any>`

[Full reference →](./getEnvironment)

---

### `getEnvironmentStatistics`

```typescript
plugin.environment.getEnvironmentStatistics(): Promise<any>
```



_No parameters._

**Returns:** `Promise<any>`

[Full reference →](./getEnvironmentStatistics)

---

### `getEnvironmentStatus`

```typescript
plugin.environment.getEnvironmentStatus(environmentId: string): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |

**Returns:** `Promise<any>`

[Full reference →](./getEnvironmentStatus)

---

### `getLocalProviders`

```typescript
plugin.environment.getLocalProviders(): Promise<any>
```



_No parameters._

**Returns:** `Promise<any>`

[Full reference →](./getLocalProviders)

---

### `getRunningProviders`

```typescript
plugin.environment.getRunningProviders(): Promise<any>
```



_No parameters._

**Returns:** `Promise<any>`

[Full reference →](./getRunningProviders)

---

### `listEnvironments`

```typescript
plugin.environment.listEnvironments(): Promise<any>
```



_No parameters._

**Returns:** `Promise<any>`

[Full reference →](./listEnvironments)

---

### `restartEnvironment`

```typescript
plugin.environment.restartEnvironment(environmentId: string): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |

**Returns:** `Promise<any>`

[Full reference →](./restartEnvironment)

---

### `sendMessageToEnvironment`

```typescript
plugin.environment.sendMessageToEnvironment(environmentId: string, message: any): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |
| `message` | `any` | Yes |  |

**Returns:** `Promise<any>`

[Full reference →](./sendMessageToEnvironment)

---

### `startAgentInEnvironment`

```typescript
plugin.environment.startAgentInEnvironment(environmentId: string, task: string, agentId?: string, threadId?: string): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |
| `task` | `string` | Yes |  |
| `agentId` | `string` | No |  |
| `threadId` | `string` | No |  |

**Returns:** `Promise<any>`

[Full reference →](./startAgentInEnvironment)

---

### `startEnvironment`

```typescript
plugin.environment.startEnvironment(environmentId: string): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |

**Returns:** `Promise<any>`

[Full reference →](./startEnvironment)

---

### `stopEnvironment`

```typescript
plugin.environment.stopEnvironment(environmentId: string): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |

**Returns:** `Promise<any>`

[Full reference →](./stopEnvironment)

---

### `updateEnvironment`

```typescript
plugin.environment.updateEnvironment(environmentId: string, updateData: any): Promise<any>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |
| `updateData` | `any` | Yes |  |

**Returns:** `Promise<any>`

[Full reference →](./updateEnvironment)

