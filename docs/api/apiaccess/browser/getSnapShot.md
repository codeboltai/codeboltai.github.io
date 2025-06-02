---
name: getSnapShot
cbbaseinfo:
  description: Retrieves a snapshot of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<any>
    description: 'A promise that resolves with the snapshot data.'
    typeArgs: []
data:
  name: getSnapShot
  category: browser
  link: getSnapShot.md
---
<CBBaseInfo/> 
<CBParameters/>


### Status 
Coming soon...


### Example 

```js 
// Navigate to a page
await codebolt.browser.goToPage("https://example.com")

// Get a snapshot of the current page
const snapshot = await codebolt.browser.getSnapShot()

console.log(snapshot)
```


### Explanation 

The `codebolt.browser.getSnapShot()` method captures a complete snapshot of the current page's state. This includes information about the DOM structure, styles, and other page properties at the moment the snapshot is taken. Unlike a screenshot which captures only the visual representation, a snapshot contains structural data that can be used for analysis, testing, or to restore the page state at a later time. 