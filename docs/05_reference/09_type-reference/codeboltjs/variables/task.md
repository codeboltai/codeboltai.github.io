---
title: task
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: task

```ts
const task: {
  assignAgentToTask: (taskId: string, agentId: string) => Promise<{
     error?: string;
     success?: boolean;
     task?: {
        assignedTo?: string;
        cancellationReason?: string;
        children?: any[];
        completed?: boolean;
        completedAt?: string | Date;
        controlFiles?: any[];
        createdAt?: string | Date;
        dependsOnTaskId?: string;
        dependsOnTaskName?: string;
        description?: string;
        dueDate?: string | Date;
        errorMessage?: string;
        flowData?: any;
        groupId?: string;
        id?: number;
        links?: string[];
        mentionedAgents?: any[];
        mentionedDocs?: any[];
        mentionedFiles?: string[];
        mentionedFolders?: string[];
        mentionedMCPs?: string[];
        mentionedMultiFile?: string[];
        messages?: any[];
        name?: string;
        order?: number;
        parentTaskId?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        selectedAgent?: any;
        selection?: any;
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
        statusUpdatedAt?: string | Date;
        tags?: string[];
        taskId?: string;
        updatedAt?: string | Date;
        uploadedImages?: string[];
     };
     type?: "updateTaskResponse";
  }>;
  createTask: (options: {
     assignedTo?: string;
     controlFiles?: any[];
     dependsOnTaskId?: string;
     dependsOnTaskName?: string;
     description?: string;
     dueDate?: Date;
     environment?: string;
     environmentType?: "local" | "remote";
     executionType?: "scheduled" | "manual" | "immediate" | "conditional";
     flowData?: any;
     groupId?: string;
     isKanbanTask?: boolean;
     isRemoteTask?: boolean;
     links?: string[];
     mentionedAgents?: any[];
     mentionedDocs?: any[];
     mentionedFiles?: string[];
     mentionedFolders?: string[];
     mentionedMCPs?: string[];
     mentionedMultiFile?: string[];
     name?: string;
     order?: number;
     parentTaskId?: string;
     priority?: "low" | "medium" | "high" | "urgent";
     projectId?: number;
     projectName?: string;
     projectPath?: string;
     selectedAgent?: any;
     selection?: any;
     startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
     status?: string;
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
     tags?: string[];
     taskType?: "scheduled" | "interactive";
     threadId?: string;
     uploadedImages?: string[];
   }) => Promise<{
     error?: string;
     success?: boolean;
     task?: {
        assignedTo?: string;
        cancellationReason?: string;
        children?: any[];
        completed?: boolean;
        completedAt?: string | Date;
        controlFiles?: any[];
        createdAt?: string | Date;
        dependsOnTaskId?: string;
        dependsOnTaskName?: string;
        description?: string;
        dueDate?: string | Date;
        errorMessage?: string;
        flowData?: any;
        groupId?: string;
        id?: number;
        links?: string[];
        mentionedAgents?: any[];
        mentionedDocs?: any[];
        mentionedFiles?: string[];
        mentionedFolders?: string[];
        mentionedMCPs?: string[];
        mentionedMultiFile?: string[];
        messages?: any[];
        name?: string;
        order?: number;
        parentTaskId?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        selectedAgent?: any;
        selection?: any;
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
        statusUpdatedAt?: string | Date;
        tags?: string[];
        taskId?: string;
        updatedAt?: string | Date;
        uploadedImages?: string[];
     };
     type?: "createTaskResponse";
  }>;
  deleteTask: (taskId: string) => Promise<{
     deleted?: boolean;
     error?: string;
     success?: boolean;
     taskId?: string;
     type?: "deleteTaskResponse";
  }>;
  executeTaskWithAgent: (taskId: string, agentId: string) => Promise<{
     activityId?: string;
     agentId?: string;
     error?: string;
     success?: boolean;
     task?: {
        assignedTo?: string;
        cancellationReason?: string;
        children?: any[];
        completed?: boolean;
        completedAt?: string | Date;
        controlFiles?: any[];
        createdAt?: string | Date;
        dependsOnTaskId?: string;
        dependsOnTaskName?: string;
        description?: string;
        dueDate?: string | Date;
        errorMessage?: string;
        flowData?: any;
        groupId?: string;
        id?: number;
        links?: string[];
        mentionedAgents?: any[];
        mentionedDocs?: any[];
        mentionedFiles?: string[];
        mentionedFolders?: string[];
        mentionedMCPs?: string[];
        mentionedMultiFile?: string[];
        messages?: any[];
        name?: string;
        order?: number;
        parentTaskId?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        selectedAgent?: any;
        selection?: any;
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
        statusUpdatedAt?: string | Date;
        tags?: string[];
        taskId?: string;
        updatedAt?: string | Date;
        uploadedImages?: string[];
     };
     taskId?: string;
     type?: "startTaskWithAgentResponse";
  }>;
  getTaskDetail: (options: {
     includeMessages?: boolean;
     includeSteps?: boolean;
     taskId?: string;
   }) => Promise<{
     error?: string;
     success?: boolean;
     task?: {
        assignedTo?: string;
        cancellationReason?: string;
        children?: any[];
        completed?: boolean;
        completedAt?: string | Date;
        controlFiles?: any[];
        createdAt?: string | Date;
        dependsOnTaskId?: string;
        dependsOnTaskName?: string;
        description?: string;
        dueDate?: string | Date;
        errorMessage?: string;
        flowData?: any;
        groupId?: string;
        id?: number;
        links?: string[];
        mentionedAgents?: any[];
        mentionedDocs?: any[];
        mentionedFiles?: string[];
        mentionedFolders?: string[];
        mentionedMCPs?: string[];
        mentionedMultiFile?: string[];
        messages?: any[];
        name?: string;
        order?: number;
        parentTaskId?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        selectedAgent?: any;
        selection?: any;
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
        statusUpdatedAt?: string | Date;
        tags?: string[];
        taskId?: string;
        updatedAt?: string | Date;
        uploadedImages?: string[];
     };
     taskId?: string;
     type?: "getTaskResponse";
  }>;
  getTaskList: (options: {
     limit?: number;
     offset?: number;
     startedByUser?: string;
     status?: "pending" | "completed" | "processing" | "all";
     threadId?: string;
   }) => Promise<{
     error?: string;
     success?: boolean;
     tasks?: {
        assignedTo?: string;
        cancellationReason?: string;
        children?: any[];
        completed?: boolean;
        completedAt?: string | Date;
        controlFiles?: any[];
        createdAt?: string | Date;
        dependsOnTaskId?: string;
        dependsOnTaskName?: string;
        description?: string;
        dueDate?: string | Date;
        errorMessage?: string;
        flowData?: any;
        groupId?: string;
        id?: number;
        links?: string[];
        mentionedAgents?: any[];
        mentionedDocs?: any[];
        mentionedFiles?: string[];
        mentionedFolders?: string[];
        mentionedMCPs?: string[];
        mentionedMultiFile?: string[];
        messages?: any[];
        name?: string;
        order?: number;
        parentTaskId?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        selectedAgent?: any;
        selection?: any;
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
        statusUpdatedAt?: string | Date;
        tags?: string[];
        taskId?: string;
        updatedAt?: string | Date;
        uploadedImages?: string[];
     }[];
     totalCount?: number;
     type?: "listTasksResponse";
  }>;
  getTaskStatus: (taskId: string) => Promise<string | undefined>;
  getTaskSummary: (taskId: string) => Promise<string | undefined>;
  updateTask: (taskId: string, updates: {
     assignedTo?: string;
     completed?: boolean;
     dependsOnTaskId?: string;
     dependsOnTaskName?: string;
     dueDate?: Date;
     environment?: string;
     environmentType?: "local" | "remote";
     executionType?: "scheduled" | "manual" | "immediate" | "conditional";
     groupId?: string;
     isKanbanTask?: boolean;
     isRemoteTask?: boolean;
     name?: string;
     selectedAgent?: any;
     startOption?: "manual" | "immediately" | "based_on_group" | "ontaskfinish";
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
   }) => Promise<{
     error?: string;
     success?: boolean;
     task?: {
        assignedTo?: string;
        cancellationReason?: string;
        children?: any[];
        completed?: boolean;
        completedAt?: string | Date;
        controlFiles?: any[];
        createdAt?: string | Date;
        dependsOnTaskId?: string;
        dependsOnTaskName?: string;
        description?: string;
        dueDate?: string | Date;
        errorMessage?: string;
        flowData?: any;
        groupId?: string;
        id?: number;
        links?: string[];
        mentionedAgents?: any[];
        mentionedDocs?: any[];
        mentionedFiles?: string[];
        mentionedFolders?: string[];
        mentionedMCPs?: string[];
        mentionedMultiFile?: string[];
        messages?: any[];
        name?: string;
        order?: number;
        parentTaskId?: string;
        priority?: "low" | "medium" | "high" | "urgent";
        projectId?: number;
        projectName?: string;
        projectPath?: string;
        selectedAgent?: any;
        selection?: any;
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
        statusUpdatedAt?: string | Date;
        tags?: string[];
        taskId?: string;
        updatedAt?: string | Date;
        uploadedImages?: string[];
     };
     type?: "updateTaskResponse";
  }>;
};
```

Defined in: packages/codeboltjs/src/modules/task.ts:33

Enhanced task service with comprehensive task and step management.
This module provides a modern API for task management based on the new task service schemas.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="assignagenttotask"></a> `assignAgentToTask()` | (`taskId`: `string`, `agentId`: `string`) => `Promise`\<\{ `error?`: `string`; `success?`: `boolean`; `task?`: \{ `assignedTo?`: `string`; `cancellationReason?`: `string`; `children?`: `any`[]; `completed?`: `boolean`; `completedAt?`: `string` \| `Date`; `controlFiles?`: `any`[]; `createdAt?`: `string` \| `Date`; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `description?`: `string`; `dueDate?`: `string` \| `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `links?`: `string`[]; `mentionedAgents?`: `any`[]; `mentionedDocs?`: `any`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `messages?`: `any`[]; `name?`: `string`; `order?`: `number`; `parentTaskId?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `selectedAgent?`: `any`; `selection?`: `any`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `string` \| `Date`; `tags?`: `string`[]; `taskId?`: `string`; `updatedAt?`: `string` \| `Date`; `uploadedImages?`: `string`[]; \}; `type?`: `"updateTaskResponse"`; \}\> | Assigns an agent to a task. | [packages/codeboltjs/src/modules/task.ts:154](packages/codeboltjs/src/modules/task.ts#L154) |
| <a id="createtask"></a> `createTask()` | (`options`: \{ `assignedTo?`: `string`; `controlFiles?`: `any`[]; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `description?`: `string`; `dueDate?`: `Date`; `environment?`: `string`; `environmentType?`: `"local"` \| `"remote"`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `flowData?`: `any`; `groupId?`: `string`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `links?`: `string`[]; `mentionedAgents?`: `any`[]; `mentionedDocs?`: `any`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `name?`: `string`; `order?`: `number`; `parentTaskId?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `selectedAgent?`: `any`; `selection?`: `any`; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `status?`: `string`; `steps?`: \{ `agentId?`: `string`; `condition?`: `string`; `FlowData?`: \{ `edges?`: `any`[]; `nodes?`: \{ `data?`: ...; `id?`: ...; `position?`: ...; `type?`: ...; \}[]; \}; `isMainTask?`: `boolean`; `messageData?`: \{ `controlFiles?`: `string`[]; `environment?`: `Record`\<`string`, `any`\>; `isRemoteTask?`: `boolean`; `links?`: `string`[]; `llmProvider?`: \{ `model?`: ... \| ...; `providerId?`: ... \| ...; \}; `mentionedAgents?`: `string`[]; `mentionedDocs?`: `string`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedFullPaths?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `uploadedImages?`: `string`[]; \}; `position?`: \{ `x?`: `number`; `y?`: `number`; \}; `status?`: `string`; `type?`: `string`; `userMessage?`: `string`; \}[]; `tags?`: `string`[]; `taskType?`: `"scheduled"` \| `"interactive"`; `threadId?`: `string`; `uploadedImages?`: `string`[]; \}) => `Promise`\<\{ `error?`: `string`; `success?`: `boolean`; `task?`: \{ `assignedTo?`: `string`; `cancellationReason?`: `string`; `children?`: `any`[]; `completed?`: `boolean`; `completedAt?`: `string` \| `Date`; `controlFiles?`: `any`[]; `createdAt?`: `string` \| `Date`; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `description?`: `string`; `dueDate?`: `string` \| `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `links?`: `string`[]; `mentionedAgents?`: `any`[]; `mentionedDocs?`: `any`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `messages?`: `any`[]; `name?`: `string`; `order?`: `number`; `parentTaskId?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `selectedAgent?`: `any`; `selection?`: `any`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `string` \| `Date`; `tags?`: `string`[]; `taskId?`: `string`; `updatedAt?`: `string` \| `Date`; `uploadedImages?`: `string`[]; \}; `type?`: `"createTaskResponse"`; \}\> | Creates a new task. | [packages/codeboltjs/src/modules/task.ts:40](packages/codeboltjs/src/modules/task.ts#L40) |
| <a id="deletetask"></a> `deleteTask()` | (`taskId`: `string`) => `Promise`\<\{ `deleted?`: `boolean`; `error?`: `string`; `success?`: `boolean`; `taskId?`: `string`; `type?`: `"deleteTaskResponse"`; \}\> | Deletes a task. | [packages/codeboltjs/src/modules/task.ts:88](packages/codeboltjs/src/modules/task.ts#L88) |
| <a id="executetaskwithagent"></a> `executeTaskWithAgent()` | (`taskId`: `string`, `agentId`: `string`) => `Promise`\<\{ `activityId?`: `string`; `agentId?`: `string`; `error?`: `string`; `success?`: `boolean`; `task?`: \{ `assignedTo?`: `string`; `cancellationReason?`: `string`; `children?`: `any`[]; `completed?`: `boolean`; `completedAt?`: `string` \| `Date`; `controlFiles?`: `any`[]; `createdAt?`: `string` \| `Date`; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `description?`: `string`; `dueDate?`: `string` \| `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `links?`: `string`[]; `mentionedAgents?`: `any`[]; `mentionedDocs?`: `any`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `messages?`: `any`[]; `name?`: `string`; `order?`: `number`; `parentTaskId?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `selectedAgent?`: `any`; `selection?`: `any`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `string` \| `Date`; `tags?`: `string`[]; `taskId?`: `string`; `updatedAt?`: `string` \| `Date`; `uploadedImages?`: `string`[]; \}; `taskId?`: `string`; `type?`: `"startTaskWithAgentResponse"`; \}\> | Executes a task with a specific agent. Assigns the agent and then starts the task. | [packages/codeboltjs/src/modules/task.ts:167](packages/codeboltjs/src/modules/task.ts#L167) |
| <a id="gettaskdetail"></a> `getTaskDetail()` | (`options`: \{ `includeMessages?`: `boolean`; `includeSteps?`: `boolean`; `taskId?`: `string`; \}) => `Promise`\<\{ `error?`: `string`; `success?`: `boolean`; `task?`: \{ `assignedTo?`: `string`; `cancellationReason?`: `string`; `children?`: `any`[]; `completed?`: `boolean`; `completedAt?`: `string` \| `Date`; `controlFiles?`: `any`[]; `createdAt?`: `string` \| `Date`; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `description?`: `string`; `dueDate?`: `string` \| `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `links?`: `string`[]; `mentionedAgents?`: `any`[]; `mentionedDocs?`: `any`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `messages?`: `any`[]; `name?`: `string`; `order?`: `number`; `parentTaskId?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `selectedAgent?`: `any`; `selection?`: `any`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `string` \| `Date`; `tags?`: `string`[]; `taskId?`: `string`; `updatedAt?`: `string` \| `Date`; `uploadedImages?`: `string`[]; \}; `taskId?`: `string`; `type?`: `"getTaskResponse"`; \}\> | Retrieves detailed information about a specific task. | [packages/codeboltjs/src/modules/task.ts:132](packages/codeboltjs/src/modules/task.ts#L132) |
| <a id="gettasklist"></a> `getTaskList()` | (`options`: \{ `limit?`: `number`; `offset?`: `number`; `startedByUser?`: `string`; `status?`: `"pending"` \| `"completed"` \| `"processing"` \| `"all"`; `threadId?`: `string`; \}) => `Promise`\<\{ `error?`: `string`; `success?`: `boolean`; `tasks?`: \{ `assignedTo?`: `string`; `cancellationReason?`: `string`; `children?`: `any`[]; `completed?`: `boolean`; `completedAt?`: `string` \| `Date`; `controlFiles?`: `any`[]; `createdAt?`: `string` \| `Date`; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `description?`: `string`; `dueDate?`: `string` \| `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `links?`: `string`[]; `mentionedAgents?`: `any`[]; `mentionedDocs?`: `any`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `messages?`: `any`[]; `name?`: `string`; `order?`: `number`; `parentTaskId?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `selectedAgent?`: `any`; `selection?`: `any`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `string` \| `Date`; `tags?`: `string`[]; `taskId?`: `string`; `updatedAt?`: `string` \| `Date`; `uploadedImages?`: `string`[]; \}[]; `totalCount?`: `number`; `type?`: `"listTasksResponse"`; \}\> | Retrieves a list of tasks. | [packages/codeboltjs/src/modules/task.ts:111](packages/codeboltjs/src/modules/task.ts#L111) |
| <a id="gettaskstatus"></a> `getTaskStatus()` | (`taskId`: `string`) => `Promise`\<`string` \| `undefined`\> | Gets the status of a task. | [packages/codeboltjs/src/modules/task.ts:191](packages/codeboltjs/src/modules/task.ts#L191) |
| <a id="gettasksummary"></a> `getTaskSummary()` | (`taskId`: `string`) => `Promise`\<`string` \| `undefined`\> | Gets the summary (description) of a task. | [packages/codeboltjs/src/modules/task.ts:201](packages/codeboltjs/src/modules/task.ts#L201) |
| <a id="updatetask"></a> `updateTask()` | (`taskId`: `string`, `updates`: \{ `assignedTo?`: `string`; `completed?`: `boolean`; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `dueDate?`: `Date`; `environment?`: `string`; `environmentType?`: `"local"` \| `"remote"`; `executionType?`: `"scheduled"` \| `"manual"` \| `"immediate"` \| `"conditional"`; `groupId?`: `string`; `isKanbanTask?`: `boolean`; `isRemoteTask?`: `boolean`; `name?`: `string`; `selectedAgent?`: `any`; `startOption?`: `"manual"` \| `"immediately"` \| `"based_on_group"` \| `"ontaskfinish"`; `steps?`: \{ `agentId?`: `string`; `condition?`: `string`; `FlowData?`: \{ `edges?`: `any`[]; `nodes?`: \{ `data?`: ...; `id?`: ...; `position?`: ...; `type?`: ...; \}[]; \}; `id?`: `string`; `isMainTask?`: `boolean`; `messageData?`: \{ `controlFiles?`: `string`[]; `environment?`: `Record`\<`string`, `any`\>; `isRemoteTask?`: `boolean`; `links?`: `string`[]; `llmProvider?`: \{ `model?`: ... \| ...; `providerId?`: ... \| ...; \}; `mentionedAgents?`: `string`[]; `mentionedDocs?`: `string`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedFullPaths?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `uploadedImages?`: `string`[]; \}; `position?`: \{ `x?`: `number`; `y?`: `number`; \}; `status?`: `string`; `type?`: `string`; `userMessage?`: `string`; \}[]; `taskType?`: `"scheduled"` \| `"interactive"`; \}) => `Promise`\<\{ `error?`: `string`; `success?`: `boolean`; `task?`: \{ `assignedTo?`: `string`; `cancellationReason?`: `string`; `children?`: `any`[]; `completed?`: `boolean`; `completedAt?`: `string` \| `Date`; `controlFiles?`: `any`[]; `createdAt?`: `string` \| `Date`; `dependsOnTaskId?`: `string`; `dependsOnTaskName?`: `string`; `description?`: `string`; `dueDate?`: `string` \| `Date`; `errorMessage?`: `string`; `flowData?`: `any`; `groupId?`: `string`; `id?`: `number`; `links?`: `string`[]; `mentionedAgents?`: `any`[]; `mentionedDocs?`: `any`[]; `mentionedFiles?`: `string`[]; `mentionedFolders?`: `string`[]; `mentionedMCPs?`: `string`[]; `mentionedMultiFile?`: `string`[]; `messages?`: `any`[]; `name?`: `string`; `order?`: `number`; `parentTaskId?`: `string`; `priority?`: `"low"` \| `"medium"` \| `"high"` \| `"urgent"`; `projectId?`: `number`; `projectName?`: `string`; `projectPath?`: `string`; `selectedAgent?`: `any`; `selection?`: `any`; `status?`: \| `"pending"` \| `"completed"` \| `"failed"` \| `"cancelled"` \| `"in_progress"` \| `"created"` \| `"active"` \| `"review"` \| `"planned"` \| `"waiting_user"`; `statusUpdatedAt?`: `string` \| `Date`; `tags?`: `string`[]; `taskId?`: `string`; `updatedAt?`: `string` \| `Date`; `uploadedImages?`: `string`[]; \}; `type?`: `"updateTaskResponse"`; \}\> | Updates an existing task. | [packages/codeboltjs/src/modules/task.ts:64](packages/codeboltjs/src/modules/task.ts#L64) |
