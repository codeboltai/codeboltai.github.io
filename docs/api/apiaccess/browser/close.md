---
name: close
cbbaseinfo:
  description: Closes the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: 'Closes the browser page.'
    typeArgs: []
data:
  name: close
  category: browser
  link: close.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Response Structure

This method returns `void` and does not provide a response. The browser page is closed immediately when the method is called.

### Example

```js
// Wait for connection and create a new page
await codebolt.waitForConnection();
await codebolt.browser.newPage();

// Navigate to a website and perform operations
await codebolt.browser.goToPage('https://example.com');
await new Promise(resolve => setTimeout(resolve, 2000));

// Close the browser when done
codebolt.browser.close();
console.log('✅ Browser closed');
```

### Notes

- This method does not return a Promise and executes immediately
- The browser page is closed without waiting for confirmation
- Use this method when you're finished with browser automation to clean up resources
- After closing, you'll need to call `newPage()` again to create a new browser session