---
name: delete
cbbaseinfo:
  description: Deletes a hook by its ID, permanently removing it from the system.
cbparameters:
  parameters:
    - name: hookId
      typeName: string
      description: The unique identifier of the hook to delete.
  returns:
    signatureTypeName: "Promise<HookDeleteResponse>"
    description: A promise that resolves when the hook is deleted.
data:
  name: delete
  category: hook
  link: delete.md
---
# delete

```typescript
codebolt.hook.delete(hookId: string): Promise<HookDeleteResponse>
```

Deletes a hook by its ID, permanently removing it from the system.
### Parameters

- **`hookId`** (string): The unique identifier of the hook to delete.

### Returns

- **`Promise<[HookDeleteResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/HookDeleteResponse)>`**: A promise that resolves when the hook is deleted.

### Response Structure

```typescript
interface HookDeleteResponse {
  success: boolean;
  message: string;
  deletedAt: string;
}
```

### Examples

#### Example 1: Delete a Hook

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.hook.delete('hook-123');

if (result.success) {
  console.log('Hook deleted successfully');
}
```

#### Example 2: Delete with Confirmation

```typescript
async function deleteHookWithConfirmation(hookId: string) {
  // Get hook details first
  const hook = await codebolt.hook.get(hookId);

  console.log(`Deleting hook: ${hook.hook.name}`);

  // Confirm deletion
  const confirmed = await codebolt.chat.sendConfirmationRequest(
    `Are you sure you want to delete "${hook.hook.name}"?`,
    ['Yes, delete', 'Cancel']
  );

  if (confirmed === 'Yes, delete') {
    await codebolt.hook.delete(hookId);
    console.log('Hook deleted');
  }
}
```

### Common Use Cases

- **Remove Unused Hooks**: Clean up hooks that are no longer needed
- **Reset Configuration**: Delete hooks before recreating them
- **Project Cleanup**: Remove all hooks when archiving a project

### Notes

- Deletion is permanent
- Hook will no longer trigger after deletion
- Consider disabling instead of deleting if you might need it later
