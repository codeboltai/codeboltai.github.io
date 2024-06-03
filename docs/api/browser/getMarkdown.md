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

### Examples: 

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


### Explanation of the Code

Navigation: The script starts by navigating to a specific blog post page using codebolt.browser.goToPage("https://example-blog.com/post/12345").


Markdown Content Retrieval: Once the page has fully loaded, the script uses codebolt.browser.getMarkdown() to retrieve the content of the current page in Markdown format. This function converts the HTML content into Markdown, capturing the structure and text in a more readable format.


Processing the Retrieved Markdown: The retrieved Markdown content is stored in the variable markdownContent. In this example, the script logs the Markdown content to the console using console.log(markdownContent). Additionally, the example demonstrates how to save the Markdown content to a file using Node.js's file system module (fs), which writes the content to a file named post.md.




