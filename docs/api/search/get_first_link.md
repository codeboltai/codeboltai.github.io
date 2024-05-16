---
name: get_first_link
cbbaseinfo:
  description: Retrieves the first link from the search results for the given query.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The search query.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the first link of the search results.
    typeArgs:
      - type: intrinsic
        name: string
---
<CBBaseInfo/> 
 <CBParameters/>