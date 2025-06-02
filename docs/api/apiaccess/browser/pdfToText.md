---
name: pdfToText
cbbaseinfo:
  description: Converts the PDF content of the current page to text.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: pdfToText
  category: browser
  link: pdfToText.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Status 

Comming soon...

### Example

```js

// Navigate to the page containing the PDF document
await codebolt.browser.goToPage("https://example.com/report.pdf");

// Convert the PDF content to text
codebolt.browser.pdfToText();

```

### Explanation
The codebolt.browser.pdfToText() function is used to convert the PDF content of the current page into text format. This function is particularly useful when dealing with PDF documents in web automation or data extraction scenarios where you need to extract textual information from PDF files. 