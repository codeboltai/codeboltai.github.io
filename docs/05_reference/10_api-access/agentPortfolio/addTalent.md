---
name: addTalent
cbbaseinfo:
  description: Adds a new talent skill to the system. Talents represent specialized skills that can be endorsed.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The name of the talent.
    - name: description
      typeName: string
      description: Optional description of the talent.
      isOptional: true
  returns:
    signatureTypeName: "Promise<AddTalentResponse>"
    description: A promise that resolves when talent is added.
    typeArgs: []
data:
  name: addTalent
  category: agentPortfolio
  link: addTalent.md
---
# addTalent

```typescript
codebolt.agentPortfolio.addTalent(name: string, description: string): Promise<AddTalentResponse>
```

Adds a new talent skill to the system. Talents represent specialized skills that can be endorsed.
### Parameters

- **`name`** (string): The name of the talent.
- **`description`** (string, optional): Optional description of the talent.

### Returns

- **`Promise<[AddTalentResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/AddTalentResponse)>`**: A promise that resolves when talent is added.

### Examples

```typescript
// Add new talent
await codebolt.agentPortfolio.addTalent('React Development', 'Expert in React ecosystem');

// Add talent without description
await codebolt.agentPortfolio.addTalent('TypeScript');
```

### Notes

- Talent names should be clear and specific
- Descriptions help others understand the skill scope
- Talents can be endorsed to verify expertise