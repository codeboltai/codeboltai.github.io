---
cbapicategory:
  - name: getProjectSettings
    link: /docs/api/apiaccess/project/getProjectSettings
    description: Placeholder for a method to get project settings.
  - name: getProjectPath
    link: /docs/api/apiaccess/project/getProjectPath
    description: Retrieves the path of the current project.
  - name: getRepoMap
    link: /docs/api/apiaccess/project/getRepoMap
    description: Retrieves the repository map for the current project.
  - name: runProject
    link: /docs/api/apiaccess/project/runProject
    description: Runs the current project.
  - name: getEditorFileStatus
    link: /docs/api/apiaccess/project/getEditorFileStatus
    description: Retrieves the current status of files in the editor.

---
# project
<CBAPICategory />

## Overview

The Project module provides comprehensive project management capabilities including retrieving project settings, paths, repository structure, running projects, and monitoring editor file status.

## Quick Start

```javascript
import codebolt from '@codebolt/codeboltjs';

// Get project information
const pathInfo = await codebolt.project.getProjectPath();
console.log(`Current project: ${pathInfo.projectName}`);
console.log(`Location: ${pathInfo.path}`);

// Get project settings
const settings = await codebolt.project.getProjectSettings();
console.log(`User: ${settings.projectSettings?.user_username}`);

// Run the project
codebolt.project.runProject();
```

## Common Workflows

### 1. Project Initialization Workflow

```javascript
async function initializeProject() {
    console.log('🚀 Initializing project...');

    // Get project path
    const pathInfo = await codebolt.project.getProjectPath();

    if (!pathInfo.success) {
        throw new Error('No project is currently open');
    }

    console.log(`📂 Project: ${pathInfo.projectName}`);
    console.log(`📍 Path: ${pathInfo.path}`);

    // Get project settings
    const settings = await codebolt.project.getProjectSettings();

    if (settings.success) {
        console.log(`👤 User: ${settings.projectSettings?.user_username}`);
        console.log(`🏢 Workspace: ${settings.projectSettings?.workspace_name}`);
    }

    // Get repository map
    const repoMap = await codebolt.project.getRepoMap({});

    if (repoMap.success) {
        console.log(`📊 Repository structure retrieved`);
    }

    return {
        path: pathInfo.path,
        name: pathInfo.projectName,
        settings: settings.projectSettings,
        repoMap: repoMap.repoMap
    };
}

initializeProject();
```

### 2. Project Validation

```javascript
async function validateProjectSetup() {
    const validations = [];

    // Check project path
    const pathInfo = await codebolt.project.getProjectPath();
    validations.push({
        check: 'Project Path',
        valid: pathInfo.success && !!pathInfo.path,
        details: pathInfo
    });

    // Check project settings
    const settings = await codebolt.project.getProjectSettings();
    const hasRequiredSettings = settings.projectSettings &&
        settings.projectSettings.user_userId &&
        settings.projectSettings.workspace_id;

    validations.push({
        check: 'Project Settings',
        valid: hasRequiredSettings,
        details: settings
    });

    // Check repository map
    const repoMap = await codebolt.project.getRepoMap({});
    validations.push({
        check: 'Repository Map',
        valid: repoMap.success && !!repoMap.repoMap,
        details: repoMap
    });

    const allValid = validations.every(v => v.valid);

    console.log('Project Validation Results:');
    validations.forEach(v => {
        console.log(`${v.valid ? '✅' : '❌'} ${v.check}`);
    });

    return {
        valid: allValid,
        validations
    };
}
```

### 3. Project Execution with Monitoring

```javascript
class ProjectRunner {
    async run() {
        console.log('🔄 Preparing to run project...');

        // Validate project setup
        const pathInfo = await codebolt.project.getProjectPath();

        if (!pathInfo.success) {
            throw new Error('Cannot run: No project open');
        }

        console.log(`📂 Project: ${pathInfo.projectName}`);

        // Check editor status
        const editorStatus = await codebolt.project.getEditorFileStatus();

        if (editorStatus.success) {
            console.log('📝 Editor files:', editorStatus.editorStatus);
        }

        // Run project
        console.log('🚀 Starting project execution...');
        codebolt.project.runProject();

        console.log('✅ Project run command sent');
        console.log('💡 Monitor terminal for build output');
    }

    async runWithValidation() {
        const validation = await this.validate();

        if (!validation.valid) {
            console.error('❌ Project validation failed:');
            validation.errors.forEach(e => console.error(`  - ${e}`));
            return false;
        }

        await this.run();
        return true;
    }

    async validate() {
        const errors = [];

        const pathInfo = await codebolt.project.getProjectPath();
        if (!pathInfo.success) {
            errors.push('No project path available');
        }

        const settings = await codebolt.project.getProjectSettings();
        if (!settings.success) {
            errors.push('No project settings available');
        }

        return {
            valid: errors.length === 0,
            errors
        };
    }
}

// Usage
const runner = new ProjectRunner();
await runner.runWithValidation();
```

### 4. Project Information Aggregator

```javascript
async function getProjectInfo() {
    const [pathInfo, settings, editorStatus, repoMap] = await Promise.all([
        codebolt.project.getProjectPath(),
        codebolt.project.getProjectSettings(),
        codebolt.project.getEditorFileStatus(),
        codebolt.project.getRepoMap({})
    ]);

    return {
        path: {
            name: pathInfo.projectName,
            location: pathInfo.path,
            available: pathInfo.success
        },
        settings: {
            user: settings.projectSettings?.user_username,
            workspace: settings.projectSettings?.workspace_name,
            profile: settings.projectSettings?.userprofile_profile_type,
            available: settings.success
        },
        editor: {
            status: editorStatus.editorStatus,
            available: editorStatus.success
        },
        repository: {
            map: repoMap.repoMap,
            available: repoMap.success
        },
        timestamp: new Date().toISOString()
    };
}

// Usage
const info = await getProjectInfo();
console.log('Project Information:', info);
```

## Best Practices

### Always Validate Before Operations

```javascript
async function safeProjectOperation(operation) {
    const pathInfo = await codebolt.project.getProjectPath();

    if (!pathInfo.success) {
        console.error('No project available');
        return false;
    }

    const settings = await codebolt.project.getProjectSettings();

    if (!settings.success) {
        console.error('No project settings available');
        return false;
    }

    // Perform operation
    return await operation();
}

// Usage
await safeProjectOperation(async () => {
    codebolt.project.runProject();
});
```

### Handle Editor State

```javascript
async function runWithEditorCheck() {
    const editorStatus = await codebolt.project.getEditorFileStatus();

    if (!editorStatus.success) {
        console.warn('Editor status not available, proceeding anyway');
    } else if (editorStatus.editorStatus?.includes('unsaved')) {
        console.warn('⚠️ You have unsaved changes!');
        const shouldContinue = await promptUser('Continue anyway?');

        if (!shouldContinue) {
            return false;
        }
    }

    codebolt.project.runProject();
    return true;
}
```

## Integration Examples

### With RAG Module

```javascript
async function setupProjectKnowledgeBase() {
    const pathInfo = await codebolt.project.getProjectPath();

    if (!pathInfo.success) {
        throw new Error('No project open');
    }

    // Initialize RAG
    await codebolt.rag.init();

    // Index project documentation
    const docFiles = [
        `${pathInfo.path}/README.md`,
        `${pathInfo.path}/docs`,
        `${pathInfo.path}/CONTRIBUTING.md`
    ];

    for (const file of docFiles) {
        try {
            await codebolt.rag.add_file(file, file);
            console.log(`✅ Indexed: ${file}`);
        } catch (error) {
            console.log(`Skipping ${file}`);
        }
    }
}
```

### With File System Module

```javascript
async function analyzeProjectStructure() {
    const pathInfo = await codebolt.project.getProjectPath();

    if (!pathInfo.success) {
        throw new Error('No project open');
    }

    // Get repo map
    const repoMap = await codebolt.project.getRepoMap({});

    // List files in project
    const files = await codebolt.fs.listFiles(pathInfo.path);

    return {
        path: pathInfo.path,
        name: pathInfo.projectName,
        structure: repoMap.repoMap,
        fileCount: files.length,
        analyzedAt: new Date().toISOString()
    };
}
```

## Common Pitfalls

### Pitfall 1: Not Checking Project Availability

```javascript
// ❌ Wrong - assumes project is open
codebolt.project.runProject();

// ✅ Correct - check first
const pathInfo = await codebolt.project.getProjectPath();
if (pathInfo.success) {
    codebolt.project.runProject();
} else {
    console.error('No project is currently open');
}
```

### Pitfall 2: Ignoring Editor State

```javascript
// ❌ Wrong - doesn't check for unsaved changes
codebolt.project.runProject();

// ✅ Correct - check editor state
const editorStatus = await codebolt.project.getEditorFileStatus();
if (editorStatus.success) {
    console.log('Editor status:', editorStatus.editorStatus);
}
codebolt.project.runProject();
```

## Performance Considerations

- **Parallel Operations**: Use Promise.all() for multiple independent queries
- **Caching**: Cache project settings if accessed frequently
- **Repo Map**: Repository maps can be large for big projects
- **Run Project**: runProject() is async - monitor separately for completion

## Advanced Patterns

### Project State Monitor

```javascript
class ProjectMonitor {
    constructor() {
        this.state = {
            lastCheck: null,
            path: null,
            settings: null,
            editorStatus: null
        };
    }

    async update() {
        const [pathInfo, settings, editorStatus] = await Promise.all([
            codebolt.project.getProjectPath(),
            codebolt.project.getProjectSettings(),
            codebolt.project.getEditorFileStatus()
        ]);

        this.state = {
            lastCheck: new Date().toISOString(),
            path: pathInfo,
            settings: settings,
            editorStatus: editorStatus
        };

        return this.state;
    }

    getState() {
        return this.state;
    }

    async watch(callback, interval = 5000) {
        const check = async () => {
            const oldState = { ...this.state };
            await this.update();

            if (JSON.stringify(oldState) !== JSON.stringify(this.state)) {
                callback(this.state, oldState);
            }
        };

        // Initial check
        await check();

        // Set up interval
        this.intervalId = setInterval(check, interval);

        return () => clearInterval(this.intervalId);
    }
}

// Usage
const monitor = new ProjectMonitor();
const stopWatching = await monitor.watch((newState, oldState) => {
    console.log('Project state changed!');
});

// Later: stopWatching();
```
