---
sidebar_position: 8
sidebar_label: Troubleshooting
---
# Troubleshooting

## Troubleshooting

**Tool not working?**
```bash
# Check configuration
cat codebolttool.yaml

# Validate tool
codebolt-cli runtool greet ./index.js
```

**Publishing failed?**
```bash
# Check authentication
codebolt-cli whoami

# Verify unique name
codebolt-cli searchtools hello-world-tool
```

**Need help?**
```bash
# Get help
codebolt-cli help

# Check tool status
codebolt-cli toolstatus hello-world-tool
```