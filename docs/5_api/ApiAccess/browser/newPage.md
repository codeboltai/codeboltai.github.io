---
name: newPage
cbbaseinfo:
  description: Creates a new browser page or tab for web automation.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<BrowserActionResponseData>
    description: A promise that resolves with a `BrowserActionResponseData` object when the new page is created.
data:
  name: newPage
  category: browser
  link: newPage.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `BrowserActionResponseData` object, which may contain the following properties:

- **`type`** (string): Always "newPageResponse".
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.

### Example

```javascript
// It's good practice to wait for the connection to be established first.
await codebolt.waitForConnection();

// Create a new browser page
const newPageResult = await codebolt.browser.newPage();
console.log('New page creation result:', newPageResult);

if (newPageResult.success) {
  console.log('Successfully created a new page.');
  // Now you can navigate to a URL
  await codebolt.browser.goToPage('https://example.com');
  const currentUrl = await codebolt.browser.getUrl();
  console.log('Current URL:', currentUrl.url);
} else {
  console.error('Failed to create a new page:', newPageResult.error);
}
```

### Explanation

The `codebolt.browser.newPage()` function initializes a new browser tab or window, providing a fresh browsing context for automation tasks. It is the starting point for most web automation workflows. After creating a new page, you can use other `cbbrowser` functions to navigate, interact with, and extract content from web pages.
