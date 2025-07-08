---
name: goToPage
cbbaseinfo:
  description: Navigates the browser to a specific URL.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL to navigate to (must include protocol like https://).
  returns:
    signatureTypeName: Promise<GoToPageResponse>
    description: A promise that resolves when navigation is initiated with page information.
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

// Navigate to a webpage
const goToResult = await codebolt.browser.goToPage('https://example.com');
console.log('✅ Navigated to page:', goToResult);

// Wait for the page to fully load
await new Promise(resolve => setTimeout(resolve, 2000));

// Verify the navigation was successful
const currentUrl = await codebolt.browser.getUrl();
console.log('✅ Current URL after navigation:', currentUrl);

// Example with different websites
await codebolt.browser.goToPage('https://www.google.com');
await codebolt.browser.goToPage('https://github.com');
```

### Response Structure

The method returns a Promise that resolves to a `GoToPageResponse` object with the following properties:

**Response Properties:**
- `type`: Always "goToPageResponse"
- `url`: Optional string containing the URL that was navigated to
- `success`: Optional boolean indicating if the navigation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Explanation

The `codebolt.browser.goToPage(url)` function navigates the browser to a specified URL. This is one of the most fundamental browser automation functions, allowing you to load different web pages programmatically.



