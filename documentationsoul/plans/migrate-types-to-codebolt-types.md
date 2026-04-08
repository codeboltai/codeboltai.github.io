# Migration Plan: SDK Types to @codebolt/types

## Overview

This plan outlines the migration of types from `packages/codeboltjs/src/types/` to `@codebolt/types` (common/types/) for better organization, reusability, and documentation generation.

## Current State

### Source Location: `packages/codeboltjs/src/types/`
27 type files containing:
- **Action enums**: `AgentDeliberationAction`, `AgentPortfolioAction`, etc.
- **Response types**: `ICreateDeliberationResponse`, `IGetFeedbackResponse`, etc.
- **Entity types**: `Deliberation`, `GroupFeedback`, `Job`, etc.
- **Param types**: `ICreateDeliberationParams`, `IVoteParams`, etc.

### Target Location: `common/types/src/codeboltjstypes/`
Already has:
- `libFunctionTypes/` - Core SDK types for modules (fs, debug, memory, etc.)
- `sdktypes/index.ts` - Module interface definitions

## Files to Migrate

Following the existing flat-file pattern in `libFunctionTypes/`:

| Source File | Target File | Type Categories |
|------------|-------------|-----------------|
| `agentDeliberation.ts` | `libFunctionTypes/deliberation.ts` | Enums, Interfaces, Params, Responses |
| `agentEventQueue.ts` | `libFunctionTypes/eventQueue.ts` | Enums, Interfaces |
| `agentPortfolio.ts` | Already exists | Check & merge if needed |
| `autoTesting.ts` | `libFunctionTypes/autoTesting.ts` | Enums, Interfaces, Params, Responses |
| `codebaseSearch.ts` | `libFunctionTypes/codebaseSearch.ts` | Interfaces, Params, Responses |
| `codemap.ts` | `libFunctionTypes/codemap.ts` | Enums, Interfaces, Params, Responses |
| `commonTypes.ts` | `libFunctionTypes/common.ts` | Utility types, Common entities |
| `contextAssembly.ts` | `libFunctionTypes/contextAssembly.ts` | Interfaces |
| `contextRuleEngine.ts` | `libFunctionTypes/contextRuleEngine.ts` | Enums, Interfaces, Params |
| `eventLog.ts` | `libFunctionTypes/eventLog.ts` | Enums, Interfaces, Params, Responses |
| `fileUpdateIntent.ts` | `libFunctionTypes/fileUpdateIntent.ts` | Interfaces |
| `groupFeedback.ts` | `libFunctionTypes/groupFeedback.ts` | Enums, Interfaces, Params, Responses |
| `hook.ts` | `libFunctionTypes/hook.ts` | Enums, Interfaces, Params, Responses |
| `InternalTypes.ts` | `libFunctionTypes/internal.ts` | Internal utility types |
| `job.ts` | `libFunctionTypes/job.ts` | Enums, Interfaces, Params, Responses |
| `knowledgeGraph.ts` | `libFunctionTypes/knowledgeGraph.ts` | Interfaces, Params, Responses |
| `kvStore.ts` | `libFunctionTypes/kvStore.ts` | Interfaces, Params, Responses |
| `libFunctionTypes.ts` | Already exists | Re-export only |
| `memoryIngestion.ts` | `libFunctionTypes/memoryIngestion.ts` | Interfaces, Params, Responses |
| `persistentMemory.ts` | `libFunctionTypes/persistentMemory.ts` | Enums, Interfaces, Params, Responses |
| `projectStructure.ts` | `libFunctionTypes/projectStructure.ts` | Interfaces |
| `projectStructureUpdateRequest.ts` | Merge into `projectStructure.ts` | Interfaces |
| `reviewMergeRequest.ts` | `libFunctionTypes/reviewMergeRequest.ts` | Interfaces, Params, Responses |
| `roadmap.ts` | `libFunctionTypes/roadmap.ts` | Interfaces, Params, Responses |
| `socketMessageTypes.ts` | Keep in codeboltjs | Internal WebSocket types |
| `swarm.ts` | `libFunctionTypes/swarm.ts` | Interfaces, Params, Responses |

## Target Structure

Following the existing flat-file pattern:

```
common/types/src/codeboltjstypes/libFunctionTypes/
├── actionPlan.ts          # Existing
├── agent.ts               # Existing
├── agentPortfolio.ts      # Existing - verify complete
├── browser.ts             # Existing
├── chat.ts                # Existing
├── codeutils.ts           # Existing
├── debug.ts               # Existing
├── fs.ts                  # Existing
├── git.ts                 # Existing
├── history.ts             # Existing
├── llm.ts                 # Existing
├── mcp.ts                 # Existing
├── memory.ts              # Existing
├── project.ts             # Existing
├── state.ts               # Existing
├── terminal.ts            # Existing
├── todo.ts                # Existing
├── tokenizer.ts           # Existing
├── utils.ts               # Existing
├── vectordb.ts            # Existing
│
├── deliberation.ts        # NEW
├── eventQueue.ts          # NEW
├── autoTesting.ts         # NEW
├── codebaseSearch.ts      # NEW
├── codemap.ts             # NEW
├── common.ts              # NEW
├── contextAssembly.ts     # NEW
├── contextRuleEngine.ts   # NEW
├── eventLog.ts            # NEW
├── fileUpdateIntent.ts    # NEW
├── groupFeedback.ts       # NEW
├── hook.ts                # NEW
├── internal.ts            # NEW
├── job.ts                 # NEW
├── knowledgeGraph.ts      # NEW
├── kvStore.ts             # NEW
├── memoryIngestion.ts     # NEW
├── persistentMemory.ts    # NEW
├── projectStructure.ts    # NEW
├── reviewMergeRequest.ts  # NEW
├── roadmap.ts             # NEW
├── swarm.ts               # NEW
│
└── index.ts               # Update to export all
```

## Migration Steps

### Step 1: Copy Type Files
For each source file in `packages/codeboltjs/src/types/`:
1. Copy to `common/types/src/codeboltjstypes/libFunctionTypes/`
2. Rename if needed (e.g., `agentDeliberation.ts` → `deliberation.ts`)
3. Keep all exports (enums, interfaces, types)

### Step 2: Update libFunctionTypes/index.ts
Add re-exports for all new files:
```typescript
export * from './deliberation';
export * from './groupFeedback';
export * from './job';
export * from './hook';
// ... etc
```

### Step 3: Update sdk-types.ts
Ensure sdk-types.ts exports from libFunctionTypes:
```typescript
export * from './codeboltjstypes/libFunctionTypes';
```

### Step 4: Update codeboltjs Imports
In `packages/codeboltjs/src/`:
- Change: `import { ... } from '../types/agentDeliberation'`
- To: `import { ... } from '@codebolt/types/sdk'`

### Step 5: Backwards Compatibility
Keep `packages/codeboltjs/src/types/index.ts` as a re-export file:
```typescript
export * from '@codebolt/types/sdk';
```

### Step 6: Keep Internal Types
`socketMessageTypes.ts` stays in `packages/codeboltjs/src/types/` as it's internal WebSocket protocol types.

## Verification

1. Run `npm run build` in both packages
2. Run `node generate-type-docs.js --clean` to regenerate documentation
3. Run `node migratefromCbparams.cjs` to verify type linking works
4. Check `missing-ref.json` - should have 0 missing types

## Notes

- **Backwards Compatibility**: Users importing from `codeboltjs/types` will still work via re-exports
- **Documentation**: All types will be documented under `@codebolt/types`
- **Action Enums**: Like `AgentDeliberationAction` are WebSocket action identifiers - include them with their module
- **Response Types**: All response types with module prefix (e.g., `ICreateDeliberationResponse`) should be in their module folder
