---
name: updateFeature
cbbaseinfo:
  description: "Updates an existing feature's information. Only the specified fields are updated; other fields remain unchanged."
cbparameters:
  parameters:
    - name: featureId
      typeName: string
      description: The ID of the feature to update
    - name: data
      typeName: UpdateFeatureData
      description: Partial feature data with fields to update
    - name: projectPath
      typeName: string
      description: "Optional project path (uses active project if not provided)"
  returns:
    signatureTypeName: "Promise<RoadmapFeatureResponse>"
    description: A promise that resolves to the updated feature
data:
  name: updateFeature
  category: roadmap
  link: updateFeature.md
---
# updateFeature

```typescript
codebolt.roadmap.updateFeature(featureId: string, data: UpdateFeatureData, projectPath: string): Promise<RoadmapFeatureResponse>
```

Updates an existing feature's information. Only the specified fields are updated; other fields remain unchanged.
### Parameters

- **`featureId`** (string): The ID of the feature to update
- **`data`** ([UpdateFeatureData](/docs/api/11_doc-type-ref/codeboltjs/interfaces/UpdateFeatureData)): Partial feature data with fields to update
- **`projectPath`** (string): Optional project path (uses active project if not provided)

### Returns

- **`Promise<[RoadmapFeatureResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RoadmapFeatureResponse)>`**: A promise that resolves to the updated feature

### Parameter Details

- **`featureId`** (string, required): The ID of the feature to update
- **`data`** (UpdateFeatureData, required): Partial feature data (all fields optional)
  - **`title`** (string, optional): Updated feature title
  - **`description`** (string, optional): Updated feature description
  - **`impact`** (ImpactLevel, optional): Updated impact level
  - **`difficulty`** (DifficultyLevel, optional): Updated difficulty level
  - **`priority`** (number, optional): Updated priority
  - **`tags`** (string[], optional): Updated tags
  - **`category`** (string, optional): Updated category
  - **`status`** (FeatureStatus, optional): Updated status

### Response Structure

```typescript
interface RoadmapFeatureResponse {
  feature: Feature;
}
```

### Examples

#### 1. Update Feature Status
```typescript
import codebolt from '@codebolt/codeboltjs';

// Update feature status to in-progress
const result = await codebolt.roadmap.updateFeature('feat_001', {
  status: 'in-progress'
});

console.log('Feature status updated:', result.feature.status);
```

#### 2. Update Multiple Fields
```typescript
// Update multiple feature properties
const result = await codebolt.roadmap.updateFeature('feat_001', {
  title: 'User Authentication & Authorization',
  description: 'Updated: Added OAuth2 support and role-based access control',
  impact: 'critical',
  priority: 1
});

console.log('Feature updated');
```

#### 3. Mark Feature as Complete
```typescript
// Mark feature as completed
const result = await codebolt.roadmap.updateFeature('feat_001', {
  status: 'completed'
});

console.log('Feature completed!');
console.log('Updated at:', result.feature.updatedAt);
```

#### 4. Update Feature Priority
```typescript
// Change feature priority
const result = await codebolt.roadmap.updateFeature('feat_001', {
  priority: 5
});

console.log('Priority updated to:', result.feature.priority);
```

#### 5. Add Tags to Feature
```typescript
// Add tags to existing feature
const currentFeature = await codebolt.roadmap.getFeatures('phase_001');
const feature = currentFeature.features.find(f => f.id === 'feat_001');

const result = await codebolt.roadmap.updateFeature('feat_001', {
  tags: [...(feature.tags || []), 'urgent', 'backend']
});

console.log('Tags updated:', result.feature.tags);
```

#### 6. Update Feature During Development
```typescript
// Progressively update feature as work progresses
async function updateFeatureProgress(featureId: string) {
  // Start work
  await codebolt.roadmap.updateFeature(featureId, {
    status: 'in-progress'
  });

  // Work on feature...

  // Complete feature
  await codebolt.roadmap.updateFeature(featureId, {
    status: 'completed'
  });

  console.log('Feature workflow complete');
}
```

#### 7. Update Impact Assessment
```typescript
// Reassess and update impact
const result = await codebolt.roadmap.updateFeature('feat_001', {
  impact: 'high',
  difficulty: 'medium'
});

console.log('Impact and difficulty updated');
```

#### 8. Update Feature Description
```typescript
// Update with more detailed description
const result = await codebolt.roadmap.updateFeature('feat_001', {
  description: `
## User Authentication

Implement secure user authentication with:
- Email/password registration and login
- OAuth2 integration (Google, GitHub)
- Password reset via email
- Session management
- Remember me functionality
- Multi-factor authentication (optional)

## Security Considerations
- Password hashing with bcrypt
- Rate limiting on auth endpoints
- CSRF protection
- Secure session storage
  `.trim()
});

console.log('Description updated with details');
```

#### 9. Cancel Feature
```typescript
// Cancel a feature that's no longer needed
const result = await codebolt.roadmap.updateFeature('feat_001', {
  status: 'cancelled',
  tags: [...(result.feature.tags || []), 'deprecated']
});

console.log('Feature cancelled');
```

#### 10. Batch Update Features
```typescript
// Update multiple features in a phase
async function batchUpdateFeatures(featureIds: string[], updates: any) {
  for (const id of featureIds) {
    await codebolt.roadmap.updateFeature(id, updates);
    console.log(`✓ Updated: ${id}`);
  }
}

// Usage - mark all phase features as in-progress
const phaseFeatures = await codebolt.roadmap.getFeatures('phase_001');
const featureIds = phaseFeatures.features.map(f => f.id);

await batchUpdateFeatures(featureIds, { status: 'in-progress' });
```

### Common Use Cases

**Status Workflow:**
```typescript
// Standard feature workflow
async function featureWorkflow(featureId: string) {
  // Pending -> In Progress
  await codebolt.roadmap.updateFeature(featureId, {
    status: 'in-progress'
  });

  // Work on feature...

  // In Progress -> Completed
  await codebolt.roadmap.updateFeature(featureId, {
    status: 'completed'
  });
}
```

**Priority Rebalancing:**
```typescript
// Rebalance priorities based on changes
async function reprioritizeFeatures(featureIds: string[]) {
  for (let i = 0; i < featureIds.length; i++) {
    await codebolt.roadmap.updateFeature(featureIds[i], {
      priority: i + 1
    });
  }
}
```

**Add Progress Notes:**
```typescript
// Append progress notes to description
async function addProgressNote(featureId: string, note: string) {
  const feature = await getFeatureDetails(featureId);

  const updatedDesc = `${feature.description}\n\n## Update\n${note}\n*Updated: ${new Date().toISOString()}*`;

  await codebolt.roadmap.updateFeature(featureId, {
    description: updatedDesc.trim()
  });
}
```

### Notes

- Only specified fields are updated
- Omitted fields remain unchanged
- Status transitions can be validated at application level
- Tags are replaced, not appended (get current tags first if appending)
- Priority change affects sort order
- Status changes update the timestamp
- Feature ID is immutable
- Phase association cannot be changed (use moveFeature instead)
- Can be called multiple times for incremental updates
- Updates are reflected immediately in queries