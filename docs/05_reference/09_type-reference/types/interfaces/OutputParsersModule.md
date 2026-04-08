---
title: OutputParsersModule
---

[**@codebolt/types**](../index)

***

# Interface: OutputParsersModule

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:54

## Methods

### parseCSV()

```ts
parseCSV(csvString: string): CSVParseResult;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:74

Parses CSV string and returns a result object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `csvString` | `string` | The CSV string to parse. |

#### Returns

[`CSVParseResult`](CSVParseResult)

An object with success flag and parsed data or error.

***

### parseErrors()

```ts
parseErrors(output: ParsableOutput): string[];
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:88

Parses the given output and returns all the error messages.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `output` | [`ParsableOutput`](../type-aliases/ParsableOutput) | The output to parse for error messages. |

#### Returns

`string`[]

An array of error messages.

***

### parseJSON()

```ts
parseJSON(jsonString: string): JSONParseResult;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:60

Parses JSON string and returns a result object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `jsonString` | `string` | The JSON string to parse. |

#### Returns

[`JSONParseResult`](JSONParseResult)

An object with success flag and parsed data or error.

***

### parseText()

```ts
parseText(text: string): TextParseResult;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:81

Parses text string and returns a result object with lines.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to parse. |

#### Returns

[`TextParseResult`](TextParseResult)

An object with success flag and parsed lines.

***

### parseWarnings()

```ts
parseWarnings(output: ParsableOutput): string[];
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:95

Parses the given output and returns all the warning messages.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `output` | [`ParsableOutput`](../type-aliases/ParsableOutput) | The output to parse for warning messages. |

#### Returns

`string`[]

An array of warning messages.

***

### parseXML()

```ts
parseXML(xmlString: string): XMLParseResult;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/outputparsers.ts:67

Parses XML string and returns a result object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xmlString` | `string` | The XML string to parse. |

#### Returns

[`XMLParseResult`](XMLParseResult)

An object with success flag and parsed data.
