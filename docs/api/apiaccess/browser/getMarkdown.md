---
name: getMarkdown
cbbaseinfo:
  description: Retrieves the Markdown content of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetMarkdownResponse>
    description: A promise that resolves with the Markdown content.
    typeArgs: []
data:
  name: getMarkdown
  category: browser
  link: getMarkdown.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetMarkdownResponse` object with the following properties:

- **`type`** (string): Always "getMarkdownResponse".
- **`markdown`** (string, optional): The Markdown content of the current page
- **`content`** (string, optional): Alternative property for the Markdown content
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

// Retrieve the Markdown content of the current page
const markdownResult = await codebolt.browser.getMarkdown();
console.log('✅ Markdown retrieved:', {
    success: markdownResult.success,
    markdownLength: markdownResult.markdown ? markdownResult.markdown.length : 0
});

// Access the actual Markdown content
if (markdownResult.success && markdownResult.markdown) {
    console.log('Markdown content:', markdownResult.markdown);
    // Save or process the Markdown as needed
} else {
    console.error('Failed to retrieve Markdown:', markdownResult.error);
}
```

### Notes

- The Markdown content is a structured text representation of the page content
- This is useful for documentation, content analysis, or converting web content to readable format
- The conversion maintains the logical structure of headings, lists, links, and other elements






