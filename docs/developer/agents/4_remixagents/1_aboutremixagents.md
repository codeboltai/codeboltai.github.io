---
sidebar_label: About Remix Agents
---

# Remix Agent

## Overview

The Remix Agent is a specialized version of an existing agent designed to provide greater flexibility. It enables the modification of both the model and the MCP (Model Context Protocol) that the agent employs. This functionality is particularly beneficial in circumstances requiring real-time adjustments, negating the need for deploying a new agent version.

## Key Features

- **Model Change**: Effortlessly update the model used by the agent to align with new requirements or datasets.
- **MCP Adjustment**: Alter the MCP configuration to facilitate customized processing workflows.

## Usage

The Remix Agent is suitable for environments where there is a need for real-time adjustments to agent behavior. This can be due to varying processing requirements or different resource configurations.


1. Navigate to the chat window and click on the "Create Agent" option.
   ![How to create remix agent](/img/howtocreateremix.png)

2. Select the "Remix Agent" from the options available.
   ![Click on Remix Agent](/img/selectremix.png)

3. Modify the settings of the agent you wish to remix according to your requirements.
   ![Modify settings](/img/modifymodelormcps.png)

## Using Local MCPs

Remix Agents also support using local MCPs (Model Context Protocol), allowing you to leverage your own computing resources for agent execution. This feature is particularly useful for:

- Processing sensitive data that should not leave your environment
- Reducing latency by running MCPs on local infrastructure
- Developing and testing custom MCPs before deployment

To use a local MCP with your Remix Agent:

1. Ensure your local MCP service is running and properly configured
2. When creating or modifying a Remix Agent, select the "Local MCP" option
3. Enter the connection details for your local MCP service
4. Test the connection before finalizing your agent configuration

Local MCPs provide enhanced control over the execution environment while maintaining the flexibility that Remix Agents offer.
