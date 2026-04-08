---
title: ServiceWebSocketHandler
---

[**@codebolt/types**](../index.md)

***

# Type Alias: ServiceWebSocketHandler\<K\>

```ts
type ServiceWebSocketHandler<K> = WebSocketMessageHandler<ServiceResponseTypeMap[K]>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:190

## Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ServiceResponseTypeMap`](../interfaces/ServiceResponseTypeMap) |
