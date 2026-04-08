---
title: Knowledge Graph MCP
sidebar_label: codebolt.knowledge
sidebar_position: 37
---

# codebolt.knowledge

Tools for managing knowledge graph templates, instances, records (nodes), and edges (relationships).

## Available Tools

### Template Tools

- `kg_template_create` - Creates a new knowledge graph instance template with record kinds and edge types
- `kg_template_list` - Lists all knowledge graph instance templates
- `kg_template_get` - Gets a knowledge graph instance template by its ID
- `kg_template_delete` - Deletes a knowledge graph instance template permanently

### Instance Tools

- `kg_instance_create` - Creates a new knowledge graph instance based on a template
- `kg_instance_list` - Lists knowledge graph instances, optionally filtered by template ID
- `kg_instance_get` - Gets a knowledge graph instance by its ID
- `kg_instance_delete` - Deletes a knowledge graph instance and all its data permanently

### Record Tools

- `kg_record_add` - Adds a memory record (node) to a knowledge graph instance
- `kg_record_list` - Lists memory records in an instance with optional filtering and pagination

### Edge Tools

- `kg_edge_add` - Adds an edge (relationship) between two records in a knowledge graph instance
- `kg_edge_list` - Lists edges in an instance with optional filtering by kind, source, or target node

## Tool Parameters

### `kg_template_create`

Creates a new knowledge graph instance template defining the schema for records and edges.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the template |
| description | string | No | Optional description of the template |
| record_kinds | array | Yes | Array of record kinds defining the node types in the graph (objects with name, label, description, attributes) |
| edge_types | array | Yes | Array of edge types defining the relationships in the graph (objects with name, label, description, from_kinds, to_kinds, attributes) |

### `kg_template_list`

Lists all knowledge graph instance templates.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

### `kg_template_get`

Gets a knowledge graph instance template by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| template_id | string | Yes | The ID of the template to retrieve |

### `kg_template_delete`

Deletes a knowledge graph instance template permanently.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| template_id | string | Yes | The ID of the template to delete |

### `kg_instance_create`

Creates a new knowledge graph instance based on a template.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| template_id | string | Yes | The ID of the template to use for this instance |
| name | string | Yes | The name of the instance |
| description | string | No | Optional description of the instance |

### `kg_instance_list`

Lists knowledge graph instances, optionally filtered by template ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| template_id | string | No | Optional template ID to filter instances by |

### `kg_instance_get`

Gets a knowledge graph instance by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the instance to retrieve |

### `kg_instance_delete`

Deletes a knowledge graph instance and all its data permanently.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the instance to delete |

### `kg_record_add`

Adds a memory record (node) to a knowledge graph instance.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the instance to add the record to |
| kind | string | Yes | The kind/type of the record (must match a record_kind in the template) |
| attributes | object | Yes | The attributes/data of the record as a JSON object |
| valid_from | string | No | Optional: Start of validity period (ISO date string) |
| valid_to | string | No | Optional: End of validity period (ISO date string) |

### `kg_record_list`

Lists memory records in a knowledge graph instance with optional filtering and pagination.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the instance to list records from |
| kind | string | No | Optional: Filter by record kind |
| limit | number | No | Optional: Maximum number of records to return |
| offset | number | No | Optional: Number of records to skip (for pagination) |

### `kg_edge_add`

Adds an edge (relationship) between two records in a knowledge graph instance.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the instance to add the edge to |
| kind | string | Yes | The kind/type of the edge (must match an edge_type in the template) |
| from_node_id | string | Yes | The ID of the source node (record) |
| to_node_id | string | Yes | The ID of the target node (record) |
| attributes | object | No | Optional: Additional attributes for the edge as a JSON object |

### `kg_edge_list`

Lists edges (relationships) in a knowledge graph instance with optional filtering.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| instance_id | string | Yes | The ID of the instance to list edges from |
| kind | string | No | Optional: Filter by edge kind |
| from_node_id | string | No | Optional: Filter by source node ID |
| to_node_id | string | No | Optional: Filter by target node ID |

## Sample Usage

### Creating a Template

```javascript
const template = await codebolt.tools.executeTool(
  "codebolt.knowledge",
  "kg_template_create",
  {
    name: "Project Dependencies",
    description: "Track project dependencies and relationships",
    record_kinds: [
      {
        name: "project",
        label: "Project",
        attributes: {
          name: { type: "string", required: true },
          version: { type: "string" },
          language: { type: "string" }
        }
      },
      {
        name: "library",
        label: "Library",
        attributes: {
          name: { type: "string", required: true },
          version: { type: "string" }
        }
      }
    ],
    edge_types: [
      {
        name: "depends_on",
        label: "Depends On",
        from_kinds: ["project"],
        to_kinds: ["library", "project"]
      }
    ]
  }
);
```

### Creating an Instance

```javascript
const instance = await codebolt.tools.executeTool(
  "codebolt.knowledge",
  "kg_instance_create",
  {
    template_id: "template-123",
    name: "My Project Graph",
    description: "Dependencies for my current project"
  }
);
```

### Adding Records and Edges

```javascript
// Add a project record
const project = await codebolt.tools.executeTool(
  "codebolt.knowledge",
  "kg_record_add",
  {
    instance_id: "instance-456",
    kind: "project",
    attributes: {
      name: "my-app",
      version: "1.0.0",
      language: "TypeScript"
    }
  }
);

// Add a library record
const library = await codebolt.tools.executeTool(
  "codebolt.knowledge",
  "kg_record_add",
  {
    instance_id: "instance-456",
    kind: "library",
    attributes: {
      name: "express",
      version: "4.18.0"
    }
  }
);

// Create a relationship between them
const edge = await codebolt.tools.executeTool(
  "codebolt.knowledge",
  "kg_edge_add",
  {
    instance_id: "instance-456",
    kind: "depends_on",
    from_node_id: "record-project-123",
    to_node_id: "record-library-456"
  }
);
```

### Querying the Knowledge Graph

```javascript
// List all templates
const templates = await codebolt.tools.executeTool(
  "codebolt.knowledge",
  "kg_template_list",
  {}
);

// List instances for a template
const instances = await codebolt.tools.executeTool(
  "codebolt.knowledge",
  "kg_instance_list",
  { template_id: "template-123" }
);

// List records filtered by kind
const projects = await codebolt.tools.executeTool(
  "codebolt.knowledge",
  "kg_record_list",
  {
    instance_id: "instance-456",
    kind: "project",
    limit: 10
  }
);

// List edges from a specific node
const dependencies = await codebolt.tools.executeTool(
  "codebolt.knowledge",
  "kg_edge_list",
  {
    instance_id: "instance-456",
    from_node_id: "record-project-123"
  }
);
```

:::info
Knowledge graphs use a template-instance pattern. Templates define the schema (what types of records and edges are allowed), while instances store the actual data. Records represent nodes/entities in the graph, and edges represent relationships between records. Records can optionally have validity periods (`valid_from`, `valid_to`) for temporal data.
:::
