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

### Response Structure

This method returns `void` and does not provide a response. The PDF to text conversion is initiated immediately when the method is called.

### Example

```js
// Navigate to the page containing the PDF document
await codebolt.browser.goToPage("https://example.com/report.pdf");

// Wait for PDF to load
await new Promise(resolve => setTimeout(resolve, 3000));

// Convert the PDF content to text
codebolt.browser.pdfToText();
console.log('✅ PDF to text conversion initiated');
```

### Notes

- This method does not return a Promise and executes immediately
- The PDF to text conversion is initiated without waiting for confirmation
- This function is particularly useful when dealing with PDF documents in web automation or data extraction scenarios
- Ensure the PDF is fully loaded before calling this method for best results
- The converted text is typically processed by the underlying system for further use 