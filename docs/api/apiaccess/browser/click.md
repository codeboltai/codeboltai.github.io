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

