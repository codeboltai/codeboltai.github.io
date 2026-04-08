---
title: MCPServer
---

[**@codebolt/mcp**](../index)

***

# Class: MCPServer\<T\>

Defined in: packages/mcp/src/mcpServer.ts:1221

Class representing a toolbox for FastMCP.
Manages tools, resources, and prompts for a Model Context Protocol server.

## Extends

- `FastMCPEventEmitter`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `Record`\<`string`, `unknown`\> \| `undefined` | `undefined` |

## Constructors

### Constructor

```ts
new MCPServer<T>(options: ServerOptions<T>): MCPServer<T>;
```

Defined in: packages/mcp/src/mcpServer.ts:1236

Creates a new ToolBox instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `ServerOptions`\<`T`\> | Configuration options for the toolbox |

#### Returns

`MCPServer`\<`T`\>

#### Overrides

```ts
FastMCPEventEmitter.constructor
```

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="_emittertype"></a> ` _emitterType?` | `public` | `EventEmitter`\<`DefaultEventMap`\> | - | `FastMCPEventEmitter. _emitterType` | node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:5 |
| <a id="_emittype"></a> ` _emitType?` | `public` | `FastMCPEvents`\<`FastMCPSessionAuth`\> | - | `FastMCPEventEmitter. _emitType` | node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:7 |
| <a id="_eventstype"></a> ` _eventsType?` | `public` | `FastMCPEvents`\<`FastMCPSessionAuth`\> | - | `FastMCPEventEmitter. _eventsType` | node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:6 |
| <a id="capturerejectionsymbol"></a> `[captureRejectionSymbol]?` | `public` | \<`K`\>(`error`: `Error`, `event`: `string` \| `symbol`, ...`args`: `AnyRest`) => `void` | - | `FastMCPEventEmitter.[captureRejectionSymbol]` | node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:103 |
| <a id="options"></a> `options` | `public` | `ServerOptions`\<`T`\> | Configuration options for the toolbox | - | [packages/mcp/src/mcpServer.ts:1236](packages/mcp/src/mcpServer.ts#L1236) |

## Accessors

### sessions

#### Get Signature

```ts
get sessions(): FastMCPSession<T>[];
```

Defined in: packages/mcp/src/mcpServer.ts:1246

Gets all active sessions.

##### Returns

[`FastMCPSession`](FastMCPSession)\<`T`\>[]

## Methods

### activate()

```ts
activate(options: 
  | {
  transportType: "stdio";
}
  | {
  sse: {
     endpoint: `/${string}`;
     port: number;
  };
  transportType: "sse";
}): Promise<void>;
```

Defined in: packages/mcp/src/mcpServer.ts:1346

Activates the server.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \| \{ `transportType`: `"stdio"`; \} \| \{ `sse`: \{ `endpoint`: `` `/$\{string\}` ``; `port`: `number`; \}; `transportType`: `"sse"`; \} | Options for the server transport |

#### Returns

`Promise`\<`void`\>

***

### addListener()

#### Call Signature

```ts
addListener<P, T>(
   this: T, 
   event: P, 
   listener: (...args: ListenerType<FastMCPEvents<FastMCPSessionAuth>[P]>) => void): T;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:17

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* keyof `FastMCPEvents`\<`FastMCPSessionAuth`\> |
| `T` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `event` | `P` |
| `listener` | (...`args`: `ListenerType`\<`FastMCPEvents`\<`FastMCPSessionAuth`\>\[`P`\]\>) => `void` |

##### Returns

`T`

##### Inherited from

```ts
FastMCPEventEmitter.addListener
```

#### Call Signature

```ts
addListener(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:18

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | *typeof* `assignmentCompatibilityHack` |
| `listener` | (...`args`: `any`[]) => `any` |

##### Returns

`void`

##### Inherited from

```ts
FastMCPEventEmitter.addListener
```

***

### addPrompt()

```ts
addPrompt<Args>(prompt: InputPrompt<Args>): void;
```

Defined in: packages/mcp/src/mcpServer.ts:1284

Adds a prompt to the server.

#### Type Parameters

| Type Parameter |
| ------ |
| `Args` *extends* `Readonly`\<\{ `complete?`: `ArgumentValueCompleter`; `description?`: `string`; `enum?`: `string`[]; `name`: `string`; `required?`: `boolean`; \}\>[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `InputPrompt`\<`Args`\> | The prompt to add |

#### Returns

`void`

***

### addResource()

```ts
addResource(resource: Resource): void;
```

Defined in: packages/mcp/src/mcpServer.ts:1264

Adds a resource to the server.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resource` | `Resource` | The resource to add |

#### Returns

`void`

***

### addResourceTemplate()

```ts
addResourceTemplate<Args>(resource: InputResourceTemplate<Args>): void;
```

Defined in: packages/mcp/src/mcpServer.ts:1273

Adds a resource template to the server.

#### Type Parameters

| Type Parameter |
| ------ |
| `Args` *extends* `Readonly`\<\{ `complete?`: `ArgumentValueCompleter`; `description?`: `string`; `name`: `string`; \}\>[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resource` | `InputResourceTemplate`\<`Args`\> | The resource template to add |

#### Returns

`void`

***

### addTool()

```ts
addTool<Params>(tool: Tool<T, Params>): void;
```

Defined in: packages/mcp/src/mcpServer.ts:1255

Adds a tool to the server.

#### Type Parameters

| Type Parameter |
| ------ |
| `Params` *extends* `ZodTypeAny` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tool` | `Tool`\<`T`, `Params`\> | The tool to add |

#### Returns

`void`

***

### emit()

#### Call Signature

```ts
emit<P, T>(
   this: T, 
   event: P, ...
   args: ListenerType<FastMCPEvents<FastMCPSessionAuth>[P]>): T;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:27

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* keyof `FastMCPEvents`\<`FastMCPSessionAuth`\> |
| `T` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `event` | `P` |
| ...`args` | `ListenerType`\<`FastMCPEvents`\<`FastMCPSessionAuth`\>\[`P`\]\> |

##### Returns

`T`

##### Inherited from

```ts
FastMCPEventEmitter.emit
```

#### Call Signature

```ts
emit(event: typeof assignmentCompatibilityHack, ...args: any[]): void;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:28

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | *typeof* `assignmentCompatibilityHack` |
| ...`args` | `any`[] |

##### Returns

`void`

##### Inherited from

```ts
FastMCPEventEmitter.emit
```

***

### eventNames()

```ts
eventNames(): (string | symbol)[];
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:968

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Inherited from

```ts
FastMCPEventEmitter.eventNames
```

***

### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:820

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

```ts
FastMCPEventEmitter.getMaxListeners
```

***

### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number;
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:914

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

#### Since

v3.2.0

#### Inherited from

```ts
FastMCPEventEmitter.listenerCount
```

***

### listeners()

```ts
listeners<K>(eventName: string | symbol): Function[];
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:833

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Since

v0.1.26

#### Inherited from

```ts
FastMCPEventEmitter.listeners
```

***

### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:793

Alias for `emitter.removeListener()`.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Since

v10.0.0

#### Inherited from

```ts
FastMCPEventEmitter.off
```

***

### on()

#### Call Signature

```ts
on<P, T>(
   this: T, 
   event: P, 
   listener: (...args: ListenerType<FastMCPEvents<FastMCPSessionAuth>[P]>) => void): T;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:15

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* keyof `FastMCPEvents`\<`FastMCPSessionAuth`\> |
| `T` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `event` | `P` |
| `listener` | (...`args`: `ListenerType`\<`FastMCPEvents`\<`FastMCPSessionAuth`\>\[`P`\]\>) => `void` |

##### Returns

`T`

##### Inherited from

```ts
FastMCPEventEmitter.on
```

#### Call Signature

```ts
on(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:16

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | *typeof* `assignmentCompatibilityHack` |
| `listener` | (...`args`: `any`[]) => `any` |

##### Returns

`void`

##### Inherited from

```ts
FastMCPEventEmitter.on
```

***

### once()

#### Call Signature

```ts
once<P, T>(
   this: T, 
   event: P, 
   listener: (...args: ListenerType<FastMCPEvents<FastMCPSessionAuth>[P]>) => void): T;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:25

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* keyof `FastMCPEvents`\<`FastMCPSessionAuth`\> |
| `T` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `event` | `P` |
| `listener` | (...`args`: `ListenerType`\<`FastMCPEvents`\<`FastMCPSessionAuth`\>\[`P`\]\>) => `void` |

##### Returns

`T`

##### Inherited from

```ts
FastMCPEventEmitter.once
```

#### Call Signature

```ts
once(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:26

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | *typeof* `assignmentCompatibilityHack` |
| `listener` | (...`args`: `any`[]) => `any` |

##### Returns

`void`

##### Inherited from

```ts
FastMCPEventEmitter.once
```

***

### prependListener()

```ts
prependListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:932

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

#### Since

v6.0.0

#### Inherited from

```ts
FastMCPEventEmitter.prependListener
```

***

### prependOnceListener()

```ts
prependOnceListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:948

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

#### Since

v6.0.0

#### Inherited from

```ts
FastMCPEventEmitter.prependOnceListener
```

***

### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[];
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:864

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Since

v9.4.0

#### Inherited from

```ts
FastMCPEventEmitter.rawListeners
```

***

### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this;
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:804

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName?` | `string` \| `symbol` |

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

```ts
FastMCPEventEmitter.removeAllListeners
```

***

### removeListener()

#### Call Signature

```ts
removeListener<P, T>(
   this: T, 
   event: P, 
   listener: (...args: any[]) => any): T;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:21

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* keyof `FastMCPEvents`\<`FastMCPSessionAuth`\> |
| `T` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `event` | `P` |
| `listener` | (...`args`: `any`[]) => `any` |

##### Returns

`T`

##### Inherited from

```ts
FastMCPEventEmitter.removeListener
```

#### Call Signature

```ts
removeListener(event: typeof assignmentCompatibilityHack, listener: (...args: any[]) => any): void;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:22

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | *typeof* `assignmentCompatibilityHack` |
| `listener` | (...`args`: `any`[]) => `any` |

##### Returns

`void`

##### Inherited from

```ts
FastMCPEventEmitter.removeListener
```

***

### setMaxListeners()

```ts
setMaxListeners(n: number): this;
```

Defined in: node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:814

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `n` | `number` |

#### Returns

`this`

#### Since

v0.3.5

#### Inherited from

```ts
FastMCPEventEmitter.setMaxListeners
```

***

### start()

```ts
start(options: 
  | {
  transportType: "stdio";
}
  | {
  sse: {
     endpoint: `/${string}`;
     port: number;
  };
  transportType: "sse";
}): Promise<void>;
```

Defined in: packages/mcp/src/mcpServer.ts:1295

Starts the server.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \| \{ `transportType`: `"stdio"`; \} \| \{ `sse`: \{ `endpoint`: `` `/$\{string\}` ``; `port`: `number`; \}; `transportType`: `"sse"`; \} | Options for the server transport |

#### Returns

`Promise`\<`void`\>

***

### stop()

```ts
stop(): Promise<void>;
```

Defined in: packages/mcp/src/mcpServer.ts:1335

Stops the server.

#### Returns

`Promise`\<`void`\>
