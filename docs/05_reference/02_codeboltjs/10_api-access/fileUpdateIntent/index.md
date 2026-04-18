---
cbapicategory:
  - name: create
    link: /docs/api/apiaccess/fileupdateintent/create
    description: Creates a new file update intent with overlap detection.
  - name: get
    link: /docs/api/apiaccess/fileupdateintent/get
    description: Gets details of a specific file update intent.
  - name: list
    link: /docs/api/apiaccess/fileupdateintent/list
    description: Lists file update intents with optional filtering.
  - name: update
    link: /docs/api/apiaccess/fileupdateintent/update
    description: Updates an existing file update intent.
  - name: complete
    link: /docs/api/apiaccess/fileupdateintent/complete
    description: Marks a file update intent as completed.
  - name: cancel
    link: /docs/api/apiaccess/fileupdateintent/cancel
    description: Cancels a file update intent.
  - name: delete
    link: /docs/api/apiaccess/fileupdateintent/delete
    description: Deletes a file update intent.
  - name: checkOverlap
    link: /docs/api/apiaccess/fileupdateintent/checkoverlap
    description: Checks for overlapping intents without creating one.
  - name: getBlockedFiles
    link: /docs/api/apiaccess/fileupdateintent/getblockedfiles
    description: "Gets all files with hard locks (level 4)."
  - name: getByAgent
    link: /docs/api/apiaccess/fileupdateintent/getbyagent
    description: Gets all intents claimed by a specific agent.
  - name: getFilesWithIntents
    link: /docs/api/apiaccess/fileupdateintent/getfileswithintents
    description: Gets all files with active intents in an environment.

---
# File Update Intent API

The File Update Intent API provides a coordination mechanism for multi-agent systems, allowing agents to declare their intention to modify files before starting work. This helps prevent conflicts and enables intelligent task distribution.

## Overview

The File Update Intent module enables you to:
- **Declare Intent**: Tell other agents which files you plan to modify
- **Detect Conflicts**: Automatically detect overlapping file modifications
- **Coordinate Work**: Use intent levels to negotiate access
- **Track Progress**: Monitor which agents are working on what files

## Key Concepts

### Intent Levels

Intent levels determine how conflicts are resolved:

| Level | Name | Behavior | Use Case |
|-------|------|----------|----------|
| 1 | Advisory | Just informs others; no enforcement | Low-risk, exploratory tasks |
| 2 | Soft Reservation | Prefer avoidance; negotiate if overlap | Default for most coding swarms |
| 3 | Priority-Based | Higher priority wins; lower backs off | Urgent fixes vs. features |
| 4 | Hard Lock | Blocks others entirely | Critical/shared resources |

### Intent Status

- **active**: Intent is claimed and work is in progress
- **completed**: Work has been finished successfully
- **expired**: Intent auto-expired after max duration
- **cancelled**: Intent was cancelled before completion

### File Intent Structure

Each file in an intent specifies:
- **filePath**: Path to the file
- **intentLevel**: Priority level for this file (1-4)
- **targetSections**: Optional specific functions/classes being modified

## Quick Start Example

```javascript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create an intent to modify files
const result = await codebolt.fileUpdateIntent.create(
  {
    environmentId: 'env-123',
    files: [
      {
        filePath: '/src/components/Button.tsx',
        intentLevel: 2,
        targetSections: ['Button', 'handleClick']
      },
      {
        filePath: '/src/styles/button.css',
        intentLevel: 1
      }
    ],
    description: 'Update button component with new styles',
    priority: 5,
    autoExpire: true,
    maxAutoExpireMinutes: 30
  },
  'agent-456',
  'Frontend Developer Agent'
);

if (result.overlap?.hasOverlap) {
  console.log('Conflict detected:', result.overlap.message);

  if (!result.overlap.canProceed) {
    console.log('Cannot proceed due to conflicts');
    return;
  }
}

console.log('Intent created:', result.intent.id);

// Complete the work
await codebolt.fileUpdateIntent.complete(
  result.intent.id,
  'agent-456'
);
```

## Response Structure

All File Update Intent API functions return responses with a consistent structure:

```javascript
{
  // Operation-specific data
}
```

## Common Use Cases

### Multi-Agent Coordination
```javascript
// Agent declares what it will work on
const intent = await codebolt.fileUpdateIntent.create({
  environmentId: 'project-env',
  files: [
    { filePath: '/src/auth/login.ts', intentLevel: 3, priority: 8 }
  ],
  description: 'Fix critical authentication bug',
  priority: 9
}, 'agent-1');

// Check for conflicts
if (intent.overlap?.hasOverlap) {
  // Handle conflicts based on priority
}
```

### Task Distribution
```javascript
// Get files already being worked on
const filesWithIntents = await codebolt.fileUpdateIntent.getFilesWithIntents('env-123');

// Choose tasks that don't conflict
const availableFiles = allFiles.filter(file =>
  !filesWithIntents.some(intent => intent.filePath === file.path)
);
```

### Conflict Prevention
```javascript
// Check before starting work
const overlap = await codebolt.fileUpdateIntent.checkOverlap(
  'env-123',
  ['/src/config.ts'],
  3 // Priority level
);

if (overlap.blockedFiles.length > 0) {
  console.log('Files are hard-locked:', overlap.blockedFiles);
  return;
}
```

## Intent Level Best Practices

### Level 1: Advisory
Use for read-only analysis or low-risk changes:
```javascript
{
  files: [{ filePath: '/src/README.md', intentLevel: 1 }],
  description: 'Update documentation'
}
```

### Level 2: Soft Reservation (Default)
Best for most collaborative coding:
```javascript
{
  files: [{ filePath: '/src/utils/helpers.ts', intentLevel: 2 }],
  description: 'Add utility function'
}
```

### Level 3: Priority-Based
Use for urgent fixes:
```javascript
{
  files: [{ filePath: '/src/auth/login.ts', intentLevel: 3 }],
  description: 'Fix critical security bug',
  priority: 9
}
```

### Level 4: Hard Lock
Use for critical files:
```javascript
{
  files: [{ filePath: '/src/config/database.ts', intentLevel: 4 }],
  description: 'Update database configuration',
  priority: 10
}
```

## Notes and Best Practices

### Before Creating Intents
1. Check for existing intents with `getFilesWithIntents`
2. Use appropriate intent levels for your use case
3. Set reasonable expiration times
4. Provide clear descriptions

### During Work
1. Update intent if scope changes
2. Complete intent when done
3. Cancel if work is abandoned
4. Handle overlaps gracefully

### After Completion
1. Always complete or cancel intents
2. Don't leave active intents orphaned
3. Clean up expired intents regularly

### Priority Guidelines
- **1-3**: Low priority (nice-to-have features)
- **4-7**: Normal priority (regular work)
- **8-9**: High priority (important fixes)
- **10**: Critical priority (emergency fixes)

### Error Handling
```javascript
try {
  const intent = await codebolt.fileUpdateIntent.create(...);

  if (intent.overlap?.hasOverlap && !intent.overlap.canProceed) {
    // Cannot proceed due to conflicts
    return;
  }

  // Proceed with work
} catch (error) {
  console.error('Failed to create intent:', error);
}
```

<CBAPICategory />
