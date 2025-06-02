---
name: newPage
cbbaseinfo:
  description: Opens a new page in the browser.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: newPage
  category: browser
  link: newPage.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js
// Open a new page in the browser
await codebolt.browser.newPage();

```

### Explanation
The codebolt.browser.newPage() function is used to open a new tab or window in the browser. This function is useful in web automation, testing, and multi-page navigation scenarios where you need to interact with multiple pages simultaneously.