---
name: list
cbbaseinfo:
  description: Lists all hooks in the system with their configurations and status.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<HookListResponse>"
    description: A promise that resolves with an array of all hooks.
data:
  name: list
  category: hook
  link: list.md
---
# list

```typescript
codebolt.hook.list(): Promise<HookListResponse>
```

Lists all hooks in the system with their configurations and status.
### Returns

- **`Promise<[HookListResponse](/docs/reference/type-reference/codeboltjs/interfaces/HookListResponse)>`**: A promise that resolves with an array of all hooks.

### Response Structure

```typescript
interface HookListResponse {
  success: boolean;
  hooks: Array<{
    id: string;
    name: string;
    description?: string;
    events: string[];
    enabled: boolean;
    createdAt: string;
  }>;
}
```

### Examples

#### Example 1: List All Hooks

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.hook.list();

console.log('All hooks:');
result.hooks.forEach(hook => {
  const status = hook.enabled ? '✓' : '✗';
  console.log(`${status} ${hook.name} (${hook.id})`);
  console.log(`   Events: ${hook.events.join(', ')}`);
});
```

#### Example 2: Filter Enabled Hooks

```typescript
const result = await codebolt.hook.list();

const enabledHooks = result.hooks.filter(h => h.enabled);

console.log(`Enabled hooks: ${enabledHooks.length}`);
enabledHooks.forEach(hook => {
  console.log(`- ${hook.name}`);
});
```

### Common Use Cases

- **Overview**: View all configured hooks
- **Audit**: Check hook configurations
- **Management**: Find hooks to modify or delete

### Notes

- Returns all hooks regardless of enabled status
- Useful for dashboard displays and management UIs
