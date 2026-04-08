---
name: vote
cbbaseinfo:
  description: Casts a vote for a specific response in a deliberation.
cbparameters:
  parameters:
    - name: params
      typeName: IVoteParams
      description: Parameters including deliberation ID, response ID, and voter info.
  returns:
    signatureTypeName: "Promise<IVoteResponse>"
    description: A promise that resolves to the cast vote.
    typeArgs: []
data:
  name: vote
  category: agentDeliberation
  link: vote.md
---
# vote

```typescript
codebolt.agentDeliberation.vote(params: IVoteParams): Promise<IVoteResponse>
```

Casts a vote for a specific response in a deliberation.
### Parameters

- **`params`** ([IVoteParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IVoteParams)): Parameters including deliberation ID, response ID, and voter info.

### Returns

- **`Promise<[IVoteResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IVoteResponse)>`**: A promise that resolves to the cast vote.

### Examples

```typescript
// Vote for a response
await codebolt.agentDeliberation.vote({
  deliberationId: 'delib-123',
  responseId: 'response-456',
  voterId: 'agent-789',
  voterName: 'Voting Agent'
});
```

### Notes

- Voting is only allowed during 'voting' status
- Each voter can typically vote once per deliberation
- The response with the most votes wins