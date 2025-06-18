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

### Example 

```js 
// Navigate to a page
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Get a snapshot of the current page
const snapshotResult = await codebolt.browser.getSnapShot();
console.log('✅ Snapshot taken:', snapshotResult);

// The snapshot contains comprehensive page state information
if (snapshotResult.success) {
    console.log('Snapshot data available for analysis');
    // Process the snapshot data as needed
}
```

### Explanation 

The `codebolt.browser.getSnapShot()` method captures a complete snapshot of the current page's state. This function returns a promise that resolves with comprehensive data about the page. The snapshot includes information about the DOM structure, styles, and other page properties at the moment the snapshot is taken. Unlike a screenshot which captures only the visual representation, a snapshot contains structural data that can be used for detailed analysis, testing, debugging, or to restore the page state at a later time. This is particularly useful in automated testing scenarios and web analysis workflows. 