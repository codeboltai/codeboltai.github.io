---
name: listSwarms
cbbaseinfo:
  description: Lists all available swarms in the system.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<ListSwarmsResponse>"
    description: A promise that resolves to an array of all swarms.
    typeArgs: []
data:
  name: listSwarms
  category: swarm
  link: listSwarms.md
---
# listSwarms

```typescript
codebolt.swarm.listSwarms(): Promise<ListSwarmsResponse>
```

Lists all available swarms in the system.
### Returns

- **`Promise<[ListSwarmsResponse](/docs/reference/type-reference/codeboltjs/interfaces/ListSwarmsResponse)>`**: A promise that resolves to an array of all swarms.

### Examples

#### Basic Swarm Listing

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Get all swarms
const result = await codebolt.swarm.listSwarms();

if (result.success) {
    console.log(`✅ Found ${result.data.swarms.length} swarms:`);
    result.data.swarms.forEach(swarm => {
        console.log(`- ${swarm.name} (${swarm.id})`);
    });
}
```

#### Display Detailed Swarm Information

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.swarm.listSwarms();

if (result.success) {
    console.log('📋 All Swarms:');
    console.log('═'.repeat(60));

    result.data.swarms.forEach((swarm, index) => {
        console.log(`\n${index + 1}. ${swarm.name}`);
        console.log(`   ID: ${swarm.id}`);
        console.log(`   Description: ${swarm.description || 'No description'}`);
        console.log(`   Created: ${new Date(swarm.createdAt).toLocaleString()}`);
        if (swarm.metadata) {
            console.log(`   Metadata: ${JSON.stringify(swarm.metadata, null, 2)}`);
        }
    });
}
```

#### Filter and Sort Swarms

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.swarm.listSwarms();

if (result.success) {
    // Filter swarms by name pattern
    const devSwarms = result.data.swarms.filter(swarm =>
        swarm.name.toLowerCase().includes('development')
    );

    // Sort by creation date (newest first)
    const sortedSwarms = [...result.data.swarms].sort((a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
    );

    console.log('Development Swarms:', devSwarms.length);
    console.log('Latest Swarm:', sortedSwarms[0]?.name);
}
```

#### Check if Swarm Exists

```js
import codebolt from '@codebolt/codeboltjs';

async function swarmExists(swarmName) {
    await codebolt.waitForReady();

    const result = await codebolt.swarm.listSwarms();

    if (result.success) {
        return result.data.swarms.some(swarm =>
            swarm.name === swarmName
        );
    }
    return false;
}

// Usage
const exists = await swarmExists('Development Team');
console.log('Swarm exists:', exists);
```

#### Get Swarm by Name

```js
import codebolt from '@codebolt/codeboltjs';

async function getSwarmByName(name) {
    await codebolt.waitForReady();

    const result = await codebolt.swarm.listSwarms();

    if (result.success) {
        const swarm = result.data.swarms.find(s => s.name === name);
        if (swarm) {
            return swarm;
        }
        throw new Error(`Swarm "${name}" not found`);
    }
    throw new Error('Failed to list swarms');
}

// Usage
try {
    const swarm = await getSwarmByName('Development Team');
    console.log('Found swarm:', swarm);
} catch (error) {
    console.error(error.message);
}
```

#### Error Handling

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

try {
    const result = await codebolt.swarm.listSwarms();

    if (!result.success) {
        console.error('Failed to list swarms:', result.error);
        return;
    }

    if (result.data.swarms.length === 0) {
        console.log('No swarms found. Create one first!');
    } else {
        console.log(`Found ${result.data.swarms.length} swarm(s)`);
    }
} catch (error) {
    console.error('Unexpected error:', error);
}
```

### Response Structure

```js
{
    success: boolean,
    requestId?: string,
    data?: {
        swarms: Array<{
            id: string,
            name: string,
            description?: string,
            createdAt: string,
            metadata?: Record<string, any>
        }>
    },
    error?: {
        code: string,
        message: string,
        details?: any
    }
}
```

### Common Use Cases

**1. Discovery**
Explore all available swarms to understand the current system organization.

**2. Selection UI**
Build user interfaces that allow users to select from available swarms.

**3. Validation**
Check if a swarm exists before performing operations on it.

**4. Administration**
Get an overview of all swarms for administrative purposes.

**5. Batch Operations**
Perform operations across multiple swarms.

### Notes

- This operation requires no parameters and returns all swarms you have access to
- Swarms are returned in no specific order; sort client-side if needed
- The list includes both active and inactive swarms
- Each swarm contains minimal information; use `getSwarm()` for detailed information
- Timestamps are in ISO 8601 format (UTC)
- Empty array is returned if no swarms exist
- Large numbers of swarms may result in slower response times
