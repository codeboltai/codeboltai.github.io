---
name: getMatcherList
cbbaseinfo:
  description: Retrieves the complete list of available problem matchers for various programming languages and tools.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetMatcherListTreeResponse>
    description: A promise that resolves with the list of all available matchers with their patterns and configurations.
    typeArgs:
      - type: reference
        name: GetMatcherListTreeResponse
data:
  name: getMatcherList
  category: codeutils
  link: getMatcherList.md
---
<CBBaseInfo/> 
<CBParameters/>

## Description

The `getMatcherList` function returns a comprehensive list of all available problem matchers. These matchers are used to parse and identify issues from various development tools, linters, compilers, and formatters across different programming languages.

## Usage

```javascript
const matcherListResult = await codebolt.codeutils.getMatcherList();
```

## Example

```javascript
const matcherListResult = await codebolt.codeutils.getMatcherList();
console.log(matcherListResult);
```

## Response Format

```javascript
{
  payload: [
    {
      owner: 'string',      // Name/identifier of the matcher
      pattern: {            // Pattern configuration object
        // Matcher-specific pattern definitions
      }
    }
  ],
  type: 'getMatcherListTreeResponse'
}
```

