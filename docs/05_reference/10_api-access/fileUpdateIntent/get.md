---
name: get
cbbaseinfo:
  description: Gets details of a specific file update intent.
cbparameters:
  parameters:
    - name: id
      type: string
      required: true
      description: The unique identifier of the file update intent.
  returns:
    signatureTypeName: "Promise<FileUpdateIntent>"
    description: A promise that resolves with the intent details.
data:
  name: get
  category: fileUpdateIntent
  link: get.md
---
# get

```typescript
codebolt.fileUpdateIntent.get(id: undefined): Promise<FileUpdateIntent>
```

Gets details of a specific file update intent.
### Parameters

- **`id`** (unknown): The unique identifier of the file update intent.

### Returns

- **`Promise<[FileUpdateIntent](/docs/api/11_doc-type-ref/codeboltjs/interfaces/FileUpdateIntent)>`**: A promise that resolves with the intent details.

### Examples

#### Example 1: Get Intent Details
```javascript
const intent = await codebolt.fileUpdateIntent.get('intent-id-123');

console.log('Intent:', intent.description);
console.log('Status:', intent.status);
console.log('Files:', intent.files);
console.log('Claimed by:', intent.claimedByName || intent.claimedBy);
```

#### Example 2: Check Intent Status
```javascript
async function checkIntentStatus(intentId) {
  const intent = await codebolt.fileUpdateIntent.get(intentId);

  if (intent.status === 'active') {
    console.log('Work is in progress');
  } else if (intent.status === 'completed') {
    console.log('Work has been completed');
  } else if (intent.status === 'cancelled') {
    console.log('Work was cancelled');
  } else if (intent.status === 'expired') {
    console.log('Intent expired');
  }

  return intent.status;
}
```

### Notes
- Returns complete intent details including all files
- Use to check status before operations