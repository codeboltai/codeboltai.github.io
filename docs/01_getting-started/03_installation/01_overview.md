---
sidebar_position: 1
title: Installation Overview
---

# Installation Overview

Detailed install options. If you just want the happy path, go to [Quickstart](../02_quickstart.md). This section is for when the happy path isn't what you need: different install method, air-gapped environment, specific OS quirks, upgrades, uninstalls.

## Which install method

| Method | When to use | Page |
|---|---|---|
| **Desktop app** | You want the full UI experience. Most common choice. | [Desktop app](./02_desktop-app.md) |
| **CLI only** | Remote machines, servers, CI, scripting. | [CLI](./03_cli.md) |
| **Both** | Day-to-day in the desktop app, scripting via CLI. Same server backs both. | [Desktop](./02_desktop-app.md) + [CLI](./03_cli.md) |

The desktop app ships with the server and CLI embedded. The CLI-only install is just the server + CLI without the Electron shell.

## System requirements

See [System Requirements](./04_system-requirements.md) for the full table. Minimums are modest:

- **OS:** Windows 10+, macOS 12+, or a recent Linux distro.
- **RAM:** 4 GB free (8 GB recommended if you plan to run local models).
- **Disk:** ~2 GB for the app + server, plus whatever local models need (5-50 GB).
- **Network:** Only needed for remote LLM providers. Everything else works offline.

## Updates

Desktop app updates automatically by default. See [Updating](./05_updating.md) to change the update channel or pin a version. CLI updates via your package manager.

## Uninstalling

See [Uninstalling](./06_uninstalling.md). Important: by default, uninstall **preserves** your database and shadow git repos so nothing you've worked on is lost. You have to opt in to deleting project data.

## Install-time problems

See [Install troubleshooting](./07_install-troubleshooting.md) for the common ones (port in use, permission errors on Windows, missing build tools on Linux, rosetta requirements on macOS).
