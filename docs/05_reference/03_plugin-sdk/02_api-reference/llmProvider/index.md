---
cbapicategory:
  - name: onCompletionRequest
    link: /docs/reference/plugin-sdk/api-reference/llmProvider/onCompletionRequest
    description: "Subscribe to incoming non-streaming completion requests.
Reply with sendReply(requestId, response) or sendError(requestId, error)."
  - name: onLoginRequest
    link: /docs/reference/plugin-sdk/api-reference/llmProvider/onLoginRequest
    description: "Subscribe to incoming login requests (triggered by the UI login button).
The plugin should run its authentication flow (e.g. OAuth) and then
call sendReply(requestId, { authenticated: true }) or sendError()."
  - name: onStreamRequest
    link: /docs/reference/plugin-sdk/api-reference/llmProvider/onStreamRequest
    description: "Subscribe to incoming streaming completion requests.
Stream tokens with sendChunk(requestId, chunk), then finalize with
sendReply(requestId, finalResponse) or sendError(requestId, error)."
  - name: register
    link: /docs/reference/plugin-sdk/api-reference/llmProvider/register
    description: "Register this plugin as a custom LLM provider on the server.
After registration, the provider appears in the provider list and
can be selected by users like any built-in provider."
  - name: sendChunk
    link: /docs/reference/plugin-sdk/api-reference/llmProvider/sendChunk
    description: "Send a streaming chunk for an in-flight stream request.
The chunk shape should match multillm StreamChunk
(id, model, choices: [{delta: {content, ...}}])."
  - name: sendError
    link: /docs/reference/plugin-sdk/api-reference/llmProvider/sendError
    description: Send an error for a completion or stream request.
  - name: sendReply
    link: /docs/reference/plugin-sdk/api-reference/llmProvider/sendReply
    description: "Send the final reply for a completion or stream request.
For non-streaming: this is the only message you send.
For streaming: send after all chunks have been emitted."
  - name: unregister
    link: /docs/reference/plugin-sdk/api-reference/llmProvider/unregister
    description: "Unregister this plugin's provider."
---
# LlmProvider API

The `llmProvider` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`onCompletionRequest()`](./onCompletionRequest) — Subscribe to incoming non-streaming completion requests.
Reply with sendReply(requestId, response) or sendError(requestId, error).
- [`onLoginRequest()`](./onLoginRequest) — Subscribe to incoming login requests (triggered by the UI login button).
The plugin should run its authentication flow (e.g. OAuth) and then
call sendReply(requestId, { authenticated: true }) or sendError().
- [`onStreamRequest()`](./onStreamRequest) — Subscribe to incoming streaming completion requests.
Stream tokens with sendChunk(requestId, chunk), then finalize with
sendReply(requestId, finalResponse) or sendError(requestId, error).
- [`register()`](./register) — Register this plugin as a custom LLM provider on the server.
After registration, the provider appears in the provider list and
can be selected by users like any built-in provider.
- [`sendChunk()`](./sendChunk) — Send a streaming chunk for an in-flight stream request.
The chunk shape should match multillm StreamChunk
(id, model, choices: [{delta: {content, ...}}]).
- [`sendError()`](./sendError) — Send an error for a completion or stream request.
- [`sendReply()`](./sendReply) — Send the final reply for a completion or stream request.
For non-streaming: this is the only message you send.
For streaming: send after all chunks have been emitted.
- [`unregister()`](./unregister) — Unregister this plugin's provider.
