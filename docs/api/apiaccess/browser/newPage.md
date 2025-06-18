---
name: newPage
cbbaseinfo:
  description: Opens a new page in the browser.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<NewPageResponse>
    description: A promise that resolves when the new page is created.
    typeArgs: []
data:
  name: newPage
  category: browser
  link: newPage.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js
// Wait for connection to be established
await codebolt.waitForConnection();

// Open a new page in the browser
const newPageResult = await codebolt.browser.newPage();
console.log('✅ New page created:', newPageResult);

// Navigate to a specific URL after creating the page
await codebolt.browser.goToPage('https://example.com');
```

### Explanation

The `codebolt.browser.newPage()` function creates a new browser tab or window. This function returns a promise that resolves when the new page is successfully created. It's typically used at the beginning of browser automation workflows to initialize a fresh browsing context. The function is useful in web automation, testing, and multi-page navigation scenarios where you need to interact with multiple pages simultaneously or start with a clean browser state.