---
name: Pheromone Operations
cbbaseinfo:
  description: Pheromone operations enable stigmergic coordination between agents. Agents can deposit, remove, and query pheromones on jobs to communicate state and interest without direct messaging.
data:
  name: pheromones
  category: job
  link: pheromones.md
---

# Pheromone Operations

Pheromones provide a bio-inspired coordination mechanism for multi-agent systems. They allow agents to leave traces on jobs that other agents can sense and respond to.

## Pheromone Type Configuration

### getPheromoneTypes

List all configured pheromone types.

```javascript
const result = await codebolt.job.getPheromoneTypes();
console.log('Available types:', result.types);
// [{ name: 'interested', displayName: 'Interest', color: '#4CAF50' }, ...]
```

### addPheromoneType

Add a new pheromone type.

```javascript
await codebolt.job.addPheromoneType({
  name: 'blocked',
  displayName: 'Blocked',
  description: 'Indicates the job is blocked',
  color: '#F44336'
});
```

### removePheromoneType

Remove a pheromone type.

```javascript
await codebolt.job.removePheromoneType('blocked');
```

## Depositing and Removing Pheromones

### depositPheromone

Deposit a pheromone on a job.

```javascript
await codebolt.job.depositPheromone('JOB-123', {
  type: 'interested',
  intensity: 0.8,  // 0-1 range
  depositedBy: 'agent-456',
  depositedByName: 'Code Agent'
});
```

**Parameters:**
- `jobId`: The job ID to deposit on
- `deposit`: Object with:
  - `type`: Pheromone type name
  - `intensity`: Optional intensity (0-1)
  - `depositedBy`: Agent ID
  - `depositedByName`: Optional agent name

### removePheromone

Remove a pheromone from a job.

```javascript
// Remove specific agent's pheromone
await codebolt.job.removePheromone('JOB-123', 'interested', 'agent-456');

// Remove all pheromones of a type (omit depositedBy)
await codebolt.job.removePheromone('JOB-123', 'interested');
```

## Querying Pheromones

### getPheromones

Get all pheromones on a job.

```javascript
const result = await codebolt.job.getPheromones('JOB-123');
result.pheromones.forEach(p => {
  console.log(`${p.type}: ${p.intensity} by ${p.depositedByName}`);
});
```

### getPheromonesAggregated

Get aggregated pheromone data by type.

```javascript
const result = await codebolt.job.getPheromonesAggregated('JOB-123');
result.aggregations.forEach(agg => {
  console.log(`${agg.type}: total=${agg.totalIntensity}, count=${agg.count}`);
  console.log(`Depositors: ${agg.depositors.join(', ')}`);
});
```

### listJobsByPheromone

Search for jobs with a specific pheromone type.

```javascript
// Find all jobs with 'interested' pheromone
const result = await codebolt.job.listJobsByPheromone('interested');

// With minimum intensity filter
const highInterest = await codebolt.job.listJobsByPheromone('interested', 0.7);
console.log(`Found ${highInterest.totalCount} high-interest jobs`);
```

## Decay Support

Pheromones can decay over time. Use these methods to get pheromone values with decay applied.

### getPheromonesWithDecay

```javascript
const result = await codebolt.job.getPheromonesWithDecay('JOB-123');
// Intensities reflect time-based decay
```

### getPheromonesAggregatedWithDecay

```javascript
const result = await codebolt.job.getPheromonesAggregatedWithDecay('JOB-123');
// Aggregations reflect decayed values
```

## Use Cases

1. **Interest Signaling**: Agents deposit 'interested' pheromones to indicate they want to work on a job
2. **Danger Warnings**: Deposit 'risky' pheromones to warn other agents about problematic jobs
3. **Progress Tracking**: Use intensity to reflect progress (higher = more progress)
4. **Resource Contention**: Multiple agents with 'interested' pheromones indicates competition
5. **Stigmergic Coordination**: Agents can self-organize based on pheromone patterns without direct communication
