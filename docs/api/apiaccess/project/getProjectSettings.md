---
name: getProjectSettings
cbbaseinfo:
  description: Retrieves the current project settings including user, workspace, and profile information.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the project settings response.
    typeArgs: []
data:
  name: getProjectSettings
  category: project
  link: getProjectSettings.md
---
<CBBaseInfo/> 
<CBParameters/>

## Response Structure

```javascript
{
  type: 'getProjectSettingsResponse',
  success: boolean,
  message: string,
  projectSettings: {
    user_userId: number,
    user_username: string,
    user_userImageUrl: string,
    user_usertoken: string,
    user_active_workspace_id: number,
    user_active_profile_id: number,
    user_active_project_path: string,
    userprofile_profileId: number,
    userprofile_profile_type: string,
    userprofile_llm_settings: string,
    userprofile_default_llm: string,
    default_agent: any,
    workspace_id: number,
    workspace_name: string,
    workspace_folderPath: string,
    active_project_id: any,
    active_project_name: any
  }
}
```

## Example

```javascript
const projectSettings = await codebolt.project.getProjectSettings();
console.log(projectSettings);
// Output: {
//   type: 'getProjectSettingsResponse',
//   success: true,
//   message: 'Project settings retrieved successfully',
//   projectSettings: {
//     user_userId: 1,
//     user_username: 'MbXuoqRmXCbTZab4kf8RXgaUmbu2',
//     workspace_name: 'API_TEST',
//     workspace_folderPath: 'C:\\btpl\\API_TEST',
//     user_active_project_path: 'C:\\btpl\\API_TEST\\convinced-beige',
//     // ... other settings
//   }
// }
```