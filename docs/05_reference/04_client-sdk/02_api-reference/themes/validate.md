---
name: validate
cbbaseinfo:
  description: "Validates theme data for correctness and completeness.

Checks the current theme configuration for errors, inconsistencies,
or missing required fields. Returns detailed validation results
highlighting any issues found."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ThemeValidationResult>"
    description: A promise that resolves to a ThemeValidationResult with validation status
data:
  name: validate
  category: themes
  link: validate.md
---
# validate

```typescript
client.themes.validate(): Promise<ThemeValidationResult>
```

Validates theme data for correctness and completeness.

Checks the current theme configuration for errors, inconsistencies,
or missing required fields. Returns detailed validation results
highlighting any issues found.

## Parameters

_None_

## Returns

**`Promise<ThemeValidationResult>`** — A promise that resolves to a ThemeValidationResult with validation status

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.validate();
```
