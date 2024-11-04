# Create Custom Universal Agents

A custom universal agent is a type of agent in CodeBolt designed to interact dynamically with user messages and handle specific actions or workflows. The agent interprets a structured `Message` payload and returns a tailored `ResponseMessage`, specifying instructions for various tasks such as code generation, testing, deployment, and more.


### Data Types
* Message: Contains user input and details of the current context, including the selected agent, referenced files, folders, actions, and other agents involved in the request.

```bash
export type Message = {
    userMessage: string;
    currentFile: string;
    selectedAgent: { id: string; name: string; lastMessage: object };
    mentionedFiles: string[];
    mentionedFolders: string[];
    actions: string[];
    mentionedAgents: any[];
    universalAgentLastMessage: string;
};
```

* Instruction: Describes a single action or step for an agent to take in response to the `Message`.

```bash
export type Instruction = {
    agentId: string;
    step: Steps;
    action: string;
    prompt: string;
};

```

* ResponseMessage: The output format expected from the custom universal agent, containing a list of instructions.

```bash
export type ResponseMessage = {
    instructions: Instruction[];
};

```

* Steps : Enumerates the different stages an agent might use to process the user's request, allowing for more organized workflows.

```bash 
export enum Steps {
    USER_QUESTION = 'userquestion',
    CODE_GENERATION = 'codegeneration',
    TESTING = 'testing',
    DEPLOY = 'deploy',
    DOCUMENTATION = 'documentation',
    REVIEW = 'review'
}

```