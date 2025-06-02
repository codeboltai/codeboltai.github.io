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
    typeArgs:
      - type: intrinsic
        name: unknown
data:
  name: type
  category: browser
  link: type.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Example

```js
// Type "John Doe" into the input field with the ID "name"
await codebolt.browser.type("name", "John Doe");

// Type "john.doe@example.com" into the email field with the ID "email"
await codebolt.browser.type("email", "john.doe@example.com");

// Type "password123" into the password field with the ID "password"
await codebolt.browser.type("password", "password123");

```

### Explanation

The codebolt.browser.type(elementid: string, text: string) function is used to put  text into a specified element on the current web page. the type() have two parameter one is elementid and second is value. we can put the value automatic using this type() function.