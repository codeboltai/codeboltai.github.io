---
name: screenshot
cbbaseinfo:
  description: Takes a screenshot of the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: screenshot
  category: browser
  link: screenshot.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples: 

```js 

// Navigate to the page you want to capture
await codebolt.browser.goToPage("https://example.com");

// Take a screenshot of the current page
codebolt.browser.screenshot();

```

### Explanation:

The codebolt.browser.screenshot() function is used to capture a screenshot of the current page displayed in the browser. This function is helpful for various purposes such as visual verification, debugging, or generating documentation.

### Explaination of the code: 

Navigation: The script navigates to the desired web page using codebolt.browser.goToPage("https://example.com").

Screenshot Capture: Once the page has loaded, the script calls codebolt.browser.screenshot() to capture a screenshot of the current page. This function takes a snapshot of the entire visible area of the web page, including all visible elements and content.