---
name: validate
cbbaseinfo:
  description: Validates a context assembly request without fetching data.
cbparameters:
  parameters:
    - name: request
      type: ContextAssemblyRequest
      required: true
      description: Context assembly request to validate.
  returns:
    signatureTypeName: "Promise<ContextValidateResponse>"
    description: A promise that resolves with validation results.
data:
  name: validate
  category: contextAssembly
  link: validate.md
---
# validate

```typescript
codebolt.contextAssembly.validate(request: undefined): Promise<ContextValidateResponse>
```

Validates a context assembly request without fetching data.
### Parameters

- **`request`** (unknown): Context assembly request to validate.

### Returns

- **`Promise<[ContextValidateResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ContextValidateResponse)>`**: A promise that resolves with validation results.

### Response Structure

```typescript
{
  type: 'contextAssembly.validate',
  success: boolean,
  data?: {
    validation: {
      valid: boolean;
      errors?: string[];
      warnings?: string[];
      resolved_memories?: string[];
    }
  }
}
```

### Examples

#### Example 1: Validate Request
```javascript
const result = await codebolt.contextAssembly.validate({
  scope_variables: {
    input: 'test message'
  },
  explicit_memory: ['episodic', 'semantic']
});

if (result.data.validation.valid) {
  console.log('Request is valid');
} else {
  console.error('Validation errors:', result.data.validation.errors);
}
```

#### Example 2: Validate Before Assembly
```javascript
async function safeGetContext(request) {
  // First validate
  const validation = await codebolt.contextAssembly.validate(request);

  if (!validation.data.validation.valid) {
    throw new Error('Invalid request: ' +
      validation.data.validation.errors.join(', '));
  }

  // Check for warnings
  if (validation.data.validation.warnings) {
    console.warn('Warnings:', validation.data.validation.warnings);
  }

  // Proceed with assembly
  return await codebolt.contextAssembly.getContext(request);
}
```

#### Example 3: Check Memory Availability
```javascript
const result = await codebolt.contextAssembly.validate({
  scope_variables: { input: 'test' },
  explicit_memory: ['episodic', 'semantic', 'custom-type']
});

console.log('Resolved memories:', result.data.validation.resolved_memories);

// Check if all requested memories are available
const requested = ['episodic', 'semantic', 'custom-type'];
const resolved = result.data.validation.resolved_memories || [];
const missing = requested.filter(m => !resolved.includes(m));

if (missing.length > 0) {
  console.warn('Missing memory types:', missing);
}
```

#### Example 4: Validate Constraints
```javascript
const result = await codebolt.contextAssembly.validate({
  scope_variables: { input: 'test' },
  constraints: {
    max_tokens: 100,
    max_sources: 1
  }
});

if (!result.data.validation.valid) {
  console.error('Constraints too restrictive:', result.data.validation.errors);
}
```

### Common Use Cases
**Pre-Flight Checks**: Validate before expensive assembly operations.
**Memory Verification**: Check if requested memory types exist.
**Constraint Testing**: Verify constraints are reasonable.
**Error Prevention**: Catch issues before they cause failures.

### Notes
- Non-destructive - doesn't fetch actual data
- Faster than full assembly
- Use to catch configuration errors early
- Check both errors and warnings