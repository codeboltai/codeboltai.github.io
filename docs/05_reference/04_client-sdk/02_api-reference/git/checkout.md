---
name: checkout
cbbaseinfo:
  description: "Checks out an existing branch or commit.

Switches the working directory to the specified branch, tag, or
commit hash."
cbparameters:
  parameters:
    - name: data
      typeName: GitCheckoutRequest
      description: Checkout parameters specifying the target branch or commit
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the checkout is complete
data:
  name: checkout
  category: git
  link: checkout.md
---
# checkout

```typescript
client.git.checkout(data: GitCheckoutRequest): Promise<unknown>
```

Checks out an existing branch or commit.

Switches the working directory to the specified branch, tag, or
commit hash.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitCheckoutRequest` | Checkout parameters specifying the target branch or commit |

## Returns

**`Promise<unknown>`** — A promise that resolves when the checkout is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.checkout(/* GitCheckoutRequest */);
```
