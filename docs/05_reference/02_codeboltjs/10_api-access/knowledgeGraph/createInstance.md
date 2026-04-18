---
name: createInstance
cbbaseinfo:
  description: Creates a new knowledge graph instance from a template, providing a working graph for storing and querying data.
cbparameters:
  parameters:
    - name: config
      typeName: CreateKGInstanceParams
      description: Instance configuration object.
      nested:
        - name: templateId
          typeName: string
          description: "The ID of the template to create the instance from (required)."
        - name: name
          typeName: string
          description: "The name for this instance (required)."
        - name: description
          typeName: "string | undefined"
          description: Optional description of this instance.
  returns:
    signatureTypeName: "Promise<KGInstanceResponse>"
    description: A promise that resolves to the created instance details.
    typeArgs: []
data:
  name: createInstance
  category: knowledgeGraph
  link: createInstance.md
---
# createInstance

```typescript
codebolt.knowledgeGraph.createInstance(config: CreateKGInstanceParams): Promise<KGInstanceResponse>
```

Creates a new knowledge graph instance from a template, providing a working graph for storing and querying data.
### Parameters

- **`config`** ([CreateKGInstanceParams](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/CreateKGInstanceParams)): Instance configuration object.

### Returns

- **`Promise<[KGInstanceResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/KGInstanceResponse)>`**: A promise that resolves to the created instance details.

### Examples

#### Create Basic Instance

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create an instance from a template
const instance = await codebolt.knowledgeGraph.createInstance({
    templateId: 'template-123',
    name: 'My Knowledge Graph'
});

if (instance.success) {
    console.log('✅ Instance created:', instance.data.id);
    console.log('Instance name:', instance.data.name);
    console.log('Template ID:', instance.data.templateId);
}
```

#### Create Instance with Description

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create a fully described instance
const instance = await codebolt.knowledgeGraph.createInstance({
    templateId: 'template-social-network-123',
    name: 'Company Social Graph',
    description: 'Knowledge graph tracking employee connections and collaborations'
});

console.log('Instance Details:');
console.log('- ID:', instance.data.id);
console.log('- Name:', instance.data.name);
console.log('- Description:', instance.data.description);
console.log('- Created:', instance.data.createdAt);
```

#### Create Multiple Instances from Same Template

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create multiple instances for different departments
const templateId = 'template-project-mgmt-123';
const departments = ['Engineering', 'Marketing', 'Sales', 'HR'];

const instances = [];

for (const dept of departments) {
    const instance = await codebolt.knowledgeGraph.createInstance({
        templateId,
        name: `${dept} Projects`,
        description: `Project tracking for ${dept} department`
    });

    if (instance.success) {
        instances.push(instance.data);
        console.log(`✅ Created ${dept} instance:`, instance.data.id);
    }
}

console.log(`Created ${instances.length} project tracking instances`);
```

#### Create Instance and Initialize with Data

```js
import codebolt from '@codebolt/codeboltjs';

async function createAndInitializeInstance(templateId, name, initialData) {
    await codebolt.waitForReady();

    // Create the instance
    const instance = await codebolt.knowledgeGraph.createInstance({
        templateId,
        name
    });

    if (!instance.success) {
        throw new Error('Failed to create instance');
    }

    const instanceId = instance.data.id;
    console.log('✅ Instance created:', instanceId);

    // Add initial records
    const records = [];
    for (const recordData of initialData) {
        const record = await codebolt.knowledgeGraph.addMemoryRecord(
            instanceId,
            recordData
        );
        if (record.success) {
            records.push(record.data);
        }
    }

    console.log(`✅ Added ${records.length} initial records`);

    return {
        instance: instance.data,
        records
    };
}

// Usage
const result = await createAndInitializeInstance(
    'template-person-123',
    'Team Directory',
    [
        { kind: 'person', attributes: { name: 'Alice', role: 'Developer' } },
        { kind: 'person', attributes: { name: 'Bob', role: 'Designer' } },
        { kind: 'person', attributes: { name: 'Charlie', role: 'Manager' } }
    ]
);
```

#### Create Instance for Different Environments

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Create instances for different environments
const templateId = 'template-app-architecture-123';
const environments = [
    { name: 'Development', suffix: '-dev' },
    { name: 'Staging', suffix: '-staging' },
    { name: 'Production', suffix: '-prod' }
];

for (const env of environments) {
    const instance = await codebolt.knowledgeGraph.createInstance({
        templateId,
        name: `App Architecture ${env.name}`,
        description: `Architecture documentation for ${env.name.toLowerCase()} environment`
    });

    if (instance.success) {
        console.log(`✅ Created ${env.name} instance`);
        // You could add environment-specific configurations here
    }
}
```

#### Error Handling with Template Validation

```js
import codebolt from '@codebolt/codeboltjs';

async function createInstanceWithErrorHandling(templateId, name, description) {
    await codebolt.waitForReady();

    try {
        // Validate inputs
        if (!templateId) {
            throw new Error('Template ID is required');
        }

        if (!name || name.trim() === '') {
            throw new Error('Instance name is required');
        }

        // Verify template exists
        const template = await codebolt.knowledgeGraph.getInstanceTemplate(templateId);
        if (!template.success) {
            throw new Error('Template not found');
        }

        // Create the instance
        const instance = await codebolt.knowledgeGraph.createInstance({
            templateId,
            name: name.trim(),
            description
        });

        if (!instance.success) {
            throw new Error(instance.error || 'Instance creation failed');
        }

        console.log(`✅ Instance "${name}" created successfully`);
        return instance.data;

    } catch (error) {
        console.error('Error creating instance:', error.message);
        return null;
    }
}

// Usage
const instance = await createInstanceWithErrorHandling(
    'template-123',
    'My Instance',
    'This is my knowledge graph instance'
);

if (instance) {
    console.log('Instance ready for use');
}
```

### Response Structure

```js
{
    type: 'kg.createInstance',
    success: boolean,
    data?: {
        id: string,
        templateId: string,
        name: string,
        description?: string,
        createdAt: string,
        updatedAt: string
    },
    message?: string,
    error?: string,
    timestamp: string,
    requestId: string
}
```

### Common Use Cases

**1. Environment Separation**
Create separate instances for development, staging, and production.

**2. Project Isolation**
Maintain separate knowledge graphs for different projects.

**3. Team Collaboration**
Create instances for different teams or departments.

**4. Data Partitioning**
Separate data by domain, time period, or other criteria.

**5. Testing**
Create test instances without affecting production data.

### Notes

- The template must exist before creating an instance
- Instance names must be unique (across all templates)
- Instances are isolated from each other
- Each instance maintains its own records and edges
- You can create multiple instances from the same template
- Instances inherit the schema (record kinds and edge types) from their template
- The instance ID is needed for all subsequent operations (adding records, edges, etc.)
- Consider using descriptive names to easily identify instances
- Instances can be listed and queried to find specific ones
- Deleting an instance removes all associated data
