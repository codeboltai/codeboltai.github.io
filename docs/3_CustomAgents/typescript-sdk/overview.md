# TypeScript SDK Overview

The Codebolt TypeScript SDK empowers developers to build powerful extensions, custom integrations, and sophisticated tools that extend Codebolt AI Editor's capabilities. With full TypeScript support, comprehensive APIs, and rich development tools, you can create everything from simple agents to complex multi-agent systems with excellent developer experience and type safety.

## Introduction

While Codebolt provides extensive built-in functionality, every development team has unique needs and workflows. The TypeScript SDK bridges this gap by providing:

- **Full TypeScript Support** - Complete type definitions and IntelliSense support
- **Comprehensive APIs** - Access to all Codebolt features and capabilities
- **Rich Development Tools** - Debugging, testing, and deployment utilities
- **Extensible Architecture** - Build agents, tools, workflows, and integrations
- **Hot Reloading** - Fast development cycle with instant feedback
- **Production Ready** - Robust error handling and performance optimization

## Getting Started

### Installation

```bash
# Create a new Codebolt extension project
npx create-codebolt-extension my-extension --template typescript

# Or add to existing project
npm install @codebolt/sdk @codebolt/types
npm install -D @codebolt/dev-tools typescript @types/node
```

### Project Structure

```
my-extension/
├── src/
│   ├── agents/           # Custom agents
│   ├── tools/           # MCP tools
│   ├── workflows/       # Task flows
│   ├── integrations/    # External integrations
│   └── index.ts        # Main entry point
├── tests/
│   ├── agents.test.ts
│   └── tools.test.ts
├── package.json
├── tsconfig.json
├── codebolt.config.ts   # Extension configuration
└── README.md
```

### Basic Setup

```typescript
// src/index.ts
import { CodeboltSDK, ExtensionManifest } from '@codebolt/sdk';

const manifest: ExtensionManifest = {
  name: 'my-extension',
  version: '1.0.0',
  description: 'My custom Codebolt extension',
  author: 'Your Name',
  
  agents: ['./agents/code-reviewer'],
  tools: ['./tools/api-client'],
  workflows: ['./workflows/ci-pipeline'],
  
  permissions: {
    fileSystem: ['read', 'write'],
    network: ['https://api.company.com'],
    environment: ['NODE_ENV', 'API_KEY']
  }
};

export default class MyExtension {
  constructor(private sdk: CodeboltSDK) {}
  
  async initialize(): Promise<void> {
    console.log('My extension initialized');
    
    // Register event handlers
    this.sdk.events.on('project:opened', this.onProjectOpened.bind(this));
    this.sdk.events.on('file:saved', this.onFileSaved.bind(this));
  }
  
  private async onProjectOpened(project: Project): Promise<void> {
    console.log(`Project opened: ${project.name}`);
  }
  
  private async onFileSaved(file: SourceFile): Promise<void> {
    console.log(`File saved: ${file.path}`);
  }
}
```

## Core SDK APIs

### Project and File Management

```typescript
import { ProjectManager, FileManager, SourceFile } from '@codebolt/sdk';

class ProjectOperations {
  constructor(
    private projectManager: ProjectManager,
    private fileManager: FileManager
  ) {}
  
  async analyzeProject(): Promise<ProjectAnalysis> {
    const project = await this.projectManager.getCurrentProject();
    
    // Get project structure
    const structure = await project.getStructure();
    
    // Analyze dependencies
    const dependencies = await project.getDependencies();
    
    // Get configuration files
    const configs = await project.getConfigFiles();
    
    return {
      name: project.name,
      type: project.type,
      structure,
      dependencies,
      configs,
      metrics: await this.calculateMetrics(project)
    };
  }
  
  async processFiles(pattern: string): Promise<ProcessingResult[]> {
    const files = await this.fileManager.glob(pattern);
    const results: ProcessingResult[] = [];
    
    for (const file of files) {
      try {
        const content = await file.read();
        const ast = await file.parse();
        
        const result = await this.processFile(file, content, ast);
        results.push(result);
      } catch (error) {
        results.push({
          file: file.path,
          success: false,
          error: error.message
        });
      }
    }
    
    return results;
  }
  
  private async processFile(
    file: SourceFile, 
    content: string, 
    ast: AST
  ): Promise<ProcessingResult> {
    // Custom file processing logic
    const issues = await this.analyzeAST(ast);
    const suggestions = await this.generateSuggestions(content, ast);
    
    return {
      file: file.path,
      success: true,
      issues,
      suggestions
    };
  }
}
```

### AI and Language Models

```typescript
import { AIService, LanguageModel, ChatCompletion } from '@codebolt/sdk';

class AIOperations {
  constructor(private ai: AIService) {}
  
  async analyzeCode(code: string, language: string): Promise<CodeAnalysis> {
    const model = await this.ai.getModel('gpt-4');
    
    const prompt = `
      Analyze this ${language} code for:
      1. Code quality issues
      2. Performance problems
      3. Security vulnerabilities
      4. Best practice violations
      
      Code:
      ${code}
      
      Provide specific, actionable feedback with examples.
    `;
    
    const response = await model.complete({
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.1,
      max_tokens: 2000
    });
    
    return this.parseAnalysisResponse(response.content);
  }
  
  async generateCode(specification: CodeSpecification): Promise<GeneratedCode> {
    const model = await this.ai.getModel('gpt-4');
    
    const prompt = this.buildGenerationPrompt(specification);
    
    const response = await model.complete({
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2,
      max_tokens: 3000
    });
    
    return {
      code: this.extractCode(response.content),
      explanation: this.extractExplanation(response.content),
      tests: await this.generateTests(specification)
    };
  }
  
  async streamCompletion(prompt: string): Promise<AsyncIterable<string>> {
    const model = await this.ai.getModel('gpt-4');
    
    return model.stream({
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3
    });
  }
}
```

### Context and State Management

```typescript
import { ContextManager, StateManager, SharedContext } from '@codebolt/sdk';

class ContextOperations {
  constructor(
    private contextManager: ContextManager,
    private stateManager: StateManager
  ) {}
  
  async getProjectContext(): Promise<ProjectContext> {
    const context = await this.contextManager.getProjectContext();
    
    return {
      structure: context.structure,
      dependencies: context.dependencies,
      conventions: context.conventions,
      patterns: context.patterns,
      preferences: context.preferences
    };
  }
  
  async updateContext(updates: ContextUpdate[]): Promise<void> {
    for (const update of updates) {
      await this.contextManager.updateContext(update.key, update.value, {
        source: 'my-extension',
        timestamp: new Date(),
        version: update.version
      });
    }
    
    // Notify other extensions of context changes
    await this.contextManager.notifyContextChange(updates);
  }
  
  async manageState<T>(key: string, initialValue: T): Promise<StateHandle<T>> {
    return this.stateManager.create(key, initialValue, {
      persistent: true,
      shared: false,
      ttl: 3600000 // 1 hour
    });
  }
  
  async shareDataWithAgents(data: SharedData): Promise<void> {
    const sharedContext = await this.contextManager.getSharedContext();
    
    await sharedContext.set('extension-data', data, {
      ttl: 1800000, // 30 minutes
      permissions: ['read', 'write'],
      subscribers: ['all-agents']
    });
  }
}
```

## Building Custom Agents

### Agent Base Class

```typescript
import { CodeboltAgent, AgentConfig, AgentResult } from '@codebolt/sdk';

export class CustomCodeReviewer extends CodeboltAgent {
  constructor(config: AgentConfig) {
    super({
      name: 'Custom Code Reviewer',
      version: '1.0.0',
      description: 'Advanced code review with team-specific rules',
      capabilities: ['analyze', 'suggest', 'fix'],
      ...config
    });
  }
  
  async initialize(): Promise<void> {
    await super.initialize();
    
    // Load team-specific rules
    this.rules = await this.loadTeamRules();
    
    // Initialize AI models
    this.codeModel = await this.ai.getModel('gpt-4');
    this.securityModel = await this.ai.getModel('security-specialist');
  }
  
  async execute(input: AgentInput): Promise<AgentResult> {
    try {
      const { code, filePath, context } = input;
      
      // Multi-stage analysis
      const results = await Promise.all([
        this.analyzeCodeQuality(code, filePath),
        this.analyzeSecurity(code, filePath),
        this.analyzePerformance(code, filePath),
        this.analyzeTeamConventions(code, context)
      ]);
      
      // Consolidate results
      const consolidated = await this.consolidateResults(results);
      
      // Generate fixes if requested
      if (input.generateFixes) {
        consolidated.fixes = await this.generateFixes(code, consolidated.issues);
      }
      
      return {
        success: true,
        results: consolidated,
        metadata: {
          executionTime: Date.now() - input.startTime,
          rulesApplied: this.rules.length,
          confidence: this.calculateConfidence(consolidated)
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error.message,
          stack: error.stack,
          code: 'ANALYSIS_FAILED'
        }
      };
    }
  }
  
  private async analyzeCodeQuality(code: string, filePath: string): Promise<QualityAnalysis> {
    const prompt = `
      Analyze this code for quality issues:
      
      File: ${filePath}
      Code:
      ${code}
      
      Focus on:
      - Code complexity and readability
      - Naming conventions
      - Function/class design
      - Error handling
      - Documentation
      
      Team rules:
      ${this.rules.map(rule => `- ${rule.description}`).join('\n')}
    `;
    
    const response = await this.codeModel.complete({
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.1
    });
    
    return this.parseQualityAnalysis(response.content);
  }
  
  private async analyzeSecurity(code: string, filePath: string): Promise<SecurityAnalysis> {
    // Security-specific analysis using specialized model
    const vulnerabilities = await this.securityModel.analyze(code, {
      language: this.detectLanguage(filePath),
      context: 'web_application',
      severity_threshold: 'medium'
    });
    
    return {
      vulnerabilities,
      recommendations: await this.generateSecurityRecommendations(vulnerabilities)
    };
  }
  
  private async generateFixes(code: string, issues: Issue[]): Promise<Fix[]> {
    const fixes: Fix[] = [];
    
    for (const issue of issues) {
      if (issue.fixable) {
        const fix = await this.generateFix(code, issue);
        if (fix) {
          fixes.push(fix);
        }
      }
    }
    
    return fixes;
  }
}
```

### Agent Registration and Lifecycle

```typescript
// src/agents/index.ts
import { AgentRegistry } from '@codebolt/sdk';
import { CustomCodeReviewer } from './code-reviewer';
import { SecurityAnalyzer } from './security-analyzer';
import { PerformanceOptimizer } from './performance-optimizer';

export class AgentManager {
  constructor(private registry: AgentRegistry) {}
  
  async registerAgents(): Promise<void> {
    // Register custom agents
    await this.registry.register('custom-code-reviewer', CustomCodeReviewer, {
      autoStart: true,
      triggers: ['file_save', 'git_commit'],
      priority: 'high'
    });
    
    await this.registry.register('security-analyzer', SecurityAnalyzer, {
      autoStart: false,
      triggers: ['manual', 'pre_commit'],
      priority: 'critical'
    });
    
    await this.registry.register('performance-optimizer', PerformanceOptimizer, {
      autoStart: true,
      triggers: ['file_save'],
      conditions: ['file_size > 1000', 'complexity > 5']
    });
  }
  
  async configureAgents(): Promise<void> {
    // Configure agents with team-specific settings
    await this.registry.configure('custom-code-reviewer', {
      rules: await this.loadTeamRules(),
      confidence_threshold: 0.8,
      auto_fix: false,
      notification_channels: ['slack', 'email']
    });
  }
}
```

## Building MCP Tools

### Tool Implementation

```typescript
import { MCPTool, ToolConfig, ToolRequest, ToolResponse } from '@codebolt/sdk';

export class DatabaseTool implements MCPTool {
  name = 'database-operations';
  version = '1.0.0';
  capabilities = {
    actions: ['query', 'migrate', 'backup', 'analyze'],
    inputs: ['sql', 'migration_file', 'connection_string'],
    outputs: ['query_result', 'migration_result', 'backup_info']
  };
  
  private connection: DatabaseConnection | null = null;
  
  async initialize(config: ToolConfig): Promise<void> {
    this.connection = await this.createConnection(config.database);
    
    // Test connection
    await this.connection.ping();
    
    // Setup connection pool
    await this.connection.setupPool({
      min: 2,
      max: 10,
      acquireTimeoutMillis: 30000,
      idleTimeoutMillis: 600000
    });
  }
  
  async execute(request: ToolRequest): Promise<ToolResponse> {
    if (!this.connection) {
      throw new Error('Database connection not initialized');
    }
    
    switch (request.action) {
      case 'query':
        return await this.executeQuery(request.arguments);
      case 'migrate':
        return await this.runMigration(request.arguments);
      case 'backup':
        return await this.createBackup(request.arguments);
      case 'analyze':
        return await this.analyzeSchema(request.arguments);
      default:
        throw new Error(`Unknown action: ${request.action}`);
    }
  }
  
  private async executeQuery(args: QueryArgs): Promise<ToolResponse> {
    const startTime = Date.now();
    
    try {
      // Validate query
      await this.validateQuery(args.query);
      
      // Execute with timeout
      const result = await this.connection!.query(args.query, args.params, {
        timeout: args.timeout || 30000
      });
      
      return {
        success: true,
        data: {
          rows: result.rows,
          rowCount: result.rowCount,
          fields: result.fields?.map(f => ({
            name: f.name,
            type: f.dataTypeID,
            nullable: f.nullable
          }))
        },
        metadata: {
          executionTime: Date.now() - startTime,
          query: args.query,
          cached: result.cached
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error.message,
          code: error.code,
          severity: this.mapErrorSeverity(error),
          query: args.query
        }
      };
    }
  }
  
  private async runMigration(args: MigrationArgs): Promise<ToolResponse> {
    const transaction = await this.connection!.beginTransaction();
    
    try {
      // Create backup before migration
      const backup = await this.createBackup({
        name: `pre_migration_${Date.now()}`
      });
      
      // Run migration
      const migrationResult = await this.executeMigrationFile(
        args.migrationFile,
        transaction
      );
      
      // Verify migration
      const verification = await this.verifyMigration(
        migrationResult,
        transaction
      );
      
      if (verification.success) {
        await transaction.commit();
        return {
          success: true,
          data: {
            migration: migrationResult,
            verification,
            backup: backup.data
          }
        };
      } else {
        await transaction.rollback();
        return {
          success: false,
          error: {
            message: 'Migration verification failed',
            details: verification.errors
          }
        };
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
  
  async cleanup(): Promise<void> {
    if (this.connection) {
      await this.connection.close();
      this.connection = null;
    }
  }
}
```

### Tool Testing

```typescript
// tests/tools/database-tool.test.ts
import { DatabaseTool } from '../../src/tools/database-tool';
import { createMockDatabase } from '@codebolt/test-utils';

describe('DatabaseTool', () => {
  let tool: DatabaseTool;
  let mockDb: MockDatabase;
  
  beforeEach(async () => {
    mockDb = await createMockDatabase();
    tool = new DatabaseTool();
    
    await tool.initialize({
      database: mockDb.getConnectionConfig()
    });
  });
  
  afterEach(async () => {
    await tool.cleanup();
    await mockDb.cleanup();
  });
  
  describe('query execution', () => {
    it('should execute simple queries', async () => {
      // Setup test data
      await mockDb.seed('users', [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
      ]);
      
      const result = await tool.execute({
        action: 'query',
        arguments: {
          query: 'SELECT * FROM users WHERE id = $1',
          params: [1]
        }
      });
      
      expect(result.success).toBe(true);
      expect(result.data.rows).toHaveLength(1);
      expect(result.data.rows[0].name).toBe('John Doe');
    });
    
    it('should handle query errors gracefully', async () => {
      const result = await tool.execute({
        action: 'query',
        arguments: {
          query: 'SELECT * FROM non_existent_table'
        }
      });
      
      expect(result.success).toBe(false);
      expect(result.error.message).toContain('does not exist');
    });
    
    it('should validate dangerous queries', async () => {
      const result = await tool.execute({
        action: 'query',
        arguments: {
          query: 'DROP TABLE users'
        }
      });
      
      expect(result.success).toBe(false);
      expect(result.error.message).toContain('Dangerous query detected');
    });
  });
  
  describe('migrations', () => {
    it('should run migrations successfully', async () => {
      const migrationSql = `
        CREATE TABLE test_table (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        );
      `;
      
      const result = await tool.execute({
        action: 'migrate',
        arguments: {
          migrationFile: 'create_test_table.sql',
          sql: migrationSql
        }
      });
      
      expect(result.success).toBe(true);
      expect(result.data.migration.tables_created).toContain('test_table');
    });
    
    it('should rollback failed migrations', async () => {
      const invalidMigrationSql = `
        CREATE TABLE test_table (
          id INVALID_TYPE PRIMARY KEY
        );
      `;
      
      const result = await tool.execute({
        action: 'migrate',
        arguments: {
          migrationFile: 'invalid_migration.sql',
          sql: invalidMigrationSql
        }
      });
      
      expect(result.success).toBe(false);
      
      // Verify rollback - table should not exist
      const checkResult = await tool.execute({
        action: 'query',
        arguments: {
          query: "SELECT table_name FROM information_schema.tables WHERE table_name = 'test_table'"
        }
      });
      
      expect(checkResult.data.rows).toHaveLength(0);
    });
  });
});
```

## Building Workflows

### Workflow Definition

```typescript
import { Workflow, WorkflowStep, WorkflowContext } from '@codebolt/sdk';

export class CIWorkflow extends Workflow {
  constructor() {
    super({
      name: 'Continuous Integration',
      version: '1.0.0',
      description: 'Complete CI pipeline with quality gates'
    });
  }
  
  async defineSteps(): Promise<WorkflowStep[]> {
    return [
      {
        id: 'setup',
        name: 'Environment Setup',
        type: 'parallel',
        steps: [
          {
            id: 'install_deps',
            name: 'Install Dependencies',
            executor: this.installDependencies.bind(this)
          },
          {
            id: 'setup_env',
            name: 'Setup Environment',
            executor: this.setupEnvironment.bind(this)
          }
        ]
      },
      
      {
        id: 'quality_checks',
        name: 'Quality Checks',
        dependsOn: ['setup'],
        type: 'parallel',
        steps: [
          {
            id: 'lint',
            name: 'Linting',
            agent: 'linter',
            continueOnError: false
          },
          {
            id: 'type_check',
            name: 'Type Checking',
            agent: 'type-checker',
            continueOnError: false
          },
          {
            id: 'security_scan',
            name: 'Security Scan',
            agent: 'security-scanner',
            continueOnError: true
          }
        ]
      },
      
      {
        id: 'testing',
        name: 'Testing',
        dependsOn: ['quality_checks'],
        condition: this.qualityChecksPassedCondition.bind(this),
        type: 'sequential',
        steps: [
          {
            id: 'unit_tests',
            name: 'Unit Tests',
            executor: this.runUnitTests.bind(this)
          },
          {
            id: 'integration_tests',
            name: 'Integration Tests',
            executor: this.runIntegrationTests.bind(this),
            condition: this.unitTestsPassedCondition.bind(this)
          },
          {
            id: 'e2e_tests',
            name: 'E2E Tests',
            executor: this.runE2ETests.bind(this),
            condition: this.integrationTestsPassedCondition.bind(this)
          }
        ]
      },
      
      {
        id: 'build',
        name: 'Build Application',
        dependsOn: ['testing'],
        condition: this.allTestsPassedCondition.bind(this),
        executor: this.buildApplication.bind(this)
      },
      
      {
        id: 'deploy',
        name: 'Deploy to Staging',
        dependsOn: ['build'],
        condition: this.buildSuccessCondition.bind(this),
        executor: this.deployToStaging.bind(this)
      }
    ];
  }
  
  private async installDependencies(context: WorkflowContext): Promise<StepResult> {
    const packageManager = this.detectPackageManager(context.projectPath);
    
    try {
      await this.exec(`${packageManager} install`, {
        cwd: context.projectPath,
        timeout: 300000 // 5 minutes
      });
      
      return {
        success: true,
        outputs: { packageManager, installed: true }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  private async runUnitTests(context: WorkflowContext): Promise<StepResult> {
    const testCommand = this.getTestCommand(context.projectPath);
    
    try {
      const result = await this.exec(testCommand, {
        cwd: context.projectPath,
        timeout: 600000 // 10 minutes
      });
      
      const coverage = await this.parseCoverageReport(result.stdout);
      
      return {
        success: result.exitCode === 0,
        outputs: {
          coverage,
          testResults: this.parseTestResults(result.stdout)
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  private async buildApplication(context: WorkflowContext): Promise<StepResult> {
    const buildCommand = this.getBuildCommand(context.projectPath);
    
    try {
      const result = await this.exec(buildCommand, {
        cwd: context.projectPath,
        timeout: 900000 // 15 minutes
      });
      
      const buildStats = await this.analyzeBuildOutput(result.stdout);
      
      return {
        success: result.exitCode === 0,
        outputs: {
          buildStats,
          artifacts: await this.collectBuildArtifacts(context.projectPath)
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
  
  // Condition functions
  private async qualityChecksPassedCondition(context: WorkflowContext): Promise<boolean> {
    const qualityResults = context.getStepResults('quality_checks');
    return qualityResults.every(result => result.success);
  }
  
  private async allTestsPassedCondition(context: WorkflowContext): Promise<boolean> {
    const testResults = context.getStepResults('testing');
    return testResults.every(result => result.success);
  }
}
```

### Workflow Registration

```typescript
// src/workflows/index.ts
import { WorkflowRegistry } from '@codebolt/sdk';
import { CIWorkflow } from './ci-workflow';
import { DeploymentWorkflow } from './deployment-workflow';
import { CodeQualityWorkflow } from './code-quality-workflow';

export class WorkflowManager {
  constructor(private registry: WorkflowRegistry) {}
  
  async registerWorkflows(): Promise<void> {
    await this.registry.register('ci-pipeline', CIWorkflow, {
      triggers: [
        { type: 'git_push', branches: ['main', 'develop'] },
        { type: 'pull_request', target_branches: ['main'] }
      ],
      timeout: '30m',
      retryPolicy: {
        maxRetries: 2,
        backoffStrategy: 'exponential'
      }
    });
    
    await this.registry.register('deployment', DeploymentWorkflow, {
      triggers: [
        { type: 'manual' },
        { type: 'workflow_completed', workflow: 'ci-pipeline' }
      ],
      requiredApproval: true,
      environments: ['staging', 'production']
    });
    
    await this.registry.register('code-quality', CodeQualityWorkflow, {
      triggers: [
        { type: 'file_save', patterns: ['src/**/*.{ts,tsx,js,jsx}'] }
      ],
      debounce: 2000,
      parallel: true
    });
  }
}
```

## Development Tools and Testing

### Development Environment

```typescript
// codebolt.config.ts
import { defineConfig } from '@codebolt/sdk';

export default defineConfig({
  development: {
    hotReload: true,
    debugMode: true,
    logLevel: 'debug',
    mockServices: {
      ai: true,
      database: true,
      external_apis: true
    }
  },
  
  testing: {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    testMatch: ['**/*.test.ts'],
    collectCoverageFrom: [
      'src/**/*.ts',
      '!src/**/*.d.ts',
      '!src/tests/**'
    ]
  },
  
  build: {
    target: 'node16',
    format: 'esm',
    minify: true,
    sourcemap: true,
    external: ['@codebolt/sdk']
  }
});
```

### Testing Utilities

```typescript
// tests/utils/test-helpers.ts
import { 
  createMockSDK, 
  createMockProject, 
  createMockAgent,
  TestEnvironment 
} from '@codebolt/test-utils';

export class ExtensionTestSuite {
  private testEnv: TestEnvironment;
  
  async setup(): Promise<void> {
    this.testEnv = await TestEnvironment.create({
      extensions: ['./src/index.ts'],
      mockServices: ['ai', 'database', 'git'],
      projectFixtures: './tests/fixtures/projects'
    });
    
    await this.testEnv.initialize();
  }
  
  async teardown(): Promise<void> {
    await this.testEnv.cleanup();
  }
  
  createMockContext(overrides: Partial<ProjectContext> = {}): ProjectContext {
    return {
      name: 'test-project',
      type: 'web',
      languages: ['typescript'],
      frameworks: ['react'],
      structure: this.createMockStructure(),
      dependencies: this.createMockDependencies(),
      ...overrides
    };
  }
  
  async runAgentTest(
    agentClass: typeof CodeboltAgent,
    input: AgentInput,
    expectedOutput?: Partial<AgentResult>
  ): Promise<AgentResult> {
    const agent = new agentClass({
      sdk: this.testEnv.getMockSDK(),
      config: this.getDefaultAgentConfig()
    });
    
    await agent.initialize();
    
    const result = await agent.execute(input);
    
    if (expectedOutput) {
      expect(result).toMatchObject(expectedOutput);
    }
    
    return result;
  }
  
  async runWorkflowTest(
    workflowClass: typeof Workflow,
    context: WorkflowContext,
    expectedSteps?: string[]
  ): Promise<WorkflowResult> {
    const workflow = new workflowClass();
    
    const result = await this.testEnv.executeWorkflow(workflow, context);
    
    if (expectedSteps) {
      expect(result.executedSteps.map(s => s.id)).toEqual(expectedSteps);
    }
    
    return result;
  }
}
```

### Integration Testing

```typescript
// tests/integration/extension.test.ts
import { ExtensionTestSuite } from '../utils/test-helpers';
import MyExtension from '../../src/index';

describe('MyExtension Integration Tests', () => {
  let testSuite: ExtensionTestSuite;
  let extension: MyExtension;
  
  beforeAll(async () => {
    testSuite = new ExtensionTestSuite();
    await testSuite.setup();
    
    extension = new MyExtension(testSuite.getMockSDK());
    await extension.initialize();
  });
  
  afterAll(async () => {
    await testSuite.teardown();
  });
  
  describe('Project Analysis', () => {
    it('should analyze TypeScript React projects correctly', async () => {
      const mockProject = testSuite.createMockProject({
        type: 'react-typescript',
        files: [
          'src/App.tsx',
          'src/components/Button.tsx',
          'package.json',
          'tsconfig.json'
        ]
      });
      
      testSuite.setCurrentProject(mockProject);
      
      const analysis = await extension.analyzeProject();
      
      expect(analysis.type).toBe('web');
      expect(analysis.languages).toContain('typescript');
      expect(analysis.frameworks).toContain('react');
      expect(analysis.structure.components).toHaveLength(1);
    });
  });
  
  describe('Agent Integration', () => {
    it('should integrate custom agents with workflows', async () => {
      const workflowResult = await testSuite.runWorkflow('ci-pipeline', {
        projectPath: '/test/project',
        branch: 'main',
        commitSha: 'abc123'
      });
      
      expect(workflowResult.success).toBe(true);
      expect(workflowResult.executedSteps).toContain('custom-code-review');
      
      const agentResults = workflowResult.stepResults.find(
        r => r.stepId === 'custom-code-review'
      );
      
      expect(agentResults.outputs.issues).toBeDefined();
      expect(agentResults.outputs.suggestions).toBeDefined();
    });
  });
});
```

## Deployment and Distribution

### Extension Packaging

```typescript
// scripts/build.ts
import { ExtensionBuilder } from '@codebolt/sdk/build';

const builder = new ExtensionBuilder({
  entry: './src/index.ts',
  outDir: './dist',
  target: 'node16',
  format: 'esm',
  minify: true,
  
  assets: [
    './README.md',
    './LICENSE',
    './package.json'
  ],
  
  externals: [
    '@codebolt/sdk',
    '@codebolt/types'
  ]
});

async function build() {
  console.log('Building extension...');
  
  await builder.build();
  
  console.log('Creating package...');
  
  await builder.package({
    format: 'cbx', // Codebolt Extension format
    output: './dist/my-extension.cbx',
    sign: true,
    keyFile: process.env.SIGNING_KEY
  });
  
  console.log('Extension built successfully!');
}

build().catch(console.error);
```

### Publishing

```json
{
  "name": "my-extension",
  "version": "1.0.0",
  "description": "My custom Codebolt extension",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  
  "codebolt": {
    "extension": true,
    "minVersion": "1.0.0",
    "maxVersion": "2.0.0",
    "categories": ["code-quality", "automation"],
    "permissions": {
      "fileSystem": ["read", "write"],
      "network": ["https://api.company.com"],
      "ai": ["gpt-4", "claude-3"]
    }
  },
  
  "scripts": {
    "build": "tsx scripts/build.ts",
    "test": "jest",
    "publish": "codebolt extension publish",
    "dev": "codebolt extension dev --watch"
  },
  
  "dependencies": {
    "@codebolt/sdk": "^1.0.0"
  },
  
  "devDependencies": {
    "@codebolt/dev-tools": "^1.0.0",
    "@codebolt/test-utils": "^1.0.0",
    "typescript": "^5.0.0",
    "jest": "^29.0.0",
    "tsx": "^4.0.0"
  }
}
```

### CLI Publishing

```bash
# Build the extension
npm run build

# Test the extension locally
codebolt extension test ./dist/my-extension.cbx

# Publish to Codebolt registry
codebolt extension publish ./dist/my-extension.cbx \
  --category "code-quality" \
  --tags "typescript,react,automation" \
  --visibility public

# Publish to npm for community distribution
npm publish
```

## Best Practices

### Error Handling

```typescript
import { CodeboltError, ErrorCode } from '@codebolt/sdk';

class RobustAgent extends CodeboltAgent {
  async execute(input: AgentInput): Promise<AgentResult> {
    try {
      return await this.performAnalysis(input);
    } catch (error) {
      return this.handleError(error, input);
    }
  }
  
  private handleError(error: Error, input: AgentInput): AgentResult {
    if (error instanceof CodeboltError) {
      return {
        success: false,
        error: {
          code: error.code,
          message: error.message,
          recoverable: error.recoverable,
          suggestions: error.suggestions
        }
      };
    }
    
    // Handle specific error types
    if (error.name === 'TimeoutError') {
      return {
        success: false,
        error: {
          code: ErrorCode.TIMEOUT,
          message: 'Operation timed out',
          recoverable: true,
          suggestions: ['Try with a smaller input', 'Increase timeout limit']
        }
      };
    }
    
    // Generic error handling
    return {
      success: false,
      error: {
        code: ErrorCode.UNKNOWN,
        message: error.message,
        recoverable: false
      }
    };
  }
}
```

### Performance Optimization

```typescript
import { PerformanceMonitor, Cache } from '@codebolt/sdk';

class OptimizedAgent extends CodeboltAgent {
  private cache = new Cache<string, AnalysisResult>({
    maxSize: 1000,
    ttl: 3600000 // 1 hour
  });
  
  private monitor = new PerformanceMonitor();
  
  async execute(input: AgentInput): Promise<AgentResult> {
    const timer = this.monitor.startTimer('agent_execution');
    
    try {
      // Check cache first
      const cacheKey = this.generateCacheKey(input);
      const cached = await this.cache.get(cacheKey);
      
      if (cached) {
        timer.end({ cache_hit: true });
        return { success: true, results: cached };
      }
      
      // Perform analysis
      const result = await this.performAnalysis(input);
      
      // Cache successful results
      if (result.success) {
        await this.cache.set(cacheKey, result.results);
      }
      
      timer.end({ cache_hit: false });
      return result;
    } catch (error) {
      timer.end({ error: true });
      throw error;
    }
  }
  
  private generateCacheKey(input: AgentInput): string {
    return `${input.filePath}:${input.contentHash}:${this.version}`;
  }
}
```

### Memory Management

```typescript
class MemoryEfficientAgent extends CodeboltAgent {
  private processLargeFile = async (file: SourceFile): Promise<AnalysisResult> => {
    // Process file in chunks to avoid memory issues
    const chunkSize = 10000; // 10KB chunks
    const results: AnalysisResult[] = [];
    
    const stream = file.createReadStream();
    let buffer = '';
    
    for await (const chunk of stream) {
      buffer += chunk;
      
      while (buffer.length >= chunkSize) {
        const chunkToProcess = buffer.slice(0, chunkSize);
        buffer = buffer.slice(chunkSize);
        
        const chunkResult = await this.processChunk(chunkToProcess);
        results.push(chunkResult);
        
        // Explicit garbage collection hint
        if (global.gc) global.gc();
      }
    }
    
    // Process remaining buffer
    if (buffer.length > 0) {
      const chunkResult = await this.processChunk(buffer);
      results.push(chunkResult);
    }
    
    return this.mergeResults(results);
  };
}
```

## Next Steps

Ready to build powerful Codebolt extensions? Here's your development path:

1. **Start with Simple Extensions**: Create basic agents and tools
2. **Learn the SDK APIs**: Master the core SDK functionality
3. **Build Complex Workflows**: Create sophisticated automation
4. **Add Testing**: Implement comprehensive test suites
5. **Optimize Performance**: Use caching, monitoring, and optimization techniques
6. **Publish and Share**: Distribute your extensions to the community

## Related Documentation

- [Agents](3_CustomAgents/agents/overview.md) - Learn about the agent system you'll be extending
- [MCP Tools](3_CustomAgents/Tools/overview.md) - Understand the tool architecture
- [Task Flow](3_CustomAgents/core/task-flow/overview.md) - Build custom workflow components
- [API Reference](../../api-reference.md) - Complete SDK API documentation

## Community Resources

- **SDK Examples**: Real-world extension examples
- **Template Library**: Starter templates for common use cases
- **Developer Forum**: Get help with SDK development
- **Best Practices Guide**: Learn from experienced extension developers

The TypeScript SDK opens up unlimited possibilities for extending Codebolt. From simple automation scripts to sophisticated AI-powered development tools, you have the power to create exactly what your team needs with excellent developer experience and type safety.
