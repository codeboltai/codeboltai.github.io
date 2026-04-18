---
title: KnowledgeGraphApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: KnowledgeGraphApi

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:31

Manages knowledge graphs including instance templates, instances,
records, edges, views, and graph traversal operations.

Knowledge graphs store structured, interconnected data as nodes (records)
and edges. They support templates for creating consistent graph structures,
views for querying specific graph projections, and traversal operations
for exploring relationships.

## Constructors

### Constructor

```ts
new KnowledgeGraphApi(http: HttpClient): KnowledgeGraphApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`KnowledgeGraphApi`

## Methods

### createEdge()

```ts
createEdge(id: string, data: CreateKGEdgeRequest): Promise<KGEdge>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:336

Creates a new edge (relationship) in a knowledge graph instance.

Edges connect two records with a typed relationship, forming the
graph structure. Each edge has a source record, target record,
and relationship type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `data` | `CreateKGEdgeRequest` | Edge creation payload including source, target, and relationship type |

#### Returns

`Promise`\<`KGEdge`\>

A promise that resolves to the newly created KGEdge

#### Example

```typescript
const edge = await client.knowledgeGraph.createEdge('kg-456', {
  sourceId: 'rec-1',
  targetId: 'rec-2',
  type: 'calls',
});
```

***

### createInstance()

```ts
createInstance(data: CreateKGInstanceRequest): Promise<KGInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:152

Creates a new knowledge graph instance.

Provisions an empty graph that can be populated with records and edges.
Optionally created from a template to inherit schema constraints.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateKGInstanceRequest` | Instance creation payload including name and optional template reference |

#### Returns

`Promise`\<`KGInstance`\>

A promise that resolves to the newly created KGInstance

#### Example

```typescript
const instance = await client.knowledgeGraph.createInstance({
  name: 'project-graph',
  templateId: 'tmpl-123',
});
```

***

### createInstanceTemplate()

```ts
createInstanceTemplate(data: CreateKGInstanceTemplateRequest): Promise<KGInstanceTemplate>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:54

Creates a new knowledge graph instance template.

Templates define the schema and structure for knowledge graph instances.
Use templates to enforce consistent node types and edge patterns
across multiple graph instances.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateKGInstanceTemplateRequest` | Template creation payload including schema definition |

#### Returns

`Promise`\<`KGInstanceTemplate`\>

A promise that resolves to the newly created KGInstanceTemplate

#### Example

```typescript
const template = await client.knowledgeGraph.createInstanceTemplate({
  name: 'codebase-graph',
  nodeTypes: ['file', 'function', 'class'],
});
```

***

### createRecord()

```ts
createRecord(id: string, data: CreateKGRecordRequest): Promise<KGRecord>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:231

Creates a new record (node) in a knowledge graph instance.

Records represent entities or concepts in the graph. Each record
has a type, properties, and can be connected to other records
through edges.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `data` | `CreateKGRecordRequest` | Record creation payload including type and properties |

#### Returns

`Promise`\<`KGRecord`\>

A promise that resolves to the newly created KGRecord

#### Example

```typescript
const record = await client.knowledgeGraph.createRecord('kg-456', {
  type: 'function',
  properties: { name: 'calculateTotal', file: 'utils.ts' },
});
```

***

### createView()

```ts
createView(data: CreateKGViewRequest): Promise<KGView>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:496

Creates a new view for querying a knowledge graph.

Views are saved queries that extract specific subsets of graph data.
They can be created from a template or with a custom query definition.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateKGViewRequest` | View creation payload including query definition and target instance |

#### Returns

`Promise`\<`KGView`\>

A promise that resolves to the newly created KGView

#### Example

```typescript
const view = await client.knowledgeGraph.createView({
  name: 'all-functions',
  instanceId: 'kg-456',
  templateId: 'vtmpl-123',
});
```

***

### createViewTemplate()

```ts
createViewTemplate(data: CreateKGViewTemplateRequest): Promise<KGViewTemplate>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:398

Creates a new view template for knowledge graphs.

View templates define reusable query patterns for extracting
specific subsets of graph data. They act as saved queries that
can be instantiated with different parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateKGViewTemplateRequest` | View template creation payload including query definition |

#### Returns

`Promise`\<`KGViewTemplate`\>

A promise that resolves to the newly created KGViewTemplate

#### Example

```typescript
const template = await client.knowledgeGraph.createViewTemplate({
  name: 'function-calls',
  query: { edgeType: 'calls', depth: 2 },
});
```

***

### deleteEdge()

```ts
deleteEdge(id: string, edgeId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:374

Deletes an edge from a knowledge graph instance.

Removes the relationship between two records. The records
themselves are not affected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `edgeId` | `string` | The unique identifier of the edge to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.knowledgeGraph.deleteEdge('kg-456', 'edge-001');
```

***

### deleteInstance()

```ts
deleteInstance(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:206

Deletes a knowledge graph instance and all its data.

Permanently removes the instance including all records, edges, and
associated views. This action cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the instance to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.knowledgeGraph.deleteInstance('kg-456');
```

***

### deleteInstanceTemplate()

```ts
deleteInstanceTemplate(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:129

Deletes a knowledge graph instance template.

Removes the template definition. Instances created from this template
continue to exist but can no longer reference the deleted template.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the template to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.knowledgeGraph.deleteInstanceTemplate('tmpl-123');
```

***

### deleteRecord()

```ts
deleteRecord(id: string, recordId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:310

Deletes a record from a knowledge graph instance.

Removes the node and any edges connected to it. This may affect
the connectivity of the graph.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `recordId` | `string` | The unique identifier of the record to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.knowledgeGraph.deleteRecord('kg-456', 'rec-789');
```

***

### deleteView()

```ts
deleteView(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:551

Deletes a view.

Removes the saved query. The underlying graph data is not affected.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the view to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.knowledgeGraph.deleteView('view-789');
```

***

### deleteViewTemplate()

```ts
deleteViewTemplate(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:472

Deletes a view template.

Removes the template definition. Views created from this template
continue to exist independently.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the view template to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.knowledgeGraph.deleteViewTemplate('vtmpl-123');
```

***

### executeView()

```ts
executeView(id: string, params?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:534

Executes a view and returns the query results.

Runs the view's query against its associated graph instance and
returns the matching records and edges. This is the primary way
to extract data from a knowledge graph.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the view to execute |
| `params?` | `Record`\<`string`, `unknown`\> | Optional runtime parameters to pass to the view query |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the query results (records and edges)

#### Example

```typescript
const results = await client.knowledgeGraph.executeView('view-789');
```

***

### expandNode()

```ts
expandNode(id: string, data: ExpandNodeRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:599

Expands a node to reveal its immediate connections.

Starting from a specific record, returns all directly connected
records and the edges linking them. Useful for interactive graph
exploration where users progressively reveal the graph structure.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `data` | `ExpandNodeRequest` | Expansion parameters specifying which node to expand and direction |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the connected records and edges

#### Example

```typescript
const neighbors = await client.knowledgeGraph.expandNode('kg-456', {
  recordId: 'rec-1',
  direction: 'outgoing',
});
```

***

### getInstance()

```ts
getInstance(id: string): Promise<KGInstance>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:188

Retrieves a specific knowledge graph instance by its ID.

Returns the full details of a graph instance including its metadata,
template reference, and statistics.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |

#### Returns

`Promise`\<`KGInstance`\>

A promise that resolves to the KGInstance

#### Example

```typescript
const instance = await client.knowledgeGraph.getInstance('kg-456');
```

***

### getInstanceTemplate()

```ts
getInstanceTemplate(id: string): Promise<KGInstanceTemplate>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:90

Retrieves a specific knowledge graph instance template by its ID.

Returns the full template definition including its schema, node types,
and edge constraints.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the instance template |

#### Returns

`Promise`\<`KGInstanceTemplate`\>

A promise that resolves to the KGInstanceTemplate

#### Example

```typescript
const template = await client.knowledgeGraph.getInstanceTemplate('tmpl-123');
```

***

### getRecord()

```ts
getRecord(id: string, recordId: string): Promise<KGRecord>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:269

Retrieves a specific record from a knowledge graph instance.

Returns the full record including all its properties and type
information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `recordId` | `string` | The unique identifier of the record within the instance |

#### Returns

`Promise`\<`KGRecord`\>

A promise that resolves to the KGRecord

#### Example

```typescript
const record = await client.knowledgeGraph.getRecord('kg-456', 'rec-789');
```

***

### getSubgraph()

```ts
getSubgraph(id: string, params?: KGSubgraphParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:576

Retrieves a subgraph of a knowledge graph instance.

Returns a portion of the graph centered around specified nodes or
matching certain criteria. Useful for visualizing local neighborhoods
without loading the entire graph.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `params?` | `KGSubgraphParams` | Optional parameters controlling subgraph scope (e.g., center node, depth) |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the subgraph data including records and edges

#### Example

```typescript
const subgraph = await client.knowledgeGraph.getSubgraph('kg-456', {
  centerId: 'rec-1',
  depth: 2,
});
```

***

### getViewTemplate()

```ts
getViewTemplate(id: string): Promise<KGViewTemplate>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:433

Retrieves a specific view template by its ID.

Returns the full template definition including its query pattern
and configurable parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the view template |

#### Returns

`Promise`\<`KGViewTemplate`\>

A promise that resolves to the KGViewTemplate

#### Example

```typescript
const template = await client.knowledgeGraph.getViewTemplate('vtmpl-123');
```

***

### listEdges()

```ts
listEdges(id: string, params?: Record<string, unknown>): Promise<KGEdge[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:355

Lists all edges in a knowledge graph instance.

Returns the relationships between records with their types and
endpoint references. Use optional parameters to filter by type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`KGEdge`[]\>

A promise that resolves to an array of KGEdge objects

#### Example

```typescript
const edges = await client.knowledgeGraph.listEdges('kg-456');
```

***

### listInstances()

```ts
listInstances(params?: Record<string, unknown>): Promise<KGInstance[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:170

Lists all knowledge graph instances.

Returns every graph instance in the system with their metadata
and record/edge counts.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`KGInstance`[]\>

A promise that resolves to an array of KGInstance objects

#### Example

```typescript
const instances = await client.knowledgeGraph.listInstances();
```

***

### listInstanceTemplates()

```ts
listInstanceTemplates(params?: Record<string, unknown>): Promise<KGInstanceTemplate[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:72

Lists all knowledge graph instance templates.

Returns every template in the system with their schema definitions
and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`KGInstanceTemplate`[]\>

A promise that resolves to an array of KGInstanceTemplate objects

#### Example

```typescript
const templates = await client.knowledgeGraph.listInstanceTemplates();
```

***

### listRecords()

```ts
listRecords(id: string, params?: Record<string, unknown>): Promise<KGRecord[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:250

Lists all records in a knowledge graph instance.

Returns the nodes in the graph with their types and properties.
Use optional parameters to filter by type or paginate results.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`KGRecord`[]\>

A promise that resolves to an array of KGRecord objects

#### Example

```typescript
const records = await client.knowledgeGraph.listRecords('kg-456');
```

***

### listViews()

```ts
listViews(params?: Record<string, unknown>): Promise<KGView[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:514

Lists all knowledge graph views.

Returns every view with their query definitions and associated
graph instances.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`KGView`[]\>

A promise that resolves to an array of KGView objects

#### Example

```typescript
const views = await client.knowledgeGraph.listViews();
```

***

### listViewTemplates()

```ts
listViewTemplates(params?: Record<string, unknown>): Promise<KGViewTemplate[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:415

Lists all knowledge graph view templates.

Returns every view template with their query definitions and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`KGViewTemplate`[]\>

A promise that resolves to an array of KGViewTemplate objects

#### Example

```typescript
const templates = await client.knowledgeGraph.listViewTemplates();
```

***

### updateInstanceTemplate()

```ts
updateInstanceTemplate(id: string, data: UpdateKGInstanceTemplateRequest): Promise<KGInstanceTemplate>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:111

Updates a knowledge graph instance template.

Modifies the template's schema or metadata. Existing instances
created from this template are not automatically updated.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the template to update |
| `data` | `UpdateKGInstanceTemplateRequest` | The fields to update |

#### Returns

`Promise`\<`KGInstanceTemplate`\>

A promise that resolves to the updated KGInstanceTemplate

#### Example

```typescript
const updated = await client.knowledgeGraph.updateInstanceTemplate('tmpl-123', {
  name: 'updated-schema',
});
```

***

### updateRecord()

```ts
updateRecord(
   id: string, 
   recordId: string, 
data: UpdateKGRecordRequest): Promise<KGRecord>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:291

Updates a record in a knowledge graph instance.

Modifies the record's properties or type. Only the fields provided
in the request body are updated.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the graph instance |
| `recordId` | `string` | The unique identifier of the record to update |
| `data` | `UpdateKGRecordRequest` | The fields to update on the record |

#### Returns

`Promise`\<`KGRecord`\>

A promise that resolves to the updated KGRecord

#### Example

```typescript
const updated = await client.knowledgeGraph.updateRecord('kg-456', 'rec-789', {
  properties: { name: 'computeTotal' },
});
```

***

### updateViewTemplate()

```ts
updateViewTemplate(id: string, data: UpdateKGViewTemplateRequest): Promise<KGViewTemplate>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/knowledge-graph.api.ts:454

Updates a view template.

Modifies the template's query definition or metadata. Existing
views created from this template are not automatically updated.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the view template to update |
| `data` | `UpdateKGViewTemplateRequest` | The fields to update |

#### Returns

`Promise`\<`KGViewTemplate`\>

A promise that resolves to the updated KGViewTemplate

#### Example

```typescript
const updated = await client.knowledgeGraph.updateViewTemplate('vtmpl-123', {
  name: 'deep-calls',
});
```
