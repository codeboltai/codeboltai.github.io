---
sidebar_position: 4
title: Themes
---

# Themes

Ship a custom visual theme — colours, typography, icon sets — that users can switch to inside Codebolt.

## Theme anatomy

A theme is a CSS file that overrides Codebolt's design token variables, packaged as a plugin.

```css
/* themes/corporate-dark.css */
[data-theme='corporate-dark'] {
  --cb-color-bg-primary: #0f1117;
  --cb-color-bg-secondary: #1a1d27;
  --cb-color-accent: #5b6af0;
  --cb-color-text-primary: #e2e4f0;
  --cb-color-border: #2a2d3e;
  --cb-font-mono: 'JetBrains Mono', monospace;
}
```

Declare in `plugin.yaml`:

```yaml
contributes:
  themes:
    - id: corporate-dark
      label: Corporate Dark
      kind: dark                # dark | light
      entry: ./themes/corporate-dark.css
```

## Design tokens

Codebolt exposes a set of CSS variables as the theming surface. Key groups:

| Group | Prefix | Examples |
|---|---|---|
| Backgrounds | `--cb-color-bg-*` | `primary`, `secondary`, `elevated` |
| Text | `--cb-color-text-*` | `primary`, `secondary`, `muted`, `accent` |
| Borders | `--cb-color-border*` | `--cb-color-border`, `--cb-color-border-focus` |
| Accent / brand | `--cb-color-accent*` | `--cb-color-accent`, `--cb-color-accent-hover` |
| Status | `--cb-color-status-*` | `success`, `warning`, `error`, `info` |
| Typography | `--cb-font-*` | `--cb-font-sans`, `--cb-font-mono`, `--cb-font-size-base` |

## See also

- [UI Extensions](./03_ui-extensions.md) — use your theme tokens inside custom panels
- [Plugin SDK](../05_plugins/01_overview.md)
