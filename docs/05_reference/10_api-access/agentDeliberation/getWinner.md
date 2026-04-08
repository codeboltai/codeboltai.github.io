---
name: getWinner
cbbaseinfo:
  description: Gets the winning response of a completed deliberation based on vote count.
cbparameters:
  parameters:
    - name: params
      typeName: IGetWinnerParams
      description: Parameters including the deliberation ID.
  returns:
    signatureTypeName: "Promise<IGetWinnerResponse>"
    description: A promise that resolves to the winning response and vote details.
    typeArgs: []
data:
  name: getWinner
  category: agentDeliberation
  link: getWinner.md
---
# getWinner

```typescript
codebolt.agentDeliberation.getWinner(params: IGetWinnerParams): Promise<IGetWinnerResponse>
```

Gets the winning response of a completed deliberation based on vote count.
### Parameters

- **`params`** ([IGetWinnerParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetWinnerParams)): Parameters including the deliberation ID.

### Returns

- **`Promise<[IGetWinnerResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/IGetWinnerResponse)>`**: A promise that resolves to the winning response and vote details.

### Examples

```typescript
const winner = await codebolt.agentDeliberation.getWinner({
  deliberationId: 'delib-123'
});

if (winner.payload.winner) {
  console.log('Winning response:', winner.payload.winner.body);
  console.log('Votes:', winner.payload.winner.voteCount);
}
```

### Notes

- Returns null if deliberation hasn't completed
- In case of ties, may return multiple winners
- Includes all vote details for transparency