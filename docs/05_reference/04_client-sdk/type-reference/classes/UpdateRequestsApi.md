---
title: UpdateRequestsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: UpdateRequestsApi

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:4

## Constructors

### Constructor

```ts
new UpdateRequestsApi(http: HttpClient): UpdateRequestsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`UpdateRequestsApi`

## Methods

### addDispute()

```ts
addDispute(id: string, data: AddDisputeRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:53

Add a dispute to a request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `AddDisputeRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### addDisputeComment()

```ts
addDisputeComment(
   id: string, 
   disputeId: string, 
data: AddDisputeCommentRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:63

Add a comment to a dispute

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `disputeId` | `string` |
| `data` | `AddDisputeCommentRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### addWatcher()

```ts
addWatcher(id: string, data: AddWatcherRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:68

Add a watcher to a request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `AddWatcherRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### completeWork()

```ts
completeWork(id: string, data?: CompleteWorkRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:43

Complete work on a request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `CompleteWorkRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### create()

```ts
create(data: CreateUpdateRequestRequest): Promise<UpdateRequest>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:18

Create a new update request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateUpdateRequestRequest` |

#### Returns

`Promise`\<`UpdateRequest`\>

***

### delete()

```ts
delete(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:28

Delete an update request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### get()

```ts
get(id: string): Promise<UpdateRequest>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:13

Get a single update request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`UpdateRequest`\>

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<UpdateRequest[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:8

List all update requests

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`UpdateRequest`[]\>

***

### merge()

```ts
merge(id: string, data?: MergeUpdateRequestRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:48

Merge a request into project structure

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `MergeUpdateRequestRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### removeWatcher()

```ts
removeWatcher(id: string, watcherId: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:73

Remove a watcher from a request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `watcherId` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### resolveDispute()

```ts
resolveDispute(
   id: string, 
   disputeId: string, 
data: ResolveDisputeRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:58

Resolve a dispute

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `disputeId` | `string` |
| `data` | `ResolveDisputeRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### startWork()

```ts
startWork(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:38

Start working on a request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### submit()

```ts
submit(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:33

Submit a request for review

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### update()

```ts
update(id: string, data: UpdateUpdateRequestRequest): Promise<UpdateRequest>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/update-requests.api.ts:23

Update an existing request

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateUpdateRequestRequest` |

#### Returns

`Promise`\<`UpdateRequest`\>
