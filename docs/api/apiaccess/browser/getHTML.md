---
name: getHTML
cbbaseinfo:
  description: Retrieves the HTML content of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<HtmlReceived>
    description: A promise that resolves with the HTML content.
    typeArgs: []
data:
  name: getHTML
  category: browser
  link: getHTML.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
// Navigate to the page
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Retrieve the HTML content of the current page
const htmlResult = await codebolt.browser.getHTML();
console.log('✅ HTML retrieved:', {
    success: htmlResult.success,
    htmlLength: htmlResult.html ? htmlResult.html.length : 0
});

// Access the actual HTML content
if (htmlResult.success && htmlResult.html) {
    console.log('HTML content:', htmlResult.html);
    // Process the HTML as needed
}
```
