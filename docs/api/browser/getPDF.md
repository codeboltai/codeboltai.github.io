---
name: getPDF
cbbaseinfo:
  description: Retrieves the PDF content of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: getPDF
  category: browser
  link: getPDF.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples:

```js

// Navigate to the news article page
await codebolt.browser.goToPage("https://example-news.com/article/12345");

// Retrieve the PDF content of the current page
const pdfContent = await codebolt.browser.getPDF();

// Log a message to indicate the PDF has been retrieved (optional)
console.log("PDF content retrieved successfully");

```


### Explanation

The codebolt.browser.getPDF() function is used to retrieve a PDF representation of the current web page. This function is particularly useful for generating PDF versions of web pages for documentation, archiving, or sharing purposes. It captures the visual layout and content of the web page as a PDF file.



### Explanation of the Code

Navigation: The script starts by navigating to a specific news article page using codebolt.browser.goToPage("https://example-news.com/article/12345").

PDF Content Retrieval: Once the page has fully loaded, the script uses codebolt.browser.getPDF() to retrieve the content of the current page as a PDF. This function captures the entire visual layout and content of the page, creating a PDF file that mirrors the web page's appearance.

Processing the Retrieved PDF: The retrieved PDF content is stored in the variable pdfContent. In this example, the script logs a message to the console to indicate that the PDF has been successfully retrieved.