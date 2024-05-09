### getChatHistory

Requests and retrieves the chat history from a websocket connection. This function sends a request for chat history and listens for a response message containing that history. It returns a promise that resolves with the chat history data once received.

#### Syntax

```javascript
codebolt.chat.getChatHistory(): Promise<any>
```


#### Parameters
This function does not take any parameters.


#### Returns

Returns a `Promise` that resolves with the chat history data, which is the response to the `getChatHistory` request, when a message of type `getChatHistoryResponse` is received.
