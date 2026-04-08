---
name: addMemoryRecord
cbbaseinfo:
  description: "Adds a memory record (node) to a knowledge graph instance with typed attributes and validity period."
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: The ID of the instance to add the record to.
    - name: record
      typeName: CreateKGMemoryRecordParams
      description: Record data object.
      nested:
        - name: kind
          typeName: string
          description: "The record kind (type) defined in the template (required)."
        - name: attributes
          typeName: "Record<string, any>"
          description: "Attribute values matching the kind's schema (required)."
        - name: valid_from
          typeName: "string | undefined"
          description: ISO 8601 timestamp for when the record becomes valid.
        - name: valid_to
          typeName: "string | undefined"
          description: ISO 8601 timestamp for when the record expires.
  returns:
    signatureTypeName: "Promise<KGMemoryRecordResponse>"
    description: A promise that resolves to the created record details.
    typeArgs: []
data:
  name: addMemoryRecord
  category: knowledgeGraph
  link: addMemoryRecord.md
---
# addMemoryRecord

```typescript
codebolt.knowledgeGraph.addMemoryRecord(instanceId: string, record: CreateKGMemoryRecordParams): Promise<KGMemoryRecordResponse>
```

Adds a memory record (node) to a knowledge graph instance with typed attributes and validity period.
### Parameters

- **`instanceId`** (string): The ID of the instance to add the record to.
- **`record`** ([CreateKGMemoryRecordParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreateKGMemoryRecordParams)): Record data object.

### Returns

- **`Promise<[KGMemoryRecordResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/KGMemoryRecordResponse)>`**: A promise that resolves to the created record details.

### Examples

#### Add Simple Record

```js
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Add a person record
const record = await codebolt.knowledgeGraph.addMemoryRecord(
    'instance-123',
    {
        kind: 'person',
        attributes: {
            name: 'Alice Johnson',
            email: 'alice@example.com',
            age: 30
        }
    }
);

if (record.success) {
    console.log('✅ Record created:', record.data.id);
    console.log('Record kind:', record.data.kind);
    console.log('Attributes:', record.data.attributes);
}
```

#### Add Record with Validity Period

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Add a record with time-based validity
const now = new Date();
const nextYear = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

const record = await codebolt.knowledgeGraph.addMemoryRecord(
    'instance-123',
    {
        kind: 'employee',
        attributes: {
            name: 'Bob Smith',
            position: 'Senior Developer',
            department: 'Engineering'
        },
        valid_from: now.toISOString(),
        valid_to: nextYear.toISOString()
    }
);

console.log('✅ Employee record created with validity period');
```

#### Add Multiple Records

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Add multiple people to the graph
const people = [
    { kind: 'person', attributes: { name: 'Alice', age: 30, city: 'NYC' } },
    { kind: 'person', attributes: { name: 'Bob', age: 25, city: 'LA' } },
    { kind: 'person', attributes: { name: 'Charlie', age: 35, city: 'SF' } },
    { kind: 'person', attributes: { name: 'Diana', age: 28, city: 'Seattle' } }
];

const instanceId = 'instance-123';
const records = [];

for (const person of people) {
    const record = await codebolt.knowledgeGraph.addMemoryRecord(instanceId, person);
    if (record.success) {
        records.push(record.data);
        console.log(`✅ Added ${person.attributes.name}`);
    }
}

console.log(`✅ Added ${records.length} people to the knowledge graph`);
```

#### Add Records with Different Types

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Add different types of records to a project management graph
const instanceId = 'instance-projects-123';

const project = await codebolt.knowledgeGraph.addMemoryRecord(instanceId, {
    kind: 'project',
    attributes: {
        name: 'Website Redesign',
        status: 'In Progress',
        budget: 50000,
        start_date: '2024-01-01'
    }
});

const task1 = await codebolt.knowledgeGraph.addMemoryRecord(instanceId, {
    kind: 'task',
    attributes: {
        title: 'Design mockups',
        status: 'Completed',
        priority: 1,
        estimated_hours: 40
    }
});

const task2 = await codebolt.knowledgeGraph.addMemoryRecord(instanceId, {
    kind: 'task',
    attributes: {
        title: 'Implement frontend',
        status: 'In Progress',
        priority: 2,
        estimated_hours: 80
    }
});

const resource = await codebolt.knowledgeGraph.addMemoryRecord(instanceId, {
    kind: 'resource',
    attributes: {
        name: 'Development Team',
        type: 'human',
        availability: 100,
        cost_per_hour: 100
    }
});

console.log('✅ Project structure created with project, tasks, and resources');
```

#### Add Record with JSON Attributes

```js
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Add a document with complex nested metadata
const record = await codebolt.knowledgeGraph.addMemoryRecord(
    'instance-docs-123',
    {
        kind: 'document',
        attributes: {
            title: 'API Documentation',
            content: 'This is the API documentation...',
            metadata: {
                author: 'John Doe',
                version: '1.0.0',
                tags: ['api', 'documentation', 'reference'],
                reviews: [
                    { reviewer: 'Alice', approved: true },
                    { reviewer: 'Bob', approved: true }
                ]
            }
        }
    }
);

console.log('✅ Document with complex metadata added');
```

#### Batch Add Records

```js
import codebolt from '@codebolt/codeboltjs';

async function addBatchRecords(instanceId, records) {
    await codebolt.waitForReady();

    // Use addMemoryRecords for batch operations
    const result = await codebolt.knowledgeGraph.addMemoryRecords(instanceId, records);

    if (result.success) {
        console.log(`✅ Batch added ${result.data.length} records`);
        return result.data;
    }

    return [];
}

// Usage
const records = [
    { kind: 'person', attributes: { name: 'Person 1' } },
    { kind: 'person', attributes: { name: 'Person 2' } },
    { kind: 'person', attributes: { name: 'Person 3' } },
    { kind: 'person', attributes: { name: 'Person 4' } },
    { kind: 'person', attributes: { name: 'Person 5' } }
];

const addedRecords = await addBatchRecords('instance-123', records);
console.log(`Added ${addedRecords.length} records in batch`);
```

#### Error Handling

```js
import codebolt from '@codebolt/codeboltjs';

async function addRecordWithErrorHandling(instanceId, record) {
    await codebolt.waitForReady();

    try {
        // Validate record kind
        if (!record.kind) {
            throw new Error('Record kind is required');
        }

        // Validate attributes
        if (!record.attributes || Object.keys(record.attributes).length === 0) {
            throw new Error('Record must have at least one attribute');
        }

        const result = await codebolt.knowledgeGraph.addMemoryRecord(instanceId, record);

        if (!result.success) {
            console.error('Failed to add record:', result.error);
            return null;
        }

        console.log('✅ Record added successfully');
        return result.data;

    } catch (error) {
        console.error('Error adding record:', error.message);
        return null;
    }
}

// Usage
const record = await addRecordWithErrorHandling(
    'instance-123',
    {
        kind: 'person',
        attributes: { name: 'Test Person', age: 30 }
    }
);
```

### Response Structure

```js
{
    type: 'kg.addMemoryRecord',
    success: boolean,
    data?: {
        id: string,
        instanceId: string,
        kind: string,
        attributes: Record<string, any>,
        valid_from?: string,
        valid_to?: string,
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

**1. Entity Creation**
Create entities in your knowledge domain (people, documents, tasks, etc.).

**2. Data Import**
Import data from external sources into the knowledge graph.

**3. Event Logging**
Record events or observations with timestamps.

**4. Temporal Data**
Use validity periods for time-sensitive data.

**5. Bulk Loading**
Use `addMemoryRecords` for efficient batch imports.

### Notes

- The record kind must exist in the instance's template
- Required attributes must be provided or the record will be rejected
- Attribute types must match the schema (string, number, boolean, date, json)
- Dates should be in ISO 8601 format
- Records can be updated after creation using `updateMemoryRecord`
- Each record gets a unique ID that can be used in edges
- Validity periods are optional; records without them are always valid
- For adding many records, use `addMemoryRecords` for better performance
- The record ID is returned and should be stored for creating relationships