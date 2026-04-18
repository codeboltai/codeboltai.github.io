---
cbapicategory:
  - name: claim
    link: /docs/reference/plugin-sdk/api-reference/executionGateway/claim
    description: "Claim exclusive handling of execution requests.
Only one plugin can claim at a time. Returns an error if already claimed."
  - name: offNotification
    link: /docs/reference/plugin-sdk/api-reference/executionGateway/offNotification
    description: Remove a previously registered notification callback.
  - name: offRequest
    link: /docs/reference/plugin-sdk/api-reference/executionGateway/offRequest
    description: Remove a previously registered request callback.
  - name: onNotification
    link: /docs/reference/plugin-sdk/api-reference/executionGateway/onNotification
    description: "Register a callback for execution notifications.
These are broadcast after any locally-executed agent action."
  - name: onRequest
    link: /docs/reference/plugin-sdk/api-reference/executionGateway/onRequest
    description: "Register a callback for incoming execution requests.
These are proxied agent messages that the claiming plugin must handle.
After processing, call sendReply() with the requestId and result."
  - name: relinquish
    link: /docs/reference/plugin-sdk/api-reference/executionGateway/relinquish
    description: Release the claim on the execution gateway.
  - name: sendReply
    link: /docs/reference/plugin-sdk/api-reference/executionGateway/sendReply
    description: Send a reply for a specific execution request.
  - name: subscribe
    link: /docs/reference/plugin-sdk/api-reference/executionGateway/subscribe
    description: "Subscribe to execution notifications.
Notifications are broadcast whenever the server handles a message locally."
  - name: unsubscribe
    link: /docs/reference/plugin-sdk/api-reference/executionGateway/unsubscribe
    description: Unsubscribe from execution notifications.
---
# ExecutionGateway API

The `executionGateway` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`claim()`](./claim) — Claim exclusive handling of execution requests.
Only one plugin can claim at a time. Returns an error if already claimed.
- [`offNotification()`](./offNotification) — Remove a previously registered notification callback.
- [`offRequest()`](./offRequest) — Remove a previously registered request callback.
- [`onNotification()`](./onNotification) — Register a callback for execution notifications.
These are broadcast after any locally-executed agent action.
- [`onRequest()`](./onRequest) — Register a callback for incoming execution requests.
These are proxied agent messages that the claiming plugin must handle.
After processing, call sendReply() with the requestId and result.
- [`relinquish()`](./relinquish) — Release the claim on the execution gateway.
- [`sendReply()`](./sendReply) — Send a reply for a specific execution request.
- [`subscribe()`](./subscribe) — Subscribe to execution notifications.
Notifications are broadcast whenever the server handles a message locally.
- [`unsubscribe()`](./unsubscribe) — Unsubscribe from execution notifications.
