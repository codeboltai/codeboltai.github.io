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


### Status 
Working Progress...


### Example

```js


await codebolt.browser.goToPage("https://example-ecommerce.com/product/12345")


const getPDF = await codebolt.browser.getPDF()

```

### Explaination 

The codebolt.browser.getPDF() method is designed to capture the content of the current webpage and generate a PDF file from it. This is useful for saving web pages as PDFs for offline reading, documentation, or record-keeping.