# History Module

The History module provides functionality for managing and summarizing chat conversation history. It enables agents to maintain context across conversations and create concise summaries of past interactions.

## Quick Start

```javascript
import codebolt from '@codebolt/codeboltjs';

// Summarize entire conversation history
const fullSummary = await codebolt.history.summarizeAll();
console.log('Full summary:', fullSummary);

// Summarize specific messages with depth control
const messages = [
  { role: 'user', content: 'How do I create a React component?' },
  { role: 'assistant', content: 'To create a React component...' }
];
const partialSummary = await codebolt.history.summarize(messages, 2);
console.log('Partial summary:', partialSummary);
```

## Overview

The History module offers:

- **Chat Summarization**: Create summaries of entire conversation history
- **Selective Summarization**: Summarize specific parts of conversations with depth control
- **Message Management**: Handle message objects with role and content structure
- **Context Preservation**: Maintain conversation context for better AI responses

## Common Workflows

### Workflow 1: Timeline Context Management

```javascript
class ConversationTimeline {
  constructor() {
    this.snapshots = [];
  }

  async createSnapshot(label) {
    const summary = await codebolt.history.summarizeAll();

    const snapshot = {
      label,
      timestamp: new Date().toISOString(),
      summary,
      messageCount: summary.length
    };

    this.snapshots.push(snapshot);

    // Keep only last 10 snapshots
    if (this.snapshots.length > 10) {
      this.snapshots.shift();
    }

    return snapshot;
  }

  async compareSnapshots(snapshot1, snapshot2) {
    const s1 = this.snapshots[snapshot1];
    const s2 = this.snapshots[snapshot2];

    return {
      timeDifference: new Date(s2.timestamp) - new Date(s1.timestamp),
      messageGrowth: s2.messageCount - s1.messageCount,
      topicsChanged: this.detectTopicChange(s1.summary, s2.summary)
    };
  }

  detectTopicChange(summary1, summary2) {
    const topics1 = this.extractTopics(summary1);
    const topics2 = this.extractTopics(summary2);

    const newTopics = topics2.filter(t => !topics1.includes(t));
    const lostTopics = topics1.filter(t => !topics2.includes(t));

    return { newTopics, lostTopics };
  }

  extractTopics(summary) {
    // Simple topic extraction from summary
    return summary
      .filter(msg => msg.role === 'user')
      .map(msg => msg.content.split(' ').slice(0, 3).join(' '));
  }

  async getTimeline() {
    return {
      snapshots: this.snapshots,
      currentSummary: await codebolt.history.summarizeAll(),
      totalSnapshots: this.snapshots.length
    };
  }
}

// Usage
const timeline = new ConversationTimeline();
await timeline.createSnapshot('Initial discussion');
await timeline.createSnapshot('After feature explanation');
await timeline.createSnapshot('Before implementation');

const comparison = await timeline.compareSnapshots(0, 2);
console.log('Conversation evolved:', comparison);
```

### Workflow 2: Progressive Context Building

```javascript
class ContextBuilder {
  constructor() {
    this.contextLayers = {
      immediate: [],      // Last 3 messages
      recent: [],         // Last 10 messages
      extended: [],       // Last 50 messages
      overview: []        // Entire conversation summary
    };
  }

  async buildContext(messages) {
    // Immediate context (last 3 messages)
    const immediate = messages.slice(-3);
    this.contextLayers.immediate = immediate;

    // Recent context (last 10 messages with depth 5)
    const recent = messages.slice(-10);
    this.contextLayers.recent = await codebolt.history.summarize(recent, 5);

    // Extended context (last 50 messages with depth 10)
    const extended = messages.slice(-50);
    this.contextLayers.extended = await codebolt.history.summarize(extended, 10);

    // Overview context (entire conversation)
    this.contextLayers.overview = await codebolt.history.summarizeAll();

    return this.contextLayers;
  }

  async getContextForResponse(queryType) {
    switch (queryType) {
      case 'immediate':
        return this.contextLayers.immediate;

      case 'recent':
        return this.contextLayers.recent;

      case 'detailed':
        return [
          ...this.contextLayers.immediate,
          ...this.contextLayers.recent
        ];

      case 'comprehensive':
        return [
          ...this.contextLayers.immediate,
          ...this.contextLayers.recent,
          ...this.contextLayers.extended
        ];

      case 'overview':
        return this.contextLayers.overview;

      default:
        return this.contextLayers.recent;
    }
  }

  getContextSummary() {
    return {
      immediate: this.contextLayers.immediate.length,
      recent: this.contextLayers.recent.length,
      extended: this.contextLayers.extended.length,
      overview: this.contextLayers.overview.length
    };
  }
}

// Usage
const builder = new ContextBuilder();
const messages = await getChatMessages(); // Your function to get messages
await builder.buildContext(messages);

// Get appropriate context based on query
const context = await builder.getContextForResponse('detailed');
console.log('Context for response:', context);
```

### Workflow 3: Topic Tracking

```javascript
class TopicTracker {
  constructor() {
    this.topics = new Map();
  }

  async analyzeConversation() {
    const summary = await codebolt.history.summarizeAll();

    // Extract topics from user messages
    const userMessages = summary.filter(msg => msg.role === 'user');

    for (const msg of userMessages) {
      const keywords = this.extractKeywords(msg.content);

      for (const keyword of keywords) {
        if (!this.topics.has(keyword)) {
          this.topics.set(keyword, {
            count: 0,
            firstMention: msg.content,
            timestamps: []
          });
        }

        const topic = this.topics.get(keyword);
        topic.count++;
        topic.timestamps.push(Date.now());
      }
    }

    return this.getTopicReport();
  }

  extractKeywords(content) {
    // Simple keyword extraction
    const stopWords = ['the', 'a', 'an', 'is', 'are', 'how', 'what', 'when', 'where'];
    const words = content.toLowerCase().split(/\s+/);
    return words.filter(word =>
      word.length > 3 && !stopWords.includes(word)
    );
  }

  getTopicReport() {
    const sorted = Array.from(this.topics.entries())
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 10); // Top 10 topics

    return sorted.map(([topic, data]) => ({
      topic,
      mentions: data.count,
      firstMention: data.firstMention,
      trend: this.calculateTrend(data.timestamps)
    }));
  }

  calculateTrend(timestamps) {
    if (timestamps.length < 2) return 'stable';

    const recent = timestamps.slice(-5);
    const avgGap = (recent[recent.length - 1] - recent[0]) / recent.length;

    if (avgGap < 60000) return 'rising'; // < 1 minute apart
    if (avgGap < 300000) return 'active'; // < 5 minutes apart
    return 'declining';
  }
}

// Usage
const tracker = new TopicTracker();
await tracker.analyzeConversation();
const report = tracker.getTopicReport();
console.log('Top topics:', report);
```

### Workflow 4: Smart Summarization

```javascript
class SmartSummarizer {
  async summarizeWithStrategy(strategy, messages) {
    switch (strategy) {
      case 'concise':
        return this.conciseSummary(messages);

      case 'detailed':
        return this.detailedSummary(messages);

      case 'topic-based':
        return this.topicBasedSummary(messages);

      case 'chronological':
        return this.chronologicalSummary(messages);

      default:
        return await codebolt.history.summarizeAll();
    }
  }

  async conciseSummary(messages) {
    // Very brief summary with low depth
    return await codebolt.history.summarize(messages, 2);
  }

  async detailedSummary(messages) {
    // Detailed summary with higher depth
    return await codebolt.history.summarize(messages, 10);
  }

  async topicBasedSummary(messages) {
    // Group by topic and summarize each group
    const topicGroups = this.groupByTopic(messages);

    const summaries = {};
    for (const [topic, msgs] of Object.entries(topicGroups)) {
      summaries[topic] = await codebolt.history.summarize(msgs, 5);
    }

    return summaries;
  }

  groupByTopic(messages) {
    const groups = {};

    for (const msg of messages) {
      const topic = this.detectTopic(msg.content);
      if (!groups[topic]) {
        groups[topic] = [];
      }
      groups[topic].push(msg);
    }

    return groups;
  }

  detectTopic(content) {
    const keywords = content.toLowerCase().split(/\s+/);

    if (keywords.some(k => ['api', 'endpoint', 'request'].includes(k))) {
      return 'api';
    }
    if (keywords.some(k => ['component', 'react', 'render'].includes(k))) {
      return 'ui';
    }
    if (keywords.some(k => ['database', 'query', 'sql'].includes(k))) {
      return 'database';
    }

    return 'general';
  }

  async chronologicalSummary(messages) {
    // Create time-based summaries
    const timeSegments = this.segmentByTime(messages, 300000); // 5 min segments

    const summaries = [];
    for (const segment of timeSegments) {
      const summary = await codebolt.history.summarize(segment, 3);
      summaries.push({
        startTime: segment[0].timestamp,
        endTime: segment[segment.length - 1].timestamp,
        summary
      });
    }

    return summaries;
  }

  segmentByTime(messages, segmentDuration) {
    const segments = [];
    let currentSegment = [];
    let segmentStart = null;

    for (const msg of messages) {
      if (!segmentStart) {
        segmentStart = msg.timestamp;
      }

      if (msg.timestamp - segmentStart > segmentDuration) {
        segments.push(currentSegment);
        currentSegment = [msg];
        segmentStart = msg.timestamp;
      } else {
        currentSegment.push(msg);
      }
    }

    if (currentSegment.length > 0) {
      segments.push(currentSegment);
    }

    return segments;
  }
}

// Usage
const summarizer = new SmartSummarizer();
const messages = await getChatMessages();

const concise = await summarizer.summarizeWithStrategy('concise', messages);
const detailed = await summarizer.summarizeWithStrategy('detailed', messages);
const byTopic = await summarizer.summarizeWithStrategy('topic-based', messages);
```

## Module Integration Examples

### Integration with State Module

```javascript
async function saveConversationState() {
  const summary = await codebolt.history.summarizeAll();

  // Save summary to agent state
  await codebolt.cbstate.addToAgentState(
    'conversation_summary',
    JSON.stringify(summary)
  );

  await codebolt.cbstate.addToAgentState(
    'last_summary_time',
    new Date().toISOString()
  );

  return summary;
}
```

### Integration with Debug Module

```javascript
async function debugConversationFlow() {
  const summary = await codebolt.history.summarizeAll();

  // Log conversation statistics
  await codebolt.debug.debug(
    `Conversation has ${summary.length} messages`,
    'info'
  );

  const userMessages = summary.filter(m => m.role === 'user');
  const assistantMessages = summary.filter(m => m.role === 'assistant');

  await codebolt.debug.debug(
    `User messages: ${userMessages.length}, Assistant messages: ${assistantMessages.length}`,
    'info'
  );

  return { summary, stats: { user: userMessages.length, assistant: assistantMessages.length } };
}
```

### Integration with Memory Module

```javascript
async function cacheConversationInsights() {
  const summary = await codebolt.history.summarizeAll();

  // Extract insights and cache in memory
  const insights = {
    topics: extractTopics(summary),
    messageCount: summary.length,
    timestamp: Date.now(),
    summary: summary.slice(0, 5) // Keep first 5 messages as summary
  };

  await codebolt.dbmemory.addKnowledge('conversation:insights', insights);

  return insights;
}
```

## Best Practices

### 1. Choose Appropriate Depth

```javascript
// For quick context (recent exchanges)
const quickContext = await codebolt.history.summarize(messages, 2);

// For balanced context
const balancedContext = await codebolt.history.summarize(messages, 5);

// For comprehensive context
const comprehensiveContext = await codebolt.history.summarize(messages, 10);
```

### 2. Cache Summaries

```javascript
class CachedSummary {
  constructor(ttl = 300000) { // 5 minutes
    this.ttl = ttl;
    this.cache = null;
    this.timestamp = 0;
  }

  async get() {
    const now = Date.now();

    if (!this.cache || now - this.timestamp > this.ttl) {
      this.cache = await codebolt.history.summarizeAll();
      this.timestamp = now;
    }

    return this.cache;
  }

  invalidate() {
    this.cache = null;
    this.timestamp = 0;
  }
}
```

### 3. Validate Messages

```javascript
function validateMessages(messages) {
  return messages.every(msg =>
    msg &&
    typeof msg.role === 'string' &&
    typeof msg.content === 'string' &&
    ['user', 'assistant', 'system'].includes(msg.role)
  );
}

// Usage
if (validateMessages(messages)) {
  const summary = await codebolt.history.summarize(messages, 5);
} else {
  console.error('Invalid message format');
}
```

### 4. Handle Errors Gracefully

```javascript
async function safeSummary(messages, depth) {
  try {
    if (!validateMessages(messages)) {
      throw new Error('Invalid message format');
    }

    return await codebolt.history.summarize(messages, depth);
  } catch (error) {
    console.error('Summarization failed:', error);

    // Fallback to raw messages
    return messages.slice(-10); // Return last 10 messages
  }
}
```

## Performance Considerations

### Optimize Summary Frequency

```javascript
// ❌ Bad: Summarize on every message
for (const msg of messages) {
  await processMessage(msg);
  await codebolt.history.summarizeAll(); // Too frequent
}

// ✅ Good: Summarize periodically
let summaryCounter = 0;
for (const msg of messages) {
  await processMessage(msg);
  summaryCounter++;

  if (summaryCounter % 10 === 0) {
    await codebolt.history.summarizeAll();
  }
}
```

### Batch Summarization

```javascript
async function batchSummarize(messageGroups) {
  const summaries = await Promise.all(
    messageGroups.map(group =>
      codebolt.history.summarize(group, 5)
    )
  );

  return summaries;
}
```

## Common Pitfalls

### Pitfall 1: Summarizing Too Frequently

```javascript
// ❌ Problem: Performance impact
setInterval(async () => {
  await codebolt.history.summarizeAll();
}, 1000); // Every second

// ✅ Solution: Reasonable interval
setInterval(async () => {
  await codebolt.history.summarizeAll();
}, 300000); // Every 5 minutes
```

### Pitfall 2: Ignoring Depth Parameter

```javascript
// ❌ Problem: Always using default depth
const summary = await codebolt.history.summarize(messages, 10); // Too deep for quick context

// ✅ Solution: Adjust depth based on use case
const quickSummary = await codebolt.history.summarize(messages, 2);
const detailedSummary = await codebolt.history.summarize(messages, 10);
```

### Pitfall 3: Not Validating Messages

```javascript
// ❌ Problem: Invalid messages cause errors
const summary = await codebolt.history.summarize(invalidMessages, 5);

// ✅ Solution: Always validate
if (validateMessages(messages)) {
  const summary = await codebolt.history.summarize(messages, 5);
}
```

### Pitfall 4: Losing Context

```javascript
// ❌ Problem: Only keeping summary loses detail
const summary = await codebolt.history.summarizeAll();
await clearHistory(); // Lose original messages

// ✅ Solution: Keep original messages longer
const summary = await codebolt.history.summarizeAll();
await archiveOldMessages(); // Archive instead of delete
``` 