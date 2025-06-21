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

### Example

```js
// Navigate to a page with scrollable content
await codebolt.browser.goToPage("https://example.com");

// Wait for page to load
await new Promise(resolve => setTimeout(resolve, 2000));

// Scroll down the page by 100 pixels
const scrollResult = await codebolt.browser.scroll("down", "100");
console.log('✅ Scrolled:', scrollResult);

// You can also scroll in other directions
await codebolt.browser.scroll("up", "50");
await codebolt.browser.scroll("left", "100");
await codebolt.browser.scroll("right", "100");
```

