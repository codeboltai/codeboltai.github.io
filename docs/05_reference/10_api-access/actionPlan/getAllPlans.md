# getAllPlans

Retrieves all action plans in the system.

## Syntax

```javascript
codebolt.actionPlan.getAllPlans()
```

## Parameters

None

## Returns

`Promise<Object>` - A promise that resolves with all action plans.

### Response Object

```typescript
{
  success: boolean;
  plans: Array<{
    planId: string;
    name: string;
    description: string;
    agentId?: string;
    agentName?: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    tasks: Array<Task>;
  }>;
  error?: string;
}
```

## Example

```javascript
import codebolt from '@codebolt/codeboltjs';

async function listAllPlans() {
  try {
    const response = await codebolt.actionPlan.getAllPlans();
    
    if (response.success) {
      console.log(`Found ${response.plans.length} plans`);
      
      response.plans.forEach(plan => {
        console.log(`- ${plan.name}: ${plan.tasks.length} tasks`);
      });
    }
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
}
```

## Use Cases

### Filter Active Plans

```javascript
const response = await codebolt.actionPlan.getAllPlans();
const activePlans = response.plans.filter(plan => plan.status === 'active');
console.log(`Active plans: ${activePlans.length}`);
```

### Find Plans by Agent

```javascript
const response = await codebolt.actionPlan.getAllPlans();
const agentPlans = response.plans.filter(plan => plan.agentId === 'my-agent-id');
console.log(`Plans for agent: ${agentPlans.length}`);
```

### Sort Plans by Date

```javascript
const response = await codebolt.actionPlan.getAllPlans();
const sortedPlans = response.plans.sort((a, b) => 
  new Date(b.createdAt) - new Date(a.createdAt)
);
console.log('Most recent plan:', sortedPlans[0].name);
```

## Error Handling

```javascript
try {
  const response = await codebolt.actionPlan.getAllPlans();
  
  if (!response.success) {
    console.error('Failed to fetch plans:', response.error);
    return;
  }
  
  // Process plans
} catch (error) {
  console.error('Network or system error:', error);
}
```

## Related Methods

- [getPlanDetail](/docs/api/apiaccess/actionPlan/getPlanDetail) - Get details of a specific plan
- [createActionPlan](/docs/api/apiaccess/actionPlan/createActionPlan) - Create a new plan
- [updateActionPlan](/docs/api/apiaccess/actionPlan/updateActionPlan) - Update an existing plan
