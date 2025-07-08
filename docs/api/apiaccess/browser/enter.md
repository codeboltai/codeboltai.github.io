---
name: enter
cbbaseinfo:
  description: Simulates the Enter key press on the current page.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<EnterResponse>
    description: A promise that resolves when the Enter action is complete.
    typeArgs: []
data:
  name: enter
  category: browser
  link: enter.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `BrowserActionResponseData` object with the following properties:

- **`type`** (string): Always "EnterResponse".
- **`payload`** (object, optional): Contains the response data including:
  - **`action`** (string, optional): The action that was performed
  - **`success`** (boolean, optional): Indicates if the Enter key press was successful
  - **`content`** (string, optional): Additional content information
  - **`viewport`** (object, optional): Current viewport information
- **`eventId`** (string, optional): Event identifier for the Enter action
- **`success`** (boolean, optional): Indicates if the operation was successful
- **`message`** (string, optional): A message with additional information
- **`error`** (string, optional): Error details if the operation failed
- **`messageId`** (string, optional): A unique identifier for the message
- **`threadId`** (string, optional): The thread identifier

### Example

```js
// Navigate to a page with a form
await codebolt.browser.goToPage("https://example.com/login");
await new Promise(resolve => setTimeout(resolve, 2000));

// Fill in form fields
await codebolt.browser.type("username", "testuser");
await codebolt.browser.type("password", "testpass");

// Simulate pressing the Enter key to submit the form
const enterResult = await codebolt.browser.enter();
console.log('✅ Enter key pressed:', enterResult);

// Check if the Enter key press was successful
if (enterResult.success) {
  console.log('Enter key pressed successfully');
} else {
  console.error('Enter key press failed:', enterResult.error);
}

// Alternative usage: after typing in a search box
await codebolt.browser.type("search-input", "search query");
await codebolt.browser.enter(); // Submit the search
```

### Notes

- The Enter key press is applied to the currently focused element on the page
- This is commonly used to submit forms or trigger search functionality
- Ensure the appropriate element has focus before calling this method
