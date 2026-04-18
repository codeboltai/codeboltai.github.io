---
title: getAppStateLayout
---

# `getAppStateLayout`

```typescript
client.application.getAppStateLayout(): Promise<AppStateLayout>
```

Retrieves the application state layout.

Returns the full layout configuration for the application, including
all mode-specific layout definitions.

## Parameters

_No parameters._

## Returns

`Promise<AppStateLayout>` — A promise that resolves to the AppStateLayout object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.application.getAppStateLayout();
console.log(result);
```
