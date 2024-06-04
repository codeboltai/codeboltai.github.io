---
name: getUrl
cbbaseinfo:
  description: Retrieves the current URL of the browser's active page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the URL.
    typeArgs:
      - type: reference
        name: UrlResponse
data:
  name: getUrl
  category: browser
  link: getUrl.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Examples: 

```js

// Navigate to the home page
await codebolt.browser.goToPage("https://example-website.com");

// Retrieve and log the current URL
let currentUrl = await codebolt.browser.getUrl();
console.log(`Current URL: ${currentUrl}`);

```

### Explanation

The codebolt.browser.getUrl() function is used to retrieve the URL of the current web page in the browser. This function returns the url, which we can store in a variable and use.