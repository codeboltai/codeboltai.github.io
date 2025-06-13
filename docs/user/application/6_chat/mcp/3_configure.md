# Configure MCP Tools

## Overview

Proper configuration is essential for MCP tools to work effectively in your Codebolt environment. This guide covers all aspects of tool configuration, from basic setup to advanced security and performance settings.

## Configuration Methods

### 1. Visual Configuration Interface
Access the MCP configuration through Codebolt's settings panel:
- **Settings** → **Extensions** → **MCP Tools**
- Graphical interface for tool management
- Real-time validation and testing
- Import/export configuration profiles

### 2. Configuration Files
```json
// .codebolt/mcp-config.json
{
  "version": "1.0",
  "tools": {
    "database-query": {
      "enabled": true,
      "config": {
        "connectionString": "postgresql://localhost:5432/mydb",
        "timeout": 30000,
        "poolSize": 10
      },
      "authentication": {
        "type": "environment",
        "keyName": "DB_PASSWORD"
      }
    }
  },
  "global": {
    "maxConcurrentTools": 5,
    "defaultTimeout": 15000,
    "logLevel": "info"
  }
}
```

### 3. Environment Variables
```bash
# Database configuration
CODEBOLT_DB_CONNECTION_STRING=postgresql://localhost:5432/mydb
CODEBOLT_DB_PASSWORD=your_secure_password

# API keys
CODEBOLT_OPENAI_API_KEY=sk-...
CODEBOLT_AWS_ACCESS_KEY=AKIA...
CODEBOLT_AWS_SECRET_KEY=...

# Tool-specific settings
CODEBOLT_GIT_USERNAME=your_username
CODEBOLT_GIT_TOKEN=ghp_...
```

## Tool-Specific Configuration

### Database Tools

#### PostgreSQL Configuration
```json
{
  "name": "postgresql-tool",
  "type": "database",
  "config": {
    "host": "localhost",
    "port": 5432,
    "database": "myapp",
    "username": "developer",
    "password": "${DB_PASSWORD}",
    "ssl": {
      "enabled": true,
      "rejectUnauthorized": false
    },
    "pool": {
      "min": 2,
      "max": 10,
      "acquireTimeoutMillis": 30000,
      "idleTimeoutMillis": 30000
    }
  }
}
```

#### MongoDB Configuration
```json
{
  "name": "mongodb-tool",
  "type": "database",
  "config": {
    "uri": "mongodb://localhost:27017",
    "database": "myapp",
    "options": {
      "useUnifiedTopology": true,
      "maxPoolSize": 10,
      "serverSelectionTimeoutMS": 5000,
      "socketTimeoutMS": 45000
    },
    "authentication": {
      "username": "${MONGO_USERNAME}",
      "password": "${MONGO_PASSWORD}",
      "authSource": "admin"
    }
  }
}
```

### API Integration Tools

#### REST API Configuration
```json
{
  "name": "rest-api-tool",
  "type": "api",
  "config": {
    "baseURL": "https://api.example.com/v1",
    "timeout": 10000,
    "headers": {
      "User-Agent": "Codebolt-MCP/1.0",
      "Accept": "application/json"
    },
    "authentication": {
      "type": "bearer",
      "token": "${API_TOKEN}"
    },
    "retry": {
      "attempts": 3,
      "delay": 1000,
      "backoff": "exponential"
    }
  }
}
```

#### GraphQL Configuration
```json
{
  "name": "graphql-tool",
  "type": "api",
  "config": {
    "endpoint": "https://api.example.com/graphql",
    "headers": {
      "Authorization": "Bearer ${GRAPHQL_TOKEN}",
      "Content-Type": "application/json"
    },
    "introspection": true,
    "cache": {
      "enabled": true,
      "ttl": 300
    }
  }
}
```

### Cloud Service Tools

#### AWS Configuration
```json
{
  "name": "aws-tool",
  "type": "cloud",
  "config": {
    "region": "us-east-1",
    "credentials": {
      "accessKeyId": "${AWS_ACCESS_KEY_ID}",
      "secretAccessKey": "${AWS_SECRET_ACCESS_KEY}",
      "sessionToken": "${AWS_SESSION_TOKEN}"
    },
    "services": {
      "s3": {
        "enabled": true,
        "buckets": ["my-app-bucket", "my-data-bucket"]
      },
      "lambda": {
        "enabled": true,
        "runtime": "nodejs18.x"
      },
      "rds": {
        "enabled": true,
        "instances": ["prod-db", "staging-db"]
      }
    }
  }
}
```

#### Google Cloud Configuration
```json
{
  "name": "gcp-tool",
  "type": "cloud",
  "config": {
    "projectId": "my-project-id",
    "keyFilename": "./path/to/service-account.json",
    "services": {
      "storage": {
        "enabled": true,
        "buckets": ["my-gcs-bucket"]
      },
      "functions": {
        "enabled": true,
        "region": "us-central1"
      }
    }
  }
}
```

## Security Configuration

### Authentication Methods

#### API Key Authentication
```json
{
  "authentication": {
    "type": "api-key",
    "location": "header",
    "name": "X-API-Key",
    "value": "${API_KEY}",
    "required": true
  }
}
```

#### OAuth 2.0 Configuration
```json
{
  "authentication": {
    "type": "oauth2",
    "flow": "authorization_code",
    "authorizationUrl": "https://auth.example.com/oauth/authorize",
    "tokenUrl": "https://auth.example.com/oauth/token",
    "clientId": "${OAUTH_CLIENT_ID}",
    "clientSecret": "${OAUTH_CLIENT_SECRET}",
    "scopes": ["read", "write"],
    "redirectUri": "http://localhost:8080/callback"
  }
}
```

#### JWT Token Authentication
```json
{
  "authentication": {
    "type": "jwt",
    "header": "Authorization",
    "prefix": "Bearer",
    "secret": "${JWT_SECRET}",
    "algorithm": "HS256",
    "expiresIn": "1h"
  }
}
```

### Permission Configuration
```json
{
  "permissions": {
    "resources": [
      {
        "type": "database",
        "actions": ["read", "write"],
        "conditions": {
          "tables": ["users", "products"],
          "operations": ["SELECT", "INSERT", "UPDATE"]
        }
      },
      {
        "type": "file",
        "actions": ["read"],
        "conditions": {
          "paths": ["./src/**", "./docs/**"],
          "extensions": [".js", ".ts", ".md"]
        }
      }
    ],
    "rate_limits": {
      "requests_per_minute": 100,
      "concurrent_requests": 5
    }
  }
}
```

## Performance Configuration

### Connection Pooling
```json
{
  "performance": {
    "connection_pool": {
      "min_connections": 2,
      "max_connections": 20,
      "idle_timeout": 30000,
      "acquire_timeout": 10000,
      "validation_query": "SELECT 1"
    }
  }
}
```

### Caching Configuration
```json
{
  "caching": {
    "enabled": true,
    "type": "redis",
    "config": {
      "host": "localhost",
      "port": 6379,
      "password": "${REDIS_PASSWORD}",
      "database": 0
    },
    "policies": {
      "default_ttl": 300,
      "max_cache_size": "100MB",
      "eviction_policy": "lru"
    }
  }
}
```

### Timeout Configuration
```json
{
  "timeouts": {
    "connection": 5000,
    "request": 30000,
    "idle": 60000,
    "keepalive": 2000
  }
}
```

## Environment-Specific Configuration

### Development Environment
```json
{
  "environment": "development",
  "config": {
    "debug_mode": true,
    "verbose_logging": true,
    "auto_reload": true,
    "mock_external_apis": true,
    "database": {
      "host": "localhost",
      "port": 5432,
      "database": "myapp_dev"
    }
  }
}
```

### Production Environment
```json
{
  "environment": "production",
  "config": {
    "debug_mode": false,
    "verbose_logging": false,
    "ssl_required": true,
    "encryption_at_rest": true,
    "database": {
      "host": "prod-db.example.com",
      "port": 5432,
      "database": "myapp_prod",
      "ssl": true
    },
    "monitoring": {
      "enabled": true,
      "metrics_endpoint": "https://metrics.example.com"
    }
  }
}
```

## Configuration Validation

### Schema Validation
```json
{
  "$schema": "https://schemas.codebolt.com/mcp-config/v1.json",
  "title": "MCP Tool Configuration",
  "type": "object",
  "properties": {
    "tools": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z0-9-_]+$": {
          "$ref": "#/definitions/tool"
        }
      }
    }
  },
  "definitions": {
    "tool": {
      "type": "object",
      "required": ["name", "type", "config"],
      "properties": {
        "name": { "type": "string" },
        "type": { "enum": ["database", "api", "cloud", "file"] },
        "config": { "type": "object" }
      }
    }
  }
}
```

### Configuration Testing
```bash
# Test configuration validity
codebolt mcp validate-config

# Test tool connections
codebolt mcp test-tools

# Dry run configuration changes
codebolt mcp apply-config --dry-run
```

## Configuration Management

### Version Control
```bash
# Initialize configuration repository
git init .codebolt-config
cd .codebolt-config

# Add configuration files
git add mcp-config.json
git add environments/
git commit -m "Initial MCP configuration"

# Branch for different environments
git checkout -b staging
git checkout -b production
```

### Configuration Templates
```json
{
  "templates": {
    "database": {
      "postgresql": {
        "type": "database",
        "config": {
          "host": "{{host}}",
          "port": "{{port|5432}}",
          "database": "{{database}}",
          "username": "{{username}}",
          "password": "${{{password_env}}}"
        }
      }
    }
  }
}
```

### Backup and Recovery
```bash
# Backup current configuration
codebolt mcp backup-config --output ./backup-$(date +%Y%m%d).json

# Restore from backup
codebolt mcp restore-config --input ./backup-20240101.json

# Export configuration for sharing
codebolt mcp export-config --sanitize --output ./shared-config.json
```

## Troubleshooting Configuration

### Common Issues

#### Connection Problems
```bash
# Test database connection
codebolt mcp test-connection --tool database-query

# Check network connectivity
codebolt mcp diagnose --tool api-client

# Validate credentials
codebolt mcp verify-auth --tool aws-s3
```

#### Permission Issues
```bash
# Check tool permissions
codebolt mcp check-permissions --tool file-manager

# Audit access patterns
codebolt mcp audit-access --since 24h

# Fix permission conflicts
codebolt mcp fix-permissions --tool database-query
```

#### Performance Issues
```bash
# Profile tool performance
codebolt mcp profile --tool slow-api

# Monitor resource usage
codebolt mcp monitor --real-time

# Optimize configuration
codebolt mcp optimize-config --suggest
```

### Logging Configuration
```json
{
  "logging": {
    "level": "info",
    "format": "json",
    "outputs": [
      {
        "type": "file",
        "path": "./logs/mcp-tools.log",
        "rotation": "daily",
        "retention": "30d"
      },
      {
        "type": "console",
        "colorize": true
      }
    ],
    "categories": {
      "database": "debug",
      "api": "info",
      "auth": "warn"
    }
  }
}
```

## Next Steps

No additional steps available. 