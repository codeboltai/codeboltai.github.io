### processStarted

Initiates a process and sets up listening for websocket messages related to that process. It sends a `processStarted` message through the websocket and listens for a `stopProcessClicked` message. The function returns an object containing an event emitter and a method to stop the process.

#### Syntax

```javascript
codebolt.chat.processStarted(): { event: EventEmitter, stopProcess: Function }
```

#### Parameters

This function does not take any parameters.

#### Returns

Returns an object containing:
- `event` (EventEmitter): An event emitter to handle custom events based on websocket messages.
- `stopProcess` (Function): A function to stop the process, which also sends a `processStoped` message through the websocket.

#### Example

```javascript
// Start the process and handle stop events
const processControl = await codebolt.chat.processStarted();
processControl.event.on('stopProcessClicked', message => {
    console.log("Stop process clicked:", message);
    processControl.stopProcess();
});
