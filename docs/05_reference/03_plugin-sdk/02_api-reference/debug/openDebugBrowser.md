---
name: openDebugBrowser
cbbaseinfo:
  description: Requests to open a debug browser at the specified URL and port.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL where the debug browser should be opened.
      isOptional: false
    - name: port
      typeName: number
      description: The port on which the debug browser will listen.
      isOptional: false
  returns:
    signatureTypeName: "Promise<OpenDebugBrowserResponse>"
    description: A promise that resolves with the response from the open debug browser event.
data:
  name: openDebugBrowser
  category: debug
  link: openDebugBrowser.md
---
# openDebugBrowser

```typescript
plugin.debug.openDebugBrowser(url: string, port: number): Promise<OpenDebugBrowserResponse>
```

Requests to open a debug browser at the specified URL and port.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `url` | `string` | The URL where the debug browser should be opened. |
| `port` | `number` | The port on which the debug browser will listen. |

## Returns

**`Promise<OpenDebugBrowserResponse>`** — A promise that resolves with the response from the open debug browser event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.debug.openDebugBrowser('url', 0);
```
