---
name: enter
cbbaseinfo:
  description: Simulates the Enter key press on the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<EnterResponse>
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
// Navigate to a page with a form
await codebolt.browser.goToPage("https://example.com/login");
await new Promise(resolve => setTimeout(resolve, 2000));

// Fill in form fields
await codebolt.browser.type("username", "testuser");
await codebolt.browser.type("password", "testpass");

// Simulate pressing the Enter key to submit the form
const enterResult = await codebolt.browser.enter();
console.log('✅ Enter key pressed:', enterResult);

// Alternative usage: after typing in a search box
await codebolt.browser.type("search-input", "search query");
await codebolt.browser.enter(); // Submit the search
```

### Important Note

The `enter()` function simulates pressing the Enter key on the currently focused element or form. It's commonly used after filling form fields to submit forms or trigger actions. Ensure that there's an appropriate target element or form that can handle the Enter key event.

### Explanation

The `codebolt.browser.enter()` function simulates pressing the Enter key on the current page. This function takes no parameters and returns a promise that resolves when the Enter key action is complete. It's particularly useful for submitting forms, activating default buttons, or triggering other Enter key events on the page. After inputting information into form fields using the `type()` function, you can call `enter()` to submit the form without needing to locate and click a submit button. This function is essential for automation workflows involving form submissions and keyboard-driven interactions.