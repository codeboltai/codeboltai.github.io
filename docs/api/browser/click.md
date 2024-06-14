---
name: click
cbbaseinfo:
  description: Clicks on a specified element on the page.
cbparameters:
  parameters:
    - name: elementid
      typeName: string
      description: The ID of the element to click.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when the click action is complete.
    typeArgs:
      - type: intrinsic
        name: unknown
data:
  name: click
  category: browser
  link: click.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js
// Using Codebolt's browser API, you can interact with elements on a web page.
// For example, let's say there's a button with the ID "test" on the page.
// You can use Codebolt's browser API to click on this button.


// First, let's imagine there's a button with the ID "test" on the web page.
// <button id="test">Click me</button>

// Now, you want to use Codebolt's browser API to click on this button.

// The syntax for clicking an element with a specific ID using Codebolt's browser API is:
// await codebolt.browser.click("elementSelector")

// In this case, the element selector is "#test" because we are targeting an element with the ID "test".

// Putting it all together:
codebolt.browser.click("#test");

```

### Explaination 

[Browser](../../agents/modules/browser)  Click function is used to click on the browser by selecting specific elementId.

A browser is a used to access and display web pages. When a browser is open, users can interact with various elements on web pages, such as buttons, links, forms, and images.

