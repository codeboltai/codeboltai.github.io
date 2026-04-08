---
name: enable
cbbaseinfo:
  description: Enables a hook to make it active and allow it to trigger on events.
cbparameters:
  parameters:
    - name: hookId
      typeName: string
      description: The unique identifier of the hook to enable.
  returns:
    signatureTypeName: "Promise<HookResponse>"
    description: A promise that resolves with the enabled hook details.
data:
  name: enable
  category: hook
  link: enable.md
---
# enable

```typescript
codebolt.hook.enable(hookId: string): Promise<HookResponse>
```

Enables a hook to make it active and allow it to trigger on events.
### Parameters

- **`hookId`** (string): The unique identifier of the hook to enable.

### Returns

- **`Promise<[HookResponse](/docs/reference/type-reference/codeboltjs/interfaces/HookResponse)>`**: A promise that resolves with the enabled hook details.

### Examples

#### Example 1: Enable a Hook

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.hook.enable('hook-123');

if (result.success) {
  console.log('Hook enabled and active');
}
```

#### Example 2: Enable Multiple Hooks

```typescript
const hookIds = ['hook-001', 'hook-002', 'hook-003'];

const results = await Promise.all(
  hookIds.map(id => codebolt.hook.enable(id))
);

console.log(`Enabled ${results.filter(r => r.success).length} hooks`);
```

### Common Use Cases

- **Activation**: Enable hooks after configuration
- **Resume**: Re-enable previously disabled hooks
- **Batch Activation**: Enable multiple hooks at once

### Notes

- Hook will begin triggering on its events immediately
- Idempotent operation (safe to call if already enabled)