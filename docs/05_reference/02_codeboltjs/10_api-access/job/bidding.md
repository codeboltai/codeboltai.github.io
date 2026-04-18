---
name: Bidding Operations
cbbaseinfo:
  description: Job bidding enables competitive job assignment where agents bid on jobs with priority and reason, and the best bid can be accepted.
data:
  name: bidding
  category: job
  link: bidding.md
---

# Bidding Operations

Job bidding provides a mechanism for competitive job assignment. Multiple agents can bid on a job, and the best qualified agent's bid can be accepted.

## Adding Bids

### addBid

Add a bid on a job.

```javascript
const result = await codebolt.job.addBid('JOB-123', {
  agentId: 'agent-456',
  agentName: 'Specialist Agent',
  reason: 'I have expertise in authentication systems',
  priority: 8  // Higher priority = more important/urgent
});
```

**AddBidData Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `agentId` | string | The agent's unique ID |
| `agentName` | string | Optional display name |
| `reason` | string | Why this agent should get the job |
| `priority` | number | Bid priority (higher = more important) |

## Managing Bids

### listBids

List all bids on a job.

```javascript
const result = await codebolt.job.listBids('JOB-123');
result.bids.forEach(bid => {
  console.log(`${bid.agentName}: ${bid.reason} (priority: ${bid.priority})`);
});

// Sort by priority to find best bid
const topBid = result.bids.sort((a, b) => b.priority - a.priority)[0];
console.log('Top bidder:', topBid.agentName);
```

### acceptBid

Accept a bid, typically assigning the job to that agent.

```javascript
await codebolt.job.acceptBid('JOB-123', 'bid-789');
console.log('Bid accepted, job assigned');
```

### withdrawBid

Withdraw a previously placed bid.

```javascript
await codebolt.job.withdrawBid('JOB-123', 'bid-789');
console.log('Bid withdrawn');
```

## Example Workflow

```javascript
async function bidOnJob(jobId, agentId, expertise) {
  // Check existing bids
  const existing = await codebolt.job.listBids(jobId);
  
  // Calculate priority based on expertise match
  const priority = calculatePriority(expertise);
  
  // Place bid
  await codebolt.job.addBid(jobId, {
    agentId,
    agentName: `Expert in ${expertise}`,
    reason: `Specialized in ${expertise} with 95% success rate`,
    priority
  });
  
  console.log('Bid placed successfully');
}

// Coordinator accepting the best bid
async function assignBestBidder(jobId) {
  const { bids } = await codebolt.job.listBids(jobId);
  
  if (bids.length === 0) {
    console.log('No bids received');
    return;
  }
  
  // Find highest priority pending bid
  const pendingBids = bids.filter(b => b.status === 'pending');
  const best = pendingBids.sort((a, b) => b.priority - a.priority)[0];
  
  await codebolt.job.acceptBid(jobId, best.id);
  console.log(`Assigned to ${best.agentName}`);
}
```

## Use Cases

1. **Skill Matching**: Agents bid based on their expertise level
2. **Load Balancing**: Agents with less work bid higher priority
3. **Auction System**: Jobs go to the agent with the best qualifications
4. **Fair Distribution**: Rotation-based bidding for equal work distribution
