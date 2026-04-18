---
title: CodeBoltSockets
---

[**@codebolt/client-sdk**](../index)

***

# Interface: CodeBoltSockets

Defined in: CodeBolt/packages/clientsdk/src/client.ts:976

Interface describing the sockets namespace returned by `client.sockets`.
Each property is a lazily-initialized WebSocket module.

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agentdebug"></a> `agentDebug` | `readonly` | [`AgentDebugSocket`](../classes/AgentDebugSocket) | [CodeBolt/packages/clientsdk/src/client.ts:1008](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1008) |
| <a id="agentportfolio"></a> `agentPortfolio` | `readonly` | [`AgentPortfolioSocket`](../classes/AgentPortfolioSocket) | [CodeBolt/packages/clientsdk/src/client.ts:991](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L991) |
| <a id="aiterminal"></a> `aiTerminal` | `readonly` | [`AiTerminalSocket`](../classes/AiTerminalSocket) | [CodeBolt/packages/clientsdk/src/client.ts:984](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L984) |
| <a id="backgroundagent"></a> `backgroundAgent` | `readonly` | [`BackgroundAgentSocket`](../classes/BackgroundAgentSocket) | [CodeBolt/packages/clientsdk/src/client.ts:997](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L997) |
| <a id="browser"></a> `browser` | `readonly` | [`BrowserSocket`](../classes/BrowserSocket) | [CodeBolt/packages/clientsdk/src/client.ts:981](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L981) |
| <a id="calendar"></a> `calendar` | `readonly` | [`CalendarSocket`](../classes/CalendarSocket) | [CodeBolt/packages/clientsdk/src/client.ts:992](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L992) |
| <a id="capability"></a> `capability` | `readonly` | [`CapabilitySocket`](../classes/CapabilitySocket) | [CodeBolt/packages/clientsdk/src/client.ts:988](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L988) |
| <a id="chat"></a> `chat` | `readonly` | [`ChatSocket`](../classes/ChatSocket) | [CodeBolt/packages/clientsdk/src/client.ts:978](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L978) |
| <a id="codebolt"></a> `codebolt` | `readonly` | [`CodeboltSocket`](../classes/CodeboltSocket) | [CodeBolt/packages/clientsdk/src/client.ts:980](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L980) |
| <a id="contextassembly"></a> `contextAssembly` | `readonly` | [`ContextAssemblySocket`](../classes/ContextAssemblySocket) | [CodeBolt/packages/clientsdk/src/client.ts:1001](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1001) |
| <a id="debug"></a> `debug` | `readonly` | [`DebugSocket`](../classes/DebugSocket) | [CodeBolt/packages/clientsdk/src/client.ts:979](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L979) |
| <a id="editor"></a> `editor` | `readonly` | [`EditorSocket`](../classes/EditorSocket) | [CodeBolt/packages/clientsdk/src/client.ts:985](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L985) |
| <a id="environmentdebug"></a> `environmentDebug` | `readonly` | [`EnvironmentDebugSocket`](../classes/EnvironmentDebugSocket) | [CodeBolt/packages/clientsdk/src/client.ts:1009](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1009) |
| <a id="episodicmemory"></a> `episodicMemory` | `readonly` | [`EpisodicMemorySocket`](../classes/EpisodicMemorySocket) | [CodeBolt/packages/clientsdk/src/client.ts:993](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L993) |
| <a id="eventlog"></a> `eventLog` | `readonly` | [`EventLogSocket`](../classes/EventLogSocket) | [CodeBolt/packages/clientsdk/src/client.ts:1003](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1003) |
| <a id="fileupdateintent"></a> `fileUpdateIntent` | `readonly` | [`FileUpdateIntentSocket`](../classes/FileUpdateIntentSocket) | [CodeBolt/packages/clientsdk/src/client.ts:999](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L999) |
| <a id="iconview"></a> `iconView` | `readonly` | [`IconViewSocket`](../classes/IconViewSocket) | [CodeBolt/packages/clientsdk/src/client.ts:1004](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1004) |
| <a id="jobs"></a> `jobs` | `readonly` | [`JobsSocket`](../classes/JobsSocket) | [CodeBolt/packages/clientsdk/src/client.ts:983](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L983) |
| <a id="knowledge"></a> `knowledge` | `readonly` | [`KnowledgeSocket`](../classes/KnowledgeSocket) | [CodeBolt/packages/clientsdk/src/client.ts:998](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L998) |
| <a id="kvstore"></a> `kvStore` | `readonly` | [`KvStoreSocket`](../classes/KvStoreSocket) | [CodeBolt/packages/clientsdk/src/client.ts:1002](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1002) |
| <a id="localmodel"></a> `localModel` | `readonly` | [`LocalModelSocket`](../classes/LocalModelSocket) | [CodeBolt/packages/clientsdk/src/client.ts:1005](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1005) |
| <a id="lsp"></a> `lsp` | `readonly` | [`LspSocket`](../classes/LspSocket) | [CodeBolt/packages/clientsdk/src/client.ts:987](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L987) |
| <a id="main"></a> `main` | `readonly` | [`MainSocket`](../classes/MainSocket) | [CodeBolt/packages/clientsdk/src/client.ts:986](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L986) |
| <a id="orchestrator"></a> `orchestrator` | `readonly` | [`OrchestratorSocket`](../classes/OrchestratorSocket) | [CodeBolt/packages/clientsdk/src/client.ts:1007](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1007) |
| <a id="persistentmemory"></a> `persistentMemory` | `readonly` | [`PersistentMemorySocket`](../classes/PersistentMemorySocket) | [CodeBolt/packages/clientsdk/src/client.ts:1000](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1000) |
| <a id="projectstructure"></a> `projectStructure` | `readonly` | [`ProjectStructureSocket`](../classes/ProjectStructureSocket) | [CodeBolt/packages/clientsdk/src/client.ts:995](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L995) |
| <a id="reviewmerge"></a> `reviewMerge` | `readonly` | [`ReviewMergeSocket`](../classes/ReviewMergeSocket) | [CodeBolt/packages/clientsdk/src/client.ts:990](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L990) |
| <a id="roadmap"></a> `roadmap` | `readonly` | [`RoadmapSocket`](../classes/RoadmapSocket) | [CodeBolt/packages/clientsdk/src/client.ts:994](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L994) |
| <a id="shell"></a> `shell` | `readonly` | [`ShellSocket`](../classes/ShellSocket) | [CodeBolt/packages/clientsdk/src/client.ts:977](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L977) |
| <a id="swarm"></a> `swarm` | `readonly` | [`SwarmSocket`](../classes/SwarmSocket) | [CodeBolt/packages/clientsdk/src/client.ts:989](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L989) |
| <a id="systemalert"></a> `systemAlert` | `readonly` | [`SystemAlertSocket`](../classes/SystemAlertSocket) | [CodeBolt/packages/clientsdk/src/client.ts:1006](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L1006) |
| <a id="tasks"></a> `tasks` | `readonly` | [`TasksSocket`](../classes/TasksSocket) | [CodeBolt/packages/clientsdk/src/client.ts:982](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L982) |
| <a id="updaterequest"></a> `updateRequest` | `readonly` | [`UpdateRequestSocket`](../classes/UpdateRequestSocket) | [CodeBolt/packages/clientsdk/src/client.ts:996](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/client.ts#L996) |
