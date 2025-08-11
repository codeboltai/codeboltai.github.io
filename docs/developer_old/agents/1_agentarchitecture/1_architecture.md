---
sidebar_position: 1
sidebar_label: Architecture Overview
---

# Agent Architecture Overview

The Codebolt Agent Architecture is a sophisticated system designed to enable AI-powered development workflows through intelligent agents. This architecture provides a seamless integration between the Codebolt Editor, various services, and custom agents to deliver powerful automation capabilities.

## High-Level Architecture

```mermaid
graph TB
    subgraph "Codebolt Application"
        A[Codebolt Editor] 
        B[Agent Orchestrator]
        C[Service Manager]

         subgraph "Agent Services"
            K[LLM Providers]
            M[MCP Services]
            E[File System]
        end
    end
    
    subgraph "Agent Runtime"
        F[Custom Agent]
        G[CodeboltJS Library]
        H[Agent Logic]
        I[System Prompts]
        J[Task Instructions]
    end
    A --> B
    A --> C
    F --> G
    G --> H
    H --> I
    H --> J
    
    G <--> C
    
    C <--> E
    C --> K
    C --> M
    B --> F
```

Detailed architecture documentation is being developed. For now, please refer to the [Agent Introduction](../agentIntroduction.md) for basic concepts.

## Key Components

- Agent Runtime Environment
- Communication Protocols
- Tool Integration
- State Management

For immediate help, see the [QuickStart Guide](../quickstart.md).
