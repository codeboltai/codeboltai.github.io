---
title: Knowledge Graph MCP
sidebar_label: codebolt.knowledgeGraph
sidebar_position: 63
---

# codebolt.knowledgeGraph

Comprehensive knowledge graph management tools for managing instance templates, instances, memory records, edges, views, and view templates. Provides a graph-based memory system with complex querying capabilities.

## Available Tools

**Instance Template Operations (5 tools)**
- `kg_create_instance_template` - Creates a new instance template
- `kg_get_instance_template` - Gets an instance template by ID
- `kg_list_instance_templates` - Lists all instance templates
- `kg_update_instance_template` - Updates an instance template
- `kg_delete_instance_template` - Deletes an instance template

**Instance Operations (4 tools)**
- `kg_create_instance` - Creates a new KG instance from a template
- `kg_get_instance` - Gets a KG instance by ID
- `kg_list_instances` - Lists KG instances with optional template filter
- `kg_delete_instance` - Deletes a KG instance

**Memory Record Operations (6 tools)**
- `kg_add_memory_record` - Adds a single memory record to an instance
- `kg_add_memory_records` - Adds multiple memory records to an instance
- `kg_get_memory_record` - Gets a memory record by ID
- `kg_list_memory_records` - Lists memory records with filters
- `kg_update_memory_record` - Updates a memory record
- `kg_delete_memory_record` - Deletes a memory record

**Edge Operations (4 tools)**
- `kg_add_edge` - Adds a single edge between nodes
- `kg_add_edges` - Adds multiple edges between nodes
- `kg_list_edges` - Lists edges with filters
- `kg_delete_edge` - Deletes an edge

**View Template Operations (5 tools)**
- `kg_create_view_template` - Creates a new view template
- `kg_get_view_template` - Gets a view template by ID
- `kg_list_view_templates` - Lists all view templates
- `kg_update_view_template` - Updates a view template
- `kg_delete_view_template` - Deletes a view template

**View Operations (4 tools)**
- `kg_create_view` - Creates a new view for an instance
- `kg_list_views` - Lists views for an instance
- `kg_execute_view` - Executes a view query
- `kg_delete_view` - Deletes a view

## Tool Parameters

### Instance Template Operations

#### kg_create_instance_template
Creates a new knowledge graph instance template that defines the structure of memory records and edges.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| config.name | string | Yes | Template name |
| config.description | string | No | Template description |
| config.record_kinds | KGRecordKind[] | Yes | Array of record kind definitions |
| config.edge_types | KGEdgeType[] | Yes | Array of edge type definitions |

**KGRecordKind** structure:
- `name` (string, required): Unique identifier for the record kind
- `label` (string, required): Human-readable label
- `description` (string, optional): Description of the record kind
- `attributes` (object, required): Key-value pairs defining attribute schemas
  - `type` (string, required): 'string' \| 'number' \| 'boolean' \| 'date' \| 'json'
  - `required` (boolean, optional): Whether the attribute is required
  - `default` (any, optional): Default value for the attribute

**KGEdgeType** structure:
- `name` (string, required): Unique identifier for the edge type
- `label` (string, required): Human-readable label
- `description` (string, optional): Description of the edge type
- `from_kinds` (string[], required): Array of record kind names this edge can originate from
- `to_kinds` (string[], required): Array of record kind names this edge can target
- `attributes` (object, optional): Key-value pairs defining edge attribute schemas

#### kg_get_instance_template
Retrieves a specific instance template by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| templateId | string | Yes | Template ID to retrieve |

#### kg_list_instance_templates
Lists all available instance templates.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### kg_update_instance_template
Updates an existing instance template with partial updates.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| templateId | string | Yes | Template ID to update |
| updates | object | Yes | Partial template configuration object |

#### kg_delete_instance_template
Deletes an instance template by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| templateId | string | Yes | Template ID to delete |

### Instance Operations

#### kg_create_instance
Creates a new knowledge graph instance from an existing template.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| config.templateId | string | Yes | Template ID to create instance from |
| config.name | string | Yes | Instance name |
| config.description | string | No | Instance description |

#### kg_get_instance
Retrieves a specific KG instance by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID to retrieve |

#### kg_list_instances
Lists KG instances with optional filtering by template.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| templateId | string | No | Optional template ID to filter instances |

#### kg_delete_instance
Deletes a KG instance by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID to delete |

### Memory Record Operations

#### kg_add_memory_record
Adds a single memory record to a KG instance.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID to add record to |
| record.kind | string | Yes | Record kind name (must exist in template) |
| record.attributes | object | Yes | Record attributes (must match schema) |
| record.valid_from | string | No | ISO 8601 timestamp for record validity start |
| record.valid_to | string | No | ISO 8601 timestamp for record validity end |

#### kg_add_memory_records
Adds multiple memory records to a KG instance in a single operation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID to add records to |
| records | object[] | Yes | Array of memory record objects |

#### kg_get_memory_record
Retrieves a specific memory record by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID containing the record |
| recordId | string | Yes | Record ID to retrieve |

#### kg_list_memory_records
Lists memory records in an instance with optional filtering.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID to list records from |
| filters.kind | string | No | Filter by record kind |
| filters.limit | number | No | Maximum number of records to return |
| filters.offset | number | No | Number of records to skip |

#### kg_update_memory_record
Updates an existing memory record with partial updates.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID containing the record |
| recordId | string | Yes | Record ID to update |
| updates | object | Yes | Partial record data to update |

#### kg_delete_memory_record
Deletes a memory record by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID containing the record |
| recordId | string | Yes | Record ID to delete |

### Edge Operations

#### kg_add_edge
Adds a single edge between two nodes in a KG instance.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID to add edge to |
| edge.kind | string | Yes | Edge type name (must exist in template) |
| edge.from_node_id | string | Yes | Source memory record ID |
| edge.to_node_id | string | Yes | Target memory record ID |
| edge.attributes | object | No | Edge attributes (must match schema if defined) |

#### kg_add_edges
Adds multiple edges between nodes in a KG instance in a single operation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID to add edges to |
| edges | object[] | Yes | Array of edge objects |

#### kg_list_edges
Lists edges in an instance with optional filtering.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID to list edges from |
| filters.kind | string | No | Filter by edge type |
| filters.from_node_id | string | No | Filter by source node ID |
| filters.to_node_id | string | No | Filter by target node ID |

#### kg_delete_edge
Deletes an edge by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID containing the edge |
| edgeId | string | Yes | Edge ID to delete |

### View Template Operations

#### kg_create_view_template
Creates a new view template for querying KG instances.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| config.name | string | Yes | View template name |
| config.description | string | No | View template description |
| config.applicable_template_ids | string[] | Yes | Array of template IDs this view applies to |
| config.match | object | No | Match criteria for the query |
| config.patterns | any[] | No | Array of graph patterns to match |
| config.where | any[] | No | Array of WHERE clauses for filtering |
| config.with | any[] | No | Array of WITH clauses for additional processing |
| config.orderBy | any[] | No | Array of ORDER BY expressions |
| config.skip | number | No | Number of results to skip |
| config.limit | number | No | Maximum number of results to return |
| config.return | string[] | No | Array of fields to return |

#### kg_get_view_template
Retrieves a specific view template by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| templateId | string | Yes | View template ID to retrieve |

#### kg_list_view_templates
Lists all view templates with optional filtering by applicable template.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| applicableTemplateId | string | No | Filter by applicable template ID |

#### kg_update_view_template
Updates an existing view template with partial updates.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| templateId | string | Yes | View template ID to update |
| updates | object | Yes | Partial view template configuration |

#### kg_delete_view_template
Deletes a view template by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| templateId | string | Yes | View template ID to delete |

### View Operations

#### kg_create_view
Creates a new view for a KG instance based on a view template.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| config.name | string | Yes | View name |
| config.instanceId | string | Yes | Instance ID to create view for |
| config.templateId | string | Yes | View template ID to base the view on |

#### kg_list_views
Lists all views for a specific KG instance.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instanceId | string | Yes | Instance ID to list views for |

#### kg_execute_view
Executes a view query and returns the results.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| viewId | string | Yes | View ID to execute |

#### kg_delete_view
Deletes a view by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| viewId | string | Yes | View ID to delete |

## Sample Usage

### Creating an Instance Template

```javascript
const result = await codebolt.knowledgeGraph.kg_create_instance_template({
  config: {
    name: 'project_management',
    description: 'Template for managing projects, tasks, and resources',
    record_kinds: [
      {
        name: 'project',
        label: 'Project',
        description: 'A project entity',
        attributes: {
          title: { type: 'string', required: true },
          status: { type: 'string', required: true, default: 'active' },
          priority: { type: 'number', required: true },
          start_date: { type: 'date' },
          end_date: { type: 'date' }
        }
      },
      {
        name: 'task',
        label: 'Task',
        description: 'A task within a project',
        attributes: {
          title: { type: 'string', required: true },
          status: { type: 'string', required: true },
          assignee: { type: 'string' },
          estimated_hours: { type: 'number' }
        }
      }
    ],
    edge_types: [
      {
        name: 'contains',
        label: 'Contains',
        description: 'Project contains tasks',
        from_kinds: ['project'],
        to_kinds: ['task']
      }
    ]
  }
});
```

### Creating an Instance and Adding Records

```javascript
// Create instance from template
const instance = await codebolt.knowledgeGraph.kg_create_instance({
  config: {
    templateId: 'template_123',
    name: 'my_project',
    description: 'Sample project instance'
  }
});

// Add project record
const project = await codebolt.knowledgeGraph.kg_add_memory_record({
  instanceId: instance.id,
  record: {
    kind: 'project',
    attributes: {
      title: 'Website Redesign',
      status: 'active',
      priority: 1,
      start_date: '2024-01-01T00:00:00Z'
    }
  }
});

// Add multiple task records
const tasks = await codebolt.knowledgeGraph.kg_add_memory_records({
  instanceId: instance.id,
  records: [
    {
      kind: 'task',
      attributes: {
        title: 'Design homepage',
        status: 'in_progress',
        assignee: 'john.doe@example.com',
        estimated_hours: 8
      }
    },
    {
      kind: 'task',
      attributes: {
        title: 'Implement API',
        status: 'pending',
        assignee: 'jane.smith@example.com',
        estimated_hours: 16
      }
    }
  ]
});
```

### Creating Edges Between Records

```javascript
// Create edge connecting project to tasks
await codebolt.knowledgeGraph.kg_add_edge({
  instanceId: instance.id,
  edge: {
    kind: 'contains',
    from_node_id: project.id,
    to_node_id: tasks[0].id
  }
});

// Add multiple edges at once
await codebolt.knowledgeGraph.kg_add_edges({
  instanceId: instance.id,
  edges: [
    {
      kind: 'contains',
      from_node_id: project.id,
      to_node_id: tasks[0].id
    },
    {
      kind: 'contains',
      from_node_id: project.id,
      to_node_id: tasks[1].id
    }
  ]
});
```

### Querying with Views

```javascript
// Create a view template
const viewTemplate = await codebolt.knowledgeGraph.kg_create_view_template({
  config: {
    name: 'project_tasks_view',
    description: 'View showing all tasks for projects',
    applicable_template_ids: ['template_123'],
    patterns: [
      { node: 'p', kind: 'project' },
      { edge: 'e', kind: 'contains' },
      { node: 't', kind: 'task' }
    ],
    return: ['p.title', 'p.status', 't.title', 't.status', 't.assignee']
  }
});

// Create view for instance
const view = await codebolt.knowledgeGraph.kg_create_view({
  config: {
    name: 'My Project Tasks',
    instanceId: instance.id,
    templateId: viewTemplate.id
  }
});

// Execute view query
const results = await codebolt.knowledgeGraph.kg_execute_view({
  viewId: view.id
});
```

### Listing and Filtering Records

```javascript
// List all records in instance
const allRecords = await codebolt.knowledgeGraph.kg_list_memory_records({
  instanceId: instance.id
});

// Filter records by kind with pagination
const tasks = await codebolt.knowledgeGraph.kg_list_memory_records({
  instanceId: instance.id,
  filters: {
    kind: 'task',
    limit: 10,
    offset: 0
  }
});

// List edges with filtering
const projectEdges = await codebolt.knowledgeGraph.kg_list_edges({
  instanceId: instance.id,
  filters: {
    from_node_id: project.id
  }
});
```

### Updating and Deleting Records

```javascript
// Update a memory record
await codebolt.knowledgeGraph.kg_update_memory_record({
  instanceId: instance.id,
  recordId: tasks[0].id,
  updates: {
    status: 'completed',
    attributes: {
      actual_hours: 7.5
    }
  }
});

// Delete a record
await codebolt.knowledgeGraph.kg_delete_memory_record({
  instanceId: instance.id,
  recordId: tasks[1].id
});

// Delete an edge
await codebolt.knowledgeGraph.kg_delete_edge({
  instanceId: instance.id,
  edgeId: 'edge_123'
});
```

:::info
**Knowledge Graph Architecture Notes**

- **Templates**: Instance templates define the schema for your knowledge graph, including record kinds (node types) and edge types (relationships). Templates ensure data consistency across instances.

- **Instances**: Each instance is a separate knowledge graph created from a template. You can create multiple instances from the same template (e.g., separate project graphs).

- **Memory Records**: Nodes in the graph that store structured data based on record kind definitions. Records can have temporal validity through `valid_from` and `valid_to` timestamps.

- **Edges**: Relationships between nodes that follow edge type definitions. Edges must connect compatible record kinds as specified in the template.

- **Views**: Query templates that allow you to define complex graph queries with patterns, filters, and transformations. Views can be reused across instances of compatible templates.

- **Type Safety**: All record attributes and edge attributes must match the schema defined in the template. The system validates data integrity.

- **Graph Patterns**: Views support pattern matching to traverse relationships (e.g., find all tasks in projects with a specific status).

- **Temporal Queries**: Memory records support temporal validity, enabling time-based queries and historical tracking of changes.
:::
