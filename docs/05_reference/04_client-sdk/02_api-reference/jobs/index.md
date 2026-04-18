---
cbapicategory:
  - name: acceptSplitProposal
    link: /docs/reference/client-sdk/api-reference/jobs/acceptSplitProposal
    description: "Accepts a split proposal, executing the job decomposition.

Approves the proposal and splits the original job into the proposed
sub-jobs. The original job's status may be updated to reflect the split."
  - name: addDependency
    link: /docs/reference/client-sdk/api-reference/jobs/addDependency
    description: "Adds a dependency between two jobs.

Declares that the specified job depends on another job, meaning it
cannot start until the dependency is resolved. This builds the
job dependency graph used for scheduling."
  - name: addPheromone
    link: /docs/reference/client-sdk/api-reference/jobs/addPheromone
    description: "Deposits a pheromone signal on a job.

Attaches a pheromone of the specified type to the job, which other
agents can detect and use for coordination decisions."
  - name: bulkDelete
    link: /docs/reference/client-sdk/api-reference/jobs/bulkDelete
    description: "Deletes multiple jobs in a single batch operation.

More efficient than deleting jobs one at a time when you need to
remove several jobs simultaneously."
  - name: create
    link: /docs/reference/client-sdk/api-reference/jobs/create
    description: "Creates a new job.

Registers a work item that can be assigned to agents, tracked through
its lifecycle, and coordinated with other jobs via dependencies."
  - name: createGroup
    link: /docs/reference/client-sdk/api-reference/jobs/createGroup
    description: "Creates a new job group.

Groups provide an organizational layer for jobs, allowing you to
categorize and manage them as a collection."
  - name: createLabel
    link: /docs/reference/client-sdk/api-reference/jobs/createLabel
    description: "Creates a new job label.

Registers a label that can be attached to jobs for categorization.
Labels are system-wide and reusable across all jobs."
  - name: createPheromoneType
    link: /docs/reference/client-sdk/api-reference/jobs/createPheromoneType
    description: "Creates a new pheromone type definition.

Registers a new category of pheromone that can subsequently be
deposited on jobs. Pheromone types are system-wide and shared
across all jobs."
  - name: createSplitProposal
    link: /docs/reference/client-sdk/api-reference/jobs/createSplitProposal
    description: "Creates a split proposal for a job.

Proposes breaking a large job into smaller sub-jobs. The proposal
must be accepted before the split is executed. This enables
collaborative task decomposition."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/jobs/delete
    description: "Deletes a job.

Permanently removes a job and its associated data. Dependencies
pointing to this job are also cleaned up."
  - name: deleteGroup
    link: /docs/reference/client-sdk/api-reference/jobs/deleteGroup
    description: "Deletes a job group.

Removes the group. Jobs previously assigned to this group are not
deleted but lose their group association."
  - name: deleteLabel
    link: /docs/reference/client-sdk/api-reference/jobs/deleteLabel
    description: "Deletes a job label by its name.

Removes the label definition. Jobs that previously had this label
will lose the association."
  - name: deletePheromoneType
    link: /docs/reference/client-sdk/api-reference/jobs/deletePheromoneType
    description: "Deletes a pheromone type by its name.

Removes the pheromone type definition from the system. Existing
pheromones of this type on jobs may also be affected."
  - name: deleteSplitProposal
    link: /docs/reference/client-sdk/api-reference/jobs/deleteSplitProposal
    description: "Deletes a split proposal.

Removes a pending split proposal without executing the split.
Use this to reject or cancel a proposed job decomposition."
  - name: get
    link: /docs/reference/client-sdk/api-reference/jobs/get
    description: "Retrieves a specific job by its ID.

Returns the full details of a single job including its status,
dependencies, labels, and pheromones."
  - name: getAggregatedPheromones
    link: /docs/reference/client-sdk/api-reference/jobs/getAggregatedPheromones
    description: "Retrieves aggregated pheromone data for a job.

Returns a summary of all pheromone signals on the job, grouped and
aggregated by type. Useful for dashboards and high-level status views."
  - name: getAll
    link: /docs/reference/client-sdk/api-reference/jobs/getAll
    description: "Lists all jobs, optionally filtered.

Returns every job in the system unless filter parameters are provided
to narrow the results by status, group, label, or other criteria."
  - name: getBlocked
    link: /docs/reference/client-sdk/api-reference/jobs/getBlocked
    description: "Retrieves all currently blocked jobs.

Returns jobs that have unresolved dependencies preventing them from
being executed. Useful for identifying bottlenecks in the job graph."
  - name: getGroups
    link: /docs/reference/client-sdk/api-reference/jobs/getGroups
    description: "Lists all job groups.

Job groups organize related jobs into logical collections, making
it easier to manage large numbers of jobs."
  - name: getJobsByPheromone
    link: /docs/reference/client-sdk/api-reference/jobs/getJobsByPheromone
    description: "Retrieves all jobs that have a specific pheromone type attached.

Useful for finding jobs that share a common signal, enabling
swarm-style discovery of related work items."
  - name: getLabels
    link: /docs/reference/client-sdk/api-reference/jobs/getLabels
    description: "Lists all available job labels.

Labels are tags that can be attached to jobs for categorization
and filtering purposes."
  - name: getPheromones
    link: /docs/reference/client-sdk/api-reference/jobs/getPheromones
    description: "Retrieves all pheromones attached to a specific job.

Returns the list of pheromone signals that have been deposited on the
job by agents, useful for understanding the job's coordination state."
  - name: getPheromoneTypes
    link: /docs/reference/client-sdk/api-reference/jobs/getPheromoneTypes
    description: "Retrieves all registered pheromone types.

Pheromone types define the categories of signals that can be attached
to jobs for swarm-style coordination between agents."
  - name: getReady
    link: /docs/reference/client-sdk/api-reference/jobs/getReady
    description: "Retrieves all jobs that are ready to execute.

Returns jobs whose dependencies have all been satisfied, meaning
they can be picked up by agents immediately."
  - name: getStatistics
    link: /docs/reference/client-sdk/api-reference/jobs/getStatistics
    description: "Retrieves aggregate statistics about the job system.

Returns counts and metrics such as total jobs, jobs by status,
average completion time, and other summary data. Useful for
dashboards and progress reporting."
  - name: removeDependency
    link: /docs/reference/client-sdk/api-reference/jobs/removeDependency
    description: "Removes a dependency from a job.

Detaches the dependency link between the job and its target, which
may unblock the job if this was its only remaining dependency."
  - name: removePheromone
    link: /docs/reference/client-sdk/api-reference/jobs/removePheromone
    description: "Removes a pheromone of a specific type from a job.

Clears the pheromone signal, which may affect coordination behavior
of agents that rely on its presence."
  - name: update
    link: /docs/reference/client-sdk/api-reference/jobs/update
    description: "Updates an existing job.

Modifies job properties such as title, description, status, or
assignee. Only the fields provided in the request body are updated."
  - name: updateGroup
    link: /docs/reference/client-sdk/api-reference/jobs/updateGroup
    description: "Updates an existing job group.

Modifies group properties such as name, description, or metadata."
---
# Jobs API

Jobs API

<CBAPICategory />

## Methods

- [`acceptSplitProposal()`](./acceptSplitProposal) — Accepts a split proposal, executing the job decomposition.

Approves the proposal and splits the original job into the proposed
sub-jobs. The original job's status may be updated to reflect the split.
- [`addDependency()`](./addDependency) — Adds a dependency between two jobs.

Declares that the specified job depends on another job, meaning it
cannot start until the dependency is resolved. This builds the
job dependency graph used for scheduling.
- [`addPheromone()`](./addPheromone) — Deposits a pheromone signal on a job.

Attaches a pheromone of the specified type to the job, which other
agents can detect and use for coordination decisions.
- [`bulkDelete()`](./bulkDelete) — Deletes multiple jobs in a single batch operation.

More efficient than deleting jobs one at a time when you need to
remove several jobs simultaneously.
- [`create()`](./create) — Creates a new job.

Registers a work item that can be assigned to agents, tracked through
its lifecycle, and coordinated with other jobs via dependencies.
- [`createGroup()`](./createGroup) — Creates a new job group.

Groups provide an organizational layer for jobs, allowing you to
categorize and manage them as a collection.
- [`createLabel()`](./createLabel) — Creates a new job label.

Registers a label that can be attached to jobs for categorization.
Labels are system-wide and reusable across all jobs.
- [`createPheromoneType()`](./createPheromoneType) — Creates a new pheromone type definition.

Registers a new category of pheromone that can subsequently be
deposited on jobs. Pheromone types are system-wide and shared
across all jobs.
- [`createSplitProposal()`](./createSplitProposal) — Creates a split proposal for a job.

Proposes breaking a large job into smaller sub-jobs. The proposal
must be accepted before the split is executed. This enables
collaborative task decomposition.
- [`delete()`](./delete) — Deletes a job.

Permanently removes a job and its associated data. Dependencies
pointing to this job are also cleaned up.
- [`deleteGroup()`](./deleteGroup) — Deletes a job group.

Removes the group. Jobs previously assigned to this group are not
deleted but lose their group association.
- [`deleteLabel()`](./deleteLabel) — Deletes a job label by its name.

Removes the label definition. Jobs that previously had this label
will lose the association.
- [`deletePheromoneType()`](./deletePheromoneType) — Deletes a pheromone type by its name.

Removes the pheromone type definition from the system. Existing
pheromones of this type on jobs may also be affected.
- [`deleteSplitProposal()`](./deleteSplitProposal) — Deletes a split proposal.

Removes a pending split proposal without executing the split.
Use this to reject or cancel a proposed job decomposition.
- [`get()`](./get) — Retrieves a specific job by its ID.

Returns the full details of a single job including its status,
dependencies, labels, and pheromones.
- [`getAggregatedPheromones()`](./getAggregatedPheromones) — Retrieves aggregated pheromone data for a job.

Returns a summary of all pheromone signals on the job, grouped and
aggregated by type. Useful for dashboards and high-level status views.
- [`getAll()`](./getAll) — Lists all jobs, optionally filtered.

Returns every job in the system unless filter parameters are provided
to narrow the results by status, group, label, or other criteria.
- [`getBlocked()`](./getBlocked) — Retrieves all currently blocked jobs.

Returns jobs that have unresolved dependencies preventing them from
being executed. Useful for identifying bottlenecks in the job graph.
- [`getGroups()`](./getGroups) — Lists all job groups.

Job groups organize related jobs into logical collections, making
it easier to manage large numbers of jobs.
- [`getJobsByPheromone()`](./getJobsByPheromone) — Retrieves all jobs that have a specific pheromone type attached.

Useful for finding jobs that share a common signal, enabling
swarm-style discovery of related work items.
- [`getLabels()`](./getLabels) — Lists all available job labels.

Labels are tags that can be attached to jobs for categorization
and filtering purposes.
- [`getPheromones()`](./getPheromones) — Retrieves all pheromones attached to a specific job.

Returns the list of pheromone signals that have been deposited on the
job by agents, useful for understanding the job's coordination state.
- [`getPheromoneTypes()`](./getPheromoneTypes) — Retrieves all registered pheromone types.

Pheromone types define the categories of signals that can be attached
to jobs for swarm-style coordination between agents.
- [`getReady()`](./getReady) — Retrieves all jobs that are ready to execute.

Returns jobs whose dependencies have all been satisfied, meaning
they can be picked up by agents immediately.
- [`getStatistics()`](./getStatistics) — Retrieves aggregate statistics about the job system.

Returns counts and metrics such as total jobs, jobs by status,
average completion time, and other summary data. Useful for
dashboards and progress reporting.
- [`removeDependency()`](./removeDependency) — Removes a dependency from a job.

Detaches the dependency link between the job and its target, which
may unblock the job if this was its only remaining dependency.
- [`removePheromone()`](./removePheromone) — Removes a pheromone of a specific type from a job.

Clears the pheromone signal, which may affect coordination behavior
of agents that rely on its presence.
- [`update()`](./update) — Updates an existing job.

Modifies job properties such as title, description, status, or
assignee. Only the fields provided in the request body are updated.
- [`updateGroup()`](./updateGroup) — Updates an existing job group.

Modifies group properties such as name, description, or metadata.
