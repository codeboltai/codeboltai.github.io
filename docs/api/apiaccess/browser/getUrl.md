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
// Navigate to the home page
await codebolt.browser.goToPage("https://example-website.com");

// Retrieve and log the current URL
let currentUrl = await codebolt.browser.getUrl();
console.log(`Current URL: ${currentUrl}`);
```

### Explanation

The `codebolt.browser.getUrl()` function retrieves the URL of the current web page in the browser. This is useful for verifying the current location, tracking navigation, or collecting URLs during automated browsing sessions.