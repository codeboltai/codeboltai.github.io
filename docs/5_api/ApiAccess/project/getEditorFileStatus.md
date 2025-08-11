---
name: getEditorFileStatus
cbbaseinfo:
  description: Retrieves the current status of files in the editor, including information about visible files, open tabs, and editor state.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetEditorFileStatusResponse>
    description: A promise that resolves with the editor file status response containing information about the current editor state.
data:
  name: getEditorFileStatus
  category: project
  link: getEditorFileStatus.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetEditorFileStatusResponse` object with the following properties:

- **`type`** (string): Always "getEditorFileStatusResponse".
- **`editorStatus`** (string, optional): A formatted string containing information about visible files and open tabs in the editor.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic editor file status retrieval
const fileStatus = await codebolt.project.getEditorFileStatus();
console.log("Editor Status:", fileStatus.editorStatus);

// Example 2: Processing editor status information
const editorInfo = await codebolt.project.getEditorFileStatus();
if (editorInfo.success && editorInfo.editorStatus) {
  console.log("Editor file status retrieved successfully");
  console.log("Status details:", editorInfo.editorStatus);
  
  // Parse the status information
  const statusLines = editorInfo.editorStatus.split('\n');
  statusLines.forEach(line => {
    if (line.trim()) {
      console.log("Status line:", line);
    }
  });
}

// Example 3: Error handling for editor status
try {
  const statusResult = await codebolt.project.getEditorFileStatus();
  
  if (!statusResult.success) {
    console.error("Failed to retrieve editor status:", statusResult.message);
    return;
  }
  
  if (statusResult.editorStatus) {
    console.log("Editor status available");
  } else {
    console.log("Editor status not available - using defaults");
  }
} catch (error) {
  console.error("Error getting editor file status:", error);
}

// Example 4: Analyzing editor status
const analyzeEditorStatus = async () => {
  const statusResponse = await codebolt.project.getEditorFileStatus();
  
  if (!statusResponse.success) {
    return {
      hasStatus: false,
      error: statusResponse.message
    };
  }
  
  const status = statusResponse.editorStatus || "";
  
  const analysis = {
    hasStatus: true,
    hasVisibleFiles: status.includes("Codebolt Visible Files"),
    hasOpenTabs: status.includes("Codebolt Open Tabs"),
    isDefault: status.includes("Currently not available - using default values"),
    rawStatus: status,
    timestamp: new Date().toISOString()
  };
  
  return analysis;
};

// Example 5: Editor status monitoring
const monitorEditorStatus = async () => {
  const statusResult = await codebolt.project.getEditorFileStatus();
  
  const monitor = {
    status: statusResult.success ? 'active' : 'inactive',
    editorInfo: statusResult.editorStatus,
    lastChecked: new Date().toISOString(),
    message: statusResult.message
  };
  
  // Log the monitoring information
  console.log("Editor Status Monitor:", monitor);
  
  return monitor;
};

// Example 6: Editor status for debugging
const debugEditorStatus = async () => {
  console.log("🔍 Debugging editor file status...");
  
  const statusResponse = await codebolt.project.getEditorFileStatus();
  
  console.log("Response type:", statusResponse.type);
  console.log("Success:", statusResponse.success);
  console.log("Message:", statusResponse.message);
  console.log("Editor Status Length:", statusResponse.editorStatus?.length || 0);
  
  if (statusResponse.editorStatus) {
    console.log("Editor Status Preview:", 
      statusResponse.editorStatus.substring(0, 100) + "..."
    );
  }
  
  return statusResponse;
};

// Example 7: Editor status with fallback
const getEditorStatusWithFallback = async () => {
  try {
    const statusResult = await codebolt.project.getEditorFileStatus();
    
    if (statusResult.success && statusResult.editorStatus) {
      return {
        source: 'editor',
        status: statusResult.editorStatus,
        success: true
      };
    }
    
    // Fallback to default status
    return {
      source: 'fallback',
      status: 'Editor status not available',
      success: false,
      message: statusResult.message
    };
  } catch (error) {
    return {
      source: 'error',
      status: 'Error retrieving editor status',
      success: false,
      error: error.message
    };
  }
};

// Example 8: Editor status integration
const integrateEditorStatus = async () => {
  const [editorStatus, projectPath] = await Promise.all([
    codebolt.project.getEditorFileStatus(),
    codebolt.project.getProjectPath()
  ]);
  
  const integration = {
    editor: {
      available: editorStatus.success,
      status: editorStatus.editorStatus,
      message: editorStatus.message
    },
    project: {
      path: projectPath.path,
      name: projectPath.projectName
    },
    combined: {
      hasEditorInfo: !!editorStatus.editorStatus,
      hasProjectInfo: !!projectPath.path,
      timestamp: new Date().toISOString()
    }
  };
  
  return integration;
};
```

### Common Use Cases

1. **Editor State Monitoring**: Track which files are currently open and visible
2. **Development Workflow**: Understand current editor context for automation
3. **Session Management**: Restore or save editor state across sessions
4. **IDE Integration**: Synchronize external tools with editor state
5. **Debugging**: Diagnose editor-related issues and state problems
6. **User Interface**: Display current editor status in dashboards or status bars
7. **Productivity Tools**: Build tools that work with currently open files

### Notes

- The editor status information may not always be available (shows default values when unavailable)
- The `editorStatus` field contains formatted text with file and tab information
- This method provides insight into the current editor context within the development environment
- The status format includes sections for "Codebolt Visible Files" and "Codebolt Open Tabs"
- When editor integration is not available, default placeholder text is returned
- The method is useful for building editor-aware development tools and workflows
- Consider caching the status if called frequently, as editor state changes often
- The response format may evolve as editor integration features are enhanced 