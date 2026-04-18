---
name: disable
cbbaseinfo:
  description: Disables a hook to prevent it from triggering on events.
cbparameters:
  parameters:
    - name: hookId
      typeName: string
      description: The unique identifier of the hook to disable.
  returns:
    signatureTypeName: "Promise<HookResponse>"
    description: A promise that resolves with the disabled hook details.
data:
  name: disable
  category: hook
  link: disable.md
---
# disable

```typescript
codebolt.hook.disable(hookId: string): Promise<HookResponse>
```

Disables a hook to prevent it from triggering on events.
### Parameters

- **`hookId`** (string): The unique identifier of the hook to disable.

### Returns

- **`Promise<[HookResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/HookResponse)>`**: A promise that resolves with the disabled hook details.

### Examples

#### Example 1: Disable a Hook

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.hook.disable('hook-123');

if (result.success) {
  console.log('Hook disabled');
}
```

#### Example 2: Temporarily Disable Hook

```typescript
async function runWithoutHook(hookId: string, task: () => Promise<void>) {
  // Disable hook
  await codebolt.hook.disable(hookId);

  try {
    // Run task without hook interference
    await task();
  } finally {
    // Re-enable hook
    await codebolt.hook.enable(hookId);
  }
}
```

### Common Use Cases

- **Temporary Pause**: Disable hook during maintenance
- **Troubleshooting**: Disable problematic hooks
- **Workflow Control**: Prevent hooks during specific operations

### Notes

- Hook will not trigger until re-enabled
- Configuration is preserved
- Idempotent operation (safe to call if already disabled)
