---
name: getHTML
cbbaseinfo:
  description: Retrieves the HTML content of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<HtmlReceived>
    description: A promise that resolves with the HTML content.
    typeArgs: []
data:
  name: getHTML
  category: browser
  link: getHTML.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `HtmlReceived` object with the following properties:

- **`type`** (string): Always "htmlReceived".
- **`html`** (string, optional): The HTML content of the current page
- **`content`** (string, optional): Alternative property for the HTML content
- **`success`** (boolean, optional): Indicates if the operation was successful
- **`message`** (string, optional): A message with additional information
- **`error`** (string, optional): Error details if the operation failed
- **`messageId`** (string, optional): A unique identifier for the message
- **`threadId`** (string, optional): The thread identifier

### Example

```js
// Navigate to the page
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Retrieve the HTML content of the current page
const htmlResult = await codebolt.browser.getHTML();
console.log('✅ HTML retrieved:', {
    success: htmlResult.success,
    htmlLength: htmlResult.html ? htmlResult.html.length : 0
});

// Access the actual HTML content
if (htmlResult.success && htmlResult.html) {
    console.log('HTML content:', htmlResult.html);
    // Process the HTML as needed
} else {
    console.error('Failed to retrieve HTML:', htmlResult.error);
}
```

### Notes

- The HTML content includes the complete source code of the current page
- This is useful for parsing page structure, extracting specific elements, or analyzing page content
- The response may contain large amounts of data depending on the page size
