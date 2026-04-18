---
name: createEnvironment
cbbaseinfo:
  description: "Creates a new development environment.

Provisions a new environment using the specified provider and configuration.
The environment can then be started, stopped, and managed through other methods."
cbparameters:
  parameters:
    - name: data
      typeName: CreateEnvironmentRequest
      description: Environment creation parameters including name, provider, and settings
      isOptional: false
  returns:
    signatureTypeName: "Promise<Environment>"
    description: A promise that resolves to the newly created
data:
  name: createEnvironment
  category: environments
  link: createEnvironment.md
---
# createEnvironment

```typescript
client.environments.createEnvironment(data: CreateEnvironmentRequest): Promise<Environment>
```

Creates a new development environment.

Provisions a new environment using the specified provider and configuration.
The environment can then be started, stopped, and managed through other methods.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateEnvironmentRequest` | Environment creation parameters including name, provider, and settings |

## Returns

**`Promise<Environment>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.createEnvironment(/* CreateEnvironmentRequest */);
```
