### waitforReply

Sends a message through a websocket and waits for a specific type of response. This function sends a JSON-formatted request and listens for a response. It returns a promise that resolves with the response data when a message of type `messageResponse` is received.

#### Syntax

```javascript
codebolt.chat.waitforReply(message: string): Promise<any>
```

#### Returns

Returns a `Promise` that resolves with the response data when a message of type `messageResponse` is received from the websocket.

#### Example

```javascript
// Sending a message and handling the response
await codebolt.chat.waitforReply("Requesting info");
//User can see this message on their UI and when user send a reply this prmoise resolves
```
