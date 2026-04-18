---
name: exportMarkdown
cbbaseinfo:
  description: "Exports the current planner tasks as a markdown document.

Generates a markdown-formatted representation of all tasks, organized by agent or
status. Useful for creating reports, sharing progress externally, or backing up
the current plan."
cbparameters:
  parameters:
    - name: params
      typeName: ExportMarkdownParams
      description: Optional parameters to control which tasks are exported and formatting
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the markdown content
data:
  name: exportMarkdown
  category: planner
  link: exportMarkdown.md
---
# exportMarkdown

```typescript
client.planner.exportMarkdown(params?: ExportMarkdownParams): Promise<unknown>
```

Exports the current planner tasks as a markdown document.

Generates a markdown-formatted representation of all tasks, organized by agent or
status. Useful for creating reports, sharing progress externally, or backing up
the current plan.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ExportMarkdownParams` _(optional)_ | Optional parameters to control which tasks are exported and formatting |

## Returns

**`Promise<unknown>`** — A promise that resolves to the markdown content

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.planner.exportMarkdown();
```
