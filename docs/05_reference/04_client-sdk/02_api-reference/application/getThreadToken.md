---
name: getThreadToken
cbbaseinfo:
  description: "Retrieves the current thread token.

Returns the authentication token associated with the current thread,
used for securing inter-process communication."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ThreadToken>"
    description: A promise that resolves to the ThreadToken object
data:
  name: getThreadToken
  category: application
  link: getThreadToken.md
---
# getThreadToken

```typescript
client.application.getThreadToken(): Promise<ThreadToken>
```

Retrieves the current thread token.

Returns the authentication token associated with the current thread,
used for securing inter-process communication.

## Parameters

_None_

## Returns

**`Promise<ThreadToken>`** — A promise that resolves to the ThreadToken object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.getThreadToken();
```
