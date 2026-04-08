---
name: get
cbbaseinfo:
  description: Retrieves details of a specific hook by its ID.
cbparameters:
  parameters:
    - name: hookId
      typeName: string
      description: The unique identifier of the hook to retrieve.
  returns:
    signatureTypeName: "Promise<HookResponse>"
    description: A promise that resolves with the hook details.
data:
  name: get
  category: hook
  link: get.md
---
# get

```typescript
codebolt.hook.get(hookId: string): Promise<HookResponse>
```

Retrieves details of a specific hook by its ID.
### Parameters

- **`hookId`** (string): The unique identifier of the hook to retrieve.

### Returns

- **`Promise<[HookResponse](/docs/reference/type-reference/codeboltjs/interfaces/HookResponse)>`**: A promise that resolves with the hook details.

### Examples

#### Example 1: Get Hook Details

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.hook.get('hook-123');

if (result.success) {
  console.log('Hook:', result.hook.name);
  console.log('Description:', result.hook.description);
  console.log('Events:', result.hook.events);
  console.log('Enabled:', result.hook.enabled);
}
```

### Common Use Cases

- **Hook Inspection**: View complete hook configuration
- **Verification**: Confirm hook exists before operations
- **Debugging**: Check hook settings for troubleshooting

### Notes

- Returns complete hook configuration
- Includes action details and filters
- Error returned if hook doesn't exist