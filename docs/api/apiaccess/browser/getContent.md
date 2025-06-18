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
    contentLength: contentResult.content ? contentResult.content.length : 0
});

// Access the actual content
if (contentResult.success && contentResult.content) {
    console.log('Page content:', contentResult.content);
    // Process the content as needed
}
```

### Explanation 

The `codebolt.browser.getContent()` method retrieves the entire content of the webpage that is currently loaded. This function returns a promise that resolves with an object containing a `success` boolean and the `content` data. The content includes text, HTML elements, and other structured data present on the page. This function is particularly useful for web scraping, data extraction, content analysis, and automated testing scenarios where you need to capture and process the comprehensive content of a web page for further analysis or processing.
