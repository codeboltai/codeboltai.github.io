---
title: Memory Ingestion MCP
sidebar_label: codebolt.memoryIngestion
sidebar_position: 54
---

# codebolt.memoryIngestion

Memory ingestion pipeline tools for creating and executing automated data processing pipelines. Pipelines can ingest data from various sources, process it through multiple steps, and store it in memory systems.

## Available Tools

- `memoryIngestion_create` - Creates a new memory ingestion pipeline with source and processors
- `memoryIngestion_execute` - Executes an existing memory ingestion pipeline

## Tool Parameters

### memoryIngestion_create

Creates a new memory ingestion pipeline configuration that defines how data should be ingested from a source and processed through a series of steps before being stored in memory.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| pipelineId | string | Yes | Unique identifier for the pipeline. Used to reference this pipeline when executing it later. |
| label | string | Yes | Human-readable name for the pipeline. This should be a descriptive label that helps identify the pipeline's purpose. |
| description | string | No | Detailed description of what the pipeline does, what data it processes, and its intended use case. |
| source | object | Yes | Configuration object defining the data source for the pipeline. Must include a `type` property indicating the source type (e.g., 'file', 'database', 'api', 'webhook'). Additional properties vary based on source type. |
| processors | array | Yes | Array of processor objects that define the transformation steps applied to the ingested data. Each processor must have a `type` property indicating the processor type (e.g., 'cleaner', 'transformer', 'normalizer'). Additional properties vary based on processor type. |
| explanation | string | No | Explanation or rationale for the pipeline configuration, useful for documentation and LLM context. |

### memoryIngestion_execute

Executes a previously created memory ingestion pipeline, processing data from the configured source through all defined processors.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| pipelineId | string | Yes | The unique identifier of the pipeline to execute. Must reference a pipeline that was previously created using `memoryIngestion_create`. |
| inputData | any | No | Optional input data to process instead of using the pipeline's configured source. When provided, this data is used directly, bypassing the source configuration. The structure should match what the processors expect. |
| explanation | string | No | Explanation or context for this specific execution, useful for logging and audit trails. |

## Sample Usage

### Creating a Simple File Ingestion Pipeline

```javascript
await codebolt.memoryIngestion.create({
    pipelineId: 'customer-data-pipeline',
    label: 'Customer Data Ingestion',
    description: 'Ingests customer data from CSV files and processes it for storage',
    source: {
        type: 'file',
        format: 'csv',
        path: '/data/customers.csv'
    },
    processors: [
        {
            type: 'cleaner',
            rules: ['removeNulls', 'trimWhitespace']
        },
        {
            type: 'transformer',
            mappings: {
                'full_name': ['first_name', 'last_name']
            }
        }
    ],
    explanation: 'Pipeline for ingesting customer data from daily CSV exports'
});
```

### Creating a Database Ingestion Pipeline

```javascript
await codebolt.memoryIngestion.create({
    pipelineId: 'product-catalog-pipeline',
    label: 'Product Catalog Sync',
    description: 'Syncs product catalog from external database to memory',
    source: {
        type: 'database',
        connection: 'product_db',
        query: 'SELECT * FROM products WHERE active = true'
    },
    processors: [
        {
            type: 'normalizer',
            fields: ['price', 'weight', 'dimensions']
        },
        {
            type: 'enricher',
            enrichFrom: 'reference_data',
            matchOn: 'sku'
        }
    ]
});
```

### Creating an API Data Ingestion Pipeline

```javascript
await codebolt.memoryIngestion.create({
    pipelineId: 'weather-data-pipeline',
    label: 'Weather Data Collector',
    description: 'Collects weather data from external API and processes metrics',
    source: {
        type: 'api',
        endpoint: 'https://api.weather.example.com/data',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer {API_KEY}'
        }
    },
    processors: [
        {
            type: 'filter',
            condition: 'temperature > 0'
        },
        {
            type: 'aggregator',
            groupBy: ['location'],
            aggregations: {
                'avg_temperature': 'avg',
                'max_humidity': 'max'
            }
        }
    ]
});
```

### Executing a Pipeline with Custom Data

```javascript
// Execute pipeline with its configured source
await codebolt.memoryIngestion.execute({
    pipelineId: 'customer-data-pipeline',
    explanation: 'Daily scheduled ingestion run'
});

// Execute pipeline with custom input data
await codebolt.memoryIngestion.execute({
    pipelineId: 'customer-data-pipeline',
    inputData: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ],
    explanation: 'Processing manually uploaded customer data'
});
```

:::info
**Pipeline Sources:** Common source types include `file` (CSV, JSON, XML), `database` (SQL queries, table sync), `api` (REST endpoints), `webhook` (real-time data), and `stream` (Kafka, RabbitMQ).

**Processor Types:** Available processors include `cleaner` (data validation and cleaning), `transformer` (field mapping and conversion), `normalizer` (format standardization), `filter` (conditional filtering), `aggregator` (data summarization), `enricher` (adding contextual data), and `deduplicator` (removing duplicates).

**Execution:** When `inputData` is provided during execution, it bypasses the pipeline's source configuration and directly processes the supplied data, useful for ad-hoc processing tasks.
:::
