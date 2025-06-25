---
name: newPage
cbbaseinfo:
  description: Creates a new browser page or tab for web automation.
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

// Create a new browser page
const newPageResult = await codebolt.browser.newPage();
console.log('✅ New page created:', newPageResult);

// Navigate to a website after creating the page
await codebolt.browser.goToPage('https://example.com');

// Get the current URL to verify the page is ready
const currentUrl = await codebolt.browser.getUrl();
console.log('Current URL:', currentUrl);
```

### Response Structure

```js
{
  type: 'newPageResponse'
}
```

### Explanation

The `codebolt.browser.newPage()` function creates a new browser tab or window, initializing a fresh browsing session. This is typically the first function you'll call when starting browser automation workflows.
