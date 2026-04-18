---
cbapicategory:
  - name: addAgent
    link: /docs/reference/client-sdk/api-reference/swarm/addAgent
    description: "Add an agent to a swarm.

Registers a new agent with the swarm, making it available for assignment
to teams and roles. Agents are the worker entities that perform tasks
within the swarm context."
  - name: applyToVacancy
    link: /docs/reference/client-sdk/api-reference/swarm/applyToVacancy
    description: "Apply to a vacancy in a swarm.

Submits an application from an agent for a specific vacancy. The agent
will be considered for the position and may be selected based on
qualifications and availability."
  - name: approveSpawnRequest
    link: /docs/reference/client-sdk/api-reference/swarm/approveSpawnRequest
    description: "Approve a spawn request.

Approves a pending spawn request, authorizing the creation of new
agent instances. The agents will be spawned according to the
request specifications."
  - name: approveTerminationRequest
    link: /docs/reference/client-sdk/api-reference/swarm/approveTerminationRequest
    description: "Approve a termination request.

Approves a pending termination request, authorizing the removal
of specified agent instances. The agents will be terminated
gracefully."
  - name: assignRole
    link: /docs/reference/client-sdk/api-reference/swarm/assignRole
    description: "Assign a role to an agent in a swarm.

Grants a role to an agent, giving them the associated permissions
and responsibilities. The agent can now perform actions authorized
by this role."
  - name: closeVacancy
    link: /docs/reference/client-sdk/api-reference/swarm/closeVacancy
    description: "Close a vacancy in a swarm.

Marks a vacancy as closed, preventing further applications. This is
used when a position has been filled or is no longer available."
  - name: createRole
    link: /docs/reference/client-sdk/api-reference/swarm/createRole
    description: "Create a role in a swarm.

Creates a new role that agents can be assigned to. Roles define
agent responsibilities, permissions, and capabilities within the
swarm context."
  - name: createSpawnRequest
    link: /docs/reference/client-sdk/api-reference/swarm/createSpawnRequest
    description: "Create a spawn request for a swarm.

Submits a request to spawn new agent instances within the swarm.
This is used to dynamically scale the swarm by adding more agents
to handle increased workload."
  - name: createSwarm
    link: /docs/reference/client-sdk/api-reference/swarm/createSwarm
    description: "Create a new swarm.

Initializes a new swarm with the specified configuration. Swarms
are the top-level organizational unit for multi-agent coordination,
containing teams, roles, and agents that work together on tasks."
  - name: createTeam
    link: /docs/reference/client-sdk/api-reference/swarm/createTeam
    description: "Create a team in a swarm.

Creates a new team within the swarm, providing organizational structure
for grouping agents. Teams can be assigned specific goals and tasks,
with agents collaborating within the team context."
  - name: createTerminationRequest
    link: /docs/reference/client-sdk/api-reference/swarm/createTerminationRequest
    description: "Create a termination request for a swarm.

Submits a request to terminate specific agent instances within
the swarm. This is used to reduce swarm size or remove specific
agents."
  - name: createVacancy
    link: /docs/reference/client-sdk/api-reference/swarm/createVacancy
    description: "Create a vacancy in a swarm.

Creates a new vacancy that agents can apply for. Vacancies represent
open positions within teams or roles that need to be filled by
qualified agents."
  - name: deleteRole
    link: /docs/reference/client-sdk/api-reference/swarm/deleteRole
    description: "Delete a role from a swarm.

Permanently removes a role and unassigns all agents from it.
Agents will lose the permissions and responsibilities associated
with the role."
  - name: deleteSwarm
    link: /docs/reference/client-sdk/api-reference/swarm/deleteSwarm
    description: "Delete a swarm by ID.

Permanently removes a swarm and all its associated resources including
teams, roles, agents, and configurations. This action cannot be undone."
  - name: deleteTeam
    link: /docs/reference/client-sdk/api-reference/swarm/deleteTeam
    description: "Delete a team from a swarm.

Permanently removes a team and all its associated memberships.
Agents will be unassigned from the team but remain in the swarm."
  - name: getAgentsByStatus
    link: /docs/reference/client-sdk/api-reference/swarm/getAgentsByStatus
    description: "Get agents filtered by status in a swarm.

Retrieves all agents in a swarm that match a specific status, such as
all available agents or all agents in error state. This is useful for
finding agents ready for task assignment."
  - name: getAgentStatus
    link: /docs/reference/client-sdk/api-reference/swarm/getAgentStatus
    description: "Get the status of a specific agent in a swarm.

Retrieves current status information for an agent including its
state, last activity timestamp, and any status messages. Use this
for monitoring agent availability and health."
  - name: getConfig
    link: /docs/reference/client-sdk/api-reference/swarm/getConfig
    description: "Get the configuration of a swarm.

Retrieves the current configuration settings for a swarm, including
operational parameters, limits, and behavioral settings. Use this
to view swarm settings or for configuration management."
  - name: getExecutionStatus
    link: /docs/reference/client-sdk/api-reference/swarm/getExecutionStatus
    description: "Get the execution status of a swarm.

Retrieves real-time information about swarm execution including
current tasks, agent activity, progress metrics, and any errors
or warnings encountered."
  - name: getLayout
    link: /docs/reference/client-sdk/api-reference/swarm/getLayout
    description: "Get the swarm layout.

Retrieves the current layout configuration for swarms in the system.
The layout defines how swarms, teams, and agents are organized and
displayed in user interfaces."
  - name: getRole
    link: /docs/reference/client-sdk/api-reference/swarm/getRole
    description: "Get a role by ID within a swarm.

Retrieves detailed information about a specific role including its
permissions and assigned agents. Use this for displaying role details
or managing role assignments."
  - name: getRoleAgents
    link: /docs/reference/client-sdk/api-reference/swarm/getRoleAgents
    description: "Get agents assigned to a specific role.

Retrieves all agents that currently have the specified role assigned
to them. Use this to view role membership or manage role assignments."
  - name: getRoleStatistics
    link: /docs/reference/client-sdk/api-reference/swarm/getRoleStatistics
    description: "Get role statistics for a swarm.

Retrieves statistical information about all roles in a swarm,
including assignment counts, utilization rates, and activity metrics.
Use this for monitoring role distribution and workload balance."
  - name: getSpawnRegistry
    link: /docs/reference/client-sdk/api-reference/swarm/getSpawnRegistry
    description: "Get the spawn registry for a swarm.

Retrieves the spawn registry containing information about all
agents that have been spawned for the swarm, including their
configuration and lifecycle status."
  - name: getSwarm
    link: /docs/reference/client-sdk/api-reference/swarm/getSwarm
    description: "Get a swarm by ID.

Retrieves detailed information about a specific swarm including
its configuration, teams, roles, and agents. Use this for displaying
swarm details or managing swarm state."
  - name: getSwarmStatus
    link: /docs/reference/client-sdk/api-reference/swarm/getSwarmStatus
    description: "Get the overall status of a swarm.

Retrieves comprehensive status information about a swarm including
its operational state, agent availability, team health, and overall
readiness to execute tasks."
  - name: getTeam
    link: /docs/reference/client-sdk/api-reference/swarm/getTeam
    description: "Get a team by ID within a swarm.

Retrieves detailed information about a specific team including its
members, roles, and configuration. Use this for displaying team
details or managing team state."
  - name: getTeamMembers
    link: /docs/reference/client-sdk/api-reference/swarm/getTeamMembers
    description: "Get the members of a team within a swarm.

Retrieves all agents that are currently members of the specified team.
Use this to view team composition or manage team membership."
  - name: getTeamStatistics
    link: /docs/reference/client-sdk/api-reference/swarm/getTeamStatistics
    description: "Get team statistics for a swarm.

Retrieves statistical information about all teams in a swarm,
including member counts, activity levels, and performance metrics.
Use this for monitoring team health and utilization."
  - name: getTerminationRegistry
    link: /docs/reference/client-sdk/api-reference/swarm/getTerminationRegistry
    description: "Get the termination registry for a swarm.

Retrieves the termination registry containing information about
all agents that have been terminated from the swarm, including
their lifecycle history and termination reasons."
  - name: healthCheck
    link: /docs/reference/client-sdk/api-reference/swarm/healthCheck
    description: "Health check for swarm service.

Returns service status, useful for monitoring and health dashboards."
  - name: joinTeam
    link: /docs/reference/client-sdk/api-reference/swarm/joinTeam
    description: "Join a team within a swarm.

Adds an agent to a team as a member. The agent will be associated
with the team and can participate in team-specific tasks and
activities."
  - name: leaveTeam
    link: /docs/reference/client-sdk/api-reference/swarm/leaveTeam
    description: "Leave a team within a swarm.

Removes an agent from a team, ending their membership. The agent
will no longer participate in team activities but remains in the
swarm."
  - name: listAgents
    link: /docs/reference/client-sdk/api-reference/swarm/listAgents
    description: "List agents in a swarm.

Retrieves all agents registered with a specific swarm, optionally
filtered by query parameters. Use this to view available agents
or populate agent selection interfaces."
  - name: listRoles
    link: /docs/reference/client-sdk/api-reference/swarm/listRoles
    description: "List roles in a swarm.

Retrieves all roles defined in a swarm, optionally filtered by query
parameters. Use this to view available roles or populate role
selection interfaces."
  - name: listSpawnRequests
    link: /docs/reference/client-sdk/api-reference/swarm/listSpawnRequests
    description: "List spawn requests for a swarm.

Retrieves all spawn requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
spawn request status and history."
  - name: listSwarms
    link: /docs/reference/client-sdk/api-reference/swarm/listSwarms
    description: "List all swarms.

Retrieves all swarms in the system, optionally filtered by query
parameters. Use this to discover available swarms or populate
swarm selection interfaces."
  - name: listTeams
    link: /docs/reference/client-sdk/api-reference/swarm/listTeams
    description: "List teams in a swarm.

Retrieves all teams within a swarm, optionally filtered by query
parameters. Use this to view team structure or populate team
selection interfaces."
  - name: listTerminationRequests
    link: /docs/reference/client-sdk/api-reference/swarm/listTerminationRequests
    description: "List termination requests for a swarm.

Retrieves all termination requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
termination request status and history."
  - name: listVacancies
    link: /docs/reference/client-sdk/api-reference/swarm/listVacancies
    description: "List vacancies in a swarm.

Retrieves all open vacancies in a swarm, optionally filtered by query
parameters. Use this to find available positions for agents to apply."
  - name: rejectSpawnRequest
    link: /docs/reference/client-sdk/api-reference/swarm/rejectSpawnRequest
    description: "Reject a spawn request.

Rejects a pending spawn request, preventing the creation of new
agent instances. The request will be marked as rejected and
no agents will be spawned."
  - name: rejectTerminationRequest
    link: /docs/reference/client-sdk/api-reference/swarm/rejectTerminationRequest
    description: "Reject a termination request.

Rejects a pending termination request, preventing the removal of
agent instances. The agents will continue operating in the swarm."
  - name: removeAgent
    link: /docs/reference/client-sdk/api-reference/swarm/removeAgent
    description: "Remove an agent from a swarm.

Unregisters an agent from the swarm, removing it from all teams
and roles. The agent will no longer participate in swarm activities."
  - name: saveLayout
    link: /docs/reference/client-sdk/api-reference/swarm/saveLayout
    description: "Save or update the swarm layout.

Persists a new layout configuration for swarms. The layout defines
how swarms, teams, and agents are organized and displayed. Use
this to save custom arrangements or update the structure."
  - name: startSwarm
    link: /docs/reference/client-sdk/api-reference/swarm/startSwarm
    description: "Start a swarm.

Activates a swarm, enabling it to begin processing tasks and
coordinating agent activities. The swarm will start executing
its assigned workflow according to its configuration."
  - name: stopSwarm
    link: /docs/reference/client-sdk/api-reference/swarm/stopSwarm
    description: "Stop a swarm.

Deactivates a swarm, halting all in-progress tasks and agent
activities. The swarm will gracefully shut down and return to
an idle state."
  - name: unassignRole
    link: /docs/reference/client-sdk/api-reference/swarm/unassignRole
    description: "Unassign a role from an agent in a swarm.

Removes a role from an agent, revoking the associated permissions
and responsibilities. The agent will no longer be able to perform
actions authorized by this role."
  - name: updateAgentStatus
    link: /docs/reference/client-sdk/api-reference/swarm/updateAgentStatus
    description: "Update the status of an agent in a swarm.

Changes the operational status of an agent, such as marking it as
available, busy, offline, or in error. Status updates affect agent
assignment and task distribution."
  - name: updateConfig
    link: /docs/reference/client-sdk/api-reference/swarm/updateConfig
    description: "Update the configuration of a swarm.

Modifies the configuration settings for a swarm. Changes take effect
immediately and affect all subsequent swarm operations. Use this
to adjust swarm behavior and operational parameters."
---
# Swarm API

Swarm API

<CBAPICategory />

## Methods

- [`addAgent()`](./addAgent) — Add an agent to a swarm.

Registers a new agent with the swarm, making it available for assignment
to teams and roles. Agents are the worker entities that perform tasks
within the swarm context.
- [`applyToVacancy()`](./applyToVacancy) — Apply to a vacancy in a swarm.

Submits an application from an agent for a specific vacancy. The agent
will be considered for the position and may be selected based on
qualifications and availability.
- [`approveSpawnRequest()`](./approveSpawnRequest) — Approve a spawn request.

Approves a pending spawn request, authorizing the creation of new
agent instances. The agents will be spawned according to the
request specifications.
- [`approveTerminationRequest()`](./approveTerminationRequest) — Approve a termination request.

Approves a pending termination request, authorizing the removal
of specified agent instances. The agents will be terminated
gracefully.
- [`assignRole()`](./assignRole) — Assign a role to an agent in a swarm.

Grants a role to an agent, giving them the associated permissions
and responsibilities. The agent can now perform actions authorized
by this role.
- [`closeVacancy()`](./closeVacancy) — Close a vacancy in a swarm.

Marks a vacancy as closed, preventing further applications. This is
used when a position has been filled or is no longer available.
- [`createRole()`](./createRole) — Create a role in a swarm.

Creates a new role that agents can be assigned to. Roles define
agent responsibilities, permissions, and capabilities within the
swarm context.
- [`createSpawnRequest()`](./createSpawnRequest) — Create a spawn request for a swarm.

Submits a request to spawn new agent instances within the swarm.
This is used to dynamically scale the swarm by adding more agents
to handle increased workload.
- [`createSwarm()`](./createSwarm) — Create a new swarm.

Initializes a new swarm with the specified configuration. Swarms
are the top-level organizational unit for multi-agent coordination,
containing teams, roles, and agents that work together on tasks.
- [`createTeam()`](./createTeam) — Create a team in a swarm.

Creates a new team within the swarm, providing organizational structure
for grouping agents. Teams can be assigned specific goals and tasks,
with agents collaborating within the team context.
- [`createTerminationRequest()`](./createTerminationRequest) — Create a termination request for a swarm.

Submits a request to terminate specific agent instances within
the swarm. This is used to reduce swarm size or remove specific
agents.
- [`createVacancy()`](./createVacancy) — Create a vacancy in a swarm.

Creates a new vacancy that agents can apply for. Vacancies represent
open positions within teams or roles that need to be filled by
qualified agents.
- [`deleteRole()`](./deleteRole) — Delete a role from a swarm.

Permanently removes a role and unassigns all agents from it.
Agents will lose the permissions and responsibilities associated
with the role.
- [`deleteSwarm()`](./deleteSwarm) — Delete a swarm by ID.

Permanently removes a swarm and all its associated resources including
teams, roles, agents, and configurations. This action cannot be undone.
- [`deleteTeam()`](./deleteTeam) — Delete a team from a swarm.

Permanently removes a team and all its associated memberships.
Agents will be unassigned from the team but remain in the swarm.
- [`getAgentsByStatus()`](./getAgentsByStatus) — Get agents filtered by status in a swarm.

Retrieves all agents in a swarm that match a specific status, such as
all available agents or all agents in error state. This is useful for
finding agents ready for task assignment.
- [`getAgentStatus()`](./getAgentStatus) — Get the status of a specific agent in a swarm.

Retrieves current status information for an agent including its
state, last activity timestamp, and any status messages. Use this
for monitoring agent availability and health.
- [`getConfig()`](./getConfig) — Get the configuration of a swarm.

Retrieves the current configuration settings for a swarm, including
operational parameters, limits, and behavioral settings. Use this
to view swarm settings or for configuration management.
- [`getExecutionStatus()`](./getExecutionStatus) — Get the execution status of a swarm.

Retrieves real-time information about swarm execution including
current tasks, agent activity, progress metrics, and any errors
or warnings encountered.
- [`getLayout()`](./getLayout) — Get the swarm layout.

Retrieves the current layout configuration for swarms in the system.
The layout defines how swarms, teams, and agents are organized and
displayed in user interfaces.
- [`getRole()`](./getRole) — Get a role by ID within a swarm.

Retrieves detailed information about a specific role including its
permissions and assigned agents. Use this for displaying role details
or managing role assignments.
- [`getRoleAgents()`](./getRoleAgents) — Get agents assigned to a specific role.

Retrieves all agents that currently have the specified role assigned
to them. Use this to view role membership or manage role assignments.
- [`getRoleStatistics()`](./getRoleStatistics) — Get role statistics for a swarm.

Retrieves statistical information about all roles in a swarm,
including assignment counts, utilization rates, and activity metrics.
Use this for monitoring role distribution and workload balance.
- [`getSpawnRegistry()`](./getSpawnRegistry) — Get the spawn registry for a swarm.

Retrieves the spawn registry containing information about all
agents that have been spawned for the swarm, including their
configuration and lifecycle status.
- [`getSwarm()`](./getSwarm) — Get a swarm by ID.

Retrieves detailed information about a specific swarm including
its configuration, teams, roles, and agents. Use this for displaying
swarm details or managing swarm state.
- [`getSwarmStatus()`](./getSwarmStatus) — Get the overall status of a swarm.

Retrieves comprehensive status information about a swarm including
its operational state, agent availability, team health, and overall
readiness to execute tasks.
- [`getTeam()`](./getTeam) — Get a team by ID within a swarm.

Retrieves detailed information about a specific team including its
members, roles, and configuration. Use this for displaying team
details or managing team state.
- [`getTeamMembers()`](./getTeamMembers) — Get the members of a team within a swarm.

Retrieves all agents that are currently members of the specified team.
Use this to view team composition or manage team membership.
- [`getTeamStatistics()`](./getTeamStatistics) — Get team statistics for a swarm.

Retrieves statistical information about all teams in a swarm,
including member counts, activity levels, and performance metrics.
Use this for monitoring team health and utilization.
- [`getTerminationRegistry()`](./getTerminationRegistry) — Get the termination registry for a swarm.

Retrieves the termination registry containing information about
all agents that have been terminated from the swarm, including
their lifecycle history and termination reasons.
- [`healthCheck()`](./healthCheck) — Health check for swarm service.

Returns service status, useful for monitoring and health dashboards.
- [`joinTeam()`](./joinTeam) — Join a team within a swarm.

Adds an agent to a team as a member. The agent will be associated
with the team and can participate in team-specific tasks and
activities.
- [`leaveTeam()`](./leaveTeam) — Leave a team within a swarm.

Removes an agent from a team, ending their membership. The agent
will no longer participate in team activities but remains in the
swarm.
- [`listAgents()`](./listAgents) — List agents in a swarm.

Retrieves all agents registered with a specific swarm, optionally
filtered by query parameters. Use this to view available agents
or populate agent selection interfaces.
- [`listRoles()`](./listRoles) — List roles in a swarm.

Retrieves all roles defined in a swarm, optionally filtered by query
parameters. Use this to view available roles or populate role
selection interfaces.
- [`listSpawnRequests()`](./listSpawnRequests) — List spawn requests for a swarm.

Retrieves all spawn requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
spawn request status and history.
- [`listSwarms()`](./listSwarms) — List all swarms.

Retrieves all swarms in the system, optionally filtered by query
parameters. Use this to discover available swarms or populate
swarm selection interfaces.
- [`listTeams()`](./listTeams) — List teams in a swarm.

Retrieves all teams within a swarm, optionally filtered by query
parameters. Use this to view team structure or populate team
selection interfaces.
- [`listTerminationRequests()`](./listTerminationRequests) — List termination requests for a swarm.

Retrieves all termination requests associated with a swarm, including
pending, approved, and completed requests. Use this to track
termination request status and history.
- [`listVacancies()`](./listVacancies) — List vacancies in a swarm.

Retrieves all open vacancies in a swarm, optionally filtered by query
parameters. Use this to find available positions for agents to apply.
- [`rejectSpawnRequest()`](./rejectSpawnRequest) — Reject a spawn request.

Rejects a pending spawn request, preventing the creation of new
agent instances. The request will be marked as rejected and
no agents will be spawned.
- [`rejectTerminationRequest()`](./rejectTerminationRequest) — Reject a termination request.

Rejects a pending termination request, preventing the removal of
agent instances. The agents will continue operating in the swarm.
- [`removeAgent()`](./removeAgent) — Remove an agent from a swarm.

Unregisters an agent from the swarm, removing it from all teams
and roles. The agent will no longer participate in swarm activities.
- [`saveLayout()`](./saveLayout) — Save or update the swarm layout.

Persists a new layout configuration for swarms. The layout defines
how swarms, teams, and agents are organized and displayed. Use
this to save custom arrangements or update the structure.
- [`startSwarm()`](./startSwarm) — Start a swarm.

Activates a swarm, enabling it to begin processing tasks and
coordinating agent activities. The swarm will start executing
its assigned workflow according to its configuration.
- [`stopSwarm()`](./stopSwarm) — Stop a swarm.

Deactivates a swarm, halting all in-progress tasks and agent
activities. The swarm will gracefully shut down and return to
an idle state.
- [`unassignRole()`](./unassignRole) — Unassign a role from an agent in a swarm.

Removes a role from an agent, revoking the associated permissions
and responsibilities. The agent will no longer be able to perform
actions authorized by this role.
- [`updateAgentStatus()`](./updateAgentStatus) — Update the status of an agent in a swarm.

Changes the operational status of an agent, such as marking it as
available, busy, offline, or in error. Status updates affect agent
assignment and task distribution.
- [`updateConfig()`](./updateConfig) — Update the configuration of a swarm.

Modifies the configuration settings for a swarm. Changes take effect
immediately and affect all subsequent swarm operations. Use this
to adjust swarm behavior and operational parameters.
