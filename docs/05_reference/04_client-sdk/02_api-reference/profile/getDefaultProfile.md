---
name: getDefaultProfile
cbbaseinfo:
  description: "Retrieves the default user profile for the current session.

Returns the full profile object including user identity, preferences, and configured
defaults. Use this to display user information or check profile settings."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<UserProfile>"
    description: "A promise that resolves to the user's profile data"
data:
  name: getDefaultProfile
  category: profile
  link: getDefaultProfile.md
---
# getDefaultProfile

```typescript
client.profile.getDefaultProfile(): Promise<UserProfile>
```

Retrieves the default user profile for the current session.

Returns the full profile object including user identity, preferences, and configured
defaults. Use this to display user information or check profile settings.

## Parameters

_None_

## Returns

**`Promise<UserProfile>`** — A promise that resolves to the user's profile data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.profile.getDefaultProfile();
```
