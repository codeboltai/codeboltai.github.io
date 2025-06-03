---
sidebar_position: 3
---

# Authentication

The Codebolt CLI requires authentication to access platform features like publishing agents, listing your projects, and syncing configurations. This guide covers how to authenticate and manage your session.

## Overview

Authentication in Codebolt CLI provides:
- Secure access to your Codebolt account
- Permission to publish and manage agents
- Access to private agents and tools
- Synchronization with the Codebolt platform

## Login Process

### Initial Login

To authenticate with your Codebolt account:

```bash
codebolt-cli login
```

This command will:
1. Prompt you for your credentials
2. Authenticate with the Codebolt platform
3. Store your session securely
4. Confirm successful authentication

### Interactive Login Flow

The login process includes interactive prompts:

```bash
$ codebolt-cli login
? Email: your-email@example.com
? Password: [hidden]
✓ Successfully logged in!
```

## Session Management

### Check Authentication Status

To verify if you're currently logged in:

```bash
codebolt-cli listagents
```

If you're authenticated, this will display your agents. If not, you'll receive an authentication error.

### Logout

To end your session:

```bash
codebolt-cli logout
```

This will:
- Clear your stored credentials
- End your current session
- Require re-authentication for future commands

## Authentication Storage

### Local Storage

The CLI stores authentication data locally in a secure format. The exact location depends on your operating system:

- **Windows**: `%APPDATA%\codebolt-cli\`
- **macOS**: `~/Library/Application Support/codebolt-cli/`
- **Linux**: `~/.config/codebolt-cli/`

### Security Considerations

- Credentials are stored securely using system-appropriate methods
- Session tokens have expiration times
- Logout clears all stored authentication data
- Never share your authentication files

## Troubleshooting Authentication

### Common Issues

#### Invalid Credentials
```bash
Error: Invalid email or password
```

**Solution**: Verify your email and password are correct. If you've forgotten your password, reset it on the Codebolt platform.

#### Session Expired
```bash
Error: Authentication token expired
```

**Solution**: Log out and log back in:
```bash
codebolt-cli logout
codebolt-cli login
```

#### Network Issues
```bash
Error: Unable to connect to authentication server
```

**Solutions**:
- Check your internet connection
- Verify firewall settings
- Try again after a few minutes

#### Permission Errors
```bash
Error: Unable to store authentication data
```

**Solutions**:
- Check file system permissions
- Run with appropriate privileges
- Clear existing authentication data

### Manual Cleanup

If you encounter persistent authentication issues:

1. **Logout completely**:
   ```bash
   codebolt-cli logout
   ```

2. **Clear authentication cache** (if needed):
   ```bash
   # Remove authentication directory
   # Windows
   rmdir /s "%APPDATA%\codebolt-cli"
   
   # macOS/Linux
   rm -rf ~/.config/codebolt-cli
   ```

3. **Login again**:
   ```bash
   codebolt-cli login
   ```

## Account Management

### Creating an Account

If you don't have a Codebolt account:

1. Visit [codebolt.ai](https://codebolt.ai)
2. Sign up for a new account
3. Verify your email address
4. Return to the CLI and login

### Password Reset

If you've forgotten your password:

1. Visit the Codebolt platform
2. Use the "Forgot Password" feature
3. Follow the email instructions
4. Return to the CLI with your new password

## Security Best Practices

### Recommendations

1. **Use Strong Passwords**: Ensure your Codebolt account has a strong, unique password
2. **Regular Logout**: Logout when finished, especially on shared machines
3. **Monitor Sessions**: Regularly check your account for unauthorized access
4. **Keep CLI Updated**: Update the CLI regularly for security patches

### Multi-Factor Authentication

If your Codebolt account has multi-factor authentication enabled:

1. The CLI will prompt for your MFA code during login
2. Enter the code from your authenticator app
3. The session will be established after successful verification

## Commands Requiring Authentication

The following commands require authentication:

- `codebolt-cli publishagent` - Publish agents to the platform
- `codebolt-cli listagents` - List your agents
- `codebolt-cli pullagent` - Pull agent configurations
- `codebolt-cli cloneagent` - Clone agents (for private agents)

### Commands Not Requiring Authentication

These commands work without authentication:

- `codebolt-cli version` - Check CLI version
- `codebolt-cli createagent` - Create local agents
- `codebolt-cli createtool` - Create local tools
- `codebolt-cli startagent` - Start local agents
- `codebolt-cli runtool` - Run local tools
- `codebolt-cli inspecttool` - Inspect local tools

## API Integration

The authentication system integrates with the Codebolt API:

- **Endpoint**: Secure HTTPS endpoints
- **Token-based**: Uses JWT tokens for session management
- **Refresh**: Automatic token refresh when possible
- **Expiration**: Tokens expire for security

## Next Steps

After successful authentication:

1. [Create your first agent](./agents.md)
2. [Explore agent management](./agents.md#agent-lifecycle-management)
3. [Learn about tool development](./tools.md)
4. [Review all available commands](./commands.md) 