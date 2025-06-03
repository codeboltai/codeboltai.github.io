# Overview

Natural language interface for exploring, editing, and managing code with contextual AI assistance in Chat mode

## What is Chat?
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
  
  <div style={{border: '1px solid #e1e5e9', borderRadius: '8px', padding: '20px', backgroundColor: '#f8f9fa'}}>
    <div style={{fontSize: '24px', marginBottom: '12px'}}>∞</div>
    <h3 style={{margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600'}}>Automate workflows</h3>
    <p style={{margin: '0', color: '#666', fontSize: '14px'}}>Let Codebolt search, reason and execute to automate your workflows</p>
  </div>
</div>

## Getting Started

Access Chat in the sidebar with `⌘+L` (Mac) or `Ctrl+I` (Windows/Linux). Type your request in natural language, and the AI will respond accordingly.

## What can I do with Chat?

<div style={{overflow: 'hidden', marginBottom: '8px'}}>
  <details>
    <summary>
        Build Features
    </summary>
    <div style={{padding: '24px', backgroundColor: '#ffffff', color: '#64748b', lineHeight: '1.6'}}>
      <p style={{margin: '0 0 16px 0'}}>
        Chat has the ability to learn your codebase and make changes to it on your behalf. This is a powerful way to implement new features, and is the perfect tool for feature requests.
      </p>
      <p style={{margin: '0 0 16px 0'}}>
        Simply explain to the chat, using <strong>Agent mode</strong>, what feature you would like it to implement. Chat will look at your codebase, and any relevant files, and suggest any necessary changes across these fields.
      </p>
      <p style={{margin: '0'}}>
        In addition to code edits, Chat may suggest other changes, like adding new files, or adding packages with a package manager.
      </p>
    </div>
  </details>
</div>

<div style={{overflow: 'hidden', marginBottom: '8px',  backgroundColor: '#ffffff',}}>
  <details>
    <summary>
      Refactor code
    </summary>
    <div style={{padding: '24px', backgroundColor: '#ffffff', color: '#64748b', lineHeight: '1.6'}}>
      <p style={{margin: '0 0 16px 0'}}>
        Need to clean up messy code or reorganize your project? Codebolt can help make your code better and easier to maintain.
      </p>
      <p style={{margin: '0'}}>
        Just describe what you want to improve, like "Make this code faster" or "Organize these files better." Codebolt will understand your project and make the changes safely.
      </p>
    </div>
  </details>
</div>

<div style={{overflow: 'hidden', marginBottom: '8px',  backgroundColor: '#ffffff',}}>
  <details>
    <summary>
       Setup new projects
    </summary>
    <div style={{padding: '24px', backgroundColor: '#ffffff', color: '#64748b', lineHeight: '1.6'}}>
      <p style={{margin: '0 0 16px 0'}}>
        Starting a new project from scratch? Codebolt makes it super easy!
      </p>
      <p style={{margin: '0'}}>
        Tell it what kind of app you want to build - like a website, mobile app, or API. Codebolt will create all the folders, install the right tools, and write starter code so you can begin coding right away.
      </p>
    </div>
  </details>
</div>

## Modes

Chat offers different modes optimized for specific tasks:

- **Auto**: Acts as a universal agent—Codebolt will autonomously understand your codebase and make broad, codebase-wide changes as needed.
- **Ask**: Get explanations, answers, and feature planning help from the AI about your codebase.
- **Act**: Make targeted edits using only the specific context you provide.
- **Local Agent**: Create a custom agent tailored to your unique workflows.


## Context

Chat understands your codebase by analyzing:

1. **Open files**: What you're currently viewing
2. **@ Symbol**: Use @ to select specific files, folders, and docs you want to reference
3. **# Symbol**: Used to select a specific agent from the agent marketplace

### Using @ to Select Content

The @ symbol lets you precisely choose what Chat should focus on:

- **@filename.js** - Select a specific file
- **@foldername/** - Include an entire folder
- **@docs/** - Reference documentation files
- **@README.md** - Pick specific documentation

Simply type @ and start typing to see available options. This helps Chat give you more accurate answers by focusing on exactly the code and files you're asking about.

The interface suggests relevant context based on your query, ensuring accurate responses.

## Code Edits

When Chat suggests code changes:

1. **Review**: See the proposed changes in a diff view
2. **Apply**: In Ask mode, explicitly apply changes with the "Apply" button
3. **Accept/Reject**: After changes are made, decide whether to keep or discard them

Codebolt's custom model applies suggested edits to files with thousands of lines in seconds.

## Checkpoints

Sometimes you may want to revert to a previous state of your codebase. Codebolt helps you with this by automatically creating checkpoints of your codebase at each request you make, as well every time the AI makes changes to your codebase.

To revert to a previous state, you can either:

- Click the `Restore Checkpoint` button that appears within the input box of a previous request
- Click the + button that shows at the left of a message in the chat history when hovered

## Model Selection

By default, Codebolt has an 'auto-select' option, which will intelligently select the best premium model for your request. This will always use 1 premium request as is, unless you have certain settings enabled that increase this, like long-context mode.

If you want more granular control over which model is used, you can manually select a model from the model picker.

When using custom modes, you can also select a fixed model for each mode, such as selecting `o1` for a `Planning` mode.

