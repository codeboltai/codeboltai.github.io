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
if (browserInfoResult.success) {
    console.log('Browser dimensions and scroll position:', browserInfoResult);
    // Example output structure: { height: 800, width: 1200, scrollX: 0, scrollY: 50 }
}
```
