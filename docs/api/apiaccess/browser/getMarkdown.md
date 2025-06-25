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






