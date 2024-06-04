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


```

### Explanation:

The codebolt.browser.scroll(direction: string, pixels: string) function is used to scroll the current page in a specified direction by a specified number of pixels. This function is useful for automating scrolling actions on a web page, such as navigating through lengthy content or bringing specific elements into view.
