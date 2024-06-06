---
name: extractText
cbbaseinfo:
  description: Extracts text from the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
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

### Explaination: 

If we want to extract all the text on the webpage, we can use the codebolt.browser.extractText() function. This function returns the text, which we can store in a variable and use.

