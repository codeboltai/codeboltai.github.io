---
name: parseJSON
cbbaseinfo:
  description: Parses JSON string and returns a result object with success flag and parsed data or error.
cbparameters:
  parameters:
    - name: jsonString
      typeName: string
      description: The JSON string to parse.
  returns:
    signatureTypeName: Object
    description: An object with success flag and parsed data or error information.
    typeArgs: []
data:
  name: parseJSON
  category: outputparsers
  link: parseJSON.md
---
# parseJSON

```typescript
codebolt.outputparsers.parseJSON(jsonString: string): Object
```

Parses JSON string and returns a result object with success flag and parsed data or error. 
### Parameters

- **`jsonString`** (string): The JSON string to parse.

### Returns

- **`Object`**: An object with success flag and parsed data or error information.

## Response Structure

The method returns an object with the following structure:

### Success Response
```javascript
{
  success: true,
  parsed: <parsed_json_object>
}
```

### Error Response
```javascript
{
  success: false,
  error: <Error_object>
}
```

## Examples

### Valid JSON Parsing
```javascript
const validJson = '{"name": "test", "value": 123, "active": true}';
const result = await codebolt.outputparsers.parseJSON(validJson);
console.log(result);
// Output: { success: true, parsed: { name: 'test', value: 123, active: true } }
```

### Invalid JSON Parsing
```javascript
const invalidJson = '{"name": "test", "value": 123, "active":}';
const result = await codebolt.outputparsers.parseJSON(invalidJson);
console.log(result);
// Output: { success: false, error: SyntaxError... }
```

### Complex JSON Object
```javascript
const complexJson = JSON.stringify({
    users: [
        { id: 1, name: 'Alice', roles: ['admin', 'user'] },
        { id: 2, name: 'Bob', roles: ['user'] }
    ],
    metadata: {
        total: 2,
        timestamp: new Date().toISOString()
    }
});
const result = await codebolt.outputparsers.parseJSON(complexJson);
console.log(result);
// Output: { success: true, parsed: { users: [...], metadata: {...} } }
```

### Advanced Usage

#### JSON Schema Validation

```javascript
async function parseJSONWithSchema(jsonString, schema) {
    const result = await codebolt.outputparsers.parseJSON(jsonString);

    if (!result.success) {
        return {
            valid: false,
            error: result.error
        };
    }

    // Validate against schema
    const validation = validateSchema(result.parsed, schema);

    return {
        valid: validation.valid,
        data: result.parsed,
        errors: validation.errors
    };
}

function validateSchema(data, schema) {
    const errors = [];

    for (const [key, config] of Object.entries(schema)) {
        if (config.required && !(key in data)) {
            errors.push(`Missing required field: ${key}`);
            continue;
        }

        if (key in data) {
            const type = typeof data[key];
            if (type !== config.type) {
                errors.push(`Invalid type for ${key}: expected ${config.type}, got ${type}`);
            }
        }
    }

    return {
        valid: errors.length === 0,
        errors
    };
}

// Usage
const schema = {
    name: { type: 'string', required: true },
    age: { type: 'number', required: true },
    email: { type: 'string', required: false }
};

const result = await parseJSONWithSchema('{"name": "John", "age": 25}', schema);
```

#### JSON Transformation Pipeline

```javascript
class JSONTransformPipeline {
    constructor(transforms = []) {
        this.transforms = transforms;
    }

    async process(jsonString) {
        const result = await codebolt.outputparsers.parseJSON(jsonString);

        if (!result.success) {
            return result;
        }

        let data = result.parsed;

        // Apply transformations
        for (const transform of this.transforms) {
            data = transform(data);
        }

        return {
            success: true,
            parsed: data
        };
    }

    addTransform(transform) {
        this.transforms.push(transform);
        return this;
    }
}

// Usage
const pipeline = new JSONTransformPipeline()
    .addTransform(data => {
        // Add timestamp
        data.processedAt = new Date().toISOString();
        return data;
    })
    .addTransform(data => {
        // Normalize field names
        const normalized = {};
        for (const [key, value] of Object.entries(data)) {
            normalized[key.toLowerCase()] = value;
        }
        return normalized;
    });

const result = await pipeline.process('{"Name": "John", "Age": 25}');
```

#### Batch JSON Processing

```javascript
async function batchParseJSON(jsonStrings) {
    const results = {
        successful: [],
        failed: [],
        total: jsonStrings.length
    };

    for (const [index, jsonString] of jsonStrings.entries()) {
        const result = await codebolt.outputparsers.parseJSON(jsonString);

        if (result.success) {
            results.successful.push({
                index,
                data: result.parsed
            });
        } else {
            results.failed.push({
                index,
                error: result.error
            });
        }
    }

    console.log(`Batch processing complete:`, {
        total: results.total,
        successful: results.successful.length,
        failed: results.failed.length
    });

    return results;
}

// Usage
const jsonArray = [
    '{"id": 1, "name": "Item 1"}',
    '{"id": 2, "name": "Item 2"}',
    'invalid json',
    '{"id": 3, "name": "Item 3"}'
];

const batchResult = await batchParseJSON(jsonArray);
```

### Integration Examples

#### With Chat Module for Structured Responses

```javascript
async function getStructuredChatResponse(prompt, schema) {
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        const response = await codebolt.chat.sendMessage(
            `${prompt}\n\nPlease respond in JSON format.`
        );

        const result = await codebolt.outputparsers.parseJSON(response);

        if (result.success) {
            // Validate against schema
            const validation = validateSchema(result.parsed, schema);

            if (validation.valid) {
                return {
                    success: true,
                    data: result.parsed
                };
            }

            // Invalid schema, ask for correction
            prompt = `The previous response had these errors:\n${validation.errors.join('\n')}\n\nPlease provide corrected JSON.`;
        } else {
            prompt = `The previous response was not valid JSON:\n${result.error}\n\nPlease provide valid JSON.`;
        }
    }

    throw new Error('Failed to get valid JSON response after multiple attempts');
}

// Usage
const schema = {
    title: { type: 'string', required: true },
    items: { type: 'object', required: true },
    count: { type: 'number', required: true }
};

const response = await getStructuredChatResponse(
    'Generate a shopping list with 3 items',
    schema
);
```

### Error Handling Patterns

#### Graceful JSON Recovery

```javascript
async function parseJSONWithRecovery(jsonString, fallback = null) {
    const result = await codebolt.outputparsers.parseJSON(jsonString);

    if (!result.success) {
        console.error('JSON parsing failed:', result.error);

        // Try to recover common issues
        let recovered = jsonString;

        // Fix missing quotes around keys
        recovered = recovered.replace(/([{,]\s*)([a-zA-Z0-9_]+)(\s*:)/g, '$1"$2"$3');

        // Fix single quotes to double quotes
        recovered = recovered.replace(/'/g, '"');

        // Try parsing again
        const retryResult = await codebolt.outputparsers.parseJSON(recovered);

        if (retryResult.success) {
            console.log('✅ Recovered invalid JSON');
            return retryResult;
        }

        // Use fallback if provided
        if (fallback !== null) {
            console.log('Using fallback value');
            return {
                success: true,
                parsed: fallback,
                fallback: true
            };
        }

        return {
            success: false,
            error: result.error
        };
    }

    return result;
}

// Usage
const result = await parseJSONWithRecovery(
    "{name: 'John', age: 25}",
    { name: 'Unknown', age: 0 }
);
```

### Performance Considerations

- **Large JSON**: For large JSON payloads (>1MB), consider streaming or chunking
- **Deep Nesting**: Very deep nesting may impact performance
- **Validation**: Schema validation adds overhead - use only when necessary
- **Memory**: Large JSON objects consume significant memory