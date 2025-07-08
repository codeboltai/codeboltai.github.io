---
name: diff
cbbaseinfo:
  description: Retrieves the diff of changes for a specific commit in the Git repository. Shows the differences between the specified commit and its parent, displaying what was added, modified, or deleted.
cbparameters:
  parameters:
    - name: commitHash
      typeName: string
      description: The SHA hash of the commit to retrieve the diff for (e.g., "abc123def456", "1a2b3c4d").
    - name: path
      typeName: string
      description: 'Optional. The file system path of the local Git repository. If not provided, uses the current directory.'
      optional: true
  returns:
    signatureTypeName: Promise<GitDiffResponse>
    description: A promise that resolves with a `GitDiffResponse` object containing the diff data and change statistics.
data:
  name: diff
  category: git
  link: diff.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitDiffResponse` object with the following properties:

- **`type`** (string): Always "gitDiffResponse".
- **`data`** (DiffResult | string, optional): The diff data, which can be either:
  - **DiffResult object** with properties:
    - **`files`** (array): Array of file change objects with:
      - **`file`** (string): The file path that was changed.
      - **`changes`** (number): Total number of changes in the file.
      - **`insertions`** (number): Number of lines added.
      - **`deletions`** (number): Number of lines removed.
      - **`binary`** (boolean): Whether the file is binary.
    - **`insertions`** (number): Total lines inserted across all files.
    - **`deletions`** (number): Total lines deleted across all files.
    - **`changed`** (number): Total number of files changed.
  - **string**: Raw diff output in text format.
- **`commitHash`** (string, optional): The commit hash that was analyzed.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic diff operation
const diffResult = await codebolt.git.diff('abc123def456');
console.log("Response type:", diffResult.type); // "gitDiffResponse"
console.log("Success:", diffResult.success); // true (if successful)
console.log("Commit hash:", diffResult.commitHash); // "abc123def456"

if (typeof diffResult.data === 'object') {
    console.log("Files changed:", diffResult.data.changed);
    console.log("Total insertions:", diffResult.data.insertions);
    console.log("Total deletions:", diffResult.data.deletions);
} else {
    console.log("Raw diff:", diffResult.data);
}

// Example 2: Analyze commit changes
async function analyzeCommitChanges(commitHash) {
    try {
        const diffResult = await codebolt.git.diff(commitHash);
        
        if (!diffResult.success) {
            console.error("❌ Failed to get diff:", diffResult.error);
            return false;
        }
        
        console.log(`📊 Analysis for commit ${commitHash.substring(0, 8)}:`);
        
        if (typeof diffResult.data === 'object' && diffResult.data.files) {
            const { files, insertions, deletions, changed } = diffResult.data;
            
            console.log(`📁 Files changed: ${changed}`);
            console.log(`➕ Lines added: ${insertions}`);
            console.log(`➖ Lines removed: ${deletions}`);
            console.log(`📈 Net change: ${insertions - deletions > 0 ? '+' : ''}${insertions - deletions}`);
            
            console.log("\n📝 File breakdown:");
            files.forEach(file => {
                const netChange = file.insertions - file.deletions;
                const changeIndicator = netChange > 0 ? '📈' : netChange < 0 ? '📉' : '📊';
                
                console.log(`  ${changeIndicator} ${file.file}`);
                console.log(`    +${file.insertions} -${file.deletions} (${file.changes} changes)`);
                
                if (file.binary) {
                    console.log(`    📦 Binary file`);
                }
            });
            
            return true;
        } else {
            console.log("📄 Raw diff output:");
            console.log(diffResult.data);
            return true;
        }
    } catch (error) {
        console.error("Error analyzing commit changes:", error);
        return false;
    }
}

// Example 3: Compare multiple commits
async function compareCommits(commitHashes) {
    const results = [];
    
    for (const hash of commitHashes) {
        try {
            const diffResult = await codebolt.git.diff(hash);
            
            if (diffResult.success && typeof diffResult.data === 'object') {
                results.push({
                    hash: hash.substring(0, 8),
                    files: diffResult.data.changed || 0,
                    insertions: diffResult.data.insertions || 0,
                    deletions: diffResult.data.deletions || 0,
                    netChange: (diffResult.data.insertions || 0) - (diffResult.data.deletions || 0)
                });
            }
        } catch (error) {
            console.error(`Error getting diff for ${hash}:`, error);
        }
    }
    
    console.log("📊 Commit Comparison:");
    console.log("Hash     | Files | +Lines | -Lines | Net");
    console.log("---------|-------|--------|--------|--------");
    
    results.forEach(result => {
        console.log(
            `${result.hash} | ${result.files.toString().padStart(5)} | ` +
            `${result.insertions.toString().padStart(6)} | ` +
            `${result.deletions.toString().padStart(6)} | ` +
            `${result.netChange > 0 ? '+' : ''}${result.netChange}`
        );
    });
    
    return results;
}

// Example 4: Find large commits
async function findLargeCommits(repoPath, threshold = 100) {
    try {
        // Get commit logs first
        const logsResult = await codebolt.git.logs(repoPath);
        
        if (!logsResult.success || !logsResult.data) {
            console.error("❌ Failed to get commit logs");
            return [];
        }
        
        const largeCommits = [];
        
        for (const commit of logsResult.data) {
            try {
                const diffResult = await codebolt.git.diff(commit.hash);
                
                if (diffResult.success && typeof diffResult.data === 'object') {
                    const totalChanges = (diffResult.data.insertions || 0) + (diffResult.data.deletions || 0);
                    
                    if (totalChanges >= threshold) {
                        largeCommits.push({
                            hash: commit.hash.substring(0, 8),
                            message: commit.message,
                            author: commit.author_name,
                            date: commit.date,
                            changes: totalChanges,
                            files: diffResult.data.changed || 0
                        });
                    }
                }
            } catch (error) {
                console.error(`Error analyzing commit ${commit.hash}:`, error);
            }
        }
        
        console.log(`🔍 Found ${largeCommits.length} commits with ${threshold}+ line changes:`);
        
        largeCommits
            .sort((a, b) => b.changes - a.changes)
            .forEach(commit => {
                console.log(`  📈 ${commit.hash}: ${commit.changes} changes in ${commit.files} files`);
                console.log(`     "${commit.message}" by ${commit.author}`);
                console.log(`     ${new Date(commit.date).toLocaleDateString()}`);
            });
        
        return largeCommits;
    } catch (error) {
        console.error("Error finding large commits:", error);
        return [];
    }
}

// Example 5: Diff with file filtering
async function analyzeSpecificFiles(commitHash, fileExtensions = []) {
    try {
        const diffResult = await codebolt.git.diff(commitHash);
        
        if (!diffResult.success || typeof diffResult.data !== 'object' || !diffResult.data.files) {
            console.error("❌ Failed to get diff data");
            return false;
        }
        
        let filesToAnalyze = diffResult.data.files;
        
        if (fileExtensions.length > 0) {
            filesToAnalyze = diffResult.data.files.filter(file => 
                fileExtensions.some(ext => file.file.endsWith(ext))
            );
        }
        
        console.log(`🔍 Analyzing ${filesToAnalyze.length} files in commit ${commitHash.substring(0, 8)}:`);
        
        const summary = {
            totalFiles: filesToAnalyze.length,
            totalInsertions: 0,
            totalDeletions: 0,
            binaryFiles: 0
        };
        
        filesToAnalyze.forEach(file => {
            summary.totalInsertions += file.insertions;
            summary.totalDeletions += file.deletions;
            if (file.binary) summary.binaryFiles++;
            
            console.log(`  📄 ${file.file}`);
            console.log(`     +${file.insertions} -${file.deletions} changes`);
        });
        
        console.log("\n📊 Summary:");
        console.log(`  Files: ${summary.totalFiles} (${summary.binaryFiles} binary)`);
        console.log(`  Insertions: ${summary.totalInsertions}`);
        console.log(`  Deletions: ${summary.totalDeletions}`);
        console.log(`  Net change: ${summary.totalInsertions - summary.totalDeletions}`);
        
        return summary;
    } catch (error) {
        console.error("Error analyzing specific files:", error);
        return false;
    }
}

// Example 6: Diff workflow with commit selection
async function diffWorkflow(repoPath) {
    try {
        // Get recent commits
        const logsResult = await codebolt.git.logs(repoPath);
        
        if (!logsResult.success || !logsResult.data) {
            console.error("❌ Failed to get commit logs");
            return false;
        }
        
        const recentCommits = logsResult.data.slice(0, 5);
        
        console.log("🕒 Recent commits:");
        recentCommits.forEach((commit, index) => {
            console.log(`${index + 1}. ${commit.hash.substring(0, 8)} - ${commit.message}`);
        });
        
        // Analyze each commit's diff
        for (const commit of recentCommits) {
            console.log(`\n📊 Analyzing commit ${commit.hash.substring(0, 8)}:`);
            await analyzeCommitChanges(commit.hash);
        }
        
        return true;
    } catch (error) {
        console.error("Error in diff workflow:", error);
        return false;
    }
}

// Example 7: Error handling
try {
    const diffResult = await codebolt.git.diff('abc123def456');
    
    if (diffResult.success) {
        console.log('✅ Diff retrieved successfully');
        console.log('Commit:', diffResult.commitHash);
        
        if (typeof diffResult.data === 'object') {
            console.log('Files changed:', diffResult.data.changed);
            console.log('Lines added:', diffResult.data.insertions);
            console.log('Lines removed:', diffResult.data.deletions);
        }
    } else {
        console.error('❌ Failed to get diff:', diffResult.error);
        console.error('Message:', diffResult.message);
    }
} catch (error) {
    console.error('Error retrieving diff:', error);
}

### Common Use Cases

- **Code Review**: Examine what changes were made in specific commits
- **Change Analysis**: Understand the scope and impact of commits
- **Debugging**: Find what changed when issues were introduced or fixed
- **Release Notes**: Generate change summaries for releases
- **Quality Assurance**: Review commit sizes and file changes
- **Merge Conflict Resolution**: Understand conflicting changes

### Notes

- The diff shows changes between the specified commit and its parent commit.
- The `commitHash` parameter must be a valid Git commit SHA hash.
- The response can contain either structured data (DiffResult) or raw diff text.
- Binary files are marked as such and don't show line-by-line changes.
- Large diffs may take longer to process and return extensive data.
- Use the structured data format for programmatic analysis of changes.
- The operation is read-only and doesn't modify the repository.
- Invalid commit hashes will result in an error response.