### sendMessage

Sends a message to the connected websocket. This function sends a JSON formatted message through the websocket connection.

#### Syntax

```javascript
codebolt.chat.sendMessage(message: string): void
```
#### Returns

This function does not return any value.

#### Example

```javascript
// Example of sending a "Hello World" message
codebolt.chat.sendMessage("Hello World");
