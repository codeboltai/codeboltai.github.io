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
    signatureTypeName: Promise<ClickResponse>
    description: A promise that resolves when the click action is complete.
    typeArgs: []
data:
  name: click
  category: browser
  link: click.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js
// Navigate to a page with interactive elements
await codebolt.browser.goToPage("https://example.com");
await new Promise(resolve => setTimeout(resolve, 2000));

// Click on a button with the ID "submit-btn"
const clickResult = await codebolt.browser.click("submit-btn");
console.log('✅ Clicked:', clickResult);

// Click on a link with a specific ID
await codebolt.browser.click("nav-link");

// Click on a checkbox or radio button
await codebolt.browser.click("checkbox-id");
```

### Important Note

The `click()` function requires the target element to have a specific ID and be present on the page. Interactive tests like `click()` require specific element IDs which may not be available on all pages (like example.com). Ensure that the target element exists and is clickable before calling this function.

### Explanation 

The `codebolt.browser.click(elementid)` function simulates a mouse click on a specified element on the current web page. The function takes an element ID as a parameter and returns a promise that resolves when the click action is complete. This function is essential for automating user interactions such as clicking buttons, links, checkboxes, radio buttons, or any other clickable elements on the page. It's commonly used in web automation workflows, form submissions, and UI testing scenarios.

