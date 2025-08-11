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

### Browser-Based Authentication

To authenticate with your Codebolt account, the CLI uses a secure browser-based OAuth flow:

```bash
codebolt-cli login
```

This command will:
1. Generate a secure authentication URL
2. Automatically open your default browser (or provide a URL to copy)
3. Redirect you to the Codebolt portal for authentication
4. Complete the authentication process in the browser
5. Automatically return you to the CLI with confirmation
6. Store your session securely locally

### Interactive Login Flow

The modern login process provides a seamless browser experience:

```bash
$ codebolt-cli login
Please login first
Please visit this URL to login: http://portal.codebolt.ai/performSignIn?uid=74fdc036-1046-4f06-b547-cda931a9a27d&loginFlow=app
Login successful!
User data saved successfully
```

**Benefits of Browser-Based Authentication:**
- More secure than CLI password entry
- Supports all authentication methods (OAuth, SSO, MFA)
- Familiar login interface
- No need to enter credentials in terminal
- Automatic session management

### Manual URL Access

If the browser doesn't open automatically:

1. Copy the provided URL from the terminal
2. Paste it into your browser
3. Complete the login process
4. The CLI will automatically detect successful authentication
5. You can close the browser tab once you see "Login successful!"

### Authentication Success Page

After successful browser authentication, you'll see:
- "You have successfully signed in. You can close this Page"
- "Now you can return to the app"
- The CLI will automatically confirm the login

### Authentication Flow Diagram

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────────┐
│   CLI Command   │    │    Browser       │    │  Codebolt Portal    │
│                 │    │                  │    │                     │
├─────────────────┤    ├──────────────────┤    ├─────────────────────┤
│ codebolt-cli    │    │                  │    │                     │
│ login           │───▶│ Opens auth URL   │───▶│ Login page          │
│                 │    │                  │    │                     │
│ Generates UUID  │    │ User completes   │    │ Validates creds     │
│ & auth URL      │    │ authentication   │    │ & MFA (if enabled)  │
│                 │    │                  │    │                     │
│ Polls for       │◀───│ Success page     │◀───│ Redirects with      │
│ completion      │    │ displayed        │    │ success status      │
│                 │    │                  │    │                     │
│ Stores tokens   │    │ User closes      │    │ Session established │
│ locally         │    │ browser tab      │    │                     │
└─────────────────┘    └──────────────────┘    └─────────────────────┘
```

## Session Management

### Check Authentication Status

To verify if you're currently logged in:

```bash
codebolt-cli listagents
```

If you're authenticated, this will display your agents. If not, you'll receive an authentication error prompting you to login.

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

#### Browser Not Opening
```bash
Please visit this URL to login: http://portal.codebolt.ai/performSignIn?uid=...
```

**Solution**: If your browser doesn't open automatically:
- Copy the provided URL and paste it into your browser manually
- Ensure you have a default browser set
- Check if browser access is blocked by security software

#### Authentication URL Expired
```bash
Error: Authentication session expired or invalid
```

**Solution**: The authentication URL has a time limit. Start the login process again:
```bash
codebolt-cli login
```

#### Browser Authentication Failed
```bash
Error: Failed to complete browser authentication
```

**Solutions**:
- Ensure you completed the login process in the browser
- Check that you didn't close the browser before seeing the success message
- Verify your Codebolt account credentials on the platform
- Try clearing browser cache and cookies for codebolt.ai

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
- Verify firewall settings allow access to portal.codebolt.ai
- Try again after a few minutes
- Check if corporate proxy is blocking the connection

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

### Enhanced Security with Browser Authentication

The browser-based authentication provides several security advantages:

- **No Credential Exposure**: Passwords never pass through the CLI
- **Secure Token Exchange**: Uses OAuth 2.0/OpenID Connect standards
- **Session Isolation**: Each authentication session uses unique tokens
- **Automatic Expiration**: Tokens have built-in expiration for security

### Recommendations

1. **Use Strong Passwords**: Ensure your Codebolt account has a strong, unique password
2. **Enable MFA**: Use multi-factor authentication for additional security
3. **Regular Logout**: Logout when finished, especially on shared machines
4. **Monitor Sessions**: Regularly check your account for unauthorized access
5. **Keep CLI Updated**: Update the CLI regularly for security patches
6. **Secure Browser**: Ensure your browser is up-to-date and secure
7. **Private Browsing**: Consider using private/incognito mode for sensitive operations

### Multi-Factor Authentication

The browser-based authentication flow seamlessly supports multi-factor authentication:

1. The CLI opens the browser authentication page
2. Complete your username/password as normal
3. The browser will prompt for your MFA code (if enabled)
4. Enter the code from your authenticator app in the browser
5. Complete the authentication process
6. Return to the CLI which will automatically detect successful login



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