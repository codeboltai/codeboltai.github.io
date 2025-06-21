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
