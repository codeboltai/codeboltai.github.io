---
sidebar_position: 6
sidebar_label: Examples
---

# Practical Examples

This section provides real-world examples of agents built with the CodeboltJS TypeScript SDK, demonstrating various patterns and use cases.

## 1. React Component Generator Agent

A specialized agent that creates React components with TypeScript, tests, and documentation.

```typescript
import codebolt from '@codebolt/codeboltjs';
import { Agent, SystemPrompt, TaskInstruction } from '@codebolt/codeboltjs';

class ReactComponentGenerator {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are a React component generation expert specializing in modern React patterns.

Your capabilities:
- Create functional components with TypeScript
- Implement proper prop interfaces
- Add comprehensive JSDoc documentation
- Generate unit tests with React Testing Library
- Create Storybook stories
- Follow React best practices and accessibility guidelines

Component Structure:
1. Main component file (.tsx)
2. Type definitions (if complex)
3. CSS modules or styled-components
4. Unit tests (.test.tsx)
5. Storybook story (.stories.tsx)

Always ask for clarification if requirements are unclear.
Use the attempt_completion tool when the component is fully implemented.
`);

        this.agent = new Agent([], systemPrompt, 15);
    }

    async generateComponent(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }
}

// Usage example
async function createButtonComponent() {
    const generator = new ReactComponentGenerator();
    
    const userMessage = {
        content: `Create a reusable Button component with the following requirements:
        - Support different variants (primary, secondary, danger)
        - Accept size props (small, medium, large)
        - Handle loading state with spinner
        - Support disabled state
        - Include proper TypeScript types
        - Add comprehensive tests
        - Create Storybook stories for all variants`,
        type: 'component_request'
    };

    const result = await generator.generateComponent(userMessage);
    
    if (result.success) {
        console.log('✅ Button component generated successfully');
    } else {
        console.error('❌ Component generation failed:', result.error);
    }
}
```

## 2. Code Review Agent

An intelligent code review agent that analyzes code quality, security, and best practices.

```typescript
class CodeReviewAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are an expert code reviewer with deep knowledge of software engineering best practices.

Review Focus Areas:
1. Code Quality & Maintainability
   - Clean code principles
   - SOLID principles
   - Design patterns usage
   - Code organization

2. Security Analysis
   - Common vulnerabilities (OWASP Top 10)
   - Input validation
   - Authentication/authorization
   - Data sanitization

3. Performance Optimization
   - Algorithm efficiency
   - Memory usage
   - Database queries
   - Caching strategies

4. Best Practices
   - Language-specific conventions
   - Framework best practices
   - Testing coverage
   - Documentation quality

Review Process:
1. Analyze the codebase structure
2. Examine individual files for issues
3. Check for security vulnerabilities
4. Evaluate performance implications
5. Provide specific, actionable recommendations

Always provide constructive feedback with examples and suggestions for improvement.
`);

        this.agent = new Agent([], systemPrompt, 20);
    }

    async reviewCode(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }

    async reviewPullRequest(prDetails: any) {
        // Enhanced review for pull requests
        const userMessage = {
            content: `Review this pull request:
            Title: ${prDetails.title}
            Description: ${prDetails.description}
            Files changed: ${prDetails.files.length}
            
            Please provide a comprehensive review focusing on:
            - Code quality and maintainability
            - Security implications
            - Performance impact
            - Test coverage
            - Documentation updates needed`,
            type: 'pr_review',
            metadata: prDetails
        };

        return await this.reviewCode(userMessage);
    }
}

// Usage example
async function reviewProjectCode() {
    const reviewer = new CodeReviewAgent();
    
    await codebolt.chat.sendMessage('🔍 Starting comprehensive code review...');
    
    // Get all source files
    const files = await codebolt.fs.listFile('./src/', true);
    const codeFiles = files.filter(f => 
        f.name.endsWith('.ts') || 
        f.name.endsWith('.tsx') || 
        f.name.endsWith('.js') || 
        f.name.endsWith('.jsx')
    );

    const userMessage = {
        content: `Please review the codebase for quality, security, and best practices.
        Focus on the following files: ${codeFiles.map(f => f.path).join(', ')}`,
        type: 'code_review'
    };

    const result = await reviewer.reviewCode(userMessage);
    
    if (result.success) {
        await codebolt.chat.sendMessage('✅ Code review completed successfully');
    }
}
```

## 3. API Integration Agent

An agent that creates API clients and handles integration with external services.

```typescript
class APIIntegrationAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are an API integration specialist focused on creating robust, type-safe API clients.

Your expertise includes:
- RESTful API design and consumption
- GraphQL integration
- Authentication handling (OAuth, JWT, API keys)
- Error handling and retry logic
- Request/response transformation
- Type generation from OpenAPI specs
- Testing API integrations

Integration Approach:
1. Analyze API documentation or OpenAPI spec
2. Generate TypeScript interfaces for requests/responses
3. Create API client with proper error handling
4. Implement authentication mechanisms
5. Add retry logic and rate limiting
6. Create comprehensive tests
7. Generate usage documentation

Always prioritize type safety, error handling, and developer experience.
`);

        this.agent = new Agent([], systemPrompt, 18);
    }

    async createAPIClient(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }
}

// Usage example
async function integrateStripeAPI() {
    const apiAgent = new APIIntegrationAgent();
    
    const userMessage = {
        content: `Create a TypeScript client for Stripe API integration with the following requirements:
        - Support for payment processing (create payment intent, confirm payment)
        - Customer management (create, update, retrieve customers)
        - Subscription handling (create, update, cancel subscriptions)
        - Webhook handling for payment events
        - Proper error handling with custom error types
        - Rate limiting and retry logic
        - Comprehensive TypeScript types
        - Unit tests for all methods
        - Usage examples and documentation`,
        type: 'api_integration'
    };

    const result = await apiAgent.createAPIClient(userMessage);
    
    if (result.success) {
        await codebolt.chat.sendMessage('✅ Stripe API client created successfully');
    }
}
```

## 4. Testing Automation Agent

An agent specialized in creating comprehensive test suites.

```typescript
class TestingAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are a testing specialist focused on creating comprehensive, maintainable test suites.

Testing Expertise:
- Unit testing with Jest, Vitest, or Mocha
- Integration testing for APIs and databases
- End-to-end testing with Playwright or Cypress
- Component testing with React Testing Library
- Performance testing and benchmarking
- Security testing and vulnerability assessment

Testing Strategy:
1. Analyze code to understand functionality
2. Identify test scenarios and edge cases
3. Create unit tests for individual functions/components
4. Develop integration tests for workflows
5. Implement e2e tests for critical user journeys
6. Set up test data and mocking strategies
7. Configure CI/CD integration
8. Generate test coverage reports

Focus on test quality, maintainability, and comprehensive coverage.
`);

        this.agent = new Agent([], systemPrompt, 15);
    }

    async createTestSuite(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }

    async generateTestsForComponent(componentPath: string) {
        // Read the component file
        const componentContent = await codebolt.fs.readFile(componentPath);
        
        const userMessage = {
            content: `Create comprehensive tests for this React component:
            
            File: ${componentPath}
            Content: ${componentContent.content}
            
            Please create:
            1. Unit tests for all component functionality
            2. Tests for all props and their variations
            3. Event handler testing
            4. Accessibility tests
            5. Error boundary tests (if applicable)
            6. Performance tests for complex components
            
            Use React Testing Library and Jest.`,
            type: 'component_testing'
        };

        return await this.createTestSuite(userMessage);
    }
}

// Usage example
async function createTestsForProject() {
    const testingAgent = new TestingAgent();
    
    // Get all component files
    const files = await codebolt.fs.listFile('./src/components/', true);
    const componentFiles = files.filter(f => 
        f.name.endsWith('.tsx') && !f.name.includes('.test.')
    );

    for (const file of componentFiles) {
        await codebolt.chat.sendMessage(`🧪 Creating tests for ${file.name}...`);
        
        const result = await testingAgent.generateTestsForComponent(file.path);
        
        if (result.success) {
            await codebolt.chat.sendMessage(`✅ Tests created for ${file.name}`);
        } else {
            await codebolt.chat.sendMessage(`❌ Failed to create tests for ${file.name}: ${result.error}`);
        }
    }
}
```

## 5. Documentation Generator Agent

An agent that creates comprehensive documentation for projects.

```typescript
class DocumentationAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are a technical documentation specialist who creates clear, comprehensive documentation.

Documentation Types:
- API documentation with examples
- User guides and tutorials
- Code documentation and comments
- README files and setup instructions
- Architecture documentation
- Deployment guides

Documentation Standards:
1. Clear, concise writing
2. Practical examples and code snippets
3. Proper formatting and structure
4. Screenshots and diagrams where helpful
5. Up-to-date and accurate information
6. Accessibility considerations

Process:
1. Analyze the codebase and project structure
2. Identify documentation needs
3. Create structured documentation
4. Include practical examples
5. Add navigation and cross-references
6. Validate accuracy and completeness

Focus on developer experience and usability.
`);

        this.agent = new Agent([], systemPrompt, 12);
    }

    async generateDocumentation(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }

    async createAPIDocumentation(apiFiles: string[]) {
        const apiContent = await Promise.all(
            apiFiles.map(async (file) => {
                const content = await codebolt.fs.readFile(file);
                return { file, content: content.content };
            })
        );

        const userMessage = {
            content: `Create comprehensive API documentation for these files:
            ${apiContent.map(({ file, content }) => `
            File: ${file}
            Content: ${content}
            `).join('\n')}
            
            Include:
            1. API overview and authentication
            2. Endpoint documentation with examples
            3. Request/response schemas
            4. Error codes and handling
            5. Rate limiting information
            6. SDK usage examples
            7. Postman collection (if applicable)`,
            type: 'api_documentation'
        };

        return await this.generateDocumentation(userMessage);
    }
}

// Usage example
async function generateProjectDocs() {
    const docAgent = new DocumentationAgent();
    
    // Generate README
    const readmeMessage = {
        content: `Create a comprehensive README.md for this project including:
        - Project description and features
        - Installation instructions
        - Usage examples
        - API documentation links
        - Contributing guidelines
        - License information`,
        type: 'readme_generation'
    };

    await docAgent.generateDocumentation(readmeMessage);
    
    // Generate API docs
    const apiFiles = await codebolt.fs.searchFiles('./src/api/', '.*\\.(ts|js)$', '*');
    if (apiFiles.result.length > 0) {
        await docAgent.createAPIDocumentation(apiFiles.result.map(f => f.path));
    }
}
```

## 6. DevOps Automation Agent

An agent that handles deployment, CI/CD, and infrastructure tasks.

```typescript
class DevOpsAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are a DevOps automation specialist focused on deployment and infrastructure.

DevOps Expertise:
- CI/CD pipeline configuration (GitHub Actions, GitLab CI, Jenkins)
- Docker containerization and orchestration
- Cloud deployment (AWS, GCP, Azure, Vercel, Netlify)
- Infrastructure as Code (Terraform, CloudFormation)
- Monitoring and logging setup
- Security and compliance automation

Automation Approach:
1. Analyze project requirements and architecture
2. Design deployment strategy
3. Create containerization setup
4. Configure CI/CD pipelines
5. Set up monitoring and alerting
6. Implement security best practices
7. Create deployment documentation

Focus on reliability, security, and maintainability.
`);

        this.agent = new Agent([], systemPrompt, 20);
    }

    async setupDeployment(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }

    async createDockerSetup() {
        const packageJson = await codebolt.fs.readFile('./package.json');
        const projectInfo = JSON.parse(packageJson.content);

        const userMessage = {
            content: `Create Docker setup for this ${projectInfo.name} project:
            
            Project type: ${this.detectProjectType(projectInfo)}
            Dependencies: ${Object.keys(projectInfo.dependencies || {}).join(', ')}
            
            Create:
            1. Dockerfile with multi-stage build
            2. docker-compose.yml for development
            3. .dockerignore file
            4. Docker build and run scripts
            5. Production-ready configuration
            6. Health checks and monitoring`,
            type: 'docker_setup'
        };

        return await this.setupDeployment(userMessage);
    }

    private detectProjectType(packageJson: any): string {
        const deps = Object.keys(packageJson.dependencies || {});
        
        if (deps.includes('react')) return 'React Application';
        if (deps.includes('next')) return 'Next.js Application';
        if (deps.includes('express')) return 'Express.js API';
        if (deps.includes('fastify')) return 'Fastify API';
        
        return 'Node.js Application';
    }
}

// Usage example
async function setupProjectDeployment() {
    const devopsAgent = new DevOpsAgent();
    
    // Create Docker setup
    await codebolt.chat.sendMessage('🐳 Setting up Docker configuration...');
    await devopsAgent.createDockerSetup();
    
    // Setup CI/CD pipeline
    const cicdMessage = {
        content: `Create GitHub Actions workflow for this project:
        - Build and test on pull requests
        - Deploy to staging on merge to develop
        - Deploy to production on release tags
        - Include security scanning and dependency checks
        - Set up automated testing and code quality checks`,
        type: 'cicd_setup'
    };

    await codebolt.chat.sendMessage('⚙️ Setting up CI/CD pipeline...');
    await devopsAgent.setupDeployment(cicdMessage);
}
```

## 7. Database Schema Generator

An agent that designs and creates database schemas with migrations.

```typescript
class DatabaseSchemaAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are a database design expert specializing in relational and NoSQL databases.

Database Expertise:
- Relational database design (PostgreSQL, MySQL, SQLite)
- NoSQL database design (MongoDB, DynamoDB)
- Schema optimization and indexing
- Migration strategies and versioning
- ORM integration (Prisma, TypeORM, Sequelize)
- Data modeling best practices

Design Process:
1. Analyze application requirements
2. Design normalized database schema
3. Create entity relationships
4. Define indexes and constraints
5. Generate migration files
6. Create ORM models and types
7. Set up seed data and fixtures

Focus on performance, scalability, and data integrity.
`);

        this.agent = new Agent([], systemPrompt, 15);
    }

    async designSchema(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }
}

// Usage example
async function createEcommerceSchema() {
    const dbAgent = new DatabaseSchemaAgent();
    
    const userMessage = {
        content: `Design a database schema for an e-commerce application with:
        
        Entities:
        - Users (customers and admins)
        - Products with variants and inventory
        - Categories and tags
        - Shopping cart and wishlist
        - Orders and order items
        - Payments and refunds
        - Reviews and ratings
        - Shipping addresses
        
        Requirements:
        - Support for multiple currencies
        - Inventory tracking
        - Order status workflow
        - User roles and permissions
        - Audit logging
        - Soft deletes
        
        Create:
        1. PostgreSQL schema with proper relationships
        2. Prisma schema file
        3. Migration files
        4. TypeScript types
        5. Seed data examples`,
        type: 'schema_design'
    };

    const result = await dbAgent.designSchema(userMessage);
    
    if (result.success) {
        await codebolt.chat.sendMessage('✅ E-commerce database schema created successfully');
    }
}
```

## 8. Performance Optimization Agent

An agent that analyzes and optimizes application performance.

```typescript
class PerformanceAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are a performance optimization expert focused on web application performance.

Optimization Areas:
- Frontend performance (React, bundle size, rendering)
- Backend performance (API response times, database queries)
- Network optimization (caching, CDN, compression)
- Memory usage and garbage collection
- Database query optimization
- Image and asset optimization

Analysis Process:
1. Profile application performance
2. Identify bottlenecks and issues
3. Analyze bundle size and dependencies
4. Review database queries and indexes
5. Examine network requests and caching
6. Implement optimization strategies
7. Measure and validate improvements

Focus on measurable performance improvements and user experience.
`);

        this.agent = new Agent([], systemPrompt, 18);
    }

    async optimizePerformance(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }

    async analyzeReactApp() {
        // Analyze package.json for dependencies
        const packageJson = await codebolt.fs.readFile('./package.json');
        const projectInfo = JSON.parse(packageJson.content);

        // Get component files
        const components = await codebolt.fs.listFile('./src/components/', true);
        const componentFiles = components.filter(f => f.name.endsWith('.tsx'));

        const userMessage = {
            content: `Analyze and optimize this React application:
            
            Dependencies: ${Object.keys(projectInfo.dependencies || {}).join(', ')}
            Component count: ${componentFiles.length}
            
            Please analyze:
            1. Bundle size and unused dependencies
            2. Component rendering performance
            3. State management efficiency
            4. Image and asset optimization
            5. Code splitting opportunities
            6. Memory leaks and performance issues
            
            Provide specific optimization recommendations with implementation examples.`,
            type: 'react_optimization'
        };

        return await this.optimizePerformance(userMessage);
    }
}

// Usage example
async function optimizeApplication() {
    const perfAgent = new PerformanceAgent();
    
    await codebolt.chat.sendMessage('🚀 Starting performance analysis...');
    
    const result = await perfAgent.analyzeReactApp();
    
    if (result.success) {
        await codebolt.chat.sendMessage('✅ Performance analysis completed with optimization recommendations');
    }
}
```

## 9. Multi-Agent Orchestration Example

A complex example showing how multiple agents work together.

```typescript
class ProjectSetupOrchestrator {
    private agents: Map<string, any> = new Map();

    constructor() {
        this.agents.set('component', new ReactComponentGenerator());
        this.agents.set('testing', new TestingAgent());
        this.agents.set('docs', new DocumentationAgent());
        this.agents.set('devops', new DevOpsAgent());
        this.agents.set('performance', new PerformanceAgent());
    }

    async setupFullProject(projectRequirements: any) {
        const results = [];

        try {
            // Step 1: Generate core components
            await codebolt.chat.sendMessage('🏗️ Step 1: Generating core components...');
            const componentResult = await this.agents.get('component').generateComponent({
                content: projectRequirements.components,
                type: 'component_generation'
            });
            results.push({ step: 'components', result: componentResult });

            // Step 2: Create test suites
            await codebolt.chat.sendMessage('🧪 Step 2: Creating test suites...');
            const testResult = await this.agents.get('testing').createTestSuite({
                content: 'Create comprehensive tests for all generated components',
                type: 'test_generation'
            });
            results.push({ step: 'testing', result: testResult });

            // Step 3: Generate documentation
            await codebolt.chat.sendMessage('📝 Step 3: Generating documentation...');
            const docsResult = await this.agents.get('docs').generateDocumentation({
                content: projectRequirements.documentation,
                type: 'project_documentation'
            });
            results.push({ step: 'documentation', result: docsResult });

            // Step 4: Setup deployment
            await codebolt.chat.sendMessage('🚀 Step 4: Setting up deployment...');
            const devopsResult = await this.agents.get('devops').setupDeployment({
                content: projectRequirements.deployment,
                type: 'deployment_setup'
            });
            results.push({ step: 'devops', result: devopsResult });

            // Step 5: Performance optimization
            await codebolt.chat.sendMessage('⚡ Step 5: Optimizing performance...');
            const perfResult = await this.agents.get('performance').optimizePerformance({
                content: 'Analyze and optimize the generated project for performance',
                type: 'performance_optimization'
            });
            results.push({ step: 'performance', result: perfResult });

            await codebolt.chat.sendMessage('✅ Project setup completed successfully!');
            return results;

        } catch (error) {
            await codebolt.chat.sendMessage(`❌ Project setup failed: ${error.message}`);
            throw error;
        }
    }
}

// Usage example
async function createFullStackProject() {
    const orchestrator = new ProjectSetupOrchestrator();
    
    const projectRequirements = {
        components: `Create a dashboard application with:
        - Header with navigation and user menu
        - Sidebar with collapsible navigation
        - Data table with sorting and filtering
        - Chart components for analytics
        - Modal dialogs for forms
        - Loading states and error boundaries`,
        
        documentation: `Create comprehensive documentation including:
        - Project overview and architecture
        - Component library documentation
        - API documentation
        - Deployment guide
        - Contributing guidelines`,
        
        deployment: `Setup deployment for:
        - Development environment with hot reload
        - Staging environment for testing
        - Production environment with optimization
        - CI/CD pipeline with automated testing
        - Monitoring and error tracking`
    };

    const results = await orchestrator.setupFullProject(projectRequirements);
    
    // Generate summary report
    const successfulSteps = results.filter(r => r.result.success).length;
    await codebolt.chat.sendMessage(
        `📊 Project Setup Summary: ${successfulSteps}/${results.length} steps completed successfully`
    );
}
```

## 10. Real-time Collaboration Agent

An agent that handles real-time features and WebSocket integration.

```typescript
class RealtimeAgent {
    private agent: Agent;

    constructor() {
        const systemPrompt = new SystemPrompt(`
You are a real-time application specialist focused on WebSocket and real-time features.

Real-time Expertise:
- WebSocket implementation and management
- Real-time data synchronization
- Collaborative editing features
- Live chat and messaging systems
- Real-time notifications
- Conflict resolution and operational transforms

Implementation Approach:
1. Design real-time architecture
2. Implement WebSocket server and client
3. Handle connection management and reconnection
4. Create data synchronization strategies
5. Implement conflict resolution
6. Add real-time UI updates
7. Ensure scalability and performance

Focus on reliability, scalability, and user experience.
`);

        this.agent = new Agent([], systemPrompt, 16);
    }

    async implementRealtimeFeatures(userMessage: any) {
        const task = new TaskInstruction(userMessage);
        return await this.agent.run(task);
    }
}

// Usage example
async function addRealtimeFeatures() {
    const realtimeAgent = new RealtimeAgent();
    
    const userMessage = {
        content: `Implement real-time collaboration features:
        
        Features needed:
        - Real-time document editing (like Google Docs)
        - Live cursor positions and user presence
        - Real-time comments and annotations
        - Conflict resolution for simultaneous edits
        - Connection status and reconnection handling
        - Real-time notifications for changes
        
        Technical requirements:
        - WebSocket server with Socket.io
        - React hooks for real-time state
        - Operational transforms for conflict resolution
        - Optimistic updates with rollback
        - User authentication and authorization
        - Scalable architecture for multiple rooms`,
        type: 'realtime_implementation'
    };

    const result = await realtimeAgent.implementRealtimeFeatures(userMessage);
    
    if (result.success) {
        await codebolt.chat.sendMessage('✅ Real-time collaboration features implemented successfully');
    }
}
```

## Running the Examples

To use these examples in your own projects:

1. **Install the SDK**:
   ```bash
   npm install @codebolt/codeboltjs
   ```

2. **Set up your agent**:
   ```typescript
   import codebolt from '@codebolt/codeboltjs';
   
   async function main() {
       await codebolt.waitForConnection();
       
       // Use any of the example agents
       const agent = new ReactComponentGenerator();
       // ... implement your logic
   }
   
   main().catch(console.error);
   ```

3. **Customize for your needs**:
   - Modify system prompts for your specific requirements
   - Add additional tools and capabilities
   - Implement custom validation and success conditions
   - Add error handling and retry logic

## Best Practices from Examples

1. **Specialized Agents**: Create focused agents for specific tasks rather than general-purpose ones
2. **Clear System Prompts**: Define clear roles, capabilities, and processes in system prompts
3. **Error Handling**: Always implement proper error handling and user feedback
4. **Progress Communication**: Keep users informed of progress during long-running operations
5. **Validation**: Implement success conditions and validation for agent outputs
6. **Resource Management**: Clean up resources and handle WebSocket connections properly
7. **Modular Design**: Create reusable agent classes that can be composed together

These examples demonstrate the power and flexibility of the CodeboltJS SDK for building sophisticated development automation agents. 