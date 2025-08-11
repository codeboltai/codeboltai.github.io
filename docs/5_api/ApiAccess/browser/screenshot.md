---
name: screenshot
cbbaseinfo:
  description: Takes a screenshot of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<BrowserScreenshotResponse>
    description: A promise that resolves with the screenshot data.
    typeArgs: []
data:
  name: screenshot
  category: browser
  link: screenshot.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `BrowserScreenshotResponse` object with the following properties:

**Response Properties:**
- `type`: Always "screenshotResponse"
- `payload`: Optional object containing the response data
  - `screenshot`: Base64 encoded image data of the screenshot
  - `fullPage`: Optional boolean indicating if it's a full page screenshot
  - `success`: Optional boolean indicating if the operation was successful
  - `content`: Optional string with additional content information
  - `viewport`: Optional viewport information object
- `eventId`: Optional string containing the event identifier
- `success`: Optional boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Example 

```js 
// Navigate to the page you want to capture
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load completely
await new Promise(resolve => setTimeout(resolve, 2000));

// Take a screenshot of the current page
const screenshotResult = await codebolt.browser.screenshot();
console.log('✅ Screenshot taken:', screenshotResult);
console.log('Screenshot data available:', !!screenshotResult?.payload?.screenshot);
```

### Explanation

The `codebolt.browser.screenshot()` function captures a screenshot of the current page displayed in the browser. This function returns a promise that resolves with the screenshot data. The screenshot includes the visible portion of the webpage as it appears in the browser viewport. This function is helpful for various purposes such as visual verification, debugging, automated testing, generating documentation, or creating visual records of web pages during automation workflows.
