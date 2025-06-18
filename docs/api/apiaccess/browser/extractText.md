---
name: extractText
cbbaseinfo:
  description: Extracts text from the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<ExtractTextResponse>
    description: 'A promise that resolves with the extracted text from the page.'
    typeArgs: []
data:
  name: extractText
  category: browser
  link: extractText.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example 

```js
// Navigate to the page
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Extract all text from the current page
const textResult = await codebolt.browser.extractText();
console.log('✅ Text extracted:', {
    success: textResult.success,
    textLength: textResult.text ? textResult.text.length : 0
});

// Access the extracted text
if (textResult.success && textResult.text) {
    console.log('Extracted text:', textResult.text);
    // Process the text as needed for analysis or storage
}
```

### Explanation 

The `codebolt.browser.extractText()` function extracts all readable text content from the current webpage. This function returns a promise that resolves with an object containing a `success` boolean and the extracted `text`. The function removes HTML markup and returns only the human-readable text that would be visible to a user browsing the page. This is particularly useful for content analysis, text mining, data extraction, generating summaries of webpage content, or when you need clean text without HTML formatting for further processing or analysis.

