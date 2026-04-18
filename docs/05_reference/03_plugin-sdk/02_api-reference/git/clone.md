---
name: clone
cbbaseinfo:
  description: Clones a remote Git repository to the specified path.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL of the remote repository to clone.
      isOptional: false
    - name: path
      typeName: string
      description: The file system path where the repository should be cloned.
      isOptional: true
  returns:
    signatureTypeName: "Promise<GitCloneResponse>"
    description: A promise that resolves with the response from the clone event.
data:
  name: clone
  category: git
  link: clone.md
---
# clone

```typescript
plugin.git.clone(url: string, path?: string): Promise<GitCloneResponse>
```

Clones a remote Git repository to the specified path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `url` | `string` | The URL of the remote repository to clone. |
| `path` | `string` _(optional)_ | The file system path where the repository should be cloned. |

## Returns

**`Promise<GitCloneResponse>`** — A promise that resolves with the response from the clone event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.clone('url');
```
