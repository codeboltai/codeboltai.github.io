---
name: enter
cbbaseinfo:
  description: Simulates the Enter key press on the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when the Enter action is complete.
    typeArgs:
      - type: intrinsic
        name: unknown
data:
  name: enter
  category: browser
  link: enter.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js

// Navigate to the sign-in page
await codebolt.browser.goToPage("https://example.com/signin");

// Fill in the username field
await codebolt.browser.type("#username", "your_username");

// Fill in the password field
await codebolt.browser.type("#password", "your_password");

// Simulate pressing the Enter key to submit the form
await codebolt.browser.enter();

```

### Explanation:

The codebolt.browser.enter() function is used to submit the form. Suppose there is a login form and I want to automatically submit it using a script. Then, we want to send text to a username field on the login page using the type() function, which has two parameters: eventid and "value". After inputting all the information, we call enter() to submit the form.