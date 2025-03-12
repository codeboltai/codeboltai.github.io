---
name: ToolBox
cbbaseinfo:
  description: A versatile server for managing and interacting with tools, resources, and prompts. Supports custom tools, resources, and prompts with `stdio` or `SSE` transport mechanisms.
cbparameters:
  parameters:
    - name: options
      typeName: ServerOptions
      description: Configuration options for the ToolBox, including name, version, and authentication logic.
  returns:
    signatureTypeName: ToolBox
    description: A configured ToolBox instance for managing tools, resources, and prompts.
    typeArgs: []
data:
  name: ToolBox
  category: server-management
  link: ToolBox.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```typescript
import { ToolBox } from './toolbox';
import { z } from 'zod';

// Create a ToolBox instance
const toolbox = new ToolBox({
  name: 'MyToolBox',
  version: '1.0.0',
});

// Add a tool
toolbox.addTool({
  name: 'greet',
  description: 'A tool to greet the user',
  parameters: z.object({ name: z.string() }),
  execute: async (args) => `Hello, ${args.name}!`,
});

// Start the server with stdio transport
await toolbox.start({ transportType: 'stdio' });

// Example usage of the tool
const greeting = await toolbox.sessions[0].requestSampling({
  params: { name: 'Alice' },
});

console.log("Greeting:", greeting);