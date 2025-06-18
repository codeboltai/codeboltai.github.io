---
name: getUrl
cbbaseinfo:
  description: Retrieves the current URL of the browser's active page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<UrlResponse>
    description: A promise that resolves with the URL.
    typeArgs: []
data:
  name: getUrl
  category: browser
  link: getUrl.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
// Create a new browser page
await codebolt.browser.newPage();

// Get the initial URL (usually about:blank or similar)
const initialUrl = await codebolt.browser.getUrl();
console.log('✅ Initial URL:', initialUrl);

// Navigate to a specific website
await codebolt.browser.goToPage('https://example.com');

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Get the URL after navigation to verify successful navigation
const currentUrl = await codebolt.browser.getUrl();
console.log('✅ URL after navigation:', currentUrl);
```

### Explanation

The `codebolt.browser.getUrl()` function retrieves the URL of the current web page in the browser. This function returns a promise that resolves with the current URL. It's particularly useful for verifying successful navigation, tracking the current location during automated browsing sessions, or confirming that redirects have occurred as expected. The function is commonly used in testing scenarios to assert that the browser is on the correct page.