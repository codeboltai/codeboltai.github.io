---
name: getContent
cbbaseinfo:
  description: Retrieves the content of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetContentResponse>
    description: 'A promise that resolves with the content of the page.'
    typeArgs: []
data:
  name: getContent
  category: browser
  link: getContent.md
---
<CBBaseInfo/> 
<CBParameters/>


### Status 
Coming soon...


### Example 

```js 
// Navigate to the product page
await codebolt.browser.goToPage("https://example-ecommerce.com/product/12345")

// Retrieve the content of the current page
const content = await codebolt.browser.getContent()

console.log(content)
```


### Explanation 

The `codebolt.browser.getContent()` method retrieves the entire content of the webpage that is currently loaded. This includes the HTML, text, and other elements present on the page. This function is particularly useful for web scraping, data extraction, and automated testing scenarios where you need to capture the content of a web page for further analysis or processing.
