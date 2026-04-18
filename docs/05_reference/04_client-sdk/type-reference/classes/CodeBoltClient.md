---
title: CodeBoltClient
---

[**@codebolt/client-sdk**](../index)

***

# Class: CodeBoltClient

Defined in: CodeBolt/packages/clientsdk/src/client.ts:140

CodeBoltClient is the main facade that provides access to all CodeBolt API
modules and WebSocket connections. Each module is lazily initialized on first
access to avoid unnecessary resource allocation.

## Example

```typescript
import { CodeBoltClient } from '@codebolt/client-sdk';

const client = new CodeBoltClient({ host: 'localhost', port: 12345 });

// Use HTTP API modules
const threads = await client.chat.getThreadsInfo();
await client.git.commit({ message: 'fix bug' });

// Use WebSocket modules
await client.sockets.shell.connect();
client.sockets.shell.send('ls -la');

// Cleanup
await client.disconnectAll();
```

## Constructors

### Constructor

```ts
new CodeBoltClient(config?: Partial<CodeBoltConfig>): CodeBoltClient;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:255

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config?` | `Partial`\<[`CodeBoltConfig`](../interfaces/CodeBoltConfig)\> |

#### Returns

`CodeBoltClient`

## Accessors

### actionBlocks

#### Get Signature

```ts
get actionBlocks(): ActionBlocksApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:279

Action Blocks API

##### Returns

[`ActionBlocksApi`](ActionBlocksApi)

***

### actionPlans

#### Get Signature

```ts
get actionPlans(): ActionPlansApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:286

Action Plans API

##### Returns

[`ActionPlansApi`](ActionPlansApi)

***

### agentDebugApi

#### Get Signature

```ts
get agentDebugApi(): AgentDebugApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:292

Agent Debug API

##### Returns

[`AgentDebugApi`](AgentDebugApi)

***

### agentDeliberation

#### Get Signature

```ts
get agentDeliberation(): AgentDeliberationApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:299

Agent Deliberation API

##### Returns

[`AgentDeliberationApi`](AgentDeliberationApi)

***

### agentExecution

#### Get Signature

```ts
get agentExecution(): AgentExecutionApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:313

Agent Execution API

##### Returns

[`AgentExecutionApi`](AgentExecutionApi)

***

### agentExecutionPhases

#### Get Signature

```ts
get agentExecutionPhases(): AgentExecutionPhasesApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:306

Agent Execution Phases API

##### Returns

[`AgentExecutionPhasesApi`](AgentExecutionPhasesApi)

***

### agentFlow

#### Get Signature

```ts
get agentFlow(): AgentFlowApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:320

Agent Flow API

##### Returns

[`AgentFlowApi`](AgentFlowApi)

***

### agentPortfolioApi

#### Get Signature

```ts
get agentPortfolioApi(): AgentPortfolioApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:326

Agent Portfolio API

##### Returns

[`AgentPortfolioApi`](AgentPortfolioApi)

***

### agents

#### Get Signature

```ts
get agents(): AgentsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:333

Agents API - agent management

##### Returns

[`AgentsApi`](AgentsApi)

***

### application

#### Get Signature

```ts
get application(): ApplicationApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:339

Application API

##### Returns

[`ApplicationApi`](ApplicationApi)

***

### apps

#### Get Signature

```ts
get apps(): AppsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:345

Apps API

##### Returns

[`AppsApi`](AppsApi)

***

### autoTesting

#### Get Signature

```ts
get autoTesting(): AutoTestingApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:351

Auto Testing API

##### Returns

[`AutoTestingApi`](AutoTestingApi)

***

### backgroundAgents

#### Get Signature

```ts
get backgroundAgents(): BackgroundAgentsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:357

Background Agents API

##### Returns

[`BackgroundAgentsApi`](BackgroundAgentsApi)

***

### browser

#### Get Signature

```ts
get browser(): BrowserApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:364

Browser API - browser automation

##### Returns

[`BrowserApi`](BrowserApi)

***

### calendar

#### Get Signature

```ts
get calendar(): CalendarApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:370

Calendar API

##### Returns

[`CalendarApi`](CalendarApi)

***

### canvas

#### Get Signature

```ts
get canvas(): CanvasApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:376

Canvas API

##### Returns

[`CanvasApi`](CanvasApi)

***

### capability

#### Get Signature

```ts
get capability(): CapabilityApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:382

Capability API

##### Returns

[`CapabilityApi`](CapabilityApi)

***

### chat

#### Get Signature

```ts
get chat(): ChatApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:388

Chat API - thread management, messaging, steps, and steering

##### Returns

[`ChatApi`](ChatApi)

***

### codebaseIndex

#### Get Signature

```ts
get codebaseIndex(): CodebaseIndexApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:394

Codebase Index API

##### Returns

[`CodebaseIndexApi`](CodebaseIndexApi)

***

### codeboltTools

#### Get Signature

```ts
get codeboltTools(): CodeboltToolsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:401

Codebolt Tools API

##### Returns

[`CodeboltToolsApi`](CodeboltToolsApi)

***

### codemap

#### Get Signature

```ts
get codemap(): CodemapApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:408

Codemap API

##### Returns

[`CodemapApi`](CodemapApi)

***

### contextAssembly

#### Get Signature

```ts
get contextAssembly(): ContextAssemblyApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:414

Context Assembly API

##### Returns

[`ContextAssemblyApi`](ContextAssemblyApi)

***

### contextRuleEngine

#### Get Signature

```ts
get contextRuleEngine(): ContextRuleEngineApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:421

Context Rule Engine API

##### Returns

[`ContextRuleEngineApi`](ContextRuleEngineApi)

***

### controllk

#### Get Signature

```ts
get controllk(): ControllkApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:428

Controllk API

##### Returns

[`ControllkApi`](ControllkApi)

***

### editorApi

#### Get Signature

```ts
get editorApi(): EditorApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:434

Editor API

##### Returns

[`EditorApi`](EditorApi)

***

### environmentDebugApi

#### Get Signature

```ts
get environmentDebugApi(): EnvironmentDebugApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:440

Environment Debug API

##### Returns

[`EnvironmentDebugApi`](EnvironmentDebugApi)

***

### environments

#### Get Signature

```ts
get environments(): EnvironmentsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:447

Environments API

##### Returns

[`EnvironmentsApi`](EnvironmentsApi)

***

### eventLog

#### Get Signature

```ts
get eventLog(): EventLogApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:454

Event Log API

##### Returns

[`EventLogApi`](EventLogApi)

***

### file

#### Get Signature

```ts
get file(): FileApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:467

File API

##### Returns

[`FileApi`](FileApi)

***

### fileRead

#### Get Signature

```ts
get fileRead(): FileReadApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:473

File Read API

##### Returns

[`FileReadApi`](FileReadApi)

***

### fileUpdateIntents

#### Get Signature

```ts
get fileUpdateIntents(): FileUpdateIntentsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:460

File Update Intents API

##### Returns

[`FileUpdateIntentsApi`](FileUpdateIntentsApi)

***

### git

#### Get Signature

```ts
get git(): GitApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:479

Git API - git operations

##### Returns

[`GitApi`](GitApi)

***

### history

#### Get Signature

```ts
get history(): HistoryApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:485

History API

##### Returns

[`HistoryApi`](HistoryApi)

***

### hooks

#### Get Signature

```ts
get hooks(): HooksApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:491

Hooks API

##### Returns

[`HooksApi`](HooksApi)

***

### iconView

#### Get Signature

```ts
get iconView(): IconViewApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:497

Icon View API

##### Returns

[`IconViewApi`](IconViewApi)

***

### inbox

#### Get Signature

```ts
get inbox(): InboxApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:503

Inbox API

##### Returns

[`InboxApi`](InboxApi)

***

### jobs

#### Get Signature

```ts
get jobs(): JobsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:509

Jobs API

##### Returns

[`JobsApi`](JobsApi)

***

### knowledge

#### Get Signature

```ts
get knowledge(): KnowledgeApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:522

Knowledge API

##### Returns

[`KnowledgeApi`](KnowledgeApi)

***

### knowledgeGraph

#### Get Signature

```ts
get knowledgeGraph(): KnowledgeGraphApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:515

Knowledge Graph API

##### Returns

[`KnowledgeGraphApi`](KnowledgeGraphApi)

***

### kvStore

#### Get Signature

```ts
get kvStore(): KvStoreApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:528

KV Store API

##### Returns

[`KvStoreApi`](KvStoreApi)

***

### languageServer

#### Get Signature

```ts
get languageServer(): LanguageServerApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:534

Language Server API

##### Returns

[`LanguageServerApi`](LanguageServerApi)

***

### llm

#### Get Signature

```ts
get llm(): LlmApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:541

LLM API - language model operations

##### Returns

[`LlmApi`](LlmApi)

***

### localModels

#### Get Signature

```ts
get localModels(): LocalModelsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:547

Local Models API

##### Returns

[`LocalModelsApi`](LocalModelsApi)

***

### mail

#### Get Signature

```ts
get mail(): MailApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:553

Mail API

##### Returns

[`MailApi`](MailApi)

***

### mcp

#### Get Signature

```ts
get mcp(): McpApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:559

MCP API

##### Returns

[`McpApi`](McpApi)

***

### memory

#### Get Signature

```ts
get memory(): MemoryApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:572

Memory API

##### Returns

[`MemoryApi`](MemoryApi)

***

### memoryIngestion

#### Get Signature

```ts
get memoryIngestion(): MemoryIngestionApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:565

Memory Ingestion API

##### Returns

[`MemoryIngestionApi`](MemoryIngestionApi)

***

### orchestrator

#### Get Signature

```ts
get orchestrator(): OrchestratorApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:578

Orchestrator API

##### Returns

[`OrchestratorApi`](OrchestratorApi)

***

### persistentMemory

#### Get Signature

```ts
get persistentMemory(): PersistentMemoryApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:585

Persistent Memory API

##### Returns

[`PersistentMemoryApi`](PersistentMemoryApi)

***

### planner

#### Get Signature

```ts
get planner(): PlannerApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:592

Planner API

##### Returns

[`PlannerApi`](PlannerApi)

***

### profile

#### Get Signature

```ts
get profile(): ProfileApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:598

Profile API

##### Returns

[`ProfileApi`](ProfileApi)

***

### projects

#### Get Signature

```ts
get projects(): ProjectsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:611

Projects API - project management

##### Returns

[`ProjectsApi`](ProjectsApi)

***

### projectStructure

#### Get Signature

```ts
get projectStructure(): ProjectStructureApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:604

Project Structure API

##### Returns

[`ProjectStructureApi`](ProjectStructureApi)

***

### requirementPlan

#### Get Signature

```ts
get requirementPlan(): RequirementPlanApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:617

Requirement Plan API

##### Returns

[`RequirementPlanApi`](RequirementPlanApi)

***

### reviewMerge

#### Get Signature

```ts
get reviewMerge(): ReviewMergeApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:624

Review Merge API

##### Returns

[`ReviewMergeApi`](ReviewMergeApi)

***

### roadmap

#### Get Signature

```ts
get roadmap(): RoadmapApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:630

Roadmap API

##### Returns

[`RoadmapApi`](RoadmapApi)

***

### shadowGit

#### Get Signature

```ts
get shadowGit(): ShadowGitApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:636

Shadow Git API

##### Returns

[`ShadowGitApi`](ShadowGitApi)

***

### sockets

#### Get Signature

```ts
get sockets(): CodeBoltSockets;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:737

Socket namespace providing lazy access to all WebSocket connections

##### Returns

[`CodeBoltSockets`](../interfaces/CodeBoltSockets)

***

### specs

#### Get Signature

```ts
get specs(): SpecsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:642

Specs API

##### Returns

[`SpecsApi`](SpecsApi)

***

### swarm

#### Get Signature

```ts
get swarm(): SwarmApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:648

Swarm API

##### Returns

[`SwarmApi`](SwarmApi)

***

### system

#### Get Signature

```ts
get system(): SystemApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:654

System API

##### Returns

[`SystemApi`](SystemApi)

***

### taskActivity

#### Get Signature

```ts
get taskActivity(): TaskActivityApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:660

Task Activity API

##### Returns

[`TaskActivityApi`](TaskActivityApi)

***

### tasks

#### Get Signature

```ts
get tasks(): TasksApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:667

Tasks API - task management

##### Returns

[`TasksApi`](TasksApi)

***

### templates

#### Get Signature

```ts
get templates(): TemplatesApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:673

Templates API

##### Returns

[`TemplatesApi`](TemplatesApi)

***

### terminalProcesses

#### Get Signature

```ts
get terminalProcesses(): TerminalProcessesApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:679

Terminal Processes API

##### Returns

[`TerminalProcessesApi`](TerminalProcessesApi)

***

### themes

#### Get Signature

```ts
get themes(): ThemesApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:686

Themes API

##### Returns

[`ThemesApi`](ThemesApi)

***

### threads

#### Get Signature

```ts
get threads(): ThreadsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:698

Threads API - thread CRUD

##### Returns

[`ThreadsApi`](ThreadsApi)

***

### threadSteps

#### Get Signature

```ts
get threadSteps(): ThreadStepsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:692

Thread Steps API

##### Returns

[`ThreadStepsApi`](ThreadStepsApi)

***

### todos

#### Get Signature

```ts
get todos(): TodosApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:704

Todos API

##### Returns

[`TodosApi`](TodosApi)

***

### updateRequests

#### Get Signature

```ts
get updateRequests(): UpdateRequestsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:710

Update Requests API

##### Returns

[`UpdateRequestsApi`](UpdateRequestsApi)

***

### users

#### Get Signature

```ts
get users(): UsersApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:717

Users API

##### Returns

[`UsersApi`](UsersApi)

***

### vectorDb

#### Get Signature

```ts
get vectorDb(): VectorDbApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:723

Vector DB API

##### Returns

[`VectorDbApi`](VectorDbApi)

***

### workspace

#### Get Signature

```ts
get workspace(): WorkspaceApi;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:729

Workspace API

##### Returns

[`WorkspaceApi`](WorkspaceApi)

## Methods

### addConnections()

```ts
addConnections(socketNames: string[]): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:938

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socketNames` | `string`[] |

#### Returns

`Promise`\<`void`\>

***

### disconnectAll()

```ts
disconnectAll(): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:934

Disconnect all active WebSocket connections.
Safe to call even if no sockets have been initialized.

#### Returns

`Promise`\<`void`\>

***

### getActiveConnections()

```ts
getActiveConnections(): string[];
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:946

#### Returns

`string`[]

***

### getConfig()

```ts
getConfig(): Readonly<CodeBoltConfig>;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:962

Returns the resolved configuration

#### Returns

`Readonly`\<[`CodeBoltConfig`](../interfaces/CodeBoltConfig)\>

***

### getHttpClient()

```ts
getHttpClient(): HttpClient;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:967

Returns the underlying HttpClient for advanced usage

#### Returns

[`HttpClient`](HttpClient)

***

### onAllEvents()

```ts
onAllEvents(callback: (event: SocketEvent) => void): UnsubscribeFn;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:950

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`event`: [`SocketEvent`](../interfaces/SocketEvent)) => `void` |

#### Returns

[`UnsubscribeFn`](../type-aliases/UnsubscribeFn)

***

### onEvents()

```ts
onEvents(filter: EventFilter, callback: (event: SocketEvent) => void): UnsubscribeFn;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:954

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`EventFilter`](../interfaces/EventFilter) |
| `callback` | (`event`: [`SocketEvent`](../interfaces/SocketEvent)) => `void` |

#### Returns

[`UnsubscribeFn`](../type-aliases/UnsubscribeFn)

***

### removeConnections()

```ts
removeConnections(socketNames: string[]): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/client.ts:942

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socketNames` | `string`[] |

#### Returns

`Promise`\<`void`\>
