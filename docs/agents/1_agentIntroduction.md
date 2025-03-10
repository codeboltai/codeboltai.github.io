# App Introduction

Codebolt is an extremely powerful tool for AI Code Editing and AI Code Generation. Most of the power of Codebolt comes from the ability to use Agents. These agents are powerful tools that can be used to automate tasks, generate code, and even create entire applications. 

## What is an Agent?

Codebolt uses AI Agents for doing all the actions. Thing of Codebolt Editor as a big Agent Orchestrator that can use any agent in the marketplace to do any task.
AI Agents interface with Codebolt using Codebolt Editor APIs. They can run any logic from talking to LLMs, updating the code, and any other tasks. They can use decision making power of LLMs to make decisions and take actions.

<!-- ## Codebolt Editor APIs

Codebolt Editor exposes all the functionality of the Editor in the format of APIs. We have created various Libraries to access the Editor APIs. These libraries are available in the following languages:
- [JavaScript](https://github.com/codebolt-ai/codebolt-js)
- [Python](https://github.com/codebolt-ai/codebolt-python) -->

## Codebolt Agents

Codebolt has Multiple Types of Agents that can do various tasks.
- [Universal Agents](./AgentTypes/UniversalAgents/universalAgents.md)
- [Action Agents](./AgentTypes/actionAgents.md)

### Universal Agents
Universal Agents are called whenever the user sends any chat in the editor or asks to perform any action that can be resolved to any agent. You can learn more about them at [Universal Agents](./AgentTypes/UniversalAgents/universalAgents.md)

### Action Agents
Action Agents are called whenever the user sends any chat in the editor or asks to perform any action that can be resolved to any agent. You can learn more about them at [Action Agents](./AgentTypes/actionAgents.md)

