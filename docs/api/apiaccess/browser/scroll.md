---
name: scroll
cbbaseinfo:
  description: >-
    Scrolls the current page in a specified direction by a specified number of
    pixels.
cbparameters:
  parameters:
    - name: direction
      typeName: string
      description: The direction to scroll (e.g., 'down', 'up', 'left', 'right').
    - name: pixels
      typeName: string
      description: The number of pixels to scroll.
  returns:
    signatureTypeName: Promise<ScrollResponse>
    description: A promise that resolves when the scroll action is complete.
    typeArgs: []
data:
  name: scroll
  category: browser
  link: scroll.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `BrowserActionResponseData` object with the following properties:

- **`type`** (string): Always "scrollResponse".
- **`payload`** (object, optional): Contains the response data including:
  - **`action`** (string, optional): The action that was performed
  - **`success`** (boolean, optional): Indicates if the scroll was successful
  - **`content`** (string, optional): Additional content information
  - **`viewport`** (object, optional): Updated viewport information after scrolling
- **`eventId`** (string, optional): Event identifier for the scroll action
- **`success`** (boolean, optional): Indicates if the operation was successful
- **`message`** (string, optional): A message with additional information
- **`error`** (string, optional): Error details if the operation failed
- **`messageId`** (string, optional): A unique identifier for the message
- **`threadId`** (string, optional): The thread identifier

### Example

```js
// Navigate to a page with scrollable content
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Scroll down the page by 100 pixels
const scrollResult = await codebolt.browser.scroll("down", "100");
console.log('✅ Scrolled:', scrollResult);

// Check if the scroll was successful
if (scrollResult.success) {
  console.log('Page scrolled successfully');
} else {
  console.error('Scroll failed:', scrollResult.error);
}

// You can also scroll in other directions
await codebolt.browser.scroll("up", "50");
await codebolt.browser.scroll("left", "100");
await codebolt.browser.scroll("right", "100");
```

### Notes

- The `direction` parameter accepts values: "up", "down", "left", "right"
- The `pixels` parameter should be a string representing the number of pixels to scroll
- The viewport information in the response reflects the new scroll position

