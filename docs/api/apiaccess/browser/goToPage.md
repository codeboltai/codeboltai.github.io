---
name: goToPage
cbbaseinfo:
  description: Navigates to a specified URL.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL to navigate to.
  returns:
    signatureTypeName: Promise<GoToPageResponse>
    description: A promise that resolves when navigation is complete.
    typeArgs: []
data:
  name: goToPage
  category: browser
  link: goToPage.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
//Navigate to a webpage using Codebolt's browser API
await codebolt.browser.goToPage('https://docs.codebolt.ai/docs/api/apiaccess/browser/goToPage/')
```

### Explanation

The `codebolt.browser.goToPage(url)` function navigates the browser to a new web page specified by the URL parameter. When this function is called, the browser leaves the current page and loads the new page indicated by the URL. This is typically one of the first commands used in browser automation workflows.




