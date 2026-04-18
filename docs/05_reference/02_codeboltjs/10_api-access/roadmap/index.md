---
sidebar_position: 1
title: Roadmap Module
---

# Roadmap Module

The Roadmap module provides comprehensive functionality for managing project roadmaps, including phases, features, and ideas. It enables agents to plan, organize, and track project development.

## Overview

The roadmap module supports:
- **Phases** - Major milestones or stages of a project
- **Features** - Specific functionality items within phases
- **Ideas** - Pre-roadmap suggestions that can be reviewed and promoted to features

## Quick Start

```typescript
import codebolt from '@codebolt/codeboltjs';

// Get the complete roadmap
const roadmap = await codebolt.roadmap.getRoadmap();

// Create a new phase
const phase = await codebolt.roadmap.createPhase({
  name: 'Phase 1: Foundation',
  description: 'Core infrastructure and setup',
  order: 1
});

// Add a feature to the phase
const feature = await codebolt.roadmap.createFeature(phase.phase.id, {
  title: 'User Authentication',
  description: 'Implement OAuth2 login',
  priority: 1,
  status: 'pending'
});

// Create an idea
const idea = await codebolt.roadmap.createIdea({
  title: 'Dark Mode Support',
  description: 'Add toggle for dark mode theme',
  suggestedImpact: 'medium',
  suggestedDifficulty: 'easy'
});
```

## Available Methods

### Roadmap Operations
| Method | Description |
|--------|-------------|
| `getRoadmap()` | Get the complete roadmap for a project |

### Phase Operations
| Method | Description |
|--------|-------------|
| `getPhases()` | Get all phases in the roadmap |
| `createPhase(data)` | Create a new phase |
| `updatePhase(phaseId, data)` | Update an existing phase |
| `deletePhase(phaseId)` | Delete a phase |

### Feature Operations
| Method | Description |
|--------|-------------|
| `getFeatures(phaseId)` | Get features in a specific phase |
| `getAllFeatures()` | Get all features across all phases |
| `createFeature(phaseId, data)` | Create a new feature in a phase |
| `updateFeature(featureId, data)` | Update a feature |
| `deleteFeature(featureId)` | Delete a feature |
| `moveFeature(featureId, data)` | Move a feature to a different phase |

### Idea Operations
| Method | Description |
|--------|-------------|
| `getIdeas()` | Get all ideas |
| `createIdea(data)` | Create a new idea |
| `updateIdea(ideaId, data)` | Update an idea |
| `deleteIdea(ideaId)` | Delete an idea |
| `reviewIdea(ideaId, data)` | Accept or reject an idea |
| `moveIdeaToRoadmap(ideaId, data)` | Convert an idea to a feature |

## Common Use Cases

### Project Planning
```typescript
// Create project phases
const phases = ['Research', 'Design', 'Implementation', 'Testing', 'Launch'];
for (let i = 0; i < phases.length; i++) {
  await codebolt.roadmap.createPhase({
    name: phases[i],
    order: i + 1
  });
}
```

### Feature Tracking
```typescript
// Update feature status as work progresses
await codebolt.roadmap.updateFeature(featureId, {
  status: 'in-progress'
});

// Mark feature as complete
await codebolt.roadmap.updateFeature(featureId, {
  status: 'completed'
});
```

### Idea Management
```typescript
// Review and accept an idea
await codebolt.roadmap.reviewIdea(ideaId, {
  status: 'accepted',
  reviewNotes: 'Great suggestion, adding to Phase 2'
});

// Move accepted idea to roadmap
await codebolt.roadmap.moveIdeaToRoadmap(ideaId, {
  phaseId: 'phase-2-id',
  featureOverrides: {
    priority: 5
  }
});
```
