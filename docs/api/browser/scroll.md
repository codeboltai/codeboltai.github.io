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
      description: The direction to scroll.
    - name: pixels
      typeName: string
      description: The number of pixels to scroll.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when the scroll action is complete.
    typeArgs:
      - type: intrinsic
        name: unknown
data:
  name: scroll
  category: browser
  link: scroll.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Examples: 

```js

// Scroll down the page by 500 pixels
await codebolt.browser.scroll("down", "500");

// Scroll up the page by 200 pixels
await codebolt.browser.scroll("up", "200");

```

### Explanation:

The codebolt.browser.scroll(direction: string, pixels: string) function is used to scroll the current page in a specified direction by a specified number of pixels. This function is useful for automating scrolling actions on a web page, such as navigating through lengthy content or bringing specific elements into view.

### Explanation of the code:
 
Scrolling Down: The script calls codebolt.browser.scroll("down", "500") to scroll down the page by 500 pixels. This action brings more content into view, loading additional elements if the page supports dynamic loading or infinite scrolling.

Scrolling Up: Next, the script calls codebolt.browser.scroll("up", "200") to scroll up the page by 200 pixels. This action moves the viewport upward, potentially revealing content that was previously out of view.