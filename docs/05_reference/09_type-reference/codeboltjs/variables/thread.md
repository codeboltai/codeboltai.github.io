---
title: thread
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: thread

```ts
const thread: {
  createAndStartThread: (options: {
     activeStepId?: string;
     agentId?: string;
     currentStep?: any;
     description?: string;
     environment?: any;
     groupId?: string;
     isGrouped?: boolean;
     isRemoteTask?: boolean;
     mentionedAgents?: any[];
     mentionedMCPs?: any[];
     messageId?: string;
     metadata?: Record<string, any>;
     processId?: string;
     remixPrompt?: string;
     remoteProvider?: {
        id?: string;
        name?: string;
     };
     selectedAgent?: any;
     selection?: {
        selectedText?: string;
     };
     status?: string;
     stepId?: string;
     steps?: any[];
     tags?: string[];
     taskId?: string;
     title?: string;
     userMessage?: string;
   }) => Promise<{
     activityId?: string;
     error?: string;
     success?: boolean;
     thread?: {
        activeStepId?: string;
        assignedTo?: string;
        attachedMemories?: {
           createdAt?: Date;
           format?: "json" | "markdown" | "todo";
           id?: number;
           memoryId?: string;
           threadId?: string;
        }[];
        cancellationReason?: string;
        completed?: boolean;
        completedAt?: Date;
        createdAt?: Date;
        dependsOnThreadId?: string;
        dependsOnThreadName?: string;
        description?: string;
        environment?: Record<string, any>;
        environmentType?: "local" | "remote";
        errorMessage?: string;
        executionType?: "scheduled" | "manual" | "immediate" | "conditional";
        flowData?: any;
        groupId?: string;
        id?: number;
        isKanbanTask?: boolean;
        isRemoteTask?: boolean;
        messages?: {
           agentId?: string;
           id?: number;
           message?: string;
           messageId?: string;
           messageType?:   | "info"
              | "error"
              | "warning"
              | "success"
              | "feedback"
              | "steering"
              | "instruction";
           priority?: "low" | "medium" | "high";
           stepId?: string;
           threadId?: string;
           timestamp?: Date;
           userId?: string;
        }[];
        name?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        progress?: {
           completedSteps?: number;
           percentage?: number;
           totalSteps?: number;
        };
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
        status?:   | "pending"
           | "completed"
           | "failed"
           | "cancelled"
           | "in_progress"
           | "created"
           | "active"
           | "review"
           | "planned"
           | "waiting_user";
        statusUpdatedAt?: Date;
        stepActivatedAt?: Date;
        steps?: {
           activatedAt?: Date;
           agentId?: string;
           completedAt?: Date;
           condition?: string;
           createdAt?: Date;
           errorMessage?: string;
           flowData?: any;
           id?: number;
           isMainTask?: boolean;
           metaData?: any;
           position?: {
              x?: ...;
              y?: ...;
           };
           result?: any;
           startedAt?: Date;
           status?:   | "pending"
              | "completed"
              | "failed"
              | "cancelled"
              | "in_progress"
              | "skipped";
           stepId?: string;
           threadId?: string;
           type?: string;
           updatedAt?: Date;
           userMessage?: string;
           value?: string;
        }[];
        tags?: string[];
        threadId?: string;
        threadType?: "scheduled" | "interactive";
        updatedAt?: Date;
     };
     threadId?: string;
     type?: "startThreadResponse";
  }>;
  createThread: (options: {
     activeStepId?: string;
     currentStep?: any;
     dependsOnTaskId?: string;
     dependsOnTaskName?: string;
     dueDate?: Date;
     environment?: string;
     environmentType?: "local" | "remote";
     executionType?: "scheduled" | "manual" | "immediate" | "conditional";
     groupId?: string;
     isGrouped?: boolean;
     isKanbanTask?: boolean;
     isRemoteTask?: boolean;
     mentionedAgents?: any[];
     mentionedMCPs?: any[];
     messageId?: string;
     name?: string;
     processId?: string;
     remixPrompt?: string;
     remoteProvider?: {
        id?: string;
        name?: string;
     };
     selectedAgent?: any;
     selection?: {
        selectedText?: string;
     };
     startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
     stepId?: string;
     steps?: {
        agentId?: string;
        condition?: string;
        FlowData?: {
           edges?: any[];
           nodes?: {
              data?: ...;
              id?: ...;
              position?: ...;
              type?: ...;
           }[];
        };
        isMainTask?: boolean;
        messageData?: {
           controlFiles?: string[];
           environment?: Record<string, any>;
           isRemoteTask?: boolean;
           links?: string[];
           llmProvider?: {
              model?: ... | ...;
              providerId?: ... | ...;
           };
           mentionedAgents?: string[];
           mentionedDocs?: string[];
           mentionedFiles?: string[];
           mentionedFolders?: string[];
           mentionedFullPaths?: string[];
           mentionedMCPs?: string[];
           mentionedMultiFile?: string[];
           uploadedImages?: string[];
        };
        position?: {
           x?: number;
           y?: number;
        };
        status?: string;
        type?: string;
        userMessage?: string;
     }[];
     taskType?: "scheduled" | "interactive";
     threadId?: string;
     userMessage?: string;
   }) => Promise<{
     error?: string;
     success?: boolean;
     thread?: {
        activeStepId?: string;
        assignedTo?: string;
        attachedMemories?: {
           createdAt?: Date;
           format?: "json" | "markdown" | "todo";
           id?: number;
           memoryId?: string;
           threadId?: string;
        }[];
        cancellationReason?: string;
        completed?: boolean;
        completedAt?: Date;
        createdAt?: Date;
        dependsOnThreadId?: string;
        dependsOnThreadName?: string;
        description?: string;
        environment?: Record<string, any>;
        environmentType?: "local" | "remote";
        errorMessage?: string;
        executionType?: "scheduled" | "manual" | "immediate" | "conditional";
        flowData?: any;
        groupId?: string;
        id?: number;
        isKanbanTask?: boolean;
        isRemoteTask?: boolean;
        messages?: {
           agentId?: string;
           id?: number;
           message?: string;
           messageId?: string;
           messageType?:   | "info"
              | "error"
              | "warning"
              | "success"
              | "feedback"
              | "steering"
              | "instruction";
           priority?: "low" | "medium" | "high";
           stepId?: string;
           threadId?: string;
           timestamp?: Date;
           userId?: string;
        }[];
        name?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        progress?: {
           completedSteps?: number;
           percentage?: number;
           totalSteps?: number;
        };
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
        status?:   | "pending"
           | "completed"
           | "failed"
           | "cancelled"
           | "in_progress"
           | "created"
           | "active"
           | "review"
           | "planned"
           | "waiting_user";
        statusUpdatedAt?: Date;
        stepActivatedAt?: Date;
        steps?: {
           activatedAt?: Date;
           agentId?: string;
           completedAt?: Date;
           condition?: string;
           createdAt?: Date;
           errorMessage?: string;
           flowData?: any;
           id?: number;
           isMainTask?: boolean;
           metaData?: any;
           position?: {
              x?: ...;
              y?: ...;
           };
           result?: any;
           startedAt?: Date;
           status?:   | "pending"
              | "completed"
              | "failed"
              | "cancelled"
              | "in_progress"
              | "skipped";
           stepId?: string;
           threadId?: string;
           type?: string;
           updatedAt?: Date;
           userMessage?: string;
           value?: string;
        }[];
        tags?: string[];
        threadId?: string;
        threadType?: "scheduled" | "interactive";
        updatedAt?: Date;
     };
     type?: "createThreadResponse";
  }>;
  createThreadInBackground: (options: {
     activeStepId?: string;
     agentId?: string;
     currentStep?: any;
     description?: string;
     environment?: any;
     groupId?: string;
     isGrouped?: boolean;
     isRemoteTask?: boolean;
     mentionedAgents?: any[];
     mentionedMCPs?: any[];
     messageId?: string;
     metadata?: Record<string, any>;
     processId?: string;
     remixPrompt?: string;
     remoteProvider?: {
        id?: string;
        name?: string;
     };
     selectedAgent?: any;
     selection?: {
        selectedText?: string;
     };
     status?: string;
     stepId?: string;
     steps?: any[];
     tags?: string[];
     taskId?: string;
     title?: string;
     userMessage?: string;
   }) => Promise<
     | {
     agentId?: string;
     error?: string;
     instanceId?: string;
     success?: boolean;
     threadId?: string;
     type?: "ThreadAgentStarted";
   }
     | {
     agentId?: string;
     error?: string;
     success?: boolean;
     threadId?: string;
     type?: "ThreadAgentStartFailed";
  }>;
  deleteThread: (threadId: string) => Promise<{
     deleted?: boolean;
     error?: string;
     success?: boolean;
     threadId?: string;
     type?: "deleteThreadResponse";
  }>;
  getThreadDetail: (options: {
     includeMessages?: boolean;
     includeSteps?: boolean;
     taskId?: string;
   }) => Promise<{
     error?: string;
     success?: boolean;
     thread?: {
        activeStepId?: string;
        assignedTo?: string;
        attachedMemories?: {
           createdAt?: Date;
           format?: "json" | "markdown" | "todo";
           id?: number;
           memoryId?: string;
           threadId?: string;
        }[];
        cancellationReason?: string;
        completed?: boolean;
        completedAt?: Date;
        createdAt?: Date;
        dependsOnThreadId?: string;
        dependsOnThreadName?: string;
        description?: string;
        environment?: Record<string, any>;
        environmentType?: "local" | "remote";
        errorMessage?: string;
        executionType?: "scheduled" | "manual" | "immediate" | "conditional";
        flowData?: any;
        groupId?: string;
        id?: number;
        isKanbanTask?: boolean;
        isRemoteTask?: boolean;
        messages?: {
           agentId?: string;
           id?: number;
           message?: string;
           messageId?: string;
           messageType?:   | "info"
              | "error"
              | "warning"
              | "success"
              | "feedback"
              | "steering"
              | "instruction";
           priority?: "low" | "medium" | "high";
           stepId?: string;
           threadId?: string;
           timestamp?: Date;
           userId?: string;
        }[];
        name?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        progress?: {
           completedSteps?: number;
           percentage?: number;
           totalSteps?: number;
        };
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
        status?:   | "pending"
           | "completed"
           | "failed"
           | "cancelled"
           | "in_progress"
           | "created"
           | "active"
           | "review"
           | "planned"
           | "waiting_user";
        statusUpdatedAt?: Date;
        stepActivatedAt?: Date;
        steps?: {
           activatedAt?: Date;
           agentId?: string;
           completedAt?: Date;
           condition?: string;
           createdAt?: Date;
           errorMessage?: string;
           flowData?: any;
           id?: number;
           isMainTask?: boolean;
           metaData?: any;
           position?: {
              x?: ...;
              y?: ...;
           };
           result?: any;
           startedAt?: Date;
           status?:   | "pending"
              | "completed"
              | "failed"
              | "cancelled"
              | "in_progress"
              | "skipped";
           stepId?: string;
           threadId?: string;
           type?: string;
           updatedAt?: Date;
           userMessage?: string;
           value?: string;
        }[];
        tags?: string[];
        threadId?: string;
        threadType?: "scheduled" | "interactive";
        updatedAt?: Date;
     };
     threadId?: string;
     type?: "getThreadResponse";
  }>;
  getThreadFileChanges: (threadId: string) => Promise<ThreadFileChangesResponse>;
  getThreadFileChangesSummary: (threadId: string) => Promise<ThreadFileChangesSummaryResponse>;
  getThreadList: (options: {
     limit?: number;
     offset?: number;
     startedByUser?: string;
     status?: "pending" | "completed" | "processing" | "all";
     threadId?: string;
   }) => Promise<{
     agentId?: string;
     error?: string;
     limit?: number;
     offset?: number;
     status?: string;
     success?: boolean;
     taskId?: string;
     threads?: {
        activeStepId?: string;
        assignedTo?: string;
        attachedMemories?: {
           createdAt?: ... | ...;
           format?: ... | ... | ... | ...;
           id?: ... | ...;
           memoryId?: ... | ...;
           threadId?: ... | ...;
        }[];
        cancellationReason?: string;
        completed?: boolean;
        completedAt?: Date;
        createdAt?: Date;
        dependsOnThreadId?: string;
        dependsOnThreadName?: string;
        description?: string;
        environment?: Record<string, any>;
        environmentType?: "local" | "remote";
        errorMessage?: string;
        executionType?: "scheduled" | "manual" | "immediate" | "conditional";
        flowData?: any;
        groupId?: string;
        id?: number;
        isKanbanTask?: boolean;
        isRemoteTask?: boolean;
        messages?: {
           agentId?: ... | ...;
           id?: ... | ...;
           message?: ... | ...;
           messageId?: ... | ...;
           messageType?: ... | ... | ... | ... | ... | ... | ... | ...;
           priority?: ... | ... | ... | ...;
           stepId?: ... | ...;
           threadId?: ... | ...;
           timestamp?: ... | ...;
           userId?: ... | ...;
        }[];
        name?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        progress?: {
           completedSteps?: number;
           percentage?: number;
           totalSteps?: number;
        };
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
        status?:   | "pending"
           | "completed"
           | "failed"
           | "cancelled"
           | "in_progress"
           | "created"
           | "active"
           | "review"
           | "planned"
           | "waiting_user";
        statusUpdatedAt?: Date;
        stepActivatedAt?: Date;
        steps?: {
           activatedAt?: ... | ...;
           agentId?: ... | ...;
           completedAt?: ... | ...;
           condition?: ... | ...;
           createdAt?: ... | ...;
           errorMessage?: ... | ...;
           flowData?: any;
           id?: ... | ...;
           isMainTask?: ... | ... | ...;
           metaData?: any;
           position?: ... | ...;
           result?: any;
           startedAt?: ... | ...;
           status?: ... | ... | ... | ... | ... | ... | ...;
           stepId?: ... | ...;
           threadId?: ... | ...;
           type?: ... | ...;
           updatedAt?: ... | ...;
           userMessage?: ... | ...;
           value?: ... | ...;
        }[];
        tags?: string[];
        threadId?: string;
        threadType?: "scheduled" | "interactive";
        updatedAt?: Date;
     }[];
     totalCount?: number;
     type?: "listThreadsResponse";
  }>;
  getThreadMessages: (options: {
     limit?: number;
     messageType?:   | "info"
        | "error"
        | "warning"
        | "success"
        | "feedback"
        | "steering"
        | "instruction";
     offset?: number;
     stepId?: string;
     taskId?: string;
   }) => Promise<{
     error?: string;
     limit?: number;
     messages?: {
        agentId?: string;
        id?: number;
        message?: string;
        messageId?: string;
        messageType?:   | "info"
           | "error"
           | "warning"
           | "success"
           | "feedback"
           | "steering"
           | "instruction";
        priority?: "low" | "medium" | "high";
        stepId?: string;
        threadId?: string;
        timestamp?: Date;
        userId?: string;
     }[];
     offset?: number;
     success?: boolean;
     threadId?: string;
     totalCount?: number;
     type?: "getThreadMessagesResponse";
  }>;
  startThread: (threadId: string) => Promise<{
     activityId?: string;
     error?: string;
     success?: boolean;
     thread?: {
        activeStepId?: string;
        assignedTo?: string;
        attachedMemories?: {
           createdAt?: Date;
           format?: "json" | "markdown" | "todo";
           id?: number;
           memoryId?: string;
           threadId?: string;
        }[];
        cancellationReason?: string;
        completed?: boolean;
        completedAt?: Date;
        createdAt?: Date;
        dependsOnThreadId?: string;
        dependsOnThreadName?: string;
        description?: string;
        environment?: Record<string, any>;
        environmentType?: "local" | "remote";
        errorMessage?: string;
        executionType?: "scheduled" | "manual" | "immediate" | "conditional";
        flowData?: any;
        groupId?: string;
        id?: number;
        isKanbanTask?: boolean;
        isRemoteTask?: boolean;
        messages?: {
           agentId?: string;
           id?: number;
           message?: string;
           messageId?: string;
           messageType?:   | "info"
              | "error"
              | "warning"
              | "success"
              | "feedback"
              | "steering"
              | "instruction";
           priority?: "low" | "medium" | "high";
           stepId?: string;
           threadId?: string;
           timestamp?: Date;
           userId?: string;
        }[];
        name?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        progress?: {
           completedSteps?: number;
           percentage?: number;
           totalSteps?: number;
        };
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
        status?:   | "pending"
           | "completed"
           | "failed"
           | "cancelled"
           | "in_progress"
           | "created"
           | "active"
           | "review"
           | "planned"
           | "waiting_user";
        statusUpdatedAt?: Date;
        stepActivatedAt?: Date;
        steps?: {
           activatedAt?: Date;
           agentId?: string;
           completedAt?: Date;
           condition?: string;
           createdAt?: Date;
           errorMessage?: string;
           flowData?: any;
           id?: number;
           isMainTask?: boolean;
           metaData?: any;
           position?: {
              x?: ...;
              y?: ...;
           };
           result?: any;
           startedAt?: Date;
           status?:   | "pending"
              | "completed"
              | "failed"
              | "cancelled"
              | "in_progress"
              | "skipped";
           stepId?: string;
           threadId?: string;
           type?: string;
           updatedAt?: Date;
           userMessage?: string;
           value?: string;
        }[];
        tags?: string[];
        threadId?: string;
        threadType?: "scheduled" | "interactive";
        updatedAt?: Date;
     };
     threadId?: string;
     type?: "startThreadResponse";
  }>;
  updateThread: (threadId: string, updates: {
     activeStepId?: string;
     completed?: boolean;
     currentStep?: any;
     dependsOnTaskId?: string;
     dependsOnTaskName?: string;
     dueDate?: Date;
     environment?: string;
     environmentType?: "local" | "remote";
     executionType?: "scheduled" | "manual" | "immediate" | "conditional";
     groupId?: string;
     isGrouped?: boolean;
     isKanbanTask?: boolean;
     isRemoteTask?: boolean;
     mentionedAgents?: any[];
     mentionedMCPs?: any[];
     messageId?: string;
     name?: string;
     processId?: string;
     remixPrompt?: string;
     remoteProvider?: {
        id?: string;
        name?: string;
     };
     selectedAgent?: any;
     selection?: {
        selectedText?: string;
     };
     startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
     stepId?: string;
     steps?: {
        agentId?: string;
        condition?: string;
        FlowData?: {
           edges?: any[];
           nodes?: {
              data?: ...;
              id?: ...;
              position?: ...;
              type?: ...;
           }[];
        };
        id?: string;
        isMainTask?: boolean;
        messageData?: {
           controlFiles?: string[];
           environment?: Record<string, any>;
           isRemoteTask?: boolean;
           links?: string[];
           llmProvider?: {
              model?: ... | ...;
              providerId?: ... | ...;
           };
           mentionedAgents?: string[];
           mentionedDocs?: string[];
           mentionedFiles?: string[];
           mentionedFolders?: string[];
           mentionedFullPaths?: string[];
           mentionedMCPs?: string[];
           mentionedMultiFile?: string[];
           uploadedImages?: string[];
        };
        position?: {
           x?: number;
           y?: number;
        };
        status?: string;
        type?: string;
        userMessage?: string;
     }[];
     taskType?: "scheduled" | "interactive";
     userMessage?: string;
   }) => Promise<{
     error?: string;
     success?: boolean;
     thread?: {
        activeStepId?: string;
        assignedTo?: string;
        attachedMemories?: {
           createdAt?: Date;
           format?: "json" | "markdown" | "todo";
           id?: number;
           memoryId?: string;
           threadId?: string;
        }[];
        cancellationReason?: string;
        completed?: boolean;
        completedAt?: Date;
        createdAt?: Date;
        dependsOnThreadId?: string;
        dependsOnThreadName?: string;
        description?: string;
        environment?: Record<string, any>;
        environmentType?: "local" | "remote";
        errorMessage?: string;
        executionType?: "scheduled" | "manual" | "immediate" | "conditional";
        flowData?: any;
        groupId?: string;
        id?: number;
        isKanbanTask?: boolean;
        isRemoteTask?: boolean;
        messages?: {
           agentId?: string;
           id?: number;
           message?: string;
           messageId?: string;
           messageType?:   | "info"
              | "error"
              | "warning"
              | "success"
              | "feedback"
              | "steering"
              | "instruction";
           priority?: "low" | "medium" | "high";
           stepId?: string;
           threadId?: string;
           timestamp?: Date;
           userId?: string;
        }[];
        name?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        progress?: {
           completedSteps?: number;
           percentage?: number;
           totalSteps?: number;
        };
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
        status?:   | "pending"
           | "completed"
           | "failed"
           | "cancelled"
           | "in_progress"
           | "created"
           | "active"
           | "review"
           | "planned"
           | "waiting_user";
        statusUpdatedAt?: Date;
        stepActivatedAt?: Date;
        steps?: {
           activatedAt?: Date;
           agentId?: string;
           completedAt?: Date;
           condition?: string;
           createdAt?: Date;
           errorMessage?: string;
           flowData?: any;
           id?: number;
           isMainTask?: boolean;
           metaData?: any;
           position?: {
              x?: ...;
              y?: ...;
           };
           result?: any;
           startedAt?: Date;
           status?:   | "pending"
              | "completed"
              | "failed"
              | "cancelled"
              | "in_progress"
              | "skipped";
           stepId?: string;
           threadId?: string;
           type?: string;
           updatedAt?: Date;
           userMessage?: string;
           value?: string;
        }[];
        tags?: string[];
        threadId?: string;
        threadType?: "scheduled" | "interactive";
        updatedAt?: Date;
     };
     threadId?: string;
     type?: "updateThreadResponse";
  }>;
  updateThreadStatus: (threadId: string, status: string) => Promise<{
     error?: string;
     status?: string;
     success?: boolean;
     thread?: {
        activeStepId?: string;
        assignedTo?: string;
        attachedMemories?: {
           createdAt?: Date;
           format?: "json" | "markdown" | "todo";
           id?: number;
           memoryId?: string;
           threadId?: string;
        }[];
        cancellationReason?: string;
        completed?: boolean;
        completedAt?: Date;
        createdAt?: Date;
        dependsOnThreadId?: string;
        dependsOnThreadName?: string;
        description?: string;
        environment?: Record<string, any>;
        environmentType?: "local" | "remote";
        errorMessage?: string;
        executionType?: "scheduled" | "manual" | "immediate" | "conditional";
        flowData?: any;
        groupId?: string;
        id?: number;
        isKanbanTask?: boolean;
        isRemoteTask?: boolean;
        messages?: {
           agentId?: string;
           id?: number;
           message?: string;
           messageId?: string;
           messageType?:   | "info"
              | "error"
              | "warning"
              | "success"
              | "feedback"
              | "steering"
              | "instruction";
           priority?: "low" | "medium" | "high";
           stepId?: string;
           threadId?: string;
           timestamp?: Date;
           userId?: string;
        }[];
        name?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        progress?: {
           completedSteps?: number;
           percentage?: number;
           totalSteps?: number;
        };
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
        status?:   | "pending"
           | "completed"
           | "failed"
           | "cancelled"
           | "in_progress"
           | "created"
           | "active"
           | "review"
           | "planned"
           | "waiting_user";
        statusUpdatedAt?: Date;
        stepActivatedAt?: Date;
        steps?: {
           activatedAt?: Date;
           agentId?: string;
           completedAt?: Date;
           condition?: string;
           createdAt?: Date;
           errorMessage?: string;
           flowData?: any;
           id?: number;
           isMainTask?: boolean;
           metaData?: any;
           position?: {
              x?: ...;
              y?: ...;
           };
           result?: any;
           startedAt?: Date;
           status?:   | "pending"
              | "completed"
              | "failed"
              | "cancelled"
              | "in_progress"
              | "skipped";
           stepId?: string;
           threadId?: string;
           type?: string;
           updatedAt?: Date;
           userMessage?: string;
           value?: string;
        }[];
        tags?: string[];
        threadId?: string;
        threadType?: "scheduled" | "interactive";
        updatedAt?: Date;
     };
     threadId?: string;
     type?: "updateThreadStatusResponse";
  }>;
};
```

Defined in: packages/codeboltjs/src/modules/thread.ts:46

Thread service for managing conversation threads.
This module provides a comprehensive API for thread management using thread-specific types.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="createandstartthread"></a> `createAndStartThread()` | (`options`: \{ `activeStepId?`: `string`; `agentId?`: `string`; `currentStep?`: `any`; `description?`: `string`; `environment?`: `any`; `groupId?`: `string`; `isGrouped?`: `boolean`; `isRemoteTask?`: `boolean`; `mentionedAgents?`: `any`[]; `mentionedMCPs?`: `any`[]; `messageId?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; `processId?`: `string`; `remixPrompt?`: `string`; `remoteProvider?`: \{ `id?`: `string`; `name?`: `string`; \}; `selectedAgent?`: `any`; `selection?`: \{ `selectedText?`: `string`; \}; `status?`: `string`; `stepId?`: `string`; `steps?`: `any`[]; `tags?`: `string`[]; `taskId?`: `string`; `title?`: `string`; `userMessage?`: `string`; \}) => `Promise`\<\{ `activityId?`: `string`; `error?`: `string`; `success?`: `boolean`; `thread?`: \{ `activeStepId?`: `string`; `assignedTo?`: `string`; `attachedMemories?`: \{ `createdAt?`: `Date`; `format?`: `"json"` \| `"markdown"` \| `"todo"`; `id?`: `number`; `memoryId?`: `string`; `threadId?`: `string`; \}[]; `cancellationReason?`: `string`; `completed?`: `boolean`; `completedAt?`: `Date`; `createdAt?`: `Date`; `dependsOnThreadId?`: `string`; `dependsOnThreadName?`: `string`; `description?`: `string`; `environment?`: `Record`\<`string`, `any`\>; `environmentType?`: `"local"` \| `"remote"`; `errorMessage?`: `string`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `messages?`: \{ `agentId?`: `string`; `id?`: `number`; `message?`: `string`; `messageId?`: `string`; `messageType?`: \| `"info"` \| `"error"` \| `"warning"` \| `"success"` \| `"feedback"` \| `"steering"` \| `"instruction"`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `stepId?`: `string`; `threadId?`: `string`; `timestamp?`: `Date`; `userId?`: `string`; \}[]; `name?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `progress?`: \{ `completedSteps?`: `number`; `percentage?`: `number`; `totalSteps?`: `number`; \}; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `Date`; `stepActivatedAt?`: `Date`; `steps?`: \{ `activatedAt?`: `Date`; `agentId?`: `string`; `completedAt?`: `Date`; `condition?`: `string`; `createdAt?`: `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `id?`: `number`; `isMainTask?`: `boolean`; `metaData?`: `any`; `position?`: \{ `x?`: ...; `y?`: ...; \}; `result?`: `any`; `startedAt?`: `Date`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"skipped"`; `stepId?`: `string`; `threadId?`: `string`; `type?`: `string`; `updatedAt?`: `Date`; `userMessage?`: `string`; `value?`: `string`; \}[]; `tags?`: `string`[]; `threadId?`: `string`; `threadType?`: `"scheduled"` \| `"interactive"`; `updatedAt?`: `Date`; \}; `threadId?`: `string`; `type?`: `"startThreadResponse"`; \}\> | Creates and immediately starts a new thread. | [packages/codeboltjs/src/modules/thread.ts:73](packages/codeboltjs/src/modules/thread.ts#L73) |
| <a id="createthread"></a> `createThread()` | (`options`: \{ `activeStepId?`: `string`; `currentStep?`: `any`; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `dueDate?`: `Date`; `environment?`: `string`; `environmentType?`: `"local"` \| `"remote"`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `groupId?`: `string`; `isGrouped?`: `boolean`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `mentionedAgents?`: `any`[]; `mentionedMCPs?`: `any`[]; `messageId?`: `string`; `name?`: `string`; `processId?`: `string`; `remixPrompt?`: `string`; `remoteProvider?`: \{ `id?`: `string`; `name?`: `string`; \}; `selectedAgent?`: `any`; `selection?`: \{ `selectedText?`: `string`; \}; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `stepId?`: `string`; `steps?`: \{ `agentId?`: `string`; `condition?`: `string`; `FlowData?`: \{ `edges?`: `any`[]; `nodes?`: \{ `data?`: ...; `id?`: ...; `position?`: ...; `type?`: ...; \}[]; \}; `isMainTask?`: `boolean`; `messageData?`: \{ `controlFiles?`: `string`[]; `environment?`: `Record`\<`string`, `any`\>; `isRemoteTask?`: `boolean`; `links?`: `string`[]; `llmProvider?`: \{ `model?`: ... \| ...; `providerId?`: ... \| ...; \}; `mentionedAgents?`: `string`[]; `mentionedDocs?`: `string`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedFullPaths?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `uploadedImages?`: `string`[]; \}; `position?`: \{ `x?`: `number`; `y?`: `number`; \}; `status?`: `string`; `type?`: `string`; `userMessage?`: `string`; \}[]; `taskType?`: `"scheduled"` \| `"interactive"`; `threadId?`: `string`; `userMessage?`: `string`; \}) => `Promise`\<\{ `error?`: `string`; `success?`: `boolean`; `thread?`: \{ `activeStepId?`: `string`; `assignedTo?`: `string`; `attachedMemories?`: \{ `createdAt?`: `Date`; `format?`: `"json"` \| `"markdown"` \| `"todo"`; `id?`: `number`; `memoryId?`: `string`; `threadId?`: `string`; \}[]; `cancellationReason?`: `string`; `completed?`: `boolean`; `completedAt?`: `Date`; `createdAt?`: `Date`; `dependsOnThreadId?`: `string`; `dependsOnThreadName?`: `string`; `description?`: `string`; `environment?`: `Record`\<`string`, `any`\>; `environmentType?`: `"local"` \| `"remote"`; `errorMessage?`: `string`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `messages?`: \{ `agentId?`: `string`; `id?`: `number`; `message?`: `string`; `messageId?`: `string`; `messageType?`: \| `"info"` \| `"error"` \| `"warning"` \| `"success"` \| `"feedback"` \| `"steering"` \| `"instruction"`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `stepId?`: `string`; `threadId?`: `string`; `timestamp?`: `Date`; `userId?`: `string`; \}[]; `name?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `progress?`: \{ `completedSteps?`: `number`; `percentage?`: `number`; `totalSteps?`: `number`; \}; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `Date`; `stepActivatedAt?`: `Date`; `steps?`: \{ `activatedAt?`: `Date`; `agentId?`: `string`; `completedAt?`: `Date`; `condition?`: `string`; `createdAt?`: `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `id?`: `number`; `isMainTask?`: `boolean`; `metaData?`: `any`; `position?`: \{ `x?`: ...; `y?`: ...; \}; `result?`: `any`; `startedAt?`: `Date`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"skipped"`; `stepId?`: `string`; `threadId?`: `string`; `type?`: `string`; `updatedAt?`: `Date`; `userMessage?`: `string`; `value?`: `string`; \}[]; `tags?`: `string`[]; `threadId?`: `string`; `threadType?`: `"scheduled"` \| `"interactive"`; `updatedAt?`: `Date`; \}; `type?`: `"createThreadResponse"`; \}\> | Creates a new thread with comprehensive options. | [packages/codeboltjs/src/modules/thread.ts:53](packages/codeboltjs/src/modules/thread.ts#L53) |
| <a id="createthreadinbackground"></a> `createThreadInBackground()` | (`options`: \{ `activeStepId?`: `string`; `agentId?`: `string`; `currentStep?`: `any`; `description?`: `string`; `environment?`: `any`; `groupId?`: `string`; `isGrouped?`: `boolean`; `isRemoteTask?`: `boolean`; `mentionedAgents?`: `any`[]; `mentionedMCPs?`: `any`[]; `messageId?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; `processId?`: `string`; `remixPrompt?`: `string`; `remoteProvider?`: \{ `id?`: `string`; `name?`: `string`; \}; `selectedAgent?`: `any`; `selection?`: \{ `selectedText?`: `string`; \}; `status?`: `string`; `stepId?`: `string`; `steps?`: `any`[]; `tags?`: `string`[]; `taskId?`: `string`; `title?`: `string`; `userMessage?`: `string`; \}) => `Promise`\< \| \{ `agentId?`: `string`; `error?`: `string`; `instanceId?`: `string`; `success?`: `boolean`; `threadId?`: `string`; `type?`: `"ThreadAgentStarted"`; \} \| \{ `agentId?`: `string`; `error?`: `string`; `success?`: `boolean`; `threadId?`: `string`; `type?`: `"ThreadAgentStartFailed"`; \}\> | Creates a thread in the background and resolves when the agent starts or fails. | [packages/codeboltjs/src/modules/thread.ts:99](packages/codeboltjs/src/modules/thread.ts#L99) |
| <a id="deletethread"></a> `deleteThread()` | (`threadId`: `string`) => `Promise`\<\{ `deleted?`: `boolean`; `error?`: `string`; `success?`: `boolean`; `threadId?`: `string`; `type?`: `"deleteThreadResponse"`; \}\> | Deletes a thread. | [packages/codeboltjs/src/modules/thread.ts:218](packages/codeboltjs/src/modules/thread.ts#L218) |
| <a id="getthreaddetail"></a> `getThreadDetail()` | (`options`: \{ `includeMessages?`: `boolean`; `includeSteps?`: `boolean`; `taskId?`: `string`; \}) => `Promise`\<\{ `error?`: `string`; `success?`: `boolean`; `thread?`: \{ `activeStepId?`: `string`; `assignedTo?`: `string`; `attachedMemories?`: \{ `createdAt?`: `Date`; `format?`: `"json"` \| `"markdown"` \| `"todo"`; `id?`: `number`; `memoryId?`: `string`; `threadId?`: `string`; \}[]; `cancellationReason?`: `string`; `completed?`: `boolean`; `completedAt?`: `Date`; `createdAt?`: `Date`; `dependsOnThreadId?`: `string`; `dependsOnThreadName?`: `string`; `description?`: `string`; `environment?`: `Record`\<`string`, `any`\>; `environmentType?`: `"local"` \| `"remote"`; `errorMessage?`: `string`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `messages?`: \{ `agentId?`: `string`; `id?`: `number`; `message?`: `string`; `messageId?`: `string`; `messageType?`: \| `"info"` \| `"error"` \| `"warning"` \| `"success"` \| `"feedback"` \| `"steering"` \| `"instruction"`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `stepId?`: `string`; `threadId?`: `string`; `timestamp?`: `Date`; `userId?`: `string`; \}[]; `name?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `progress?`: \{ `completedSteps?`: `number`; `percentage?`: `number`; `totalSteps?`: `number`; \}; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `Date`; `stepActivatedAt?`: `Date`; `steps?`: \{ `activatedAt?`: `Date`; `agentId?`: `string`; `completedAt?`: `Date`; `condition?`: `string`; `createdAt?`: `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `id?`: `number`; `isMainTask?`: `boolean`; `metaData?`: `any`; `position?`: \{ `x?`: ...; `y?`: ...; \}; `result?`: `any`; `startedAt?`: `Date`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"skipped"`; `stepId?`: `string`; `threadId?`: `string`; `type?`: `string`; `updatedAt?`: `Date`; `userMessage?`: `string`; `value?`: `string`; \}[]; `tags?`: `string`[]; `threadId?`: `string`; `threadType?`: `"scheduled"` \| `"interactive"`; `updatedAt?`: `Date`; \}; `threadId?`: `string`; `type?`: `"getThreadResponse"`; \}\> | Retrieves detailed information about a specific thread. | [packages/codeboltjs/src/modules/thread.ts:149](packages/codeboltjs/src/modules/thread.ts#L149) |
| <a id="getthreadfilechanges"></a> `getThreadFileChanges()` | (`threadId`: `string`) => `Promise`\<`ThreadFileChangesResponse`\> | Retrieves file changes associated with a specific thread. | [packages/codeboltjs/src/modules/thread.ts:287](packages/codeboltjs/src/modules/thread.ts#L287) |
| <a id="getthreadfilechangessummary"></a> `getThreadFileChangesSummary()` | (`threadId`: `string`) => `Promise`\<`ThreadFileChangesSummaryResponse`\> | Retrieves file changes summary for ChangesSummaryPanel. Returns data in the format: \{ title, changes, files \} | [packages/codeboltjs/src/modules/thread.ts:311](packages/codeboltjs/src/modules/thread.ts#L311) |
| <a id="getthreadlist"></a> `getThreadList()` | (`options`: \{ `limit?`: `number`; `offset?`: `number`; `startedByUser?`: `string`; `status?`: `"pending"` \| `"completed"` \| `"processing"` \| `"all"`; `threadId?`: `string`; \}) => `Promise`\<\{ `agentId?`: `string`; `error?`: `string`; `limit?`: `number`; `offset?`: `number`; `status?`: `string`; `success?`: `boolean`; `taskId?`: `string`; `threads?`: \{ `activeStepId?`: `string`; `assignedTo?`: `string`; `attachedMemories?`: \{ `createdAt?`: ... \| ...; `format?`: ... \| ... \| ... \| ...; `id?`: ... \| ...; `memoryId?`: ... \| ...; `threadId?`: ... \| ...; \}[]; `cancellationReason?`: `string`; `completed?`: `boolean`; `completedAt?`: `Date`; `createdAt?`: `Date`; `dependsOnThreadId?`: `string`; `dependsOnThreadName?`: `string`; `description?`: `string`; `environment?`: `Record`\<`string`, `any`\>; `environmentType?`: `"local"` \| `"remote"`; `errorMessage?`: `string`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `messages?`: \{ `agentId?`: ... \| ...; `id?`: ... \| ...; `message?`: ... \| ...; `messageId?`: ... \| ...; `messageType?`: ... \| ... \| ... \| ... \| ... \| ... \| ... \| ...; `priority?`: ... \| ... \| ... \| ...; `stepId?`: ... \| ...; `threadId?`: ... \| ...; `timestamp?`: ... \| ...; `userId?`: ... \| ...; \}[]; `name?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `progress?`: \{ `completedSteps?`: `number`; `percentage?`: `number`; `totalSteps?`: `number`; \}; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `Date`; `stepActivatedAt?`: `Date`; `steps?`: \{ `activatedAt?`: ... \| ...; `agentId?`: ... \| ...; `completedAt?`: ... \| ...; `condition?`: ... \| ...; `createdAt?`: ... \| ...; `errorMessage?`: ... \| ...; `flowData?`: `any`; `id?`: ... \| ...; `isMainTask?`: ... \| ... \| ...; `metaData?`: `any`; `position?`: ... \| ...; `result?`: `any`; `startedAt?`: ... \| ...; `status?`: ... \| ... \| ... \| ... \| ... \| ... \| ...; `stepId?`: ... \| ...; `threadId?`: ... \| ...; `type?`: ... \| ...; `updatedAt?`: ... \| ...; `userMessage?`: ... \| ...; `value?`: ... \| ...; \}[]; `tags?`: `string`[]; `threadId?`: `string`; `threadType?`: `"scheduled"` \| `"interactive"`; `updatedAt?`: `Date`; \}[]; `totalCount?`: `number`; `type?`: `"listThreadsResponse"`; \}\> | Retrieves a list of threads with optional filtering. | [packages/codeboltjs/src/modules/thread.ts:128](packages/codeboltjs/src/modules/thread.ts#L128) |
| <a id="getthreadmessages"></a> `getThreadMessages()` | (`options`: \{ `limit?`: `number`; `messageType?`: \| `"info"` \| `"error"` \| `"warning"` \| `"success"` \| `"feedback"` \| `"steering"` \| `"instruction"`; `offset?`: `number`; `stepId?`: `string`; `taskId?`: `string`; \}) => `Promise`\<\{ `error?`: `string`; `limit?`: `number`; `messages?`: \{ `agentId?`: `string`; `id?`: `number`; `message?`: `string`; `messageId?`: `string`; `messageType?`: \| `"info"` \| `"error"` \| `"warning"` \| `"success"` \| `"feedback"` \| `"steering"` \| `"instruction"`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `stepId?`: `string`; `threadId?`: `string`; `timestamp?`: `Date`; `userId?`: `string`; \}[]; `offset?`: `number`; `success?`: `boolean`; `threadId?`: `string`; `totalCount?`: `number`; `type?`: `"getThreadMessagesResponse"`; \}\> | Retrieves messages for a specific thread. | [packages/codeboltjs/src/modules/thread.ts:266](packages/codeboltjs/src/modules/thread.ts#L266) |
| <a id="startthread"></a> `startThread()` | (`threadId`: `string`) => `Promise`\<\{ `activityId?`: `string`; `error?`: `string`; `success?`: `boolean`; `thread?`: \{ `activeStepId?`: `string`; `assignedTo?`: `string`; `attachedMemories?`: \{ `createdAt?`: `Date`; `format?`: `"json"` \| `"markdown"` \| `"todo"`; `id?`: `number`; `memoryId?`: `string`; `threadId?`: `string`; \}[]; `cancellationReason?`: `string`; `completed?`: `boolean`; `completedAt?`: `Date`; `createdAt?`: `Date`; `dependsOnThreadId?`: `string`; `dependsOnThreadName?`: `string`; `description?`: `string`; `environment?`: `Record`\<`string`, `any`\>; `environmentType?`: `"local"` \| `"remote"`; `errorMessage?`: `string`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `messages?`: \{ `agentId?`: `string`; `id?`: `number`; `message?`: `string`; `messageId?`: `string`; `messageType?`: \| `"info"` \| `"error"` \| `"warning"` \| `"success"` \| `"feedback"` \| `"steering"` \| `"instruction"`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `stepId?`: `string`; `threadId?`: `string`; `timestamp?`: `Date`; `userId?`: `string`; \}[]; `name?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `progress?`: \{ `completedSteps?`: `number`; `percentage?`: `number`; `totalSteps?`: `number`; \}; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `Date`; `stepActivatedAt?`: `Date`; `steps?`: \{ `activatedAt?`: `Date`; `agentId?`: `string`; `completedAt?`: `Date`; `condition?`: `string`; `createdAt?`: `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `id?`: `number`; `isMainTask?`: `boolean`; `metaData?`: `any`; `position?`: \{ `x?`: ...; `y?`: ...; \}; `result?`: `any`; `startedAt?`: `Date`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"skipped"`; `stepId?`: `string`; `threadId?`: `string`; `type?`: `string`; `updatedAt?`: `Date`; `userMessage?`: `string`; `value?`: `string`; \}[]; `tags?`: `string`[]; `threadId?`: `string`; `threadType?`: `"scheduled"` \| `"interactive"`; `updatedAt?`: `Date`; \}; `threadId?`: `string`; `type?`: `"startThreadResponse"`; \}\> | Starts a thread. | [packages/codeboltjs/src/modules/thread.ts:170](packages/codeboltjs/src/modules/thread.ts#L170) |
| <a id="updatethread"></a> `updateThread()` | (`threadId`: `string`, `updates`: \{ `activeStepId?`: `string`; `completed?`: `boolean`; `currentStep?`: `any`; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `dueDate?`: `Date`; `environment?`: `string`; `environmentType?`: `"local"` \| `"remote"`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `groupId?`: `string`; `isGrouped?`: `boolean`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `mentionedAgents?`: `any`[]; `mentionedMCPs?`: `any`[]; `messageId?`: `string`; `name?`: `string`; `processId?`: `string`; `remixPrompt?`: `string`; `remoteProvider?`: \{ `id?`: `string`; `name?`: `string`; \}; `selectedAgent?`: `any`; `selection?`: \{ `selectedText?`: `string`; \}; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `stepId?`: `string`; `steps?`: \{ `agentId?`: `string`; `condition?`: `string`; `FlowData?`: \{ `edges?`: `any`[]; `nodes?`: \{ `data?`: ...; `id?`: ...; `position?`: ...; `type?`: ...; \}[]; \}; `id?`: `string`; `isMainTask?`: `boolean`; `messageData?`: \{ `controlFiles?`: `string`[]; `environment?`: `Record`\<`string`, `any`\>; `isRemoteTask?`: `boolean`; `links?`: `string`[]; `llmProvider?`: \{ `model?`: ... \| ...; `providerId?`: ... \| ...; \}; `mentionedAgents?`: `string`[]; `mentionedDocs?`: `string`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedFullPaths?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `uploadedImages?`: `string`[]; \}; `position?`: \{ `x?`: `number`; `y?`: `number`; \}; `status?`: `string`; `type?`: `string`; `userMessage?`: `string`; \}[]; `taskType?`: `"scheduled"` \| `"interactive"`; `userMessage?`: `string`; \}) => `Promise`\<\{ `error?`: `string`; `success?`: `boolean`; `thread?`: \{ `activeStepId?`: `string`; `assignedTo?`: `string`; `attachedMemories?`: \{ `createdAt?`: `Date`; `format?`: `"json"` \| `"markdown"` \| `"todo"`; `id?`: `number`; `memoryId?`: `string`; `threadId?`: `string`; \}[]; `cancellationReason?`: `string`; `completed?`: `boolean`; `completedAt?`: `Date`; `createdAt?`: `Date`; `dependsOnThreadId?`: `string`; `dependsOnThreadName?`: `string`; `description?`: `string`; `environment?`: `Record`\<`string`, `any`\>; `environmentType?`: `"local"` \| `"remote"`; `errorMessage?`: `string`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `messages?`: \{ `agentId?`: `string`; `id?`: `number`; `message?`: `string`; `messageId?`: `string`; `messageType?`: \| `"info"` \| `"error"` \| `"warning"` \| `"success"` \| `"feedback"` \| `"steering"` \| `"instruction"`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `stepId?`: `string`; `threadId?`: `string`; `timestamp?`: `Date`; `userId?`: `string`; \}[]; `name?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `progress?`: \{ `completedSteps?`: `number`; `percentage?`: `number`; `totalSteps?`: `number`; \}; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `Date`; `stepActivatedAt?`: `Date`; `steps?`: \{ `activatedAt?`: `Date`; `agentId?`: `string`; `completedAt?`: `Date`; `condition?`: `string`; `createdAt?`: `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `id?`: `number`; `isMainTask?`: `boolean`; `metaData?`: `any`; `position?`: \{ `x?`: ...; `y?`: ...; \}; `result?`: `any`; `startedAt?`: `Date`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"skipped"`; `stepId?`: `string`; `threadId?`: `string`; `type?`: `string`; `updatedAt?`: `Date`; `userMessage?`: `string`; `value?`: `string`; \}[]; `tags?`: `string`[]; `threadId?`: `string`; `threadType?`: `"scheduled"` \| `"interactive"`; `updatedAt?`: `Date`; \}; `threadId?`: `string`; `type?`: `"updateThreadResponse"`; \}\> | Updates an existing thread. | [packages/codeboltjs/src/modules/thread.ts:194](packages/codeboltjs/src/modules/thread.ts#L194) |
| <a id="updatethreadstatus"></a> `updateThreadStatus()` | (`threadId`: `string`, `status`: `string`) => `Promise`\<\{ `error?`: `string`; `status?`: `string`; `success?`: `boolean`; `thread?`: \{ `activeStepId?`: `string`; `assignedTo?`: `string`; `attachedMemories?`: \{ `createdAt?`: `Date`; `format?`: `"json"` \| `"markdown"` \| `"todo"`; `id?`: `number`; `memoryId?`: `string`; `threadId?`: `string`; \}[]; `cancellationReason?`: `string`; `completed?`: `boolean`; `completedAt?`: `Date`; `createdAt?`: `Date`; `dependsOnThreadId?`: `string`; `dependsOnThreadName?`: `string`; `description?`: `string`; `environment?`: `Record`\<`string`, `any`\>; `environmentType?`: `"local"` \| `"remote"`; `errorMessage?`: `string`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `messages?`: \{ `agentId?`: `string`; `id?`: `number`; `message?`: `string`; `messageId?`: `string`; `messageType?`: \| `"info"` \| `"error"` \| `"warning"` \| `"success"` \| `"feedback"` \| `"steering"` \| `"instruction"`; `priority?`: `"low"` \| `"medium"` \| `"high"`; `stepId?`: `string`; `threadId?`: `string`; `timestamp?`: `Date`; `userId?`: `string`; \}[]; `name?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `progress?`: \{ `completedSteps?`: `number`; `percentage?`: `number`; `totalSteps?`: `number`; \}; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `Date`; `stepActivatedAt?`: `Date`; `steps?`: \{ `activatedAt?`: `Date`; `agentId?`: `string`; `completedAt?`: `Date`; `condition?`: `string`; `createdAt?`: `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `id?`: `number`; `isMainTask?`: `boolean`; `metaData?`: `any`; `position?`: \{ `x?`: ...; `y?`: ...; \}; `result?`: `any`; `startedAt?`: `Date`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"skipped"`; `stepId?`: `string`; `threadId?`: `string`; `type?`: `string`; `updatedAt?`: `Date`; `userMessage?`: `string`; `value?`: `string`; \}[]; `tags?`: `string`[]; `threadId?`: `string`; `threadType?`: `"scheduled"` \| `"interactive"`; `updatedAt?`: `Date`; \}; `threadId?`: `string`; `type?`: `"updateThreadStatusResponse"`; \}\> | Updates the status of a thread. | [packages/codeboltjs/src/modules/thread.ts:242](packages/codeboltjs/src/modules/thread.ts#L242) |
