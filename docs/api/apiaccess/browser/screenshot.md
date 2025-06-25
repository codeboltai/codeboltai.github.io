---
name: screenshot
cbbaseinfo:
  description: Takes a screenshot of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<ScreenshotResponse>
    description: A promise that resolves with the screenshot data.
    typeArgs: []
data:
  name: screenshot
  category: browser
  link: screenshot.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

```js 
// Navigate to the page you want to capture
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load completely
await new Promise(resolve => setTimeout(resolve, 2000));

// Take a screenshot of the current page
const screenshotResult = await codebolt.browser.screenshot();
console.log('✅ Screenshot taken:', screenshotResult);
```

### Explanation

The `codebolt.browser.screenshot()` function captures a screenshot of the current page displayed in the browser. This function returns a promise that resolves with the screenshot data. The screenshot includes the visible portion of the webpage as it appears in the browser viewport. This function is helpful for various purposes such as visual verification, debugging, automated testing, generating documentation, or creating visual records of web pages during automation workflows.
