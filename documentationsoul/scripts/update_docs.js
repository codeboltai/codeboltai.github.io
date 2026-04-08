#!/usr/bin/env node
/**
 * Update Documentation Script
 * Uses OpenCode AI agent to generate/update documentation based on diff-report.json
 * Connects to an EXISTING OpenCode server as a client.
 *
 * Usage: node update_docs.js [options]
 *
 * Options:
 *   --limit=N          Process only N items (default: all)
 *   --type=TYPE        Filter by diff type: new_function, signature_changed, examples_missing
 *   --module=NAME      Filter by module name
 *   --base-url=URL     OpenCode server URL (default: http://localhost:5067)
 *   --dry-run          Show what would be processed without actually doing it
 *   --reset            Clear all tracking data and start fresh
 *   --force            Reprocess items even if already completed
 *
 * Examples:
 *   node update_docs.js --limit=5                    # Process up to 5 pending items
 *   node update_docs.js --module=fs --limit=3       # Process 3 items from 'fs' module
 *   node update_docs.js --type=new_function         # Only process new functions
 *   node update_docs.js --reset --limit=10          # Clear tracking and process 10 items
 *   node update_docs.js --force --module=browser    # Reprocess all browser module items
 */

import { createOpencodeClient } from "@opencode-ai/sdk";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  diffReportPath: path.resolve(__dirname, "../data/diff-report.json"),
  typedocDataPath: path.resolve(__dirname, "../data/typedoc-data.json"),
  documentationDataPath: path.resolve(__dirname, "../data/documentation-data.json"),
  updatedDataPath: path.resolve(__dirname, "../data/update-tracking.json"),
  apiAccessPath: path.resolve(__dirname, "../../docs/5_api/ApiAccess"),
  mcpAccessPath: path.resolve(__dirname, "../../docs/5_api/McpAccess"),
  docTypeRefPath: path.resolve(__dirname, "../../docs/5_api/11_doc-type-ref"),
  codeboltjsPath: path.resolve(__dirname, "../../../../packages/codeboltjs"),

  // OpenCode client configuration
  defaultBaseUrl: "http://localhost:5067",
};

/**
 * Load JSON data files
 */
function loadDataFiles() {
  const diffReport = JSON.parse(fs.readFileSync(CONFIG.diffReportPath, "utf8"));
  const typedocData = JSON.parse(
    fs.readFileSync(CONFIG.typedocDataPath, "utf8")
  );

  let documentationData = { modules: [] };
  if (fs.existsSync(CONFIG.documentationDataPath)) {
    documentationData = JSON.parse(
      fs.readFileSync(CONFIG.documentationDataPath, "utf8")
    );
  }

  // For tracking updates, we use a separate structure
  let updatedData = {
    schemaVersion: "1.0.0",
    updates: [],
    lastUpdated: null,
    stats: {
      totalProcessed: 0,
      successful: 0,
      failed: 0
    }
  };

  // Check if the tracking file exists and has the right structure
  if (fs.existsSync(CONFIG.updatedDataPath)) {
    try {
      const existingData = JSON.parse(fs.readFileSync(CONFIG.updatedDataPath, "utf8"));
      // Check if it's our tracking structure (has 'updates' array) vs old documentation structure
      if (existingData.updates && Array.isArray(existingData.updates)) {
        updatedData = existingData;
      }
      // Otherwise, we start fresh with tracking structure
    } catch (e) {
      // Start fresh on parse error
    }
  }

  return { diffReport, typedocData, documentationData, updatedData };
}

/**
 * Get set of successfully processed keys from tracking data
 */
function getCompletedKeys(updatedData) {
  const completedKeys = new Set();
  for (const update of updatedData.updates || []) {
    if (update.success === true) {
      completedKeys.add(update.key);
    }
  }
  return completedKeys;
}

/**
 * Build lookup maps for data access
 */
function buildLookupMaps(typedocData, documentationData) {
  const typedocMap = new Map();
  const docMap = new Map();

  for (const module of typedocData.modules || []) {
    for (const func of module.functions || []) {
      typedocMap.set(`${module.name}.${func.name}`, func);
    }
  }

  for (const module of documentationData.modules || []) {
    for (const func of module.functions || []) {
      docMap.set(`${module.name}.${func.name}`, func);
    }
  }

  return { typedocMap, docMap };
}

/**
 * Get existing documentation file content if it exists
 */
function getExistingDocContent(moduleName, funcName, docType = "ApiAccess") {
  const basePath =
    docType === "McpAccess" ? CONFIG.mcpAccessPath : CONFIG.apiAccessPath;

  // Try different file locations
  const possiblePaths = [
    path.join(basePath, moduleName, `${funcName}.md`),
    path.join(basePath, moduleName, `${funcName.toLowerCase()}.md`),
    path.join(basePath, `${moduleName}.md`), // For MCP style
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      return {
        path: filePath,
        content: fs.readFileSync(filePath, "utf8"),
      };
    }
  }

  return null;
}

/**
 * Get sample documentation for reference
 */
function getSampleDocumentation(docType = "ApiAccess") {
  const basePath =
    docType === "McpAccess" ? CONFIG.mcpAccessPath : CONFIG.apiAccessPath;

  // Try to find a good example file
  const samplePaths = [
    path.join(basePath, "agent", "startAgent.md"),
    path.join(basePath, "browser", "goToPage.md"),
    path.join(basePath, "fs", "readFile.md"),
  ];

  for (const samplePath of samplePaths) {
    if (fs.existsSync(samplePath)) {
      return fs.readFileSync(samplePath, "utf8");
    }
  }

  return null;
}

/**
 * Build the prompt for documentation generation
 */
function buildDocumentationPrompt(diffItem, typedocFunc, existingDoc, sampleDoc) {
  const isNewFunction = diffItem.type === "new_function";
  const isSignatureChanged = diffItem.type === "signature_changed";
  const isMissingExamples = diffItem.type === "examples_missing";

  let prompt = `You are a technical documentation writer for the Codebolt JavaScript SDK.

## Task
${isNewFunction ? "Create new API documentation" : isSignatureChanged ? "Update existing API documentation due to signature changes" : "Add examples to existing documentation"} for the function \`codebolt.${diffItem.module}.${diffItem.function}\`.

## Function Information from Source Code
- **Module**: ${diffItem.module}
- **Function Name**: ${diffItem.function}
- **Source File**: ${typedocFunc?.source?.filePath || "Unknown"}
- **Line Number**: ${typedocFunc?.source?.lineNumber || "Unknown"}
- **Description**: ${typedocFunc?.description || "No description available"}

### Parameters
${typedocFunc?.parameters?.length > 0
      ? typedocFunc.parameters
        .map(
          (p) =>
            `- \`${p.name}\` (${p.typeName}${p.isOptional ? ", optional" : ""}): ${p.description || "No description"}`
        )
        .join("\n")
      : "None"
    }

### Returns
- **Type**: \`${typedocFunc?.returns?.signatureTypeName || "void"}\`
- **Description**: ${typedocFunc?.returns?.description || "No description"}

${isSignatureChanged && diffItem.differences
      ? `
## Signature Changes Detected
${diffItem.differences.map((d) => `- ${d.field}: was "${d.documentation}" now "${d.source}"`).join("\n")}
`
      : ""
    }

## Documentation Requirements

The documentation file should follow this exact YAML frontmatter structure:
\`\`\`yaml
---
name: ${diffItem.function.charAt(0).toUpperCase() + diffItem.function.slice(1)}
cbbaseinfo:
  description: "Clear description of what the function does"
cbparameters:
  parameters:
    - name: paramName
      typeName: paramType
      description: "Parameter description"
  returns:
    signatureTypeName: "ReturnType"
    description: "What the function returns"
    typeArgs: []
data:
  name: ${diffItem.function}
  category: ${diffItem.module}
  link: ${diffItem.function}.md
---
\`\`\`

After the frontmatter, include:
1. \`<CBBaseInfo/>\` component
2. \`<CBParameters/>\` component
3. \`### Response Structure\` - Document the response object properties
4. \`### Examples\` - At least 2-3 practical code examples with comments
5. \`### Notes\` - Usage tips and important information

## Type References
For any types mentioned (like ${typedocFunc?.returns?.signatureTypeName || "Promise<void>"}), link to the type documentation at:
\`@documentation/publicDocs/docs/5_api/11_doc-type-ref/codeboltjs/\`

Example: [SomeType](@documentation/publicDocs/docs/api/11_doc-type-ref/codeboltjs/interfaces/SomeType)

${existingDoc
      ? `
## Existing Documentation (UPDATE THIS)
The file already exists at: ${existingDoc.path}

Current content:
\`\`\`markdown
${existingDoc.content.slice(0, 2000)}${existingDoc.content.length > 2000 ? "\n... (truncated)" : ""}
\`\`\`

Please update the documentation while PRESERVING any human-curated content like advanced examples, error handling sections, and best practices.
`
      : ""
    }

${sampleDoc
      ? `
## Reference Example
Here's a sample of well-written documentation in this project:
\`\`\`markdown
${sampleDoc.slice(0, 1500)}${sampleDoc.length > 1500 ? "\n... (truncated)" : ""}
\`\`\`
`
      : ""
    }

## Output Instructions
1. Write the complete markdown file content
2. Save it to: ${CONFIG.apiAccessPath}/${diffItem.module}/${diffItem.function}.md
3. Ensure the directory exists (create if needed)
4. The file must be valid markdown with proper YAML frontmatter

Please generate the documentation now.`;

  return prompt;
}

/**
 * Wait for session to become idle using event subscription
 */
async function waitForSessionIdle(client, timeoutMs = 300000) {
  return new Promise(async (resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Timeout waiting for session.idle"));
    }, timeoutMs);

    try {
      const events = await client.event.subscribe();

      for await (const event of events.stream) {
        console.log(`    Event: ${event.type}`);

        if (event.type === "session.idle") {
          clearTimeout(timeout);
          resolve(event);
          break;
        }

        // Handle error events
        if (event.type === "session.error" || event.type === "error") {
          clearTimeout(timeout);
          reject(new Error(event.properties?.message || "Session error"));
          break;
        }
      }
    } catch (error) {
      clearTimeout(timeout);
      reject(error);
    }
  });
}

/**
 * Process a single diff item using OpenCode TUI
 */
async function processItem(client, diffItem, typedocMap, docMap) {
  const key = diffItem.key;
  const typedocFunc = typedocMap.get(key) || diffItem.source;
  const existingDocFunc = docMap.get(key);

  // Determine documentation type
  const docType = existingDocFunc?.documentationType || "ApiAccess";

  // Get existing documentation content if available
  const existingDoc = getExistingDocContent(
    diffItem.module,
    diffItem.function,
    docType
  );

  // Get sample documentation for reference
  const sampleDoc = getSampleDocumentation(docType);

  // Build the prompt
  const prompt = buildDocumentationPrompt(
    diffItem,
    typedocFunc,
    existingDoc,
    sampleDoc
  );

  console.log(`\n  Sending prompt for ${key}...`);

  try {
    // Send prompt using TUI methods (like existing OpenCode client)
    await client.tui.appendPrompt({
      body: { text: prompt },
    });

    console.log(`  Submitting prompt...`);
    await client.tui.submitPrompt();

    // Wait for the session to become idle (processing complete)
    console.log(`  Waiting for completion...`);
    await waitForSessionIdle(client);

    return {
      success: true,
      key,
      response: "", // Response is handled by the OpenCode server directly
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`  Error processing ${key}:`, error.message);
    return {
      success: false,
      key,
      error: error.message,
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Update the updated-data.json file
 */
function updateUpdatedDataFile(updatedData, result) {
  // Add or update the entry
  const existingIndex = updatedData.updates.findIndex(
    (u) => u.key === result.key
  );
  if (existingIndex >= 0) {
    updatedData.updates[existingIndex] = result;
  } else {
    updatedData.updates.push(result);
  }

  // Update stats
  updatedData.stats.totalProcessed++;
  if (result.success) {
    updatedData.stats.successful++;
  } else {
    updatedData.stats.failed++;
  }

  updatedData.lastUpdated = new Date().toISOString();

  // Write back to file
  fs.writeFileSync(
    CONFIG.updatedDataPath,
    JSON.stringify(updatedData, null, 2)
  );
}

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    limit: Infinity,
    type: null,
    module: null,
    dryRun: false,
    baseUrl: CONFIG.defaultBaseUrl,
    reset: false,
    force: false,
  };

  for (const arg of args) {
    if (arg.startsWith("--limit=")) {
      options.limit = parseInt(arg.split("=")[1]) || Infinity;
    } else if (arg.startsWith("--type=")) {
      options.type = arg.split("=")[1];
    } else if (arg.startsWith("--module=")) {
      options.module = arg.split("=")[1];
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg.startsWith("--base-url=")) {
      options.baseUrl = arg.split("=")[1];
    } else if (arg === "--reset") {
      options.reset = true;
    } else if (arg === "--force") {
      options.force = true;
    }
  }

  return options;
}

/**
 * Main execution
 */
async function main() {
  const options = parseArgs();

  console.log("=== Documentation Update Script ===\n");
  console.log("Options:", options);

  // Load data files
  console.log("\nLoading data files...");
  let { diffReport, typedocData, documentationData, updatedData } =
    loadDataFiles();

  console.log(`  Diff report: ${diffReport.items?.length || 0} items`);
  console.log(`  TypeDoc data: ${typedocData.modules?.length || 0} modules`);
  console.log(
    `  Documentation data: ${documentationData.modules?.length || 0} modules`
  );

  // Handle --reset option
  if (options.reset) {
    console.log("\n[RESET] Clearing tracking data...");
    updatedData = {
      schemaVersion: "1.0.0",
      updates: [],
      lastUpdated: null,
      stats: {
        totalProcessed: 0,
        successful: 0,
        failed: 0
      }
    };
    fs.writeFileSync(
      CONFIG.updatedDataPath,
      JSON.stringify(updatedData, null, 2)
    );
    console.log("  Tracking data cleared.");
  }

  // Build lookup maps
  const { typedocMap, docMap } = buildLookupMaps(typedocData, documentationData);

  // Get already completed items from tracking (unless --force is used)
  const completedKeys = options.force ? new Set() : getCompletedKeys(updatedData);
  if (options.force) {
    console.log(`  [FORCE] Ignoring previously completed items`);
  } else {
    console.log(`  Already completed: ${completedKeys.size} items`);
  }

  // Filter items to process
  let itemsToProcess = diffReport.items || [];

  // Apply filters
  if (options.type) {
    itemsToProcess = itemsToProcess.filter((item) => item.type === options.type);
  }
  if (options.module) {
    itemsToProcess = itemsToProcess.filter(
      (item) => item.module === options.module
    );
  }

  // Only process high-priority items that need documentation
  itemsToProcess = itemsToProcess.filter(
    (item) =>
      item.type === "new_function" ||
      item.type === "signature_changed" ||
      item.type === "examples_missing"
  );

  // Skip already successfully processed items
  const beforeSkip = itemsToProcess.length;
  itemsToProcess = itemsToProcess.filter((item) => !completedKeys.has(item.key));
  const skipped = beforeSkip - itemsToProcess.length;
  if (skipped > 0) {
    console.log(`  Skipping ${skipped} already completed items`);
  }

  // Apply limit
  itemsToProcess = itemsToProcess.slice(0, options.limit);

  console.log(`\nItems to process: ${itemsToProcess.length}`);

  if (itemsToProcess.length === 0) {
    console.log("No items to process.");
    return;
  }

  if (options.dryRun) {
    console.log("\n[DRY RUN] Would process these items:");
    itemsToProcess.forEach((item) => {
      console.log(`  - [${item.type}] ${item.key}`);
    });
    return;
  }

  // Connect to existing OpenCode server
  console.log("\nConnecting to OpenCode server...");
  console.log(`  Base URL: ${options.baseUrl}`);

  const client = createOpencodeClient({
    baseUrl: options.baseUrl,
  });

  console.log("  Connected to OpenCode client");

  // Process items
  console.log("\n=== Processing Items ===");

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < itemsToProcess.length; i++) {
    const item = itemsToProcess[i];
    console.log(
      `\n[${i + 1}/${itemsToProcess.length}] Processing: ${item.key}`
    );
    console.log(`  Type: ${item.type}`);
    console.log(`  Module: ${item.module}`);
    console.log(`  Function: ${item.function}`);

    const result = await processItem(client, item, typedocMap, docMap);

    if (result.success) {
      successCount++;
      console.log(`  Status: SUCCESS`);
    } else {
      errorCount++;
      console.log(`  Status: FAILED - ${result.error}`);
    }

    // Update the tracking file
    updateUpdatedDataFile(updatedData, result);

    // Small delay between requests to avoid overwhelming the server
    if (i < itemsToProcess.length - 1) {
      console.log("  Waiting before next item...");
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  // Summary
  console.log("\n=== Summary ===");
  console.log(`Total processed: ${itemsToProcess.length}`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${errorCount}`);
  console.log(`Updated data saved to: ${CONFIG.updatedDataPath}`);
}

// Run
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
