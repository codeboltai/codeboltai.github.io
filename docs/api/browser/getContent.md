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


### Status 
Working Progress...


### Example 

```js 

// Navigate to the product page
await codebolt.browser.goToPage("https://example-ecommerce.com/product/12345")

// Retrieve the get content of the current page
const getContent = await codebolt.browser.getContent()

console.log(getContent)

```


### Explaination 

The codebolt.browser.getContent() method is used to capture the entire content of the webpage that is currently loaded. This includes the HTML, text, and other elements present on the page. The codebolt.browser.getContent() function is used to retrieve the HTML content of the current web page. This function is particularly useful for web scraping, data extraction, and automated testing scenarios where you need to capture the content of a web page for further analysis or processing.
