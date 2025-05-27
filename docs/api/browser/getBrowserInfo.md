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


### Status 
Coming soon...


### Example 

```js 
// Navigate to a page
await codebolt.browser.goToPage("https://example.com")

// Get browser information
const browserInfo = await codebolt.browser.getBrowserInfo()

console.log(browserInfo)
// Example output: { height: 800, width: 1200, scrollX: 0, scrollY: 50 }
```


### Explanation 

The `codebolt.browser.getBrowserInfo()` method retrieves information about the browser's current state, including dimensions (height and width) and scroll position (scrollX and scrollY) of the current page. This function is useful for responsive design testing, understanding the user's viewport, and for scripts that need to be aware of the browser's dimensions to perform certain actions. 