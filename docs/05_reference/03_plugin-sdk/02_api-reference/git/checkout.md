---
name: checkout
cbbaseinfo:
  description: Checks out a branch or commit in the local repository at the given path.
cbparameters:
  parameters:
    - name: branch
      typeName: string
      description: The name of the branch or commit to check out.
      isOptional: false
  returns:
    signatureTypeName: "Promise<GitCheckoutResponse>"
    description: A promise that resolves with the response from the checkout event.
data:
  name: checkout
  category: git
  link: checkout.md
---
# checkout

```typescript
plugin.git.checkout(branch: string): Promise<GitCheckoutResponse>
```

Checks out a branch or commit in the local repository at the given path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `branch` | `string` | The name of the branch or commit to check out. |

## Returns

**`Promise<GitCheckoutResponse>`** — A promise that resolves with the response from the checkout event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.checkout('branch');
```
