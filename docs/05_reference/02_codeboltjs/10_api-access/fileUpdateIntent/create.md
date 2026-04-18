---
name: create
cbbaseinfo:
  description: Creates a new file update intent with automatic overlap detection.
cbparameters:
  parameters:
    - name: data
      type: CreateFileUpdateIntentRequest
      required: true
      description: Intent data including environmentId, files array, description, and options.
    - name: claimedBy
      type: string
      required: true
      description: Agent ID claiming this intent.
    - name: claimedByName
      type: string
      required: false
      description: "Optional human-readable name of the agent."
  returns:
    signatureTypeName: "Promise<{ intent?: FileUpdateIntent, overlap?: IntentOverlapResult }>"
    description: A promise that resolves with the created intent and overlap information.
data:
  name: create
  category: fileUpdateIntent
  link: create.md
---
# create

```typescript
codebolt.fileUpdateIntent.create(data: undefined, claimedBy: undefined, claimedByName: undefined): Promise<{ intent?: FileUpdateIntent, overlap?: IntentOverlapResult }>
```

Creates a new file update intent with automatic overlap detection.
### Parameters

- **`data`** (unknown): Intent data including environmentId, files array, description, and options.
- **`claimedBy`** (unknown): Agent ID claiming this intent.
- **`claimedByName`** (unknown): Optional human-readable name of the agent.

### Returns

- **`Promise<{ intent?: [FileUpdateIntent](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/FileUpdateIntent), overlap?: [IntentOverlapResult](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/IntentOverlapResult) }>`**: A promise that resolves with the created intent and overlap information.

### Response Structure

```typescript
{
  intent?: {
    id: string;
    environmentId: string;
    files: Array<{
      filePath: string;
      intentLevel: 1 | 2 | 3 | 4;
      targetSections?: string[];
    }>;
    description: string;
    priority: number;
    claimedBy: string;
    claimedByName?: string;
    status: 'active' | 'completed' | 'expired' | 'cancelled';
    createdAt: string;
    expiresAt?: string;
  };
  overlap?: {
    hasOverlap: boolean;
    overlappingIntents: Array<{
      intentId: string;
      claimedBy: string;
      claimedByName?: string;
      files: string[];
      priority: number;
    }>;
    blockedFiles: string[];
    canProceed: boolean;
    message?: string;
  };
}
```

### Examples

#### Example 1: Create Basic Intent
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.fileUpdateIntent.create(
  {
    environmentId: 'env-123',
    files: [
      {
        filePath: '/src/components/Header.tsx',
        intentLevel: 2
      }
    ],
    description: 'Add navigation menu to header',
    priority: 5
  },
  'agent-456',
  'Frontend Agent'
);

if (result.intent) {
  console.log('Intent created:', result.intent.id);
}

if (result.overlap?.hasOverlap) {
  console.log('Overlap detected:', result.overlap.message);
}
```

#### Example 2: Create with Multiple Files
```javascript
const result = await codebolt.fileUpdateIntent.create(
  {
    environmentId: 'env-123',
    files: [
      { filePath: '/src/auth/login.tsx', intentLevel: 3, targetSections: ['LoginForm'] },
      { filePath: '/src/auth/api.ts', intentLevel: 2 },
      { filePath: '/src/styles/auth.css', intentLevel: 1 }
    ],
    description: 'Implement OAuth login flow',
    priority: 7,
    estimatedDuration: 45
  },
  'agent-789'
);
```

#### Example 3: Handle Conflicts
```javascript
const result = await codebolt.fileUpdateIntent.create(
  {
    environmentId: 'env-123',
    files: [
      { filePath: '/src/config.ts', intentLevel: 4 }
    ],
    description: 'Update configuration',
    priority: 10
  },
  'agent-1'
);

if (result.overlap?.hasOverlap) {
  if (!result.overlap.canProceed) {
    console.log('Cannot proceed - files are blocked');
    console.log('Blocked by:', result.overlap.overlappingIntents);
    return;
  }

  console.log('Overlap detected but can proceed');
  console.log('Conflicting agents:', result.overlap.overlappingIntents);
}
```

#### Example 4: Create with Auto-Expiry
```javascript
const result = await codebolt.fileUpdateIntent.create(
  {
    environmentId: 'env-123',
    files: [
      { filePath: '/src/utils/format.ts', intentLevel: 2 }
    ],
    description: 'Add date formatting utilities',
    priority: 5,
    autoExpire: true,
    maxAutoExpireMinutes: 30
  },
  'agent-2'
);
```

#### Example 5: Create Hard Lock for Critical File
```javascript
const result = await codebolt.fileUpdateIntent.create(
  {
    environmentId: 'env-123',
    files: [
      {
        filePath: '/src/database/schema.ts',
        intentLevel: 4
      }
    ],
    description: 'Critical: Update database schema',
    priority: 10,
    estimatedDuration: 15
  },
  'database-agent'
);
```

#### Example 6: Create with Section-Level Intent
```javascript
const result = await codebolt.fileUpdateIntent.create(
  {
    environmentId: 'env-123',
    files: [
      {
        filePath: '/src/components/UserProfile.tsx',
        intentLevel: 2,
        targetSections: ['UserProfile', 'updateEmail', 'updatePassword']
      }
    ],
    description: 'Update email and password change handlers',
    priority: 6
  },
  'agent-3'
);
```

### Common Use Cases
**Multi-Agent Coordination**: Declare files before modifying to prevent conflicts.
**Task Distribution**: Let agents know what files are being worked on.
**Priority Negotiation**: Use priority levels to resolve conflicts.
**Safety Mechanism**: Prevent accidental overwrites.

### Notes
- Always check the overlap result before proceeding
- Use appropriate intent levels based on the importance of the work
- Set reasonable expiration times to avoid orphaned intents
- Provide clear descriptions for other agents to understand
- Higher priority values take precedence in conflicts
