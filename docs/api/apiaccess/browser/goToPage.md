---
name: goToPage
cbbaseinfo:
  description: Navigates to a specified URL.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL to navigate to.
  returns:
    signatureTypeName: Promise<GoToPageResponse>
    description: A promise that resolves when navigation is complete.
    typeArgs: []
data:
  name: goToPage
  category: browser
  link: goToPage.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
// Wait for connection and create a new page
await codebolt.waitForConnection();
await codebolt.browser.newPage();

// Navigate to a webpage using Codebolt's browser API
const goToResult = await codebolt.browser.goToPage('https://example.com');
console.log('✅ Navigated to page:', goToResult);

// Wait for the page to fully load
await new Promise(resolve => setTimeout(resolve, 2000));

// Verify the navigation was successful
const currentUrl = await codebolt.browser.getUrl();
console.log('✅ Current URL after navigation:', currentUrl);
```

### Explanation

The `codebolt.browser.goToPage(url)` function navigates the browser to a new web page specified by the URL parameter. When this function is called, the browser leaves the current page and loads the new page indicated by the URL. This function returns a promise that resolves when the navigation request is initiated. It's typically one of the first commands used in browser automation workflows after creating a new page. For reliable automation, it's recommended to wait for the page to load completely before performing additional operations.




