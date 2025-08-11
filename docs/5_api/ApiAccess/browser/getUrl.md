---
name: getUrl
cbbaseinfo:
  description: Gets the current URL of the active browser page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<UrlResponse>
    description: A promise that resolves with a `UrlResponse` object containing the current URL.
data:
  name: getUrl
  category: browser
  link: getUrl.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `UrlResponse` object with the following properties:

- **`type`** (string): Always "getUrlResponse".
- **`url`** (string, optional): The current URL of the page.
- **`currentUrl`** (string, optional): An alias for the current URL.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Example

```javascript
// First, create a new page and navigate to a URL.
await codebolt.browser.newPage();
await codebolt.browser.goToPage('https://www.google.com');

// Now, get the current URL.
const urlResponse = await codebolt.browser.getUrl();
console.log('URL Response:', urlResponse);

if (urlResponse.success) {
  console.log('The current URL is:', urlResponse.url);
  // You can use this URL to verify navigation or for other purposes.
  if (urlResponse.url.includes('google.com')) {
    console.log('Successfully navigated to Google.');
  }
} else {
  console.error('Failed to get URL:', urlResponse.error);
}
```

### Explanation

The `codebolt.browser.getUrl()` function is essential for tracking the browser's current location. It's commonly used after a navigation action (like `goToPage` or `click`) to confirm that the browser has loaded the correct page. The returned `UrlResponse` object provides the URL and other useful metadata.
