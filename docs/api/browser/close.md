---
name: close
cbbaseinfo:
  description: Closes the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: close
  category: browser
  link: close.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples
 ```js
 // Open the browser and navigate to a specific URL
 codebolt.browser.goToPage(url);

// Perform tests on the web page
// (Assume you have performed all necessary tests)

// Close the current page
 codebolt.browser.close();

 ```
### Explaination

The script first opens a browser window/tab and navigates to the specified URL using codebolt.browser.goToPage(url). In this example, it navigates to "https://example.com".

After completing the task on the current page, the codebolt.browser.close() function is used to close the current page.

 