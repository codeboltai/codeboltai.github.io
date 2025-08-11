---
name: getBrowserInfo
cbbaseinfo:
  description: Retrieves browser information like height, width, scroll position of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<any>
    description: 'A promise that resolves with the browser information.'
    typeArgs: []
data:
  name: getBrowserInfo
  category: browser
  link: getBrowserInfo.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `BrowserInfoResponse` object with the following properties:

- **`type`** (string): Always "getBrowserInfoResponse".
- **`payload`** (object, optional): Contains the response data including:
  - **`info`** (object): Browser viewport information with the following properties:
    - **`width`** (number): Browser viewport width in pixels
    - **`height`** (number): Browser viewport height in pixels
    - **`devicePixelRatio`** (number): Device pixel ratio
    - **`scrollX`** (number): Horizontal scroll position
    - **`scrollY`** (number): Vertical scroll position
    - **`pageYOffset`** (number): Page Y offset
    - **`pageXOffset`** (number): Page X offset
    - **`windowWidth`** (number): Window width
    - **`windowHeight`** (number): Window height
    - **`offsetHeight`** (number): Element offset height
    - **`scrollHeight`** (number): Total scrollable height
  - **`success`** (boolean, optional): Indicates if the operation was successful
  - **`content`** (string, optional): Additional content information
  - **`viewport`** (object, optional): Alternative viewport information
- **`eventId`** (string, optional): Event identifier for the action
- **`success`** (boolean, optional): Indicates if the operation was successful
- **`message`** (string, optional): A message with additional information
- **`error`** (string, optional): Error details if the operation failed
- **`messageId`** (string, optional): A unique identifier for the message
- **`threadId`** (string, optional): The thread identifier

### Example 

```js 
// Navigate to a page
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Get browser information
const browserInfoResult = await codebolt.browser.getBrowserInfo();
console.log('✅ Browser info:', browserInfoResult);

// The browser info contains viewport and scroll data
if (browserInfoResult.success && browserInfoResult.payload?.info) {
    const info = browserInfoResult.payload.info;
    console.log('Browser dimensions and scroll position:', {
        width: info.width,
        height: info.height,
        scrollX: info.scrollX,
        scrollY: info.scrollY,
        scrollHeight: info.scrollHeight
    });
} else {
    console.error('Failed to get browser info:', browserInfoResult.error);
}
```

### Notes

- The browser info provides comprehensive viewport and scroll information
- This is useful for responsive design testing, scroll position tracking, and viewport-based automation
- The response includes both current viewport dimensions and total page dimensions
