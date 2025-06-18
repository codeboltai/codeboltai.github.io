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
}
```

### Explanation

The `codebolt.browser.getMarkdown()` function converts and retrieves the content of the current web page in Markdown format. This function returns a promise that resolves with an object containing a `success` boolean and the `markdown` content. The function converts HTML content into a more readable and editable Markdown format, which is widely used in documentation, blogging, and content management systems. This is particularly useful for content extraction, documentation generation, and creating clean, formatted text from web pages.





