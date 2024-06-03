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

### Examples: 

```js
// Navigate to the news website
await codebolt.browser.goToPage("https://example-news.com");

// Extract all text from the current page
const pageText = await codebolt.browser.extractText();

// Log the extracted text to the console (or process it as needed)
console.log(pageText);

```

### Explaination: 

Navigation: The script starts by navigating to the news website's homepage using codebolt.browser.goToPage("https://example-news.com").

Text Extraction: Once the page has loaded, the script uses codebolt.browser.extractText() to extract all the text content from the current page. This function captures all textual information present on the web page, including headings, paragraphs, and any other text elements.

Processing the Extracted Text: The extracted text is stored in the variable pageText. In this example, the script simply logs the extracted text to the console using console.log(pageText). In a real-world scenario, you might further process this text to analyze news headlines, summarize content, or extract specific information.
