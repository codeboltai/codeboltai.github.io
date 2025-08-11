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

### Response Structure

The method returns a Promise that resolves to a `BrowserActionResponseData` object with the following properties:

- **`type`** (string): Always "clickResponse".
- **`payload`** (object, optional): Contains the response data including:
  - **`action`** (string, optional): The action that was performed
  - **`success`** (boolean, optional): Indicates if the click was successful
  - **`content`** (string, optional): Additional content information
  - **`viewport`** (object, optional): Current viewport information
- **`eventId`** (string, optional): Event identifier for the click action
- **`success`** (boolean, optional): Indicates if the operation was successful
- **`message`** (string, optional): A message with additional information
- **`error`** (string, optional): Error details if the operation failed
- **`messageId`** (string, optional): A unique identifier for the message
- **`threadId`** (string, optional): The thread identifier

### Example

```js
// Navigate to a page with interactive elements
await codebolt.browser.goToPage("https://example.com");
await new Promise(resolve => setTimeout(resolve, 2000));

// Click on a button with the ID "submit-btn"
const clickResult = await codebolt.browser.click("submit-btn");
console.log('✅ Clicked:', clickResult);

// Check if the click was successful
if (clickResult.success) {
  console.log('Click action completed successfully');
} else {
  console.error('Click failed:', clickResult.error);
}

// Click on a link with a specific ID
await codebolt.browser.click("nav-link");

// Click on a checkbox or radio button
await codebolt.browser.click("checkbox-id");
```

### Notes

- The `elementid` parameter must correspond to an existing element ID on the current page
- The element must be visible and clickable for the operation to succeed
- The response provides confirmation of the click action and any relevant page state changes

