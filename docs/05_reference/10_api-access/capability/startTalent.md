---
name: startTalent
cbbaseinfo:
  description: Starts execution of a talent with optional parameters and timeout settings. Talents are specialized capabilities for specific domains.
cbparameters:
  parameters:
    - name: talentName
      typeName: string
      description: The name of the talent to execute.
    - name: params
      typeName: "Record<string, any>"
      description: Optional parameters to pass to the talent execution.
      isOptional: true
    - name: timeout
      typeName: number
      description: "Optional execution timeout in milliseconds. If not provided, uses the talent's default timeout."
      isOptional: true
  returns:
    signatureTypeName: "Promise<StartCapabilityResponse>"
    description: A promise that resolves to the execution response containing the execution ID and initial status.
    typeArgs: []
data:
  name: startTalent
  category: capability
  link: startTalent.md
---
# startTalent

```typescript
codebolt.capability.startTalent(talentName: string, params: Record<string, any>, timeout: number): Promise<StartCapabilityResponse>
```

Starts execution of a talent with optional parameters and timeout settings. Talents are specialized capabilities for specific domains.
### Parameters

- **`talentName`** (string): The name of the talent to execute.
- **`params`** (`Record<string, any>`, optional): Optional parameters to pass to the talent execution.
- **`timeout`** (number, optional): Optional execution timeout in milliseconds. If not provided, uses the talent's default timeout.

### Returns

- **`Promise<[StartCapabilityResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartCapabilityResponse)>`**: A promise that resolves to the execution response containing the execution ID and initial status.

### Response Structure

The method returns a Promise that resolves to a [`StartCapabilityResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartCapabilityResponse) object.

**Response Properties:**
- `type` (string): Always "startCapabilityResponse"
- `success` (boolean): Indicates if the execution started successfully
- `executionId` (string, optional): Unique identifier for the execution instance
- `status` (string, optional): Initial execution status
- `result` (any, optional): Immediate result if execution completed synchronously
- `error` (string, optional): Error details if the operation failed

### Examples

#### Example 1: Execute a Talent

```typescript
import codebolt from '@codebolt/codeboltjs';

const result = await codebolt.capability.startTalent('code-reviewer', {
  repository: 'https://github.com/user/repo',
  branch: 'main'
});

if (result.success) {
  console.log('Talent execution started:', result.executionId);
}
```

#### Example 2: Specialized Domain Processing

```typescript
const analysis = await codebolt.capability.startTalent(
  'financial-analyzer',
  {
    data: 'financial-data.json',
    reportType: 'detailed',
    includeCharts: true
  },
  45000
);

console.log('Financial analysis started:', analysis.executionId);
```

#### Example 3: Domain-Specific Workflow

```typescript
// Legal document analysis
const legalReview = await codebolt.capability.startTalent('legal-doc-analyzer', {
  document: 'contract.pdf',
  jurisdiction: 'US',
  checkClauses: ['liability', 'termination', 'confidentiality']
});

// Medical text processing
const medicalExtract = await codebolt.capability.startTalent('medical-entity-extractor', {
  text: 'Patient medical record text...',
  extractEntities: ['diagnoses', 'medications', 'procedures']
});
```

### Common Use Cases

#### Domain-Specific Analysis

```typescript
const analyzeWithTalent = async (talent: string, data: any) => {
  const result = await codebolt.capability.startTalent(talent, { data });

  if (result.success) {
    const status = await codebolt.capability.getExecutionStatus(result.executionId);
    return status.data?.result;
  }
};
```

#### Specialized Processing

```typescript
// Use industry-specific talents
const legalAnalysis = await codebolt.capability.startTalent('legal-analyzer', {
  document: 'contract.pdf'
});

const medicalAnalysis = await codebolt.capability.startTalent('medical-analyzer', {
  records: 'patient-data.json'
});
```

### Notes

- Talents are specialized for specific domains or industries
- Often include domain-specific knowledge and rules
- May require specialized parameters relevant to the domain
- Typically designed for professional use cases
- Can be industry-specific (legal, medical, financial, etc.)
- Use when you need domain expertise built into the capability