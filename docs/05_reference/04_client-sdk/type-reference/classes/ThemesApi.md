---
title: ThemesApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ThemesApi

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:18

Manages themes used throughout the CodeBolt platform.

Themes control the visual appearance including colors, fonts, and styling
of the user interface. This API provides methods for creating, updating,
validating, and managing themes to customize the user experience.

## Constructors

### Constructor

```ts
new ThemesApi(http: HttpClient): ThemesApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ThemesApi`

## Methods

### create()

```ts
create(data: CreateThemeRequest): Promise<Theme>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:180

Creates a new custom theme.

Registers a new theme with the system using the provided configuration.
The theme can be customized with specific colors, fonts, and styling
preferences to match design requirements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateThemeRequest` | Request containing the new theme configuration |

#### Returns

`Promise`\<`Theme`\>

A promise that resolves to the created Theme object

#### Example

```typescript
const newTheme = await client.themes.create({
  name: 'Custom Dark',
  colors: { background: '#1a1a1a', text: '#ffffff' }
});
```

***

### delete()

```ts
delete(themeId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:223

Deletes a theme from the system.

Permanently removes the specified theme. If the theme is currently
active, another theme will need to be set as active. This operation
cannot be undone.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `themeId` | `string` | The unique identifier of the theme to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the theme has been deleted

#### Example

```typescript
await client.themes.delete('theme-123');
console.log('Theme deleted');
```

***

### getAll()

```ts
getAll(): Promise<Theme[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:35

Retrieves all available themes in the system.

Returns every theme regardless of whether it's active or inactive.
Use this for comprehensive theme browsing or to populate theme selection UIs.

#### Returns

`Promise`\<`Theme`[]\>

A promise that resolves to an array of Theme objects

#### Example

```typescript
const themes = await client.themes.getAll();
themes.forEach(t => console.log(t.name, t.isActive));
```

***

### getById()

```ts
getById(themeId: string): Promise<Theme>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:156

Retrieves a specific theme by its unique identifier.

Returns detailed information about a single theme including its
configuration, colors, settings, and metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `themeId` | `string` | The unique identifier of the theme to retrieve |

#### Returns

`Promise`\<`Theme`\>

A promise that resolves to the requested Theme object

#### Example

```typescript
const theme = await client.themes.getById('theme-123');
console.log('Theme name:', theme.name);
```

***

### getStats()

```ts
getStats(): Promise<ThemeStats>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:53

Retrieves theme statistics and metrics.

Returns aggregated data about themes including counts, usage statistics,
and other analytical information useful for monitoring and reporting.

#### Returns

`Promise`\<`ThemeStats`\>

A promise that resolves to a ThemeStats object containing metrics

#### Example

```typescript
const stats = await client.themes.getStats();
console.log(`Total themes: ${stats.totalThemes}`);
```

***

### reset()

```ts
reset(data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:93

Resets themes to their default configuration.

Restores all theme settings to the original system defaults.
Optionally accepts custom data to control the reset behavior.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `Record`\<`string`, `unknown`\> | Optional parameters for controlling the reset operation |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when themes have been reset

#### Example

```typescript
await client.themes.reset();
console.log('Themes reset to defaults');
```

***

### seedPopular()

```ts
seedPopular(data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:137

Seeds the system with popular theme presets.

Creates a collection of well-known and widely-used themes based on
popular color schemes and design systems. Useful for initializing
the theme catalog with common options.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `Record`\<`string`, `unknown`\> | Optional parameters to control the seeding process |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when popular themes have been seeded

#### Example

```typescript
await client.themes.seedPopular();
console.log('Popular themes added');
```

***

### update()

```ts
update(themeId: string, data: UpdateThemeRequest): Promise<Theme>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:203

Updates an existing theme's configuration.

Modifies the properties, colors, or settings of a theme identified
by its ID. Use this to make incremental changes to a theme without
recreating it from scratch.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `themeId` | `string` | The unique identifier of the theme to update |
| `data` | `UpdateThemeRequest` | Request containing the theme updates to apply |

#### Returns

`Promise`\<`Theme`\>

A promise that resolves to the updated Theme object

#### Example

```typescript
const updated = await client.themes.update('theme-123', {
  name: 'Renamed Theme',
  colors: { primary: '#ff6b6b' }
});
```

***

### updateColors()

```ts
updateColors(data: UpdateThemeColorsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:117

Updates the color scheme of a theme.

Modifies the color palette for one or more themes. This includes
primary colors, background colors, text colors, and other color
variables used throughout the interface.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UpdateThemeColorsRequest` | Request containing theme color update information |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when colors have been updated

#### Example

```typescript
await client.themes.updateColors({
  themeId: 'theme-123',
  colors: { primary: '#ff0000', secondary: '#00ff00' }
});
```

***

### validate()

```ts
validate(): Promise<ThemeValidationResult>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/themes.api.ts:74

Validates theme data for correctness and completeness.

Checks the current theme configuration for errors, inconsistencies,
or missing required fields. Returns detailed validation results
highlighting any issues found.

#### Returns

`Promise`\<`ThemeValidationResult`\>

A promise that resolves to a ThemeValidationResult with validation status

#### Example

```typescript
const validation = await client.themes.validate();
if (!validation.isValid) {
  console.error('Theme errors:', validation.errors);
}
```
