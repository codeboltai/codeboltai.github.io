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

### Explanation

The `codebolt.browser.close()` function closes the current browser page or tab. This function is essential for proper cleanup after completing browser automation tasks. It's typically called at the end of automation workflows to free up system resources and close the browser session. The function does not return a promise and executes immediately. Using this function is a best practice to ensure that browser processes are properly terminated and don't consume unnecessary system resources after your automation tasks are completed.

 