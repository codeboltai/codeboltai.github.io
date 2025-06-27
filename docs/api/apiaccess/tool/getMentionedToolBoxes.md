---
name: getMentionedToolBoxes
cbbaseinfo:
  description: Extracts toolbox mentions from a user message object containing MCP references.
cbparameters:
  parameters:
    - name: userMessage
      typeName: UserMessage
      description: Message object containing user input with toolbox mentions in mentionedMCPs array
  returns:
    signatureTypeName: Promise
    description: A promise resolving to a response object containing toolbox data and configuration
    typeArgs:
      - type: GetMentionedToolBoxesResponse
data:
  name: getMentionedToolBoxes
  category: tool
  link: getMentionedToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### UserMessage Structure
```js
// UserMessage object structure
const userMessage = {
  content: "Please use @sqlite and @filesystem for this task",
  mentionedMCPs: ["sqlite", "filesystem"]  // Array of toolbox names mentioned
};
```

### Response Structure
```js
// GetMentionedToolBoxesResponse object structure
const response = {
  data: {
    mcpServers: {
      // Each server has configuration details
      "filesystem": {
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-filesystem"]
      },
      "sqlite": {
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-sqlite"],
        env: {
          // Optional environment variables
        }
      }
    },
    enabled: [],  // Array of enabled toolbox names
    codeboltTools: []  // Array of available Codebolt tool definitions
  },
  type: "getAvailableToolBoxesResponse"
};
```

### Example
```js
// Testing mentioned toolboxes from user message
try {
  const message = {
    content: "Please use @sqlite and @filesystem for this task",
    mentionedMCPs: ["sqlite", "filesystem"]
  };
  
  const mentionedToolBoxes = await codebolt.tools.getMentionedToolBoxes(message);
  console.log('   - Message content:', message.content);
  console.log('   - Mentioned MCPs:', message.mentionedMCPs);
  
  // Extract available MCP servers from response
  const mcpServers = mentionedToolBoxes?.data?.mcpServers || {};
  const availableServers = Object.keys(mcpServers);
  console.log('   - Available MCP servers:', availableServers);
  console.log('   - Enabled toolboxes:', mentionedToolBoxes?.data?.enabled || []);
  
} catch (error) {
  console.log('⚠️  Getting mentioned toolboxes failed:', error.message);
}
```

### Error Handling
```js
try {
  const mentionedToolBoxes = await codebolt.tools.getMentionedToolBoxes(userMessage);
  console.log("Successfully retrieved toolbox data");
} catch (error) {
  console.error("Getting mentioned toolboxes failed:", error.message);
}
```