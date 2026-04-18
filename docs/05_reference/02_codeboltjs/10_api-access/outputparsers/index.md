---
cbapicategory:
  - name: parseJSON
    link: /docs/api/apiaccess/outputparsers/parseJSON
    description: Parses JSON string and returns a result object with success flag and parsed data or error.
  - name: parseXML
    link: /docs/api/apiaccess/outputparsers/parseXML
    description: Parses XML string and returns a result object with success flag and parsed data.
  - name: parseCSV
    link: /docs/api/apiaccess/outputparsers/parseCSV
    description: Parses CSV string and returns a result object with success flag and parsed array of objects.
  - name: parseText
    link: /docs/api/apiaccess/outputparsers/parseText
    description: Parses text string and returns a result object with success flag and parsed lines array.

---
# outputparsers
<CBAPICategory />

## Overview

The Output Parsers module provides robust parsing capabilities for various data formats including JSON, XML, CSV, and plain text. Each parser returns a consistent result object with success flags and appropriate error handling.

## Quick Start

```javascript
import codebolt from '@codebolt/codeboltjs';

// Parse JSON
const jsonResult = await codebolt.outputparsers.parseJSON('{"name": "test", "value": 123}');
if (jsonResult.success) {
    console.log(jsonResult.parsed);
}

// Parse CSV
const csvResult = await codebolt.outputparsers.parseCSV('name,age\nJohn,25\nJane,30');
if (csvResult.success) {
    console.log(csvResult.parsed);
}

// Parse Text
const textResult = await codebolt.outputparsers.parseText('Line 1\nLine 2\nLine 3');
if (textResult.success) {
    console.log(textResult.parsed);
}

// Parse XML
const xmlResult = await codebolt.outputparsers.parseXML('<root><item>Test</item></root>');
if (xmlResult.success) {
    console.log(xmlResult.parsed);
}
```

## Common Workflows

### 1. Multi-Format Data Processing

```javascript
class DataProcessor {
    async processData(data, format) {
        const parsers = {
            json: codebolt.outputparsers.parseJSON.bind(codebolt.outputparsers),
            xml: codebolt.outputparsers.parseXML.bind(codebolt.outputparsers),
            csv: codebolt.outputparsers.parseCSV.bind(codebolt.outputparsers),
            text: codebolt.outputparsers.parseText.bind(codebolt.outputparsers)
        };

        const parser = parsers[format.toLowerCase()];

        if (!parser) {
            return {
                success: false,
                error: `Unsupported format: ${format}`
            };
        }

        return await parser(data);
    }

    async detectAndParse(data) {
        // Try to detect format automatically
        if (data.trim().startsWith('{') || data.trim().startsWith('[')) {
            return await this.processData(data, 'json');
        } else if (data.trim().startsWith('<')) {
            return await this.processData(data, 'xml');
        } else if (data.includes(',')) {
            return await this.processData(data, 'csv');
        } else {
            return await this.processData(data, 'text');
        }
    }
}

// Usage
const processor = new DataProcessor();
const result = await processor.detectAndParse('{"key": "value"}');
```

### 2. Batch File Processing

```javascript
async function batchParseFiles(files) {
    const results = [];

    for (const file of files) {
        const extension = file.name.split('.').pop().toLowerCase();

        let parser;
        switch (extension) {
            case 'json':
                parser = codebolt.outputparsers.parseJSON;
                break;
            case 'xml':
                parser = codebolt.outputparsers.parseXML;
                break;
            case 'csv':
                parser = codebolt.outputparsers.parseCSV;
                break;
            default:
                parser = codebolt.outputparsers.parseText;
        }

        try {
            const result = await parser(file.content);

            results.push({
                file: file.name,
                format: extension,
                success: result.success,
                data: result.parsed || result.error
            });
        } catch (error) {
            results.push({
                file: file.name,
                format: extension,
                success: false,
                error: error.message
            });
        }
    }

    return results;
}
```

### 3. Data Validation Pipeline

```javascript
class DataValidationPipeline {
    async validateAndParse(data, format, schema) {
        // Parse the data
        const parseResult = await codebolt.outputparsers[`parse${format.toUpperCase()}`](data);

        if (!parseResult.success) {
            return {
                valid: false,
                error: `Parsing failed: ${parseResult.error}`
            };
        }

        const parsed = parseResult.parsed;

        // Validate against schema
        const validationResult = this.validateSchema(parsed, schema);

        return {
            valid: validationResult.valid,
            data: parsed,
            errors: validationResult.errors
        };
    }

    validateSchema(data, schema) {
        const errors = [];

        for (const [key, type] of Object.entries(schema)) {
            if (!(key in data)) {
                errors.push(`Missing required field: ${key}`);
                continue;
            }

            if (typeof data[key] !== type) {
                errors.push(`Invalid type for ${key}: expected ${type}, got ${typeof data[key]}`);
            }
        }

        return {
            valid: errors.length === 0,
            errors
        };
    }
}

// Usage
const pipeline = new DataValidationPipeline();
const result = await pipeline.validateAndParse(
    '{"name": "John", "age": 25}',
    'json',
    { name: 'string', age: 'number' }
);
```

### 4. Format Conversion

```javascript
class FormatConverter {
    async convert(data, fromFormat, toFormat) {
        // Parse source format
        const parseResult = await codebolt.outputparsers[`parse${fromFormat.toUpperCase()}`](data);

        if (!parseResult.success) {
            return {
                success: false,
                error: `Failed to parse ${fromFormat}: ${parseResult.error}`
            };
        }

        const parsed = parseResult.parsed;

        // Convert to target format
        let converted;
        switch (toFormat.toLowerCase()) {
            case 'json':
                converted = JSON.stringify(parsed, null, 2);
                break;
            case 'csv':
                converted = this.toCSV(parsed);
                break;
            case 'xml':
                converted = this.toXML(parsed);
                break;
            default:
                return {
                    success: false,
                    error: `Unsupported target format: ${toFormat}`
                };
        }

        return {
            success: true,
            data: converted
        };
    }

    toCSV(data) {
        if (Array.isArray(data) && data.length > 0) {
            const headers = Object.keys(data[0]);
            const rows = data.map(obj => headers.map(h => obj[h]).join(','));
            return [headers.join(','), ...rows].join('\n');
        }
        return '';
    }

    toXML(data) {
        return `<root>${JSON.stringify(data)}</root>`;
    }
}

// Usage
const converter = new FormatConverter();
const result = await converter.convert(
    '[{"name": "John", "age": 25}]',
    'json',
    'csv'
);
```

## Best Practices

### Error Handling

```javascript
async function safeParse(parser, data) {
    try {
        const result = await parser(data);

        if (!result.success) {
            console.error('Parse failed:', result.error);
            return {
                success: false,
                error: result.error,
                fallback: null
            };
        }

        return {
            success: true,
            data: result.parsed
        };

    } catch (error) {
        console.error('Parse error:', error);
        return {
            success: false,
            error: error.message,
            fallback: null
        };
    }
}
```

### Data Sanitization

```javascript
async function parseWithSanitization(parser, data) {
    // Sanitize input
    const sanitized = data
        .trim()
        .replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, ''); // Remove control characters

    const result = await parser(sanitized);

    if (result.success) {
        // Sanitize output
        result.parsed = sanitizeOutput(result.parsed);
    }

    return result;
}

function sanitizeOutput(data) {
    if (typeof data === 'string') {
        return data.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    }

    if (Array.isArray(data)) {
        return data.map(sanitizeOutput);
    }

    if (typeof data === 'object' && data !== null) {
        const sanitized = {};
        for (const [key, value] of Object.entries(data)) {
            sanitized[key] = sanitizeOutput(value);
        }
        return sanitized;
    }

    return data;
}
```

## Integration Examples

### With File System

```javascript
async function parseFileFromFS(filePath) {
    const content = await codebolt.fs.readFile(filePath);
    const extension = filePath.split('.').pop().toLowerCase();

    const parsers = {
        json: codebolt.outputparsers.parseJSON,
        xml: codebolt.outputparsers.parseXML,
        csv: codebolt.outputparsers.parseCSV,
        txt: codebolt.outputparsers.parseText
    };

    const parser = parsers[extension] || codebolt.outputparsers.parseText;

    return await parser(content);
}
```

### With Chat Module

```javascript
async function parseChatResponse(response, expectedFormat) {
    const parser = codebolt.outputparsers[`parse${expectedFormat.toUpperCase()}`];

    try {
        const result = await parser(response);

        if (!result.success) {
            // Ask chat to fix the format
            const clarification = await codebolt.chat.sendMessage(
                `The previous response was not valid ${expectedFormat}. Please provide the data in correct ${expectedFormat} format.`
            );

            return await parser(clarification);
        }

        return result;

    } catch (error) {
        console.error('Failed to parse chat response:', error);
        throw error;
    }
}
```

## Common Pitfalls

### Pitfall 1: Not Checking Success Flag

```javascript
// ❌ Wrong
const result = await codebolt.outputparsers.parseJSON(data);
console.log(result.parsed.name); // May throw error

// ✅ Correct
const result = await codebolt.outputparsers.parseJSON(data);
if (result.success) {
    console.log(result.parsed.name);
} else {
    console.error('Parse failed:', result.error);
}
```

### Pitfall 2: Assuming Format

```javascript
// ❌ Wrong - assumes valid JSON
const parsed = JSON.parse(userInput);

// ✅ Correct - validate and parse
const result = await codebolt.outputparsers.parseJSON(userInput);
if (!result.success) {
    console.error('Invalid JSON:', result.error);
    return;
}
```

## Performance Considerations

- **Large Files**: For large files (>10MB), consider streaming or chunking
- **Batch Operations**: Process multiple files in parallel for better performance
- **Caching**: Cache parsed results if data is accessed frequently
- **Validation**: Validate structure before parsing to fail fast

## Advanced Patterns

### Streaming Parser

```javascript
class StreamingDataProcessor {
    constructor(chunkSize = 1024) {
        this.chunkSize = chunkSize;
    }

    async processStream(stream, parser) {
        const chunks = [];
        let buffer = '';

        for await (const chunk of stream) {
            buffer += chunk;

            while (buffer.length >= this.chunkSize) {
                const chunk = buffer.slice(0, this.chunkSize);
                buffer = buffer.slice(this.chunkSize);

                const result = await parser(chunk);
                chunks.push(result);
            }
        }

        // Process remaining buffer
        if (buffer) {
            const result = await parser(buffer);
            chunks.push(result);
        }

        return chunks;
    }
}
```
