---
sidebar_position: 4
title: System Requirements
---

# System Requirements

## Minimum (for running Codebolt itself)

| Resource | Minimum | Comfortable |
|---|---|---|
| OS | Windows 10, macOS 12, Linux (glibc 2.31+) | Current versions |
| CPU | Any 64-bit x86 or ARM | 4+ cores |
| RAM | 4 GB free | 8 GB free |
| Disk | 2 GB for app + initial data | 20+ GB for room to grow |
| Network | For remote LLM providers | Gigabit for large model downloads |

These minimums cover the server, GUI, database, and enough headroom for a small project with remote LLM providers. Below them, the app works but is sluggish.

## For local models

If you're running LLMs locally (Ollama, llama.cpp, etc.), the minimums don't matter — the model's memory requirements dominate.

| Model size | Additional RAM | GPU helpful? |
|---|---|---|
| 3B params | 6 GB | Optional |
| 7B params | 10 GB | Recommended |
| 13B params | 16 GB | Yes |
| 34B params | 32 GB | Required (24GB+ VRAM) |
| 70B params | 48+ GB | Multi-GPU or high-memory Mac |

Add these to Codebolt's own requirements. A 16 GB laptop running a 13B local model is near its limit; 32 GB is comfortable.

Apple Silicon (unified memory) punches above its weight. A 32 GB M2/M3 can run 13-34B models without a dedicated GPU.

## OS-specific notes

### Windows

- **Windows 10 build 1809** or later required. Older builds lack APIs Electron needs.
- **Windows 11** works well; no known issues.
- **Path length.** Long Path support should be enabled (Group Policy: `Enable Win32 long paths`). Some file operations fail on projects nested deep in `C:\Users\...`.
- **Antivirus.** Some enterprise AV (Symantec, McAfee) flag Electron apps on first run. Whitelist the `Codebolt.exe` binary.

### macOS

- **macOS 12 Monterey** minimum. Older versions lack required frameworks.
- **Apple Silicon** strongly preferred over Intel. Local models are 3-5× faster on ARM64 vs Intel Macs of similar price.
- **Intel Mac users**: Codebolt runs fine but local model performance is CPU-bound. Consider remote providers.
- **Rosetta 2** is required if you accidentally install the x64 build on Apple Silicon — but don't; install arm64 directly.

### Linux

- **glibc 2.31** or newer required (shipped in Ubuntu 20.04+, Debian 11+, Fedora 32+, RHEL 9+).
- **Old distros** (CentOS 7, Ubuntu 18.04, etc.) need the Docker install or a newer glibc.
- **User namespaces** must be enabled for the Electron sandbox. `sysctl kernel.unprivileged_userns_clone` should be `1`. Some hardened distros default to 0.
- **Wayland and X11** are both supported.
- **GPU drivers.** If your GPU is present but `glxinfo` shows no hardware acceleration, install `mesa-libGL` (or equivalent).

## CPU architectures

| Architecture | Status |
|---|---|
| x86_64 / amd64 | Full support, all platforms |
| arm64 / aarch64 | Full support (Apple Silicon, Linux ARM64, Windows ARM) |
| x86 (32-bit) | Not supported |
| riscv64 | Not supported |
| ppc64le | Not supported |

## Network requirements

**For remote LLM providers**: outbound HTTPS to the provider's API endpoint. Typical:

| Provider | Host |
|---|---|
| OpenAI | api.openai.com |
| Anthropic | api.anthropic.com |
| Google | generativelanguage.googleapis.com, *.googleapis.com |
| Azure OpenAI | *.openai.azure.com |
| AWS Bedrock | bedrock-runtime.\*.amazonaws.com |

**For the marketplace** (installing agents/tools): outbound HTTPS to `marketplace.codebolt.ai`.

**For auto-update**: outbound HTTPS to `updates.codebolt.ai`.

If you're in an air-gapped or restricted environment, you can disable all of these and run entirely local:

- Local models via Ollama (no internet after initial download).
- No auto-update (disable in settings).
- No marketplace (skip; install agents manually from disk).

## Disk usage over time

Starting install is ~2 GB. It grows with use:

| Category | Typical growth |
|---|---|
| Database (runs, events, history) | ~1 GB per year of daily use |
| Persistent memory + vector DB | ~100-500 MB per medium project |
| Knowledge graph | ~50-200 MB per medium project |
| Shadow git repos | ~200 MB - 2 GB per project (depends on activity) |
| Cached plugin processes, capabilities | ~100-500 MB total |
| Logs | ~50-100 MB per month; auto-rotated |
| Local models (if used) | 4-40 GB per model |

For a heavy user on a large project, expect ~10 GB after a year. For a team member on multiple projects, expect more. Plan disk accordingly.

## Monitoring resource usage

The app has a built-in diagnostics view:

- **Settings → Diagnostics** — current CPU, RAM, disk usage breakdown.
- **Settings → Database → Size** — per-table sizes.
- **Settings → Projects → Storage** — per-project disk usage.

On the CLI:

```bash
codebolt status --verbose
codebolt project size <project-id>
```

## When you're near the limits

Signs you need more resources:

- **High RAM usage, OS swapping.** Local model too big for available RAM. Switch to a smaller model or add memory.
- **Slow indexing on large projects.** CPU-bound during initial index. Wait it out, or exclude generated directories.
- **Database bloat over time.** Prune old checkpoints (`Settings → Projects → Prune`), archive unused projects.
- **Slow vector search.** Vector DB is larger than cache. Increase cache size in settings, or split the project.

## See also

- [Installation Overview](./01_overview.md)
- [Desktop App install](./02_desktop-app.md)
- [Local models](../../02_using-codebolt/08_integrations/02_local-models.md)
- [Self-hosting → Scaling](../../04_build-on-codebolt/10_self-hosting/01_overview.md)
