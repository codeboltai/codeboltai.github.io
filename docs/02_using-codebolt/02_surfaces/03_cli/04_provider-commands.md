---
sidebar_position: 4
title: Provider Commands
description: Configure LLM providers from the CLI.
---

# `codebolt provider` commands

Configure LLM providers from the CLI.

## Listing

```bash
codebolt provider list
codebolt provider list --json
codebolt provider list --status    # include health
```

## Adding

### OpenAI-family providers

```bash
codebolt provider add openai --key sk-...
codebolt provider add anthropic --key sk-ant-...
codebolt provider add google --key ...
```

### Custom HTTP (OpenAI-compatible)

```bash
codebolt provider add custom \
  --name my-provider \
  --base-url https://my-endpoint.example.com/v1 \
  --key any-string
```

### Ollama (local)

```bash
codebolt provider add ollama
```

Auto-detects localhost:11434 and lists installed models.

### Azure OpenAI

```bash
codebolt provider add azure \
  --endpoint https://my-resource.openai.azure.com \
  --key ... \
  --deployment gpt-4-deployment \
  --api-version 2024-08-01-preview
```

## Testing

```bash
codebolt provider test openai
codebolt provider test anthropic --model claude-sonnet-4-6
```

Runs a small test completion. Shows latency and cost.

## Removing

```bash
codebolt provider remove openai
```

Removes the stored key and config. Agents using this provider fall back to their next option.

## Listing available models

```bash
codebolt provider models openai
codebolt provider models ollama
```

Shows every model the provider offers, with its context window and tool support.

## Setting defaults

```bash
codebolt provider set-default openai
codebolt provider set-default openai --model gpt-5
```

Sets the default provider/model for new tabs.

## Usage and cost

```bash
codebolt provider usage
codebolt provider usage --since "7 days ago"
codebolt provider usage --by agent
codebolt provider usage --by model
```

Per-provider usage breakdown. Pipes the event log through aggregation.

## Fallback chains

```bash
codebolt provider fallback add openai --fallback anthropic
codebolt provider fallback show
codebolt provider fallback remove openai
```

Configures fallback-on-error behaviour.

## Environment variables

For CI / headless use, providers can be configured via env vars instead of explicit `add`:

```bash
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-ant-...
codebolt provider reload     # picks up env vars
```

`reload` reads env vars for known providers and auto-configures them.

## See also

- [LLM Providers](../../08_integrations/01_llm-providers.md)
- [Local Models](../../08_integrations/02_local-models.md)
- [CLI Overview](./01_overview.md)
