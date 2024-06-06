---
name: getApplicationState
cbbaseinfo:
  description: Retrieves the current application state from the server via WebSocket.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the application state.
    typeArgs:
      - type: reference
        name: ApplicationState
data:
  name: getApplicationState
  category: cbstate
  link: getApplicationState.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js
// Retrieve the current application state
const appState = await codebolt.cbstate.getApplicationState();

// Access specific state information
const appVersion = appState.appVersion;
const featureToggle = appState.featureToggle;

// Log the retrieved state information
console.log(`Application Version: ${appVersion}`);
console.log(`Feature Toggle: ${featureToggle}`);

```

### Explanation

The codebolt.cbstate.getApplicationState() function is used to get all the state information that store in the entire agent's state. This function is used to access shared state information relevant to the entire application.