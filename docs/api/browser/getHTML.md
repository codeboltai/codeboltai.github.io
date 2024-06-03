---
name: getHTML
cbbaseinfo:
  description: Retrieves the HTML content of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the HTML content.
    typeArgs:
      - type: reference
        name: HtmlReceived
data:
  name: getHTML
  category: browser
  link: getHTML.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples :

```js

// Navigate to the product page
await codebolt.browser.goToPage("https://example-ecommerce.com/product/12345")

// Retrieve the HTML content of the current page
const htmlContent = await codebolt.browser.getHTML()

// Log the retrieved HTML content to the console (or save it as needed)
console.log(htmlContent)

```

### Explaination:

The codebolt.browser.getHTML() function is used to retrieve the HTML content of the current web page. This function is particularly useful for web scraping, data extraction, and automated testing scenarios where you need to capture the entire HTML structure and content of a web page for further analysis or processing.


### Explaination of the code: 

Navigation: The script begins by navigating to the specific blog page using codebolt.browser.goToPage("https://example-blog.com/article").

HTML Content Retrieval: Once the page has fully loaded, the script uses codebolt.browser.getHTML() to retrieve the complete HTML content of the current page. The function returns a promise that resolves to the HTML content, which includes all HTML tags, embedded styles, scripts, and textual content.

Processing the Retrieved HTML: The retrieved HTML content is stored in the variable htmlContent. In this example, the script logs the HTML content to the console using console.log(htmlContent). Additionally, the example demonstrates how to save the HTML content to a file using Node.js's file system module (fs), which writes the HTML content to a file named product-page.html.