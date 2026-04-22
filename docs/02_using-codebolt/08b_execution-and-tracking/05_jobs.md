---
sidebar_position: 3
title: Jobs
---

# Jobs

The Jobs panel lists all background operations that Codebolt runs asynchronously — things like vector embedding batches, memory ingestion pipeline runs, knowledge graph refreshes, and eval suite executions. These are distinct from agent processes; they are server-side jobs that don't have a chat thread.

Open via: **Tools dropdown → Jobs**

## Job list

Each row in the Jobs panel shows:

- **Job type** — what kind of operation (e.g., `memory-ingestion`, `eval-run`, `kg-refresh`)
- **Status badge** — `queued`, `running`, `completed`, `failed`
- **Progress bar** — percentage complete for long-running jobs
- **Started / completed timestamps**
- **Duration**

Click any job to open the **Job Detail** view.

## Job Detail

The Job Detail panel shows the full execution log for a single job:

- Configuration parameters the job was started with
- Step-by-step log output
- Any errors or warnings
- Final result or output artifacts

For memory ingestion jobs, Job Detail shows how many chunks were processed, how many embeddings were written, and any processor errors.

## Queued jobs

Jobs are queued when the server is already at capacity (running too many concurrent jobs). The `queued` badge shows the position in the queue. Queued jobs start automatically as running jobs complete.

## Failed jobs

A `failed` job stopped before completing. Click it to read the error log. Common causes:

| Cause | Fix |
|---|---|
| LLM extraction timeout | Reduce chunk size in the ingestion pipeline |
| Vector DB write error | Check disk space at `.codebolt/vectordb/` |
| Missing environment variable | Configure it in Environments panel |
| Processor code error | Fix the custom processor and re-trigger |

## Retrying a job

Right-click a failed job → **Retry** to re-run it with the same parameters. Useful for transient failures (network timeouts, rate limits).

## Cancelling a job

Right-click a `queued` or `running` job → **Cancel** to stop it. Completed work up to that point is retained in storage.

## Inbox

The **Inbox** panel (Tools dropdown → **Inbox**) shows messages addressed to you or to the project from agents or external integrations — approval requests, review summaries, notifications that require a human response. It is separate from the Chat panel and is not tied to a specific conversation thread.
