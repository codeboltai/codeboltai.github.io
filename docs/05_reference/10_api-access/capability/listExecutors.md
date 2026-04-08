---
name: listExecutors
cbbaseinfo:
  description: Lists all available capability executors that can run capabilities. Executors are the runtime environments for capabilities.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<ListExecutorsResponse>"
    description: A promise that resolves to a list of available executors.
    typeArgs: []
data:
  name: listExecutors
  category: capability
  link: listExecutors.md
---
# listExecutors

```typescript
codebolt.capability.listExecutors(): Promise<ListExecutorsResponse>
```

Lists all available capability executors that can run capabilities. Executors are the runtime environments for capabilities.
### Returns

- **`Promise<[ListExecutorsResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListExecutorsResponse)>`**: A promise that resolves to a list of available executors.

### Response Structure

Returns a [`ListExecutorsResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListExecutorsResponse) with array of executor objects.

**Response Properties:**
- `type` (string): Always "listExecutorsResponse"
- `success` (boolean): Operation success status
- `executors` (CapabilityExecutor[]): Array of executors
  - `id` (string): Executor identifier
  - `name` (string): Executor name
  - `type` (string): Executor type (docker, wasm, node, etc.)
  - `status` (string): Executor status (active, inactive, etc.)
  - `capabilities` (string[]): Supported capability types
  - `resources` (object, optional): Resource limits and availability
- `error` (string, optional): Error details if failed

### Examples

#### List All Executors

```typescript
const result = await codebolt.capability.listExecutors();

if (result.success) {
  console.log('Available executors:', result.executors);
  result.executors.forEach(exec => {
    console.log(`- ${exec.name} (${exec.type}): ${exec.status}`);
  });
}
```

#### Find Active Executors

```typescript
const executors = await codebolt.capability.listExecutors();
const active = executors.executors.filter(e => e.status === 'active');
console.log('Active executors:', active);
```

#### Check Executor Capabilities

```typescript
const executors = await codebolt.capability.listExecutors();
const nodeExecutor = executors.executors.find(e => e.type === 'node');
console.log('Node executor capabilities:', nodeExecutor?.capabilities);
```

### Common Use Cases

#### Executor Discovery

```typescript
const findExecutor = async (type: string) => {
  const result = await codebolt.capability.listExecutors();
  return result.executors.find(e => e.type === type);
};
```

#### Resource Planning

```typescript
const checkExecutorResources = async () => {
  const executors = await codebolt.capability.listExecutors();
  return executors.executors.map(e => ({
    name: e.name,
    resources: e.resources,
    available: e.status === 'active'
  }));
};
```

### Notes

- Executors manage runtime environments
- Different capabilities may require different executors
- Executor status can change dynamically
- Use to understand available runtime options
- Consider executor capabilities when starting executions