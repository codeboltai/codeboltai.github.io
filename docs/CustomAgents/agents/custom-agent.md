# Creating Custom Agents

This comprehensive guide will walk you through creating custom agents tailored to your specific development needs. Whether you want to automate code reviews, generate documentation, or implement custom workflows, this guide provides everything you need to build powerful, intelligent agents.

## Introduction

Custom agents are the key to unlocking Codebolt's full potential. While built-in agents handle common scenarios, custom agents can be tailored to your exact requirements, coding standards, and workflow preferences.

By the end of this guide, you'll know how to:
- Design effective agent architectures
- Implement agents using multiple approaches
- Configure triggers and actions
- Handle complex workflows
- Debug and optimize agent performance

## Agent Design Principles

### 1. Single Responsibility
Each agent should have one clear purpose:
```javascript
// Good: Focused responsibility
const testGeneratorAgent = {
  purpose: "Generate unit tests for JavaScript functions",
  scope: "*.js files in src/ directory"
};

// Bad: Multiple responsibilities
const everythingAgent = {
  purpose: "Review code, generate tests, update docs, deploy code"
};
```

### 2. Configurable Behavior
Make your agents adaptable:
```json
{
  "name": "API Documentation Generator",
  "settings": {
    "docStyle": "jsdoc|swagger|openapi",
    "includeExamples": true,
    "autoUpdate": false,
    "outputFormat": "markdown|html|json"
  }
}
```

### 3. Graceful Error Handling
Agents should fail gracefully without breaking workflows:
```javascript
try {
  const result = await performAnalysis(code);
  return result;
} catch (error) {
  logger.warn(`Analysis failed: ${error.message}`);
  return { 
    success: false, 
    error: error.message,
    fallback: "Manual review recommended"
  };
}
```

## Step-by-Step Agent Creation

### Method 1: UI-Based Creation (Recommended for Beginners)

#### Step 1: Access the Agent Builder
1. Open Codebolt AI Editor
2. Navigate to the "Agents" panel in the sidebar
3. Click "Create New Agent"
4. Select "Custom Agent" from the template options

#### Step 2: Basic Configuration
```
Agent Name: React Component Analyzer
Description: Analyzes React components for best practices and accessibility
Category: Code Quality
```

#### Step 3: Configure Triggers
```
Trigger Type: File Save
File Patterns: 
  - src/components/**/*.jsx
  - src/components/**/*.tsx
Exclude Patterns:
  - **/*.test.js
  - **/*.spec.js
```

#### Step 4: Define Actions
```
Primary Action: Analyze Component
AI Model: GPT-4
Prompt Template: |
  Analyze this React component for:
  1. Best practices and patterns
  2. Accessibility issues
  3. Performance optimizations
  4. Code maintainability
  
  Component code:
  {file_content}
  
  Provide specific, actionable suggestions.
```

#### Step 5: Configure Output
```
Output Format: Suggestions List
Auto-apply: false
Show Notifications: true
Save Results: true
```

### Method 2: Configuration File Approach

Create a comprehensive agent configuration file:

```json
{
  "name": "React Component Analyzer",
  "version": "1.0.0",
  "description": "Analyzes React components for best practices and accessibility",
  "author": "Your Team",
  "category": "code-quality",
  "icon": "react",
  
  "triggers": [
    {
      "type": "file_save",
      "patterns": [
        "src/components/**/*.{jsx,tsx}",
        "src/pages/**/*.{jsx,tsx}"
      ],
      "exclude": [
        "**/*.test.{js,jsx,ts,tsx}",
        "**/*.spec.{js,jsx,ts,tsx}",
        "**/*.stories.{js,jsx,ts,tsx}"
      ],
      "debounce": 1000
    },
    {
      "type": "manual",
      "command": "analyze-component"
    }
  ],
  
  "workflow": [
    {
      "name": "parse_component",
      "type": "ast_analysis",
      "config": {
        "parser": "typescript",
        "plugins": ["jsx", "decorators"]
      }
    },
    {
      "name": "analyze_patterns",
      "type": "ai_analysis",
      "config": {
        "model": "gpt-4",
        "temperature": 0.2,
        "max_tokens": 1000,
        "prompt": "analyze_react_component.prompt"
      }
    },
    {
      "name": "check_accessibility",
      "type": "static_analysis",
      "config": {
        "rules": ["jsx-a11y/*"],
        "severity": "warning"
      }
    },
    {
      "name": "performance_check",
      "type": "custom_analysis",
      "config": {
        "script": "./scripts/performance-analyzer.js"
      }
    }
  ],
  
  "output": {
    "format": "structured",
    "template": "react_analysis.template",
    "destinations": ["console", "file", "notification"],
    "file_path": ".codebolt/analysis/{filename}.analysis.json"
  },
  
  "settings": {
    "auto_apply_fixes": false,
    "confidence_threshold": 0.8,
    "max_suggestions": 10,
    "learning_enabled": true,
    "cache_results": true,
    "cache_duration": "1h"
  },
  
  "dependencies": {
    "ast-parser": "^2.0.0",
    "eslint-plugin-jsx-a11y": "^6.7.0"
  }
}
```

Register the agent:
```bash
codebolt agent register ./agents/react-component-analyzer.json
```

### Method 3: Programmatic Creation (TypeScript SDK)

For maximum flexibility, create agents programmatically:

```typescript
import { CodeboltAgent, TriggerType, ActionType } from '@codebolt/sdk';

class ReactComponentAnalyzer extends CodeboltAgent {
  constructor() {
    super({
      name: 'React Component Analyzer',
      version: '1.0.0',
      description: 'Analyzes React components for best practices'
    });
    
    this.addTrigger({
      type: TriggerType.FILE_SAVE,
      patterns: ['src/components/**/*.{jsx,tsx}'],
      debounce: 1000
    });
    
    this.addAction({
      name: 'analyze_component',
      type: ActionType.AI_ANALYSIS,
      config: {
        model: 'gpt-4',
        prompt: this.getAnalysisPrompt()
      }
    });
  }
  
  private getAnalysisPrompt(): string {
    return `
      Analyze this React component for:
      
      ## Code Quality
      - Component structure and organization
      - Props validation and TypeScript usage
      - State management patterns
      - Effect dependencies and cleanup
      
      ## Performance
      - Unnecessary re-renders
      - Expensive operations in render
      - Missing memoization opportunities
      - Bundle size implications
      
      ## Accessibility
      - ARIA attributes and roles
      - Keyboard navigation support
      - Screen reader compatibility
      - Color contrast and visual indicators
      
      ## Best Practices
      - React hooks usage
      - Component composition
      - Error boundary implementation
      - Testing considerations
      
      Provide specific, actionable recommendations with code examples where applicable.
    `;
  }
  
  async analyzeComponent(context: AnalysisContext): Promise<AnalysisResult> {
    try {
      // Parse the component AST
      const ast = await this.parseComponent(context.fileContent);
      
      // Extract component information
      const componentInfo = this.extractComponentInfo(ast);
      
      // Run AI analysis
      const aiAnalysis = await this.runAIAnalysis(context.fileContent);
      
      // Check accessibility
      const a11yIssues = await this.checkAccessibility(ast);
      
      // Performance analysis
      const perfIssues = await this.analyzePerformance(ast);
      
      return {
        success: true,
        suggestions: [
          ...aiAnalysis.suggestions,
          ...a11yIssues.map(issue => ({
            type: 'accessibility',
            severity: issue.severity,
            message: issue.message,
            line: issue.line,
            fix: issue.suggestedFix
          })),
          ...perfIssues.map(issue => ({
            type: 'performance',
            severity: issue.severity,
            message: issue.message,
            line: issue.line,
            fix: issue.suggestedFix
          }))
        ],
        metadata: {
          componentName: componentInfo.name,
          propsCount: componentInfo.props.length,
          hooksUsed: componentInfo.hooks,
          complexity: componentInfo.complexity
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        suggestions: [{
          type: 'error',
          severity: 'info',
          message: 'Automated analysis failed. Manual review recommended.'
        }]
      };
    }
  }
  
  private async parseComponent(content: string) {
    // Implementation for parsing React component
    // Returns AST representation
  }
  
  private extractComponentInfo(ast: any) {
    // Extract component metadata from AST
    // Returns component information object
  }
  
  private async checkAccessibility(ast: any) {
    // Run accessibility checks using eslint-plugin-jsx-a11y
    // Returns array of accessibility issues
  }
  
  private async analyzePerformance(ast: any) {
    // Analyze for performance issues
    // Returns array of performance suggestions
  }
}

// Register the agent
const agent = new ReactComponentAnalyzer();
await agent.register();
```

## Advanced Configuration Examples

### Multi-Language Support Agent

```json
{
  "name": "Polyglot Code Reviewer",
  "triggers": [
    {
      "type": "file_save",
      "patterns": ["**/*.{js,ts,py,java,go,rs}"]
    }
  ],
  "workflow": [
    {
      "name": "detect_language",
      "type": "language_detection",
      "config": {
        "fallback_to_extension": true
      }
    },
    {
      "name": "language_specific_analysis",
      "type": "conditional",
      "branches": [
        {
          "condition": "language === 'javascript' || language === 'typescript'",
          "actions": ["eslint_check", "typescript_check", "security_scan"]
        },
        {
          "condition": "language === 'python'",
          "actions": ["pylint_check", "black_format", "security_scan"]
        },
        {
          "condition": "language === 'java'",
          "actions": ["checkstyle", "spotbugs", "pmd_analysis"]
        },
        {
          "condition": "language === 'go'",
          "actions": ["go_fmt", "go_vet", "golint"]
        },
        {
          "condition": "language === 'rust'",
          "actions": ["cargo_check", "clippy", "rustfmt"]
        }
      ]
    }
  ]
}
```

### Database Schema Agent

```json
{
  "name": "Database Schema Guardian",
  "triggers": [
    {
      "type": "file_save",
      "patterns": ["migrations/**/*.sql", "schema/**/*.sql"]
    },
    {
      "type": "git_commit",
      "patterns": ["migrations/**", "schema/**"]
    }
  ],
  "workflow": [
    {
      "name": "parse_sql",
      "type": "sql_parser",
      "config": {
        "dialect": "postgresql"
      }
    },
    {
      "name": "validate_migration",
      "type": "migration_validator",
      "config": {
        "check_breaking_changes": true,
        "require_rollback": true,
        "validate_indexes": true
      }
    },
    {
      "name": "generate_documentation",
      "type": "doc_generator",
      "config": {
        "format": "markdown",
        "include_erd": true,
        "output_path": "docs/database/"
      }
    },
    {
      "name": "backup_check",
      "type": "backup_validator",
      "config": {
        "require_backup_before_migration": true
      }
    }
  ],
  "integrations": {
    "postgresql": {
      "connection_string": "${DATABASE_URL}"
    },
    "slack": {
      "webhook": "${SLACK_WEBHOOK}",
      "channel": "#database-changes"
    }
  }
}
```

### API Documentation Agent

```typescript
class APIDocumentationAgent extends CodeboltAgent {
  constructor() {
    super({
      name: 'API Documentation Generator',
      version: '2.0.0'
    });
    
    this.addTrigger({
      type: TriggerType.FILE_SAVE,
      patterns: ['src/api/**/*.{js,ts}', 'src/routes/**/*.{js,ts}']
    });
  }
  
  async generateDocumentation(context: AnalysisContext): Promise<DocumentationResult> {
    const endpoints = await this.extractEndpoints(context.fileContent);
    const openApiSpec = await this.generateOpenAPISpec(endpoints);
    const examples = await this.generateExamples(endpoints);
    
    return {
      openApiSpec,
      examples,
      postmanCollection: await this.generatePostmanCollection(endpoints),
      readme: await this.generateReadme(endpoints)
    };
  }
  
  private async extractEndpoints(content: string): Promise<APIEndpoint[]> {
    // Parse Express.js, Fastify, or other framework routes
    // Extract method, path, parameters, responses
  }
  
  private async generateOpenAPISpec(endpoints: APIEndpoint[]): Promise<OpenAPISpec> {
    // Generate OpenAPI 3.0 specification
  }
  
  private async generateExamples(endpoints: APIEndpoint[]): Promise<APIExample[]> {
    // Generate realistic request/response examples
  }
}
```

## Best Practices for Custom Agents

### 1. Prompt Engineering

**Effective Prompts:**
```
Good: "Review this TypeScript function for type safety issues, performance problems, and suggest improvements with specific code examples."

Bad: "Check this code."
```

**Use Context:**
```javascript
const prompt = `
Review this ${fileExtension} file in a ${projectType} project.

Project context:
- Framework: ${framework}
- Testing: ${testFramework}
- Linting: ${lintingRules}

Code to review:
${fileContent}

Focus on:
1. Framework-specific best practices
2. Project convention adherence
3. Integration with existing patterns
`;
```

### 2. Error Handling

```typescript
class RobustAgent extends CodeboltAgent {
  async execute(context: AgentContext): Promise<AgentResult> {
    try {
      const result = await this.performAnalysis(context);
      return this.formatSuccess(result);
    } catch (error) {
      if (error instanceof ValidationError) {
        return this.formatValidationError(error);
      } else if (error instanceof NetworkError) {
        return this.formatNetworkError(error);
      } else {
        return this.formatUnknownError(error);
      }
    }
  }
  
  private formatValidationError(error: ValidationError): AgentResult {
    return {
      success: false,
      type: 'validation_error',
      message: 'Input validation failed',
      suggestions: [{
        type: 'fix',
        message: error.message,
        action: 'manual_review'
      }]
    };
  }
}
```

### 3. Performance Optimization

```typescript
class OptimizedAgent extends CodeboltAgent {
  private cache = new Map<string, AnalysisResult>();
  
  async analyze(context: AnalysisContext): Promise<AnalysisResult> {
    const cacheKey = this.generateCacheKey(context);
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }
    
    const result = await this.performAnalysis(context);
    this.cache.set(cacheKey, result);
    
    // Clean up old cache entries
    if (this.cache.size > 100) {
      this.cleanupCache();
    }
    
    return result;
  }
  
  private generateCacheKey(context: AnalysisContext): string {
    return `${context.filePath}:${context.fileHash}:${context.timestamp}`;
  }
}
```

### 4. Testing Your Agent

```typescript
describe('ReactComponentAnalyzer', () => {
  let agent: ReactComponentAnalyzer;
  
  beforeEach(() => {
    agent = new ReactComponentAnalyzer();
  });
  
  test('should analyze functional component', async () => {
    const mockComponent = `
      import React from 'react';
      
      const Button = ({ onClick, children }) => {
        return <button onClick={onClick}>{children}</button>;
      };
      
      export default Button;
    `;
    
    const result = await agent.analyzeComponent({
      fileContent: mockComponent,
      filePath: 'src/components/Button.jsx'
    });
    
    expect(result.success).toBe(true);
    expect(result.suggestions).toContainEqual(
      expect.objectContaining({
        type: 'accessibility',
        message: expect.stringContaining('missing type attribute')
      })
    );
  });
  
  test('should handle malformed code gracefully', async () => {
    const malformedCode = 'const Button = (';
    
    const result = await agent.analyzeComponent({
      fileContent: malformedCode,
      filePath: 'src/components/Broken.jsx'
    });
    
    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
  });
});
```

## Debugging and Troubleshooting

### Enable Debug Mode
```bash
# Debug specific agent
codebolt agent debug "React Component Analyzer" --verbose

# Test agent with sample input
codebolt agent test "React Component Analyzer" \
  --file src/components/Button.jsx \
  --dry-run \
  --show-context
```

### Common Issues and Solutions

**Agent Not Triggering**
```bash
# Check agent registration
codebolt agent list --detailed

# Verify trigger patterns
codebolt agent inspect "React Component Analyzer" --triggers

# Test pattern matching
codebolt agent test-pattern "src/components/**/*.jsx" --file "src/components/Button.jsx"
```

**Poor Analysis Quality**
1. Improve prompt specificity
2. Add more context to the analysis
3. Use examples in prompts
4. Implement feedback loops

**Performance Issues**
1. Implement caching
2. Optimize trigger patterns
3. Use faster models for simple tasks
4. Implement result streaming

### Monitoring Agent Performance

```typescript
class MonitoredAgent extends CodeboltAgent {
  private metrics = {
    executions: 0,
    totalTime: 0,
    errors: 0,
    successRate: 0
  };
  
  async execute(context: AgentContext): Promise<AgentResult> {
    const startTime = Date.now();
    this.metrics.executions++;
    
    try {
      const result = await super.execute(context);
      this.updateSuccessMetrics(Date.now() - startTime);
      return result;
    } catch (error) {
      this.updateErrorMetrics(Date.now() - startTime);
      throw error;
    }
  }
  
  private updateSuccessMetrics(duration: number) {
    this.metrics.totalTime += duration;
    this.metrics.successRate = 
      (this.metrics.executions - this.metrics.errors) / this.metrics.executions;
  }
  
  getMetrics() {
    return {
      ...this.metrics,
      averageTime: this.metrics.totalTime / this.metrics.executions
    };
  }
}
```

## Deployment and Distribution

### Packaging Your Agent
```bash
# Create agent package
codebolt agent package ./agents/react-component-analyzer.json

# Publish to agent registry
codebolt agent publish react-component-analyzer-1.0.0.cbag
```

### Sharing Agents
```json
{
  "name": "react-component-analyzer",
  "version": "1.0.0",
  "repository": "https://github.com/yourorg/codebolt-agents",
  "license": "MIT",
  "keywords": ["react", "components", "analysis", "accessibility"],
  "codebolt": {
    "minVersion": "1.0.0",
    "categories": ["code-quality", "react"]
  }
}
```

## Next Steps

Now that you can create custom agents, explore:

1. **[Remix Agents](remix-agent.md)** - Modify existing agents
2. **[Multi-Agent Systems](CustomAgents/core/multi-agents/overview.md)** - Coordinate multiple agents
3. **[Task Flow Integration](CustomAgents/core/task-flow/overview.md)** - Use agents in workflows
4. **[MCP Tools](CustomAgents/Tools/overview.md)** - Extend agent capabilities

## Community Resources

- **Agent Templates**: [github.com/codebolt/agent-templates](https://github.com/codebolt/agent-templates)
- **Community Forum**: [community.codebolt.ai](https://community.codebolt.ai)
- **Agent Registry**: Browse and share agents with the community
- **Best Practices Guide**: Learn from experienced agent developers

Start with simple agents and gradually add complexity as you become more comfortable with the concepts and tools. The key to successful agent development is iteration and continuous improvement based on real-world usage.
