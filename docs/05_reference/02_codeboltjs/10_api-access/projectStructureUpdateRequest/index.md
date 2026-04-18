---
cbapicategory:
  - name: create
    link: /docs/api/apiaccess/projectStructureUpdateRequest/create
    description: Creates a new project structure update request.
  - name: get
    link: /docs/api/apiaccess/projectStructureUpdateRequest/get
    description: Retrieves an update request by ID.
  - name: list
    link: /docs/api/apiaccess/projectStructureUpdateRequest/list
    description: Lists update requests with optional filtering.
  - name: update
    link: /docs/api/apiaccess/projectStructureUpdateRequest/update
    description: Updates an existing update request.
  - name: delete
    link: /docs/api/apiaccess/projectStructureUpdateRequest/delete
    description: Deletes an update request.
  - name: submit
    link: /docs/api/apiaccess/projectStructureUpdateRequest/submit
    description: Submits an update request for review.
  - name: startWork
    link: /docs/api/apiaccess/projectStructureUpdateRequest/startWork
    description: Marks an update request as being actively worked on.
  - name: complete
    link: /docs/api/apiaccess/projectStructureUpdateRequest/complete
    description: Marks work on an update request as complete.
  - name: merge
    link: /docs/api/apiaccess/projectStructureUpdateRequest/merge
    description: Merges an approved update request into the project structure.
  - name: addDispute
    link: /docs/api/apiaccess/projectStructureUpdateRequest/addDispute
    description: Adds a dispute to an update request.
  - name: resolveDispute
    link: /docs/api/apiaccess/projectStructureUpdateRequest/resolveDispute
    description: Resolves a dispute on an update request.
  - name: addComment
    link: /docs/api/apiaccess/projectStructureUpdateRequest/addComment
    description: Adds a comment to a dispute.
  - name: watch
    link: /docs/api/apiaccess/projectStructureUpdateRequest/watch
    description: Watches an update request for updates.
  - name: unwatch
    link: /docs/api/apiaccess/projectStructureUpdateRequest/unwatch
    description: Stops watching an update request.
---

# Project Structure Update Request API

The Project Structure Update Request API provides functionality for multi-agent coordination when proposing changes to the project structure. This enables agents to collaboratively plan, review, and implement structural changes while maintaining consistency and preventing conflicts.

## Overview

The project structure update request module enables you to:
- **Propose Changes**: Create requests for structural modifications
- **Review & Dispute**: Collaborative review with dispute resolution
- **Workflow Management**: Track status through draft, review, work, and merge phases
- **Notification**: Watch/unwatch for updates on specific requests
- **Multi-Agent Coordination**: Coordinate changes between multiple agents

## Request Lifecycle

```
┌─────────────┐
│    DRAFT    │ Initial creation
└──────┬──────┘
       │ submit()
       ▼
┌─────────────────────┐
│ WAITING_FOR_DISPUTE │ Under review
└──────┬──────────────┘
       │ dispute() / startWork()
       ▼
┌─────────────┐
│  DISPUTED   │ Changes requested
└──────┬──────┘
       │ resolveDispute()
       ▼
┌───────────────────────┐
│ ACTIVELY_BEING_WORKED │ Implementation
└──────┬────────────────┘
       │ complete()
       ▼
┌────────────────┐
│ WAITING_TO_MERGE│ Ready for merge
└──────┬─────────┘
       │ merge()
       ▼
┌──────────┐
│ MERGED   │ Applied to structure
└──────────┘
```

## Quick Start Example

```js
// Initialize connection
await codebolt.waitForReady();

// Create an update request
const request = await codebolt.projectStructureUpdateRequest.create({
  title: 'Add user authentication API',
  description: 'Add login and registration endpoints',
  author: 'agent-1',
  authorType: 'agent',
  changes: [{
    packageId: 'backend-api',
    packageAction: 'update',
    apiRoutes: [
      {
        id: 'route-1',
        action: 'create',
        item: {
          path: '/api/auth/login',
          method: 'POST',
          description: 'User login endpoint'
        }
      }
    ]
  }]
}, '/workspace/project');

console.log('Created request:', request.data.data.id);

// Submit for review
await codebolt.projectStructureUpdateRequest.submit(request.data.data.id);

// Start working on it
await codebolt.projectStructureUpdateRequest.startWork(request.data.data.id);

// Complete and merge
await codebolt.projectStructureUpdateRequest.complete(request.data.data.id);
await codebolt.projectStructureUpdateRequest.merge(request.data.data.id);
```

## Change Actions

Changes to the project structure use wrapped items with actions:

- **create**: Add a new item (route, table, dependency, etc.)
- **update**: Modify an existing item
- **delete**: Remove an item
- **none**: No change (placeholder)

## Response Structure

All project structure update request API functions return responses with a consistent structure:

```js
{
  success: true,
  data: {
    // The update request object
    id: 'request-id',
    title: 'Request title',
    description: 'Description',
    status: 'draft',
    author: 'agent-id',
    authorType: 'agent',
    changes: [ ... ],
    disputes: [ ... ],
    watchers: [ ... ],
    createdAt: 'timestamp',
    updatedAt: 'timestamp'
  },
  message: 'Operation completed',
  error: null
}
```

## Use Cases

### 1. Multi-Agent Coordination

```js
// Agent proposes a change
const request = await codebolt.projectStructureUpdateRequest.create({
  title: 'Add payment processing',
  author: 'agent-1',
  authorType: 'agent',
  changes: [ ... ]
});

// Other agents review and dispute if needed
await codebolt.projectStructureUpdateRequest.addDispute(requestId, {
  raisedBy: 'agent-2',
  raisedByType: 'agent',
  reason: 'Security concerns with payment flow'
});
```

### 2. Change Approval Workflow

```js
// Create request
const request = await codebolt.projectStructureUpdateRequest.create(data);

// Submit for review
await codebolt.projectStructureUpdateRequest.submit(request.id);

// Wait for approval
await codebolt.projectStructureUpdateRequest.startWork(request.id);

// Implement changes
await codebolt.projectStructureUpdateRequest.complete(request.id);

// Merge to structure
await codebolt.projectStructureUpdateRequest.merge(request.id);
```

### 3. Notification System

```js
// Watch a request for updates
await codebolt.projectStructureUpdateRequest.watch(requestId, {
  watcherId: 'agent-3',
  watcherType: 'agent'
});

// Stop watching when done
await codebolt.projectStructureUpdateRequest.unwatch(requestId, 'agent-3');
```

## Best Practices

1. **Always Provide Context**: Include clear descriptions for changes
2. **Use Disputes Constructively**: Disputes should include specific reasons
3. **Follow the Workflow**: Move through states properly (draft → submit → work → complete → merge)
4. **Communicate via Comments**: Use comments for detailed discussions
5. **Clean Up**: Delete or archive old requests after merging

<CBAPICategory />
