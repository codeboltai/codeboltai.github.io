# Installation Guide

This guide will walk you through the step-by-step process of installing Codebolt AI Editor on your system.

## Prerequisites

Before installing Codebolt AI Editor, ensure your system meets the following requirements:

### System Requirements
- **Operating System**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 18.04+, CentOS 7+)
- **Memory**: Minimum 4GB RAM (8GB recommended)
- **Storage**: At least 2GB free disk space
- **Network**: Internet connection for initial setup and AI features

### Required Software
- **Node.js**: Version 16.0 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **Git**: Latest version recommended
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

## Installation Steps

### Windows Installation

1. **Download the Installer**
   ```powershell
   # Download using PowerShell
   Invoke-WebRequest -Uri "https://releases.codebolt.ai/windows/latest" -OutFile "CodeboltInstaller.exe"
   ```

2. **Run the Installer**
   - Double-click `CodeboltInstaller.exe`
   - Follow the installation wizard
   - Choose installation directory (default: `C:\Program Files\Codebolt`)

3. **Verify Installation**
   ```powershell
   codebolt --version
   ```

### macOS Installation

1. **Using Homebrew (Recommended)**
   ```bash
   # Install Homebrew if not already installed
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   
   # Install Codebolt
   brew tap codebolt/tap
   brew install codebolt-ai-editor
   ```

2. **Manual Installation**
   ```bash
   # Download the .dmg file
   curl -L "https://releases.codebolt.ai/macos/latest.dmg" -o "Codebolt.dmg"
   
   # Mount and install
   hdiutil mount Codebolt.dmg
   cp -R "/Volumes/Codebolt/Codebolt AI Editor.app" /Applications/
   hdiutil unmount "/Volumes/Codebolt"
   ```

3. **Verify Installation**
   ```bash
   codebolt --version
   ```

### Linux Installation

#### Ubuntu/Debian
```bash
# Add Codebolt repository
curl -fsSL https://packages.codebolt.ai/gpg | sudo gpg --dearmor -o /usr/share/keyrings/codebolt-archive-keyring.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/codebolt-archive-keyring.gpg] https://packages.codebolt.ai/apt stable main" | sudo tee /etc/apt/sources.list.d/codebolt.list

# Update package list and install
sudo apt update
sudo apt install codebolt-ai-editor
```

#### CentOS/RHEL/Fedora
```bash
# Add Codebolt repository
sudo tee /etc/yum.repos.d/codebolt.repo <<EOF
[codebolt]
name=Codebolt AI Editor
baseurl=https://packages.codebolt.ai/rpm/stable
enabled=1
gpgcheck=1
gpgkey=https://packages.codebolt.ai/gpg
EOF

# Install using yum/dnf
sudo yum install codebolt-ai-editor
# or for newer systems:
# sudo dnf install codebolt-ai-editor
```

#### Verify Installation
```bash
codebolt --version
```

## Post-Installation Setup

### 1. Initialize Codebolt
```bash
codebolt init
```
This command will:
- Create the necessary configuration files
- Set up the default workspace
- Initialize the agent registry

### 2. Sign In to Codebolt Cloud (Optional)
```bash
codebolt auth login
```
- Provides access to cloud-based agents and models
- Enables collaboration features
- Syncs settings across devices

### 3. Install Extensions (Optional)
```bash
# Install popular extensions
codebolt extension install typescript-support
codebolt extension install git-integration
codebolt extension install python-tools
```

## Troubleshooting Common Issues

### Issue: "Command not found: codebolt"
**Solution**: The installation path may not be in your system's PATH variable.

**Windows:**
```powershell
# Add to PATH temporarily
$env:PATH += ";C:\Program Files\Codebolt\bin"

# Add to PATH permanently
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\Program Files\Codebolt\bin", [EnvironmentVariableTarget]::User)
```

**macOS/Linux:**
```bash
# Add to your shell profile (.bashrc, .zshrc, etc.)
echo 'export PATH="/usr/local/bin/codebolt:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Issue: "Node.js version incompatible"
**Solution**: Update Node.js to version 16.0 or higher.
```bash
# Using Node Version Manager (nvm)
nvm install 18
nvm use 18
```

### Issue: Permission denied during installation
**Solution**: 
- **Windows**: Run installer as Administrator
- **macOS**: Use `sudo` for manual installation steps
- **Linux**: Ensure you have sudo privileges

### Issue: Network connectivity problems
**Solution**: 
1. Check your internet connection
2. Configure proxy settings if behind a corporate firewall:
   ```bash
   codebolt config set proxy.http "http://proxy.company.com:8080"
   codebolt config set proxy.https "https://proxy.company.com:8080"
   ```

## Next Steps

Once installation is complete:

1. **Take the Quickstart Tutorial**: [quickstart.md](quickstart.md)
2. **Learn Core Concepts**: [concepts.md](concepts.md)
3. **Create Your First Agent**: [../core/agents/custom-agent.md](../core/agents/custom-agent.md)

## Getting Help

If you encounter issues not covered in this guide:
- Check our [Troubleshooting Guide](../troubleshooting.md)
- Visit our [Community Forum](https://community.codebolt.ai)
- Contact support at [support@codebolt.ai](mailto:support@codebolt.ai)
