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

### Response Structure

This method returns `void` and does not provide a response. The PDF generation is initiated immediately when the method is called.

### Example

```js
// Navigate to a page
await codebolt.browser.goToPage("https://example-ecommerce.com/product/12345");

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Generate PDF of the current page
codebolt.browser.getPDF();
console.log('✅ PDF generation initiated');
```

### Notes

- This method does not return a Promise and executes immediately
- The PDF generation is initiated without waiting for confirmation
- The generated PDF is typically saved to the default download location
- This is useful for saving web pages as PDFs for offline reading, documentation, or record-keeping
- Ensure the page is fully loaded before calling this method for best results