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

### Examples 

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

Navigation: The script navigates to the sign-in page of the website.

Entering Data: Using codebolt.browser.type(), the script fills in the username and password fields with the appropriate credentials.

Simulating Enter Key Press: Instead of clicking a submit button, the script uses codebolt.browser.enter() to simulate pressing the Enter key. This action triggers the default submission behavior of the form, submitting the entered username and password for authentication.