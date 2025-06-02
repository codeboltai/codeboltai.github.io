---
name: enter
cbbaseinfo:
  description: Simulates the Enter key press on the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<any>
    description: A promise that resolves when the Enter action is complete.
    typeArgs: []
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

### Explanation

The `codebolt.browser.enter()` function simulates pressing the Enter key on the current page. This is particularly useful for submitting forms, activating default buttons, or triggering other Enter key events on the page. After inputting information into form fields using the `type()` function, you can call `enter()` to submit the form without needing to locate and click a submit button.