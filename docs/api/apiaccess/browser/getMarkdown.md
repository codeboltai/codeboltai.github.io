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
// Navigate to the blog post page
await codebolt.browser.goToPage("https://example-blog.com/post/12345");

// Retrieve the Markdown content of the current page
const markdownContent = await codebolt.browser.getMarkdown();

// Log the retrieved Markdown content to the console (or save it as needed)
console.log(markdownContent);
```

### Explanation

The `codebolt.browser.getMarkdown()` function converts and retrieves the content of the current web page in Markdown format. This function is particularly useful for converting HTML content into a more readable and editable Markdown format, which is widely used in documentation, blogging, and content management systems.





