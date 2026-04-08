---
name: getThreadFileChangesSummary
cbbaseinfo:
  description: Gets a formatted summary of file changes for display in the ChangesSummaryPanel component.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to get file changes summary for.
  returns:
    signatureTypeName: "Promise<any>"
    description: A promise that resolves with a formatted summary including title, changes array, and files object.
data:
  name: getThreadFileChangesSummary
  category: thread
  link: getThreadFileChangesSummary.md
---
# getThreadFileChangesSummary

```typescript
codebolt.thread.getThreadFileChangesSummary(threadId: string): Promise<any>
```

Gets a formatted summary of file changes for display in the ChangesSummaryPanel component.
### Parameters

- **`threadId`** (string): The unique identifier of the thread to get file changes summary for.

### Returns

- **`Promise<any>`**: A promise that resolves with a formatted summary including title, changes array, and files object.

### Response Structure

```typescript
interface ThreadFileChangesSummaryResponse {
  title: string;
  changes: Array<{
    id: string;
    type: 'addition' | 'modification' | 'deletion';
    path: string;
    linesAdded?: number;
    linesRemoved?: number;
    timestamp: string;
  }>;
  files: {
    [key: string]: {
      status: string;
      changes: number;
      additions: number;
      deletions: number;
    };
  };
  statistics: {
    totalFiles: number;
    totalChanges: number;
    totalAdditions: number;
    totalDeletions: number;
  };
}
```

### Examples

#### Example 1: Get File Changes Summary

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const threadId = 'thread_abc123';

const summary = await codebolt.thread.getThreadFileChangesSummary(threadId);

console.log('Summary Title:', summary.title);
console.log('Total Files:', summary.statistics.totalFiles);
console.log('Total Changes:', summary.statistics.totalChanges);
console.log('Additions:', summary.statistics.totalAdditions);
console.log('Deletions:', summary.statistics.totalDeletions);
```

#### Example 2: Display Changes Summary Panel

```typescript
const threadId = 'thread_def456';

const summary = await codebolt.thread.getThreadFileChangesSummary(threadId);

function displayChangesSummary(summary) {
  console.log('='.repeat(80));
  console.log(summary.title);
  console.log('='.repeat(80));

  // Display statistics
  const stats = summary.statistics;
  console.log(`\n📊 Statistics:`);
  console.log(`   Total Files: ${stats.totalFiles}`);
  console.log(`   Total Changes: ${stats.totalChanges}`);
  console.log(`   Additions: +${stats.totalAdditions}`);
  console.log(`   Deletions: -${stats.totalDeletions}`);

  // Display changes by category
  console.log(`\n📝 Changes (${summary.changes.length} total):\n`);

  const additions = summary.changes.filter(c => c.type === 'addition');
  const modifications = summary.changes.filter(c => c.type === 'modification');
  const deletions = summary.changes.filter(c => c.type === 'deletion');

  if (additions.length > 0) {
    console.log(`➕ Additions (${additions.length}):`);
    additions.forEach(change => {
      console.log(`   + ${change.path}`);
    });
  }

  if (modifications.length > 0) {
    console.log(`\n✏️  Modifications (${modifications.length}):`);
    modifications.forEach(change => {
      console.log(`   ~ ${change.path} (+${change.linesAdded}, -${change.linesRemoved})`);
    });
  }

  if (deletions.length > 0) {
    console.log(`\n❌ Deletions (${deletions.length}):`);
    deletions.forEach(change => {
      console.log(`   - ${change.path}`);
    });
  }

  console.log('\n' + '='.repeat(80));
}

displayChangesSummary(summary);
```

#### Example 3: Display File Statistics

```typescript
const threadId = 'thread_ghi789';

const summary = await codebolt.thread.getThreadFileChangesSummary(threadId);

console.log('File Statistics:');
console.log('================');

Object.entries(summary.files).forEach(([filePath, stats]) => {
  const icon = stats.status === 'added' ? '➕' :
               stats.status === 'deleted' ? '❌' : '✏️';

  console.log(`\n${icon} ${filePath}`);
  console.log(`   Status: ${stats.status}`);
  console.log(`   Changes: ${stats.changes}`);
  console.log(`   Lines: +${stats.additions} -${stats.deletions}`);
});
```

#### Example 4: Generate HTML Summary Panel

```typescript
const threadId = 'thread_jkl012';

const summary = await codebolt.thread.getThreadFileChangesSummary(threadId);

function generateHTMLSummary(summary) {
  const stats = summary.statistics;

  let html = `
    <div class="changes-summary-panel">
      <h2>${summary.title}</h2>

      <div class="statistics">
        <div class="stat-item">
          <span class="stat-label">Total Files:</span>
          <span class="stat-value">${stats.totalFiles}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Total Changes:</span>
          <span class="stat-value">${stats.totalChanges}</span>
        </div>
        <div class="stat-item additions">
          <span class="stat-label">Additions:</span>
          <span class="stat-value">+${stats.totalAdditions}</span>
        </div>
        <div class="stat-item deletions">
          <span class="stat-label">Deletions:</span>
          <span class="stat-value">-${stats.totalDeletions}</span>
        </div>
      </div>

      <div class="changes-list">
        <h3>Changes</h3>
  `;

  summary.changes.forEach(change => {
    const icon = change.type === 'addition' ? '➕' :
                 change.type === 'deletion' ? '❌' : '✏️';

    html += `
      <div class="change-item ${change.type}">
        <span class="change-icon">${icon}</span>
        <span class="change-path">${change.path}</span>
        ${change.linesAdded || change.linesRemoved ? `
          <span class="change-lines">
            (+${change.linesAdded || 0}, -${change.linesRemoved || 0})
          </span>
        ` : ''}
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  return html;
}

const html = generateHTMLSummary(summary);
console.log(html);
```

#### Example 5: Find Most Changed Files

```typescript
const threadId = 'thread_mno345';

const summary = await codebolt.thread.getThreadFileChangesSummary(threadId);

// Find files with the most changes
const sortedFiles = Object.entries(summary.files)
  .map(([path, stats]) => ({
    path,
    ...stats,
    totalImpact: stats.additions + stats.deletions
  }))
  .sort((a, b) => b.totalImpact - a.totalImpact)
  .slice(0, 10);

console.log('Top 10 Most Changed Files:');
console.log('=========================');

sortedFiles.forEach((file, index) => {
  console.log(`${index + 1}. ${file.path}`);
  console.log(`   Changes: ${file.changes}`);
  console.log(`   Impact: +${file.additions} -${file.deletions} = ${file.totalImpact} lines`);
  console.log('');
});
```

#### Example 6: Compare Summaries Across Threads

```typescript
const threadIds = ['thread_001', 'thread_002', 'thread_003'];

const summaries = await Promise.all(
  threadIds.map(async (threadId) => {
    const summary = await codebolt.thread.getThreadFileChangesSummary(threadId);
    return { threadId, summary };
  })
);

console.log('Comparison of File Changes Across Threads');
console.log('='.repeat(80));

summaries.forEach(({ threadId, summary }) => {
  const stats = summary.statistics;
  console.log(`\n${threadId}:`);
  console.log(`  Files: ${stats.totalFiles}`);
  console.log(`  Changes: ${stats.totalChanges}`);
  console.log(`  Lines: +${stats.totalAdditions} -${stats.totalDeletions}`);

  // Calculate change density
  const density = stats.totalChanges / stats.totalFiles;
  console.log(`  Density: ${density.toFixed(2)} changes per file`);
});

// Find most active thread
const mostActive = summaries.reduce((max, current) =>
  current.summary.statistics.totalChanges > max.summary.statistics.totalChanges
    ? current
    : max
);

console.log(`\n🏆 Most Active Thread: ${mostActive.threadId}`);
console.log(`   Total Changes: ${mostActive.summary.statistics.totalChanges}`);
```

#### Example 7: Export Summary to CSV

```typescript
const threadId = 'thread_pqr678';

const summary = await codebolt.thread.getThreadFileChangesSummary(threadId);

function exportToCSV(summary) {
  let csv = 'Type,Path,Lines Added,Lines Removed,Timestamp\n';

  summary.changes.forEach(change => {
    csv += [
      change.type,
      change.path,
      change.linesAdded || 0,
      change.linesRemoved || 0,
      new Date(change.timestamp).toISOString()
    ].join(',') + '\n';
  });

  return csv;
}

const csv = exportToCSV(summary);
console.log(csv);

// Could save to file:
// await codebolt.fs.writeFile('file-changes-summary.csv', csv);
```

### Common Use Cases

- **Dashboard Display**: Show file changes in UI panels
- **Quick Overview**: Get high-level summary of changes
- **Comparison**: Compare changes across multiple threads
- **Reporting**: Generate formatted reports of file activity
- **Analytics**: Analyze code change patterns and trends
- **UI Components**: Feed data to ChangesSummaryPanel component

### Notes

- Returns data in a format optimized for display in UI components
- The `title` field provides a human-readable summary title
- `changes` array contains individual change records with types
- `files` object provides per-file statistics
- `statistics` object contains aggregated totals
- Change types are: 'addition', 'modification', 'deletion'
- Useful for building summary panels and dashboards
- More concise than `getThreadFileChanges` for overview purposes
- Designed for quick visual scanning of changes
- File paths are relative to project root