# Installing Plugins

> Plugins can be installed from the marketplace, from a local directory, or via the CLI

Plugins can be installed from the marketplace, from a local directory, or via the CLI. Once installed they appear in the **Plugins panel** where you can start, stop, reload, and configure them.

## From the marketplace

## From a local directory

If you have a plugin as a local folder (downloaded manually, shared by a colleague, or one you're developing):

```bash
# Copy to global plugins directory
cp -r ./my-plugin ~/.codebolt/plugins/my-plugin

# Or copy to the current project only
cp -r ./my-plugin ./.codeboltPlugins/my-plugin
```

Then open the Plugins panel and click **Reload** to discover the new plugin.

## Configuring a plugin after install

Most plugins require some configuration before they work — an API key, a bot token, a server URL. After installation:

1. Find the plugin in the **Plugins panel**.
2. Click the **Configure** (gear) icon.
3. Fill in the required fields. These are stored securely in Codebolt's key-value store — not in plain files.
4. Click **Save**, then **Start** if the plugin doesn't start automatically.

For chat gateway plugins, a configuration UI panel opens directly inside Codebolt where you enter your platform credentials.

## Managing installed plugins

The **Plugins panel** shows all discovered plugins with their status:

| Status | Meaning |
|---|---|
| `running` | Plugin process is active and connected |
| `stopped` | Plugin is installed but not running |
| `error` | Plugin crashed or failed to connect |
| `loading` | Plugin process is starting up |

**Actions available per plugin:**

- **Start / Stop** — manually control the plugin process
- **Reload** — stop, rebuild detection, and restart (useful during development)
- **Configure** — open the settings form or UI panel
- **Uninstall** — remove the plugin files from the plugin directory
- **View logs** — open the [Plugin Debug](../08c_debug-and-observability/01_overview.md) panel for this plugin's WebSocket traffic and errors

## Scoping a plugin to one project

By default, installing a plugin puts it in `~/.codebolt/plugins/` where it's active globally. To scope it to a single project:

```bash
codebolt plugin install <plugin-name> --project
```

Or move the plugin folder manually:

```bash
mv ~/.codebolt/plugins/my-plugin ./.codeboltPlugins/my-plugin
```

Project-scoped plugins override global plugins of the same name.

## Updating plugins

## Uninstalling
