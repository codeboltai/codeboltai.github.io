---
sidebar_position: 4
title: Chat Widget
---

# Chat Widget

There is a reusable chat package at [packages/chat-widget](D:/Codeboltapps/CodeBolt/packages/chat-widget). Its package name is `@codebolt/chat-widget`.

It is the fastest path when you want a chat interface connected to a running Codebolt server without rebuilding all the message UI yourself.

## What It Exposes

The package exports:

- `ChatWidget`
- lower-level building blocks like `ChatBox`, `ChatInput`, and `useChatSocket`
- multiple message templates, including tool- and MCP-oriented rendering

## When To Use It

- you want a custom chat interface in an existing React app
- you want a branded assistant panel quickly
- you want to embed a Codebolt-connected chat surface without building the full client yourself

## Two Ways To Use It

1. Use the full widget for the fastest integration.
2. Recompose its lower-level pieces into your own chat UI while keeping the existing socket/message plumbing.

## See also

- [Client SDK](./02_client-sdk.md)
- [Dynamic Panels](./05_dynamic-panels.md)
