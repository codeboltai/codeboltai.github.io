yes---
sidebar_position: 7
title: "UI Guide"
---

# Memory Management UI Guide

Codebolt provides nine dedicated memory panels for creating, configuring, querying, and inspecting every layer of the memory system. This guide walks through each panel's layout, controls, and workflows.

## Accessing Memory Panels

1. Click the **Context** button (Database icon) in the bottom bar of the Codebolt editor.
2. A searchable popover appears listing all nine memory panels.
3. Click any panel name to open it as a **dockview tab** that you can drag, split, or pin alongside your code.

The panels fall into three groups:

| Group | Panels |
|-------|--------|
| **Storage Panels** | Vector DB, Knowledge, Knowledge Graph, KV Store, Event Log, Memory (General) |
| **Write Path** | Memory Ingestion |
| **Read Path** | Persistent Memory, Context Assembly |

---

## Storage Panels

### Vector DB

**Panel structure:** Collection list → Collection detail with three tabs (Chunks, Query, Settings).

#### Create Collection

Click the **"+"** button in the collection list header. Fill in the creation form:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Unique collection name |
| `description` | string | No | Human-readable description |

The collection automatically uses the project's configured embedding model.

#### Add Chunks

1. Open a collection and switch to the **Chunks** tab.
2. Click **"Add Chunk"**.
3. Fill in the form:
   - **`content`** (text, required) — The raw text to embed and store.
   - **`documentId`** (string, optional) — Associates the chunk with a logical document.
4. Chunks are stored with auto-generated embeddings based on the collection's embedding model.

#### Query

1. Switch to the **Query** tab.
2. Enter a natural-language query in the search box.
3. Configure options:
   - **`topK`** — Number of results to return.
   - **`minScore`** — Similarity threshold between 0 and 1.
4. Results display matching chunks alongside their similarity scores.

#### Settings

The **Settings** tab lets you configure:

- Embedding model
- Chunk size
- Chunk overlap
- Search parameters

#### REST Endpoints

```
POST   /vectorDB/collections
GET    /vectorDB/collections
POST   /vectorDB/collections/:id/documents
POST   /vectorDB/collections/:id/query
GET    /vectorDB/collections/:id/settings
PUT    /vectorDB/collections/:id/settings
```

---

### Knowledge

**Panel structure:** Collection list → Documents list → Document with Chunks.

#### Create Collection

Click **"+"**, enter a name and description.

#### Add Document

Three modes are available when adding a document:

1. **File** — Enter a document name, paste content, and set the MIME type.
2. **URL** — Enter a URL; content is auto-fetched and extracted.
3. **Text** — Enter a name and raw text content.

Document processing is asynchronous. Status progresses through:

```
pending → processing → completed
```

#### Chunking Settings

Chunking settings are configured per-collection. Six strategies are available:

| Strategy | Description |
|----------|-------------|
| `fixed_size` | Fixed character/token count with configurable overlap |
| `recursive` | Hierarchical splitting by separators (`\n\n`, `\n`, `". "`, `" "`) |
| `semantic` | Groups content by semantic similarity at paragraph/sentence boundaries |
| `sentence` | Groups N sentences per chunk |
| `paragraph` | Groups N paragraphs per chunk |
| `markdown` | Preserves code blocks, lists, and heading hierarchy |

#### Additional Actions

- **Rechunk** — Re-process a document with updated chunking settings.
- **Edit Chunks** — Click any chunk to edit its content inline.

#### REST Endpoints

```
POST   /knowledge/collections
GET    /knowledge/collections
POST   /knowledge/collections/:id/documents
POST   /knowledge/collections/:id/documents/url
GET    /knowledge/collections/:id/settings
PUT    /knowledge/collections/:id/settings
```

---

### Knowledge Graph

**Panel structure:** Two main tabs — **Instances** and **Views**.

#### Create Instance Template (Schema Definition)

Instance templates define the schema for a knowledge graph instance.

1. Open the **Instance Templates** sub-tab and click **"+"**.
2. Toggle between **Visual Builder** and **JSON Editor** modes.

##### Visual Builder (InstanceTemplateSchemaBuilder)

**Record Kinds** (node types):

- Add record kinds, each with a name and a set of fields.
- Each field has:

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Field name |
| `type` | Kuzu type | Data type (see below) |
| `required` | boolean | Whether the field is mandatory |
| `description` | string | Optional description |

- Supported Kuzu field types: `STRING`, `INT64`, `INT32`, `INT16`, `INT8`, `UINT64`, `UINT32`, `UINT16`, `UINT8`, `DOUBLE`, `FLOAT`, `BOOL`, `DATE`, `TIMESTAMP`, `INTERVAL`, `UUID`, `LIST` (requires `itemType`), `MAP`, `STRUCT`, `BLOB`.
- Reserved field names (auto-provided, do not redefine): `id`, `name`, `kind`, `memory_instance_id`, `attributes`, `valid_from`, `valid_to`, `created_at`.

**Edge Types** (relationships):

- Each edge definition includes:

| Property | Description |
|----------|-------------|
| `kind` | Edge type name |
| `from` | Source record kind |
| `to` | Target record kind |
| `description` | Optional description |

##### JSON Editor

Direct JSON editing of the template schema for advanced use cases.

#### Create Instance

Select a template, then enter an instance name and description.

#### Add Records

Navigate to an instance → **Records** tab. Add nodes by specifying:

- **kind** — The record kind from the template
- **name** — Node name
- **attributes** — Typed attribute values matching the record kind's field definitions

#### Add Edges

Navigate to an instance → **Edges** tab. Create relationships between existing nodes.

#### Create View Template (ViewTemplateSchemaBuilder)

View templates define reusable queries against knowledge graph instances. The builder provides a Cypher-like query interface:

| Clause | Purpose |
|--------|---------|
| `MATCH` | Record kind + alias |
| `Patterns` | Edge traversal expressions |
| `WHERE` | Filter conditions |
| `WITH` | Computed expressions |
| `ORDER BY` | Sort order |
| `SKIP` | Offset for pagination |
| `LIMIT` | Maximum results |
| `RETURN` | Output field selection |

#### Execute View

Select a view on an instance to run the query and see tabular results.

#### Graph Viewer

Visual graph rendering with interactive exploration:

- **NodeInspector** — View node details on hover or click.
- **EdgeInspector** — View edge details.
- **NodeDetailPanel** — Full detail panel for a selected node.
- Supports subgraph retrieval and node expansion for navigating large graphs.

#### REST Endpoints

```
POST   /kg/instance-templates
GET    /kg/instance-templates
POST   /kg/instances
GET    /kg/instances
POST   /kg/instances/:id/records
GET    /kg/instances/:id/records
POST   /kg/instances/:id/edges
GET    /kg/instances/:id/edges
POST   /kg/view-templates
GET    /kg/view-templates
POST   /kg/views
GET    /kg/views
GET    /kg/views/:id/execute
```

---

### KV Store

**Panel structure:** Instance list → Instance detail with namespace tabs.

#### Create Instance

Click **"+"**, enter a name and optional description.

#### Add Key-Value Pair

Use the inline form in the detail view:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `namespace` | string | Yes | Logical grouping for keys |
| `key` | string | Yes | Unique within its namespace |
| `value` | any | Yes | Supports JSON objects or plain strings |

#### Working with Data

- **Edit Value** — Click any record to edit its value inline.
- **Delete** — Delete individual keys or entire namespaces.
- **Namespace Navigation** — Tabs at the top of the detail view switch between namespaces.

Real-time updates via **WebSocket** — changes from the SDK or other clients appear instantly.

#### REST Endpoints

```
POST   /kvstore/instances
GET    /kvstore/instances
POST   /kvstore/kv                              # set a key-value pair
GET    /kvstore/kv/:instanceId/:namespace/:key
DELETE /kvstore/kv/:instanceId/:namespace/:key
POST   /kvstore/query
```

---

### Event Log

**Panel structure:** Instance list → Instance detail with event list and filter panel.

#### Create Instance

Click **"+"**, enter a name and optional description.

#### Append Event

Use the inline form:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `event_type` | string | Yes | Event category, e.g. `"user.login"`, `"task.completed"` |
| `stream_id` | string | No | Groups related events into a stream |
| `payload` | JSON | Yes | The event data |
| `metadata` | JSON | No | Additional context |

Events are **append-only and immutable** — they cannot be edited or deleted after creation.

#### Filter Events

The filter panel supports filtering by:

- **Event type**
- **Stream ID**

#### Query Modes

| Mode | Description |
|------|-------------|
| **Query** | Standard filtering with time range, ordering, and pagination |
| **Reduce** | Derive entity state from an event stream using strategies: `last`, `first`, `count`, `exists` |

Real-time updates via **WebSocket** — new events appear as they are appended.

#### REST Endpoints

```
POST   /eventlog/instances
GET    /eventlog/instances
POST   /eventlog/events
POST   /eventlog/events/batch
POST   /eventlog/query
```

---

### Memory (General)

**Panel structure:** Thread list with a type filter dropdown.

#### Create Thread

Click the **"+"** dropdown and select one of five thread types:

| Type | Description |
|------|-------------|
| `todo` | Checklist with status management (pending / processing / completed) |
| `markdown` | Rich text notes with markdown editor and preview |
| `json` | Structured JSON records with code editor and validation |
| `context` | Context-specific memory threads |
| `episodic` | Structured event timeline with typed events |

#### Thread Type Workflows

**Todo Threads:**
- Inline add form — type a title and press Enter.
- Toggle status per item (pending → processing → completed).
- Delete individual items.

**Markdown Threads:**
- Toggle between **Edit** (textarea) and **Preview** (rendered markdown).

**JSON Threads:**
- Toggle between **Edit** (code editor with syntax highlighting) and **Preview** (formatted JSON).

#### Thread Management

- **Inline title editing** — Click the thread title to rename it.
- **Archive threads** — Move inactive threads out of the main list.
- **View type selector** — Switch between Preview, Pinned, and Unique views.

---

## Write Path

### Memory Ingestion

**Panel structure:** Pipeline list → Pipeline detail → PipelineBuilder (create/edit).

#### Create Pipeline

Click **"+"** to open the **PipelineBuilder**, which contains collapsible accordion sections.

---

#### Section 1 — Basic Information

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique pipeline identifier (immutable after creation) |
| `label` | string | Yes | Human-readable name |
| `description` | string | No | What this pipeline does |
| `trigger` | dropdown | Yes | Event type that fires this pipeline |

**Trigger categories and event types:**

| Category | Event Types |
|----------|-------------|
| Conversation | `conversation:started`, `conversation:ended`, `conversation:message:added` |
| Task | `task:created`, `task:started`, `task:completed`, `task:failed` |
| Job | `job:created`, `job:status:changed`, `job:assigned`, etc. |
| Swarm | `swarm:started`, `swarm:finished`, `swarm:agent:spawned`, etc. |
| Agent | `agent:started`, `agent:completed`, `agent:error` |
| File | `file:created`, `file:updated`, `file:deleted` |
| Git | `git:commit`, `git:push` |
| Manual | `manual` (triggered via API only) |

After selecting a trigger, the **Available Fields** section displays the event schema fields.

---

#### Section 2 — Trigger Filter (TriggerFilterEditor)

Optional conditions that narrow which events actually fire the pipeline.

- Each condition row: **Field** (dropdown from event schema) → **Operator** (filtered by field type) → **Value**.
- **Debounce** option (milliseconds) to prevent rapid re-triggering.

---

#### Section 3 — Processors

Add processors from a palette of eight types, color-coded by category:

| Processor | Category | Purpose | Key Parameters |
|-----------|----------|---------|----------------|
| `blob_store` | Storage | Store raw data | `bucket`, `metadata` |
| `chunker` | Transform | Split text into chunks | `chunk_size`, `overlap`, `separator` |
| `vector_embed` | Transform | Generate vector embeddings | `model`, `batch_size` |
| `llm_extract` | Extraction | Extract entities via LLM | `prompt_template`, `output_schema`, `model`, `temperature` |
| `llm_extract_kb` | Extraction | Extract for knowledge base | `prompt`, `output_format`, `kg_template_id` |
| `parser` | Transform | Parse structured formats | `format` (`json`/`xml`/`yaml`), `path` |
| `normalizer` | Transform | Clean and normalize data | `lowercase`, `trim`, `remove_nulls` |
| `custom` | Custom | Arbitrary logic | `handler`, `actionBlockPath`, or `inlineCode` |

Each processor has:

- **`id`** — Unique identifier within the pipeline.
- **`input`** — Reference to the event payload or a previous processor's output.
- **`output`** — Name for this processor's result, available to subsequent processors.

Processors execute **sequentially** — each can reference the outputs of all previous processors.

---

#### Section 4 — Routing

Map processor outputs to storage destinations. Each routing rule specifies:

- **`from`** — Select a processor output.
- **Destination type + config:**

| Destination | Config Fields |
|-------------|---------------|
| Knowledge Graph | `instance`, `record_kind`, `edge_kind` (optional), `template_id` |
| Vector Database | `collection`, `metadata` (optional) |
| Key-Value Store | `namespace`, `key_template`, `instanceId` |
| Blob Storage | `bucket`, `path_template` |
| Event Log | `event_type`, `instanceId` |

Additional options:

- **`foreach`** toggle — Iterate over array outputs, writing one record per item.
- **`condition`** (optional) — Expression to conditionally route data.

---

#### Pipeline Actions

- **Validate** — Check the pipeline configuration for errors before saving.
- **Activate / Disable** — Toggle pipeline status. Only active pipelines fire on events.
- **Duplicate** — Clone an existing pipeline as a starting point for a new one.

#### REST Endpoints

```
GET    /memory-ingestion/pipelines
POST   /memory-ingestion/pipelines
POST   /memory-ingestion/pipelines/:id/execute
POST   /memory-ingestion/pipelines/:id/activate
POST   /memory-ingestion/pipelines/:id/disable
POST   /memory-ingestion/validate
GET    /memory-ingestion/processors
```

---

## Read Path

### Persistent Memory

**Panel structure:** Memory type list → Memory type detail → MemoryTypeBuilder (create/edit).

#### Create Memory Type

Click **"+"** to open the **MemoryTypeBuilder** with collapsible accordion sections.

---

#### Section 1 — Basic Information

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique memory type identifier |
| `label` | string | Yes | Human-readable name |
| `description` | string | No | What this memory retrieves |

---

#### Section 2 — Input Scopes

Select scopes using checkbox pills. Each scope provides standard variables:

| Scope | Variables |
|-------|-----------|
| `swarm` | `swarm_id`, `swarm_name` |
| `agent` | `agent_id`, `agent_name`, `agent_type` |
| `project` | `project_id`, `project_path` |
| `orchestrator` | `orchestrator_id` |
| `thread` | `thread_id` |
| `task` | `task_id`, `task_type` |
| `user` | `user_id` |
| `org` | `org_id` |

Selected scopes determine which variables are available for template substitution in the retrieval pipeline.

---

#### Section 3 — Available Variables

Displays **`query`** (always available) plus all scope-derived variables.

**Add Additional Variables:**
- Click "Add Variable" to define custom variables.
- Each variable has: `name` (lowercase alphanumeric + underscores), `description` (optional), and a `required` toggle.
- Reference variables in pipeline parameters as `${variable_name}`.

---

#### Section 4 — Retrieval Pipeline

An embedded pipeline builder with 21 step types across eight categories:

| Category | Steps | Purpose |
|----------|-------|---------|
| **Input** | `derive_query`, `rewrite_query` | Form the search query from intent and variables |
| **Retrieval** | `vector_search`, `graph_view_read`, `kv_get`, `log_search` | Fetch data from storage layers |
| **Expansion** | `graph_view_expand`, `graph_neighbor_expand` | Traverse graph relationships |
| **Filter** | `filter`, `deduplicate` | Remove unwanted or duplicate results |
| **Aggregation** | `group_by`, `reduce_latest`, `merge` | Combine and consolidate results |
| **Ranking** | `rank`, `score` | Order results by relevance |
| **Transform** | `summarize`, `format`, `annotate` | Shape the final output |
| **Control** | `conditional`, `early_exit` | Branch or stop pipeline execution |

Each step has:
- **`type`** — The step type from the table above.
- **`alias`** (optional) — A human-friendly name for the step.
- **Type-specific parameters** — Vary by step type.

Steps execute **sequentially** — each can reference the results of all previous steps.

---

#### Section 5 — Context Contribution

Configure how this memory type contributes to assembled context:

| Field | Options | Description |
|-------|---------|-------------|
| `section` | `state`, `warnings`, `knowledge`, `history`, `constraints`, `suggestions`, `working_memory` | Where this memory appears in the assembled context |
| `priority` | `low` (1), `medium` (2), `high` (3), `critical` (4) | Ordering weight within the section |
| `format` | `bullet_list`, `numbered`, `prose`, `json` | Output format |
| `max_items` | number | Maximum items to include |

#### REST Endpoints

```
GET    /persistent-memory/types
POST   /persistent-memory/types
GET    /persistent-memory/step-specs
POST   /persistent-memory/types/:id/execute
POST   /persistent-memory/validate
```

---

### Context Assembly

**Panel structure:** Rule Engine list → View / Builder / Run / Result views.

#### Create Rule Engine

Click **"+"** to open the **RuleEngineBuilder**.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique engine identifier |
| `name` | string | Yes | Human-readable name |
| `description` | string | No | What this engine does |
| `enabled` | toggle | — | Whether this engine participates in assembly |

---

#### Adding Rules

Each rule is a collapsible card with three parts:

##### Rule Name

A descriptive label for the rule.

##### When (Conditions)

One or more conditions that must **all** match for the rule to fire.

Each condition row:

| Element | Options |
|---------|---------|
| **Variable** (dropdown) | **Scope variables:** `scope.swarm.swarm_id`, `scope.swarm.swarm_name`, `scope.project.project_id`, `scope.project.project_path`, `scope.agent.agent_id`, `scope.agent.agent_name`, `scope.agent.agent_type`, `scope.thread.thread_id`, `scope.task.task_id`, `scope.task.task_type`, `scope.user.user_id`, `scope.org.org_id`, `scope.orchestrator.orchestrator_id` — **Additional variables:** `addVar.phase`, `addVar.query` — **Custom:** enter any variable path |
| **Operator** (dropdown) | `exists`, `not_exists`, `eq`, `neq`, `in`, `not_in`, `contains`, `starts_with`, `ends_with`, `gt`, `gte`, `lt`, `lte` |
| **Value** (input) | Comparison value (optional for `exists` / `not_exists`) |

##### Then Add Memories

- Pill-style selector showing available Persistent Memory types.
- Click **"+Add Memory"** to open a dropdown of all memory types.
- Selected memories appear as removable pills.

An auto-computed **Scopes & Variables Required** section shows what the assembly request must provide for the rule to evaluate.

---

#### Run / Assembly Request Builder (AssemblyRequestBuilder)

Smart requirement detection pre-populates required scope toggles based on rule conditions.

| Section | Controls |
|---------|----------|
| **Scope Selection** | Toggle checkboxes for each scope. Required scopes (detected from rules) cannot be unchecked. |
| **Scope Variables** | Input fields for each variable in the selected scopes. |
| **Additional Variables** | Input fields for `phase`, `query`, and custom variables. |
| **Explicit Memory** | Manually add specific memory types beyond what rules select. |
| **Constraints** | `max_tokens` (number) — Token budget for the assembled context. |

Action buttons:

- **Validate** — Check the request before execution.
- **Assemble** — Execute context assembly.

---

#### Assembled Context Viewer (AssembledContextViewer)

Displays the assembled context grouped by section (`state`, `warnings`, `knowledge`, `history`, `constraints`, `suggestions`, `working_memory`).

**Trace panel:**
- Which memories were called.
- Which rules matched.
- Which variables were used.
- Any missing variables.

**Meta panel:**
- Token estimate.
- Total items.
- Truncation status.
- Duration.

**Real-time progress** via WebSocket — shows the current memory being processed with a progress bar. A WebSocket connection indicator (green/gray wifi icon) appears in the panel header.

#### REST Endpoints

```
GET    /context-rule-engine
POST   /context-rule-engine
POST   /context-rule-engine/:id/evaluate
POST   /context-assembly/assemble
POST   /context-assembly/validate
GET    /context-assembly/memory-types
POST   /context-assembly/required-variables
```

---

## REST API Quick Reference

| Component | Base Path | Key Endpoints |
|-----------|-----------|---------------|
| Vector DB | `/vectorDB` | `GET/POST /collections`, `POST /collections/:id/documents`, `POST /collections/:id/query`, `GET/PUT /collections/:id/settings` |
| Knowledge | `/knowledge` | `GET/POST /collections`, `POST /collections/:id/documents`, `POST /collections/:id/documents/url`, `GET/PUT /collections/:id/settings` |
| Knowledge Graph | `/kg` | `GET/POST /instance-templates`, `GET/POST /instances`, `POST /instances/:id/records`, `POST /instances/:id/edges`, `GET/POST /view-templates`, `GET /views/:id/execute` |
| KV Store | `/kvstore` | `GET/POST /instances`, `POST /kv` (set), `GET/DELETE /kv/:id/:ns/:key`, `POST /query` |
| Event Log | `/eventlog` | `GET/POST /instances`, `POST /events`, `POST /events/batch`, `POST /query` |
| Memory Ingestion | `/memory-ingestion` | `GET/POST /pipelines`, `POST /pipelines/:id/execute`, `POST /validate`, `GET /processors` |
| Persistent Memory | `/persistent-memory` | `GET/POST /types`, `POST /types/:id/execute`, `POST /validate`, `GET /step-specs` |
| Context Assembly | `/context-assembly` | `POST /assemble`, `POST /validate`, `GET /memory-types`, `POST /evaluate-rules` |
| Context Rule Engine | `/context-rule-engine` | `GET/POST /`, `POST /:id/evaluate`, `GET /variables` |
