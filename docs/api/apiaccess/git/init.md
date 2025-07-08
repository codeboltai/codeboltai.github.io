---
name: init
cbbaseinfo:
  description: Initializes a new Git repository. Can be used in the current directory or at a specified path to create a new Git repository for version control.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path where the Git repository should be initialized (e.g., '.', '/path/to/project', './my-project').
  returns:
    signatureTypeName: Promise<GitInitResponse>
    description: A promise that resolves with a `GitInitResponse` object containing the response type and initialization metadata.
data:
  name: init
  category: git
  link: init.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitInitResponse` object with the following properties:

- **`type`** (string): Always "gitInitResponse".
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Initialize repository in a specific directory
const initResult = await codebolt.git.init('/path/to/new/repo');
console.log("Response type:", initResult.type); // "gitInitResponse"
console.log("Success:", initResult.success); // true (if successful)
console.log("Message:", initResult.message); // "Initialized empty Git repository..."

// Example 2: Initialize repository in current directory
const currentDirInit = await codebolt.git.init('.');
console.log("✅ Git init result:", currentDirInit.success);

// Example 3: Initialize repository for a new project
const projectPath = './my-new-project';
const projectInit = await codebolt.git.init(projectPath);
if (projectInit.success) {
    console.log(`✅ Git repository initialized at: ${projectPath}`);
    console.log("Initialization message:", projectInit.message);
} else {
    console.error("❌ Failed to initialize repository:", projectInit.error);
}

// Example 4: Complete Git setup workflow
try {
    // 1. Initialize repository
    const initResult = await codebolt.git.init('./my-project');
    
    if (initResult.success) {
        console.log('✅ Repository initialized:', initResult.message);
        
        // 2. Check initial status
        const statusResult = await codebolt.git.status();
        console.log('Initial status:', statusResult.data);
        
        // 3. Create initial file
        await codebolt.fs.createFile('README.md', '# My Project\n\nInitial project setup.', './my-project');
        
        // 4. Check status after file creation
        const statusAfterFile = await codebolt.git.status();
        console.log('Files to track:', statusAfterFile.data?.not_added);
        
        console.log('🎉 Git repository setup complete!');
    } else {
        console.error('❌ Repository initialization failed:', initResult.error);
    }
} catch (error) {
    console.error('Error in Git setup workflow:', error);
}

// Example 5: Initialize multiple repositories
const repositories = [
    './frontend-app',
    './backend-api', 
    './mobile-app'
];

for (const repoPath of repositories) {
    const result = await codebolt.git.init(repoPath);
    console.log(`${repoPath}: ${result.success ? 'initialized' : 'failed'}`);
    if (result.message) {
        console.log(`  Message: ${result.message}`);
    }
}

// Example 6: Error handling
try {
    const invalidPathInit = await codebolt.git.init('/invalid/readonly/path');
    
    if (invalidPathInit.success) {
        console.log('✅ Repository initialized successfully');
    } else {
        console.error('❌ Initialization failed:', invalidPathInit.error);
        console.error('Message:', invalidPathInit.message);
    }
} catch (error) {
    console.error('Error initializing repository:', error);
}
```

### Common Use Cases

- **New Project Setup**: Initialize Git for new software projects
- **Converting Existing Projects**: Add version control to existing codebases
- **Repository Creation**: Create repositories for different project components
- **Development Environment Setup**: Initialize Git as part of development workflows
- **Backup and Versioning**: Start tracking changes in any directory

### Notes

- The function creates a new `.git` directory in the specified path containing Git metadata.
- If a Git repository already exists at the path, the operation may fail or reinitialize.
- The `path` parameter should be a valid directory path where you have write permissions.
- After initialization, you can use other Git commands like `add`, `commit`, `status`, etc.
- The repository starts empty with no commits - you'll need to add and commit files.
- This is typically the first Git command you run when starting a new project.
- The response includes confirmation that the repository was successfully created.
- If the operation fails, check the `error` property for details about what went wrong.