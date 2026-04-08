---
name: forceReserveFiles
cbbaseinfo:
  description: Forcefully reserves files, overriding existing reservations.
cbparameters:
  parameters:
    - name: params
      typeName: IForceReserveFilesParams
      description: Parameters including agentId, files array, and reason.
  returns:
    signatureTypeName: "Promise<IForceReserveFilesResponse>"
    description: A promise that resolves with the forced reservation details.
data:
  name: forceReserveFiles
  category: mail
  link: forceReserveFiles.md
---
# forceReserveFiles

```typescript
codebolt.mail.forceReserveFiles(params: IForceReserveFilesParams): Promise<IForceReserveFilesResponse>
```

Forcefully reserves files, overriding existing reservations.
### Parameters

- **`params`** (IForceReserveFilesParams): Parameters including agentId, files array, and reason.

### Returns

- **`Promise<IForceReserveFilesResponse>`**: A promise that resolves with the forced reservation details.

### Examples

#### Example 1: Force Reserve Files

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.forceReserveFiles({
  agentId: 'agent-002',
  files: ['src/auth/login.ts'],
  reason: 'Critical bug fix required immediately'
});

if (result.success) {
  console.log('Files force-reserved');
  console.log('Previous reservation overridden');
}
```

### Common Use Cases

- **Emergency Fixes**: Override reservations for urgent work
- **Stale Reservations**: Clear abandoned file locks
- **Priority Tasks**: Take over files for high-priority work

### Notes

- Use sparingly and only when necessary
- Notifies previous reservation holder
- Should include clear reason for override