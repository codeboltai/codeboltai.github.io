---
name: openDebugBrowser
cbbaseinfo:
  description: Requests to open a debug browser at the specified URL and port.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL where the debug browser should be opened.
    - name: port
      typeName: number
      description: The port on which the debug browser will listen.
  returns:
    signatureTypeName: Promise
    description: >-
      A promise that resolves with the response from the open debug browser
      event.
    typeArgs:
      - type: reference
        name: OpenDebugBrowserResponse
data:
  name: openDebugBrowser
  category: debug
  link: openDebugBrowser.md
---
<CBBaseInfo/> 
 <CBParameters/>