---
name: getThreadFileChanges
cbbaseinfo:
  description: Retrieves file changes associated with a specific thread, including modifications, additions, and deletions.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to get file changes for.
  returns:
    signatureTypeName: "Promise<any>"
    description: A promise that resolves with detailed file change information.
data:
  name: getThreadFileChanges
  category: thread
  link: getThreadFileChanges.md
---
# getThreadFileChanges

```typescript
codebolt.thread.getThreadFileChanges(threadId: string): Promise<any>
```

Retrieves file changes associated with a specific thread, including modifications, additions, and deletions.
### Parameters

- **`threadId`** (string): The unique identifier of the thread to get file changes for.

### Returns

- **`Promise<any>`**: A promise that resolves with detailed file change information.

### Response Structure

```typescript
interface ThreadFileChangesResponse {
  threadId: string;
  changes: Array<{
    filePath: string;
    action: 'created' | 'modified' | 'deleted';
    timestamp: string;
    linesAdded?: number;
    linesRemoved?: number;
    diff?: string;
  }>;
  summary: {
    totalChanges: number;
    filesCreated: number;
    filesModified: number;
    filesDeleted: number;
    totalLinesAdded: number;
    totalLinesRemoved: number;
  };
}
```

### Examples

#### Example 1: Get File Changes for a Thread

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const threadId = 'thread_abc123';

const result = await codebolt.thread.getThreadFileChanges(threadId);

console.log('Thread file changes:');
console.log('Total changes:', result.summary.totalChanges);

result.changes.forEach(change => {
  console.log(`- ${change.action}: ${change.filePath}`);
  if (change.linesAdded) console.log(`  Lines added: ${change.linesAdded}`);
  if (change.linesRemoved) console.log(`  Lines removed: ${change.linesRemoved}`);
});
```

#### Example 2: Display Detailed File Changes

```typescript
const threadId = 'thread_def456';

const result = await codebolt.thread.getThreadFileChanges(threadId);

function displayFileChanges(changes) {
  console.log('='.repeat(70));
  console.log('File Changes Summary');
  console.log('='.repeat(70));

  const { summary } = result;

  console.log(`Total Changes: ${summary.totalChanges}`);
  console.log(`Files Created: ${summary.filesCreated}`);
  console.log(`Files Modified: ${summary.filesModified}`);
  console.log(`Files Deleted: ${summary.filesDeleted}`);
  console.log(`Lines Added: ${summary.totalLinesAdded}`);
  console.log(`Lines Removed: ${summary.totalLinesRemoved}`);

  console.log('\nDetailed Changes:');
  console.log('='.repeat(70));

  changes.forEach((change, index) => {
    console.log(`\n${index + 1}. ${change.action.toUpperCase()}: ${change.filePath}`);
    console.log(`   Time: ${new Date(change.timestamp).toLocaleString()}`);

    if (change.action === 'modified') {
      console.log(`   +${change.linesAdded} -${change.linesRemoved} lines`);
    }

    if (change.diff) {
      console.log('\n   Diff preview:');
      const diffLines = change.diff.split('\n').slice(0, 10);
      diffLines.forEach(line => {
        console.log(`   ${line}`);
      });
      if (change.diff.split('\n').length > 10) {
        console.log('   ... (truncated)');
      }
    }
  });

  console.log('\n' + '='.repeat(70));
}

displayFileChanges(result.changes);
```

#### Example 3: Filter Changes by Type

```typescript
const threadId = 'thread_ghi789';

const result = await codebolt.thread.getThreadFileChanges(threadId);

// Group changes by type
const changesByType = {
  created: result.changes.filter(c => c.action === 'created'),
  modified: result.changes.filter(c => c.action === 'modified'),
  deleted: result.changes.filter(c => c.action === 'deleted')
};

console.log('New Files:');
changesByType.created.forEach(change => {
  console.log(`  + ${change.filePath}`);
});

console.log('\nModified Files:');
changesByType.modified.forEach(change => {
  console.log(`  ~ ${change.filePath} (+${change.linesAdded}, -${change.linesRemoved})`);
});

console.log('\nDeleted Files:');
changesByType.deleted.forEach(change => {
  console.log(`  - ${change.filePath}`);
});
```

#### Example 4: Generate File Change Report

```typescript
const threadId = 'thread_jkl012';

const result = await codebolt.thread.getThreadFileChanges(threadId);

function generateChangeReport(result) {
  const report = {
    threadId: result.threadId,
    timestamp: new Date().toISOString(),
    summary: result.summary,
    filesByExtension: {},
    largestChanges: []
  };

  // Analyze file extensions
  result.changes.forEach(change => {
    const ext = change.filePath.split('.').pop() || 'no-extension';
    report.filesByExtension[ext] = (report.filesByExtension[ext] || 0) + 1;
  });

  // Find largest changes
  report.largestChanges = result.changes
    .filter(c => c.action === 'modified')
    .sort((a, b) => (b.linesAdded || 0) - (a.linesAdded || 0))
    .slice(0, 5);

  return report;
}

const report = generateChangeReport(result);

console.log('File Change Report');
console.log('==================');
console.log(JSON.stringify(report, null, 2));
```

#### Example 5: Compare File Changes Across Threads

```typescript
const threadIds = ['thread_001', 'thread_002', 'thread_003'];

const results = await Promise.all(
  threadIds.map(async (threadId) => {
    const changes = await codebolt.thread.getThreadFileChanges(threadId);
    return { threadId, changes };
  })
);

console.log('Comparison of file changes across threads:');
console.log('='.repeat(70));

results.forEach(({ threadId, changes }) => {
  console.log(`\n${threadId}:`);
  console.log(`  Total changes: ${changes.summary.totalChanges}`);
  console.log(`  Lines added: ${changes.summary.totalLinesAdded}`);
  console.log(`  Lines removed: ${changes.summary.totalLinesRemoved}`);

  // Show top 3 most changed files
  const topChanges = changes.changes
    .filter(c => c.action === 'modified')
    .sort((a, b) => (b.linesAdded || 0) + (b.linesRemoved || 0) - (a.linesAdded || 0) - (a.linesRemoved || 0))
    .slice(0, 3);

  console.log('  Most changed files:');
  topChanges.forEach(change => {
    console.log(`    - ${change.filePath} (${change.linesAdded}+/${change.linesRemoved}-)`);
  });
});
```

#### Example 6: Export File Changes to Markdown

```typescript
const threadId = 'thread_mno345';

const result = await codebolt.thread.getThreadFileChanges(threadId);

function exportToMarkdown(result) {
  let markdown = `# File Changes for Thread ${result.threadId}\n\n`;

  // Summary section
  markdown += '## Summary\n\n';
  markdown += `- **Total Changes**: ${result.summary.totalChanges}\n`;
  markdown += `- **Files Created**: ${result.summary.filesCreated}\n`;
  markdown += `- **Files Modified**: ${result.summary.filesModified}\n`;
  markdown += `- **Files Deleted**: ${result.summary.filesDeleted}\n`;
  markdown += `- **Lines Added**: ${result.summary.totalLinesAdded}\n`;
  markdown += `- **Lines Removed**: ${result.summary.totalLinesRemoved}\n\n`;

  // Detailed changes
  markdown += '## Detailed Changes\n\n';

  result.changes.forEach((change, index) => {
    const emoji = change.action === 'created' ? '➕' :
                 change.action === 'deleted' ? '❌' : '✏️';

    markdown += `### ${emoji} ${index + 1}. ${change.action.toUpperCase()}: ${change.filePath}\n\n`;
    markdown += `**Timestamp**: ${new Date(change.timestamp).toLocaleString()}\n\n`;

    if (change.action === 'modified') {
      markdown += `**Lines**: +${change.linesAdded} / -${change.linesRemoved}\n\n`;
    }

    if (change.diff) {
      markdown += '**Diff**:\n\n```\n' + change.diff + '\n```\n\n';
    }
  });

  return markdown;
}

const markdown = exportToMarkdown(result);
console.log(markdown);

// Could save to file:
// await codebolt.fs.writeFile('file-changes.md', markdown);
```

### Common Use Cases

- **Code Review**: Review all changes made during a thread
- **Impact Analysis**: Understand the scope of changes
- **Documentation**: Generate change documentation
- **Comparison**: Compare changes across multiple threads
- **Audit Trail**: Track file modifications over time
- **Reporting**: Generate reports on development activity

### Notes

- Returns all file changes associated with the thread
- Changes include creations, modifications, and deletions
- Line counts are provided for modifications
- Diff information may be available for detailed changes
- Summary statistics provide quick overview
- Useful for understanding thread impact
- Can be used for code review and audit purposes
- Large numbers of changes may require pagination in future versions
- File paths are relative to project root
