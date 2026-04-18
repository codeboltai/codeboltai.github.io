---
name: searchFiles
cbbaseinfo:
  description: searchFiles
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The path to search within.
      isOptional: false
    - name: regex
      typeName: string
      description: The regex pattern to search for.
      isOptional: false
    - name: filePattern
      typeName: string
      description: The file pattern to match files.
      isOptional: false
  returns:
    signatureTypeName: "Promise<SearchFilesResponse>"
    description: A promise that resolves with the search results.
data:
  name: searchFiles
  category: fs
  link: searchFiles.md
---
# searchFiles

```typescript
plugin.fs.searchFiles(path: string, regex: string, filePattern: string): Promise<SearchFilesResponse>
```

searchFiles

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | The path to search within. |
| `regex` | `string` | The regex pattern to search for. |
| `filePattern` | `string` | The file pattern to match files. |

## Returns

**`Promise<SearchFilesResponse>`** — A promise that resolves with the search results.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.searchFiles('path', 'regex', 'filePattern');
```
