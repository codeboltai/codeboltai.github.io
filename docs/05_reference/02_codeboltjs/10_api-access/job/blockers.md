---
name: Blocker Operations
cbbaseinfo:
  description: Job blockers track explicit obstacles preventing job completion. Blockers can be linked to other jobs and resolved when addressed.
data:
  name: blockers
  category: job
  link: blockers.md
---

# Blocker Operations

Blockers represent explicit obstacles that prevent a job from being completed. They differ from job dependencies in that blockers are typically discovered during work, while dependencies are structural.

## Adding Blockers

### addBlocker

Add a blocker to a job.

```javascript
const result = await codebolt.job.addBlocker('JOB-123', {
  text: 'Missing API documentation for external service',
  addedBy: 'agent-456',
  addedByName: 'Development Agent',
  blockerJobIds: ['JOB-100', 'JOB-101']  // Optional: related blocking jobs
});
```

**AddBlockerData Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `text` | string | Description of the blocker |
| `addedBy` | string | Agent ID who added it |
| `addedByName` | string | Optional display name |
| `blockerJobIds` | string[] | Optional job IDs causing the block |

## Managing Blockers

### resolveBlocker

Mark a blocker as resolved.

```javascript
await codebolt.job.resolveBlocker(
  'JOB-123',       // jobId
  'blocker-789',   // blockerId
  'agent-456'      // resolvedBy
);
console.log('Blocker resolved');
```

### removeBlocker

Remove a blocker entirely (not resolved, just deleted).

```javascript
await codebolt.job.removeBlocker('JOB-123', 'blocker-789');
console.log('Blocker removed');
```

## Examples

### Tracking Work Blockers

```javascript
async function workOnJob(jobId, agentId) {
  try {
    // Attempt work
    await doWork(jobId);
  } catch (error) {
    if (error.type === 'MISSING_DEPENDENCY') {
      // Add a blocker for the missing dependency
      await codebolt.job.addBlocker(jobId, {
        text: `Missing dependency: ${error.dependency}`,
        addedBy: agentId,
        blockerJobIds: error.relatedJobs || []
      });
      console.log('Work blocked, blocker added');
    }
    throw error;
  }
}
```

### Checking and Resolving Blockers

```javascript
async function canWorkOnJob(jobId) {
  const job = await codebolt.job.getJob(jobId);
  
  // Check for unresolved blockers
  const blockers = job.job.blockers || [];
  const unresolved = blockers.filter(b => !b.resolved);
  
  if (unresolved.length > 0) {
    console.log('Job has blockers:');
    unresolved.forEach(b => console.log(`- ${b.text}`));
    return false;
  }
  
  return true;
}

async function resolveBlockerIfPossible(jobId, blockerId, agentId) {
  const job = await codebolt.job.getJob(jobId);
  const blocker = job.job.blockers?.find(b => b.id === blockerId);
  
  if (!blocker) return;
  
  // Check if linked jobs are complete
  const linkedJobsComplete = await areJobsComplete(blocker.blockerJobIds);
  
  if (linkedJobsComplete) {
    await codebolt.job.resolveBlocker(jobId, blockerId, agentId);
    console.log('Blocker auto-resolved');
  }
}
```

## Use Cases

1. **Technical Blockers**: Missing APIs, broken dependencies
2. **External Blockers**: Waiting for third-party response
3. **Resource Blockers**: Waiting for infrastructure
4. **Knowledge Blockers**: Need clarification or documentation
5. **Cross-Team Blockers**: Waiting for another team's work
