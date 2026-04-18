---
title: checkout
---

# `checkout`

```typescript
plugin.git.checkout(branch: string): Promise<GitCheckoutResponse>
```

Checks out a branch or commit in the local repository at the given path.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `branch` | `string` | Yes | The name of the branch or commit to check out. |

## Returns

`Promise<GitCheckoutResponse>` — A promise that resolves with the response from the checkout event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.git.checkout('branch');
console.log(result);
```
