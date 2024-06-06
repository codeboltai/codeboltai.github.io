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


### Example

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

