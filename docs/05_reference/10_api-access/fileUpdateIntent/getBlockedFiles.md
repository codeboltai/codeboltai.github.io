---
name: getBlockedFiles
cbbaseinfo:
  description: "Gets all files with hard locks (level 4 intents)."
cbparameters:
  parameters:
    - name: environmentId
      type: string
      required: true
      description: The environment ID to check for blocked files.
  returns:
    signatureTypeName: "Promise<{ blockedFiles: string[] }>"
    description: A promise that resolves with an array of blocked file paths.
data:
  name: getBlockedFiles
  category: fileUpdateIntent
  link: getBlockedFiles.md
---
# getBlockedFiles

```typescript
codebolt.fileUpdateIntent.getBlockedFiles(environmentId: undefined): Promise<{ blockedFiles: string[] }>
```

Gets all files with hard locks (level 4 intents).
### Parameters

- **`environmentId`** (unknown): The environment ID to check for blocked files.

### Returns

- **`Promise<{ blockedFiles: string[] }>`**: A promise that resolves with an array of blocked file paths.

### Examples

#### Example 1: Get All Blocked Files
```javascript
const result = await codebolt.fileUpdateIntent.getBlockedFiles('env-123');

console.log('Blocked files:', result.blockedFiles);
```

#### Example 2: Check if File is Blocked
```javascript
async function isFileBlocked(environmentId, filePath) {
  const result = await codebolt.fileUpdateIntent.getBlockedFiles(environmentId);
  return result.blockedFiles.includes(filePath);
}

const blocked = await isFileBlocked('env-123', '/src/config.ts');

if (blocked) {
  console.log('File is hard-locked');
}
```

### Common Use Cases
**Safety Checks**: Verify files aren't locked before starting work.
**Conflict Avoidance**: Skip files that are hard-locked.
**Resource Discovery**: Find all locked resources in environment.

### Notes
- Only returns files with level 4 (hard lock) intents
- Other intent levels don't block files
- Use to avoid conflicts with critical files