---
sidebar_position: 4
sidebar_label: Agent Framework
---

# Agent Framework

The Agent Framework is a high-level abstraction built on top of the CodeboltJS SDK that enables developers to create sophisticated AI agents with complex workflows, tool usage, and conversation management. This framework handles the orchestration of LLM interactions, tool executions, and task completion detection.

## Overview

The Agent Framework consists of three main components:

1. **Agent Class**: The core orchestrator that manages conversations and tool executions
2. **SystemPrompt**: Defines the agent's behavior and instructions
3. **TaskInstruction**: Encapsulates user tasks and expected outputs

## Agent Class

The `Agent` class is the heart of the framework, providing sophisticated conversation management and tool orchestration.

### Basic Usage

```typescript
import { Agent, SystemPrompt, TaskInstruction } from '@codebolt/codeboltjs';

// Create a system prompt
const systemPrompt = new SystemPrompt();

// Initialize agent with tools and configuration
const agent = new Agent(
    [],           // tools array (can be empty for auto-discovery)
    systemPrompt, // system prompt
    10            // max conversation turns (0 = unlimited)
);

// Create a task instruction
const task = new TaskInstruction(userMessage);

// Run the agent
const result = await agent.run(task);
```

### Constructor Parameters

```typescript
constructor(
    tools: any[] = [],              // Available tools for the agent
    systemPrompt: SystemPrompt,     // System prompt defining behavior
    maxRun: number = 0              // Maximum conversation turns (0 = unlimited)
)
```

### Agent.run() Method

The `run` method is the main entry point for agent execution:

```typescript
async run(
    task: TaskInstruction,                    // Task to execute
    successCondition: () => boolean = () => true  // Optional success condition
): Promise<{
    success: boolean;     // Whether the task was completed successfully
    error: string | null; // Error message if any
    message: string | null; // Final assistant message
}>
```

### Example: Code Review Agent

```typescript
import { Agent, SystemPrompt, TaskInstruction } from '@codebolt/codeboltjs';

async function createCodeReviewAgent() {
    // Define system prompt for code review
    const systemPrompt = new SystemPrompt(`
You are an expert code reviewer with deep knowledge of software engineering best practices.
Your role is to:
1. Analyze code for bugs, security issues, and performance problems
2. Suggest improvements following industry standards
3. Provide constructive feedback with specific examples
4. Use available tools to examine files and run tests

Always be thorough but constructive in your reviews.
When you complete a review, use the attempt_completion tool with a summary.
`);

    // Create agent with unlimited turns
    const agent = new Agent([], systemPrompt, 0);
    
    return agent;
}

async function reviewCode(userMessage: any) {
    const agent = await createCodeReviewAgent();
    
    // Create task instruction
    const task = new TaskInstruction(userMessage);
    
    // Run the review
    const result = await agent.run(task);
    
    if (result.success) {
        console.log('✅ Code review completed successfully');
        console.log('Review summary:', result.message);
    } else {
        console.error('❌ Code review failed:', result.error);
    }
    
    return result;
}
```

## SystemPrompt Class

The `SystemPrompt` class manages the agent's core instructions and behavior patterns.

### Creating System Prompts

#### Method 1: Direct String Prompt

```typescript
const systemPrompt = new SystemPrompt(`
You are a React development expert specializing in modern patterns and best practices.

Your capabilities include:
- Creating functional components with hooks
- Implementing state management with Context API or Redux
- Writing comprehensive tests with Jest and React Testing Library
- Optimizing performance with React.memo and useMemo
- Following accessibility guidelines

When creating components:
1. Use TypeScript for type safety
2. Include proper prop validation
3. Add JSDoc comments for documentation
4. Implement error boundaries where appropriate
5. Follow naming conventions (PascalCase for components)

Always ask clarifying questions if requirements are unclear.
Use the attempt_completion tool when you've successfully completed the task.
`);
```

#### Method 2: YAML File-based Prompts

Create a prompts file (`prompts.yaml`):

```yaml
react_expert:
  prompt: |
    You are a React development expert specializing in modern patterns and best practices.
    
    Your capabilities include:
    - Creating functional components with hooks
    - Implementing state management
    - Writing comprehensive tests
    - Performance optimization
    
    Always follow TypeScript best practices and include proper documentation.

code_reviewer:
  prompt: |
    You are an expert code reviewer focused on:
    - Code quality and maintainability
    - Security vulnerabilities
    - Performance optimization
    - Best practices adherence
    
    Provide constructive feedback with specific examples and suggestions.

documentation_writer:
  prompt: |
    You are a technical documentation specialist who creates:
    - Clear, comprehensive API documentation
    - User guides with practical examples
    - Code comments and inline documentation
    - README files and setup instructions
    
    Focus on clarity, accuracy, and usefulness for developers.
```

Load prompts from YAML:

```typescript
const systemPrompt = new SystemPrompt('./prompts.yaml', 'react_expert');
```

### Advanced System Prompt Patterns

#### Context-Aware Prompts

```typescript
function createContextAwarePrompt(projectType: string, userLevel: string) {
    const basePrompt = `You are a ${projectType} development expert.`;
    
    const levelInstructions = {
        beginner: 'Provide detailed explanations and step-by-step guidance.',
        intermediate: 'Focus on best practices and optimization techniques.',
        expert: 'Discuss advanced patterns and architectural decisions.'
    };
    
    const contextPrompt = `
${basePrompt}

User Level: ${userLevel}
Instructions: ${levelInstructions[userLevel]}

Available project context:
- Project type: ${projectType}
- User experience level: ${userLevel}

Adapt your responses accordingly and use appropriate technical depth.
`;

    return new SystemPrompt(contextPrompt);
}

// Usage
const prompt = createContextAwarePrompt('React', 'intermediate');
const agent = new Agent([], prompt, 15);
```

#### Tool-Specific Prompts

```typescript
const toolAwarePrompt = new SystemPrompt(`
You are a full-stack development agent with access to powerful tools.

Available tool categories:
- File System: Read, write, create, and manage project files
- Terminal: Execute commands and scripts
- Git: Version control operations
- Browser: Web automation and testing
- LLM: AI-powered code generation and analysis

Tool Usage Guidelines:
1. Always use fs tools to examine existing code before making changes
2. Use terminal tools to run tests and build processes
3. Use git tools to check status before committing changes
4. Use browser tools for testing web applications
5. Use LLM tools for complex analysis and generation tasks

When using tools:
- Explain what you're doing and why
- Handle errors gracefully
- Provide progress updates to the user
- Verify results before proceeding

Remember: You can use multiple tools in sequence to accomplish complex tasks.
`);
```

## TaskInstruction Class

The `TaskInstruction` class encapsulates user tasks and converts them into structured prompts for the agent.

### Basic Usage

```typescript
import { TaskInstruction } from '@codebolt/codeboltjs';

// Create from user message
const task = new TaskInstruction(userMessage);

// Convert to prompt format
const promptMessages = await task.toPrompt();
```

### Constructor Parameters

```typescript
constructor(
    tools: Tools = {},              // Available tools for this task
    userMessage: UserMessage,       // User message containing task
    filepath: string = "",          // Path to YAML task definitions
    refsection: string = ""         // Section in YAML file
)
```

### YAML-based Task Definitions

Create a tasks file (`tasks.yaml`):

```yaml
code_review:
  description: |
    Perform a comprehensive code review of the provided files or code snippets.
    Analyze for bugs, security issues, performance problems, and adherence to best practices.
  expected_output: |
    A detailed review report including:
    - List of identified issues with severity levels
    - Specific recommendations for improvements
    - Code examples showing suggested fixes
    - Overall code quality assessment

component_creation:
  description: |
    Create a new React component based on the provided specifications.
    Include proper TypeScript types, styling, and documentation.
  expected_output: |
    Complete component implementation including:
    - Main component file with TypeScript
    - Associated CSS/styled-components
    - Unit tests
    - Storybook stories (if applicable)
    - Documentation with usage examples

api_integration:
  description: |
    Integrate with the specified API endpoints and create the necessary client code.
    Handle authentication, error cases, and data transformation.
  expected_output: |
    API integration package including:
    - API client with typed methods
    - Error handling and retry logic
    - Data models and interfaces
    - Integration tests
    - Usage documentation
```

Use YAML tasks:

```typescript
const task = new TaskInstruction(
    {},                    // tools
    userMessage,          // user message
    './tasks.yaml',       // task definitions file
    'code_review'         // specific task section
);
```

### Advanced Task Patterns

#### Multi-step Task Workflow

```typescript
class WorkflowTaskInstruction extends TaskInstruction {
    private steps: string[];
    private currentStep: number = 0;

    constructor(userMessage: UserMessage, steps: string[]) {
        super({}, userMessage);
        this.steps = steps;
    }

    async toPrompt(): Promise<any[]> {
        const basePrompt = await super.toPrompt();
        
        const workflowPrompt = {
            type: "text",
            text: `
Multi-step Workflow Task:

Steps to complete:
${this.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}

Current step: ${this.currentStep + 1}/${this.steps.length}
Focus on: ${this.steps[this.currentStep]}

Complete each step thoroughly before moving to the next.
Use the attempt_completion tool only when ALL steps are finished.
`
        };

        return [...basePrompt, workflowPrompt];
    }

    nextStep(): boolean {
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            return true;
        }
        return false;
    }
}

// Usage
const workflowTask = new WorkflowTaskInstruction(userMessage, [
    'Analyze the existing codebase structure',
    'Identify areas for improvement',
    'Create implementation plan',
    'Implement the changes',
    'Write tests for new functionality',
    'Update documentation'
]);
```

## Complete Agent Examples

### 1. Full-Stack Development Agent

```typescript
import { Agent, SystemPrompt, TaskInstruction } from '@codebolt/codeboltjs';

class FullStackAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are a full-stack development expert capable of working with:
- Frontend: React, Vue, Angular, TypeScript, CSS
- Backend: Node.js, Python, Java, databases
- DevOps: Docker, CI/CD, cloud deployment
- Testing: Unit, integration, and e2e testing

Your workflow:
1. Analyze requirements and existing code
2. Plan the implementation approach
3. Implement changes with proper testing
4. Ensure code quality and documentation
5. Handle deployment considerations

Always use available tools to examine files, run commands, and test your work.
Communicate progress clearly and ask for clarification when needed.
`);

        this.agent = new Agent([], systemPrompt, 20);
    }

    async developFeature(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }

    async reviewAndRefactor(userMessage: any) {
        const task = new TaskInstruction(
            {},
            userMessage,
            './tasks.yaml',
            'code_review'
        );
        return await this.agent.run(task);
    }
}

// Usage
const fullStackAgent = new FullStackAgent();
const result = await fullStackAgent.developFeature(userMessage);
```

### 2. Testing Specialist Agent

```typescript
class TestingAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are a testing specialist focused on creating comprehensive test suites.

Your expertise includes:
- Unit testing with Jest, Mocha, or similar frameworks
- Integration testing for APIs and databases
- End-to-end testing with Playwright or Cypress
- Test-driven development (TDD) practices
- Performance and load testing
- Security testing

Your approach:
1. Analyze the code to understand functionality
2. Identify test scenarios and edge cases
3. Create comprehensive test suites
4. Ensure good test coverage
5. Set up CI/CD integration for automated testing

Always write clear, maintainable tests with good documentation.
`);

        this.agent = new Agent([], systemPrompt, 15);
    }

    async createTestSuite(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task, () => {
            // Custom success condition: check if tests were created and pass
            return this.validateTestsCreated();
        });
    }

    private async validateTestsCreated(): Promise<boolean> {
        // Implementation to check if tests exist and pass
        try {
            const testFiles = await codebolt.fs.searchFiles('./', '.*\\.test\\.(js|ts)', '*');
            return testFiles.result.length > 0;
        } catch {
            return false;
        }
    }
}
```

### 3. Documentation Agent

```typescript
class DocumentationAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt('./prompts.yaml', 'documentation_writer');
        this.agent = new Agent([], systemPrompt, 12);
    }

    async generateDocumentation(userMessage: any, docType: string) {
        const taskDefinitions = {
            api: 'api_documentation',
            readme: 'readme_creation',
            guide: 'user_guide_creation'
        };

        const task = new TaskInstruction(
            {},
            userMessage,
            './tasks.yaml',
            taskDefinitions[docType] || 'general_documentation'
        );

        return await this.agent.run(task);
    }
}
```

## Agent Orchestration Patterns

### Sequential Agent Workflow

```typescript
class AgentOrchestrator {
    private agents: Map<string, Agent> = new Map();

    constructor() {
        this.setupAgents();
    }

    private setupAgents() {
        // Setup different specialized agents
        this.agents.set('analyzer', new Agent([], new SystemPrompt('./prompts.yaml', 'code_analyzer'), 5));
        this.agents.set('implementer', new Agent([], new SystemPrompt('./prompts.yaml', 'code_implementer'), 10));
        this.agents.set('tester', new Agent([], new SystemPrompt('./prompts.yaml', 'test_creator'), 8));
        this.agents.set('documenter', new Agent([], new SystemPrompt('./prompts.yaml', 'documentation_writer'), 5));
    }

    async executeWorkflow(userMessage: any) {
        const results = [];

        // Step 1: Analyze requirements
        console.log('🔍 Analyzing requirements...');
        const analysisTask = new TaskInstruction(userMessage);
        const analysisResult = await this.agents.get('analyzer')!.run(analysisTask);
        results.push({ step: 'analysis', result: analysisResult });

        if (!analysisResult.success) {
            throw new Error('Analysis failed: ' + analysisResult.error);
        }

        // Step 2: Implement solution
        console.log('⚙️ Implementing solution...');
        const implementTask = new TaskInstruction(userMessage);
        const implementResult = await this.agents.get('implementer')!.run(implementTask);
        results.push({ step: 'implementation', result: implementResult });

        // Step 3: Create tests
        console.log('🧪 Creating tests...');
        const testTask = new TaskInstruction(userMessage);
        const testResult = await this.agents.get('tester')!.run(testTask);
        results.push({ step: 'testing', result: testResult });

        // Step 4: Generate documentation
        console.log('📝 Generating documentation...');
        const docTask = new TaskInstruction(userMessage);
        const docResult = await this.agents.get('documenter')!.run(docTask);
        results.push({ step: 'documentation', result: docResult });

        return results;
    }
}

// Usage
const orchestrator = new AgentOrchestrator();
const workflowResults = await orchestrator.executeWorkflow(userMessage);
```

## Error Handling and Recovery

### Robust Agent Implementation

```typescript
class RobustAgent {
    private agent: Agent;
    private maxRetries: number = 3;

    constructor(systemPrompt: SystemPrompt) {
        this.agent = new Agent([], systemPrompt, 15);
    }

    async runWithRetry(task: TaskInstruction): Promise<any> {
        let lastError: Error | null = null;

        for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
            try {
                console.log(`🔄 Attempt ${attempt}/${this.maxRetries}`);
                
                const result = await this.agent.run(task);
                
                if (result.success) {
                    return result;
                }

                // If not successful but no error, treat as retry-able
                lastError = new Error(result.error || 'Unknown error');
                
            } catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
                console.warn(`⚠️ Attempt ${attempt} failed:`, lastError.message);
                
                // Wait before retry (exponential backoff)
                if (attempt < this.maxRetries) {
                    await this.delay(Math.pow(2, attempt) * 1000);
                }
            }
        }

        throw new Error(`Agent failed after ${this.maxRetries} attempts. Last error: ${lastError?.message}`);
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
```

## Performance Optimization

### Efficient Agent Configuration

```typescript
// Optimize for specific use cases
class OptimizedAgent {
    static createForQuickTasks(): Agent {
        const prompt = new SystemPrompt(`
You are a quick-response agent for simple development tasks.
Focus on efficiency and direct solutions.
Use minimal conversation turns and get to the point quickly.
`);
        return new Agent([], prompt, 3); // Limited turns for quick tasks
    }

    static createForComplexTasks(): Agent {
        const prompt = new SystemPrompt(`
You are a comprehensive development agent for complex projects.
Take time to analyze thoroughly and plan your approach.
Use multiple tools and iterations to ensure quality results.
`);
        return new Agent([], prompt, 0); // Unlimited turns for complex tasks
    }

    static createForSpecificDomain(domain: string): Agent {
        const prompt = new SystemPrompt(`./prompts.yaml`, domain);
        return new Agent([], prompt, 10);
    }
}

// Usage based on task complexity
const taskComplexity = analyzeTaskComplexity(userMessage);
const agent = taskComplexity === 'simple' 
    ? OptimizedAgent.createForQuickTasks()
    : OptimizedAgent.createForComplexTasks();
```

## Best Practices

### 1. System Prompt Design
- Be specific about the agent's role and capabilities
- Include clear instructions for tool usage
- Define success criteria and completion conditions
- Provide examples of expected behavior

### 2. Task Instruction Structure
- Break complex tasks into clear steps
- Provide sufficient context and requirements
- Define expected outputs and formats
- Include validation criteria

### 3. Error Handling
- Implement retry logic for transient failures
- Provide meaningful error messages
- Log agent interactions for debugging
- Handle tool execution failures gracefully

### 4. Performance Considerations
- Set appropriate conversation turn limits
- Use specific prompts for different task types
- Implement caching for repeated operations
- Monitor token usage and costs

## Next Steps

- **[API Reference](./api-reference.md)** - Complete function documentation
- **[Examples](./examples.md)** - Real-world agent implementations
- **[Examples](./examples.md)** - Advanced patterns and optimization

---

The Agent Framework provides a powerful foundation for building sophisticated AI agents that can handle complex development workflows with intelligence and reliability. 