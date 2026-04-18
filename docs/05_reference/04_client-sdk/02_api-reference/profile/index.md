---
cbapicategory:
  - name: getDefaultProfile
    link: /docs/reference/client-sdk/api-reference/profile/getDefaultProfile
    description: "Retrieves the default user profile for the current session.

Returns the full profile object including user identity, preferences, and configured
defaults. Use this to display user information or check profile settings."
  - name: setDefaultAgent
    link: /docs/reference/client-sdk/api-reference/profile/setDefaultAgent
    description: "Sets the default agent for the user's profile.

Configures which agent is automatically selected when the user starts a new
conversation or task. This persists across sessions until changed."
---
# Profile API

Profile API

<CBAPICategory />

## Methods

- [`getDefaultProfile()`](./getDefaultProfile) — Retrieves the default user profile for the current session.

Returns the full profile object including user identity, preferences, and configured
defaults. Use this to display user information or check profile settings.
- [`setDefaultAgent()`](./setDefaultAgent) — Sets the default agent for the user's profile.

Configures which agent is automatically selected when the user starts a new
conversation or task. This persists across sessions until changed.
