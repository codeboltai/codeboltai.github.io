---
name: Job Module
cbbaseinfo:
  description: "The Job module provides comprehensive job management functionality including CRUD operations, dependencies, labels, pheromone-based coordination, split proposals, locking, bidding, and blocker management."
---

# Job Module

The Job module (`codebolt.job`) provides a complete solution for managing jobs in a distributed agent environment. Jobs can represent tasks, issues, features, or any work units that need to be tracked and coordinated.

## Core Features

### Basic Job Management
- Create, read, update, and delete jobs
- Bulk delete operations
- Job listing with filters
- Job groups for organization

### Dependencies
- Add and remove job dependencies
- Track blocking and related jobs
- Get ready and blocked jobs based on dependencies

### Labels
- Tag jobs with labels for categorization
- List, add, and remove labels

## Advanced Features

### Pheromone System
Pheromones provide a stigmergic coordination mechanism for agents:
- **Pheromone Types**: Define custom pheromone types with display names and colors
- **Deposit/Remove**: Agents can deposit or remove pheromones on jobs
- **Aggregation**: Get aggregated pheromone data across depositors
- **Decay**: Time-based decay support for pheromone intensity
- **Search**: Find jobs by pheromone type and intensity

### Split Proposals
For complex jobs that need to be broken down:
- Propose splitting a job into multiple sub-jobs
- Accept or delete split proposals

### Job Locking
Prevent concurrent work on the same job:
- Acquire and release locks
- Check lock status
- Request unlock from lock holder

### Job Bidding
Competitive assignment of jobs:
- Agents can bid on jobs with priority and reason
- Accept or withdraw bids
- List all bids on a job

### Job Blockers
Track explicit blockers on jobs:
- Add blockers with descriptions
- Link blockers to other jobs
- Resolve or remove blockers

## Usage Example

```javascript
import codebolt from '@codebolt/codeboltjs';

// Create a job group
const groupResult = await codebolt.job.createJobGroup({
  shortName: 'PROJ',
  name: 'My Project'
});

// Create a job in the group
const jobResult = await codebolt.job.createJob(groupResult.group.id, {
  name: 'Implement feature X',
  type: 'feature',
  priority: 3,
  description: 'Detailed description...'
});

// Deposit a pheromone to indicate interest
await codebolt.job.depositPheromone(jobResult.job.id, {
  type: 'interested',
  intensity: 0.8,
  depositedBy: 'agent-123'
});

// Lock the job before working
await codebolt.job.lockJob(jobResult.job.id, 'agent-123', 'My Agent');

// When done, unlock
await codebolt.job.unlockJob(jobResult.job.id, 'agent-123');
```

## Available Methods

### CRUD Operations
| Method | Description |
|--------|-------------|
| `createJob(groupId, data)` | Create a new job |
| `getJob(jobId)` | Get job details |
| `updateJob(jobId, data)` | Update a job |
| `deleteJob(jobId)` | Delete a job |
| `deleteJobs(jobIds)` | Bulk delete jobs |
| `listJobs(filters)` | List jobs with optional filters |
| `createJobGroup(data)` | Create a job group |

### Dependencies
| Method | Description |
|--------|-------------|
| `addDependency(jobId, targetId, type)` | Add a dependency |
| `removeDependency(jobId, targetId)` | Remove a dependency |
| `getReadyJobs(filters)` | Get jobs ready to start |
| `getBlockedJobs(filters)` | Get blocked jobs |

### Labels
| Method | Description |
|--------|-------------|
| `addLabel(label)` | Add a label |
| `removeLabel(label)` | Remove a label |
| `listLabels()` | List all labels |

### Pheromones
| Method | Description |
|--------|-------------|
| `getPheromoneTypes()` | List pheromone types |
| `addPheromoneType(data)` | Add a pheromone type |
| `removePheromoneType(name)` | Remove a pheromone type |
| `depositPheromone(jobId, deposit)` | Deposit pheromone |
| `removePheromone(jobId, type, depositedBy)` | Remove pheromone |
| `getPheromones(jobId)` | List pheromones on a job |
| `getPheromonesAggregated(jobId)` | Get aggregated pheromones |
| `listJobsByPheromone(type, minIntensity)` | Search by pheromone |
| `getPheromonesWithDecay(jobId)` | Get with decay applied |
| `getPheromonesAggregatedWithDecay(jobId)` | Aggregated with decay |

### Split Proposals
| Method | Description |
|--------|-------------|
| `addSplitProposal(jobId, proposal)` | Propose split |
| `deleteSplitProposal(jobId, proposalId)` | Delete proposal |
| `acceptSplitProposal(jobId, proposalId)` | Accept proposal |

### Locking
| Method | Description |
|--------|-------------|
| `lockJob(jobId, agentId, agentName)` | Acquire lock |
| `unlockJob(jobId, agentId)` | Release lock |
| `isJobLocked(jobId)` | Check lock status |

### Unlock Requests
| Method | Description |
|--------|-------------|
| `addUnlockRequest(jobId, request)` | Request unlock |
| `approveUnlockRequest(jobId, requestId, respondedBy)` | Approve request |
| `rejectUnlockRequest(jobId, requestId, respondedBy)` | Reject request |
| `deleteUnlockRequest(jobId, requestId)` | Delete request |

### Bidding
| Method | Description |
|--------|-------------|
| `addBid(jobId, bid)` | Add a bid |
| `withdrawBid(jobId, bidId)` | Withdraw a bid |
| `acceptBid(jobId, bidId)` | Accept a bid |
| `listBids(jobId)` | List all bids |

### Blockers
| Method | Description |
|--------|-------------|
| `addBlocker(jobId, blocker)` | Add a blocker |
| `removeBlocker(jobId, blockerId)` | Remove a blocker |
| `resolveBlocker(jobId, blockerId, resolvedBy)` | Resolve a blocker |
