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
    signatureTypeName: Promise
    description: A promise that resolves when navigation is complete.
    typeArgs:
      - type: reference
        name: GoToPageResponse
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
await codebolt.browser.goToPage('https://docs.codebolt.ai/docs/api/browser/goToPage/')


```

### Explanation

[browser](../../concepts/browser)  The codebolt.browser.goToPage(url) function is used to navigate the browser to a new web page specified by the URL provided. When this function is called, the browser leaves the current page and loads the new page indicated by the URL.




