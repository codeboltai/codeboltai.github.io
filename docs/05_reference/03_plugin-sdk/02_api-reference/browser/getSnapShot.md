---
name: getSnapShot
cbbaseinfo:
  description: Retrieves the snapshot of the current page.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserSnapshotResponse>"
    description: A promise that resolves with the snapshot.
data:
  name: getSnapShot
  category: browser
  link: getSnapShot.md
---
# getSnapShot

```typescript
plugin.browser.getSnapShot(options?: BrowserOperationOptions): Promise<BrowserSnapshotResponse>
```

Retrieves the snapshot of the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<BrowserSnapshotResponse>`** — A promise that resolves with the snapshot.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.getSnapShot();
```
