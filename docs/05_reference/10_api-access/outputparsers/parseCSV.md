---
name: parseCSV
cbbaseinfo:
  description: Parses CSV string and returns a result object with success flag and parsed array of objects.
cbparameters:
  parameters:
    - name: csvString
      typeName: string
      description: The CSV string to parse.
  returns:
    signatureTypeName: Object
    description: An object with success flag and parsed array of objects or error information.
    typeArgs: []
data:
  name: parseCSV
  category: outputparsers
  link: parseCSV.md
---
# parseCSV

```typescript
codebolt.outputparsers.parseCSV(csvString: string): Object
```

Parses CSV string and returns a result object with success flag and parsed array of objects. 
### Parameters

- **`csvString`** (string): The CSV string to parse.

### Returns

- **`Object`**: An object with success flag and parsed array of objects or error information.

## Response Structure

The method returns an object with the following structure:

### Success Response
```javascript
{
  success: true,
  parsed: [
    { column1: "value1", column2: "value2", ... },
    { column1: "value3", column2: "value4", ... },
    ...
  ]
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

### Valid CSV Parsing
```javascript
const csvData = 'name,age,city\nJohn,25,New York\nJane,30,Los Angeles\nBob,35,Chicago';
const result = await codebolt.outputparsers.parseCSV(csvData);
console.log(result);
// Output: {
//   success: true,
//   parsed: [
//     { name: 'John', age: '25', city: 'New York' },
//     { name: 'Jane', age: '30', city: 'Los Angeles' },
//     { name: 'Bob', age: '35', city: 'Chicago' }
//   ]
// }
```

### Simple CSV with Headers
```javascript
const csvData = 'product,price\nLaptop,999\nMouse,29';
const result = await codebolt.outputparsers.parseCSV(csvData);
console.log(result);
// Output: {
//   success: true,
//   parsed: [
//     { product: 'Laptop', price: '999' },
//     { product: 'Mouse', price: '29' }
//   ]
// }
```

### Advanced Usage

#### CSV with Custom Delimiters

```javascript
async function parseCSVWithDelimiter(csvString, delimiter = ',') {
    // If not comma, need to transform the CSV
    if (delimiter !== ',') {
        // Replace custom delimiter with comma
        const normalized = csvString.split('\n').map(line =>
            line.split(delimiter).join(',')
        ).join('\n');

        return await codebolt.outputparsers.parseCSV(normalized);
    }

    return await codebolt.outputparsers.parseCSV(csvString);
}

// Usage
const tsvResult = await parseCSVWithDelimiter(
    'name\tage\tcity\nJohn\t25\tNew York',
    '\t'
);
```

#### CSV Data Transformation

```javascript
class CSVTransformer {
    constructor(transforms = {}) {
        this.transforms = transforms;
    }

    async parseAndTransform(csvString) {
        const result = await codebolt.outputparsers.parseCSV(csvString);

        if (!result.success) {
            return result;
        }

        const transformed = result.parsed.map(row => {
            const transformedRow = {};

            for (const [column, value] of Object.entries(row)) {
                if (this.transforms[column]) {
                    transformedRow[column] = this.transforms[column](value);
                } else {
                    transformedRow[column] = value;
                }
            }

            return transformedRow;
        });

        return {
            success: true,
            parsed: transformed
        };
    }

    addTransform(column, transformFn) {
        this.transforms[column] = transformFn;
        return this;
    }
}

// Usage
const transformer = new CSVTransformer()
    .addTransform('age', value => parseInt(value))
    .addTransform('name', value => value.trim())
    .addTransform('active', value => value.toLowerCase() === 'true');

const result = await transformer.parseAndTransform(
    'name,age,active\nJohn,25,true\nJane,30,false'
);
```

#### CSV Aggregation

```javascript
async function aggregateCSV(csvString, groupBy, aggregations) {
    const result = await codebolt.outputparsers.parseCSV(csvString);

    if (!result.success) {
        return result;
    }

    const groups = {};

    for (const row of result.parsed) {
        const key = row[groupBy];

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(row);
    }

    const aggregated = {};

    for (const [key, rows] of Object.entries(groups)) {
        aggregated[key] = {};

        for (const [field, aggFunc] of Object.entries(aggregations)) {
            const values = rows.map(r => parseFloat(r[field]) || 0);
            aggregated[key][field] = aggFunc(values);
        }

        aggregated[key].count = rows.length;
    }

    return {
        success: true,
        parsed: aggregated
    };
}

// Usage
const result = await aggregateCSV(
    'category,value\nA,10\nA,20\nB,30\nB,40\nB,50',
    'category',
    {
        value: values => values.reduce((a, b) => a + b, 0) // Sum
    }
);
```

### Integration Examples

#### CSV to JSON Conversion

```javascript
async function csvToJson(csvString, keyField = null) {
    const result = await codebolt.outputparsers.parseCSV(csvString);

    if (!result.success) {
        return result;
    }

    if (keyField) {
        // Convert to object with keys
        const obj = {};
        for (const row of result.parsed) {
            const key = row[keyField];
            obj[key] = row;
        }
        return {
            success: true,
            parsed: obj
        };
    }

    return {
        success: true,
        parsed: result.parsed
    };
}

// Usage
const result = await csvToJson(
    'id,name,role\n1,John,Admin\n2,Jane,User',
    'id'
);
```

### Performance Considerations

- **Large CSV**: For large CSV files (>10MB), consider streaming or chunking
- **Memory**: Entire CSV is loaded into memory
- **Complex Parsing**: Custom delimiters or quoted fields add overhead
- **Column Count**: Varying column counts may cause issues