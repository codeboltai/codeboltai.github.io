---
name: create
cbbaseinfo:
  description: Creates a new hook with the specified configuration for automated event handling.
cbparameters:
  parameters:
    - name: config
      typeName: HookConfig
      description: Hook configuration including name, events, filters, actions, and settings.
  returns:
    signatureTypeName: "Promise<HookResponse>"
    description: A promise that resolves with the created hook details.
data:
  name: create
  category: hook
  link: create.md
---
# create

```typescript
codebolt.hook.create(config: HookConfig): Promise<HookResponse>
```

Creates a new hook with the specified configuration for automated event handling.
### Parameters

- **`config`** ([HookConfig](/docs/reference/type-reference/codeboltjs/interfaces/HookConfig)): Hook configuration including name, events, filters, actions, and settings.

### Returns

- **`Promise<[HookResponse](/docs/reference/type-reference/codeboltjs/interfaces/HookResponse)>`**: A promise that resolves with the created hook details.

### Response Structure

```typescript
interface HookResponse {
  success: boolean;
  hookId: string;
  hook?: {
    id: string;
    name: string;
    description?: string;
    events: string[];
    filter?: any;
    action: any;
    enabled: boolean;
    createdAt: string;
  };
  error?: string;
}
```

### Examples

#### Example 1: Create Simple File Watch Hook

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const hook = await codebolt.hook.create({
  name: 'run-linter',
  description: 'Run linter when JavaScript files change',
  events: ['file.save'],
  filter: {
    pattern: '**/*.js'
  },
  action: {
    type: 'command',
    command: 'eslint --fix {{file}}'
  },
  enabled: true
});

console.log('Hook created:', hook.hookId);
```

#### Example 2: Create Git Hook

```typescript
const hook = await codebolt.hook.create({
  name: 'pre-commit-tests',
  description: 'Run tests before committing',
  events: ['git.pre-commit'],
  action: {
    type: 'command',
    command: 'npm test',
    timeout: 60000
  },
  enabled: true
});

console.log('Pre-commit hook created');
```

#### Example 3: Create Build Hook

```typescript
const hook = await codebolt.hook.create({
  name: 'build-on-dependency-change',
  description: 'Rebuild when package.json changes',
  events: ['file.save'],
  filter: {
    pattern: 'package.json'
  },
  action: {
    type: 'command',
    command: 'npm run build'
  },
  enabled: true
});
```

#### Example 4: Create Notification Hook

```typescript
const hook = await codebolt.hook.create({
  name: 'error-notifications',
  description: 'Notify when errors occur',
  events: ['error.occurred'],
  action: {
    type: 'notification',
    message: 'Error occurred in {{file}}: {{error}}',
    level: 'error'
  },
  enabled: true
});
```

### Common Use Cases

- **Automated Testing**: Run tests on file changes
- **Code Quality**: Run linters and formatters
- **Build Automation**: Trigger builds on dependency changes
- **Notifications**: Send alerts for specific events
- **Git Hooks**: Pre-commit, pre-push workflows

### Notes

- Hook must be enabled to trigger
- Events can be file changes, git events, or custom events
- Filters allow targeting specific files or patterns
- Actions can be commands, notifications, or custom functions
