---
name: getContent
cbbaseinfo:
  description: Retrieves the content of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: getContent
  category: browser
  link: getContent.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples: 

```js

// Navigate to the blog page
await codebolt.browser.goToPage("https://example-blog.com/article")

// Retrieve the HTML content of the current page
const pageContent = await codebolt.browser.getContent()

// Log the retrieved content to the console (or save it as needed)
console.log(pageContent)

```

### Explanation:
The codebolt.browser.getContent() function is used to retrieve the entire HTML content of the current web page. This function is particularly useful in web scraping, data extraction, and automated testing scenarios where you need to capture the full structure and content of a web page for further processing or analysis.

### Explaination of the code: 

Navigation: The script begins by navigating to the specific blog page using codebolt.browser.goToPage("https://example-blog.com/article").

Content Retrieval: Once the page has fully loaded, the script uses codebolt.browser.getContent() to retrieve the complete HTML content of the current page. This includes all HTML tags, embedded styles, scripts, and textual content.

Processing the Retrieved Content: The retrieved HTML content is stored in the variable pageContent. In this example, the script logs the HTML content to the console using console.log(pageContent). In a real-world scenario, you might save this content to a file or a database for later analysis or offline access.