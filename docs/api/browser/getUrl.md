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

The codebolt.browser.getUrl() function is used to retrieve the URL of the current active page in the browser. This function is useful in web automation, testing, and navigation scenarios where you need to confirm or log the URL of the page that the browser is currently displaying.


### Explanation of the Code
Navigation to Home Page: The script begins by navigating to the home page of the website using codebolt.browser.goToPage("https://example-website.com").

Retrieving the Current URL: After the page has loaded, the script uses codebolt.browser.getUrl() to retrieve the current URL of the browser's active page. The retrieved URL is stored in the variable currentUrl.

