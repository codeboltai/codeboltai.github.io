# Universal Agents

Whenever the user sends any chat in the editor, Universal Agents are called to handle that Chat Request. 

The Universal Agents performs the following tasks:
- Understands the user's message and devises a plan to achieve the user's goal.
- Creates a list of tasks to be performed to achieve the user's goal. In a sense, it generates a DAG (Directed Acyclic Graph) of tasks to be performed. See [Task Graph](./taskGraph.md)
- Matches the tasks with the available agents and picks the best agents to perform those tasks. These could be one or more Agents depending on the Task Graph, and hence generating a DAG of Agents. See [Agent Graph](./agentGraph.md).

## Integrated Universal Agent

There is one Universal Agent that is integrated within the Codebolt Editor. This ensures that the code does not leaves the editor as well as also to decreate the response latency.

## Custom Universal Agents

You can also have Custom Universal Agents, that can route the user query requests to the appropriate agents using your custom logic or custom LLMs. We have an option to create your own Universal Agents. You can learn more about them at [Create your own Universal Agents](../UniversalAgents/createUniversalAgents.md)


## Architecture Choices

The Concept of Universal Agents is Created so that we can route the user query requests to a set of appropriate agents.

This is a very powerful concept as it allows for using all the agents in the marketplace to be available at disposal, and allows Codebolt to function as a Mega Agent.

While we keep on updating the logic for Agent Selection, based on our custom training models, we have allowed you to write your custom logic for universal agents.

## Why Write Custom Universal Agents?

There are many reasons for you to write your own Universal Agents.
- You might have a better logic for agent selection.
- You might want to use a specific Agent for doing something.
- You might want to avoid using any specific Agent for doing something.
- You might have trained a better model for agent selection.

There are multiple reasons for you to write your own Universal Agents.