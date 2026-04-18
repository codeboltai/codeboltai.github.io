---
cbapicategory:
  - name: listCapabilities
    link: /docs/api/apiaccess/capability/listCapabilities
    description: Lists all available capabilities with optional filtering by type, tags, or author.
  - name: listCapabilitiesByType
    link: /docs/api/apiaccess/capability/listCapabilitiesByType
    description: "Lists capabilities filtered by a specific capability type (skill, power, talent, etc.)."
  - name: listSkills
    link: /docs/api/apiaccess/capability/listSkills
    description: "Lists all available skills (a shorthand for listing capabilities by type 'skill')."
  - name: listPowers
    link: /docs/api/apiaccess/capability/listPowers
    description: "Lists all available powers (a shorthand for listing capabilities by type 'power')."
  - name: listTalents
    link: /docs/api/apiaccess/capability/listTalents
    description: "Lists all available talents (a shorthand for listing capabilities by type 'talent')."
  - name: getCapabilityDetail
    link: /docs/api/apiaccess/capability/getCapabilityDetail
    description: Retrieves detailed information about a specific capability including metadata and execution details.
  - name: listExecutors
    link: /docs/api/apiaccess/capability/listExecutors
    description: Lists all available capability executors that can run capabilities.
  - name: startCapability
    link: /docs/api/apiaccess/capability/startCapability
    description: Starts execution of a capability with optional parameters and timeout settings.
  - name: startSkill
    link: /docs/api/apiaccess/capability/startSkill
    description: Starts execution of a skill with optional parameters and timeout settings.
  - name: startPower
    link: /docs/api/apiaccess/capability/startPower
    description: Starts execution of a power with optional parameters and timeout settings.
  - name: startTalent
    link: /docs/api/apiaccess/capability/startTalent
    description: Starts execution of a talent with optional parameters and timeout settings.
  - name: stopCapability
    link: /docs/api/apiaccess/capability/stopCapability
    description: Stops a currently running capability execution by execution ID.
  - name: getExecutionStatus
    link: /docs/api/apiaccess/capability/getExecutionStatus
    description: Gets the current status of a capability execution by execution ID.
  - name: getCapabilitiesByTag
    link: /docs/api/apiaccess/capability/getCapabilitiesByTag
    description: Lists capabilities that have a specific tag.
  - name: getCapabilitiesByAuthor
    link: /docs/api/apiaccess/capability/getCapabilitiesByAuthor
    description: Lists capabilities created by a specific author.
---

# Capability API

The Capability API provides comprehensive functionality for managing and executing capabilities in the Codebolt system. Capabilities are reusable units of functionality that can be Skills, Powers, or Talents.

## Overview

The capability module enables you to:
- **Discover**: List and search available capabilities by type, tag, or author
- **Inspect**: Get detailed information about specific capabilities
- **Execute**: Start and manage capability executions with parameters and timeouts
- **Monitor**: Track execution status and stop running capabilities
- **Manage**: Access capability executors and their configurations

## Capability Types

The Codebolt system supports several types of capabilities:

- **Skills**: Basic capabilities that perform specific tasks
- **Powers**: Advanced capabilities with enhanced functionality
- **Talents**: Specialized capabilities for specific domains
- **Custom Types**: Extensible system for additional capability types

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Initialize connection
await codebolt.waitForReady();

// List all available skills
const skills = await codebolt.capability.listSkills();
console.log('Available skills:', skills);

// Get details about a specific skill
const skillDetail = await codebolt.capability.getCapabilityDetail('data-processing', 'skill');
console.log('Skill details:', skillDetail);

// Execute a skill with parameters
const execution = await codebolt.capability.startSkill(
  'data-processing',
  { input: 'data.csv', format: 'json' },
  30000 // 30 second timeout
);
console.log('Execution started:', execution.executionId);

// Check execution status
const status = await codebolt.capability.getExecutionStatus(execution.executionId);
console.log('Execution status:', status);

// Stop the execution if needed
await codebolt.capability.stopCapability(execution.executionId);
```

## Response Structure

All capability API functions return responses with a consistent structure:

```typescript
{
  type: 'responseType',
  success: boolean,
  data?: any,
  error?: string,
  requestId?: string
}
```

## Common Use Cases

### 1. Discovering Capabilities

```typescript
// List all capabilities
const allCapabilities = await codebolt.capability.listCapabilities();

// Filter by type
const skills = await codebolt.capability.listSkills();

// Filter by tag
const aiCapabilities = await codebolt.capability.getCapabilitiesByTag('ai');

// Filter by author
const myCapabilities = await codebolt.capability.getCapabilitiesByAuthor('developer-name');
```

### 2. Executing Capabilities

```typescript
// Execute a skill with parameters
const result = await codebolt.capability.startSkill(
  'image-resizer',
  { width: 800, height: 600, quality: 90 }
);

// Execute with custom timeout
const longRunning = await codebolt.capability.startPower(
  'data-processor',
  { source: 'large-dataset.csv' },
  120000 // 2 minutes
);
```

### 3. Monitoring Executions

```typescript
// Start execution
const execution = await codebolt.capability.startSkill('task-processor');

// Poll for status
const checkStatus = async (id) => {
  const status = await codebolt.capability.getExecutionStatus(id);
  if (status.data?.status === 'completed') {
    console.log('Execution completed:', status.data?.result);
  } else if (status.data?.status === 'failed') {
    console.error('Execution failed:', status.data?.error);
  } else {
    setTimeout(() => checkStatus(id), 1000);
  }
};

checkStatus(execution.executionId);
```

<CBAPICategory />
