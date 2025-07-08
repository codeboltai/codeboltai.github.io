---
name: logs
cbbaseinfo:
  description: Retrieves the commit logs for the Git repository. Shows the commit history with details like hash, message, author, date, and other metadata for tracking project evolution.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository (e.g., '.', '/path/to/repo', './my-project').
  returns:
    signatureTypeName: Promise<GitLogsResponse>
    description: A promise that resolves with a `GitLogsResponse` object containing the commit history and log data.
data:
  name: logs
  category: git
  link: logs.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitLogsResponse` object with the following properties:

- **`type`** (string): Always "gitLogsResponse".
- **`data`** (CommitSummary[], optional): Array of commit objects with the following properties:
  - **`hash`** (string): The SHA hash of the commit.
  - **`date`** (string): The commit date and time.
  - **`message`** (string): The commit message.
  - **`refs`** (string): References like branch names or tags.
  - **`body`** (string): The full commit message body.
  - **`author_name`** (string): The name of the commit author.
  - **`author_email`** (string): The email of the commit author.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic logs retrieval
const logsResult = await codebolt.git.logs('/path/to/repo');
console.log("Response type:", logsResult.type); // "gitLogsResponse"
console.log("Success:", logsResult.success); // true (if successful)
console.log("Number of commits:", logsResult.data?.length || 0);

if (logsResult.data && logsResult.data.length > 0) {
    const latestCommit = logsResult.data[0];
    console.log("Latest commit hash:", latestCommit.hash);
    console.log("Latest commit message:", latestCommit.message);
    console.log("Author:", latestCommit.author_name);
    console.log("Date:", latestCommit.date);
}

// Example 2: Display commit history
async function displayCommitHistory(repoPath) {
    try {
        const logsResult = await codebolt.git.logs(repoPath);
        
        if (!logsResult.success || !logsResult.data) {
            console.error("❌ Failed to get commit logs:", logsResult.error);
            return false;
        }
        
        console.log(`📜 Commit History (${logsResult.data.length} commits):`);
        console.log("=" .repeat(60));
        
        logsResult.data.forEach((commit, index) => {
            console.log(`${index + 1}. ${commit.hash.substring(0, 8)} - ${commit.message}`);
            console.log(`   Author: ${commit.author_name} <${commit.author_email}>`);
            console.log(`   Date: ${new Date(commit.date).toLocaleString()}`);
            if (commit.refs) {
                console.log(`   Refs: ${commit.refs}`);
            }
            console.log("");
        });
        
        return true;
    } catch (error) {
        console.error("Error displaying commit history:", error);
        return false;
    }
}

// Example 3: Find commits by author
async function findCommitsByAuthor(repoPath, authorName) {
    try {
        const logsResult = await codebolt.git.logs(repoPath);
        
        if (!logsResult.success || !logsResult.data) {
            console.error("❌ Failed to get commit logs");
            return [];
        }
        
        const authorCommits = logsResult.data.filter(commit => 
            commit.author_name.toLowerCase().includes(authorName.toLowerCase())
        );
        
        console.log(`👤 Found ${authorCommits.length} commits by ${authorName}:`);
        
        authorCommits.forEach(commit => {
            console.log(`  • ${commit.hash.substring(0, 8)}: ${commit.message}`);
            console.log(`    ${new Date(commit.date).toLocaleDateString()}`);
        });
        
        return authorCommits;
    } catch (error) {
        console.error("Error finding commits by author:", error);
        return [];
    }
}

// Example 4: Analyze commit patterns
async function analyzeCommitPatterns(repoPath) {
    try {
        const logsResult = await codebolt.git.logs(repoPath);
        
        if (!logsResult.success || !logsResult.data) {
            console.error("❌ Failed to get commit logs");
            return false;
        }
        
        const commits = logsResult.data;
        
        // Group by author
        const authorStats = {};
        commits.forEach(commit => {
            if (!authorStats[commit.author_name]) {
                authorStats[commit.author_name] = 0;
            }
            authorStats[commit.author_name]++;
        });
        
        // Group by month
        const monthStats = {};
        commits.forEach(commit => {
            const month = new Date(commit.date).toISOString().substring(0, 7);
            if (!monthStats[month]) {
                monthStats[month] = 0;
            }
            monthStats[month]++;
        });
        
        console.log("📊 Commit Analysis:");
        console.log("\n👥 Commits by Author:");
        Object.entries(authorStats)
            .sort((a, b) => b[1] - a[1])
            .forEach(([author, count]) => {
                console.log(`  ${author}: ${count} commits`);
            });
        
        console.log("\n📅 Commits by Month:");
        Object.entries(monthStats)
            .sort()
            .forEach(([month, count]) => {
                console.log(`  ${month}: ${count} commits`);
            });
        
        return true;
    } catch (error) {
        console.error("Error analyzing commit patterns:", error);
        return false;
    }
}

// Example 5: Recent commits summary
async function getRecentCommits(repoPath, count = 5) {
    try {
        const logsResult = await codebolt.git.logs(repoPath);
        
        if (!logsResult.success || !logsResult.data) {
            console.error("❌ Failed to get commit logs");
            return [];
        }
        
        const recentCommits = logsResult.data.slice(0, count);
        
        console.log(`🕒 Last ${count} commits:`);
        
        recentCommits.forEach((commit, index) => {
            const timeAgo = getTimeAgo(new Date(commit.date));
            console.log(`${index + 1}. ${commit.message}`);
            console.log(`   ${commit.hash.substring(0, 8)} • ${commit.author_name} • ${timeAgo}`);
        });
        
        return recentCommits;
    } catch (error) {
        console.error("Error getting recent commits:", error);
        return [];
    }
}

function getTimeAgo(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    
    if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    return 'Just now';
}

// Example 6: Search commits by message
async function searchCommitsByMessage(repoPath, searchTerm) {
    try {
        const logsResult = await codebolt.git.logs(repoPath);
        
        if (!logsResult.success || !logsResult.data) {
            console.error("❌ Failed to get commit logs");
            return [];
        }
        
        const matchingCommits = logsResult.data.filter(commit =>
            commit.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
            commit.body.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        console.log(`🔍 Found ${matchingCommits.length} commits matching "${searchTerm}":`);
        
        matchingCommits.forEach(commit => {
            console.log(`  • ${commit.hash.substring(0, 8)}: ${commit.message}`);
            console.log(`    ${commit.author_name} • ${new Date(commit.date).toLocaleDateString()}`);
        });
        
        return matchingCommits;
    } catch (error) {
        console.error("Error searching commits:", error);
        return [];
    }
}

// Example 7: Complete workflow with logs
async function completeGitWorkflowWithLogs(repoPath) {
    try {
        // Create and commit some changes
        await codebolt.fs.createFile('README.md', '# Git Test Repository\n\nThis is a test repository.', repoPath);
        await codebolt.git.addAll();
        await codebolt.git.commit('Initial commit from CodeboltJS test');
        
        // Get initial logs
        const initialLogs = await codebolt.git.logs(repoPath);
        console.log("✅ Initial commit logged");
        
        // Create branch and more commits
        await codebolt.git.branch('test-branch');
        await codebolt.git.checkout('test-branch');
        
        await codebolt.fs.createFile('test-file.txt', 'This file was created in the test branch.', repoPath);
        await codebolt.git.addAll();
        await codebolt.git.commit('Add test file in test branch');
        
        // Check branch logs
        const branchLogs = await codebolt.git.logs(repoPath);
        console.log(`📝 Branch has ${branchLogs.data?.length || 0} commits`);
        
        // Switch back to main
        await codebolt.git.checkout('main');
        const mainLogs = await codebolt.git.logs(repoPath);
        console.log(`📝 Main branch has ${mainLogs.data?.length || 0} commits`);
        
        return true;
    } catch (error) {
        console.error("Error in complete workflow:", error);
        return false;
    }
}

// Example 8: Error handling
try {
    const logsResult = await codebolt.git.logs('/path/to/repo');
    
    if (logsResult.success) {
        console.log('✅ Logs retrieved successfully');
        console.log('Number of commits:', logsResult.data?.length || 0);
        
        if (logsResult.data && logsResult.data.length > 0) {
            console.log('Latest commit:', logsResult.data[0].message);
        }
    } else {
        console.error('❌ Failed to get logs:', logsResult.error);
        console.error('Message:', logsResult.message);
    }
} catch (error) {
    console.error('Error retrieving logs:', error);
}

### Common Use Cases

- **Project History**: Review the evolution of the project over time
- **Author Tracking**: See who contributed what and when
- **Change Analysis**: Understand what changes were made in specific commits
- **Debugging**: Find when specific issues were introduced or fixed
- **Release Planning**: Review commits for release notes and changelogs
- **Code Review**: Examine commit history for code quality and patterns

### Notes

- The logs show commits in reverse chronological order (newest first).
- The `path` parameter specifies which repository to examine.
- Each commit includes complete metadata: hash, author, date, message, and references.
- The `hash` can be used with other Git commands like `diff` or `checkout`.
- The `refs` field shows branch names, tags, or other Git references.
- Use the commit data to analyze project activity and contributor patterns.
- The operation is read-only and doesn't modify the repository.
- Large repositories may have extensive commit histories.
