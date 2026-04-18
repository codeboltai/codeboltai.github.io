---
title: PluginSockets
---

[**@codebolt/plugin-sdk**](../index)

***

# Interface: PluginSockets

Defined in: CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:592

Interface describing the sockets namespace returned by `plugin.sockets`.
Each property is a lazily-initialized socket module connected via /multiplexed.
These provide real-time event subscriptions (push events from server).

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agentdebug"></a> `agentDebug` | `readonly` | [`AgentDebugSocket`](../classes/AgentDebugSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:618](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L618) |
| <a id="agentportfolio"></a> `agentPortfolio` | `readonly` | [`AgentPortfolioSocket`](../classes/AgentPortfolioSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:602](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L602) |
| <a id="aiterminal"></a> `aiTerminal` | `readonly` | [`AiTerminalSocket`](../classes/AiTerminalSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:620](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L620) |
| <a id="backgroundagent"></a> `backgroundAgent` | `readonly` | [`BackgroundAgentSocket`](../classes/BackgroundAgentSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:608](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L608) |
| <a id="browser"></a> `browser` | `readonly` | [`BrowserSocket`](../classes/BrowserSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:598](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L598) |
| <a id="calendarevents"></a> `calendarEvents` | `readonly` | [`CalendarSocket`](../classes/CalendarSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:603](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L603) |
| <a id="capability"></a> `capability` | `readonly` | [`CapabilitySocket`](../classes/CapabilitySocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:599](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L599) |
| <a id="chat"></a> `chat` | `readonly` | [`ChatSocket`](../classes/ChatSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:594](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L594) |
| <a id="contextassembly"></a> `contextAssembly` | `readonly` | [`ContextAssemblySocket`](../classes/ContextAssemblySocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:612](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L612) |
| <a id="editor"></a> `editor` | `readonly` | [`EditorSocket`](../classes/EditorSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:619](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L619) |
| <a id="episodicmemory"></a> `episodicMemory` | `readonly` | [`EpisodicMemorySocket`](../classes/EpisodicMemorySocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:604](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L604) |
| <a id="eventlog"></a> `eventLog` | `readonly` | [`EventLogSocket`](../classes/EventLogSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:614](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L614) |
| <a id="fileupdateintent"></a> `fileUpdateIntent` | `readonly` | [`FileUpdateIntentSocket`](../classes/FileUpdateIntentSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:610](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L610) |
| <a id="iconview"></a> `iconView` | `readonly` | [`IconViewSocket`](../classes/IconViewSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:615](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L615) |
| <a id="jobs"></a> `jobs` | `readonly` | [`JobsSocket`](../classes/JobsSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:596](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L596) |
| <a id="knowledge"></a> `knowledge` | `readonly` | [`KnowledgeSocket`](../classes/KnowledgeSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:609](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L609) |
| <a id="kvstore"></a> `kvStore` | `readonly` | [`KvStoreSocket`](../classes/KvStoreSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:613](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L613) |
| <a id="lsp"></a> `lsp` | `readonly` | [`LspSocket`](../classes/LspSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:621](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L621) |
| <a id="main"></a> `main` | `readonly` | [`MainSocket`](../classes/MainSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:597](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L597) |
| <a id="orchestrator"></a> `orchestrator` | `readonly` | [`OrchestratorSocket`](../classes/OrchestratorSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:617](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L617) |
| <a id="persistentmemory"></a> `persistentMemory` | `readonly` | [`PersistentMemorySocket`](../classes/PersistentMemorySocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:611](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L611) |
| <a id="projectstructure"></a> `projectStructure` | `readonly` | [`ProjectStructureSocket`](../classes/ProjectStructureSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:606](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L606) |
| <a id="reviewmerge"></a> `reviewMerge` | `readonly` | [`ReviewMergeSocket`](../classes/ReviewMergeSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:601](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L601) |
| <a id="roadmap"></a> `roadmap` | `readonly` | [`RoadmapSocket`](../classes/RoadmapSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:605](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L605) |
| <a id="shell"></a> `shell` | `readonly` | [`ShellSocket`](../classes/ShellSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:593](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L593) |
| <a id="swarm"></a> `swarm` | `readonly` | [`SwarmSocket`](../classes/SwarmSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:600](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L600) |
| <a id="systemalert"></a> `systemAlert` | `readonly` | [`SystemAlertSocket`](../classes/SystemAlertSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:616](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L616) |
| <a id="tasks"></a> `tasks` | `readonly` | [`TasksSocket`](../classes/TasksSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:595](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L595) |
| <a id="updaterequest"></a> `updateRequest` | `readonly` | [`UpdateRequestSocket`](../classes/UpdateRequestSocket) | [CodeBolt/packages/pluginSdk/src/core/PluginClient.ts:607](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/PluginClient.ts#L607) |
