mcp.getTools(["codebolt.browser"])

List of Tools:
- "click" - browser.click("test.txt", "utf8")
- "openUrl" - browser.openUrl("test.txt", "Hello, world!")
- "captureScreenshot" - browser.captureScreenshot("test.txt")

Sample Usage:
```javascript
const result = await codeboltMCP.executeTool(
  "codebolt.browser",
  "click",
  { inputData: "test" }
);
```


:::info
This functionality is similar to the [browser click](/docs/api/apiaccess/browser/click) API, and will produce the same result as calling `codebolt.browser.click("#test");`
:::
