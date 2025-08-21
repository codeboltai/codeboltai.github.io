# Utility Commands

This section covers all utility and general management commands for the Codebolt CLI.

## Overview

Utility commands provide essential functionality for CLI management, authentication, and general operations that are not specific to agents, tools, or providers.

## Commands

### Login
Authenticate with the Codebolt platform.

```bash
codebolt-cli login
```

![login](/customagent/login.png)

*This will prompt a login message with a unique URL. Open the URL in your browser and sign in to complete the authentication process.*



### Logout
Sign out from the Codebolt platform.

```bash
codebolt-cli logout
```

**Description:** Log out of the application and clear your session.

**What it does:**
- Clears stored authentication tokens
- Ends current session
- Removes local credentials
- Confirms logout completion

### Version
Check the application version.

```bash
codebolt-cli version
```

**Description:** Display the current version of the codebolt-cli CLI.

**Output:** Shows the current CLI version (e.g., "1.0.1")

**Use Cases:**
- Verify CLI installation
- Check for updates
- Troubleshooting version-specific issues
- Documentation reference

### Initialize
Initialize the Codebolt CLI.

```bash
codebolt-cli init
```

**Description:** Initialize the Codebolt CLI with necessary configuration.

**What it does:**
- Creates local configuration files
- Sets up default settings
- Establishes workspace structure
- Configures environment variables

**Initialization Steps:**
1. Creates `.codebolt` configuration directory
2. Generates default configuration files
3. Sets up local workspace settings
4. Configures authentication preferences

## Configuration Management

### Local Configuration
The CLI stores configuration in:
- `~/.codebolt/config.json` - User preferences
- `~/.codebolt/auth.json` - Authentication tokens
- `~/.codebolt/workspace.json` - Workspace settings

### Environment Variables
The CLI respects these environment variables:
- `CODEBOLT_API_URL` - API endpoint URL
- `CODEBOLT_WORKSPACE` - Default workspace path
- `CODEBOLT_LOG_LEVEL` - Logging verbosity

## Authentication Management

### Session Management
- **Automatic Token Refresh**: Tokens are automatically refreshed
- **Session Persistence**: Sessions persist across CLI restarts
- **Secure Storage**: Credentials are stored securely locally

### Multiple Accounts
- **Account Switching**: Support for multiple accounts
- **Profile Management**: Named profiles for different contexts
- **Workspace Isolation**: Separate workspaces per account

## Best Practices

1. **Regular Logout**: Log out when switching between accounts
2. **Version Checking**: Check version before reporting issues
3. **Initialization**: Run init after fresh installation
4. **Secure Credentials**: Never share authentication tokens
5. **Workspace Organization**: Use separate workspaces for different projects

## Troubleshooting

### Authentication Issues
- **Invalid Credentials**: Verify username/password
- **Token Expired**: Re-authenticate with `login`
- **Network Issues**: Check internet connection
- **API Unavailable**: Verify API endpoint configuration

### Configuration Issues
- **Missing Config**: Run `init` to create configuration
- **Corrupted Config**: Delete config files and re-run `init`
- **Permission Issues**: Check file permissions on config directory

### Version Issues
- **Outdated CLI**: Update to latest version
- **Version Mismatch**: Check compatibility with server version
- **Installation Issues**: Reinstall CLI if necessary

## Security Considerations

- **Token Storage**: Authentication tokens are stored locally
- **Credential Protection**: Never commit credentials to version control
- **Session Security**: Log out from shared systems
- **API Security**: Use HTTPS endpoints only

## Related Commands

These utility commands work with all other CLI commands:
- Authentication is required for most operations
- Version checking helps with troubleshooting
- Initialization sets up the environment for all commands
