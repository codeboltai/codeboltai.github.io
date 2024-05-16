---
name: type
cbbaseinfo:
  description: Types the provided text into an element with the specified ID.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The ID of the element where text will be typed.
    - name: text
      typeName: string
      description: The text to type into the element.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when the type action is complete.
    typeArgs:
      - type: intrinsic
        name: unknown
---
<CBBaseInfo/> 
 <CBParameters/>