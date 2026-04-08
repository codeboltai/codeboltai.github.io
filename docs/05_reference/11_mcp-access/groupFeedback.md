---
title: GroupFeedback MCP
sidebar_label: codebolt.groupFeedback
sidebar_position: 78
---

# codebolt.groupFeedback

Group Feedback management tools for creating and managing collaborative feedback sessions. The GroupFeedback system enables structured collection, organization, and discussion of feedback from multiple participants.

## Overview

The GroupFeedback system provides a comprehensive framework for managing group feedback sessions. Participants can contribute responses, engage in threaded discussions through replies, and track feedback status throughout the review process. Feedback sessions can be filtered by status and participant, making it easy to manage multiple concurrent feedback initiatives.

## Available Tools

- `feedback_create` - Creates a new group feedback session
- `feedback_get` - Retrieves a specific feedback by ID
- `feedback_list` - Lists all feedback sessions with optional filtering
- `feedback_respond` - Responds to a feedback session
- `feedback_reply` - Replies to a feedback response
- `feedback_update_status` - Updates the status of a feedback session
- `feedback_update_summary` - Updates the summary of a feedback session

## Tool Parameters

### `feedback_create`

Creates a new group feedback session with a title, description, and optional participant list.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | The title of the feedback session. Should be concise and descriptive of the topic or project being reviewed. |
| description | string | Yes | The detailed description of the feedback session. Provides context about what feedback is being collected and the goals of the session. |
| participants | string[] | No | Optional list of participant IDs who are invited to contribute feedback. If not provided, the session is open to all authorized participants. |

### `feedback_get`

Retrieves detailed information about a specific feedback session, including all responses and replies.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| feedbackId | string | Yes | The unique identifier of the feedback session to retrieve. Must reference an existing feedback session. |

### `feedback_list`

Lists all feedback sessions with optional filtering capabilities. Useful for discovering and managing feedback across the organization.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| status | string | No | Optional status filter to retrieve only feedback sessions in a specific state. Common values include 'pending', 'in-progress', 'completed', 'closed'. |
| participantId | string | No | Optional participant ID filter to retrieve only feedback sessions where this participant has contributed or is invited. |

### `feedback_respond`

Submits a response to a feedback session. This is the primary way participants contribute their feedback.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| feedbackId | string | Yes | The unique identifier of the feedback session to respond to. Must reference an existing feedback session. |
| response | string | Yes | The response content containing the participant's feedback, comments, or suggestions. |

### `feedback_reply`

Replies to an existing feedback response, creating a threaded conversation for deeper discussion and clarification.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| feedbackId | string | Yes | The unique identifier of the feedback session containing the response. |
| responseId | string | Yes | The unique identifier of the response being replied to. Creates a threaded conversation structure. |
| reply | string | Yes | The reply content addressing the response. Used for follow-up questions, clarifications, or additional commentary. |

### `feedback_update_status`

Updates the status of a feedback session to reflect its current state in the review lifecycle.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| feedbackId | string | Yes | The unique identifier of the feedback session to update. |
| status | string | Yes | The new status for the feedback session. Common values include 'pending', 'in-progress', 'reviewed', 'completed', 'closed'. |

### `feedback_update_summary`

Updates the summary of a feedback session, providing a condensed overview of key points and conclusions.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| feedbackId | string | Yes | The unique identifier of the feedback session to update. |
| summary | string | Yes | The summary content highlighting key feedback points, action items, and conclusions. Useful for quick reference and reporting. |

## Sample Usage

```javascript
// Create a new feedback session for a project review
const createResult = await codebolt.tools.executeTool(
  "codebolt.groupFeedback",
  "feedback_create",
  {
    title: "Q1 Product Roadmap Review",
    description: "Collecting feedback on the proposed Q1 product roadmap and feature priorities",
    participants: ["user-123", "user-456", "user-789"]
  }
);

// Get details of a specific feedback session
const feedbackDetails = await codebolt.tools.executeTool(
  "codebolt.groupFeedback",
  "feedback_get",
  { feedbackId: "feedback-abc123" }
);

// List all feedback sessions with status filter
const activeFeedbacks = await codebolt.tools.executeTool(
  "codebolt.groupFeedback",
  "feedback_list",
  { status: "in-progress" }
);

// List feedbacks for a specific participant
const userFeedbacks = await codebolt.tools.executeTool(
  "codebolt.groupFeedback",
  "feedback_list",
  { participantId: "user-123" }
);

// Submit a response to a feedback session
const responseResult = await codebolt.tools.executeTool(
  "codebolt.groupFeedback",
  "feedback_respond",
  {
    feedbackId: "feedback-abc123",
    response: "The roadmap looks solid overall. I suggest prioritizing the authentication improvements as they're blocking several customer requests."
  }
);

// Reply to a specific response
const replyResult = await codebolt.tools.executeTool(
  "codebolt.groupFeedback",
  "feedback_reply",
  {
    feedbackId: "feedback-abc123",
    responseId: "response-xyz789",
    reply: "Good point on the authentication improvements. We'll move that up in the priority queue."
  }
);

// Update feedback status to mark as completed
const statusUpdate = await codebolt.tools.executeTool(
  "codebolt.groupFeedback",
  "feedback_update_status",
  {
    feedbackId: "feedback-abc123",
    status: "completed"
  }
);

// Update feedback summary with key takeaways
const summaryUpdate = await codebolt.tools.executeTool(
  "codebolt.groupFeedback",
  "feedback_update_summary",
  {
    feedbackId: "feedback-abc123",
    summary: "Key feedback: Prioritize authentication improvements, address mobile UX concerns, consider adding dark mode. Overall positive reception of the roadmap direction."
  }
);
```

## Workflow Examples

### Complete Feedback Session Lifecycle

```javascript
async function runFeedbackSession() {
  // Step 1: Create feedback session
  const session = await codebolt.tools.executeTool(
    "codebolt.groupFeedback",
    "feedback_create",
    {
      title: "API Documentation Review",
      description: "Reviewing the new API documentation for accuracy and completeness",
      participants: ["dev-team-lead", "tech-writer", "qa-engineer"]
    }
  );
  
  const feedbackId = session.feedbackId;
  
  // Step 2: Collect responses from participants
  const responses = await Promise.all([
    codebolt.tools.executeTool("codebolt.groupFeedback", "feedback_respond", {
      feedbackId,
      response: "Documentation looks good. Added a few minor notes about parameter descriptions."
    }),
    codebolt.tools.executeTool("codebolt.groupFeedback", "feedback_respond", {
      feedbackId,
      response: "Found some inconsistencies in the authentication section examples."
    })
  ]);
  
  // Step 3: Engage in discussion through replies
  await codebolt.tools.executeTool("codebolt.groupFeedback", "feedback_reply", {
    feedbackId,
    responseId: responses[1].responseId,
    reply: "Thanks for catching that. Will fix the authentication examples."
  });
  
  // Step 4: Update status as feedback is collected
  await codebolt.tools.executeTool("codebolt.groupFeedback", "feedback_update_status", {
    feedbackId,
    status: "reviewed"
  });
  
  // Step 5: Create summary and close session
  await codebolt.tools.executeTool("codebolt.groupFeedback", "feedback_update_summary", {
    feedbackId,
    summary: "Documentation well-received. Minor fixes needed for authentication examples. Overall quality is high."
  });
  
  await codebolt.tools.executeTool("codebolt.groupFeedback", "feedback_update_status", {
    feedbackId,
    status: "completed"
  });
  
  return feedbackId;
}
```

### Multi-Participant Feedback Collection

```javascript
async function collectTeamFeedback(projectTitle, description, participantIds) {
  // Create feedback session
  const session = await codebolt.tools.executeTool(
    "codebolt.groupFeedback",
    "feedback_create",
    {
      title: projectTitle,
      description,
      participants: participantIds
    }
  );
  
  const feedbackId = session.feedbackId;
  
  // Monitor progress
  const checkProgress = async () => {
    const feedbacks = await codebolt.tools.executeTool(
      "codebolt.groupFeedback",
      "feedback_get",
      { feedbackId }
    );
    
    const responseCount = feedbacks.feedback.responses.length;
    const expectedResponses = participantIds.length;
    
    return { responseCount, expectedResponses };
  };
  
  // Poll for completion
  let progress;
  do {
    progress = await checkProgress();
    console.log(`Progress: ${progress.responseCount}/${progress.expectedResponses} responses`);
    await new Promise(resolve => setTimeout(resolve, 5000));
  } while (progress.responseCount < progress.expectedResponses);
  
  console.log("All feedback collected!");
  return feedbackId;
}
```

### Feedback Analytics and Reporting

```javascript
async function generateFeedbackReport() {
  // Get all active feedback sessions
  const allFeedbacks = await codebolt.tools.executeTool(
    "codebolt.groupFeedback",
    "feedback_list",
    {}
  );
  
  const report = {
    totalSessions: allFeedbacks.feedbacks.length,
    byStatus: {},
    byParticipant: {}
  };
  
  // Analyze each session
  for (const feedback of allFeedbacks.feedbacks) {
    // Count by status
    const status = feedback.status || "unknown";
    report.byStatus[status] = (report.byStatus[status] || 0) + 1;
    
    // Get detailed info
    const details = await codebolt.tools.executeTool(
      "codebolt.groupFeedback",
      "feedback_get",
      { feedbackId: feedback.id }
    );
    
    // Count responses per participant
    if (details.feedback.responses) {
      for (const response of details.feedback.responses) {
        const participantId = response.participantId || "anonymous";
        report.byParticipant[participantId] = (report.byParticipant[participantId] || 0) + 1;
      }
    }
  }
  
  console.log("Feedback Report:", JSON.stringify(report, null, 2));
  return report;
}
```

## Feedback Workflows

### Typical Feedback Session Stages

1. **Creation** - Initialize a feedback session with clear title and description
2. **Collection** - Participants submit their initial responses
3. **Discussion** - Threaded replies enable deeper dialogue and clarification
4. **Analysis** - Review all responses and identify key themes
5. **Summary** - Document key takeaways and action items
6. **Completion** - Mark session as complete and proceed with implementation

### Best Practices

1. **Clear Objectives** - Define specific goals for each feedback session
2. **Targeted Participants** - Invite relevant stakeholders to ensure quality feedback
3. **Constructive Dialogue** - Use replies to clarify and expand on initial responses
4. **Timely Review** - Regularly update status to reflect session progress
5. **Actionable Summaries** - Create concise summaries that highlight key decisions and next steps
6. **Status Management** - Use status transitions to communicate session state to stakeholders
7. **Participant Engagement** - Monitor response rates and follow up as needed

:::info
Feedback Status Values:
- **pending**: Session created but not yet started
- **in-progress**: Currently collecting responses
- **reviewed**: All responses collected, being analyzed
- **completed**: Session finished, summary created
- **closed**: Session archived and no longer active

The GroupFeedback system supports threaded conversations through the reply mechanism, enabling rich discussion and clarification around feedback points. This structure helps maintain context and makes it easier to track the evolution of discussions.
:::

## Related Tools

- [Collaboration MCP](./collaboration.md) - Team collaboration tools
- [Review MCP](./review.md) - Code review tools
- [Mail MCP](./mail.md) - Email communication
- [Message MCP](./message.md) - Internal messaging
