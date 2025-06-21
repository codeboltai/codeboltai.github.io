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

 