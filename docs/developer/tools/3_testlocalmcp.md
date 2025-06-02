# Testing Your Local MCP

This guide will walk you through the process of testing a locally deployed MCP (Modular Capability Processor).



## Testing Options

You can test your local MCP using either the graphical interface or the command-line interface.

### Option 1: Using the GUI

#### 1. Open the MCP Panel

Access the MCP panel by clicking the MCP icon in the Codebolt interface.

![Open MCP Panel](/img/openMcp.png)

#### 2. Select Local MCP

From the dropdown menu, select "Local MCP" to connect to your locally running instance.

![Select Local MCP](/img/SelectMcp.png)

### Option 2: Using the CLI

You can also test specific tools directly from the command line:

```bash
codebolt-cli testtool <toolName>
```

Replace `<toolName>` with the name of the specific tool you want to test.

## Verifying Connection

Once connected, check for status indicators confirming a successful connection to your local MCP instance.



