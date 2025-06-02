---
name: commit
cbbaseinfo:
  description: >-
    Commits the staged changes in the local repository with the given commit
    message.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The commit message to use for the commit.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the commit event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: commit
  category: git
  link: commit.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

```js

const commitMessage = await codebolt.git.commit('test');

```



### Explaination 

To use the codebolt.git.commit method properly, you need to understand how to make a commit in a Git repository using this method. The codebolt.git.commit function is likely used to commit changes in a Git repository with a specified commit message.