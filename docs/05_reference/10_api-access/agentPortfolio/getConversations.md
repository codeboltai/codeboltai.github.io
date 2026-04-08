---
name: getConversations
cbbaseinfo:
  description: Gets conversations involving an agent with pagination support for handling large conversation histories.
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The ID of the agent.
    - name: limit
      typeName: number
      description: Maximum number of conversations to return.
      isOptional: true
    - name: offset
      typeName: number
      description: Offset for pagination.
      isOptional: true
  returns:
    signatureTypeName: "Promise<GetConversationsResponse>"
    description: A promise that resolves to the list of conversations.
    typeArgs: []
data:
  name: getConversations
  category: agentPortfolio
  link: getConversations.md
---
# getConversations

```typescript
codebolt.agentPortfolio.getConversations(agentId: string, limit: number, offset: number): Promise<GetConversationsResponse>
```

Gets conversations involving an agent with pagination support for handling large conversation histories.
### Parameters

- **`agentId`** (string): The ID of the agent.
- **`limit`** (number, optional): Maximum number of conversations to return.
- **`offset`** (number, optional): Offset for pagination.

### Returns

- **`Promise<[GetConversationsResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetConversationsResponse)>`**: A promise that resolves to the list of conversations.

### Examples

```typescript
// Get recent conversations
const conversations = await codebolt.agentPortfolio.getConversations('agent-123', 10);

// Paginate through history
const page1 = await codebolt.agentPortfolio.getConversations('agent-123', 20, 0);
const page2 = await codebolt.agentPortfolio.getConversations('agent-123', 20, 20);
```

### Notes

- Use pagination for large conversation histories
- Conversations are ordered by most recent first