---
name: checkConflicts
cbbaseinfo:
  description: Checks for potential conflicts in file reservations before reserving.
cbparameters:
  parameters:
    - name: params
      typeName: ICheckConflictsParams
      description: Parameters including files to check for conflicts.
  returns:
    signatureTypeName: "Promise<ICheckConflictsResponse>"
    description: A promise that resolves with conflict information.
data:
  name: checkConflicts
  category: mail
  link: checkConflicts.md
---
# checkConflicts

```typescript
codebolt.mail.checkConflicts(params: ICheckConflictsParams): Promise<ICheckConflictsResponse>
```

Checks for potential conflicts in file reservations before reserving.
### Parameters

- **`params`** (ICheckConflictsParams): Parameters including files to check for conflicts.

### Returns

- **`Promise<ICheckConflictsResponse>`**: A promise that resolves with conflict information.

### Examples

#### Example 1: Check for Conflicts

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.checkConflicts({
  files: ['src/auth/login.ts', 'src/auth/session.ts']
});

if (result.hasConflicts) {
  console.log('Conflicts detected:');
  result.conflicts.forEach(conflict => {
    console.log(`- ${conflict.file} is reserved by ${conflict.agentId}`);
    console.log(`  Expires: ${new Date(conflict.expiresAt).toLocaleString()}`);
  });
} else {
  console.log('No conflicts. Safe to reserve files.');
}
```

### Common Use Cases

- **Pre-flight Check**: Verify no conflicts before reserving
- **Planning**: Identify potential issues in advance
- **Coordination**: Plan work around existing reservations

### Notes

- Call before reserveFiles to avoid conflicts
- Returns detailed conflict information
- Essential for smooth collaboration