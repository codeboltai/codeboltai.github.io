---
name: checkOverlap
cbbaseinfo:
  description: Checks for overlapping intents without creating a new one.
cbparameters:
  parameters:
    - name: environmentId
      type: string
      required: true
      description: The environment ID to check for overlaps.
    - name: filePaths
      type: string[]
      required: true
      description: Array of file paths to check for overlaps.
    - name: priority
      type: number
      required: false
      description: Priority level for conflict resolution. Default is 5.
  returns:
    signatureTypeName: "Promise<IntentOverlapResult>"
    description: A promise that resolves with overlap information.
data:
  name: checkOverlap
  category: fileUpdateIntent
  link: checkOverlap.md
---
# checkOverlap

```typescript
codebolt.fileUpdateIntent.checkOverlap(environmentId: undefined, filePaths: undefined, priority: undefined): Promise<IntentOverlapResult>
```

Checks for overlapping intents without creating a new one.
### Parameters

- **`environmentId`** (unknown): The environment ID to check for overlaps.
- **`filePaths`** (unknown): Array of file paths to check for overlaps.
- **`priority`** (unknown): Priority level for conflict resolution. Default is 5.

### Returns

- **`Promise<[IntentOverlapResult](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IntentOverlapResult)>`**: A promise that resolves with overlap information.

### Examples

#### Example 1: Check Before Creating Intent
```javascript
const overlap = await codebolt.fileUpdateIntent.checkOverlap(
  'env-123',
  ['/src/components/Button.tsx'],
  5
);

if (overlap.hasOverlap) {
  console.log('Overlap detected:', overlap.message);

  if (!overlap.canProceed) {
    console.log('Cannot proceed due to conflicts');
    return;
  }
}

console.log('Safe to proceed');
```

#### Example 2: Check Multiple Files
```javascript
const overlap = await codebolt.fileUpdateIntent.checkOverlap(
  'env-123',
  [
    '/src/auth/login.tsx',
    '/src/auth/api.ts',
    '/src/styles/auth.css'
  ],
  7
);

if (overlap.blockedFiles.length > 0) {
  console.log('Blocked files:', overlap.blockedFiles);
}
```

#### Example 3: Pre-Flight Check
```javascript
async function canModifyFiles(environmentId, filePaths, priority) {
  const overlap = await codebolt.fileUpdateIntent.checkOverlap(
    environmentId,
    filePaths,
    priority
  );

  return {
    canProceed: overlap.canProceed,
    conflicts: overlap.overlappingIntents,
    blocked: overlap.blockedFiles
  };
}

const result = await canModifyFiles('env-123', ['/src/config.ts'], 8);

if (!result.canProceed) {
  console.log('Cannot modify files:', result.conflicts);
}
```

### Common Use Cases
**Pre-Flight Checks**: Verify files can be modified before starting work.
**Conflict Discovery**: Find out who is working on what files.
**Priority Assessment**: Check if your priority is sufficient.

### Notes
- Non-destructive - doesn't create an intent
- Use to make informed decisions before claiming files
- Blocked files indicate level 4 hard locks