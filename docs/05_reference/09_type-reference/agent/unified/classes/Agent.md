---
title: Agent
---

[**@codebolt/agent**](../../index)

***

# Class: Agent

Defined in: packages/agent/src/unified/agent/agent.ts:9

## Implements

- `AgentInterface`

## Constructors

### Constructor

```ts
new Agent(config: AgentConfig): Agent;
```

Defined in: packages/agent/src/unified/agent/agent.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `AgentConfig` |

#### Returns

`Agent`

## Methods

### execute()

```ts
execute(reqMessage: FlatUserMessage): Promise<{
  error?: string;
  result: any;
  success: boolean;
}>;
```

Defined in: packages/agent/src/unified/agent/agent.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reqMessage` | `FlatUserMessage` |

#### Returns

`Promise`\<\{
  `error?`: `string`;
  `result`: `any`;
  `success`: `boolean`;
\}\>

#### Implementation of

```ts
AgentInterface.execute
```
