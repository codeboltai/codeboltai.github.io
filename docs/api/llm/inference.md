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