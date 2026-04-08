---
name: listFile
cbbaseinfo:
  description: "'Lists all files in a specified directory.'"
cbparameters:
  parameters:
    - name: folderPath
      typeName: string
      description: The path of the directory to list files from.
    - name: isRecursive
      typeName: boolean
      description: Whether to list files recursively.
    - name: listFiles
      typeName: boolean
      description: Optional parameter to use listFiles mode for enhanced listing.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the list of files.
    typeArgs:
      - type: reference
        name: FileListResponse
data:
  name: listFile
  category: fs
  link: listFile.md
---
# listFile

```typescript
codebolt.fs.listFile(folderPath: string, isRecursive: boolean, listFiles: boolean): Promise<FileListResponse>
```

'Lists all files in a specified directory.' 
### Parameters

- **`folderPath`** (string): The path of the directory to list files from.
- **`isRecursive`** (boolean): Whether to list files recursively.
- **`listFiles`** (boolean): Optional parameter to use listFiles mode for enhanced listing.

### Returns

- **`Promise<FileListResponse>`**: A promise that resolves with the list of files.

## Examples

### Basic Directory Listing

```js
// List files in a specific directory (non-recursive)
const files = await codebolt.fs.listFile('/home/user/documents', false);
console.log('Files in directory:', files);
```

### Current Directory Listing

```js
// List files in current directory
const listResult = await codebolt.fs.listFile('.', false);
console.log('✅ Directory listing (listFile):', listResult);
```