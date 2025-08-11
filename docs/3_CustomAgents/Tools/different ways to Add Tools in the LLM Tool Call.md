
The LLMs provide Options to add Tools in LLM Calls for example:
```
codebolt.llm.inference(message, tools)
```

Then the llm provides response in the format:
```
{
	"message":
	"toolcall":
}
```

There are different types of Tools in the 