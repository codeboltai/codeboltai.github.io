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




### Examples: 

```js
// Type "John Doe" into the input field with the ID "name"
await codebolt.browser.type("name", "John Doe");

// Type "john.doe@example.com" into the email field with the ID "email"
await codebolt.browser.type("email", "john.doe@example.com");

// Type "password123" into the password field with the ID "password"
await codebolt.browser.type("password", "password123");

```

### Explanation


The codebolt.browser.type(elementid: string, text: string) function is used to simulate typing text into a specified element on the current web page. This function is essential for automating form submissions, text input fields, or any interaction that involves entering textual data.


### Explanation of the code
  

Typing into Input Fields: The script uses codebolt.browser.type(elementid, text) to simulate typing text into specific input fields on the web page. Each call to codebolt.browser.type() specifies the ID of the target element (e.g., input field) and the text to be entered.

Form Filling: In this example, the script fills out a registration form by typing text into input fields for name, email, and password. This simulates user input and allows the automation script to interact with the web page as if a user were manually entering the information.