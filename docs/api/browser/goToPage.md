---
name: goToPage
cbbaseinfo:
  description: Navigates to a specified URL.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL to navigate to.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when navigation is complete.
    typeArgs:
      - type: reference
        name: GoToPageResponse
---
<CBBaseInfo/> 
 <CBParameters/>