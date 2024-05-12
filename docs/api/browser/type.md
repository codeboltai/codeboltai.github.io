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
    signatureTypeName: Promise
    description: A promise that resolves when the typing action is complete.
---
<CBBaseInfo/> 
 <CBParameters/>