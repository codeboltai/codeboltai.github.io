# getRepoMap

Retrieves the repository map for the current project.

## Syntax

```typescript
cbproject.getRepoMap(message: any): Promise<GetProjectPathResponse>
```

## Parameters

- `message` (any) - The message object containing parameters for retrieving the repository map

## Returns

- `Promise<GetProjectPathResponse>` - A promise that resolves with the repository map response

## Description

The `getRepoMap` function retrieves a map of the repository structure for the current project. This provides an overview of the project's file and directory organization, which can be useful for navigation, analysis, and understanding the project structure.

## Example

```typescript
import cbproject from '@codebolt/project';

async function getProjectRepoMap() {
  try {
    const message = {
      // Add any required parameters for the repo map request
      includeHidden: false,
      maxDepth: 5
    };
    
    const repoMap = await cbproject.getRepoMap(message);
    console.log('Repository map:', repoMap);
    return repoMap;
  } catch (error) {
    console.error('Failed to get repository map:', error);
    throw error;
  }
}

// Usage
const repoMap = await getProjectRepoMap();
```

## Use Cases

### Project Structure Analysis
```typescript
// Get repository map for project analysis
const repoMap = await cbproject.getRepoMap({
  includeFileTypes: ['.js', '.ts', '.jsx', '.tsx'],
  excludeDirectories: ['node_modules', '.git']
});

// Analyze project structure
const fileCount = repoMap.files?.length || 0;
const directoryCount = repoMap.directories?.length || 0;
console.log(`Project contains ${fileCount} files in ${directoryCount} directories`);
```

### Navigation Aid
```typescript
// Get repo map for navigation purposes
const navigationMap = await cbproject.getRepoMap({
  includeMetadata: true,
  generatePaths: true
});

// Use for file navigation
const importantFiles = navigationMap.files?.filter(file => 
  file.name.includes('index') || file.name.includes('main')
);
```

### Documentation Generation
```typescript
// Get repo map for documentation
const docMap = await cbproject.getRepoMap({
  includeDocumentation: true,
  scanForReadmes: true
});

// Generate project documentation
const projectDocs = {
  structure: docMap,
  readmeFiles: docMap.readmes,
  mainEntryPoints: docMap.entryPoints
};
```

## Error Handling

```typescript
async function safeGetRepoMap(message) {
  try {
    const repoMap = await cbproject.getRepoMap(message);
    return repoMap;
  } catch (error) {
    console.error('Repository map retrieval failed:', error);
    
    // Fallback strategies
    if (error.message.includes('permission')) {
      console.warn('Permission denied. Trying with limited scope...');
      return await cbproject.getRepoMap({ 
        ...message, 
        limitedScope: true 
      });
    }
    
    // Return empty structure as fallback
    return {
      success: false,
      error: error.message,
      files: [],
      directories: []
    };
  }
}
```

## Response Format

The function returns a response object that typically includes:

```typescript
{
  success: boolean;
  data: {
    files: Array<{
      name: string;
      path: string;
      type: string;
      size?: number;
      lastModified?: string;
    }>;
    directories: Array<{
      name: string;
      path: string;
      children?: any[];
    }>;
    metadata?: {
      totalFiles: number;
      totalDirectories: number;
      projectSize: number;
    };
  };
  message?: string;
}
```

## Related Functions

- [`getProjectPath()`](./getProjectPath.md) - Get the current project path
- [`getProjectSettings()`](./getProjectSettings.md) - Get project settings
- [`getEditorFileStatus()`](./getEditorFileStatus.md) - Get editor file status 