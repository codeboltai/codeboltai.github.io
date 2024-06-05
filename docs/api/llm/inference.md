---
name: inference
cbbaseinfo:
  description: |-
    Sends an inference request to the LLM and returns the model's response.
    The model is selected based on the provided 
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The input message or prompt to be sent to the LLM.
    - name: llmrole
      typeName: string
      description: The role of the LLM to determine which model to use.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the LLM's response.
    typeArgs:
      - type: reference
        name: LLMResponse
data:
  name: inference
  category: llm
  link: inference.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

```js 

const question = "Write an API to get all users from the User Table.";
const llmRole = "assistant";

const response = codebolt.llm.inference(question, llmRole);
console.log(response);


```


### Explaination

The codebolt.llm.inference function allows you to send an inference request to a Large Language Model (LLM) and retrieves the model's response. It has two parameter: 

question (string): This parameter represents the input question or prompt you want to send to the LLM for inference.

llmRole (string): This parameter specifies the role or type of Large Language Model (LLM) you want to use for inference. The role determines which variant of the LLM is selected for processing the input question and generating the response.