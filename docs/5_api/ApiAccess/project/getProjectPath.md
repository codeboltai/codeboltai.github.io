---
name: getProjectPath
cbbaseinfo:
  description: Retrieves the path of the current project including the project name and full path information.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetProjectPathResponse>
    description: A promise that resolves with the project path response containing path and project name information.
data:
  name: getProjectPath
  category: project
  link: getProjectPath.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetProjectPathResponse` object with the following properties:

- **`type`** (string): Always "getProjectPathResponse".
- **`path`** (string, optional): The full path to the current project directory.
- **`projectName`** (string, optional): The name of the current project.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic project path retrieval
const pathResult = await codebolt.project.getProjectPath();
console.log("Project Path:", pathResult.path);
console.log("Project Name:", pathResult.projectName);

// Example 2: Handling the complete response
const projectInfo = await codebolt.project.getProjectPath();
console.log("Full Response:", projectInfo);
// Output: {
//   type: 'getProjectPathResponse',
//   success: true,
//   path: 'C:\\Users\\Developer\\Projects\\MyApp',
//   projectName: 'MyApp',
//   message: 'Project path retrieved successfully'
// }

// Example 3: Using project path for other operations
const pathInfo = await codebolt.project.getProjectPath();
if (pathInfo.success && pathInfo.path) {
  console.log(`Working on project: ${pathInfo.projectName}`);
  console.log(`Located at: ${pathInfo.path}`);
  
  // Use the path for file operations
  const files = await codebolt.fs.listFiles(pathInfo.path);
  console.log("Project files:", files);
}

// Example 4: Error handling
try {
  const result = await codebolt.project.getProjectPath();
  if (result.success) {
    console.log("Project path:", result.path);
  } else {
    console.error("Failed to get project path:", result.message);
  }
} catch (error) {
  console.error("Error retrieving project path:", error);
}

// Example 5: Using project path for navigation
const projectPath = await codebolt.project.getProjectPath();
if (projectPath.path) {
  // Navigate to project directory
  await codebolt.terminal.executeCommand(`cd "${projectPath.path}"`);
  console.log(`Navigated to project: ${projectPath.projectName}`);
}

// Example 6: Project validation
const validateProject = async () => {
  const pathResult = await codebolt.project.getProjectPath();
  
  if (!pathResult.success) {
    throw new Error("No project is currently open");
  }
  
  if (!pathResult.path) {
    throw new Error("Project path is not available");
  }
  
  return {
    isValid: true,
    path: pathResult.path,
    name: pathResult.projectName
  };
};

// Example 7: Combining with other project operations
const getProjectInfo = async () => {
  const [pathResult, settingsResult] = await Promise.all([
    codebolt.project.getProjectPath(),
    codebolt.project.getProjectSettings()
  ]);
  
  return {
    path: pathResult.path,
    name: pathResult.projectName,
    settings: settingsResult.projectSettings
  };
};

// Example 8: Using in a project management workflow
const projectManager = {
  async getCurrentProject() {
    const pathInfo = await codebolt.project.getProjectPath();
    return {
      name: pathInfo.projectName,
      path: pathInfo.path,
      isOpen: pathInfo.success
    };
  },
  
  async switchToProject(projectPath) {
    // Implementation would depend on available project switching APIs
    console.log(`Switching from current project to: ${projectPath}`);
  }
};
```

### Common Use Cases

1. **Project Validation**: Check if a project is currently open and accessible
2. **File Operations**: Get the base path for file system operations within the project
3. **Navigation**: Use the project path for terminal commands and directory navigation
4. **Project Management**: Display current project information in UI components
5. **Workspace Setup**: Initialize development tools with the correct project context
6. **Path Resolution**: Resolve relative paths to absolute paths within the project

### Notes

- This method provides essential project context information for other operations
- The `path` property contains the full absolute path to the project directory
- The `projectName` is typically derived from the project folder name
- This information is crucial for file system operations and workspace management
- The method is synchronous in nature and should return quickly
- Use this method to validate that a project is currently open before performing project-specific operations