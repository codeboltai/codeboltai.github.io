---
name: addReview
cbbaseinfo:
  description: Adds review feedback to a merge request, including approvals, change requests, or general comments.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review request
    - name: feedback
      typeName: AddReviewFeedback
      description: Review feedback including agent info, type, and comment
  returns:
    signatureTypeName: "Promise<{ request: ReviewMergeRequest }>"
    description: A promise that resolves to the updated request with new review
data:
  name: addReview
  category: reviewMergeRequest
  link: addReview.md
---
# addReview

```typescript
codebolt.reviewMergeRequest.addReview(id: string, feedback: AddReviewFeedback): Promise<{ request: ReviewMergeRequest }>
```

Adds review feedback to a merge request, including approvals, change requests, or general comments.
### Parameters

- **`id`** (string): The unique identifier of the review request
- **`feedback`** ([AddReviewFeedback](/docs/api/11_doc-type-ref/codeboltjs/interfaces/AddReviewFeedback)): Review feedback including agent info, type, and comment

### Returns

- **`Promise<{ request: [ReviewMergeRequest](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ReviewMergeRequest) }>`**: A promise that resolves to the updated request with new review

### Parameter Details

- **`id`** (string, required): The unique identifier of the review request
- **`feedback`** (object, required): Review feedback data
  - **`agentId`** (string): ID of the agent providing feedback
  - **`agentName`** (string): Name of the agent providing feedback
  - **`type`** ('approve' | 'request_changes' | 'comment'): Type of feedback
  - **`comment`** (string): Review comment or feedback text

### Response Structure

```typescript
interface Response {
  request: ReviewMergeRequest;  // Updated request with new review
}
```

### Examples

#### 1. Approve Request
```typescript
import codebolt from '@codebolt/codeboltjs';

// Approve a review request
const result = await codebolt.reviewMergeRequest.addReview(
  'req_abc123',
  {
    agentId: 'agent_reviewer_001',
    agentName: 'Senior Code Reviewer',
    type: 'approve',
    comment: 'LGTM! Code looks clean and well-structured. Approved for merge.'
  }
);

console.log('Review added');
console.log('Total reviews:', result.request.reviews.length);
```

#### 2. Request Changes
```typescript
// Request changes to the code
const result = await codebolt.reviewMergeRequest.addReview(
  'req_abc123',
  {
    agentId: 'agent_reviewer_security',
    agentName: 'Security Reviewer',
    type: 'request_changes',
    comment: 'Please address the following security concerns:\n' +
             '1. Add input validation to the search parameter\n' +
             '2. Sanitize user input before database query\n' +
             '3. Implement rate limiting on this endpoint'
  }
);

console.log('Changes requested');
```

#### 3. Leave General Comment
```typescript
// Add a comment without approving or requesting changes
const result = await codebolt.reviewMergeRequest.addReview(
  'req_abc123',
  {
    agentId: 'agent_reviewer_ui',
    agentName: 'UI/UX Reviewer',
    type: 'comment',
    comment: 'Consider adding a loading state while the search is processing. ' +
             'Also, the results could benefit from better visual hierarchy.'
  }
);
```

#### 4. Multiple Reviews from Different Agents
```typescript
// Simulate a code review process
const requestId = 'req_abc123';

// Review 1: Automated checks
await codebolt.reviewMergeRequest.addReview(requestId, {
  agentId: 'agent_bot_lint',
  agentName: 'Lint Bot',
  type: 'approve',
  comment: 'All linting checks passed. No issues found.'
});

// Review 2: Technical review
await codebolt.reviewMergeRequest.addReview(requestId, {
  agentId: 'agent_reviewer_tech',
  agentName: 'Technical Lead',
  type: 'comment',
  comment: 'Good implementation. Consider extracting the validation logic ' +
           'into a separate utility for reusability.'
});

// Review 3: Security review
await codebolt.reviewMergeRequest.addReview(requestId, {
  agentId: 'agent_reviewer_security',
  agentName: 'Security Analyst',
  type: 'approve',
  comment: 'Security review passed. No vulnerabilities detected.'
});

console.log('All reviews completed');
```

#### 5. Automated Review with Checks
```typescript
// Automated review that checks code quality
async function automatedReview(requestId: string, codeDiff: string) {
  // Run automated checks
  const lintResults = await runLinter(codeDiff);
  const securityResults = await runSecurityScan(codeDiff);
  const testResults = await runTests(codeDiff);

  let comment = '## Automated Review Results\n\n';
  let reviewType: 'approve' | 'request_changes' | 'comment' = 'approve';

  // Linting
  comment += '### Linting\n';
  if (lintResults.issues.length === 0) {
    comment += '✅ No linting issues\n\n';
  } else {
    comment += `❌ ${lintResults.issues.length} issues found:\n`;
    lintResults.issues.forEach(issue => {
      comment += `- ${issue.message}\n`;
    });
    comment += '\n';
    reviewType = 'request_changes';
  }

  // Security
  comment += '### Security\n';
  if (securityResults.vulnerabilities.length === 0) {
    comment += '✅ No security vulnerabilities\n\n';
  } else {
    comment += `❌ ${securityResults.vulnerabilities.length} vulnerabilities:\n`;
    reviewType = 'request_changes';
  }

  // Tests
  comment += '### Tests\n';
  if (testResults.passed) {
    comment += `✅ All tests passed (${testResults.count} tests)\n\n`;
  } else {
    comment += `❌ ${testResults.failures} test failures\n\n`;
    reviewType = 'request_changes';
  }

  // Add the review
  await codebolt.reviewMergeRequest.addReview(requestId, {
    agentId: 'agent_bot_reviewer',
    agentName: 'Automated Reviewer',
    type: reviewType,
    comment: comment.trim()
  });

  return reviewType;
}
```

#### 6. Detailed Code Review
```typescript
// Comprehensive code review
const result = await codebolt.reviewMergeRequest.addReview(
  'req_abc123',
  {
    agentId: 'agent_reviewer_senior',
    agentName: 'Senior Developer',
    type: 'request_changes',
    comment: `
## Code Review Feedback

### Critical Issues
1. **Memory Leak**: The event listener in \`SearchComponent\` is never removed
   - Location: src/components/Search.tsx:45
   - Fix: Add cleanup in useEffect return

2. **Race Condition**: Async state updates could cause inconsistencies
   - Location: src/hooks/useSearch.ts:78
   - Fix: Use functional state updates

### Suggestions
1. Consider using TypeScript strict mode for better type safety
2. Add error boundaries for better error handling
3. Extract magic numbers into constants
4. Add JSDoc comments for public functions

### Positive Notes
- Clean component structure
- Good use of custom hooks
- Comprehensive test coverage
    `.trim()
  }
);
```

#### 7. Conditional Approval
```typescript
// Approve with conditions
async function approveWithConditions(requestId: string, conditions: string[]) {
  const comment = `
## Approval with Conditions

This code is approved for merge with the following conditions:

${conditions.map((c, i) => `${i + 1}. ${c}`).join('\n')}

Please address these in a follow-up PR.
  `.trim();

  const result = await codebolt.reviewMergeRequest.addReview(requestId, {
    agentId: 'agent_reviewer_lead',
    agentName: 'Team Lead',
    type: 'approve',
    comment
  });

  return result;
}

// Usage
await approveWithConditions('req_123', [
  'Add unit tests for the new utility function',
  'Update documentation to reflect the new API',
  'Create a tracking ticket for performance optimization'
]);
```

#### 8. Review and Create Linked Job
```typescript
// Request changes and create a job for follow-up
async function reviewWithJob(requestId: string, task: string) {
  // Add review requesting changes
  await codebolt.reviewMergeRequest.addReview(requestId, {
    agentId: 'agent_reviewer',
    agentName: 'Reviewer',
    type: 'request_changes',
    comment: `Please address: ${task}`
  });

  // Create a job for the follow-up work
  const job = await createJob({
    title: task,
    type: 'improvement',
    relatedRequest: requestId
  });

  // Link job to request
  await codebolt.reviewMergeRequest.addLinkedJob(requestId, job.id);

  console.log('Review added and job created:', job.id);
}
```

### Common Use Cases

**Automated Approval:**
```typescript
// Auto-approve if all checks pass
async function autoApproveIfChecksPass(requestId: string) {
  const checks = await runAllChecks(requestId);

  if (checks.allPassed) {
    await codebolt.reviewMergeRequest.addReview(requestId, {
      agentId: 'agent_bot',
      agentName: 'Auto-Approver Bot',
      type: 'approve',
      comment: 'All automated checks passed. Auto-approved.'
    });

    // Update status
    await codebolt.reviewMergeRequest.updateStatus(requestId, 'approved');
  }
}
```

**Multi-Stage Review:**
```typescript
// Different reviewers for different aspects
async function multiStageReview(requestId: string) {
  // Stage 1: Automated checks
  await codebolt.reviewMergeRequest.addReview(requestId, {
    agentId: 'agent_bot',
    agentName: 'CI Bot',
    type: 'comment',
    comment: 'Build passed, tests passed'
  });

  // Stage 2: Code review
  await codebolt.reviewMergeRequest.addReview(requestId, {
    agentId: 'agent_reviewer_code',
    agentName: 'Code Reviewer',
    type: 'approve',
    comment: 'Code review passed'
  });

  // Stage 3: Security review
  await codebolt.reviewMergeRequest.addReview(requestId, {
    agentId: 'agent_reviewer_security',
    agentName: 'Security Reviewer',
    type: 'approve',
    comment: 'Security review passed'
  });
}
```

### Notes

- Multiple reviews can be added to a single request
- Review ID is auto-generated
- Review timestamp is automatically set
- Agent information is required
- Type determines the nature of the feedback
- Approvals contribute to the approval process
- Change requests typically prevent merge
- Comments are informational only
- Reviews are stored in chronological order
- All reviews are preserved even after status changes
- Can be called at any stage of the request lifecycle