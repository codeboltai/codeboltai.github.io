---
title: CodeboltToolsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: CodeboltToolsApi

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:20

Manages CodeBolt tools and their integration with AI systems.

CodeBolt tools are executable functions that perform specific operations
within the platform. This API provides tool discovery, execution, validation,
and formatting for seamless integration with OpenAI-compatible interfaces.

## Constructors

### Constructor

```ts
new CodeboltToolsApi(http: HttpClient): CodeboltToolsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`CodeboltToolsApi`

## Methods

### execute()

```ts
execute(data: ExecuteToolRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:85

Executes a CodeBolt tool with the provided input.

Runs the specified tool with the given parameters and returns the
execution result. Tool execution may involve file operations, API calls,
or other platform-specific actions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ExecuteToolRequest` | Request containing tool execution details |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the tool execution result

#### Example

```typescript
const result = await client.codeboltTools.execute({
  toolName: 'file-read',
  parameters: { path: '/path/to/file.txt' }
});
```

***

### getConfig()

```ts
getConfig(): Promise<CodeboltToolsConfig>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:131

Retrieves the current tools configuration.

Returns system-wide settings that control tool behavior, availability,
permissions, and other configuration options. Useful for understanding
the current tool setup.

#### Returns

`Promise`\<`CodeboltToolsConfig`\>

A promise that resolves to the CodeboltToolsConfig object

#### Example

```typescript
const config = await client.codeboltTools.getConfig();
console.log('Enabled tools:', config.enabledTools);
```

***

### getOpenAiFunction()

```ts
getOpenAiFunction(toolName: string): Promise<OpenAiFunction>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:238

Retrieves a specific tool formatted as an OpenAI function.

Returns a single tool in OpenAI's functions schema format for targeted
integration with the legacy function calling API.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toolName` | `string` | The name of the tool to retrieve |

#### Returns

`Promise`\<`OpenAiFunction`\>

A promise that resolves to the OpenAiFunction object

#### Example

```typescript
const func = await client.codeboltTools.getOpenAiFunction('file-read');
console.log('Function name:', func.name);
```

***

### getOpenAiFunctions()

```ts
getOpenAiFunctions(): Promise<OpenAiFunction[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:200

Retrieves all tools formatted as OpenAI functions.

Returns the entire tool catalog in OpenAI's functions schema format,
compatible with the legacy function calling API. Each function includes
its name, description, and parameter schema.

#### Returns

`Promise`\<`OpenAiFunction`[]\>

A promise that resolves to an array of OpenAiFunction objects

#### Example

```typescript
const functions = await client.codeboltTools.getOpenAiFunctions();
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Help me' }],
  functions
});
```

***

### getOpenAiTool()

```ts
getOpenAiTool(toolName: string): Promise<OpenAiTool>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:219

Retrieves a specific tool formatted as an OpenAI tool.

Returns a single tool in OpenAI's tools schema format for targeted
integration when only specific tools are needed for function calling.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toolName` | `string` | The name of the tool to retrieve |

#### Returns

`Promise`\<`OpenAiTool`\>

A promise that resolves to the OpenAiTool object

#### Example

```typescript
const tool = await client.codeboltTools.getOpenAiTool('file-read');
console.log('Tool type:', tool.type);
```

***

### getOpenAiTools()

```ts
getOpenAiTools(): Promise<OpenAiTool[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:177

Retrieves all tools formatted as OpenAI tools.

Returns the entire tool catalog in OpenAI's tools schema format, suitable
for direct use with OpenAI's API function calling feature. Each tool
includes its type, function definition, and parameters.

#### Returns

`Promise`\<`OpenAiTool`[]\>

A promise that resolves to an array of OpenAiTool objects

#### Example

```typescript
const tools = await client.codeboltTools.getOpenAiTools();
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Help me' }],
  tools
});
```

***

### getSchema()

```ts
getSchema(toolName: string): Promise<CodeboltToolSchema>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:59

Retrieves the JSON schema for a specific tool.

Returns the schema definition that describes the tool's input structure,
required parameters, and validation rules. Useful for building dynamic
UI forms or validating tool inputs before execution.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toolName` | `string` | The name of the tool to get schema for |

#### Returns

`Promise`\<`CodeboltToolSchema`\>

A promise that resolves to the CodeboltToolSchema object

#### Example

```typescript
const schema = await client.codeboltTools.getSchema('file-search');
console.log('Schema:', schema.properties);
```

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<CodeboltTool[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:39

Lists all available CodeBolt tools.

Returns every registered tool in the system regardless of category or
permission. Use this for comprehensive tool discovery or to populate
tool selection interfaces.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering tools |

#### Returns

`Promise`\<`CodeboltTool`[]\>

A promise that resolves to an array of CodeboltTool objects

#### Example

```typescript
const tools = await client.codeboltTools.list();
tools.forEach(t => console.log(t.name, t.description));
```

***

### updateConfig()

```ts
updateConfig(data: UpdateCodeboltToolsConfigRequest): Promise<CodeboltToolsConfig>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:152

Updates the tools configuration.

Modifies system-wide tool settings including enabled/disabled tools,
permissions, rate limits, and other configuration options. Changes
take effect immediately.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateCodeboltToolsConfigRequest` | Request containing configuration updates |

#### Returns

`Promise`\<`CodeboltToolsConfig`\>

A promise that resolves to the updated CodeboltToolsConfig object

#### Example

```typescript
const updated = await client.codeboltTools.updateConfig({
  enabledTools: ['file-read', 'file-write']
});
```

***

### validate()

```ts
validate(data: ValidateToolRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/codebolt-tools.api.ts:112

Validates tool input before execution.

Checks whether the provided parameters conform to the tool's schema
requirements. Returns validation results highlighting any errors or
warnings without actually executing the tool.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ValidateToolRequest` | Request containing validation data |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to validation results

#### Example

```typescript
const validation = await client.codeboltTools.validate({
  toolName: 'file-write',
  parameters: { path: '', content: '' }
});
if (!validation.isValid) {
  console.error('Validation errors:', validation.errors);
}
```
