---
name: search
cbbaseinfo:
  description: Searches for messages matching specific criteria.
cbparameters:
  parameters:
    - name: params
      typeName: ISearchParams
      description: Search parameters including query, threadId, and filters.
  returns:
    signatureTypeName: "Promise<ISearchResponse>"
    description: A promise that resolves with matching messages.
data:
  name: search
  category: mail
  link: search.md
---
# search

```typescript
codebolt.mail.search(params: ISearchParams): Promise<ISearchResponse>
```

Searches for messages matching specific criteria.
### Parameters

- **`params`** (ISearchParams): Search parameters including query, threadId, and filters.

### Returns

- **`Promise<ISearchResponse>`**: A promise that resolves with matching messages.

### Examples

#### Example 1: Search Messages

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.search({
  query: 'authentication bug',
  threadId: 'thread-123',
  limit: 20
});

console.log(`Found ${result.messages.length} matching messages`);
result.messages.forEach(msg => {
  console.log(`- ${msg.content}`);
});
```

### Common Use Cases

- **Content Search**: Find messages by keywords
- **Information Retrieval**: Locate specific discussions
- **Audit Trail**: Search for specific events

### Notes

- Performs case-insensitive text search
- Can search within specific threads
- Returns messages with content matching query
