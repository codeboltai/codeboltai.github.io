---
title: FastMCPSession
---

[**@codebolt/mcp**](../index)

***

# Class: FastMCPSession\<T\>

Defined in: packages/mcp/src/mcpServer.ts:556

Class representing a FastMCP session.
Manages communication between the client and server.

## Extends

- `FastMCPSessionEventEmitter`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `FastMCPSessionAuth` | `FastMCPSessionAuth` |

## Constructors

### Constructor

```ts
new FastMCPSession<T>(options: {
  auth?: T;
  name: string;
  prompts: Prompt<Readonly<{
     complete?: ArgumentValueCompleter;
     description?: string;
     enum?: string[];
     name: string;
     required?: boolean;
   }>[], PromptArgumentsToObject<Readonly<{
     complete?: ArgumentValueCompleter;
     description?: string;
     enum?: string[];
     name: string;
     required?: boolean;
  }>[]>>[];
  resources: Resource[];
  resourcesTemplates: InputResourceTemplate<Readonly<{
     complete?: ArgumentValueCompleter;
     description?: string;
     name: string;
  }>[]>[];
  tools: Tool<T, ZodTypeAny>[];
  version: string;
}): FastMCPSession<T>;
```

Defined in: packages/mcp/src/mcpServer.ts:572

Creates a new FastMCPSession.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `auth?`: `T`; `name`: `string`; `prompts`: `Prompt`\<`Readonly`\<\{ `complete?`: `ArgumentValueCompleter`; `description?`: `string`; `enum?`: `string`[]; `name`: `string`; `required?`: `boolean`; \}\>[], `PromptArgumentsToObject`\<`Readonly`\<\{ `complete?`: `ArgumentValueCompleter`; `description?`: `string`; `enum?`: `string`[]; `name`: `string`; `required?`: `boolean`; \}\>[]\>\>[]; `resources`: `Resource`[]; `resourcesTemplates`: `InputResourceTemplate`\<`Readonly`\<\{ `complete?`: `ArgumentValueCompleter`; `description?`: `string`; `name`: `string`; \}\>[]\>[]; `tools`: `Tool`\<`T`, `ZodTypeAny`\>[]; `version`: `string`; \} | Configuration options for the session |
| `options.auth?` | `T` | - |
| `options.name` | `string` | - |
| `options.prompts` | `Prompt`\<`Readonly`\<\{ `complete?`: `ArgumentValueCompleter`; `description?`: `string`; `enum?`: `string`[]; `name`: `string`; `required?`: `boolean`; \}\>[], `PromptArgumentsToObject`\<`Readonly`\<\{ `complete?`: `ArgumentValueCompleter`; `description?`: `string`; `enum?`: `string`[]; `name`: `string`; `required?`: `boolean`; \}\>[]\>\>[] | - |
| `options.resources` | `Resource`[] | - |
| `options.resourcesTemplates` | `InputResourceTemplate`\<`Readonly`\<\{ `complete?`: `ArgumentValueCompleter`; `description?`: `string`; `name`: `string`; \}\>[]\>[] | - |
| `options.tools` | `Tool`\<`T`, `ZodTypeAny`\>[] | - |
| `options.version` | `string` | - |

#### Returns

`FastMCPSession`\<`T`\>

#### Overrides

```ts
FastMCPSessionEventEmitter.constructor
```

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="_emittertype"></a> ` _emitterType?` | `EventEmitter`\<`DefaultEventMap`\> | `FastMCPSessionEventEmitter. _emitterType` | node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:5 |
| <a id="_emittype"></a> ` _emitType?` | `FastMCPSessionEvents` | `FastMCPSessionEventEmitter. _emitType` | node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:7 |
| <a id="_eventstype"></a> ` _eventsType?` | `FastMCPSessionEvents` | `FastMCPSessionEventEmitter. _eventsType` | node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:6 |
| <a id="capturerejectionsymbol"></a> `[captureRejectionSymbol]?` | \<`K`\>(`error`: `Error`, `event`: `string` \| `symbol`, ...`args`: `AnyRest`) => `void` | `FastMCPSessionEventEmitter.[captureRejectionSymbol]` | node\_modules/.pnpm/@types+node@20.19.19/node\_modules/@types/node/events.d.ts:103 |

## Accessors

### clientCapabilities

#### Get Signature

```ts
get clientCapabilities(): 
  | {
[key: string]: unknown;
  elicitation?: {
   [key: string]: unknown;
  };
  experimental?: {
   [key: string]: unknown;
  };
  roots?: {
   [key: string]: unknown;
     listChanged?: boolean;
  };
  sampling?: {
   [key: string]: unknown;
  };
}
  | null;
```

Defined in: packages/mcp/src/mcpServer.ts:718

##### Returns

```ts
{
[key: string]: unknown;
  elicitation?: {
   [key: string]: unknown;
  };
  experimental?: {
   [key: string]: unknown;
  };
  roots?: {
   [key: string]: unknown;
     listChanged?: boolean;
  };
  sampling?: {
   [key: string]: unknown;
  };
}
```

##### Index Signature

```ts
[key: string]: unknown
```

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `elicitation?` | \{ \[`key`: `string`\]: `unknown`; \} | Present if the client supports eliciting user input. | node\_modules/.pnpm/@modelcontextprotocol+sdk@1.19.1/node\_modules/@modelcontextprotocol/sdk/dist/esm/types.d.ts:1353 |
| `experimental?` | \{ \[`key`: `string`\]: `unknown`; \} | Experimental, non-standard capabilities that the client supports. | node\_modules/.pnpm/@modelcontextprotocol+sdk@1.19.1/node\_modules/@modelcontextprotocol/sdk/dist/esm/types.d.ts:1345 |
| `roots?` | \{ \[`key`: `string`\]: `unknown`; `listChanged?`: `boolean`; \} | Present if the client supports listing roots. | node\_modules/.pnpm/@modelcontextprotocol+sdk@1.19.1/node\_modules/@modelcontextprotocol/sdk/dist/esm/types.d.ts:1357 |
| `roots.listChanged?` | `boolean` | Whether the client supports issuing notifications for changes to the roots list. | node\_modules/.pnpm/@modelcontextprotocol+sdk@1.19.1/node\_modules/@modelcontextprotocol/sdk/dist/esm/types.d.ts:1366 |
| `sampling?` | \{ \[`key`: `string`\]: `unknown`; \} | Present if the client supports sampling from an LLM. | node\_modules/.pnpm/@modelcontextprotocol+sdk@1.19.1/node\_modules/@modelcontextprotocol/sdk/dist/esm/types.d.ts:1349 |

`null`

***

### loggingLevel

#### Get Signature

```ts
get loggingLevel(): LoggingLevel;
```

Defined in: packages/mcp/src/mcpServer.ts:799

##### Returns

`LoggingLevel`

***

### roots

#### Get Signature

```ts
get roots(): {
[key: string]: unknown;
  _meta?: {
   [key: string]: unknown;
  };
  name?: string;
  uri: string;
}[];
```

Defined in: packages/mcp/src/mcpServer.ts:777

##### Returns

***

### server

#### Get Signature

```ts
get server(): Server;
```

Defined in: packages/mcp/src/mcpServer.ts:722

##### Returns

`Server`

## Methods

### addListener()

#### Call Signature

```ts
addListener<P, T>(
   this: T, 
   event: P, 
   listener: (...args: ListenerType<FastMCPSessionEvents[P]>) => void): T;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:17

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* keyof `FastMCPSessionEvents` |
| `T` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `event` | `P` |
| `listener` | (...`args`: `ListenerType`\<`FastMCPSessionEvents`\[`P`\]\>) => `void` |

##### Returns

`T`

##### Inherited from

```ts
FastMCPSessionEventEmitter.addListener
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
FastMCPSessionEventEmitter.addListener
```

***

### close()

```ts
close(): Promise<void>;
```

Defined in: packages/mcp/src/mcpServer.ts:781

#### Returns

`Promise`\<`void`\>

***

### connect()

```ts
connect(transport: Transport): Promise<void>;
```

Defined in: packages/mcp/src/mcpServer.ts:734

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transport` | `Transport` |

#### Returns

`Promise`\<`void`\>

***

### emit()

#### Call Signature

```ts
emit<P, T>(
   this: T, 
   event: P, ...
   args: ListenerType<FastMCPSessionEvents[P]>): T;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:27

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* keyof `FastMCPSessionEvents` |
| `T` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `event` | `P` |
| ...`args` | `ListenerType`\<`FastMCPSessionEvents`\[`P`\]\> |

##### Returns

`T`

##### Inherited from

```ts
FastMCPSessionEventEmitter.emit
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
FastMCPSessionEventEmitter.emit
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
FastMCPSessionEventEmitter.eventNames
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
FastMCPSessionEventEmitter.getMaxListeners
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
FastMCPSessionEventEmitter.listenerCount
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
FastMCPSessionEventEmitter.listeners
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
FastMCPSessionEventEmitter.off
```

***

### on()

#### Call Signature

```ts
on<P, T>(
   this: T, 
   event: P, 
   listener: (...args: ListenerType<FastMCPSessionEvents[P]>) => void): T;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:15

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* keyof `FastMCPSessionEvents` |
| `T` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `event` | `P` |
| `listener` | (...`args`: `ListenerType`\<`FastMCPSessionEvents`\[`P`\]\>) => `void` |

##### Returns

`T`

##### Inherited from

```ts
FastMCPSessionEventEmitter.on
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
FastMCPSessionEventEmitter.on
```

***

### once()

#### Call Signature

```ts
once<P, T>(
   this: T, 
   event: P, 
   listener: (...args: ListenerType<FastMCPSessionEvents[P]>) => void): T;
```

Defined in: node\_modules/.pnpm/strict-event-emitter-types@2.0.0/node\_modules/strict-event-emitter-types/types/src/index.d.ts:25

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* keyof `FastMCPSessionEvents` |
| `T` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `event` | `P` |
| `listener` | (...`args`: `ListenerType`\<`FastMCPSessionEvents`\[`P`\]\>) => `void` |

##### Returns

`T`

##### Inherited from

```ts
FastMCPSessionEventEmitter.once
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
FastMCPSessionEventEmitter.once
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
FastMCPSessionEventEmitter.prependListener
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
FastMCPSessionEventEmitter.prependOnceListener
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
FastMCPSessionEventEmitter.rawListeners
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
FastMCPSessionEventEmitter.removeAllListeners
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
| `P` *extends* keyof `FastMCPSessionEvents` |
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
FastMCPSessionEventEmitter.removeListener
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
FastMCPSessionEventEmitter.removeListener
```

***

### requestSampling()

```ts
requestSampling(message: {
  _meta?: objectOutputType<{
     progressToken: ZodOptional<ZodUnion<[ZodString, ZodNumber]>>;
  }, ZodTypeAny, "passthrough">;
  includeContext?: "none" | "thisServer" | "allServers";
  maxTokens: number;
  messages: objectOutputType<{
     content: ZodUnion<[ZodObject<{
        _meta: ZodOptional<ZodObject<..., ..., ..., ..., ...>>;
        text: ZodString;
        type: ZodLiteral<"text">;
      }, "passthrough", ZodTypeAny, objectOutputType<{
        _meta: ZodOptional<...>;
        text: ZodString;
        type: ZodLiteral<...>;
      }, ZodTypeAny, "passthrough">, objectInputType<{
        _meta: ZodOptional<...>;
        text: ZodString;
        type: ZodLiteral<...>;
      }, ZodTypeAny, "passthrough">>, ZodObject<{
        _meta: ZodOptional<ZodObject<..., ..., ..., ..., ...>>;
        data: ZodEffects<ZodString, string, string>;
        mimeType: ZodString;
        type: ZodLiteral<"image">;
      }, "passthrough", ZodTypeAny, objectOutputType<{
        _meta: ZodOptional<...>;
        data: ZodEffects<..., ..., ...>;
        mimeType: ZodString;
        type: ZodLiteral<...>;
      }, ZodTypeAny, "passthrough">, objectInputType<{
        _meta: ZodOptional<...>;
        data: ZodEffects<..., ..., ...>;
        mimeType: ZodString;
        type: ZodLiteral<...>;
      }, ZodTypeAny, "passthrough">>, ZodObject<{
        _meta: ZodOptional<ZodObject<..., ..., ..., ..., ...>>;
        data: ZodEffects<ZodString, string, string>;
        mimeType: ZodString;
        type: ZodLiteral<"audio">;
      }, "passthrough", ZodTypeAny, objectOutputType<{
        _meta: ZodOptional<...>;
        data: ZodEffects<..., ..., ...>;
        mimeType: ZodString;
        type: ZodLiteral<...>;
      }, ZodTypeAny, "passthrough">, objectInputType<{
        _meta: ZodOptional<...>;
        data: ZodEffects<..., ..., ...>;
        mimeType: ZodString;
        type: ZodLiteral<...>;
     }, ZodTypeAny, "passthrough">>]>;
     role: ZodEnum<["user", "assistant"]>;
  }, ZodTypeAny, "passthrough">[];
  metadata?: objectOutputType<{
  }, ZodTypeAny, "passthrough">;
  modelPreferences?: objectOutputType<{
     costPriority: ZodOptional<ZodNumber>;
     hints: ZodOptional<ZodArray<ZodObject<{
        name: ZodOptional<ZodString>;
      }, "passthrough", ZodTypeAny, objectOutputType<{
        name: ZodOptional<...>;
      }, ZodTypeAny, "passthrough">, objectInputType<{
        name: ZodOptional<...>;
     }, ZodTypeAny, "passthrough">>, "many">>;
     intelligencePriority: ZodOptional<ZodNumber>;
     speedPriority: ZodOptional<ZodNumber>;
  }, ZodTypeAny, "passthrough">;
  stopSequences?: string[];
  systemPrompt?: string;
  temperature?: number;
} & {
[k: string]: unknown;
}): Promise<SamplingResponse>;
```

Defined in: packages/mcp/src/mcpServer.ts:728

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | \{ `_meta?`: `objectOutputType`\<\{ `progressToken`: `ZodOptional`\<`ZodUnion`\<\[`ZodString`, `ZodNumber`\]\>\>; \}, `ZodTypeAny`, `"passthrough"`\>; `includeContext?`: `"none"` \| `"thisServer"` \| `"allServers"`; `maxTokens`: `number`; `messages`: `objectOutputType`\<\{ `content`: `ZodUnion`\<\[`ZodObject`\<\{ `_meta`: `ZodOptional`\<`ZodObject`\<..., ..., ..., ..., ...\>\>; `text`: `ZodString`; `type`: `ZodLiteral`\<`"text"`\>; \}, `"passthrough"`, `ZodTypeAny`, `objectOutputType`\<\{ `_meta`: `ZodOptional`\<...\>; `text`: `ZodString`; `type`: `ZodLiteral`\<...\>; \}, `ZodTypeAny`, `"passthrough"`\>, `objectInputType`\<\{ `_meta`: `ZodOptional`\<...\>; `text`: `ZodString`; `type`: `ZodLiteral`\<...\>; \}, `ZodTypeAny`, `"passthrough"`\>\>, `ZodObject`\<\{ `_meta`: `ZodOptional`\<`ZodObject`\<..., ..., ..., ..., ...\>\>; `data`: `ZodEffects`\<`ZodString`, `string`, `string`\>; `mimeType`: `ZodString`; `type`: `ZodLiteral`\<`"image"`\>; \}, `"passthrough"`, `ZodTypeAny`, `objectOutputType`\<\{ `_meta`: `ZodOptional`\<...\>; `data`: `ZodEffects`\<..., ..., ...\>; `mimeType`: `ZodString`; `type`: `ZodLiteral`\<...\>; \}, `ZodTypeAny`, `"passthrough"`\>, `objectInputType`\<\{ `_meta`: `ZodOptional`\<...\>; `data`: `ZodEffects`\<..., ..., ...\>; `mimeType`: `ZodString`; `type`: `ZodLiteral`\<...\>; \}, `ZodTypeAny`, `"passthrough"`\>\>, `ZodObject`\<\{ `_meta`: `ZodOptional`\<`ZodObject`\<..., ..., ..., ..., ...\>\>; `data`: `ZodEffects`\<`ZodString`, `string`, `string`\>; `mimeType`: `ZodString`; `type`: `ZodLiteral`\<`"audio"`\>; \}, `"passthrough"`, `ZodTypeAny`, `objectOutputType`\<\{ `_meta`: `ZodOptional`\<...\>; `data`: `ZodEffects`\<..., ..., ...\>; `mimeType`: `ZodString`; `type`: `ZodLiteral`\<...\>; \}, `ZodTypeAny`, `"passthrough"`\>, `objectInputType`\<\{ `_meta`: `ZodOptional`\<...\>; `data`: `ZodEffects`\<..., ..., ...\>; `mimeType`: `ZodString`; `type`: `ZodLiteral`\<...\>; \}, `ZodTypeAny`, `"passthrough"`\>\>\]\>; `role`: `ZodEnum`\<\[`"user"`, `"assistant"`\]\>; \}, `ZodTypeAny`, `"passthrough"`\>[]; `metadata?`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; `modelPreferences?`: `objectOutputType`\<\{ `costPriority`: `ZodOptional`\<`ZodNumber`\>; `hints`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `name`: `ZodOptional`\<`ZodString`\>; \}, `"passthrough"`, `ZodTypeAny`, `objectOutputType`\<\{ `name`: `ZodOptional`\<...\>; \}, `ZodTypeAny`, `"passthrough"`\>, `objectInputType`\<\{ `name`: `ZodOptional`\<...\>; \}, `ZodTypeAny`, `"passthrough"`\>\>, `"many"`\>\>; `intelligencePriority`: `ZodOptional`\<`ZodNumber`\>; `speedPriority`: `ZodOptional`\<`ZodNumber`\>; \}, `ZodTypeAny`, `"passthrough"`\>; `stopSequences?`: `string`[]; `systemPrompt?`: `string`; `temperature?`: `number`; \} & \{ \[`k`: `string`\]: `unknown`; \} |

#### Returns

`Promise`\<`SamplingResponse`\>

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
FastMCPSessionEventEmitter.setMaxListeners
```
