---
name: type
cbbaseinfo:
  description: Types text into a specified element on the page.
cbparameters:
  parameters:
    - name: elementid
      typeName: string
      description: The ID of the element to type into.
    - name: text
      typeName: string
      description: The text to type.
  returns:
    signatureTypeName: Promise<TypeResponse>
    description: A promise that resolves when the typing action is complete.
    typeArgs: []
data:
  name: type
  category: browser
  link: type.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `BrowserActionResponseData` object with the following properties:

- **`type`** (string): Always "typeResponse".
- **`payload`** (object, optional): Contains the response data including:
  - **`action`** (string, optional): The action that was performed
  - **`success`** (boolean, optional): Indicates if the typing was successful
  - **`content`** (string, optional): Additional content information
  - **`viewport`** (object, optional): Current viewport information
- **`eventId`** (string, optional): Event identifier for the type action
- **`success`** (boolean, optional): Indicates if the operation was successful
- **`message`** (string, optional): A message with additional information
- **`error`** (string, optional): Error details if the operation failed
- **`messageId`** (string, optional): A unique identifier for the message
- **`threadId`** (string, optional): The thread identifier

### Example

```js
// Navigate to a page with input forms
await codebolt.browser.goToPage("https://example.com/form");
await new Promise(resolve => setTimeout(resolve, 2000));

// Type text into various input fields
const typeResult = await codebolt.browser.type("username", "testuser");
console.log('✅ Typed username:', typeResult);

// Check if the typing was successful
if (typeResult.success) {
  console.log('Text entered successfully');
} else {
  console.error('Typing failed:', typeResult.error);
}

// Type email into email field
await codebolt.browser.type("email", "user@example.com");

// Type password into password field
await codebolt.browser.type("password", "securepassword123");

// Type into a textarea
await codebolt.browser.type("message", "This is a test message");
```

### Important Note

The `type()` function requires the target input element to have a specific ID and be present on the page. Interactive tests like `type()` require specific element IDs which may not be available on all pages. Ensure that the target input element exists and is editable before calling this function.

### Explanation

The `codebolt.browser.type(elementid, text)` function simulates typing text into a specified input element on the current web page. The function takes two parameters: an element ID (string) and the text to type (string). It returns a promise that resolves when the typing action is complete. This function is essential for automating form filling, data entry, search queries, and any scenario where text input is required. It works with various input types including text fields, email fields, password fields, and textareas.