---
sidebar_position: 3
title: Existing UIs
---

# Existing UIs

The repo already contains multiple UI surfaces you can study or fork:

| Package | Role |
|---|---|
| [packages/electron](D:/Codeboltapps/CodeBolt/packages/electron) | Desktop shell / host |
| [packages/ui](D:/Codeboltapps/CodeBolt/packages/ui) | Shared app UI |
| [packages/web](D:/Codeboltapps/CodeBolt/packages/web) | Browser-facing web surface |
| [packages/gotui](D:/Codeboltapps/CodeBolt/packages/gotui) | Terminal UI |

These are useful reference implementations for:

- how Codebolt clients connect to the server
- how chat and agent state are rendered
- how different surfaces use the same backend with different UX tradeoffs

## When To Study Or Fork These

- you want to understand the product’s current UI architecture
- you want a head start instead of starting from scratch
- you want to build a specialized UI while keeping a familiar Codebolt structure

If your goal is a separate product, inspect these packages first before designing your own client architecture.

## See also

- [Client SDK](./02_client-sdk.md)
- [Chat Widget](./04_chat-widget.md)
