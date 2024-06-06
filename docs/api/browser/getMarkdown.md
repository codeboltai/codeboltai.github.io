---
name: getMarkdown
cbbaseinfo:
  description: Retrieves the Markdown content of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the Markdown content.
    typeArgs:
      - type: reference
        name: GetMarkdownResponse
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


### Explanation:

The codebolt.browser.getMarkdown() function is used to retrieve the Markdown representation of the content on the current web page. This function is particularly useful for converting HTML content into a more readable and editable Markdown format, which is widely used in documentation, blogging, and content management systems.





