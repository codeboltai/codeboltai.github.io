---
name: init
cbbaseinfo:
  description: Initializes a new Git repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path where the Git repository should be initialized.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the init event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: init
  category: git
  link: init.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Status 

Work Progress...


### Example

```js

await codebolt.git.init('/path/to/repo')

```

### Explaination

Initialize a new Git repository in the specified directory. It has one parameter.

path: A string specifying the directory path where the new Git repository should be initialized.