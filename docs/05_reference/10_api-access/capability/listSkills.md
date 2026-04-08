---
name: listSkills
cbbaseinfo:
  description: "Lists all available skills. This is a convenience method that filters capabilities by type 'skill'."
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<ListCapabilitiesResponse>"
    description: A promise that resolves to a list of all skills.
    typeArgs: []
data:
  name: listSkills
  category: capability
  link: listSkills.md
---
# listSkills

```typescript
codebolt.capability.listSkills(): Promise<ListCapabilitiesResponse>
```

Lists all available skills. This is a convenience method that filters capabilities by type 'skill'.
### Returns

- **`Promise<[ListCapabilitiesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse)>`**: A promise that resolves to a list of all skills.

### Response Structure

Returns a [`ListCapabilitiesResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListCapabilitiesResponse) with an array of skill capabilities.

### Examples

#### List All Skills

```typescript
const skills = await codebolt.capability.listSkills();
console.log('Available skills:', skills.capabilities);
```

#### Find Specific Skills

```typescript
const allSkills = await codebolt.capability.listSkills();
const dataSkills = allSkills.capabilities.filter(s =>
  s.name.includes('data')
);
```

### Common Use Cases

#### Skill Discovery

```typescript
const discoverSkills = async () => {
  const result = await codebolt.capability.listSkills();
  return result.capabilities.map(skill => ({
    name: skill.name,
    description: skill.description,
    tags: skill.tags
  }));
};
```

### Notes

- Equivalent to `listCapabilities({ type: 'skill' })`
- Skills are typically lightweight operations
- Use for browsing available functionality