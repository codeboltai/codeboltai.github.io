---
name: createJob
cbbaseinfo:
  description: Creates a new job in a specified job group. Jobs represent units of work like tasks, bugs, or features that need to be tracked and managed.
cbparameters:
  parameters:
    - name: groupId
      typeName: string
      description: The ID of the job group to create the job in.
    - name: data
      typeName: CreateJobData
      description: The job data including name, type, priority, and optional fields.
  returns:
    signatureTypeName: "Promise<JobCreateResponse>"
    description: A promise that resolves with the created job.
data:
  name: createJob
  category: job
  link: createJob.md
---
# createJob

```typescript
codebolt.job.createJob(groupId: string, data: CreateJobData): Promise<JobCreateResponse>
```

Creates a new job in a specified job group. Jobs represent units of work like tasks, bugs, or features that need to be tracked and managed.
### Parameters

- **`groupId`** (string): The ID of the job group to create the job in.
- **`data`** ([CreateJobData](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreateJobData)): The job data including name, type, priority, and optional fields.

### Returns

- **`Promise<[JobCreateResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/JobCreateResponse)>`**: A promise that resolves with the created job.

### CreateJobData Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | The job title/name |
| `type` | JobType | Yes | Type: 'bug', 'feature', 'task', 'epic', 'chore' |
| `priority` | JobPriority | Yes | Priority: 1-4 (4 is urgent) |
| `description` | string | No | Detailed description |
| `status` | JobStatus | No | Status: 'open', 'working', 'hold', 'closed' |
| `assignees` | string[] | No | List of assignee IDs |
| `labels` | string[] | No | Tags/labels for the job |
| `dependencies` | JobDependency[] | No | Dependencies on other jobs |
| `parentJobId` | string | No | Parent job ID for sub-jobs |
| `notes` | string | No | Additional notes |
| `dueDate` | string | No | Due date in ISO format |

### Examples

```javascript
// Basic job creation
const result = await codebolt.job.createJob('group-123', {
  name: 'Implement user authentication',
  type: 'feature',
  priority: 3
});
console.log('Created job:', result.job.id);

// Full job with all options
const fullJob = await codebolt.job.createJob('group-123', {
  name: 'Fix login bug',
  type: 'bug',
  priority: 4,
  description: 'Users cannot log in with special characters in password',
  status: 'open',
  assignees: ['agent-1', 'agent-2'],
  labels: ['security', 'urgent'],
  notes: 'Reported by multiple users',
  dueDate: '2024-02-15T00:00:00Z'
});
```

### Common Use Cases

1. **Feature Development**: Create jobs for new features with detailed descriptions
2. **Bug Tracking**: Track bugs with priority and assignees
3. **Epic Planning**: Create epic-type jobs as containers for related work
4. **Task Management**: Break down work into manageable task jobs