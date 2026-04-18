---
name: sendFeatureToChat
cbbaseinfo:
  description: "Sends a feature to the chat for discussion.

Shares the feature details in a chat context so that team members or agents can
discuss and collaborate on the feature requirements."
cbparameters:
  parameters:
    - name: featureId
      typeName: string
      description: The unique identifier of the feature to send to chat
      isOptional: false
    - name: data
      typeName: SendFeatureToChatRequest
      description: Optional parameters controlling how the feature is shared
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the feature has been sent to chat
data:
  name: sendFeatureToChat
  category: roadmap
  link: sendFeatureToChat.md
---
# sendFeatureToChat

```typescript
client.roadmap.sendFeatureToChat(featureId: string, data?: SendFeatureToChatRequest): Promise<unknown>
```

Sends a feature to the chat for discussion.

Shares the feature details in a chat context so that team members or agents can
discuss and collaborate on the feature requirements.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `featureId` | `string` | The unique identifier of the feature to send to chat |
| `data` | `SendFeatureToChatRequest` _(optional)_ | Optional parameters controlling how the feature is shared |

## Returns

**`Promise<unknown>`** — A promise that resolves when the feature has been sent to chat

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.sendFeatureToChat('featureId');
```
