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

### Response Structure

The method returns a Promise that resolves to an `ExtractTextResponse` object with the following properties:

- **`type`** (string): Always "extractTextResponse".
- **`text`** (string, optional): The extracted text content from the current page
- **`content`** (string, optional): Alternative property for the extracted text
- **`success`** (boolean, optional): Indicates if the operation was successful
- **`message`** (string, optional): A message with additional information
- **`error`** (string, optional): Error details if the operation failed
- **`messageId`** (string, optional): A unique identifier for the message
- **`threadId`** (string, optional): The thread identifier

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
} else {
    console.error('Failed to extract text:', textResult.error);
}
```

### Explanation 

The `codebolt.browser.extractText()` function extracts all readable text content from the current webpage. This function returns a promise that resolves with an object containing a `success` boolean and the extracted `text`. The function removes HTML markup and returns only the human-readable text that would be visible to a user browsing the page. This is particularly useful for content analysis, text mining, data extraction, generating summaries of webpage content, or when you need clean text without HTML formatting for further processing or analysis.

