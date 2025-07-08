---
name: getProjectSettings
cbbaseinfo:
  description: Retrieves the current project settings including user information, workspace details, profile settings, and LLM configuration for the active project.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetProjectSettingsResponse>
    description: A promise that resolves with the project settings response containing comprehensive project and user configuration.
data:
  name: getProjectSettings
  category: project
  link: getProjectSettings.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetProjectSettingsResponse` object with the following properties:

- **`type`** (string): Always "getProjectSettingsResponse".
- **`projectSettings`** (object, optional): Comprehensive project configuration containing:
  - **`user_userId`** (number): Unique identifier for the user.
  - **`user_username`** (string): Username of the current user.
  - **`user_userImageUrl`** (string): URL to the user's profile image.
  - **`user_usertoken`** (string): Authentication token for the user.
  - **`user_active_workspace_id`** (number): ID of the currently active workspace.
  - **`user_active_profile_id`** (number): ID of the currently active user profile.
  - **`user_active_project_path`** (string): Full path to the currently active project.
  - **`userprofile_profileId`** (number): Profile identifier for user settings.
  - **`userprofile_profile_type`** (string): Type of user profile (e.g., "developer", "admin").
  - **`userprofile_llm_settings`** (string): LLM configuration settings as JSON string.
  - **`userprofile_default_llm`** (string): Default LLM model for the user.
  - **`default_agent`** (any): Default agent configuration.
  - **`workspace_id`** (number): Workspace identifier.
  - **`workspace_name`** (string): Name of the current workspace.
  - **`workspace_folderPath`** (string): Full path to the workspace folder.
  - **`active_project_id`** (any): ID of the active project (if applicable).
  - **`active_project_name`** (any): Name of the active project (if applicable).
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic project settings retrieval
const settings = await codebolt.project.getProjectSettings();
console.log("Project Settings:", settings.projectSettings);

// Example 2: Accessing user information
const userInfo = await codebolt.project.getProjectSettings();
if (userInfo.success && userInfo.projectSettings) {
  console.log("User ID:", userInfo.projectSettings.user_userId);
  console.log("Username:", userInfo.projectSettings.user_username);
  console.log("Workspace:", userInfo.projectSettings.workspace_name);
  console.log("Project Path:", userInfo.projectSettings.user_active_project_path);
}

// Example 3: Getting LLM configuration
const llmConfig = await codebolt.project.getProjectSettings();
if (llmConfig.projectSettings) {
  console.log("Default LLM:", llmConfig.projectSettings.userprofile_default_llm);
  
  // Parse LLM settings if available
  if (llmConfig.projectSettings.userprofile_llm_settings) {
    try {
      const llmSettings = JSON.parse(llmConfig.projectSettings.userprofile_llm_settings);
      console.log("LLM Settings:", llmSettings);
    } catch (error) {
      console.error("Failed to parse LLM settings:", error);
    }
  }
}

// Example 4: Workspace information
const workspaceInfo = async () => {
  const settings = await codebolt.project.getProjectSettings();
  
  return {
    workspaceId: settings.projectSettings?.workspace_id,
    workspaceName: settings.projectSettings?.workspace_name,
    workspacePath: settings.projectSettings?.workspace_folderPath,
    activeProjectPath: settings.projectSettings?.user_active_project_path
  };
};

// Example 5: User profile management
const getUserProfile = async () => {
  const settings = await codebolt.project.getProjectSettings();
  
  if (!settings.success) {
    throw new Error("Failed to retrieve project settings");
  }
  
  return {
    profileId: settings.projectSettings?.userprofile_profileId,
    profileType: settings.projectSettings?.userprofile_profile_type,
    userId: settings.projectSettings?.user_userId,
    username: settings.projectSettings?.user_username,
    imageUrl: settings.projectSettings?.user_userImageUrl
  };
};

// Example 6: Project validation and setup
const validateProjectSetup = async () => {
  const settings = await codebolt.project.getProjectSettings();
  
  const validation = {
    hasValidUser: !!settings.projectSettings?.user_userId,
    hasValidWorkspace: !!settings.projectSettings?.workspace_id,
    hasValidProject: !!settings.projectSettings?.user_active_project_path,
    hasLLMConfig: !!settings.projectSettings?.userprofile_default_llm
  };
  
  const isValid = Object.values(validation).every(Boolean);
  
  return {
    isValid,
    details: validation,
    settings: settings.projectSettings
  };
};

// Example 7: Error handling with detailed information
try {
  const settings = await codebolt.project.getProjectSettings();
  
  if (!settings.success) {
    console.error("Settings retrieval failed:", settings.message);
    return;
  }
  
  if (!settings.projectSettings) {
    console.warn("No project settings available");
    return;
  }
  
  // Process settings
  console.log("Settings retrieved successfully");
  
} catch (error) {
  console.error("Error getting project settings:", error);
}

// Example 8: Settings comparison and migration
const compareSettings = async () => {
  const currentSettings = await codebolt.project.getProjectSettings();
  
  // Example of settings validation
  const requiredFields = [
    'user_userId',
    'workspace_id',
    'user_active_project_path',
    'userprofile_default_llm'
  ];
  
  const missingFields = requiredFields.filter(field => 
    !currentSettings.projectSettings?.[field]
  );
  
  if (missingFields.length > 0) {
    console.warn("Missing required settings:", missingFields);
  }
  
  return {
    isComplete: missingFields.length === 0,
    missingFields,
    settings: currentSettings.projectSettings
  };
};
```

### Common Use Cases

1. **User Authentication**: Access user tokens and authentication information
2. **Workspace Management**: Get workspace details and project paths
3. **LLM Configuration**: Retrieve and manage LLM settings for the project
4. **Profile Management**: Access user profile information and preferences
5. **Project Validation**: Verify that all required settings are configured
6. **Environment Setup**: Initialize development environment with user settings
7. **Settings Migration**: Compare and update configuration across different environments

### Notes

- This method provides comprehensive project and user configuration information
- The `projectSettings` object contains sensitive information like user tokens - handle securely
- LLM settings are stored as JSON strings and may need parsing
- Workspace and project paths are essential for file system operations
- User profile information can be used for personalization and access control
- The method should be called early in application initialization to set up the environment
- Settings may change during the session, so consider caching strategies if called frequently
- Some fields may be null or undefined depending on the project setup and user configuration