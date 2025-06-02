---
sidebar_position: 2
---

# Installation

This guide will help you install and set up the Codebolt CLI on your development machine.

## Prerequisites

Before installing the Codebolt CLI, ensure you have the following prerequisites:

### System Requirements
- **Node.js**: Version 14.0 or higher
- **npm**: Version 6.0 or higher (comes with Node.js)
- **Operating System**: Windows, macOS, or Linux

### Verify Prerequisites

Check your Node.js and npm versions:

```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

## Installation Methods

### Method 1: Global Installation (Recommended)

Install the Codebolt CLI globally using npm:

```bash
npm install -g codebolt-cli
```

This makes the `codebolt-cli` command available system-wide.

### Method 2: Local Installation

For project-specific installations:

```bash
npm install codebolt-cli
```

Then run commands using npx:

```bash
npx codebolt-cli version
```

### Method 3: Development Installation

For contributors or developers who want to work with the source code:

```bash
# Clone the repository
git clone https://github.com/codeboltai/cli.git
cd cli

# Install dependencies
npm install

# Link for global usage
npm link
```

## Verification

After installation, verify that the CLI is working correctly:

```bash
codebolt-cli version
```

You should see output similar to:

```
Codebolt CLI version 1.1.35
```

## Configuration

### Initial Setup

1. **Login to your account**:
   ```bash
   codebolt-cli login
   ```

2. **Verify authentication**:
   ```bash
   codebolt-cli listagents
   ```

### Directory Structure

The CLI creates a `.codeboltAgents` directory in your project root to organize agents and tools:

```
your-project/
├── .codeboltAgents/
│   ├── agents/
│   │   └── your-agent-name/
│   └── tools/
│       └── your-tool-name/
└── your-project-files...
```

## Troubleshooting

### Common Issues

#### Permission Errors (macOS/Linux)
If you encounter permission errors during global installation:

```bash
sudo npm install -g codebolt-cli
```

Or configure npm to use a different directory:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

#### Windows Path Issues
On Windows, ensure your PATH includes the npm global directory:

1. Open Command Prompt as Administrator
2. Run: `npm config get prefix`
3. Add the returned path to your system PATH environment variable

#### Node.js Version Issues
If you're using an older Node.js version:

```bash
# Using nvm (Node Version Manager)
nvm install 18
nvm use 18

# Or update Node.js directly from nodejs.org
```

#### Network Issues
If you're behind a corporate firewall:

```bash
npm config set registry https://registry.npmjs.org/
npm config set proxy http://your-proxy:port
npm config set https-proxy http://your-proxy:port
```

### Getting Help

If you encounter issues:

1. **Check the version**: `codebolt-cli version`
2. **Update to latest**: `npm update -g codebolt-cli`
3. **Clear npm cache**: `npm cache clean --force`
4. **Reinstall**: `npm uninstall -g codebolt-cli && npm install -g codebolt-cli`

## Updating

To update to the latest version:

```bash
npm update -g codebolt-cli
```

Check for updates regularly to get the latest features and bug fixes.

## Uninstallation

To remove the Codebolt CLI:

```bash
npm uninstall -g codebolt-cli
```

## Next Steps

After successful installation:

1. [Authenticate with your account](./authentication.md)
2. [Create your first agent](./agents.md)
3. [Explore available commands](./commands.md)

## Dependencies

The CLI includes the following key dependencies:

- **commander**: Command-line interface framework
- **inquirer**: Interactive command-line prompts
- **axios**: HTTP client for API requests
- **chalk**: Terminal string styling
- **js-yaml**: YAML parser for configuration files
- **archiver**: File compression utilities

These are automatically installed with the CLI package. 