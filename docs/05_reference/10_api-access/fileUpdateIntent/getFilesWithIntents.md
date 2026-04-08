---
name: getFilesWithIntents
cbbaseinfo:
  description: Gets all files with active intents in an environment.
cbparameters:
  parameters:
    - name: environmentId
      type: string
      required: true
      description: The environment ID to get files for.
  returns:
    signatureTypeName: "Promise<FileWithIntent[]>"
    description: A promise that resolves with an array of files and their intents.
data:
  name: getFilesWithIntents
  category: fileUpdateIntent
  link: getFilesWithIntents.md
---
# getFilesWithIntents

```typescript
codebolt.fileUpdateIntent.getFilesWithIntents(environmentId: undefined): Promise<FileWithIntent[]>
```

Gets all files with active intents in an environment.
### Parameters

- **`environmentId`** (unknown): The environment ID to get files for.

### Returns

- **`Promise<FileWithIntent[]>`**: A promise that resolves with an array of files and their intents.

### Response Structure

```typescript
Array<{
  filePath: string;
  intentId: string;
  claimedBy: string;
  claimedByName?: string;
  intentLevel: 1 | 2 | 3 | 4;
  priority: number;
}>
```

### Examples

#### Example 1: Get All Busy Files
```javascript
const files = await codebolt.fileUpdateIntent.getFilesWithIntents('env-123');

console.log(`Found ${files.length} files with active intents`);

files.forEach(file => {
  console.log(`- ${file.filePath} (level ${file.intentLevel})`);
  console.log(`  Claimed by: ${file.claimedByName || file.claimedBy}`);
});
```

#### Example 2: Find Available Files
```javascript
async function findAvailableFiles(environmentId, allFilePaths) {
  const busyFiles = await codebolt.fileUpdateIntent.getFilesWithIntents(environmentId);

  const busyPaths = new Set(busyFiles.map(f => f.filePath));

  return allFilePaths.filter(path => !busyPaths.has(path));
}

const available = await findAvailableFiles('env-123', [
  '/src/a.ts',
  '/src/b.ts',
  '/src/c.ts'
]);

console.log('Available files:', available);
```

#### Example 3: Check File Availability
```javascript
async function isFileAvailable(environmentId, filePath) {
  const files = await codebolt.fileUpdateIntent.getFilesWithIntents(environmentId);

  const file = files.find(f => f.filePath === filePath);

  if (!file) {
    return { available: true };
  }

  return {
    available: false,
    claimedBy: file.claimedBy,
    intentLevel: file.intentLevel,
    priority: file.priority
  };
}

const status = await isFileAvailable('env-123', '/src/utils.ts');

if (!status.available) {
  console.log('File claimed by:', status.claimedBy);
}
```

### Common Use Cases
**Task Selection**: Find files that aren't being worked on.
**Collision Detection**: Check if files are already claimed.
**Work Distribution**: Balance workload across agents.

### Notes
- Only returns files with active intents
- Use for intelligent task assignment
- Combine with intent levels for decision making