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

### Response Structure

The method returns a Promise that resolves to a `BrowserSnapshotResponse` object with the following properties:

- **`type`** (string): Always "getSnapShotResponse".
- **`payload`** (object, optional): Contains the response data including:
  - **`tree`** (object): DOM tree structure with the following properties:
    - **`strings`** (array): Array of strings used in the DOM tree
    - **`documents`** (array): Array of document objects containing:
      - **`nodes`** (object): Node information including:
        - **`backendNodeId`** (array): Backend node identifiers
        - **`attributes`** (array): Element attributes with name/value pairs
        - **`nodeValue`** (array): Node values
        - **`parentIndex`** (array): Parent node indices
        - **`nodeType`** (array): Node types
        - **`nodeName`** (array): Node names
        - **`isClickable`** (object): Clickable element information
        - **`textValue`** (object): Text content values
        - **`inputValue`** (object): Input field values
        - **`inputChecked`** (object): Checkbox/radio button states
  - **`success`** (boolean, optional): Indicates if the operation was successful
  - **`content`** (string, optional): Additional content information
  - **`viewport`** (object, optional): Viewport information
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

// Get a snapshot of the current page
const snapshotResult = await codebolt.browser.getSnapShot();
console.log('✅ Snapshot taken:', snapshotResult);

// The snapshot contains comprehensive page state information
if (snapshotResult.success && snapshotResult.payload?.tree) {
    const tree = snapshotResult.payload.tree;
    console.log('Snapshot data available for analysis:', {
        documentsCount: tree.documents?.length || 0,
        stringsCount: tree.strings?.length || 0,
        hasNodeData: !!tree.documents?.[0]?.nodes
    });
    // Process the snapshot data as needed
} else {
    console.error('Failed to get snapshot:', snapshotResult.error);
}
```

### Notes

- The snapshot provides a complete structural representation of the page's DOM
- This is useful for page analysis, element detection, and automated testing
- The tree structure includes element hierarchy, attributes, and interactive states
- The response contains detailed information about clickable elements and input values

 