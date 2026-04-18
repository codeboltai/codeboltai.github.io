---
title: Context Assembly MCP
sidebar_label: codebolt.contextAssembly
sidebar_position: 74
---

# codebolt.contextAssembly

Context assembly tools for building, validating, and retrieving context from multiple memory sources. These tools enable agent context management through rule-based evaluation, memory type discovery, and flexible context assembly with configurable constraints.

## Available Tools

### Core Context Operations

- `context_get` - Assembles context from various memory sources based on the provided request
- `context_validate` - Validates a context assembly request and returns validation errors if any

### Context Discovery and Inspection

- `context_list_memory_types` - Lists all available memory types that can be used in context assembly
- `context_get_required_variables` - Gets required variables for specific memory types

### Rule Evaluation

- `context_evaluate_rules` - Evaluates rules only without fetching memory content. Optionally specify rule engine IDs

## Tool Parameters

### Core Context Operations

#### `context_get`

Assembles context from various memory sources based on the provided request. Returns assembled context with contributions from memory sources.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| request | object | Yes | Context assembly request (see Context Assembly Request structure below) |

**Context Assembly Request Structure:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| scope_variables | object | Yes | Key-value pairs defining the scope/context for the assembly |
| additional_variables | object | No | Additional variables for memory configuration |
| input | string | No | Optional input string to guide context assembly |
| explicit_memory | string[] | No | Array of specific memory IDs to include |
| constraints | object | No | Constraints on the assembly process (see Constraints below) |
| rule_engine_ids | string[] | No | Optional array of rule engine IDs to apply |

**Constraints Structure:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| max_tokens | number | No | Maximum number of tokens in the assembled context |
| max_sources | number | No | Maximum number of memory sources to include |
| timeout_ms | number | No | Maximum time in milliseconds for assembly |

#### `context_validate`

Validates a context assembly request and returns validation errors if any.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| request | object | Yes | Request to validate (same structure as context_get request) |

### Context Discovery and Inspection

#### `context_list_memory_types`

Lists all available memory types that can be used in context assembly.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | - | - | No parameters required |

#### `context_get_required_variables`

Gets required variables for specific memory types.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| memoryNames | string[] | Yes | Array of memory type names to get required variables for |

### Rule Evaluation

#### `context_evaluate_rules`

Evaluates rules only without fetching memory content. Useful for pre-processing or rule-based filtering.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| request | object | Yes | Context assembly request |
| ruleEngineIds | string[] | No | Optional specific rule engine IDs to evaluate |

## Sample Usage

### Basic Context Assembly

```javascript
// Assemble context from multiple memory sources
const contextResult = await codebolt.tools.executeTool(
  "codebolt.contextAssembly",
  "context_get",
  {
    request: {
      scope_variables: {
        user_id: "user-123",
        session_id: "session-456"
      },
      input: "What are the recent project updates?",
      constraints: {
        max_tokens: 2000,
        max_sources: 5,
        timeout_ms: 5000
      }
    }
  }
);
```

### Context Validation

```javascript
// Validate a context assembly request before execution
const validationResult = await codebolt.tools.executeTool(
  "codebolt.contextAssembly",
  "context_validate",
  {
    request: {
      scope_variables: {
        user_id: "user-123",
        project_id: "project-789"
      },
      explicit_memory: ["mem-001", "mem-002"]
    }
  }
);
```

### Memory Type Discovery

```javascript
// List all available memory types
const memoryTypesResult = await codebolt.tools.executeTool(
  "codebolt.contextAssembly",
  "context_list_memory_types",
  {}
);

// Get required variables for specific memory types
const requiredVarsResult = await codebolt.tools.executeTool(
  "codebolt.contextAssembly",
  "context_get_required_variables",
  {
    memoryNames: ["vectordb", "kv", "eventlog"]
  }
);
```

### Rule-Based Evaluation

```javascript
// Evaluate rules without fetching memory content
const ruleEvalResult = await codebolt.tools.executeTool(
  "codebolt.contextAssembly",
  "context_evaluate_rules",
  {
    request: {
      scope_variables: {
        user_id: "user-123",
        action: "review"
      },
      additional_variables: {
        priority: "high",
        category: "security"
      }
    },
    ruleEngineIds: ["rule-engine-1", "rule-engine-2"]
  }
);
```

### Advanced Context Assembly with Rules

```javascript
// Complex context assembly with explicit memories and rules
const advancedContextResult = await codebolt.tools.executeTool(
  "codebolt.contextAssembly",
  "context_get",
  {
    request: {
      scope_variables: {
        user_id: "user-123",
        workspace: "main"
      },
      input: "Analyze the security vulnerabilities",
      explicit_memory: ["sec-policy-001", "threat-model-002"],
      constraints: {
        max_tokens: 3000,
        max_sources: 10,
        timeout_ms: 10000
      },
      rule_engine_ids: ["security-rules", "compliance-rules"]
    }
  }
);
```

:::info
Context assembly enables intelligent context building by combining data from multiple memory sources including vectordb, key-value stores, event logs, and knowledge graphs. The system supports rule-based filtering, explicit memory selection, and configurable constraints for token limits and timeouts. Memory types define their required scope variables and additional parameters, allowing flexible and dynamic context assembly based on the current request context.
:::
