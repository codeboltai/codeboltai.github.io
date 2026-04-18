---
sidebar_label: "Browser"
title: "Browser Pseudo CLI"
description: "Pseudo CLI reference for the Browser module."
---

Generated from `packages/codeboltjs/src/tools/pseudo-cli/commands.ts`. Edit the registry or rerun `node scripts/generate-pseudo-cli-docs.js` instead of updating this file by hand.

The `browser` pseudo CLI module currently exposes 12 commands.

Related SDK docs: [Browser](../../10_api-access/browser/index.md)

## Commands At A Glance

| Action | Description | Required flags |
| --- | --- | --- |
| `navigate` | Navigate to a URL | `--url` |
| `screenshot` | Take a screenshot | None |
| `click` | Click an element | `--element` |
| `type` | Type text into an element | `--element`, `--text` |
| `scroll` | Scroll the page | `--direction`, `--pixels` |
| `content` | Get page content | None |
| `html` | Get page HTML | None |
| `markdown` | Get page as Markdown | None |
| `url` | Get current URL | None |
| `close` | Close browser page | None |
| `enter` | Press Enter key | None |
| `search` | Search in element | `--element`, `--query` |

## `navigate`

Navigate to a URL

```text
codebolt browser navigate --url <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `url` | `--url` | `string` | Yes | URL used for browser or repository operations. |

## `screenshot`

Take a screenshot

```text
codebolt browser screenshot
```

This command takes no parameters.

## `click`

Click an element

```text
codebolt browser click --element <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `element` | `--element` | `string` | Yes | Element label, selector, or target description used by browser commands. |

## `type`

Type text into an element

```text
codebolt browser type --element <string> --text <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `element` | `--element` | `string` | Yes | Element label, selector, or target description used by browser commands. |
| `text` | `--text` | `string` | Yes | Text content to type or send. |

## `scroll`

Scroll the page

```text
codebolt browser scroll --direction <string> --pixels <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `direction` | `--direction` | `string` | Yes | Scroll direction or similar directional option. |
| `pixels` | `--pixels` | `string` | Yes | Numeric scroll distance in pixels. |

## `content`

Get page content

```text
codebolt browser content
```

This command takes no parameters.

## `html`

Get page HTML

```text
codebolt browser html
```

This command takes no parameters.

## `markdown`

Get page as Markdown

```text
codebolt browser markdown
```

This command takes no parameters.

## `url`

Get current URL

```text
codebolt browser url
```

This command takes no parameters.

## `close`

Close browser page

```text
codebolt browser close
```

This command takes no parameters.

## `enter`

Press Enter key

```text
codebolt browser enter
```

This command takes no parameters.

## `search`

Search in element

```text
codebolt browser search --element <string> --query <string>
```

| Name | Flag | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `element` | `--element` | `string` | Yes | Element label, selector, or target description used by browser commands. |
| `query` | `--query` | `string` | Yes | Search query string used by the command. |
