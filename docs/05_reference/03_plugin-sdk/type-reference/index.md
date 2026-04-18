---
title: index
---

**@codebolt/plugin-sdk**

***

# @codebolt/plugin-sdk

## Enumerations

- [ConnectionPreset](enumerations/ConnectionPreset)

## Classes

- [AgentDebugSocket](classes/AgentDebugSocket)
- [AgentPortfolioSocket](classes/AgentPortfolioSocket)
- [AiTerminalSocket](classes/AiTerminalSocket)
- [BackgroundAgentSocket](classes/BackgroundAgentSocket)
- [BrowserSocket](classes/BrowserSocket)
- [CalendarApi](classes/CalendarApi)
- [CalendarSocket](classes/CalendarSocket)
- [CapabilitySocket](classes/CapabilitySocket)
- [ChatApi](classes/ChatApi)
- [ChatSocket](classes/ChatSocket)
- [CodeboltSocket](classes/CodeboltSocket)
- [ContextAssemblySocket](classes/ContextAssemblySocket)
- [DebugSocket](classes/DebugSocket)
- [EditorSocket](classes/EditorSocket)
- [EnvironmentDebugSocket](classes/EnvironmentDebugSocket)
- [EnvironmentsApi](classes/EnvironmentsApi)
- [EpisodicMemorySocket](classes/EpisodicMemorySocket)
- [EventLogSocket](classes/EventLogSocket)
- [FileApi](classes/FileApi)
- [FileReadApi](classes/FileReadApi)
- [FileUpdateIntentSocket](classes/FileUpdateIntentSocket)
- [GitApi](classes/GitApi)
- [HooksApi](classes/HooksApi)
- [HttpClient](classes/HttpClient)
- [IconViewSocket](classes/IconViewSocket)
- [JobsApi](classes/JobsApi)
- [JobsSocket](classes/JobsSocket)
- [KnowledgeApi](classes/KnowledgeApi)
- [KnowledgeSocket](classes/KnowledgeSocket)
- [KvStoreApi](classes/KvStoreApi)
- [KvStoreSocket](classes/KvStoreSocket)
- [LocalModelSocket](classes/LocalModelSocket)
- [LspSocket](classes/LspSocket)
- [MailApi](classes/MailApi)
- [MainSocket](classes/MainSocket)
- [MessageManager](classes/MessageManager)
- [OrchestratorSocket](classes/OrchestratorSocket)
- [PersistentMemorySocket](classes/PersistentMemorySocket)
- [PluginApiError](classes/PluginApiError)
- [PluginClient](classes/PluginClient)
- [ProjectsApi](classes/ProjectsApi)
- [ProjectStructureSocket](classes/ProjectStructureSocket)
- [ReviewMergeSocket](classes/ReviewMergeSocket)
- [RoadmapSocket](classes/RoadmapSocket)
- [ShellSocket](classes/ShellSocket)
- [SocketConnectionManager](classes/SocketConnectionManager)
- [SwarmSocket](classes/SwarmSocket)
- [SystemAlertSocket](classes/SystemAlertSocket)
- [SystemApi](classes/SystemApi)
- [TasksApi](classes/TasksApi)
- [TasksSocket](classes/TasksSocket)
- [ThreadsApi](classes/ThreadsApi)
- [TodosApi](classes/TodosApi)
- [TypedEventEmitter](classes/TypedEventEmitter)
- [UpdateRequestSocket](classes/UpdateRequestSocket)
- [VectorDbApi](classes/VectorDbApi)

## Interfaces

- [CodeBoltConfig](interfaces/CodeBoltConfig)
- [EventFilter](interfaces/EventFilter)
- [ExecutionGatewayClaimResponse](interfaces/ExecutionGatewayClaimResponse)
- [ExecutionGatewayResponse](interfaces/ExecutionGatewayResponse)
- [ExecutionNotification](interfaces/ExecutionNotification)
- [ExecutionRequest](interfaces/ExecutionRequest)
- [GatewayReply](interfaces/GatewayReply)
- [GatewayRouteResponse](interfaces/GatewayRouteResponse)
- [LlmCompletionRequest](interfaces/LlmCompletionRequest)
- [LlmProviderManifest](interfaces/LlmProviderManifest)
- [LlmProviderModelInfo](interfaces/LlmProviderModelInfo)
- [LlmProviderRegisterResponse](interfaces/LlmProviderRegisterResponse)
- [LlmProviderResponse](interfaces/LlmProviderResponse)
- [LlmStreamRequest](interfaces/LlmStreamRequest)
- [NarrativeExportParams](interfaces/NarrativeExportParams)
- [NarrativeExportResponse](interfaces/NarrativeExportResponse)
- [NarrativeImportParams](interfaces/NarrativeImportParams)
- [NarrativeImportResponse](interfaces/NarrativeImportResponse)
- [NotificationFunctions](interfaces/NotificationFunctions)
- [PluginContext](interfaces/PluginContext)
- [PluginGatewayMessage](interfaces/PluginGatewayMessage)
- [PluginSockets](interfaces/PluginSockets)
- [SocketEvent](interfaces/SocketEvent)

## Type Aliases

- [UnsubscribeFn](type-aliases/UnsubscribeFn)

## Variables

- [default](variables/default)
- [DEFAULT\_CONFIG](variables/DEFAULT_CONFIG)
- [executionGateway](variables/executionGateway)
- [gateway](variables/gateway)
- [llmProvider](variables/llmProvider)
- [narrative](variables/narrative)
- [notificationFunctions](variables/notificationFunctions)

## Functions

- [createPluginHttpClient](functions/createPluginHttpClient)
- [mergeConfig](functions/mergeConfig)
