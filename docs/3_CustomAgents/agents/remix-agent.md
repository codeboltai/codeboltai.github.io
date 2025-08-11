# Remixing Agents

Remixing agents is the process of taking existing agents and modifying them to better fit your specific needs, coding standards, or workflow preferences. Think of it as forking an open-source project - you start with a solid foundation and customize it to your requirements.

## What is Agent Remixing?

Agent remixing allows you to:
- **Customize existing agents** without building from scratch
- **Adapt agents to your team's conventions** and coding standards  
- **Combine features** from multiple agents into one
- **Extend functionality** of built-in or community agents
- **Learn from existing implementations** while creating your own variants

This approach is much faster than creating agents from scratch and helps you leverage the collective knowledge of the Codebolt community.

## When to Remix vs. Create New

### Remix When:
- ✅ An existing agent does 70%+ of what you need
- ✅ You want to modify behavior or add features to a working agent
- ✅ You need to adapt an agent to different languages or frameworks
- ✅ You want to learn how successful agents are structured
- ✅ You need to customize prompts or triggers for your workflow

### Create New When:
- ❌ No existing agent addresses your use case
- ❌ Your requirements are completely different from existing agents
- ❌ You need a highly specialized, unique workflow
- ❌ The existing agent's architecture doesn't fit your needs

## How to Remix Agents

### Method 1: Using the Codebolt UI

#### Step 1: Find an Agent to Remix
1. Open the **Agents** panel in Codebolt
2. Browse the **Community** or **Built-in** agent collections
3. Click on an agent that's close to your needs
4. Click **"Remix This Agent"**

#### Step 2: Customize the Agent
The remix interface will open with the original agent's configuration:

```
Original Agent: "JavaScript Code Reviewer"
Your Remix: "TypeScript Enterprise Code Reviewer"

Modifications:
✓ Change file patterns to include .ts and .tsx files
✓ Add enterprise-specific coding standards
✓ Include security scanning rules
✓ Add team notification integration
```

#### Step 3: Test and Deploy
1. **Preview Changes**: See what will be different
2. **Test with Sample Code**: Run the agent on test files
3. **Save Your Remix**: Give it a new name and description
4. **Deploy**: Activate the agent in your workspace

### Method 2: Configuration File Remixing

#### Step 1: Export the Original Agent
```bash
# Export an existing agent's configuration
codebolt agent export "JavaScript Code Reviewer" --output js-reviewer-original.json

# View the configuration
cat js-reviewer-original.json
```

#### Step 2: Create Your Remix Configuration
```json
{
  "name": "TypeScript Enterprise Code Reviewer",
  "version": "1.0.0",
  "description": "Enterprise-grade TypeScript code review with security focus",
  "basedOn": {
    "agent": "JavaScript Code Reviewer",
    "version": "2.1.0",
    "modifications": "Added TypeScript support, enterprise rules, security scanning"
  },
  
  "triggers": [
    {
      "type": "file_save",
      "patterns": [
        "src/**/*.{ts,tsx}",
        "lib/**/*.{ts,tsx}",
        "apps/**/*.{ts,tsx}"
      ],
      "exclude": [
        "**/*.test.{ts,tsx}",
        "**/*.spec.{ts,tsx}",
        "node_modules/**",
        "dist/**",
        "build/**"
      ],
      "debounce": 2000
    },
    {
      "type": "git_commit",
      "branch_patterns": ["feature/*", "bugfix/*", "hotfix/*"]
    }
  ],
  
  "workflow": [
    {
      "name": "typescript_check",
      "type": "typescript_compiler",
      "config": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true
      }
    },
    {
      "name": "enterprise_lint",
      "type": "eslint",
      "config": {
        "extends": [
          "@company/eslint-config-enterprise",
          "@typescript-eslint/recommended",
          "@typescript-eslint/recommended-requiring-type-checking"
        ],
        "rules": {
          "no-any": "error",
          "explicit-function-return-type": "error",
          "@typescript-eslint/no-unsafe-assignment": "error"
        }
      }
    },
    {
      "name": "security_scan",
      "type": "security_analyzer",
      "config": {
        "rules": ["owasp-top-10", "enterprise-security"],
        "severity_threshold": "medium"
      }
    },
    {
      "name": "ai_review",
      "type": "ai_analysis",
      "config": {
        "model": "gpt-4",
        "temperature": 0.1,
        "prompt": "enterprise_typescript_review.prompt"
      }
    }
  ],
  
  "output": {
    "format": "enterprise_report",
    "destinations": ["console", "slack", "jira"],
    "slack": {
      "channel": "#code-reviews",
      "webhook": "${SLACK_WEBHOOK_URL}"
    },
    "jira": {
      "project": "CR",
      "issue_type": "Code Review"
    }
  },
  
  "settings": {
    "auto_apply_fixes": false,
    "require_approval": true,
    "confidence_threshold": 0.9,
    "max_suggestions": 15,
    "enterprise_mode": true
  }
}
```

#### Step 3: Create Custom Prompt Template
```
// enterprise_typescript_review.prompt
You are a senior TypeScript developer conducting a code review for an enterprise application.

Review this TypeScript code for:

## Type Safety & TypeScript Best Practices
- Proper type annotations and interfaces
- Avoidance of 'any' type
- Generic usage and constraints
- Strict null checks compliance
- Proper module declarations

## Enterprise Code Standards
- SOLID principles adherence
- Design pattern implementation
- Error handling and logging
- Performance considerations
- Memory management

## Security Considerations
- Input validation and sanitization
- SQL injection prevention
- XSS vulnerability assessment
- Authentication and authorization
- Data encryption requirements

## Maintainability
- Code documentation and comments
- Test coverage recommendations
- Refactoring opportunities
- Technical debt identification

## Team Conventions
- Naming conventions compliance
- File structure adherence
- Import/export patterns
- Configuration management

Provide specific, actionable feedback with code examples where applicable.
Prioritize security and maintainability issues.
Include severity levels: Critical, High, Medium, Low.

Code to review:
{file_content}

Project context:
- Framework: {project_framework}
- TypeScript version: {typescript_version}
- Team size: {team_size}
```

#### Step 4: Register Your Remix
```bash
# Register the remixed agent
codebolt agent register typescript-enterprise-reviewer.json

# Verify it's working
codebolt agent test "TypeScript Enterprise Code Reviewer" \
  --file src/components/UserProfile.tsx \
  --dry-run
```

### Method 3: Programmatic Remixing (TypeScript SDK)

```typescript
import { CodeboltAgent, AgentRemixer } from '@codebolt/sdk';

class TypeScriptEnterpriseReviewer extends CodeboltAgent {
  constructor() {
    // Start with the base agent
    const baseAgent = AgentRemixer.load('JavaScript Code Reviewer');
    
    // Initialize with base configuration
    super(baseAgent.getConfiguration());
    
    // Apply customizations
    this.customizeForTypeScript();
    this.addEnterpriseRules();
    this.addSecurityScanning();
    this.addTeamIntegrations();
  }
  
  private customizeForTypeScript() {
    // Update file patterns
    this.updateTriggers({
      patterns: ['src/**/*.{ts,tsx}', 'lib/**/*.{ts,tsx}'],
      exclude: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}']
    });
    
    // Add TypeScript-specific workflow steps
    this.addWorkflowStep({
      name: 'typescript_check',
      type: 'typescript_compiler',
      config: {
        strict: true,
        noImplicitAny: true,
        strictNullChecks: true
      }
    });
  }
  
  private addEnterpriseRules() {
    // Add enterprise linting rules
    this.addWorkflowStep({
      name: 'enterprise_lint',
      type: 'eslint',
      config: {
        extends: ['@company/eslint-config-enterprise'],
        rules: {
          'no-any': 'error',
          'explicit-function-return-type': 'error'
        }
      }
    });
  }
  
  private addSecurityScanning() {
    this.addWorkflowStep({
      name: 'security_scan',
      type: 'security_analyzer',
      config: {
        rules: ['owasp-top-10', 'enterprise-security'],
        severity_threshold: 'medium'
      }
    });
  }
  
  private addTeamIntegrations() {
    this.addOutputDestination({
      type: 'slack',
      config: {
        channel: '#code-reviews',
        webhook: process.env.SLACK_WEBHOOK_URL
      }
    });
    
    this.addOutputDestination({
      type: 'jira',
      config: {
        project: 'CR',
        issue_type: 'Code Review'
      }
    });
  }
  
  // Override the analysis method to add enterprise-specific logic
  async performAnalysis(context: AnalysisContext): Promise<AnalysisResult> {
    const baseResult = await super.performAnalysis(context);
    
    // Add enterprise-specific analysis
    const enterpriseIssues = await this.runEnterpriseAnalysis(context);
    const securityIssues = await this.runSecurityAnalysis(context);
    
    return {
      ...baseResult,
      suggestions: [
        ...baseResult.suggestions,
        ...enterpriseIssues,
        ...securityIssues
      ],
      metadata: {
        ...baseResult.metadata,
        enterpriseCompliance: this.checkEnterpriseCompliance(context),
        securityScore: this.calculateSecurityScore(securityIssues)
      }
    };
  }
  
  private async runEnterpriseAnalysis(context: AnalysisContext): Promise<Suggestion[]> {
    // Implementation for enterprise-specific analysis
    return [];
  }
  
  private async runSecurityAnalysis(context: AnalysisContext): Promise<Suggestion[]> {
    // Implementation for security analysis
    return [];
  }
}

// Register the remixed agent
const agent = new TypeScriptEnterpriseReviewer();
await agent.register();
```

## Practical Remix Examples

### Example 1: Adapting a React Agent for Vue.js

**Original Agent**: React Component Analyzer
**Remix Goal**: Analyze Vue.js components

```json
{
  "name": "Vue Component Analyzer",
  "basedOn": {
    "agent": "React Component Analyzer",
    "version": "1.5.0"
  },
  
  "triggers": [
    {
      "type": "file_save",
      "patterns": ["src/**/*.vue", "components/**/*.vue"]
    }
  ],
  
  "workflow": [
    {
      "name": "parse_vue_component",
      "type": "vue_parser",
      "config": {
        "parser": "vue-eslint-parser",
        "parserOptions": {
          "ecmaVersion": 2020,
          "sourceType": "module"
        }
      }
    },
    {
      "name": "analyze_composition_api",
      "type": "vue_analyzer",
      "config": {
        "checkCompositionAPI": true,
        "checkReactivity": true,
        "checkLifecycle": true
      }
    },
    {
      "name": "ai_analysis",
      "type": "ai_analysis",
      "config": {
        "prompt": "vue_component_analysis.prompt"
      }
    }
  ]
}
```

### Example 2: Creating a Language-Specific Variant

**Original Agent**: Generic Code Quality Checker
**Remix Goal**: Python-specific quality checker

```typescript
class PythonQualityChecker extends CodeboltAgent {
  constructor() {
    const baseAgent = AgentRemixer.load('Generic Code Quality Checker');
    super(baseAgent.getConfiguration());
    
    this.adaptForPython();
  }
  
  private adaptForPython() {
    // Update file patterns
    this.updateTriggers({
      patterns: ['**/*.py'],
      exclude: ['**/__pycache__/**', '**/venv/**', '**/.pytest_cache/**']
    });
    
    // Add Python-specific tools
    this.addWorkflowStep({
      name: 'python_lint',
      type: 'pylint',
      config: {
        rcfile: '.pylintrc',
        disable: ['C0111', 'C0103']
      }
    });
    
    this.addWorkflowStep({
      name: 'python_format',
      type: 'black',
      config: {
        line_length: 88,
        target_version: ['py38', 'py39', 'py310']
      }
    });
    
    this.addWorkflowStep({
      name: 'python_security',
      type: 'bandit',
      config: {
        severity: 'medium',
        confidence: 'medium'
      }
    });
    
    // Update AI prompt for Python-specific analysis
    this.updateAIPrompt(`
      You are reviewing Python code for:
      1. PEP 8 compliance and Python idioms
      2. Type hints usage (Python 3.5+)
      3. Exception handling best practices
      4. Performance optimizations
      5. Security vulnerabilities
      6. Testing recommendations
      
      Focus on Pythonic solutions and modern Python features.
    `);
  }
}
```

### Example 3: Team-Specific Customization

**Original Agent**: API Documentation Generator
**Remix Goal**: Company-specific API documentation

```json
{
  "name": "Acme Corp API Documentation Generator",
  "basedOn": {
    "agent": "API Documentation Generator",
    "version": "2.0.0"
  },
  
  "settings": {
    "company_standards": {
      "api_version_format": "v{major}.{minor}",
      "authentication_method": "JWT",
      "response_format": "JSON:API",
      "error_format": "RFC7807"
    },
    
    "documentation_template": {
      "include_company_header": true,
      "include_rate_limiting": true,
      "include_sdk_examples": true,
      "supported_languages": ["javascript", "python", "java", "csharp"]
    },
    
    "integrations": {
      "confluence": {
        "space_key": "API",
        "parent_page": "API Documentation"
      },
      "postman": {
        "workspace_id": "${POSTMAN_WORKSPACE_ID}",
        "collection_name": "Acme Corp APIs"
      }
    }
  },
  
  "workflow": [
    {
      "name": "extract_endpoints",
      "type": "api_extractor",
      "config": {
        "frameworks": ["express", "fastify", "koa"],
        "include_middleware": true
      }
    },
    {
      "name": "validate_company_standards",
      "type": "company_validator",
      "config": {
        "check_naming_conventions": true,
        "check_response_formats": true,
        "check_error_handling": true
      }
    },
    {
      "name": "generate_openapi",
      "type": "openapi_generator",
      "config": {
        "version": "3.0.3",
        "info": {
          "title": "Acme Corp API",
          "contact": {
            "name": "API Team",
            "email": "api-team@acmecorp.com"
          },
          "license": {
            "name": "Proprietary"
          }
        }
      }
    },
    {
      "name": "generate_sdk_examples",
      "type": "sdk_example_generator",
      "config": {
        "languages": ["javascript", "python", "java", "csharp"],
        "include_authentication": true,
        "include_error_handling": true
      }
    }
  ]
}
```

## Advanced Remixing Techniques

### Combining Multiple Agents

```typescript
class FullStackReviewer extends CodeboltAgent {
  constructor() {
    super({
      name: 'Full Stack Code Reviewer',
      version: '1.0.0'
    });
    
    // Combine features from multiple agents
    this.combineAgents([
      'React Component Analyzer',
      'Node.js API Reviewer',
      'Database Query Analyzer',
      'Security Scanner'
    ]);
  }
  
  private combineAgents(agentNames: string[]) {
    agentNames.forEach(name => {
      const agent = AgentRemixer.load(name);
      
      // Merge triggers
      this.mergeTriggers(agent.getTriggers());
      
      // Merge workflow steps
      this.mergeWorkflowSteps(agent.getWorkflow());
      
      // Merge settings
      this.mergeSettings(agent.getSettings());
    });
  }
  
  async performAnalysis(context: AnalysisContext): Promise<AnalysisResult> {
    const results: AnalysisResult[] = [];
    
    // Run frontend analysis if it's a frontend file
    if (this.isFrontendFile(context.filePath)) {
      results.push(await this.runFrontendAnalysis(context));
    }
    
    // Run backend analysis if it's a backend file
    if (this.isBackendFile(context.filePath)) {
      results.push(await this.runBackendAnalysis(context));
    }
    
    // Run database analysis if it contains database queries
    if (this.containsDatabaseQueries(context.fileContent)) {
      results.push(await this.runDatabaseAnalysis(context));
    }
    
    // Always run security analysis
    results.push(await this.runSecurityAnalysis(context));
    
    return this.mergeResults(results);
  }
}
```

### Creating Agent Variants

```typescript
class AgentVariantFactory {
  static createLanguageVariant(baseAgent: string, language: string): CodeboltAgent {
    const config = AgentRemixer.load(baseAgent).getConfiguration();
    
    const languageConfigs = {
      typescript: {
        patterns: ['**/*.{ts,tsx}'],
        linter: 'typescript-eslint',
        formatter: 'prettier'
      },
      python: {
        patterns: ['**/*.py'],
        linter: 'pylint',
        formatter: 'black'
      },
      java: {
        patterns: ['**/*.java'],
        linter: 'checkstyle',
        formatter: 'google-java-format'
      },
      go: {
        patterns: ['**/*.go'],
        linter: 'golangci-lint',
        formatter: 'gofmt'
      }
    };
    
    const langConfig = languageConfigs[language];
    if (!langConfig) {
      throw new Error(`Unsupported language: ${language}`);
    }
    
    // Apply language-specific configuration
    config.triggers = config.triggers.map(trigger => ({
      ...trigger,
      patterns: langConfig.patterns
    }));
    
    config.workflow = config.workflow.map(step => {
      if (step.type === 'linter') {
        return { ...step, config: { ...step.config, tool: langConfig.linter } };
      }
      if (step.type === 'formatter') {
        return { ...step, config: { ...step.config, tool: langConfig.formatter } };
      }
      return step;
    });
    
    return new CodeboltAgent(config);
  }
  
  static createFrameworkVariant(baseAgent: string, framework: string): CodeboltAgent {
    // Similar implementation for framework-specific variants
  }
  
  static createTeamVariant(baseAgent: string, teamConfig: TeamConfig): CodeboltAgent {
    // Implementation for team-specific customizations
  }
}

// Usage
const tsReviewer = AgentVariantFactory.createLanguageVariant('Code Reviewer', 'typescript');
const reactAnalyzer = AgentVariantFactory.createFrameworkVariant('Component Analyzer', 'react');
```

## Best Practices for Remixing

### 1. Document Your Changes
```json
{
  "name": "My Custom Agent",
  "basedOn": {
    "agent": "Original Agent",
    "version": "1.0.0",
    "modifications": [
      "Added TypeScript support",
      "Integrated with company Slack",
      "Added custom security rules",
      "Modified prompt for enterprise context"
    ]
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "2024-01-15",
      "changes": ["Initial remix from Original Agent v1.0.0"]
    },
    {
      "version": "1.1.0", 
      "date": "2024-01-20",
      "changes": ["Added security scanning", "Improved TypeScript support"]
    }
  ]
}
```

### 2. Test Thoroughly
```bash
# Test your remix with various file types
codebolt agent test "My Custom Agent" --file test-files/component.tsx
codebolt agent test "My Custom Agent" --file test-files/api.ts
codebolt agent test "My Custom Agent" --file test-files/utils.ts

# Compare with original agent
codebolt agent compare "Original Agent" "My Custom Agent" --file test-files/sample.js
```

### 3. Maintain Compatibility
```typescript
class CompatibleRemix extends CodeboltAgent {
  constructor() {
    super({
      name: 'Compatible Remix',
      compatibilityVersion: '1.0.0'
    });
  }
  
  // Ensure backward compatibility
  async execute(context: AgentContext): Promise<AgentResult> {
    try {
      return await this.newImplementation(context);
    } catch (error) {
      // Fall back to original behavior
      return await this.originalImplementation(context);
    }
  }
}
```

### 4. Version Your Remixes
```json
{
  "name": "Enterprise Code Reviewer",
  "version": "2.1.0",
  "basedOn": {
    "agent": "Code Reviewer",
    "version": "1.5.0"
  },
  "compatibility": {
    "codebolt_min_version": "1.0.0",
    "node_min_version": "16.0.0"
  }
}
```

## Sharing Your Remixes

### Publishing to the Community
```bash
# Package your remix
codebolt agent package my-custom-agent.json

# Publish to the community registry
codebolt agent publish my-custom-agent-1.0.0.cbag \
  --category "code-quality" \
  --tags "typescript,enterprise,security" \
  --description "Enterprise TypeScript code reviewer with security focus"
```

### Creating Agent Templates
```json
{
  "name": "Enterprise Agent Template",
  "type": "template",
  "description": "Template for creating enterprise-grade code review agents",
  "parameters": [
    {
      "name": "language",
      "type": "select",
      "options": ["typescript", "javascript", "python", "java"],
      "required": true
    },
    {
      "name": "slack_webhook",
      "type": "string",
      "description": "Slack webhook URL for notifications"
    },
    {
      "name": "security_level",
      "type": "select",
      "options": ["basic", "enterprise", "government"],
      "default": "enterprise"
    }
  ],
  "template": "enterprise-agent-template.json"
}
```

## Troubleshooting Remix Issues

### Common Problems and Solutions

**Remix Not Working as Expected**
```bash
# Debug the remix process
codebolt agent debug-remix "Original Agent" "My Remix" --verbose

# Check configuration differences
codebolt agent diff "Original Agent" "My Remix"
```

**Performance Issues**
```bash
# Profile agent performance
codebolt agent profile "My Remix" --duration 60s

# Compare performance with original
codebolt agent benchmark "Original Agent" "My Remix"
```

**Trigger Pattern Issues**
```bash
# Test trigger patterns
codebolt agent test-triggers "My Remix" --directory src/

# Validate pattern syntax
codebolt agent validate-patterns "src/**/*.{ts,tsx}"
```

## Next Steps

Now that you understand agent remixing:

1. **Browse the Agent Registry** to find agents to remix
2. **Join the Community** to share your remixes and get feedback
3. **Explore Multi-Agent Systems** to coordinate your remixed agents
4. **Learn Advanced SDK Features** for more sophisticated remixing

## Community Resources

- **Agent Registry**: Browse remixable agents
- **Remix Gallery**: See examples of successful remixes
- **Community Forum**: Get help with remixing challenges
- **Template Library**: Use pre-built remix templates

Remixing is a powerful way to quickly create agents that perfectly fit your needs. Start with small modifications and gradually build more sophisticated customizations as you become comfortable with the process.
