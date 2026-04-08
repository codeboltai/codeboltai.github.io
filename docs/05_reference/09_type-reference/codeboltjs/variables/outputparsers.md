---
title: outputparsers
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: outputparsers

```ts
const outputparsers: {
  parseCSV: (csvString: string) => ParseResult<CSVRow[]>;
  parseErrors: (output: ParsableOutput) => string[];
  parseJSON: (jsonString: string) => ParseResult<unknown>;
  parseText: (text: string) => ParseResult<string[]>;
  parseWarnings: (output: ParsableOutput) => string[];
  parseXML: (xmlString: string) => ParseResult<{
   [key: string]: unknown;
     rootElement: string;
  }>;
};
```

Defined in: packages/codeboltjs/src/modules/outputparsers.ts:18

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="parsecsv"></a> `parseCSV()` | (`csvString`: `string`) => `ParseResult`\<`CSVRow`[]\> | Parses CSV string and returns a result object. | [packages/codeboltjs/src/modules/outputparsers.ts:52](packages/codeboltjs/src/modules/outputparsers.ts#L52) |
| <a id="parseerrors"></a> `parseErrors()` | (`output`: `ParsableOutput`) => `string`[] | Parses the given output and returns all the error messages. | [packages/codeboltjs/src/modules/outputparsers.ts:89](packages/codeboltjs/src/modules/outputparsers.ts#L89) |
| <a id="parsejson"></a> `parseJSON()` | (`jsonString`: `string`) => `ParseResult`\<`unknown`\> | Parses JSON string and returns a result object. | [packages/codeboltjs/src/modules/outputparsers.ts:24](packages/codeboltjs/src/modules/outputparsers.ts#L24) |
| <a id="parsetext"></a> `parseText()` | (`text`: `string`) => `ParseResult`\<`string`[]\> | Parses text string and returns a result object with lines. | [packages/codeboltjs/src/modules/outputparsers.ts:79](packages/codeboltjs/src/modules/outputparsers.ts#L79) |
| <a id="parsewarnings"></a> `parseWarnings()` | (`output`: `ParsableOutput`) => `string`[] | Parses the given output and returns all the warning messages. | [packages/codeboltjs/src/modules/outputparsers.ts:99](packages/codeboltjs/src/modules/outputparsers.ts#L99) |
| <a id="parsexml"></a> `parseXML()` | (`xmlString`: `string`) => `ParseResult`\<\{ \[`key`: `string`\]: `unknown`; `rootElement`: `string`; \}\> | Parses XML string and returns a result object. | [packages/codeboltjs/src/modules/outputparsers.ts:38](packages/codeboltjs/src/modules/outputparsers.ts#L38) |
