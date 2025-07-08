---
name: getRepoMap
cbbaseinfo:
  description: Retrieves the repository map for the current project, providing a structural overview of the project's files, directories, and organization.
cbparameters:
  parameters:
    - name: message
      typeName: any
      description: The message object containing parameters for retrieving the repository map. Can include filters, depth settings, or other configuration options.
  returns:
    signatureTypeName: Promise<GetRepoMapResponse>
    description: A promise that resolves with the repository map response containing the project structure information.
data:
  name: getRepoMap
  category: project
  link: getRepoMap.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetRepoMapResponse` object with the following properties:

- **`type`** (string): Always "getRepoMapResponse".
- **`repoMap`** (any, optional): The repository map data containing project structure information. The exact structure depends on the project type and configuration.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic repository map retrieval
const repoMap = await codebolt.project.getRepoMap({});
console.log("Repository Map:", repoMap.repoMap);

// Example 2: Repository map with specific parameters
const detailedMap = await codebolt.project.getRepoMap({
  includeHidden: false,
  maxDepth: 5,
  excludePatterns: ['node_modules', '.git', 'dist']
});
console.log("Detailed Repository Map:", detailedMap);

// Example 3: Error handling for repository map
try {
  const mapResult = await codebolt.project.getRepoMap({});
  
  if (mapResult.success && mapResult.repoMap) {
    console.log("Repository structure retrieved successfully");
    console.log("Map data:", mapResult.repoMap);
  } else {
    console.warn("Repository map not available:", mapResult.message);
  }
} catch (error) {
  console.error("Error retrieving repository map:", error);
}

// Example 4: Processing repository map data
const processRepoMap = async () => {
  const mapResponse = await codebolt.project.getRepoMap({});
  
  if (!mapResponse.success) {
    throw new Error("Failed to retrieve repository map");
  }
  
  const repoData = mapResponse.repoMap;
  
  // Process the repository data based on its structure
  if (repoData) {
    console.log("Repository map structure:", typeof repoData);
    
    // Example processing (structure depends on implementation)
    if (Array.isArray(repoData)) {
      console.log("Files/directories count:", repoData.length);
    } else if (typeof repoData === 'object') {
      console.log("Repository map keys:", Object.keys(repoData));
    }
  }
  
  return repoData;
};

// Example 5: Repository analysis
const analyzeRepository = async () => {
  const mapResult = await codebolt.project.getRepoMap({
    includeFileStats: true,
    includeGitInfo: true
  });
  
  if (mapResult.success && mapResult.repoMap) {
    const analysis = {
      hasRepoMap: true,
      mapType: typeof mapResult.repoMap,
      timestamp: new Date().toISOString(),
      projectStructure: mapResult.repoMap
    };
    
    return analysis;
  }
  
  return {
    hasRepoMap: false,
    error: mapResult.message || "Repository map not available"
  };
};

// Example 6: Repository map for navigation
const buildNavigationTree = async () => {
  const mapResponse = await codebolt.project.getRepoMap({});
  
  if (!mapResponse.repoMap) {
    console.log("Repository map not available - using fallback");
    return null;
  }
  
  // Build navigation structure from repository map
  const navigationTree = {
    root: mapResponse.repoMap,
    metadata: {
      generated: new Date().toISOString(),
      source: 'repository_map'
    }
  };
  
  return navigationTree;
};

// Example 7: Repository map with filtering
const getFilteredRepoMap = async (filters = {}) => {
  const defaultFilters = {
    excludeNodeModules: true,
    excludeGitFolder: true,
    excludeBuildFolders: true,
    ...filters
  };
  
  const mapResult = await codebolt.project.getRepoMap(defaultFilters);
  
  if (mapResult.success) {
    return {
      success: true,
      data: mapResult.repoMap,
      filters: defaultFilters
    };
  }
  
  return {
    success: false,
    error: mapResult.message || "Failed to retrieve filtered repository map"
  };
};

// Example 8: Repository map status check
const checkRepoMapStatus = async () => {
  try {
    const mapResult = await codebolt.project.getRepoMap({});
    
    const status = {
      available: mapResult.success && !!mapResult.repoMap,
      type: mapResult.success ? typeof mapResult.repoMap : null,
      message: mapResult.message,
      timestamp: new Date().toISOString()
    };
    
    if (status.available) {
      console.log("✅ Repository map is available");
    } else {
      console.log("⚠️ Repository map is not available");
      console.log("Status:", status.message);
    }
    
    return status;
  } catch (error) {
    return {
      available: false,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};
```

### Common Use Cases

1. **Project Structure Visualization**: Display project hierarchy in IDE or dashboard
2. **File Navigation**: Build navigation trees and file explorers
3. **Code Analysis**: Analyze project structure for architecture insights
4. **Documentation Generation**: Create project documentation with structure overview
5. **Build System Integration**: Use structure information for build configurations
6. **Project Migration**: Understand project layout for migration or refactoring
7. **Development Tools**: Power IDE features like file search and project browsing

### Notes

- **Development Status**: This feature may still be in development ("coming soon" as noted in current implementation)
- The exact structure of `repoMap` depends on the project type and implementation
- Repository maps can be resource-intensive for large projects - consider caching
- The `message` parameter allows for customization of the mapping process
- Repository maps may include file metadata, directory structures, and project organization
- This method is particularly useful for understanding project architecture
- Consider implementing fallback mechanisms when repository map is not available
- The response structure may evolve as the feature is further developed