---
name: acknowledge
cbbaseinfo:
  description: Acknowledges receipt of a message to confirm delivery.
cbparameters:
  parameters:
    - name: params
      typeName: IAcknowledgeParams
      description: Parameters including the messageId to acknowledge.
  returns:
    signatureTypeName: "Promise<IAcknowledgeResponse>"
    description: A promise that resolves when the message is acknowledged.
data:
  name: acknowledge
  category: mail
  link: acknowledge.md
---
# acknowledge

```typescript
codebolt.mail.acknowledge(params: IAcknowledgeParams): Promise<IAcknowledgeResponse>
```

Acknowledges receipt of a message to confirm delivery.
### Parameters

- **`params`** (IAcknowledgeParams): Parameters including the messageId to acknowledge.

### Returns

- **`Promise<IAcknowledgeResponse>`**: A promise that resolves when the message is acknowledged.

### Examples

#### Example 1: Acknowledge Message Receipt

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.mail.acknowledge({
  messageId: 'msg-123'
});

if (result.success) {
  console.log('Message acknowledged');
}
```

### Common Use Cases

- **Delivery Confirmation**: Confirm message receipt
- **Workflow Triggers**: Trigger next steps after acknowledgment
- **Tracking**: Track message processing

### Notes

- Confirms message was received and processed
- Different from markRead (acknowledges processing)
