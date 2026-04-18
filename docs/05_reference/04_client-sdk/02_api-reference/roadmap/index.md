---
cbapicategory:
  - name: createFeature
    link: /docs/reference/client-sdk/api-reference/roadmap/createFeature
    description: "Creates a new feature within a specific phase.

Adds a feature to the roadmap under the specified phase. Features represent
discrete pieces of functionality planned for delivery."
  - name: createIdea
    link: /docs/reference/client-sdk/api-reference/roadmap/createIdea
    description: "Creates a new idea in the roadmap idea pool.

Adds an idea that can later be reviewed, refined, and potentially promoted
to a full feature on the roadmap."
  - name: createPhase
    link: /docs/reference/client-sdk/api-reference/roadmap/createPhase
    description: "Creates a new roadmap phase.

Adds a high-level phase to the roadmap for organizing features. Phases typically
represent milestones, sprints, or release versions."
  - name: createTaskFromFeature
    link: /docs/reference/client-sdk/api-reference/roadmap/createTaskFromFeature
    description: "Creates a task from a roadmap feature.

Converts a feature into an actionable task in the task management system. This
bridges the gap between roadmap planning and task execution."
  - name: deleteFeature
    link: /docs/reference/client-sdk/api-reference/roadmap/deleteFeature
    description: "Deletes a feature from the roadmap.

Permanently removes a feature. This action cannot be undone."
  - name: deleteIdea
    link: /docs/reference/client-sdk/api-reference/roadmap/deleteIdea
    description: "Deletes an idea from the roadmap idea pool.

Permanently removes an idea. This action cannot be undone."
  - name: deletePhase
    link: /docs/reference/client-sdk/api-reference/roadmap/deletePhase
    description: "Deletes a roadmap phase.

Permanently removes a phase and potentially its associated features. This action
cannot be undone."
  - name: get
    link: /docs/reference/client-sdk/api-reference/roadmap/get
    description: "Retrieves the full roadmap with all phases.

Returns the complete roadmap structure including all phases and their nested features.
Use optional query parameters to filter or paginate results."
  - name: getFeature
    link: /docs/reference/client-sdk/api-reference/roadmap/getFeature
    description: "Retrieves a specific feature by its ID.

Fetches the full details of a single feature including its status, description,
and associated metadata."
  - name: getFeatures
    link: /docs/reference/client-sdk/api-reference/roadmap/getFeatures
    description: "Retrieves all features across all roadmap phases.

Returns a flat list of all features regardless of which phase they belong to.
Use optional query parameters to filter by status, priority, or other criteria."
  - name: getIdea
    link: /docs/reference/client-sdk/api-reference/roadmap/getIdea
    description: "Retrieves a specific idea by its ID.

Fetches the full details of a single idea including its status and review history."
  - name: getIdeas
    link: /docs/reference/client-sdk/api-reference/roadmap/getIdeas
    description: "Retrieves all ideas in the roadmap idea pool.

Ideas are proposals that have not yet been promoted to features. Use optional
query parameters to filter by status or other criteria."
  - name: getPhase
    link: /docs/reference/client-sdk/api-reference/roadmap/getPhase
    description: "Retrieves a specific roadmap phase by its ID.

Fetches the full details of a single phase including its metadata and associated features."
  - name: moveFeature
    link: /docs/reference/client-sdk/api-reference/roadmap/moveFeature
    description: "Moves a feature to a different phase or reorders it within its current phase.

Use this to reorganize the roadmap by relocating features between phases or
changing the display order of features within a phase."
  - name: moveIdeaToRoadmap
    link: /docs/reference/client-sdk/api-reference/roadmap/moveIdeaToRoadmap
    description: "Promotes an idea to the roadmap as a feature.

Converts a reviewed and approved idea into a feature within a specified roadmap phase.
This is the final step in the idea-to-feature pipeline."
  - name: reviewIdea
    link: /docs/reference/client-sdk/api-reference/roadmap/reviewIdea
    description: "Submits an idea for review.

Moves an idea into the review process where it can be evaluated for potential
promotion to a roadmap feature."
  - name: sendFeatureToChat
    link: /docs/reference/client-sdk/api-reference/roadmap/sendFeatureToChat
    description: "Sends a feature to the chat for discussion.

Shares the feature details in a chat context so that team members or agents can
discuss and collaborate on the feature requirements."
  - name: updateFeature
    link: /docs/reference/client-sdk/api-reference/roadmap/updateFeature
    description: "Updates an existing feature.

Modifies the properties of a feature such as its title, description, status, or priority."
  - name: updateIdea
    link: /docs/reference/client-sdk/api-reference/roadmap/updateIdea
    description: "Updates an existing idea.

Modifies the properties of an idea such as its title, description, or status."
  - name: updatePhase
    link: /docs/reference/client-sdk/api-reference/roadmap/updatePhase
    description: "Updates an existing roadmap phase.

Modifies the properties of a phase such as its name, description, or ordering."
---
# Roadmap API

Roadmap API

<CBAPICategory />

## Methods

- [`createFeature()`](./createFeature) — Creates a new feature within a specific phase.

Adds a feature to the roadmap under the specified phase. Features represent
discrete pieces of functionality planned for delivery.
- [`createIdea()`](./createIdea) — Creates a new idea in the roadmap idea pool.

Adds an idea that can later be reviewed, refined, and potentially promoted
to a full feature on the roadmap.
- [`createPhase()`](./createPhase) — Creates a new roadmap phase.

Adds a high-level phase to the roadmap for organizing features. Phases typically
represent milestones, sprints, or release versions.
- [`createTaskFromFeature()`](./createTaskFromFeature) — Creates a task from a roadmap feature.

Converts a feature into an actionable task in the task management system. This
bridges the gap between roadmap planning and task execution.
- [`deleteFeature()`](./deleteFeature) — Deletes a feature from the roadmap.

Permanently removes a feature. This action cannot be undone.
- [`deleteIdea()`](./deleteIdea) — Deletes an idea from the roadmap idea pool.

Permanently removes an idea. This action cannot be undone.
- [`deletePhase()`](./deletePhase) — Deletes a roadmap phase.

Permanently removes a phase and potentially its associated features. This action
cannot be undone.
- [`get()`](./get) — Retrieves the full roadmap with all phases.

Returns the complete roadmap structure including all phases and their nested features.
Use optional query parameters to filter or paginate results.
- [`getFeature()`](./getFeature) — Retrieves a specific feature by its ID.

Fetches the full details of a single feature including its status, description,
and associated metadata.
- [`getFeatures()`](./getFeatures) — Retrieves all features across all roadmap phases.

Returns a flat list of all features regardless of which phase they belong to.
Use optional query parameters to filter by status, priority, or other criteria.
- [`getIdea()`](./getIdea) — Retrieves a specific idea by its ID.

Fetches the full details of a single idea including its status and review history.
- [`getIdeas()`](./getIdeas) — Retrieves all ideas in the roadmap idea pool.

Ideas are proposals that have not yet been promoted to features. Use optional
query parameters to filter by status or other criteria.
- [`getPhase()`](./getPhase) — Retrieves a specific roadmap phase by its ID.

Fetches the full details of a single phase including its metadata and associated features.
- [`moveFeature()`](./moveFeature) — Moves a feature to a different phase or reorders it within its current phase.

Use this to reorganize the roadmap by relocating features between phases or
changing the display order of features within a phase.
- [`moveIdeaToRoadmap()`](./moveIdeaToRoadmap) — Promotes an idea to the roadmap as a feature.

Converts a reviewed and approved idea into a feature within a specified roadmap phase.
This is the final step in the idea-to-feature pipeline.
- [`reviewIdea()`](./reviewIdea) — Submits an idea for review.

Moves an idea into the review process where it can be evaluated for potential
promotion to a roadmap feature.
- [`sendFeatureToChat()`](./sendFeatureToChat) — Sends a feature to the chat for discussion.

Shares the feature details in a chat context so that team members or agents can
discuss and collaborate on the feature requirements.
- [`updateFeature()`](./updateFeature) — Updates an existing feature.

Modifies the properties of a feature such as its title, description, status, or priority.
- [`updateIdea()`](./updateIdea) — Updates an existing idea.

Modifies the properties of an idea such as its title, description, or status.
- [`updatePhase()`](./updatePhase) — Updates an existing roadmap phase.

Modifies the properties of a phase such as its name, description, or ordering.
