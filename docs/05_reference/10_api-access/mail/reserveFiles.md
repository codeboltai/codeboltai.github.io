---
name: reserveFiles
cbbaseinfo:
  description: Reserves files for exclusive access during collaborative work.
cbparameters:
  parameters:
    - name: params
      typeName: IReserveFilesParams
      description: Parameters including agentId, files array, and threadId.
  returns:
    signatureTypeName: "Promise<IReserveFilesResponse>"
    description: A promise that resolves with the reservation details.
data:
  name: reserveFiles
  category: mail
  link: reserveFiles.md
---
# reserveFiles

```typescript
codebolt.mail.reserveFiles(params: IReserveFilesParams): Promise<IReserveFilesResponse>
```

Reserves files for exclusive access during collaborative work.
### Parameters

- **`params`** (IReserveFilesParams): Parameters including agentId, files array, and threadId.

### Returns

- **`Promise<IReserveFilesResponse>`**: A promise that resolves with the reservation details.

### Examples

#### Example 1: Reserve Files

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.reserveFiles({
  agentId: 'agent-001',
  files: ['src/auth/login.ts', 'src/auth/session.ts'],
  threadId: 'thread-123'
});

if (result.success) {
  console.log('Files reserved successfully');
  console.log('Reservation expires at:', result.expiresAt);
}
```

### Common Use Cases

- **Collaboration Editing**: Prevent conflicts when editing files
- **Task Assignment**: Reserve files for specific agents
- **Conflict Prevention**: Coordinate file access

### Notes

- Prevents other agents from modifying reserved files
- Reservations have expiration time
- Essential for multi-agent collaboration