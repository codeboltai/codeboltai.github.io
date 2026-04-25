# Publishing

> Once your action block is stable, publish it from the block root:

## Publish an action block

Once your action block is stable, publish it from the block root:

```bash
codebolt action actionblock publish --path ./my-action-block
```

List all available action blocks:

```bash
codebolt action actionblock list
```

## When to publish

Publish when the action block represents a **stable, team-standard operation**. Keep it local while the interface and logic are still changing.

## Distribution via capabilities

For org-wide distribution, action blocks usually travel inside a [capability](../02_capabilities/01_overview.md). A capability bundles one or more action blocks (along with other extensions) into a distributable package.

## Existing action blocks

Codebolt ships with several built-in action blocks used by the orchestrator and other system agents:

| Action Block | Description |
|---|---|
| `break-task-into-jobs` | Uses LLM to break a task into parallelizable sub-jobs |
| `create-plan-for-given-task` | Analyzes requirements and creates an action plan |
| `create-detail-action-plan` | Creates a detailed action plan |
| `create-jobs-from-action-plan` | Creates jobs from an existing action plan |
| `create-task-from-prompt` | Generates a task definition from a user prompt |
| `find-next-job-for-agent` | Finds the next available job for an agent to execute |
| `process-jobs-by-group` | Processes jobs grouped by dependencies |
| `submit-merge-request` | Submits a merge request for completed work |

These serve as reference implementations when authoring your own action blocks.
