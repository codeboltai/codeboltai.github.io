---
title: Output Parsers MCP
sidebar_label: codebolt.outputparsers
sidebar_position: 61
---

# codebolt.outputparsers

Output parsing utilities for extracting structured data from command outputs, logs, and responses. Supports JSON, XML, CSV, and text formats, plus error and warning extraction.

## Available Tools

- `outputparsers_parse_json` - Parses a JSON string into a structured object
- `outputparsers_parse_xml` - Parses an XML string into a structured object
- `outputparsers_parse_csv` - Parses a CSV string into an array of objects
- `outputparsers_parse_text` - Parses text into an array of lines
- `outputparsers_parse_errors` - Extracts error messages from command output
- `outputparsers_parse_warnings` - Extracts warning messages from command output

## Tool Parameters

### outputparsers_parse_json

Parses a JSON string into a structured object.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| jsonString | string | Yes | The JSON string to parse. Must be valid JSON format. Supports objects, arrays, primitives, and nested structures. |

### outputparsers_parse_xml

Parses an XML string into a structured object.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| xmlString | string | Yes | The XML string to parse. Must be valid XML format. Supports attributes, nested elements, and XML namespaces. |

### outputparsers_parse_csv

Parses a CSV string into an array of objects.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| csvString | string | Yes | The CSV string to parse. First row is treated as headers. Supports comma separation, quoted fields, and multiline rows. |

### outputparsers_parse_text

Parses text into an array of lines.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| text | string | Yes | The text to parse. Splits the input text by line breaks into an array of individual lines. |

### outputparsers_parse_errors

Parses output and extracts error messages.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| output | string | Yes | The output to parse for error messages. Detects common error patterns like "Error:", "ERROR", "Failed:", "Exception", etc. |

### outputparsers_parse_warnings

Parses output and extracts warning messages.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| output | string | Yes | The output to parse for warning messages. Detects common warning patterns like "Warning:", "WARN", "Caution:", etc. |

## Sample Usage

```javascript
const codebolt = require('codeboltjs');

// Parse JSON response
const jsonResult = await codebolt.tools.outputparsers.parse_json({
  jsonString: '{"name": "John", "age": 30, "city": "New York"}'
});
console.log(jsonResult.parsed);

// Parse XML configuration
const xmlResult = await codebolt.tools.outputparsers.parse_xml({
  xmlString: '<config><database host="localhost" port="5432"/></config>'
});
console.log(xmlResult.parsed);

// Parse CSV data
const csvResult = await codebolt.tools.outputparsers.parse_csv({
  csvString: 'name,age,city\nJohn,30,New York\nJane,25,Los Angeles'
});
console.log(csvResult.parsed);

// Parse command output into lines
const textResult = await codebolt.tools.outputparsers.parse_text({
  text: 'Line 1\nLine 2\nLine 3\nLine 4'
});
console.log(textResult.parsed);

// Extract errors from build output
const errorResult = await codebolt.tools.outputparsers.parse_errors({
  output: 'Building project...\nError: File not found at src/main.ts\nWarning: Deprecated API usage\nError: Syntax error at line 42'
});
console.log(errorResult.parsed);
```

:::info
The outputparsers tools are designed to work with various text formats commonly encountered in development workflows. JSON and XML parsing validate input format before conversion. CSV parsing treats the first row as column headers. Error and warning detection uses pattern matching on common prefixes and keywords from different systems. All parsers return structured data that can be processed programmatically.
:::
