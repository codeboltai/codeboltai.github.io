# Common Issues

> A triage page for the most frequent things that go wrong. If your issue isn't here, check Logs and diagnostics, then file a bug via Reporting bugs.

A triage page for the most frequent things that go wrong. If your issue isn't here, check [Logs and diagnostics](./02_logs-and-diagnostics.md), then file a bug via [Reporting bugs](./03_reporting-bugs.md).

## The app won't start

### "Server is connecting… (forever)"
The local server failed to start or is unreachable.

1. **Settings → Logs** — look for errors in the server log. Most common: port in use, database lock, corrupted config.
2. **Restart the server:** `codebolt app restart` or quit and relaunch the app.
3. **Port in use:** another instance of the server is running. Kill it (`codebolt app stop` or OS process list) and retry.
4. **Database lock:** the DB didn't shut down cleanly. `codebolt app doctor` will detect this and offer to repair.

### "Unable to connect to server" (CLI)
The CLI can't reach where the server *should* be.

1. `codebolt app status` — is the server actually running?
2. `codebolt config get server` — is the CLI pointing at the right URL?
3. If it's pointing at a remote server, check your network and credentials.

## Chat issues

### "Agent keeps 'thinking' but nothing happens"
Usually a provider issue or a heartbeat timeout.

1. **Settings → Providers** — is the provider healthy? Test it.
2. If the provider is healthy, check **Settings → Logs** for `agentDeliberationService` errors.
3. If you see `heartbeat timeout`, the agent is stuck in a tool call. Stop with Esc and check which tool was last called (visible in the chat stream).

### "Agent ignored my instruction"
The instruction probably wasn't in the assembled prompt.

1. Click **details** on the problem turn.
2. Look at the assembled messages. If your instruction was compressed away, that's the root cause.
3. Fix by either: pinning the instruction via an @-mention, adding a context rule, or shortening the conversation and starting fresh.

See [Context and @-mentions](../03_chat/03_context-and-at-mentions.md).

### "Agent calls the same tool over and over"
`LoopDetectionModifier` should catch this. If it doesn't:

1. Stop the agent (Esc).
2. In the run trace, identify the repeated tool call. Often the agent is getting a confusing error and misinterpreting it.
3. Fix the underlying tool or add context clarifying what the error means.

### "Agent said it did something but the file didn't change"
Three possible causes:

1. **The tool call was denied by a guardrail.** Check the run trace for `guardrail.denied` events.
2. **The agent lied** — it sometimes claims to have done things it didn't. Always verify with actual file contents, not the chat summary.
3. **The write went to shadow git only.** Your real file should have updated too — if not, check file permissions.

### "My last message isn't being sent"
1. **Send button greyed out?** No provider configured.
2. **Error toast?** Read it; common ones: "agent has no allowed tools for this task", "provider rate limit", "workspace is read-only".
3. **Infinite spinner?** Network issue with a remote provider. Check connectivity.

## Agent / run issues

### "Run failed with no clear reason"
Get the trace:

```bash
codebolt agent trace <run_id>
```

Look at the last phase before failure. The terminal state will be one of `failed`, `killed`, `rejected` — each has a structured reason. If the reason is vague, check the server logs around the same timestamp.

### "Hit budget limit"
Agent's `max_tool_calls`, `max_tokens`, `max_wall_time_seconds`, or `max_cost_usd` was exceeded. Either:

- Raise the limit (in agent yaml or per-run with `--limits`).
- Split the task into smaller pieces.
- Check if the agent is doing unnecessary work — budget exhaustion is sometimes a symptom of a bad prompt, not a hard limit problem.

### "Background agent didn't fire"
1. Is the trigger configured correctly? Check `.codebolt/agents/<name>/agent.yaml`.
2. Is the server running when the trigger should fire? Cron triggers need the server up.
3. For webhook triggers, is the URL reachable? Check the webhook receiver.
4. For file-change triggers, does the glob actually match? Test with `codebolt agent trigger-test <name>`.

## Provider / LLM issues

### "Provider test fails with 401"
Bad API key. Re-paste. Watch for whitespace.

### "Provider test fails with 429"
Rate limited. Check your quota on the provider's dashboard.

### "Model not available"
Either:
- The model isn't configured for that provider (Azure deployments have specific names).
- Your account doesn't have access to that model tier.
- The model name has changed upstream (providers deprecate models).

### "Local model is extremely slow"
See [Local models → troubleshooting](../08_integrations/02_local-models.md).

## Tool / MCP issues

### "Tool not found"
The agent's `tools.allow` doesn't include it, or the MCP server providing it isn't running.

1. `codebolt tool list` — is the server running?
2. If running, check the agent's allowlist in its yaml.

### "MCP server keeps crashing"
**Settings → Tools → `<server>` → Logs** will tell you why. Common:

- Missing dependency (binary / node module not installed).
- Port conflict.
- Bad config in the server's own config file.

### "Tool call times out"
The server is slow or hung. Restart it. If it keeps happening, the tool implementation has a bug — report it to the tool author.

## Memory / context issues

### "Agent doesn't remember something from yesterday"
Persistent memory is per-project by default. If you're in a different project, it's a different memory store.

Within the same project:
- Is the memory ingestion pipeline healthy? Check logs for `memoryIngestionExecutionService` errors.
- Was the fact worth remembering? The ingestion pipeline filters aggressively. Important decisions usually survive; passing remarks don't.
- Is there a context rule that's excluding it? Check `.codebolt/context-rules/`.

### "The knowledge graph has stale entries"
Re-index the project:

```bash
codebolt project reindex
```

Does a full rebuild of the codemap, codebase index, and KG. Can take a minute on large projects.

### "Vector search returns irrelevant results"
1. **Embeddings are stale** — reindex.
2. **Too many hits** — reduce `vectorTopK` in your agent config.
3. **Wrong embedding model** — if you switched embedding models, the existing index uses the old vectors. Reindex.

## Checkpoint / rollback issues

### "Rollback didn't revert files"
Shadow git isn't initialised or is corrupted.

1. Check `.codebolt/shadow-git/` exists and has content.
2. **Settings → Projects → Repair** rebuilds the checkpoint index.
3. If still broken, close and reopen the project.

### "I lost work after a rollback"
You probably rolled back past a point you wanted to keep. Look for later checkpoints:

```bash
codebolt project checkpoints
```

Any checkpoint after the rollback is still there (rollbacks don't delete; they move the pointer). You can roll *forward* by rolling back to one of those later checkpoints.

If the checkpoint you want was pruned (older than 30 days, unpinned), it's genuinely gone.

## Performance issues

### "Indexing is slow"
Large projects take time. First index is slowest; subsequent incremental updates are fast.

For very large projects (>100K files), consider:
- Excluding generated / build directories via `.codebolt/ignore`.
- Running with `--no-codemap` during first open, then building the codemap in the background.

### "The app is using lots of memory"
Local models, vector DB, and knowledge graph all use memory. Rough breakdown in **Settings → Diagnostics**. If memory is concerning:

- Unload local models when not in use (Ollama `keep_alive`).
- Archive old projects you aren't actively working on.
- Prune old checkpoints.

### "Agents are slow"
- **Remote provider latency** — usually the bottleneck. Check round-trip times in the run trace.
- **Context assembly is slow** — large KG or vector DB can slow assembly. Look at the timing breakdown in the trace.
- **Tool calls are slow** — some tools are just slow (browser automation, large file reads). Not much to do besides picking faster tools.

## When nothing above helps

1. **Run `codebolt app doctor`** — a diagnostic that checks for common misconfigurations and corrupted state.
2. **Collect logs** via [Logs and diagnostics](./02_logs-and-diagnostics.md).
3. **File a bug** using the template in [Reporting bugs](./03_reporting-bugs.md).
4. **Ask in the community** — someone else has probably hit the same issue.

## See also

- [Logs and diagnostics](./02_logs-and-diagnostics.md)
- [Reporting bugs](./03_reporting-bugs.md)
- [Agent Debug](../05c_agent-observability/02_agent-debug.md)
