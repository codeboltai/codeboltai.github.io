---
cbapicategory:
  - name: createInstanceTemplate
    link: /docs/api/apiaccess/knowledgegraph/createInstanceTemplate
    description: Creates a new knowledge graph instance template.
  - name: getInstanceTemplate
    link: /docs/api/apiaccess/knowledgegraph/getInstanceTemplate
    description: Gets an instance template by ID.
  - name: listInstanceTemplates
    link: /docs/api/apiaccess/knowledgegraph/listInstanceTemplates
    description: Lists all instance templates.
  - name: updateInstanceTemplate
    link: /docs/api/apiaccess/knowledgegraph/updateInstanceTemplate
    description: Updates an instance template.
  - name: deleteInstanceTemplate
    link: /docs/api/apiaccess/knowledgegraph/deleteInstanceTemplate
    description: Deletes an instance template.
  - name: createInstance
    link: /docs/api/apiaccess/knowledgegraph/createInstance
    description: Creates a new knowledge graph instance.
  - name: getInstance
    link: /docs/api/apiaccess/knowledgegraph/getInstance
    description: Gets an instance by ID.
  - name: listInstances
    link: /docs/api/apiaccess/knowledgegraph/listInstances
    description: Lists instances, optionally filtered by template.
  - name: deleteInstance
    link: /docs/api/apiaccess/knowledgegraph/deleteInstance
    description: Deletes an instance.
  - name: addMemoryRecord
    link: /docs/api/apiaccess/knowledgegraph/addMemoryRecord
    description: Adds a memory record to an instance.
  - name: addMemoryRecords
    link: /docs/api/apiaccess/knowledgegraph/addMemoryRecords
    description: Adds multiple memory records to an instance.
  - name: getMemoryRecord
    link: /docs/api/apiaccess/knowledgegraph/getMemoryRecord
    description: Gets a memory record by ID.
  - name: listMemoryRecords
    link: /docs/api/apiaccess/knowledgegraph/listMemoryRecords
    description: Lists memory records in an instance.
  - name: updateMemoryRecord
    link: /docs/api/apiaccess/knowledgegraph/updateMemoryRecord
    description: Updates a memory record.
  - name: deleteMemoryRecord
    link: /docs/api/apiaccess/knowledgegraph/deleteMemoryRecord
    description: Deletes a memory record.
  - name: addEdge
    link: /docs/api/apiaccess/knowledgegraph/addEdge
    description: Adds an edge to an instance.
  - name: addEdges
    link: /docs/api/apiaccess/knowledgegraph/addEdges
    description: Adds multiple edges to an instance.
  - name: listEdges
    link: /docs/api/apiaccess/knowledgegraph/listEdges
    description: Lists edges in an instance.
  - name: deleteEdge
    link: /docs/api/apiaccess/knowledgegraph/deleteEdge
    description: Deletes an edge.
  - name: createViewTemplate
    link: /docs/api/apiaccess/knowledgegraph/createViewTemplate
    description: Creates a view template.
  - name: getViewTemplate
    link: /docs/api/apiaccess/knowledgegraph/getViewTemplate
    description: Gets a view template by ID.
  - name: listViewTemplates
    link: /docs/api/apiaccess/knowledgegraph/listViewTemplates
    description: Lists view templates.
  - name: updateViewTemplate
    link: /docs/api/apiaccess/knowledgegraph/updateViewTemplate
    description: Updates a view template.
  - name: deleteViewTemplate
    link: /docs/api/apiaccess/knowledgegraph/deleteViewTemplate
    description: Deletes a view template.
  - name: createView
    link: /docs/api/apiaccess/knowledgegraph/createView
    description: Creates a view.
  - name: listViews
    link: /docs/api/apiaccess/knowledgegraph/listViews
    description: Lists views for an instance.
  - name: executeView
    link: /docs/api/apiaccess/knowledgegraph/executeView
    description: Executes a view query.
  - name: deleteView
    link: /docs/api/apiaccess/knowledgegraph/deleteView
    description: Deletes a view.
---
# Knowledge Graph API

The Knowledge Graph API provides powerful graph-based memory and knowledge management capabilities, enabling you to create structured knowledge representations, manage relationships between entities, and query complex data patterns.

## Overview

The knowledge graph module enables you to:
- **Templates**: Define schemas for knowledge structures with record kinds and edge types
- **Instances**: Create knowledge graph instances from templates for specific domains
- **Memory Records**: Store structured data records with typed attributes
- **Edges**: Define relationships between records with typed edges
- **Views**: Create query templates for pattern matching and data retrieval
- **Querying**: Execute complex graph queries with pattern matching

## Quick Start Example

```js
// Wait for connection
await codebolt.waitForReady();

// Create a template for a person knowledge graph
const template = await codebolt.knowledgeGraph.createInstanceTemplate({
    name: 'Person Network',
    description: 'Template for tracking people and relationships',
    record_kinds: [
        {
            name: 'person',
            label: 'Person',
            description: 'A person entity',
            attributes: {
                name: { type: 'string', required: true },
                age: { type: 'number' },
                email: { type: 'string' }
            }
        }
    ],
    edge_types: [
        {
            name: 'knows',
            label: 'Knows',
            description: 'One person knows another',
            from_kinds: ['person'],
            to_kinds: ['person']
        }
    ]
});

// Create an instance from the template
const instance = await codebolt.knowledgeGraph.createInstance({
    templateId: template.data.id,
    name: 'My Network'
});

// Add people to the graph
const alice = await codebolt.knowledgeGraph.addMemoryRecord(instance.data.id, {
    kind: 'person',
    attributes: { name: 'Alice', age: 30, email: 'alice@example.com' }
});

const bob = await codebolt.knowledgeGraph.addMemoryRecord(instance.data.id, {
    kind: 'person',
    attributes: { name: 'Bob', age: 25, email: 'bob@example.com' }
});

// Create a relationship
await codebolt.knowledgeGraph.addEdge(instance.data.id, {
    kind: 'knows',
    from_node_id: alice.data.id,
    to_node_id: bob.data.id
});

console.log('✅ Knowledge graph created with relationships');
```

## Response Structure

All knowledge graph API functions return responses with a consistent structure:

```js
{
    type: string,
    success: boolean,
    data?: {
        // Response-specific data
        template: KGInstanceTemplate,
        instance: KGInstance,
        record: KGMemoryRecord,
        edge: KGEdge,
        view: KGView,
        // ... etc
    },
    message?: string,
    error?: string,
    timestamp: string,
    requestId: string
}
```

## Key Concepts

### Instance Templates
Templates define the schema for knowledge graphs, including:
- **Record Kinds**: Types of nodes/entities with their attributes
- **Edge Types**: Types of relationships between entities

### Instances
Instances are actual knowledge graphs created from templates, containing:
- Specific records/nodes
- Relationships/edges between nodes
- Queryable graph structures

### Memory Records
Records are the nodes in your knowledge graph, containing:
- A kind (type) defined in the template
- Typed attributes (string, number, boolean, date, json)
- Validity period (valid_from, valid_to)

### Edges
Edges define relationships between records:
- A kind (type) of relationship
- Source and target node IDs
- Optional attributes

### Views & View Templates
Views define query patterns for retrieving data:
- Match patterns to find specific graph structures
- Where clauses for filtering
- With clauses for traversals
- Return specifications for output formatting

### Attribute Types
Supported attribute types for records:
- `string`: Text data
- `number`: Numeric data
- `boolean`: True/false values
- `date`: Date/time data
- `json`: Nested data structures

<CBAPICategory />
