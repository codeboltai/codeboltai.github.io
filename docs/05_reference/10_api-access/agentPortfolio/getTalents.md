---
name: getTalents
cbbaseinfo:
  description: "Retrieves talents, optionally filtered by agent. Returns list of available talents or agent-specific talents."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: Optional agent ID to get talents for.
      isOptional: true
  returns:
    signatureTypeName: "Promise<GetTalentsResponse>"
    description: A promise that resolves to the list of talents.
    typeArgs: []
data:
  name: getTalents
  category: agentPortfolio
  link: getTalents.md
---
# getTalents

```typescript
codebolt.agentPortfolio.getTalents(agentId: string): Promise<GetTalentsResponse>
```

Retrieves talents, optionally filtered by agent. Returns list of available talents or agent-specific talents.
### Parameters

- **`agentId`** (string, optional): Optional agent ID to get talents for.

### Returns

- **`Promise<[GetTalentsResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetTalentsResponse)>`**: A promise that resolves to the list of talents.

### Examples

```typescript
// Get all talents
const allTalents = await codebolt.agentPortfolio.getTalents();

// Get agent's talents
const agentTalents = await codebolt.agentPortfolio.getTalents('agent-123');

// Find endorsed talents
const endorsed = agentTalents.data?.talents.filter(t => t.endorsements > 0);
```

### Notes

- Without agentId, returns all available talents
- With agentId, returns that agent's talents
- Endorsement count indicates verified expertise