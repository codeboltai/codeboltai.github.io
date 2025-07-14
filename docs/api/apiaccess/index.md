---
sidebar_label: API Overview
sidebar_position: 1
cbapicategory:
    - name: Agent
      link: /docs/api/apiaccess/agent
      description: This module provides functionalities for creating customized, high-performance agents tailored to specific needs.
    - name: Browser
      link: /docs/api/apiaccess/browser
      description: The browser module provides functions for interacting with the browser.
    - name: Cbstate
      link: /docs/api/apiaccess/cbstate
      description: This is a state module that gives the current state. The state is being continuously updated by the application based on various actions.
    - name: Chat
      link: /docs/api/apiaccess/chat
      description: This has various chat related functionalities where the agent can send chat to user and get the user response
    - name: CodeParsers
      link: /docs/api/apiaccess/codeparsers
      description: This is a module that parses the code and returns the code tree.
    - name: CodeUtils
      link: /docs/api/apiaccess/codeutils
      description: This is a module that provides various utilities for parsing and manipulating code.

    - name: Crawler
      link: /docs/api/apiaccess/crawler
      description: This is a module that crawls the web and returns the crawled data.
    - name: DbMemory
      link: /docs/api/apiaccess/dbmemory
      description: This is a module that provides memory based database functionalities.
    - name: Debug
      link: /docs/api/apiaccess/debug
      description: This is a module that provides various debug functionalities.
    - name: DocUtils
      link: /docs/api/apiaccess/docutils
      description: This is a module that provides various utilities for parsing and manipulating markdown.
    - name: Fs
      link: /docs/api/apiaccess/fs
      description: This is a module that provides various file system functionalities.
    - name: Git
      link: /docs/api/apiaccess/git
      description: This is a module that provides various git functionalities.
    - name: History
      link: /docs/api/apiaccess/history
      description: This module provides chat history management and summarization functionality for maintaining conversation context.
    - name: Knowledge
      link: /docs/api/apiaccess/knowledge
      description: This is a module that provides various knowledge related functionalities.
    - name: LLM
      link: /docs/api/apiaccess/llm
      description: This is a module that provides various LLM related functionalities.
    - name: OutputParsers
      link: /docs/api/apiaccess/outputparsers
      description: This is a module that parses the output and returns the output tree.
    - name: Project
      link: /docs/api/apiaccess/project
      description: This is a module that provides various project related functionalities.
    - name: Rag
      link: /docs/api/apiaccess/rag
      description: This is a module that provides various RAG related functionalities.
    - name: TaskPlanner
      link: /docs/api/apiaccess/taskplaner
      description: This is a module that provides various task planner related functionalities.
    - name: Terminal
      link: /docs/api/apiaccess/terminal
      description: Handle Terminal Related Functionalities like Running Commands and Getting Output. Supports handling multiple terminals and long running code executions like Servers.
    - name: Tokenizer
      link: /docs/api/apiaccess/tokenizer
      description: Tokenization related Functionalities are provided so that the code can be tokenized and the tokens can be used to perform and measure various operations.
    - name: ToolBox
      link: /docs/api/apiaccess/toolbox
      description: MCP (Model Context Protocol) framework for creating and managing modular tools and services with support for resources, prompts, and session management.
    - name: VectorDB
      link: /docs/api/apiaccess/vectordb
      description: Provides Vector DB related Functionalities for Storing and Managing of Vector Embedding
    - name: MCP
      link: /docs/api/apiaccess/mcp
      description: Manages modular tools and services through WebSocket communication. Execute tools, retrieve tool details, and monitor enabled MCP instances in real-time

---
# Direct API Access

## Overview

Codebolt provides a set of APIs that can be used by agents to interact with the Codebolt application. This allows to build agents that can interact with the Codebolt application. To start using the APIs from an agent, please refer to the Codebolt Agent documentation in the Developer Guide.

## API List

<CBAPICategory />