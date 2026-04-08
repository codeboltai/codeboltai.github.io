Codebolt provides access to the various functions in a MCP Tool format, where when you want to send the actions to the LLM as tools, you can use the Tool Access API, and this will return the Data in the LLM Inference Tools format. 

## 1.1 Usage in Tool Calling:
### 1.1.1 Manual Tool Management without Tool Access using API Access

In Typical Tools Calling format, you will write the following Code to send the tool data in Manual Format:

For sending the Request to the LLM:
```
var tools = [
	{
		name: "WriteFile",
		description: "This tool helps in writing the content to the File",
		schema: 
	},
	{
		name: "ReadFile",
		description: "This tool helps in reading files"
	}
]
```

And when you call the LLM using:
```
var result = codebolt.llm.inference({ messages, tools })
```

and you then when you get the result, you will then parse the tool call result from the result and call the relevant api in a format like:
```
let toolexecutionresult = {};
for (const tool of result.completion.tool_calls) {
	if(tool.function.name === "fileRead"){
		const fileReadResult = await codebolt.fs.readFile(tool.filename)
		toolexecutionresult = {
			toolcall: "fileRead",
			success: fileReadResult.success,
			responseMessage: fileReadResult.message
		}
	}
	else if(tool.function.name === "fileWrite"){
		const fileWriteResult = await codebolt.fs.writeToFile(tool.filename, tool.fileContent)
	}
}
```

You can then send the Tool Execution Result back to the LLM in the Agent Execution Loop using something like:
```
codebolt.llm.inference({ messages, tools: [...tools, ...toolexecutionResult] })
```

### 1.1.2 Automated Tool Management with Tool Access API

As we see in [1.1.1](#111-manual-tool-management-without-tool-access-using-api-access) for each tool we need to write the Tool Array giving the MCP Tool Name, Detail of the MCP Tool along with the schema of the input. Also when we get the response from the LLM, then we have to manually check the tool that has been called, also then we have manually format the functions and inputs and call each of the api. 

You can simplify the creation of the tool Json using the MCP Access in the following format:
```
var tools = codebolt.mcp.getTools([
	{toolbox: 'filesystem', toolName: 'read_file'},
	{toolbox: 'filesystem', toolName: 'write_file'}
])


/* Please note this gives the same result as 
var tools = [
	{
		name: "WriteFile",
		description: "This tool helps in writing the content to the File",
		schema: 
	},
	{
		name: "ReadFile",
		description: "This tool helps in reading files",
		schema:
	}
]
*/
```

Calling this getTools gives the complete json including a unique name, description, schema, for the tool. 

All the functionalities exposed in the API Access are also exposed as Tool Format. 

Also now when you receive the response from the LLM, since the Tool Names are consistent and pre-defined, we can simply let codebolt process the response automatically.
#### 1.1.2.1 Process all Tools using a single api:

Since the tools are in defined name and schema, you can directly process them.

```
var llmResult = codebolt.llm.inference({ messages, tools })
var toolsexecutionresult = codebolt.mcp.executeTool(llmResult.completion.tool_calls)
```

#### 1.1.2.2 Process Tools One by One 

If you want more control then you can process the tools one by one in a loop. This is much handy if you have added any custom tools at the code level.

```
var toolexeutionresult = [];
var result = codebolt.llm.inference({ messages, tools })
for (const resulttool of result.completion.tool_calls) {
	if(resulttool.function.name in ["codebolt_fileread", "codebolt_filewrite"]){
		codebolt.mcp.executeTool(resulttool)
	} 
	else if(resulttool.function.name === "mycodecustomtool"){
		// Custom Process
	}
}
```

Processing Tools One By One allows you to add Custom Functions in Tool Call from the Agent. 

Example:  when writing an Agent, you want to add a Custom Calculator Add Tool along with other tools, then you can add the tool from the agent and then process the tool before sending it for default tool processing. A Sample Code would be:
```
var tools = codebolt.mcp.getTools([
	{toolbox: 'filesystem', toolName: 'read_file'},
	{toolbox: 'filesystem', toolName: 'write_file'}
])

tools.push({
	name: mycalculatoradd,
	description: "this adds two numbers",
	schema: 
})

var llmResult = codebolt.llm.inference({ messages, tools })
var toolexecutionresult = {};

for (const resulttool of llmResult.completion.tool_calls) {
	if(resulttool.function.name === "mycalculatoradd"){
		toolexecutionresult = {
			toolcall: 'mycalculatoradd',
			message: resulttool.function.arguments.numbera + resulttool.function.arguments.numberb
		}
	} else {
		toolexecutionresult = codebolt.mcp.executeTool(resulttool)
	}
}
```

In the above example, we have added a custom Tool Call called as mycalculatoradd, which has been added by the agent and this gets processed at agent level. This allows agent creators to create custom tools at the agent level, instead of relying on the Codebolt provided Tools or custom MCPs added by the user. 

Please read more about the different ways in which agent creators can add and run tools from the Agent logic

## 1.2 Custom Functionality Calling

The Mcp tools call can also be used as an alternative to directly calling the API Access Library. So for file read you can either call:
```
codebolt.fs.readFile(filename)
```
or you can call 
```
codebolt.mcp.executeTool("filesystem", "read_file", { filename: filename })
```

both will perform the readfile functionality. While the first one is clear declarative and provides proper typings for the inputs, the second one can be used in cases when you are managing a lot of things in a loop. 
