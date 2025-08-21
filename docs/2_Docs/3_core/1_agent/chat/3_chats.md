# Chat

Codebolt's chat is your AI coding assistant that helps you while you code. You can ask questions, get code explanations, generate code snippets, fix bugs, and get help with your projects - all from the chat panel on the side.


## Open the Chat 

The chat box is usually opened by default. If not, you can use the shortcut  `⌘+L` (Mac) or `Ctrl+I` (Windows/Linux) to open it.


![chat](/application/chat2.png)

## Agent Modes

Chat offers different modes optimized for specific tasks:

- **Auto**: Acts as a universal agent—Codebolt will autonomously understand your codebase and make broad, codebase-wide changes as needed.
- **Ask**: Get explanations, answers, and feature planning help from the AI about your codebase.
- **Act**: Make targeted edits using only the specific context you provide.
- **Local Agent**: Create a custom agent tailored to your unique workflows.


![agent-mode](/application/agent-mode.png)


## Context

Chat understands your codebase by analyzing:

1. **Open files**: What you're currently viewing
2. **@ Symbol**: Use @ to select specific files, folders, and docs you want to reference
3. **# Symbol**: Used to select a specific agent from the agent marketplace


![@-symbol](/application/@-symbol.png)

### Using @ to Select Content

The @ symbol lets you precisely choose what Chat should focus on:

- **@filename.js** - Select a specific file
- **@foldername/** - Include an entire folder
- **@docs/** - Reference documentation files

![@-file](/application/@-file.png)

## Checkpoints

Sometimes you may want to revert to a previous state of your codebase. Codebolt helps you with this by automatically creating checkpoints of your codebase at each request you make, as well every time the AI makes changes to your codebase.

To revert to a previous state, you can either:

- Click the `Restore Checkpoint` button that appears within the input box of a previous request
- Click the + button that shows at the left of a message in the chat history when hovered

![checkpoint](/application/checkpoint.png)

## Model Selection

Codebolt gives you flexible control over which AI model processes your requests. You can either let Codebolt automatically choose the best model or manually select one based on your specific needs.

![checkpoint](/application/model.png)
