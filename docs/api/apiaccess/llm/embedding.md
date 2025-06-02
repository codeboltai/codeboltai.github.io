# Embedding 

### How to create Embedding

```bash 
import codebolt from "codebolt";

async function main() {
  const embedding = await codebolt.llm.embeddings.create({
    input: "Your text string goes here",
    encoding_format: "float",
  });

  console.log(embedding);
}

```