---
name: search
cbbaseinfo:
  description: Performs a search on the current page using a specified query.
cbparameters:
  parameters:
    - name: elementid
      typeName: string
      description: The ID of the element to perform the search in.
    - name: query
      typeName: string
      description: The search query.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the search results.
---
<CBBaseInfo/> 
 <CBParameters/>