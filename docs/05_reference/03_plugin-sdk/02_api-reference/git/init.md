---
name: init
cbbaseinfo:
  description: Initializes a new Git repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path where the Git repository should be initialized.
      isOptional: false
  returns:
    signatureTypeName: "Promise<GitInitResponse>"
    description: A promise that resolves with the response from the init event.
data:
  name: init
  category: git
  link: init.md
---
# init

```typescript
plugin.git.init(path: string): Promise<GitInitResponse>
```

Initializes a new Git repository at the given path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | The file system path where the Git repository should be initialized. |

## Returns

**`Promise<GitInitResponse>`** — A promise that resolves with the response from the init event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.init('path');
```
