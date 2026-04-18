---
cbapicategory:
  - name: batchHistory
    link: /docs/reference/client-sdk/api-reference/iconView/batchHistory
    description: "Retrieves icon view history for multiple threads in a single request.

More efficient than calling  individually for each
thread when you need history for several threads at once."
  - name: getHistory
    link: /docs/reference/client-sdk/api-reference/iconView/getHistory
    description: "Retrieves the icon view history for a specific conversation thread.

Returns a chronologically ordered list of history entries representing
the actions and messages that occurred within the thread."
  - name: getMessage
    link: /docs/reference/client-sdk/api-reference/iconView/getMessage
    description: "Retrieves a specific message from a conversation thread's icon view.

Returns the full details of a single message including its content,
metadata, and any associated icon view display information."
---
# IconView API

Icon View API

<CBAPICategory />

## Methods

- [`batchHistory()`](./batchHistory) — Retrieves icon view history for multiple threads in a single request.

More efficient than calling  individually for each
thread when you need history for several threads at once.
- [`getHistory()`](./getHistory) — Retrieves the icon view history for a specific conversation thread.

Returns a chronologically ordered list of history entries representing
the actions and messages that occurred within the thread.
- [`getMessage()`](./getMessage) — Retrieves a specific message from a conversation thread's icon view.

Returns the full details of a single message including its content,
metadata, and any associated icon view display information.
