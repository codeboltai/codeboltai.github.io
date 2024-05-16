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