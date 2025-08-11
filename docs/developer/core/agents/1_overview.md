# Overview

Agents are intelligent assistants in Codebolt that can automate tasks, interact with your code, and enhance your development workflow. They use Codebolt's APIs to perform actions in your editor, making them much more powerful than simple prompt-based tools.

## How Agents Work in Codebolt

Agents operate by understanding your intent, planning tasks, and executing actions directly in your development environment. They can read, write, and refactor code, run tests, and even coordinate with other agents to handle complex workflows.

## Agent Architecture

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


## Agent Flow

The following sequence diagram illustrates the complete flow of how a user request is processed through Codebolt and agents:

```mermaid
sequenceDiagram

    
    participant User
    box Codebolt Editor
        participant Codebolt as Editor UI
        participant LLM as LLM Service
        participant Tools as MCP Services
        participant ServiceMgr as Service Manager
    end
    participant Agent as Custom Agent
    
    User->>Codebolt: Send request/message
    Note over User,Codebolt: User types a request in chat
    
    Codebolt->>Agent: Start agent & forward message
    Note over Codebolt,Agent: Agent Orchestrator routes to appropriate agent
    

        Agent->>ServiceMgr: Send LLM request with context
        Note over Agent,ServiceMgr: Agent calls LLM service via Service Manager
        
        ServiceMgr->>LLM: Route to LLM provider
        Note over ServiceMgr,LLM: Service Manager handles LLM routing
        
        LLM->>ServiceMgr: Return response with tool calls
        ServiceMgr->>Agent: Forward LLM response
        Note over ServiceMgr,Agent: LLM suggests actions and tools to use
    
    loop Till LLM suggests to stop
        Agent->>ServiceMgr: Request tool execution
        Note over Agent,ServiceMgr: Agent calls specific tools via Service Manager
        
        ServiceMgr->>Tools: Execute tool/service
        Note over ServiceMgr,Tools: File, code, MCP services, etc.
        
        Tools->>ServiceMgr: Return tool result
        ServiceMgr->>Agent: Send tool result back

    
        Agent->>ServiceMgr: Send tool results for next LLM call
        Note over Agent,ServiceMgr: Agent reports tool execution results
        
        ServiceMgr->>LLM: Send results to LLM
        LLM->>ServiceMgr: Return next steps or completion
        ServiceMgr->>Agent: Forward LLM response
    end

        Agent->>Codebolt: Task Completed, Send completion message
        Codebolt->>User: Display final result

```

## Creating Agents

There are two main ways to create an agent in Codebolt:
- [Custom Agent](./2_custom-agent.md): Build an agent from scratch with your own logic and features.
- [Remix Agent](./3_remix-agent.md): Start from an existing agent and modify it to fit your needs.
