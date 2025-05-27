# getEditorFileStatus

Retrieves the current status of files in the editor.

## Syntax

```typescript
cbproject.getEditorFileStatus(): Promise<any>
```

## Parameters

This function takes no parameters.

## Returns

- `Promise<any>` - A promise that resolves with the editor file status response

## Description

The `getEditorFileStatus` function retrieves information about the current state of files in the editor. This includes details about open files, their modification status, cursor positions, and other editor-related metadata.

This function is useful for:
- Monitoring file changes in the editor
- Getting information about currently open files
- Tracking editor state for context-aware operations
- Synchronizing editor state with other modules

## Example

```typescript
import cbproject from '@codebolt/project';

async function checkEditorStatus() {
  try {
    const editorStatus = await cbproject.getEditorFileStatus();
    console.log('Editor file status:', editorStatus);
    
    // Process the editor status
    if (editorStatus.openFiles) {
      console.log(`Currently ${editorStatus.openFiles.length} files are open`);
      editorStatus.openFiles.forEach(file => {
        console.log(`- ${file.name} (${file.modified ? 'modified' : 'saved'})`);
      });
    }
    
    return editorStatus;
  } catch (error) {
    console.error('Failed to get editor file status:', error);
    throw error;
  }
}

// Usage
const status = await checkEditorStatus();
```

## Use Cases

### File Change Monitoring
```typescript
// Monitor for unsaved changes
async function checkUnsavedChanges() {
  const status = await cbproject.getEditorFileStatus();
  
  const unsavedFiles = status.openFiles?.filter(file => file.modified) || [];
  
  if (unsavedFiles.length > 0) {
    console.log('Unsaved changes detected in:');
    unsavedFiles.forEach(file => {
      console.log(`- ${file.path}`);
    });
    
    return {
      hasUnsavedChanges: true,
      unsavedFiles: unsavedFiles
    };
  }
  
  return { hasUnsavedChanges: false };
}
```

### Context-Aware Operations
```typescript
// Get context for AI operations
async function getEditorContext() {
  const status = await cbproject.getEditorFileStatus();
  
  const context = {
    activeFile: status.activeFile,
    openFiles: status.openFiles?.map(f => f.path) || [],
    cursorPosition: status.cursorPosition,
    selectedText: status.selectedText
  };
  
  return context;
}

// Use context for AI assistance
async function getContextualHelp() {
  const context = await getEditorContext();
  
  if (context.activeFile) {
    console.log(`Providing help for: ${context.activeFile.name}`);
    // Use context for targeted assistance
  }
}
```

### Editor State Synchronization
```typescript
// Sync editor state with project state
async function syncEditorState() {
  const editorStatus = await cbproject.getEditorFileStatus();
  
  // Update project state with editor info
  await cbstate.updateProjectState('editorState', {
    openFiles: editorStatus.openFiles,
    activeFile: editorStatus.activeFile,
    lastUpdated: new Date().toISOString()
  });
  
  return editorStatus;
}
```

### File Management
```typescript
// Manage editor files
async function manageEditorFiles() {
  const status = await cbproject.getEditorFileStatus();
  
  // Close files that haven't been modified
  const unmodifiedFiles = status.openFiles?.filter(file => !file.modified) || [];
  
  if (unmodifiedFiles.length > 10) {
    console.log('Too many unmodified files open. Consider closing some.');
    
    // Could trigger cleanup operations
    return {
      action: 'cleanup_suggested',
      unmodifiedCount: unmodifiedFiles.length
    };
  }
  
  return { action: 'no_action_needed' };
}
```

## Advanced Examples

### Real-time Monitoring
```typescript
// Set up real-time editor monitoring
class EditorMonitor {
  private intervalId: NodeJS.Timeout | null = null;
  
  startMonitoring(callback: (status: any) => void, interval = 5000) {
    this.intervalId = setInterval(async () => {
      try {
        const status = await cbproject.getEditorFileStatus();
        callback(status);
      } catch (error) {
        console.error('Editor monitoring error:', error);
      }
    }, interval);
  }
  
  stopMonitoring() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Usage
const monitor = new EditorMonitor();
monitor.startMonitoring((status) => {
  console.log('Editor status update:', status);
});
```

### Integration with File System
```typescript
import cbproject from '@codebolt/project';
import cbfs from '@codebolt/fs';

async function syncEditorWithFileSystem() {
  const editorStatus = await cbproject.getEditorFileStatus();
  
  // Check if open files still exist
  for (const file of editorStatus.openFiles || []) {
    try {
      await cbfs.readFile(file.path);
    } catch (error) {
      console.warn(`File ${file.path} no longer exists in filesystem`);
      // Handle missing files
    }
  }
  
  return editorStatus;
}
```

## Error Handling

```typescript
async function robustGetEditorStatus() {
  try {
    const status = await cbproject.getEditorFileStatus();
    return status;
  } catch (error) {
    console.error('Failed to get editor status:', error);
    
    // Fallback strategies
    if (error.message.includes('editor not available')) {
      console.warn('Editor not available. Using fallback status.');
      return {
        success: false,
        error: 'Editor not available',
        openFiles: [],
        activeFile: null
      };
    }
    
    if (error.message.includes('permission')) {
      console.warn('Permission denied. Limited editor access.');
      return {
        success: false,
        error: 'Permission denied',
        limitedAccess: true
      };
    }
    
    // Re-throw for unexpected errors
    throw error;
  }
}
```

## Response Format

The function typically returns an object with the following structure:

```typescript
{
  success: boolean;
  data: {
    openFiles: Array<{
      name: string;
      path: string;
      modified: boolean;
      language: string;
      cursorPosition?: {
        line: number;
        column: number;
      };
      selection?: {
        start: { line: number; column: number; };
        end: { line: number; column: number; };
      };
    }>;
    activeFile?: {
      name: string;
      path: string;
      language: string;
      content?: string;
    };
    editorState?: {
      theme: string;
      fontSize: number;
      wordWrap: boolean;
    };
  };
  timestamp: string;
}
```

## Performance Considerations

- This function queries the editor state, which may be expensive for large numbers of open files
- Consider caching results if calling frequently
- Use monitoring patterns for real-time updates rather than polling

```typescript
// Efficient editor status management
class EditorStatusManager {
  private cache: any = null;
  private cacheTime = 0;
  private cacheDuration = 5000; // 5 seconds
  
  async getStatus(useCache = true) {
    const now = Date.now();
    
    if (useCache && this.cache && (now - this.cacheTime) < this.cacheDuration) {
      return this.cache;
    }
    
    const status = await cbproject.getEditorFileStatus();
    this.cache = status;
    this.cacheTime = now;
    
    return status;
  }
  
  invalidateCache() {
    this.cache = null;
    this.cacheTime = 0;
  }
}
```

## Related Functions

- [`getProjectPath()`](./getProjectPath.md) - Get the current project path
- [`getProjectSettings()`](./getProjectSettings.md) - Get project settings
- [`getRepoMap()`](./getRepoMap.md) - Get repository structure
- [`runProject()`](./runProject.md) - Run the current project 