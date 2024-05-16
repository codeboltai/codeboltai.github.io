---
name: pdf_to_text
cbbaseinfo:
  description: Converts a PDF document to text.
cbparameters:
  parameters:
    - name: pdf_path
      typeName: any
      description: The file path to the PDF document to be converted.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the converted text.
    typeArgs:
      - type: intrinsic
        name: string
data:
  name: pdf_to_text
  category: docutils
  link: pdf_to_text.md
---
<CBBaseInfo/> 
 <CBParameters/>