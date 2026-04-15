---
sidebar_position: 4
title: Bundling Skills And Tools
---

# Bundling Skills And Tools

Capabilities are where multiple agent extensions travel together.

Common bundle shapes:

- prompts + one or more skills
- prompts + MCP server config
- prompts + skills + MCP tools

Use a capability when installation and versioning should happen as one unit.

Use standalone publication when the skill or MCP tool is useful on its own.

## Design rule

Bundle things that must evolve together. Do not bundle unrelated behavior just because the same team owns it.

## See also

- [Skills](../03_skills/01_overview.md)
- [MCP Tools](../04_mcp-tools/01_overview.md)
