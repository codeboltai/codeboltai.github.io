---
name: getContent
cbbaseinfo:
  description: Retrieves the content of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetContentResponse>
    description: 'A promise that resolves with the content of the page.'
    typeArgs: []
data:
  name: getContent
  category: browser
  link: getContent.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetContentResponse` object with the following properties:

**Response Properties:**
- `type`: Always "getContentResponse"
- `content`: Optional string containing the page content
- `html`: Optional string containing the HTML content
- `text`: Optional string containing the text content
- `success`: Optional boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Example 

```js 
// Navigate to the page
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Retrieve the content of the current page
const contentResult = await codebolt.browser.getContent();
console.log('✅ Content retrieved:', {
    success: contentResult.success,
    contentLength: contentResult.content ? contentResult.content.length : 0,
    hasHtml: !!contentResult.html,
    hasText: !!contentResult.text
});

// Access the actual content
if (contentResult.success && contentResult.content) {
    console.log('Page content:', contentResult.content);
    // Process the content as needed
}
```
