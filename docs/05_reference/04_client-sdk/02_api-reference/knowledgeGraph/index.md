---
cbapicategory:
  - name: createEdge
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/createEdge
    description: "Creates a new edge (relationship) in a knowledge graph instance.

Edges connect two records with a typed relationship, forming the
graph structure. Each edge has a source record, target record,
and relationship type."
  - name: createInstance
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/createInstance
    description: "Creates a new knowledge graph instance.

Provisions an empty graph that can be populated with records and edges.
Optionally created from a template to inherit schema constraints."
  - name: createInstanceTemplate
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/createInstanceTemplate
    description: "Creates a new knowledge graph instance template.

Templates define the schema and structure for knowledge graph instances.
Use templates to enforce consistent node types and edge patterns
across multiple graph instances."
  - name: createRecord
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/createRecord
    description: "Creates a new record (node) in a knowledge graph instance.

Records represent entities or concepts in the graph. Each record
has a type, properties, and can be connected to other records
through edges."
  - name: createView
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/createView
    description: "Creates a new view for querying a knowledge graph.

Views are saved queries that extract specific subsets of graph data.
They can be created from a template or with a custom query definition."
  - name: createViewTemplate
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/createViewTemplate
    description: "Creates a new view template for knowledge graphs.

View templates define reusable query patterns for extracting
specific subsets of graph data. They act as saved queries that
can be instantiated with different parameters."
  - name: deleteEdge
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/deleteEdge
    description: "Deletes an edge from a knowledge graph instance.

Removes the relationship between two records. The records
themselves are not affected."
  - name: deleteInstance
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/deleteInstance
    description: "Deletes a knowledge graph instance and all its data.

Permanently removes the instance including all records, edges, and
associated views. This action cannot be undone."
  - name: deleteInstanceTemplate
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/deleteInstanceTemplate
    description: "Deletes a knowledge graph instance template.

Removes the template definition. Instances created from this template
continue to exist but can no longer reference the deleted template."
  - name: deleteRecord
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/deleteRecord
    description: "Deletes a record from a knowledge graph instance.

Removes the node and any edges connected to it. This may affect
the connectivity of the graph."
  - name: deleteView
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/deleteView
    description: "Deletes a view.

Removes the saved query. The underlying graph data is not affected."
  - name: deleteViewTemplate
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/deleteViewTemplate
    description: "Deletes a view template.

Removes the template definition. Views created from this template
continue to exist independently."
  - name: executeView
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/executeView
    description: "Executes a view and returns the query results.

Runs the view's query against its associated graph instance and
returns the matching records and edges. This is the primary way
to extract data from a knowledge graph."
  - name: expandNode
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/expandNode
    description: "Expands a node to reveal its immediate connections.

Starting from a specific record, returns all directly connected
records and the edges linking them. Useful for interactive graph
exploration where users progressively reveal the graph structure."
  - name: getInstance
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/getInstance
    description: "Retrieves a specific knowledge graph instance by its ID.

Returns the full details of a graph instance including its metadata,
template reference, and statistics."
  - name: getInstanceTemplate
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/getInstanceTemplate
    description: "Retrieves a specific knowledge graph instance template by its ID.

Returns the full template definition including its schema, node types,
and edge constraints."
  - name: getRecord
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/getRecord
    description: "Retrieves a specific record from a knowledge graph instance.

Returns the full record including all its properties and type
information."
  - name: getSubgraph
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/getSubgraph
    description: "Retrieves a subgraph of a knowledge graph instance.

Returns a portion of the graph centered around specified nodes or
matching certain criteria. Useful for visualizing local neighborhoods
without loading the entire graph."
  - name: getViewTemplate
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/getViewTemplate
    description: "Retrieves a specific view template by its ID.

Returns the full template definition including its query pattern
and configurable parameters."
  - name: listEdges
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/listEdges
    description: "Lists all edges in a knowledge graph instance.

Returns the relationships between records with their types and
endpoint references. Use optional parameters to filter by type."
  - name: listInstances
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/listInstances
    description: "Lists all knowledge graph instances.

Returns every graph instance in the system with their metadata
and record/edge counts."
  - name: listInstanceTemplates
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/listInstanceTemplates
    description: "Lists all knowledge graph instance templates.

Returns every template in the system with their schema definitions
and metadata."
  - name: listRecords
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/listRecords
    description: "Lists all records in a knowledge graph instance.

Returns the nodes in the graph with their types and properties.
Use optional parameters to filter by type or paginate results."
  - name: listViews
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/listViews
    description: "Lists all knowledge graph views.

Returns every view with their query definitions and associated
graph instances."
  - name: listViewTemplates
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/listViewTemplates
    description: "Lists all knowledge graph view templates.

Returns every view template with their query definitions and metadata."
  - name: updateInstanceTemplate
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/updateInstanceTemplate
    description: "Updates a knowledge graph instance template.

Modifies the template's schema or metadata. Existing instances
created from this template are not automatically updated."
  - name: updateRecord
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/updateRecord
    description: "Updates a record in a knowledge graph instance.

Modifies the record's properties or type. Only the fields provided
in the request body are updated."
  - name: updateViewTemplate
    link: /docs/reference/client-sdk/api-reference/knowledgeGraph/updateViewTemplate
    description: "Updates a view template.

Modifies the template's query definition or metadata. Existing
views created from this template are not automatically updated."
---
# KnowledgeGraph API

Knowledge Graph API

<CBAPICategory />

## Methods

- [`createEdge()`](./createEdge) — Creates a new edge (relationship) in a knowledge graph instance.

Edges connect two records with a typed relationship, forming the
graph structure. Each edge has a source record, target record,
and relationship type.
- [`createInstance()`](./createInstance) — Creates a new knowledge graph instance.

Provisions an empty graph that can be populated with records and edges.
Optionally created from a template to inherit schema constraints.
- [`createInstanceTemplate()`](./createInstanceTemplate) — Creates a new knowledge graph instance template.

Templates define the schema and structure for knowledge graph instances.
Use templates to enforce consistent node types and edge patterns
across multiple graph instances.
- [`createRecord()`](./createRecord) — Creates a new record (node) in a knowledge graph instance.

Records represent entities or concepts in the graph. Each record
has a type, properties, and can be connected to other records
through edges.
- [`createView()`](./createView) — Creates a new view for querying a knowledge graph.

Views are saved queries that extract specific subsets of graph data.
They can be created from a template or with a custom query definition.
- [`createViewTemplate()`](./createViewTemplate) — Creates a new view template for knowledge graphs.

View templates define reusable query patterns for extracting
specific subsets of graph data. They act as saved queries that
can be instantiated with different parameters.
- [`deleteEdge()`](./deleteEdge) — Deletes an edge from a knowledge graph instance.

Removes the relationship between two records. The records
themselves are not affected.
- [`deleteInstance()`](./deleteInstance) — Deletes a knowledge graph instance and all its data.

Permanently removes the instance including all records, edges, and
associated views. This action cannot be undone.
- [`deleteInstanceTemplate()`](./deleteInstanceTemplate) — Deletes a knowledge graph instance template.

Removes the template definition. Instances created from this template
continue to exist but can no longer reference the deleted template.
- [`deleteRecord()`](./deleteRecord) — Deletes a record from a knowledge graph instance.

Removes the node and any edges connected to it. This may affect
the connectivity of the graph.
- [`deleteView()`](./deleteView) — Deletes a view.

Removes the saved query. The underlying graph data is not affected.
- [`deleteViewTemplate()`](./deleteViewTemplate) — Deletes a view template.

Removes the template definition. Views created from this template
continue to exist independently.
- [`executeView()`](./executeView) — Executes a view and returns the query results.

Runs the view's query against its associated graph instance and
returns the matching records and edges. This is the primary way
to extract data from a knowledge graph.
- [`expandNode()`](./expandNode) — Expands a node to reveal its immediate connections.

Starting from a specific record, returns all directly connected
records and the edges linking them. Useful for interactive graph
exploration where users progressively reveal the graph structure.
- [`getInstance()`](./getInstance) — Retrieves a specific knowledge graph instance by its ID.

Returns the full details of a graph instance including its metadata,
template reference, and statistics.
- [`getInstanceTemplate()`](./getInstanceTemplate) — Retrieves a specific knowledge graph instance template by its ID.

Returns the full template definition including its schema, node types,
and edge constraints.
- [`getRecord()`](./getRecord) — Retrieves a specific record from a knowledge graph instance.

Returns the full record including all its properties and type
information.
- [`getSubgraph()`](./getSubgraph) — Retrieves a subgraph of a knowledge graph instance.

Returns a portion of the graph centered around specified nodes or
matching certain criteria. Useful for visualizing local neighborhoods
without loading the entire graph.
- [`getViewTemplate()`](./getViewTemplate) — Retrieves a specific view template by its ID.

Returns the full template definition including its query pattern
and configurable parameters.
- [`listEdges()`](./listEdges) — Lists all edges in a knowledge graph instance.

Returns the relationships between records with their types and
endpoint references. Use optional parameters to filter by type.
- [`listInstances()`](./listInstances) — Lists all knowledge graph instances.

Returns every graph instance in the system with their metadata
and record/edge counts.
- [`listInstanceTemplates()`](./listInstanceTemplates) — Lists all knowledge graph instance templates.

Returns every template in the system with their schema definitions
and metadata.
- [`listRecords()`](./listRecords) — Lists all records in a knowledge graph instance.

Returns the nodes in the graph with their types and properties.
Use optional parameters to filter by type or paginate results.
- [`listViews()`](./listViews) — Lists all knowledge graph views.

Returns every view with their query definitions and associated
graph instances.
- [`listViewTemplates()`](./listViewTemplates) — Lists all knowledge graph view templates.

Returns every view template with their query definitions and metadata.
- [`updateInstanceTemplate()`](./updateInstanceTemplate) — Updates a knowledge graph instance template.

Modifies the template's schema or metadata. Existing instances
created from this template are not automatically updated.
- [`updateRecord()`](./updateRecord) — Updates a record in a knowledge graph instance.

Modifies the record's properties or type. Only the fields provided
in the request body are updated.
- [`updateViewTemplate()`](./updateViewTemplate) — Updates a view template.

Modifies the template's query definition or metadata. Existing
views created from this template are not automatically updated.
