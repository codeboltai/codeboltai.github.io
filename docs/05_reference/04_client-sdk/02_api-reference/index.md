---
title: API Reference
sidebar_position: 1
---
# Client SDK — API Reference

All HTTP API modules exposed by `@codebolt/clientsdk` via `CodeBoltClient`.

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient({ baseUrl: 'http://localhost:3000' });
```

## Modules

| Module | Methods | Description |
|---|---|---|
| [actionBlocks](./actionBlocks/) | 7 | Action Blocks API |
| [actionPlans](./actionPlans/) | 6 | Action Plans API |
| [agentDebugApi](./agentDebugApi/) | 10 | Agent Debug API |
| [agentDeliberation](./agentDeliberation/) | 13 | Agent Deliberation API |
| [agentExecution](./agentExecution/) | 6 | Agent Execution API |
| [agentExecutionPhases](./agentExecutionPhases/) | 6 | Agent Execution Phases API |
| [agentFlow](./agentFlow/) | 5 | Agent Flow API |
| [agentPortfolioApi](./agentPortfolioApi/) | 14 | Agent Portfolio API |
| [agents](./agents/) | 26 | Agents API - agent management |
| [application](./application/) | 17 | Application API |
| [apps](./apps/) | 9 | Apps API |
| [autoTesting](./autoTesting/) | 18 | Auto Testing API |
| [backgroundAgents](./backgroundAgents/) | 5 | Background Agents API |
| [browser](./browser/) | 5 | Browser API - browser automation |
| [calendar](./calendar/) | 14 | Calendar API |
| [canvas](./canvas/) | 3 | Canvas API |
| [capability](./capability/) | 8 | Capability API |
| [chat](./chat/) | 38 | Chat API - thread management, messaging, steps, and steering |
| [codebaseIndex](./codebaseIndex/) | 4 | Codebase Index API |
| [codeboltTools](./codeboltTools/) | 10 | Codebolt Tools API |
| [codemap](./codemap/) | 5 | Codemap API |
| [contextAssembly](./contextAssembly/) | 5 | Context Assembly API |
| [contextRuleEngine](./contextRuleEngine/) | 8 | Context Rule Engine API |
| [controllk](./controllk/) | 1 | Controllk API |
| [editorApi](./editorApi/) | 2 | Editor API |
| [environmentDebugApi](./environmentDebugApi/) | 9 | Environment Debug API |
| [environments](./environments/) | 26 | Environments API |
| [eventLog](./eventLog/) | 8 | Event Log API |
| [file](./file/) | 4 | File API |
| [fileRead](./fileRead/) | 6 | File Read API |
| [fileUpdateIntents](./fileUpdateIntents/) | 11 | File Update Intents API |
| [git](./git/) | 16 | Git API - git operations |
| [history](./history/) | 1 | History API |
| [hooks](./hooks/) | 8 | Hooks API |
| [iconView](./iconView/) | 3 | Icon View API |
| [inbox](./inbox/) | 5 | Inbox API |
| [jobs](./jobs/) | 29 | Jobs API |
| [knowledge](./knowledge/) | 16 | Knowledge API |
| [knowledgeGraph](./knowledgeGraph/) | 28 | Knowledge Graph API |
| [kvStore](./kvStore/) | 10 | KV Store API |
| [languageServer](./languageServer/) | 3 | Language Server API |
| [llm](./llm/) | 15 | LLM API - language model operations |
| [localModels](./localModels/) | 7 | Local Models API |
| [mail](./mail/) | 22 | Mail API |
| [mcp](./mcp/) | 15 | MCP API |
| [memory](./memory/) | 37 | Memory API |
| [memoryIngestion](./memoryIngestion/) | 14 | Memory Ingestion API |
| [orchestrator](./orchestrator/) | 5 | Orchestrator API |
| [persistentMemory](./persistentMemory/) | 12 | Persistent Memory API |
| [planner](./planner/) | 8 | Planner API |
| [profile](./profile/) | 2 | Profile API |
| [projects](./projects/) | 29 | Projects API - project management |
| [projectStructure](./projectStructure/) | 9 | Project Structure API |
| [requirementPlan](./requirementPlan/) | 4 | Requirement Plan API |
| [reviewMerge](./reviewMerge/) | 27 | Review Merge API |
| [roadmap](./roadmap/) | 20 | Roadmap API |
| [shadowGit](./shadowGit/) | 7 | Shadow Git API |
| [sockets](./sockets/) | 33 | Socket namespace providing lazy access to all WebSocket connections |
| [specs](./specs/) | 5 | Specs API |
| [swarm](./swarm/) | 49 | Swarm API |
| [system](./system/) | 3 | System API |
| [taskActivity](./taskActivity/) | 14 | Task Activity API |
| [tasks](./tasks/) | 19 | Tasks API - task management |
| [templates](./templates/) | 2 | Templates API |
| [terminalProcesses](./terminalProcesses/) | 3 | Terminal Processes API |
| [themes](./themes/) | 10 | Themes API |
| [threads](./threads/) | 25 | Threads API - thread CRUD |
| [threadSteps](./threadSteps/) | 18 | Thread Steps API |
| [todos](./todos/) | 14 | Todos API |
| [updateRequests](./updateRequests/) | 14 | Update Requests API |
| [users](./users/) | 5 | Users API |
| [vectorDb](./vectorDb/) | 15 | Vector DB API |
| [workspace](./workspace/) | 5 | Workspace API |
