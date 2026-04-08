---
name: Locking Operations
cbbaseinfo:
  description: Job locking prevents concurrent work on the same job. Agents can acquire exclusive locks, release them when done, and request unlocks from current lock holders.
data:
  name: locking
  category: job
  link: locking.md
---

# Locking Operations

Job locking provides mutual exclusion for agents working on jobs. Only one agent can hold a lock at a time.

## Basic Locking

### lockJob

Acquire a lock on a job.

```javascript
const result = await codebolt.job.lockJob(
  'JOB-123',      // jobId
  'agent-456',    // agentId
  'Code Agent'    // optional agentName
);

if (result.job) {
  console.log('Lock acquired successfully');
} else {
  console.log('Failed to acquire lock');
}
```

### unlockJob

Release a lock on a job.

```javascript
const result = await codebolt.job.unlockJob('JOB-123', 'agent-456');
console.log('Lock released');
```

### isJobLocked

Check if a job is currently locked.

```javascript
const status = await codebolt.job.isJobLocked('JOB-123');

if (status.isLocked) {
  console.log(`Locked by ${status.lock.lockedByName} at ${status.lock.lockedAt}`);
} else {
  console.log('Job is not locked');
}
```

## Unlock Requests

When a job is locked by another agent, you can request an unlock.

### addUnlockRequest

Request the lock holder to release the lock.

```javascript
await codebolt.job.addUnlockRequest('JOB-123', {
  requestedBy: 'agent-789',
  requestedByName: 'Urgent Agent',
  reason: 'Need to fix critical bug in this job'
});
```

### approveUnlockRequest

Lock holder approves an unlock request (releases the lock).

```javascript
await codebolt.job.approveUnlockRequest(
  'JOB-123',           // jobId
  'request-abc',       // unlockRequestId
  'agent-456'          // respondedBy (current lock holder)
);
```

### rejectUnlockRequest

Lock holder rejects an unlock request.

```javascript
await codebolt.job.rejectUnlockRequest(
  'JOB-123',
  'request-abc',
  'agent-456'
);
```

### deleteUnlockRequest

Delete an unlock request (requester can withdraw).

```javascript
await codebolt.job.deleteUnlockRequest('JOB-123', 'request-abc');
```

## Best Practices

1. **Always Unlock**: Wrap work in try/finally to ensure locks are released
2. **Check Before Lock**: Use `isJobLocked` to provide better UX
3. **Graceful Requests**: Request unlocks with clear reasons
4. **Timeouts**: Implement timeout logic for stale locks

```javascript
async function workOnJob(jobId, agentId) {
  const lockResult = await codebolt.job.lockJob(jobId, agentId);
  if (!lockResult.job) {
    // Check who has the lock and maybe request unlock
    const status = await codebolt.job.isJobLocked(jobId);
    if (status.isLocked) {
      console.log(`Locked by ${status.lock.lockedByName}`);
    }
    return;
  }

  try {
    // Do work on the job
    await doWork(jobId);
  } finally {
    await codebolt.job.unlockJob(jobId, agentId);
  }
}
```
