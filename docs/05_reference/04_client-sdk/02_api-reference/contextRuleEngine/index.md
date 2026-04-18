---
cbapicategory:
  - name: create
    link: /docs/reference/client-sdk/api-reference/contextRuleEngine/create
    description: "Creates a new context rule.

Registers a new rule with the system using the provided configuration.
The rule can be configured with conditions, priority, and actions to
execute when the rule matches."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/contextRuleEngine/delete
    description: "Deletes a context rule from the system.

Permanently removes the specified rule. Any behavior or logic dependent
on this rule will no longer be executed. This operation cannot be undone."
  - name: evaluate
    link: /docs/reference/client-sdk/api-reference/contextRuleEngine/evaluate
    description: "Evaluates all context rules against provided data.

Runs every rule in the system against the supplied context data and
returns the evaluation results. Useful for batch testing or determining
which rules would trigger in a given scenario."
  - name: evaluateRule
    link: /docs/reference/client-sdk/api-reference/contextRuleEngine/evaluateRule
    description: "Evaluates a specific rule against provided data.

Runs a single rule evaluation against the supplied context data and
returns whether the rule matched and what actions should be executed.
Useful for testing individual rules or targeted evaluation."
  - name: get
    link: /docs/reference/client-sdk/api-reference/contextRuleEngine/get
    description: "Retrieves a specific context rule by its unique identifier.

Returns detailed information about a single rule including its
conditions, actions, metadata, and evaluation configuration."
  - name: getVariables
    link: /docs/reference/client-sdk/api-reference/contextRuleEngine/getVariables
    description: "Retrieves all available variables for rule evaluation.

Returns the list of context variables that can be referenced in rule
conditions. Each variable includes its type, description, and available
values, helping developers construct valid rule expressions."
  - name: list
    link: /docs/reference/client-sdk/api-reference/contextRuleEngine/list
    description: "Lists all available context rules in the system.

Returns every context rule regardless of status or category. Use this
for comprehensive rule browsing or to populate rule management UIs."
  - name: update
    link: /docs/reference/client-sdk/api-reference/contextRuleEngine/update
    description: "Updates an existing context rule.

Modifies the properties, conditions, or actions of a rule identified
by its ID. Use this to make incremental changes to a rule without
recreating it from scratch."
---
# ContextRuleEngine API

Context Rule Engine API

<CBAPICategory />

## Methods

- [`create()`](./create) — Creates a new context rule.

Registers a new rule with the system using the provided configuration.
The rule can be configured with conditions, priority, and actions to
execute when the rule matches.
- [`delete()`](./delete) — Deletes a context rule from the system.

Permanently removes the specified rule. Any behavior or logic dependent
on this rule will no longer be executed. This operation cannot be undone.
- [`evaluate()`](./evaluate) — Evaluates all context rules against provided data.

Runs every rule in the system against the supplied context data and
returns the evaluation results. Useful for batch testing or determining
which rules would trigger in a given scenario.
- [`evaluateRule()`](./evaluateRule) — Evaluates a specific rule against provided data.

Runs a single rule evaluation against the supplied context data and
returns whether the rule matched and what actions should be executed.
Useful for testing individual rules or targeted evaluation.
- [`get()`](./get) — Retrieves a specific context rule by its unique identifier.

Returns detailed information about a single rule including its
conditions, actions, metadata, and evaluation configuration.
- [`getVariables()`](./getVariables) — Retrieves all available variables for rule evaluation.

Returns the list of context variables that can be referenced in rule
conditions. Each variable includes its type, description, and available
values, helping developers construct valid rule expressions.
- [`list()`](./list) — Lists all available context rules in the system.

Returns every context rule regardless of status or category. Use this
for comprehensive rule browsing or to populate rule management UIs.
- [`update()`](./update) — Updates an existing context rule.

Modifies the properties, conditions, or actions of a rule identified
by its ID. Use this to make incremental changes to a rule without
recreating it from scratch.
