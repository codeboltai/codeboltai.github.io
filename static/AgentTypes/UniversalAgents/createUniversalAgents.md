# Create Custom Universal Agents

A custom universal agent is a type of agent in CodeBolt designed to interact dynamically with user messages and handle specific actions or workflows. The agent interprets a structured `Message` payload and returns a tailored `ResponseMessage`, specifying instructions for various tasks such as code generation, testing, deployment, and more.


###  create custom universal Agent

```bash
//you will get this request form codebolt
export type Message = {
    userMessage: string;
    currentFile: string;
    selectedAgent: { id: string; name: string; lastMessage: object };
    mentionedFiles: string[];
    mentionedFolders: string[];
    actions: string[];
    mentionedAgents: any[]; // Specify the type if known
    universalAgentLastMessage: string;
};

export type Instruction = {
  agentId: string;
  step: Steps;
  action: string;
  prompt: string;
};

//this is type of response you need to send
export type ResponseMessage = {
  instructions: Instruction[];
};

export enum Steps {
  USER_QUESTION = 'userquestion',
  CODE_GENERATION = 'codegeneration',
  TESTING = 'testing',
  DEPLOY = 'deploy',
  DOCUMENTATION = 'documentation',
  REVIEW = 'review'
}

```

* Message: Contains user input and details of the current context, including the selected agent, referenced files, folders, actions, and other agents involved in the request.

* Instruction: Describes a single action or step for an agent to take in response to the `Message`.

* ResponseMessage: The output format expected from the custom universal agent, containing a list of instructions.

* Steps : Enumerates the different stages an agent might use to process the user's request, allowing for more organized workflows.


```bash
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define your endpoint
app.post('/message', (req, res) => {
    const message = req.body; // Extracting the Message from the request body
    
    // write you logic to filter agent based on user message
    const responseMessage = {
        instructions: [
            {
                agentId: selectedAgent.id,
                step: 'USER_QUESTION', // As an example step
                action: 'Process the message',
                prompt: message.userMessage
            }
        ]
    };
    //this is the format of respose you will need to send back

    res.json(responseMessage);
);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```
