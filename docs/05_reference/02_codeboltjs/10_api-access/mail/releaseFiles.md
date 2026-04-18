---
name: releaseFiles
cbbaseinfo:
  description: Releases file reservations after collaborative work is complete.
cbparameters:
  parameters:
    - name: params
      typeName: IReleaseFilesParams
      description: Parameters including agentId and files array to release.
  returns:
    signatureTypeName: "Promise<IReleaseFilesResponse>"
    description: A promise that resolves when files are released.
data:
  name: releaseFiles
  category: mail
  link: releaseFiles.md
---
# releaseFiles

```typescript
codebolt.mail.releaseFiles(params: IReleaseFilesParams): Promise<IReleaseFilesResponse>
```

Releases file reservations after collaborative work is complete.
### Parameters

- **`params`** (IReleaseFilesParams): Parameters including agentId and files array to release.

### Returns

- **`Promise<IReleaseFilesResponse>`**: A promise that resolves when files are released.

### Examples

#### Example 1: Release Files

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.releaseFiles({
  agentId: 'agent-001',
  files: ['src/auth/login.ts', 'src/auth/session.ts']
});

if (result.success) {
  console.log('Files released successfully');
  console.log('Other agents can now edit these files');
}
```

### Common Use Cases

- **Task Completion**: Release files after finishing work
- **Handoff**: Transfer file access to other agents
- **Cleanup**: Remove reservations when no longer needed

### Notes

- Must be called by the agent that reserved the files
- Frees files for other agents to reserve
- Important for workflow continuation
