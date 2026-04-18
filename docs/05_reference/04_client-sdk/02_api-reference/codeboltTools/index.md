---
cbapicategory:
  - name: execute
    link: /docs/reference/client-sdk/api-reference/codeboltTools/execute
    description: "Executes a CodeBolt tool with the provided input.

Runs the specified tool with the given parameters and returns the
execution result. Tool execution may involve file operations, API calls,
or other platform-specific actions."
  - name: getConfig
    link: /docs/reference/client-sdk/api-reference/codeboltTools/getConfig
    description: "Retrieves the current tools configuration.

Returns system-wide settings that control tool behavior, availability,
permissions, and other configuration options. Useful for understanding
the current tool setup."
  - name: getOpenAiFunction
    link: /docs/reference/client-sdk/api-reference/codeboltTools/getOpenAiFunction
    description: "Retrieves a specific tool formatted as an OpenAI function.

Returns a single tool in OpenAI's functions schema format for targeted
integration with the legacy function calling API."
  - name: getOpenAiFunctions
    link: /docs/reference/client-sdk/api-reference/codeboltTools/getOpenAiFunctions
    description: "Retrieves all tools formatted as OpenAI functions.

Returns the entire tool catalog in OpenAI's functions schema format,
compatible with the legacy function calling API. Each function includes
its name, description, and parameter schema."
  - name: getOpenAiTool
    link: /docs/reference/client-sdk/api-reference/codeboltTools/getOpenAiTool
    description: "Retrieves a specific tool formatted as an OpenAI tool.

Returns a single tool in OpenAI's tools schema format for targeted
integration when only specific tools are needed for function calling."
  - name: getOpenAiTools
    link: /docs/reference/client-sdk/api-reference/codeboltTools/getOpenAiTools
    description: "Retrieves all tools formatted as OpenAI tools.

Returns the entire tool catalog in OpenAI's tools schema format, suitable
for direct use with OpenAI's API function calling feature. Each tool
includes its type, function definition, and parameters."
  - name: getSchema
    link: /docs/reference/client-sdk/api-reference/codeboltTools/getSchema
    description: "Retrieves the JSON schema for a specific tool.

Returns the schema definition that describes the tool's input structure,
required parameters, and validation rules. Useful for building dynamic
UI forms or validating tool inputs before execution."
  - name: list
    link: /docs/reference/client-sdk/api-reference/codeboltTools/list
    description: "Lists all available CodeBolt tools.

Returns every registered tool in the system regardless of category or
permission. Use this for comprehensive tool discovery or to populate
tool selection interfaces."
  - name: updateConfig
    link: /docs/reference/client-sdk/api-reference/codeboltTools/updateConfig
    description: "Updates the tools configuration.

Modifies system-wide tool settings including enabled/disabled tools,
permissions, rate limits, and other configuration options. Changes
take effect immediately."
  - name: validate
    link: /docs/reference/client-sdk/api-reference/codeboltTools/validate
    description: "Validates tool input before execution.

Checks whether the provided parameters conform to the tool's schema
requirements. Returns validation results highlighting any errors or
warnings without actually executing the tool."
---
# CodeboltTools API

Codebolt Tools API

<CBAPICategory />

## Methods

- [`execute()`](./execute) — Executes a CodeBolt tool with the provided input.

Runs the specified tool with the given parameters and returns the
execution result. Tool execution may involve file operations, API calls,
or other platform-specific actions.
- [`getConfig()`](./getConfig) — Retrieves the current tools configuration.

Returns system-wide settings that control tool behavior, availability,
permissions, and other configuration options. Useful for understanding
the current tool setup.
- [`getOpenAiFunction()`](./getOpenAiFunction) — Retrieves a specific tool formatted as an OpenAI function.

Returns a single tool in OpenAI's functions schema format for targeted
integration with the legacy function calling API.
- [`getOpenAiFunctions()`](./getOpenAiFunctions) — Retrieves all tools formatted as OpenAI functions.

Returns the entire tool catalog in OpenAI's functions schema format,
compatible with the legacy function calling API. Each function includes
its name, description, and parameter schema.
- [`getOpenAiTool()`](./getOpenAiTool) — Retrieves a specific tool formatted as an OpenAI tool.

Returns a single tool in OpenAI's tools schema format for targeted
integration when only specific tools are needed for function calling.
- [`getOpenAiTools()`](./getOpenAiTools) — Retrieves all tools formatted as OpenAI tools.

Returns the entire tool catalog in OpenAI's tools schema format, suitable
for direct use with OpenAI's API function calling feature. Each tool
includes its type, function definition, and parameters.
- [`getSchema()`](./getSchema) — Retrieves the JSON schema for a specific tool.

Returns the schema definition that describes the tool's input structure,
required parameters, and validation rules. Useful for building dynamic
UI forms or validating tool inputs before execution.
- [`list()`](./list) — Lists all available CodeBolt tools.

Returns every registered tool in the system regardless of category or
permission. Use this for comprehensive tool discovery or to populate
tool selection interfaces.
- [`updateConfig()`](./updateConfig) — Updates the tools configuration.

Modifies system-wide tool settings including enabled/disabled tools,
permissions, rate limits, and other configuration options. Changes
take effect immediately.
- [`validate()`](./validate) — Validates tool input before execution.

Checks whether the provided parameters conform to the tool's schema
requirements. Returns validation results highlighting any errors or
warnings without actually executing the tool.
