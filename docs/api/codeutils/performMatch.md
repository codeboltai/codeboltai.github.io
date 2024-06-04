---
name: performMatch
cbbaseinfo:
  description: >-
    Performs a matching operation based on the provided matcher definition and
    problem patterns.
cbparameters:
  parameters:
    - name: matcherDefinition
      typeName: object
      description: The definition of the matcher.
    - name: problemPatterns
      description: The patterns to match against.
    - name: problems
      description: The list of problems.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the matching problem response.
    typeArgs:
      - type: reference
        name: MatchProblemResponse
data:
  name: performMatch
  category: codeutils
  link: performMatch.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 
Working Progress..