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
// Navigate to the news website
await codebolt.browser.goToPage("https://example-news.com");

// Extract all text from the current page
const pageText = await codebolt.browser.extractText();

// Log the extracted text to the console (or process it as needed)
console.log(pageText);
```

### Explanation 

The `codebolt.browser.extractText()` function extracts all readable text content from the current webpage. This is useful for data analysis, content scraping, or generating summaries of webpage content. The function removes HTML markup and returns only the human-readable text that would be visible to a user browsing the page.

