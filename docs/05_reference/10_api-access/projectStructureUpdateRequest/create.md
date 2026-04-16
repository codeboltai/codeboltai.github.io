---
name: create
cbbaseinfo:
  description: Creates a new project structure update request.
cbparameters:
  parameters:
    - name: data
      typeName: CreateUpdateRequestData
      description: The update request data including title, author, and changes.
      isOptional: false
    - name: workspacePath
      typeName: string
      description: Optional workspace path for the project.
      isOptional: true
  returns:
    signatureTypeName: "Promise<UpdateRequestResponse>"
    description: A promise that resolves with the created update request.
    typeArgs: []
data:
  name: create
  category: projectStructureUpdateRequest
  link: create.md
---
# create

```typescript
codebolt.projectStructureUpdateRequest.create(data: CreateUpdateRequestData, workspacePath: string): Promise<UpdateRequestResponse>
```

Creates a new project structure update request.
### Parameters

- **`data`** (CreateUpdateRequestData): The update request data including title, author, and changes.
- **`workspacePath`** (string, optional): Optional workspace path for the project.

### Returns

- **`Promise<UpdateRequestResponse>`**: A promise that resolves with the created update request.

### Response Structure

The method returns a Promise that resolves to an [`UpdateRequestResponse`](/docs/reference/type-reference/types/interfaces/UpdateRequestResponse) object with the following properties:

**Response Properties:**
- `success`: Boolean indicating if the operation was successful
- `data`: The created [`ProjectStructureUpdateRequest`](/docs/reference/type-reference/types/interfaces/ProjectStructureUpdateRequest) object
  - `id`: Unique identifier for the request
  - `title`: Short title describing the change
  - `description`: Detailed description of what and why
  - `status`: Current status ('draft', 'waiting_for_dispute', 'disputed', 'actively_being_worked', 'waiting_to_merge', 'merged')
  - `author`: Who created the request
  - `authorType`: 'user' or 'agent'
  - `changes`: Array of [`UpdateRequestChange`](/docs/reference/type-reference/types/interfaces/UpdateRequestChange) objects
  - `disputes`: Array of dispute objects
  - `watchers`: Array of watcher objects
  - `createdAt`: Creation timestamp
  - `updatedAt`: Last update timestamp
  - `submittedAt`: Submission timestamp (if submitted)
  - `mergedAt`: Merge timestamp (if merged)
- `message`: Optional string with additional information
- `error`: Optional error details if the operation failed

### Examples

#### Example 1: Create a Simple Update Request

```js
// Wait for connection
await codebolt.waitForReady();

// Create a basic update request
const result = await codebolt.projectStructureUpdateRequest.create({
  title: 'Add user authentication endpoints',
  description: 'Add login and registration API endpoints',
  author: 'agent-1',
  authorType: 'agent',
  changes: [{
    packageId: 'backend-api',
    packageAction: 'update',
    apiRoutes: [{
      id: 'route-login',
      action: 'create',
      item: {
        path: '/api/auth/login',
        method: 'POST',
        description: 'User login endpoint',
        handler: 'authController.login'
      }
    }]
  }]
}, '/workspace/project');

console.log('✅ Created request:', result.data.data.id);
console.log('Status:', result.data.data.status);
```

**Explanation**: This creates a new update request in 'draft' status with a single API route change.

#### Example 2: Create Request with Multiple Changes

```js
// Create request with multiple types of changes
const result = await codebolt.projectStructureUpdateRequest.create({
  title: 'Implement payment processing system',
  description: 'Add payment API, database tables, and dependencies',
  author: 'agent-finance',
  authorType: 'agent',
  changes: [{
    packageId: 'payment-service',
    packageAction: 'create',
    packageName: 'payment-service',
    packagePath: '/services/payment',
    apiRoutes: [
      {
        id: 'payment-create',
        action: 'create',
        item: {
          path: '/api/payments',
          method: 'POST',
          description: 'Create payment'
        }
      },
      {
        id: 'payment-refund',
        action: 'create',
        item: {
          path: '/api/payments/{id}/refund',
          method: 'POST',
          description: 'Refund payment'
        }
      }
    ],
    database: {
      tables: [
        {
          id: 'table-payments',
          action: 'create',
          item: {
            name: 'payments',
            columns: [
              { name: 'id', type: 'UUID', primary: true },
              { name: 'amount', type: 'DECIMAL' },
              { name: 'status', type: 'VARCHAR' }
            ]
          }
        }
      ]
    },
    dependencies: [
      {
        id: 'dep-stripe',
        action: 'create',
        item: {
          name: 'stripe',
          version: '^14.0.0'
        }
      }
    ]
  }]
});

console.log('✅ Created complex request with', result.data.data.changes[0].apiRoutes?.length, 'API routes');
```

**Explanation**: This creates a comprehensive update request with multiple types of changes including routes, database tables, and dependencies.

#### Example 3: Create Request for Package Modification

```js
// Update existing package
const result = await codebolt.projectStructureUpdateRequest.create({
  title: 'Add user profile feature',
  description: 'Extend user service with profile management',
  author: 'agent-user',
  authorType: 'agent',
  changes: [{
    packageId: 'user-service',
    packageAction: 'update',
    apiRoutes: [
      {
        id: 'profile-get',
        action: 'create',
        item: {
          path: '/api/users/{id}/profile',
          method: 'GET',
          description: 'Get user profile'
        }
      },
      {
        id: 'profile-update',
        action: 'create',
        item: {
          path: '/api/users/{id}/profile',
          method: 'PUT',
          description: 'Update user profile'
        }
      }
    ],
    database: {
      tables: [
        {
          id: 'table-profiles',
          action: 'create',
          item: {
            name: 'user_profiles',
            columns: [
              { name: 'user_id', type: 'UUID', references: 'users.id' },
              { name: 'bio', type: 'TEXT' },
              { name: 'avatar_url', type: 'VARCHAR' }
            ]
          }
        }
      ]
    }
  }]
});
```

**Explanation**: This example shows how to create an update request that modifies an existing package.

#### Example 4: Create Request with Error Handling

```js
async function createUpdateRequestSafely(data, workspacePath) {
  try {
    const result = await codebolt.projectStructureUpdateRequest.create(
      data,
      workspacePath
    );

    if (result.success) {
      console.log('✅ Update request created:', result.data.data.id);
      console.log('Title:', result.data.data.title);
      console.log('Status:', result.data.data.status);

      // Log changes summary
      const changeCount = result.data.data.changes.reduce((sum, change) => {
        return sum +
          (change.apiRoutes?.length || 0) +
          (change.database?.tables?.length || 0) +
          (change.dependencies?.length || 0);
      }, 0);

      console.log('Total changes:', changeCount);

      return result.data.data;
    } else {
      console.error('❌ Failed to create request:', result.message);
      return null;
    }
  } catch (error) {
    console.error('❌ Error creating update request:', error.message);
    return null;
  }
}

// Usage
const request = await createUpdateRequestSafely({
  title: 'Add notification system',
  author: 'agent-notifications',
  authorType: 'agent',
  changes: [{
    packageId: 'notification-service',
    packageAction: 'create',
    packageName: 'notification-service',
    apiRoutes: []
  }]
}, '/workspace/project');
```

**Explanation**: This demonstrates comprehensive error handling when creating update requests.

#### Example 5: Create Request for Database Schema Changes

```js
// Create request focused on database changes
const result = await codebolt.projectStructureUpdateRequest.create({
  title: 'Add audit logging tables',
  description: 'Create tables for audit trail functionality',
  author: 'agent-db',
  authorType: 'agent',
  changes: [{
    packageId: 'database',
    packageAction: 'update',
    database: {
      tables: [
        {
          id: 'table-audit-logs',
          action: 'create',
          item: {
            name: 'audit_logs',
            columns: [
              { name: 'id', type: 'BIGINT', primary: true, autoIncrement: true },
              { name: 'entity_type', type: 'VARCHAR', length: 100 },
              { name: 'entity_id', type: 'UUID' },
              { name: 'action', type: 'VARCHAR', length: 50 },
              { name: 'actor_id', type: 'UUID' },
              { name: 'changes', type: 'JSONB' },
              { name: 'created_at', type: 'TIMESTAMP', default: 'CURRENT_TIMESTAMP' }
            ],
            indexes: [
              { columns: ['entity_type', 'entity_id'] },
              { columns: ['actor_id'] },
              { columns: ['created_at'] }
            ]
          }
        },
        {
          id: 'table-audit-details',
          action: 'create',
          item: {
            name: 'audit_log_details',
            columns: [
              { name: 'log_id', type: 'BIGINT', references: 'audit_logs.id' },
              { name: 'field_name', type: 'VARCHAR' },
              { name: 'old_value', type: 'TEXT' },
              { name: 'new_value', type: 'TEXT' }
            ]
          }
        }
      ]
    }
  }]
});

console.log('✅ Created database update request');
```

**Explanation**: This example focuses on database schema changes with multiple related tables.

#### Example 6: Batch Create Related Requests

```js
// Create multiple related update requests
async function createFeatureRequests(featureName, components) {
  const requests = [];

  for (const component of components) {
    const request = await codebolt.projectStructureUpdateRequest.create({
      title: `${featureName}: ${component.name}`,
      description: `Implement ${component.name} for ${featureName}`,
      author: 'agent-coordinator',
      authorType: 'agent',
      changes: [{
        packageId: component.packageId,
        packageAction: component.action || 'update',
        ...component.changes
      }]
    });

    requests.push(request.data.data);
    console.log(`✅ Created request: ${request.data.data.title}`);
  }

  return requests;
}

// Usage
const requests = await createFeatureRequests('User Management', [
  {
    name: 'Authentication API',
    packageId: 'auth-service',
    changes: {
      apiRoutes: [{
        id: 'login-route',
        action: 'create',
        item: { path: '/api/auth/login', method: 'POST' }
      }]
    }
  },
  {
    name: 'User Database',
    packageId: 'user-database',
    changes: {
      database: {
        tables: [{
          id: 'users-table',
          action: 'create',
          item: { name: 'users', columns: [] }
        }]
      }
    }
  },
  {
    name: 'Frontend Components',
    packageId: 'frontend-ui',
    changes: {
      uiRoutes: [{
        id: 'login-page',
        action: 'create',
        item: { path: '/login', component: 'LoginPage' }
      }]
    }
  }
]);
```

**Explanation**: This example creates multiple coordinated update requests for a single feature.

### Common Use Cases

**1. New Feature Implementation**: Create comprehensive change requests for new features.

```js
async function proposeNewFeature(featureConfig) {
  const request = await codebolt.projectStructureUpdateRequest.create({
    title: featureConfig.name,
    description: featureConfig.description,
    author: 'agent-planner',
    authorType: 'agent',
    changes: featureConfig.changes
  });

  // Auto-submit for review
  await codebolt.projectStructureUpdateRequest.submit(request.data.data.id);

  return request.data.data;
}
```

**2. Refactoring**: Propose structural improvements.

```js
async function proposeRefactoring(refactorPlan) {
  const request = await codebolt.projectStructureUpdateRequest.create({
    title: `Refactor: ${refactorPlan.target}`,
    description: refactorPlan.rationale,
    author: 'agent-architect',
    authorType: 'agent',
    changes: refactorPlan.changes
  });

  return request.data.data;
}
```

**3. Dependency Updates**: Request dependency changes.

```js
async function proposeDependencyUpdate(packageId, newDependencies) {
  const changes = newDependencies.map(dep => ({
    id: `dep-${dep.name}`,
    action: 'create',
    item: { name: dep.name, version: dep.version }
  }));

  const request = await codebolt.projectStructureUpdateRequest.create({
    title: `Update dependencies for ${packageId}`,
    author: 'agent-dependencies',
    authorType: 'agent',
    changes: [{
      packageId,
      packageAction: 'update',
      dependencies: changes
    }]
  });

  return request.data.data;
}
```

### Notes

- The `title` field is required and should be concise but descriptive
- The `author` and `authorType` fields are required for tracking
- All new requests start in 'draft' status
- Changes are specified as an array of [`UpdateRequestChange`](/docs/reference/type-reference/types/interfaces/UpdateRequestChange) objects
- Each change must specify a `packageId` and `packageAction`
- The `workspacePath` parameter is optional but recommended for clarity
- Created requests receive a unique ID for subsequent operations
- The `createdAt` timestamp is automatically generated
- Use the `submit` method to move the request from draft to review
- Changes with action 'create' add new items
- Changes with action 'update' modify existing items
- Changes with action 'delete' remove items
- Complex changes can include multiple types (routes, database, dependencies, etc.)
- The `description` field should explain the rationale for the changes
- All changes within a request are applied together as a unit
- Requests can be viewed by all agents/users with access to the workspace
