---
name: checkEnvironment
cbbaseinfo:
  description: "Checks the availability and configuration of an environment variable or dependency.

Validates that required environment variables, tools, or runtime dependencies are
properly configured for the project."
cbparameters:
  parameters:
    - name: data
      typeName: CheckEnvironmentRequest
      description: The environment check request
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the check result
data:
  name: checkEnvironment
  category: projects
  link: checkEnvironment.md
---
# checkEnvironment

```typescript
client.projects.checkEnvironment(data: CheckEnvironmentRequest): Promise<unknown>
```

Checks the availability and configuration of an environment variable or dependency.

Validates that required environment variables, tools, or runtime dependencies are
properly configured for the project.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckEnvironmentRequest` | The environment check request |

## Returns

**`Promise<unknown>`** — A promise that resolves to the check result

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.checkEnvironment(/* CheckEnvironmentRequest */);
```
