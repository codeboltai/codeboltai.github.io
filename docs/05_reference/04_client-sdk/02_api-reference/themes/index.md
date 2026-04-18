---
cbapicategory:
  - name: create
    link: /docs/reference/client-sdk/api-reference/themes/create
    description: "Creates a new custom theme.

Registers a new theme with the system using the provided configuration.
The theme can be customized with specific colors, fonts, and styling
preferences to match design requirements."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/themes/delete
    description: "Deletes a theme from the system.

Permanently removes the specified theme. If the theme is currently
active, another theme will need to be set as active. This operation
cannot be undone."
  - name: getAll
    link: /docs/reference/client-sdk/api-reference/themes/getAll
    description: "Retrieves all available themes in the system.

Returns every theme regardless of whether it's active or inactive.
Use this for comprehensive theme browsing or to populate theme selection UIs."
  - name: getById
    link: /docs/reference/client-sdk/api-reference/themes/getById
    description: "Retrieves a specific theme by its unique identifier.

Returns detailed information about a single theme including its
configuration, colors, settings, and metadata."
  - name: getStats
    link: /docs/reference/client-sdk/api-reference/themes/getStats
    description: "Retrieves theme statistics and metrics.

Returns aggregated data about themes including counts, usage statistics,
and other analytical information useful for monitoring and reporting."
  - name: reset
    link: /docs/reference/client-sdk/api-reference/themes/reset
    description: "Resets themes to their default configuration.

Restores all theme settings to the original system defaults.
Optionally accepts custom data to control the reset behavior."
  - name: seedPopular
    link: /docs/reference/client-sdk/api-reference/themes/seedPopular
    description: "Seeds the system with popular theme presets.

Creates a collection of well-known and widely-used themes based on
popular color schemes and design systems. Useful for initializing
the theme catalog with common options."
  - name: update
    link: /docs/reference/client-sdk/api-reference/themes/update
    description: "Updates an existing theme's configuration.

Modifies the properties, colors, or settings of a theme identified
by its ID. Use this to make incremental changes to a theme without
recreating it from scratch."
  - name: updateColors
    link: /docs/reference/client-sdk/api-reference/themes/updateColors
    description: "Updates the color scheme of a theme.

Modifies the color palette for one or more themes. This includes
primary colors, background colors, text colors, and other color
variables used throughout the interface."
  - name: validate
    link: /docs/reference/client-sdk/api-reference/themes/validate
    description: "Validates theme data for correctness and completeness.

Checks the current theme configuration for errors, inconsistencies,
or missing required fields. Returns detailed validation results
highlighting any issues found."
---
# Themes API

Themes API

<CBAPICategory />

## Methods

- [`create()`](./create) — Creates a new custom theme.

Registers a new theme with the system using the provided configuration.
The theme can be customized with specific colors, fonts, and styling
preferences to match design requirements.
- [`delete()`](./delete) — Deletes a theme from the system.

Permanently removes the specified theme. If the theme is currently
active, another theme will need to be set as active. This operation
cannot be undone.
- [`getAll()`](./getAll) — Retrieves all available themes in the system.

Returns every theme regardless of whether it's active or inactive.
Use this for comprehensive theme browsing or to populate theme selection UIs.
- [`getById()`](./getById) — Retrieves a specific theme by its unique identifier.

Returns detailed information about a single theme including its
configuration, colors, settings, and metadata.
- [`getStats()`](./getStats) — Retrieves theme statistics and metrics.

Returns aggregated data about themes including counts, usage statistics,
and other analytical information useful for monitoring and reporting.
- [`reset()`](./reset) — Resets themes to their default configuration.

Restores all theme settings to the original system defaults.
Optionally accepts custom data to control the reset behavior.
- [`seedPopular()`](./seedPopular) — Seeds the system with popular theme presets.

Creates a collection of well-known and widely-used themes based on
popular color schemes and design systems. Useful for initializing
the theme catalog with common options.
- [`update()`](./update) — Updates an existing theme's configuration.

Modifies the properties, colors, or settings of a theme identified
by its ID. Use this to make incremental changes to a theme without
recreating it from scratch.
- [`updateColors()`](./updateColors) — Updates the color scheme of a theme.

Modifies the color palette for one or more themes. This includes
primary colors, background colors, text colors, and other color
variables used throughout the interface.
- [`validate()`](./validate) — Validates theme data for correctness and completeness.

Checks the current theme configuration for errors, inconsistencies,
or missing required fields. Returns detailed validation results
highlighting any issues found.
