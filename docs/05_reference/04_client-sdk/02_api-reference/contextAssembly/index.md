---
cbapicategory:
  - name: assemble
    link: /docs/reference/client-sdk/api-reference/contextAssembly/assemble
    description: "Assembles context from multiple sources.

Gathers and merges data from configured context sources (memory types,
rules, files) into a single unified context object for agent consumption."
  - name: evaluateRules
    link: /docs/reference/client-sdk/api-reference/contextAssembly/evaluateRules
    description: "Evaluates context rules against provided data.

Runs the configured context rules to determine which context
sources should be included based on the current state."
  - name: getMemoryTypes
    link: /docs/reference/client-sdk/api-reference/contextAssembly/getMemoryTypes
    description: "Retrieves available memory types for context assembly.

Returns the list of memory type sources that can be used when
assembling context (e.g., episodic, semantic, working memory)."
  - name: getRequiredVariables
    link: /docs/reference/client-sdk/api-reference/contextAssembly/getRequiredVariables
    description: "Retrieves required variables for a context assembly configuration.

Returns the list of variable names that must be provided when
assembling context with the given configuration."
  - name: validate
    link: /docs/reference/client-sdk/api-reference/contextAssembly/validate
    description: "Validates a context assembly configuration.

Checks that the provided assembly configuration is valid and all
referenced sources and rules exist before execution."
---
# ContextAssembly API

Context Assembly API

<CBAPICategory />

## Methods

- [`assemble()`](./assemble) — Assembles context from multiple sources.

Gathers and merges data from configured context sources (memory types,
rules, files) into a single unified context object for agent consumption.
- [`evaluateRules()`](./evaluateRules) — Evaluates context rules against provided data.

Runs the configured context rules to determine which context
sources should be included based on the current state.
- [`getMemoryTypes()`](./getMemoryTypes) — Retrieves available memory types for context assembly.

Returns the list of memory type sources that can be used when
assembling context (e.g., episodic, semantic, working memory).
- [`getRequiredVariables()`](./getRequiredVariables) — Retrieves required variables for a context assembly configuration.

Returns the list of variable names that must be provided when
assembling context with the given configuration.
- [`validate()`](./validate) — Validates a context assembly configuration.

Checks that the provided assembly configuration is valid and all
referenced sources and rules exist before execution.
