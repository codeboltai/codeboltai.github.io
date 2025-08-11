# Installation Guide

This guide will walk you through the step-by-step process of installing Codebolt AI Editor on your system.

## Prerequisites

Before installing Codebolt AI Editor, ensure your system meets the following requirements:


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
   ``
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
