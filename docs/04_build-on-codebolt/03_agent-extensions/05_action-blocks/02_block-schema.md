---
sidebar_position: 2
title: Block Schema
description: Every action block includes an actionblock.yml configuration file that declares its name, entry point, and metadata.
---

# Block Schema

Every action block includes an `actionblock.yml` configuration file that declares its name, entry point, and metadata.

## Full schema

```yaml
# actionblock.yml

name: break-task-into-jobs

description: >
  Analyzes a task using LLM and breaks it into multiple implementation
  sub-jobs. Each sub-job can be executed independently by a worker agent.

version: 1.0.0

entryPoint: dist/index.js

metadata:
  author: Codebolt Team

  tags:
    - orchestrator
    - task-breakdown
    - llm-enhanced

  dependencies:
    - "@codebolt/codeboltjs"
    - "@codebolt/types"

  inputs:
    - name: plan
      type: object
      required: true
      description: |
        The full action plan object for context:
        - planId: string (required)
        - name: string
        - description: string
        - tasks: array

    - name: task
      type: object
      required: true
      description: |
        Single task to break into sub-jobs:
        - taskId: string (required)
        - name: string (required)
        - description: string (required)

    - name: existingJobs
      type: array
      required: false
      description: Array of already created jobs for dependency analysis

  outputs:
    - name: success
      type: boolean
      description: Whether the task breakdown was successful

    - name: subJobs
      type: array
      description: Array of sub-job definitions

    - name: error
      type: string
      description: Error message if breakdown failed
```

## Field reference

| Field | Required | Description |
|---|---|---|
| `name` | Yes | Unique identifier for the action block |
| `description` | Yes | What the block does |
| `version` | Yes | Semver version string |
| `entryPoint` | Yes | Path to the compiled entry file (e.g. `dist/index.js`) |
| `metadata.author` | No | Author name |
| `metadata.tags` | No | Tags for discovery and categorization |
| `metadata.dependencies` | No | NPM package dependencies |
| `metadata.inputs` | No | Array of input parameter definitions (`name`, `type`, `required`, `description`) |
| `metadata.outputs` | No | Array of output definitions (`name`, `type`, `description`) |

## Action block types

Action blocks are categorized by their source:

| Type | Description |
|---|---|
| `filesystem` | Loaded from the local project directory |
| `runtime` | Provided at runtime |
| `builtin` | Shipped with Codebolt |
