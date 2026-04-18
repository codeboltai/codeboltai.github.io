---
cbapicategory:
  - name: addLinkedJob
    link: /docs/reference/client-sdk/api-reference/reviewMerge/addLinkedJob
    description: "Links an existing job to a review-merge request.

Associates a job with this review so that changes from the job are tracked as part
of the review workflow."
  - name: addPheromone
    link: /docs/reference/client-sdk/api-reference/reviewMerge/addPheromone
    description: "Adds a pheromone tag to a review-merge request.

Pheromones are metadata signals used for inter-agent communication. Adding a pheromone
allows agents to tag reviews with contextual information that other agents can detect."
  - name: addProposedJob
    link: /docs/reference/client-sdk/api-reference/reviewMerge/addProposedJob
    description: "Adds a proposed job to a review-merge request.

Proposed jobs are suggested work items that arise from the review process. They must
be approved before being converted into actual jobs."
  - name: addReview
    link: /docs/reference/client-sdk/api-reference/reviewMerge/addReview
    description: "Adds a review or feedback to a review-merge request.

Submits review feedback (approval, rejection, or comments) from a reviewer.
Multiple reviews can be added from different reviewers."
  - name: approveProposedJob
    link: /docs/reference/client-sdk/api-reference/reviewMerge/approveProposedJob
    description: "Approves a proposed job on a review-merge request.

Marks the proposed job as approved, making it eligible for conversion into an actual job."
  - name: approveUnlockRequest
    link: /docs/reference/client-sdk/api-reference/reviewMerge/approveUnlockRequest
    description: "Approves an unlock request, releasing the lock on a review-merge request.

The lock holder calls this to grant an unlock request from another agent."
  - name: convertProposedJob
    link: /docs/reference/client-sdk/api-reference/reviewMerge/convertProposedJob
    description: "Converts an approved proposed job into an actual job.

Takes a previously approved proposed job and creates a real job from it. The proposed
job must have been approved before conversion."
  - name: create
    link: /docs/reference/client-sdk/api-reference/reviewMerge/create
    description: "Creates a new review-merge request.

Initiates a review workflow for a set of changes. The request will enter the pending
state and can be reviewed, locked, and eventually merged."
  - name: createUnlockRequest
    link: /docs/reference/client-sdk/api-reference/reviewMerge/createUnlockRequest
    description: "Creates an unlock request for a locked review-merge request.

When a review is locked by another agent, this creates a formal request to unlock it.
The lock holder can then approve or reject the unlock request."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/reviewMerge/delete
    description: "Deletes a review-merge request.

Permanently removes a review-merge request and all associated data. This action
cannot be undone."
  - name: get
    link: /docs/reference/client-sdk/api-reference/reviewMerge/get
    description: "Retrieves a specific review-merge request by its ID.

Fetches the full details of a single review-merge request including its current
status, reviews, pheromones, and linked jobs."
  - name: getAll
    link: /docs/reference/client-sdk/api-reference/reviewMerge/getAll
    description: "Retrieves all review-merge requests, optionally filtered by query parameters.

Returns the complete list of review-merge requests. Use the optional params to filter
by status, date range, or other criteria supported by the server."
  - name: getByAgent
    link: /docs/reference/client-sdk/api-reference/reviewMerge/getByAgent
    description: "Retrieves all review-merge requests associated with a specific agent.

Filters requests by the agent that created or is assigned to them. Useful for
building agent-specific review dashboards or tracking an agent's review workload."
  - name: getBySwarm
    link: /docs/reference/client-sdk/api-reference/reviewMerge/getBySwarm
    description: "Retrieves all review-merge requests associated with a specific swarm.

Filters requests by the swarm that generated them. Useful for monitoring review
activity within a particular swarm context."
  - name: getPending
    link: /docs/reference/client-sdk/api-reference/reviewMerge/getPending
    description: "Retrieves all pending review-merge requests.

Returns requests that are awaiting review and have not yet been approved or rejected.
Use this to build a review queue or dashboard showing outstanding work."
  - name: getPheromoneTypes
    link: /docs/reference/client-sdk/api-reference/reviewMerge/getPheromoneTypes
    description: "Retrieves the list of available pheromone types.

Pheromones are tags or signals that can be attached to review requests to communicate
metadata to other agents. This returns the set of recognized pheromone type strings."
  - name: getReadyToMerge
    link: /docs/reference/client-sdk/api-reference/reviewMerge/getReadyToMerge
    description: "Retrieves all review-merge requests that are approved and ready to merge.

Filters for requests that have passed all review criteria and can be merged immediately.
Useful for automated merge pipelines or merge-ready dashboards."
  - name: getStatistics
    link: /docs/reference/client-sdk/api-reference/reviewMerge/getStatistics
    description: "Retrieves aggregate statistics about review-merge requests.

Returns counts and metrics across all review states, useful for monitoring review
throughput and identifying bottlenecks in the review process."
  - name: lock
    link: /docs/reference/client-sdk/api-reference/reviewMerge/lock
    description: "Locks a review-merge request to prevent concurrent modifications.

Acquiring a lock ensures exclusive access while performing operations on the request.
Other agents attempting to modify a locked request will be blocked."
  - name: merge
    link: /docs/reference/client-sdk/api-reference/reviewMerge/merge
    description: "Merges an approved review-merge request.

Executes the final merge operation on a review that has been approved and is ready
to merge. This applies the associated changes to the target branch or codebase."
  - name: rejectProposedJob
    link: /docs/reference/client-sdk/api-reference/reviewMerge/rejectProposedJob
    description: "Rejects a proposed job on a review-merge request.

Marks the proposed job as rejected, preventing it from being converted into an actual job."
  - name: rejectUnlockRequest
    link: /docs/reference/client-sdk/api-reference/reviewMerge/rejectUnlockRequest
    description: "Rejects an unlock request, keeping the review-merge request locked.

The lock holder calls this to deny an unlock request from another agent."
  - name: removeLinkedJob
    link: /docs/reference/client-sdk/api-reference/reviewMerge/removeLinkedJob
    description: "Removes a linked job from a review-merge request.

Disassociates a previously linked job from the review request."
  - name: removePheromone
    link: /docs/reference/client-sdk/api-reference/reviewMerge/removePheromone
    description: "Removes a pheromone tag from a review-merge request.

Detaches a previously added pheromone by its type string from the review request."
  - name: unlock
    link: /docs/reference/client-sdk/api-reference/reviewMerge/unlock
    description: "Unlocks a previously locked review-merge request.

Releases the lock on a review request, allowing other agents to modify it again."
  - name: update
    link: /docs/reference/client-sdk/api-reference/reviewMerge/update
    description: "Updates an existing review-merge request.

Modifies the mutable fields of a review-merge request such as title, description,
or other metadata. Does not change the review status."
  - name: updateStatus
    link: /docs/reference/client-sdk/api-reference/reviewMerge/updateStatus
    description: "Updates the status of a review-merge request.

Transitions the request to a new review status (e.g., approved, rejected, needs-changes).
This is the primary mechanism for progressing a request through the review workflow."
---
# ReviewMerge API

Review Merge API

<CBAPICategory />

## Methods

- [`addLinkedJob()`](./addLinkedJob) — Links an existing job to a review-merge request.

Associates a job with this review so that changes from the job are tracked as part
of the review workflow.
- [`addPheromone()`](./addPheromone) — Adds a pheromone tag to a review-merge request.

Pheromones are metadata signals used for inter-agent communication. Adding a pheromone
allows agents to tag reviews with contextual information that other agents can detect.
- [`addProposedJob()`](./addProposedJob) — Adds a proposed job to a review-merge request.

Proposed jobs are suggested work items that arise from the review process. They must
be approved before being converted into actual jobs.
- [`addReview()`](./addReview) — Adds a review or feedback to a review-merge request.

Submits review feedback (approval, rejection, or comments) from a reviewer.
Multiple reviews can be added from different reviewers.
- [`approveProposedJob()`](./approveProposedJob) — Approves a proposed job on a review-merge request.

Marks the proposed job as approved, making it eligible for conversion into an actual job.
- [`approveUnlockRequest()`](./approveUnlockRequest) — Approves an unlock request, releasing the lock on a review-merge request.

The lock holder calls this to grant an unlock request from another agent.
- [`convertProposedJob()`](./convertProposedJob) — Converts an approved proposed job into an actual job.

Takes a previously approved proposed job and creates a real job from it. The proposed
job must have been approved before conversion.
- [`create()`](./create) — Creates a new review-merge request.

Initiates a review workflow for a set of changes. The request will enter the pending
state and can be reviewed, locked, and eventually merged.
- [`createUnlockRequest()`](./createUnlockRequest) — Creates an unlock request for a locked review-merge request.

When a review is locked by another agent, this creates a formal request to unlock it.
The lock holder can then approve or reject the unlock request.
- [`delete()`](./delete) — Deletes a review-merge request.

Permanently removes a review-merge request and all associated data. This action
cannot be undone.
- [`get()`](./get) — Retrieves a specific review-merge request by its ID.

Fetches the full details of a single review-merge request including its current
status, reviews, pheromones, and linked jobs.
- [`getAll()`](./getAll) — Retrieves all review-merge requests, optionally filtered by query parameters.

Returns the complete list of review-merge requests. Use the optional params to filter
by status, date range, or other criteria supported by the server.
- [`getByAgent()`](./getByAgent) — Retrieves all review-merge requests associated with a specific agent.

Filters requests by the agent that created or is assigned to them. Useful for
building agent-specific review dashboards or tracking an agent's review workload.
- [`getBySwarm()`](./getBySwarm) — Retrieves all review-merge requests associated with a specific swarm.

Filters requests by the swarm that generated them. Useful for monitoring review
activity within a particular swarm context.
- [`getPending()`](./getPending) — Retrieves all pending review-merge requests.

Returns requests that are awaiting review and have not yet been approved or rejected.
Use this to build a review queue or dashboard showing outstanding work.
- [`getPheromoneTypes()`](./getPheromoneTypes) — Retrieves the list of available pheromone types.

Pheromones are tags or signals that can be attached to review requests to communicate
metadata to other agents. This returns the set of recognized pheromone type strings.
- [`getReadyToMerge()`](./getReadyToMerge) — Retrieves all review-merge requests that are approved and ready to merge.

Filters for requests that have passed all review criteria and can be merged immediately.
Useful for automated merge pipelines or merge-ready dashboards.
- [`getStatistics()`](./getStatistics) — Retrieves aggregate statistics about review-merge requests.

Returns counts and metrics across all review states, useful for monitoring review
throughput and identifying bottlenecks in the review process.
- [`lock()`](./lock) — Locks a review-merge request to prevent concurrent modifications.

Acquiring a lock ensures exclusive access while performing operations on the request.
Other agents attempting to modify a locked request will be blocked.
- [`merge()`](./merge) — Merges an approved review-merge request.

Executes the final merge operation on a review that has been approved and is ready
to merge. This applies the associated changes to the target branch or codebase.
- [`rejectProposedJob()`](./rejectProposedJob) — Rejects a proposed job on a review-merge request.

Marks the proposed job as rejected, preventing it from being converted into an actual job.
- [`rejectUnlockRequest()`](./rejectUnlockRequest) — Rejects an unlock request, keeping the review-merge request locked.

The lock holder calls this to deny an unlock request from another agent.
- [`removeLinkedJob()`](./removeLinkedJob) — Removes a linked job from a review-merge request.

Disassociates a previously linked job from the review request.
- [`removePheromone()`](./removePheromone) — Removes a pheromone tag from a review-merge request.

Detaches a previously added pheromone by its type string from the review request.
- [`unlock()`](./unlock) — Unlocks a previously locked review-merge request.

Releases the lock on a review request, allowing other agents to modify it again.
- [`update()`](./update) — Updates an existing review-merge request.

Modifies the mutable fields of a review-merge request such as title, description,
or other metadata. Does not change the review status.
- [`updateStatus()`](./updateStatus) — Updates the status of a review-merge request.

Transitions the request to a new review status (e.g., approved, rejected, needs-changes).
This is the primary mechanism for progressing a request through the review workflow.
