# Overview

Chat is Codebolt AI assistant that lives in your sidebar, letting you interact with your codebase through natural language. You can ask questions, request code edits, get terminal command suggestions, and more - all without switching context.


<video width="800px" height="500px" autoplay controls>
  <source src="/application/video/chat.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Core Capabilities

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', margin: '20px 0'}}>
  <div style={{border: '1px solid #e1e5e9', borderRadius: '8px', padding: '20px', backgroundColor: '#f8f9fa'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>📄</div>
    <h3 style={{margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600'}}>Understand Code</h3>
    <p style={{margin: '0', color: '#666', fontSize: '14px'}}>Ask questions about unfamiliar code, get explanations, or explore your codebase</p>
  </div>
  
  <div style={{border: '1px solid #e1e5e9', borderRadius: '8px', padding: '20px', backgroundColor: '#f8f9fa'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>💾</div>
    <h3 style={{margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600'}}>Edit Code</h3>
    <p style={{margin: '0', color: '#666', fontSize: '14px'}}>Make small tweaks or large multi-file changes without manually navigating files</p>
  </div>
  
  <div style={{border: '1px solid #e1e5e9', borderRadius: '8px', padding: '20px', backgroundColor: '#f8f9fa'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>⚡</div>
    <h3 style={{margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600'}}>Run Commands</h3>
    <p style={{margin: '0', color: '#666', fontSize: '14px'}}>Get terminal command suggestions for your specific use case</p>
  </div>
</div>

## Getting Started

Access Chat in the sidebar with `⌘+L` (Mac) or `Ctrl+I` (Windows/Linux). Type your request in natural language, and the AI will respond accordingly.


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
