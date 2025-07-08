---
name: getUrl
cbbaseinfo:
  description: Gets the current URL of the active browser page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<UrlResponse>
    description: A promise that resolves with the current URL and viewport information.
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

### Response Structure

The method returns a Promise that resolves to a `UrlResponse` object with the following properties:

**Response Properties:**
- `type`: Always "urlResponse"
- `url`: Optional string containing the URL
- `currentUrl`: Optional string containing the current URL
- `success`: Optional boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Explanation

The `codebolt.browser.getUrl()` function retrieves the current URL of the active browser page along with viewport information. This function is essential for navigation verification and tracking the current page location.
