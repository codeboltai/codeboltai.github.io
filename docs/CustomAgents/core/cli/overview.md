# CLI Overview

The Codebolt Command Line Interface (CLI) provides powerful command-line tools for automation, scripting, and integration with your existing development workflows. Whether you're building CI/CD pipelines, automating repetitive tasks, or managing large-scale operations, the CLI gives you programmatic access to all of Codebolt's features.

## Introduction

While Codebolt's visual interface is perfect for interactive development, many scenarios require command-line automation:
- **CI/CD Pipelines** - Integrate Codebolt into your build and deployment processes
- **Batch Operations** - Process multiple files or projects simultaneously
- **Scripting and Automation** - Create custom scripts for repetitive tasks
- **Remote Operations** - Manage Codebolt installations on servers
- **Integration Testing** - Validate agents and workflows programmatically

The CLI provides a comprehensive set of commands that mirror and extend the functionality available in the visual interface, designed for automation and scripting scenarios.

## Installation and Setup

### Installing the CLI

```bash
# Install globally via npm
npm install -g @codebolt/cli

# Or install via Homebrew (macOS)
brew install codebolt/tap/codebolt-cli

# Or download binary directly
curl -L https://releases.codebolt.ai/cli/latest/install.sh | bash
```

### Initial Configuration

```bash
# Initialize Codebolt in your project
codebolt init

# Authenticate with Codebolt Cloud (optional)
codebolt auth login

# Configure default settings
codebolt config set editor.default_model gpt-4
codebolt config set agents.auto_update true
codebolt config set workflows.parallel_execution true

# Verify installation
codebolt --version
codebolt doctor  # Check system health
```

## Core Commands

### Project Management

#### Project Initialization
```bash
# Initialize new Codebolt project
codebolt init [project-name]
  --template react-typescript    # Use project template
  --agents basic                 # Include basic agents
  --workflows ci-cd             # Include CI/CD workflows
  --config team                 # Use team configuration

# Example: Create a new React project with full setup
codebolt init my-app \
  --template react-typescript \
  --agents "code-review,test-generator,security-scanner" \
  --workflows "ci-cd,code-quality" \
  --config ./team-config.json
```

#### Project Status and Information
```bash
# Show project status
codebolt status
  --verbose                     # Detailed information
  --json                       # JSON output format

# Analyze project structure
codebolt analyze
  --type complexity            # Complexity analysis
  --type dependencies          # Dependency analysis
  --type patterns             # Pattern analysis
  --output report.json        # Save results

# Get project insights
codebolt insights
  --category performance       # Performance insights
  --category security         # Security insights
  --category maintainability  # Maintainability insights
```

### Agent Management

#### Agent Operations
```bash
# List available agents
codebolt agent list
  --installed                  # Only installed agents
  --category code-quality     # Filter by category
  --format table             # Table format output

# Install agents
codebolt agent install code-reviewer
codebolt agent install security-scanner@2.1.0  # Specific version
codebolt agent install ./custom-agent.json     # Local agent

# Run agents manually
codebolt agent run code-reviewer
  --file src/components/Button.tsx    # Target specific file
  --config custom-config.json        # Custom configuration
  --output results.json              # Save results
  --dry-run                          # Preview without executing

# Test agents
codebolt agent test code-reviewer
  --input test-data.json
  --expected expected-output.json
  --timeout 30s

# Agent development
codebolt agent create my-custom-agent
  --template typescript         # Use TypeScript template
  --capabilities analyze,fix    # Agent capabilities
  --interactive                # Interactive setup
```

#### Agent Configuration
```bash
# Configure agent settings
codebolt agent configure code-reviewer
  --set confidence_threshold=0.8
  --set auto_apply=false
  --set max_suggestions=10

# Export agent configuration
codebolt agent export code-reviewer --output code-reviewer-config.json

# Import agent configuration
codebolt agent import code-reviewer-config.json

# Update agents
codebolt agent update                    # Update all agents
codebolt agent update code-reviewer     # Update specific agent
```

### Workflow Management

#### Workflow Operations
```bash
# List workflows
codebolt workflow list
  --status active              # Filter by status
  --category ci-cd            # Filter by category
  --format json              # JSON output

# Create new workflow
codebolt workflow create feature-development
  --template full-stack       # Use template
  --interactive              # Interactive setup
  --from-file workflow.yaml  # From configuration file

# Execute workflows
codebolt workflow run ci-pipeline
  --input '{"branch": "main", "environment": "staging"}'
  --wait                     # Wait for completion
  --follow                   # Follow execution logs
  --timeout 30m             # Set timeout

# Schedule workflows
codebolt workflow schedule deploy-staging
  --cron "0 2 * * 1-5"      # Weekdays at 2 AM
  --timezone UTC            # Timezone
  --enabled                 # Enable immediately
```

#### Workflow Monitoring
```bash
# Monitor workflow execution
codebolt workflow monitor ci-pipeline
  --execution-id abc123      # Specific execution
  --real-time               # Real-time updates
  --format json            # JSON output

# View workflow history
codebolt workflow history feature-development
  --last 30d               # Last 30 days
  --status failed          # Only failed executions
  --export history.csv     # Export to CSV

# Analyze workflow performance
codebolt workflow analyze ci-pipeline
  --metrics execution_time,success_rate
  --period 7d
  --output performance-report.json
```

### Code Operations

#### Code Analysis
```bash
# Analyze code quality
codebolt analyze code
  --path src/                 # Target directory
  --recursive                # Include subdirectories
  --exclude "**/*.test.js"   # Exclude patterns
  --rules eslint,security    # Analysis rules
  --format detailed         # Output format

# Generate code metrics
codebolt metrics
  --type complexity          # Complexity metrics
  --type maintainability    # Maintainability metrics
  --threshold high          # Only high-impact issues
  --export metrics.json    # Export results
```

#### Code Generation
```bash
# Generate code from prompts
codebolt generate component
  --name UserProfile
  --type react-typescript
  --props "name:string,email:string,avatar?:string"
  --output src/components/

# Generate tests
codebolt generate tests
  --file src/utils/helpers.js
  --framework jest
  --coverage 100
  --output src/utils/helpers.test.js

# Generate documentation
codebolt generate docs
  --input src/api/
  --format markdown
  --include-examples
  --output docs/api/
```

#### Code Transformation
```bash
# Batch code transformations
codebolt transform
  --pattern "src/**/*.js"
  --prompt "Convert to TypeScript with proper types"
  --preview                 # Preview changes
  --backup                 # Create backups

# Refactor code
codebolt refactor
  --file src/legacy/oldComponent.js
  --target modern-react
  --preserve-behavior
  --add-tests

# Format code
codebolt format
  --path src/
  --style prettier
  --fix                    # Fix formatting issues
```

## Advanced Usage

### Batch Operations

#### Processing Multiple Files
```bash
# Process all TypeScript files
codebolt batch process
  --pattern "src/**/*.{ts,tsx}"
  --agent code-reviewer
  --parallel 4             # Process 4 files in parallel
  --output-dir results/
  --continue-on-error     # Don't stop on errors

# Transform multiple projects
codebolt batch transform
  --projects "projects/*/"
  --prompt "Update to latest framework version"
  --dry-run               # Preview changes
  --report transform-report.json
```

#### Bulk Agent Operations
```bash
# Run multiple agents on a project
codebolt batch agents
  --agents "linter,security-scanner,test-generator"
  --sequential           # Run sequentially
  --aggregate-results   # Combine results
  --output comprehensive-analysis.json
```

### CI/CD Integration

#### GitHub Actions Integration
```yaml
# .github/workflows/codebolt.yml
name: Codebolt Analysis
on: [push, pull_request]

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Codebolt CLI
        run: |
          npm install -g @codebolt/cli
          codebolt auth login --token ${{ secrets.CODEBOLT_TOKEN }}
      
      - name: Run Code Analysis
        run: |
          codebolt workflow run code-analysis \
            --input '{"pr_number": "${{ github.event.pull_request.number }}"}'
            --output analysis-results.json
      
      - name: Comment on PR
        if: github.event_name == 'pull_request'
        run: |
          codebolt github comment-pr \
            --pr ${{ github.event.pull_request.number }} \
            --results analysis-results.json
```

#### Jenkins Pipeline Integration
```groovy
pipeline {
    agent any
    
    stages {
        stage('Setup') {
            steps {
                sh 'npm install -g @codebolt/cli'
                sh 'codebolt auth login --token $CODEBOLT_TOKEN'
            }
        }
        
        stage('Analysis') {
            steps {
                sh '''
                    codebolt workflow run comprehensive-analysis \
                        --input '{"branch": "'$BRANCH_NAME'", "build_number": "'$BUILD_NUMBER'"}' \
                        --wait \
                        --output analysis-results.json
                '''
            }
        }
        
        stage('Quality Gate') {
            steps {
                script {
                    def results = readJSON file: 'analysis-results.json'
                    if (results.quality_score < 8.0) {
                        error "Quality gate failed: score ${results.quality_score}"
                    }
                }
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'analysis-results.json'
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reports',
                reportFiles: 'codebolt-report.html',
                reportName: 'Codebolt Analysis Report'
            ])
        }
    }
}
```

### Scripting and Automation

#### Custom Scripts
```bash
#!/bin/bash
# deploy.sh - Automated deployment script

set -e

echo "Starting deployment process..."

# Run pre-deployment checks
codebolt workflow run pre-deployment-checks \
  --input '{"environment": "production"}' \
  --wait

if [ $? -ne 0 ]; then
  echo "Pre-deployment checks failed"
  exit 1
fi

# Build and test
codebolt workflow run build-and-test \
  --input '{"target": "production", "run_e2e": true}' \
  --wait

# Deploy if tests pass
if [ $? -eq 0 ]; then
  codebolt workflow run deploy-to-production \
    --input '{"version": "'$1'", "rollback_on_failure": true}' \
    --wait
  
  echo "Deployment completed successfully"
else
  echo "Build or tests failed, deployment aborted"
  exit 1
fi
```

#### PowerShell Scripts (Windows)
```powershell
# analyze-and-report.ps1
param(
    [string]$ProjectPath = ".",
    [string]$OutputDir = "./reports",
    [string]$EmailRecipients = ""
)

# Ensure output directory exists
New-Item -ItemType Directory -Force -Path $OutputDir

# Run comprehensive analysis
Write-Host "Running comprehensive analysis..."
codebolt analyze comprehensive `
  --path $ProjectPath `
  --output "$OutputDir/analysis.json" `
  --format detailed

# Generate reports
Write-Host "Generating reports..."
codebolt report generate `
  --input "$OutputDir/analysis.json" `
  --template comprehensive `
  --output "$OutputDir/report.html"

# Send email if recipients specified
if ($EmailRecipients) {
    codebolt notify email `
      --recipients $EmailRecipients `
      --subject "Code Analysis Report" `
      --body "Please find the attached analysis report." `
      --attachment "$OutputDir/report.html"
}

Write-Host "Analysis complete. Reports saved to $OutputDir"
```

## Configuration Management

### Configuration Files

#### Global Configuration
```json
{
  "version": "1.0.0",
  "defaults": {
    "model": "gpt-4",
    "temperature": 0.1,
    "max_tokens": 2000,
    "timeout": 300
  },
  "agents": {
    "auto_update": true,
    "parallel_execution": true,
    "max_concurrent": 4,
    "retry_attempts": 3
  },
  "workflows": {
    "default_timeout": "30m",
    "auto_retry": true,
    "notification_channels": ["slack", "email"]
  },
  "cli": {
    "output_format": "table",
    "verbose": false,
    "color": true,
    "progress_bars": true
  }
}
```

#### Project Configuration
```yaml
# codebolt.yml
project:
  name: "My Application"
  type: "web"
  language: "typescript"
  framework: "react"

agents:
  enabled:
    - code-reviewer
    - security-scanner
    - test-generator
  
  configurations:
    code-reviewer:
      confidence_threshold: 0.8
      auto_apply: false
      focus_areas: ["performance", "security", "maintainability"]
    
    security-scanner:
      severity_threshold: "medium"
      include_dependencies: true
      
workflows:
  ci-pipeline:
    triggers:
      - push: ["main", "develop"]
      - pull_request: ["main"]
    
    steps:
      - name: "quality-check"
        agents: ["code-reviewer", "security-scanner"]
      - name: "test-generation"
        agent: "test-generator"
        condition: "quality_check.passed"

cli:
  aliases:
    review: "agent run code-reviewer"
    test: "workflow run test-suite"
    deploy: "workflow run deployment"
```

### Environment Management

```bash
# Manage multiple environments
codebolt env create staging
codebolt env create production

# Switch environments
codebolt env use staging

# Configure environment-specific settings
codebolt env config staging --set api_url=https://staging-api.company.com
codebolt env config production --set api_url=https://api.company.com

# List environments
codebolt env list

# Export environment configuration
codebolt env export staging --output staging-config.json
```

## Output Formats and Integration

### Output Formats

```bash
# JSON output for programmatic processing
codebolt analyze --format json | jq '.issues[] | select(.severity == "high")'

# Table format for human readability
codebolt agent list --format table

# CSV format for spreadsheet import
codebolt metrics --format csv --output metrics.csv

# XML format for legacy systems
codebolt report generate --format xml --output report.xml

# Custom format with templates
codebolt report generate --template custom-template.mustache --output custom-report.html
```

### Integration with External Tools

#### Slack Integration
```bash
# Send results to Slack
codebolt analyze --format json | codebolt notify slack \
  --channel "#dev-team" \
  --template analysis-summary

# Configure Slack webhook
codebolt config set integrations.slack.webhook_url $SLACK_WEBHOOK_URL
```

#### JIRA Integration
```bash
# Create JIRA issues from analysis results
codebolt analyze --format json | codebolt jira create-issues \
  --project DEV \
  --issue-type Bug \
  --assignee-field component_owner

# Update existing JIRA issues
codebolt jira update-issue DEV-123 \
  --field status=Resolved \
  --comment "Fixed by automated analysis"
```

#### Database Integration
```bash
# Store results in database
codebolt analyze --format json | codebolt db store \
  --connection postgresql://user:pass@localhost/codebolt \
  --table analysis_results

# Query historical data
codebolt db query \
  --connection postgresql://user:pass@localhost/codebolt \
  --query "SELECT * FROM analysis_results WHERE created_at > NOW() - INTERVAL '7 days'"
```

## Performance and Optimization

### Parallel Processing

```bash
# Process multiple files in parallel
codebolt batch process \
  --pattern "src/**/*.ts" \
  --parallel 8 \
  --chunk-size 10

# Parallel workflow execution
codebolt workflow run-parallel \
  --workflows "test-suite,security-scan,performance-test" \
  --max-concurrent 3
```

### Caching and Incremental Processing

```bash
# Enable caching for faster subsequent runs
codebolt config set cache.enabled true
codebolt config set cache.ttl 3600  # 1 hour

# Incremental analysis (only changed files)
codebolt analyze --incremental \
  --since HEAD~1  # Since last commit

# Clear cache when needed
codebolt cache clear
codebolt cache clear --pattern "analysis_*"
```

### Resource Management

```bash
# Limit resource usage
codebolt config set limits.max_memory 2GB
codebolt config set limits.max_cpu_percent 50
codebolt config set limits.timeout 600  # 10 minutes

# Monitor resource usage
codebolt monitor resources --real-time
```

## Troubleshooting and Debugging

### Debug Mode

```bash
# Enable debug logging
codebolt --debug analyze code

# Verbose output
codebolt --verbose workflow run ci-pipeline

# Trace execution
codebolt --trace agent run code-reviewer
```

### Health Checks

```bash
# System health check
codebolt doctor
  --check-dependencies
  --check-permissions
  --check-connectivity

# Agent health check
codebolt agent doctor code-reviewer
  --test-configuration
  --test-connectivity
  --validate-permissions

# Workflow validation
codebolt workflow validate ci-pipeline
  --check-syntax
  --check-dependencies
  --dry-run
```

### Log Management

```bash
# View logs
codebolt logs
  --level error        # Filter by level
  --since 1h          # Last hour
  --follow           # Follow new logs
  --agent code-reviewer  # Specific agent

# Export logs
codebolt logs export
  --format json
  --output logs.json
  --compress

# Clear logs
codebolt logs clear --older-than 30d
```

## Best Practices

### Script Organization

```bash
# Use configuration files
codebolt --config ./configs/production.json analyze

# Environment-specific configurations
codebolt --env production workflow run deploy

# Modular scripts
#!/bin/bash
source ./scripts/common.sh
source ./scripts/codebolt-helpers.sh

run_quality_checks() {
  codebolt workflow run quality-checks --wait
}

deploy_if_quality_passes() {
  if run_quality_checks; then
    codebolt workflow run deploy --env $1
  else
    echo "Quality checks failed, deployment aborted"
    exit 1
  fi
}
```

### Error Handling

```bash
#!/bin/bash
set -e  # Exit on any error

# Function to handle errors
handle_error() {
  echo "Error occurred in line $1"
  codebolt notify slack --channel "#alerts" --message "Build failed at line $1"
  exit 1
}

trap 'handle_error $LINENO' ERR

# Your Codebolt operations here
codebolt workflow run ci-pipeline --wait
```

### Performance Optimization

```bash
# Use parallel processing for independent operations
codebolt batch process \
  --pattern "src/**/*.ts" \
  --parallel $(nproc) \
  --chunk-size 5

# Cache results for repeated operations
codebolt config set cache.enabled true

# Use incremental processing
codebolt analyze --incremental --since HEAD~1
```

## Next Steps

Ready to master the Codebolt CLI? Here's your learning path:

1. **Start with Basic Commands**: Get familiar with core operations
2. **Learn Scripting**: Create automation scripts for your workflows
3. **Integrate with CI/CD**: Add Codebolt to your build pipelines
4. **Optimize Performance**: Use parallel processing and caching
5. **Advanced Integration**: Connect with external tools and services

## Related Documentation

- [Task Flow](CustomAgents/core/task-flow/overview.md) - Create workflows that can be executed via CLI
- [Agents](CustomAgents/agents/overview.md) - Manage and run agents from the command line
- [API Reference](../../api-reference.md) - Complete CLI command reference

## Community Resources

- **CLI Examples**: Real-world CLI usage examples
- **Script Library**: Community-contributed automation scripts
- **Integration Guides**: Step-by-step integration tutorials
- **Best Practices**: Learn from experienced CLI users

The Codebolt CLI transforms how you integrate AI-powered development tools into your existing workflows. From simple automation scripts to complex CI/CD pipelines, the CLI provides the flexibility and power you need to scale Codebolt across your entire development process.
