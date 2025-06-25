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