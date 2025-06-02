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

### Status 

Comming soon...


### Example 

```js 

// Navigate to the page you want to capture
await codebolt.browser.goToPage("https://example.com");

// Take a screenshot of the current page
codebolt.browser.screenshot();

```

### Explanation:

The codebolt.browser.screenshot() function is used to capture a screenshot of the current page displayed in the browser. This function is helpful for various purposes such as visual verification, debugging, or generating documentation.
