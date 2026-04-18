const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.resolve(__dirname, '..', 'docs', '05_reference', '02_codeboltjs', 'pseudo_cli');
const MODULES_DIR = path.join(DOCS_ROOT, 'modules');
const SOURCE_FILE = path.resolve(
  __dirname,
  '..',
  '..',
  'CodeBolt',
  'packages',
  'codeboltjs',
  'src',
  'tools',
  'pseudo-cli',
  'commands.ts'
);

const TITLE_MAP = {
  fs: 'Filesystem',
  llm: 'LLM',
  dbmemory: 'DB Memory',
  episodic: 'Episodic Memory',
  pmemory: 'Persistent Memory',
  env: 'Environment',
  mcp: 'MCP',
  kg: 'Knowledge Graph',
  kv: 'KV Store',
  rmr: 'Review Merge Request',
  reqplan: 'Requirement Plan',
  parse: 'Output Parsers',
  eventqueue: 'Agent Event Queue',
  deliberation: 'Agent Deliberation',
  portfolio: 'Agent Portfolio',
  actionblock: 'Action Block',
  actionplan: 'Action Plan',
  testing: 'Auto Testing',
  context: 'Context Assembly',
  'rule-engine': 'Context Rule Engine',
  'file-intent': 'File Update Intent',
  ingestion: 'Memory Ingestion',
  'proj-struct': 'Project Structure',
  'update-request': 'Project Structure Update Request',
  'side-exec': 'Side Execution',
  panel: 'Dynamic Panel',
  codeutils: 'Code Utils',
  'bg-threads': 'Background Child Threads',
  codemap: 'Code Map',
  eventlog: 'Event Log',
};

const API_FOLDER_MAP = {
  fs: 'fs',
  git: 'git',
  terminal: 'terminal',
  browser: 'browser',
  agent: 'agent',
  thread: 'thread',
  task: 'taskplaner',
  llm: 'llm',
  chat: 'chat',
  memory: 'memory',
  dbmemory: 'dbmemory',
  episodic: 'episodicMemory',
  pmemory: 'persistentMemory',
  orchestrator: 'orchestrator',
  job: 'job',
  mcp: 'mcp',
  project: 'project',
  state: 'state',
  todo: 'todo',
  calendar: 'calendar',
  hook: 'hook',
  history: 'history',
  search: 'search',
  codemap: 'codemap',
  capability: 'capability',
  kg: 'knowledgeGraph',
  kv: 'kvStore',
  eventlog: 'eventLog',
  swarm: 'swarm',
  mail: 'mail',
  rmr: 'reviewMergeRequest',
  tokenizer: 'tokenizer',
  vectordb: 'vectordb',
  debug: 'debug',
  codeutils: 'codeutils',
  roadmap: 'roadmap',
  reqplan: 'requirementPlan',
  parse: 'outputparsers',
  deliberation: 'agentDeliberation',
  portfolio: 'agentPortfolio',
  actionblock: 'actionBlock',
  actionplan: 'actionPlan',
  testing: 'autoTesting',
  context: 'contextAssembly',
  'rule-engine': 'contextRuleEngine',
  crawler: 'crawler',
  'file-intent': 'fileUpdateIntent',
  feedback: 'groupFeedback',
  ingestion: 'memoryIngestion',
  'proj-struct': 'projectStructure',
  'update-request': 'projectStructureUpdateRequest',
  'side-exec': 'sideExecution',
  utils: 'utils',
};

function countBraces(line) {
  return (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
}

function cleanString(value) {
  return value.replace(/\\'/g, "'").trim();
}

function humanizeToken(value) {
  return value
    .split('-')
    .map(part => part ? part[0].toUpperCase() + part.slice(1) : part)
    .join(' ');
}

function getModuleTitle(moduleName) {
  return TITLE_MAP[moduleName] || humanizeToken(moduleName);
}

function yamlQuote(value) {
  return JSON.stringify(value);
}

function formatType(type) {
  switch (type) {
    case 'json':
      return '`json`';
    case 'boolean':
      return '`boolean`';
    case 'number':
      return '`number`';
    default:
      return '`string`';
  }
}

function buildParamDescription(param) {
  const descriptions = {
    id: 'Identifier of the target resource.',
    path: 'Filesystem or workspace path used by the command.',
    name: 'Name of the target resource to create, update, or delete.',
    source: 'Source content or source path used when creating a resource.',
    content: 'Raw content string passed to the SDK method.',
    command: 'Shell command string to execute.',
    message: 'Human-readable message text sent to the SDK method.',
    task: 'Task or prompt text for the target operation.',
    title: 'Title of the resource being created or updated.',
    description: 'Longer description text for the resource.',
    data: 'Structured JSON payload passed through to the underlying SDK method.',
    params: 'Structured JSON payload passed through to the underlying SDK method.',
    config: 'Structured configuration object for the target operation.',
    status: 'Status value to apply to the target resource.',
    type: 'Type discriminator used by the underlying SDK method.',
    url: 'URL used for browser or repository operations.',
    query: 'Search query string used by the command.',
    regex: 'Regular expression pattern used by the search operation.',
    pattern: 'File glob or match pattern used with the search operation.',
    include: 'Optional include filter passed to the search operation.',
    exclude: 'Optional exclude filter passed to the search operation.',
    recursive: 'Boolean flag that enables recursive traversal.',
    branch: 'Git branch name for the operation.',
    commit: 'Commit hash or commit reference for the git operation.',
    max: 'Maximum number of results to return.',
    agents: 'JSON array or structured value identifying one or more agents.',
    agent: 'Agent identifier used by the command.',
    toolbox: 'MCP toolbox or server namespace to target.',
    tool: 'Specific MCP tool name to execute.',
    servers: 'JSON array of MCP server names.',
    model: 'Model identifier used by the LLM operation.',
    buttons: 'JSON array describing confirmation button options.',
    thread: 'Thread identifier for chat history operations.',
    priority: 'Priority value for todo or task-related operations.',
    key: 'Key value used to address stored data.',
    value: 'Value stored or updated by the operation.',
    format: 'Serialization or import/export format.',
    text: 'Text content to type or send.',
    element: 'Element label, selector, or target description used by browser commands.',
    pixels: 'Numeric scroll distance in pixels.',
    direction: 'Scroll direction or similar directional option.',
    intent: 'Structured intent object for retrieval or planning operations.',
  };

  return descriptions[param.name] || `Value for the \`${param.name}\` parameter.`;
}

function buildSyntax(moduleName, action) {
  const parts = [`codebolt ${moduleName} ${action.name}`];
  for (const param of action.params) {
    let segment;
    if (param.type === 'boolean') {
      segment = param.required
        ? `${param.flag} | --no-${param.name}`
        : `[${param.flag} | --no-${param.name}]`;
    } else {
      const raw = `${param.flag} <${param.type}>`;
      segment = param.required ? raw : `[${raw}]`;
    }
    parts.push(segment);
  }
  return parts.join(' ');
}

function getRequiredFlags(action) {
  const required = action.params.filter(param => param.required).map(param => `\`${param.flag}\``);
  return required.length > 0 ? required.join(', ') : 'None';
}

function getApiLink(moduleName) {
  const folder = API_FOLDER_MAP[moduleName];
  if (!folder) return null;
  const absolute = path.resolve(DOCS_ROOT, '..', '10_api-access', folder, 'index.md');
  if (!fs.existsSync(absolute)) return null;
  return {
    moduleDoc: `../../10_api-access/${folder}/index.md`,
    rootDoc: `../10_api-access/${folder}/index.md`,
  };
}

function parseRegistry(source) {
  const lines = source.split(/\r?\n/);
  const modules = [];
  let started = false;
  let depth = 0;
  let currentModule = null;
  let currentAction = null;
  let inParams = false;

  for (const line of lines) {
    if (!started) {
      if (line.includes('export const commandRegistry')) {
        started = true;
        depth += countBraces(line);
      }
      continue;
    }

    if (depth === 1) {
      const match = line.match(/^\s{4}(?:'([^']+)'|([\w-]+)):\s*{$/);
      if (match) {
        const name = match[1] || match[2];
        currentModule = {
          name,
          title: getModuleTitle(name),
          actions: [],
        };
        modules.push(currentModule);
      }
    } else if (depth === 2 && currentModule) {
      const match = line.match(/^\s{8}(?:'([^']+)'|([\w-]+)):\s*{$/);
      if (match) {
        const name = match[1] || match[2];
        currentAction = {
          name,
          description: '',
          params: [],
        };
        currentModule.actions.push(currentAction);
      }
    } else if (depth === 3 && currentAction) {
      const descMatch = line.match(/^\s{12}description:\s*'((?:\\'|[^'])*)',?$/);
      if (descMatch) {
        currentAction.description = cleanString(descMatch[1]);
      }

      if (/^\s{12}params:/.test(line)) {
        const inlineMatches = [...line.matchAll(/\{\s*name:\s*'([^']+)',\s*flag:\s*'([^']+)',\s*type:\s*'([^']+)',\s*required:\s*(true|false)\s*\}/g)];
        for (const match of inlineMatches) {
          currentAction.params.push({
            name: match[1],
            flag: match[2],
            type: match[3],
            required: match[4] === 'true',
          });
        }
        inParams = line.includes('[') && !line.includes(']');
      } else if (inParams) {
        const inlineMatches = [...line.matchAll(/\{\s*name:\s*'([^']+)',\s*flag:\s*'([^']+)',\s*type:\s*'([^']+)',\s*required:\s*(true|false)\s*\}/g)];
        for (const match of inlineMatches) {
          currentAction.params.push({
            name: match[1],
            flag: match[2],
            type: match[3],
            required: match[4] === 'true',
          });
        }
        if (line.includes(']')) {
          inParams = false;
        }
      }
    }

    const previousDepth = depth;
    depth += countBraces(line);

    if (previousDepth === 3 && depth === 2) {
      currentAction = null;
      inParams = false;
    } else if (previousDepth === 2 && depth === 1) {
      currentModule = null;
    }

    if (started && depth === 0) {
      break;
    }
  }

  return modules;
}

function renderModuleDoc(moduleInfo) {
  const apiLink = getApiLink(moduleInfo.name);
  const summaryRows = moduleInfo.actions
    .map(action => `| \`${action.name}\` | ${action.description} | ${getRequiredFlags(action)} |`)
    .join('\n');

  const sections = moduleInfo.actions.map(action => {
    const syntax = buildSyntax(moduleInfo.name, action);
    const paramsSection = action.params.length === 0
      ? 'This command takes no parameters.'
      : [
          '| Name | Flag | Type | Required | Description |',
          '| --- | --- | --- | --- | --- |',
          ...action.params.map(param =>
            `| \`${param.name}\` | \`${param.flag}\` | ${formatType(param.type)} | ${param.required ? 'Yes' : 'No'} | ${buildParamDescription(param)} |`
          ),
        ].join('\n');

    return [
      `## \`${action.name}\``,
      '',
      action.description || 'No description was defined in the registry source.',
      '',
      '```text',
      syntax,
      '```',
      '',
      paramsSection,
    ].join('\n');
  }).join('\n\n');

  return `---\nsidebar_label: ${yamlQuote(moduleInfo.title)}\ntitle: ${yamlQuote(`${moduleInfo.title} Pseudo CLI`)}\ndescription: ${yamlQuote(`Pseudo CLI reference for the ${moduleInfo.title} module.`)}\n---\n\nGenerated from \`packages/codeboltjs/src/tools/pseudo-cli/commands.ts\`. Edit the registry or rerun \`node scripts/generate-pseudo-cli-docs.js\` instead of updating this file by hand.\n\nThe \`${moduleInfo.name}\` pseudo CLI module currently exposes ${moduleInfo.actions.length} command${moduleInfo.actions.length === 1 ? '' : 's'}.\n\n${apiLink ? `Related SDK docs: [${moduleInfo.title}](${apiLink.moduleDoc})\n` : ''}\n## Commands At A Glance\n\n| Action | Description | Required flags |\n| --- | --- | --- |\n${summaryRows}\n\n${sections}\n`;
}

function renderModulesIndex(modules) {
  const rows = modules.map(moduleInfo => {
    const apiLink = getApiLink(moduleInfo.name);
    return `| [\`${moduleInfo.name}\`](./${moduleInfo.name}.md) | ${moduleInfo.actions.length} | ${apiLink ? `[SDK docs](${apiLink.moduleDoc})` : 'Not available'} |`;
  }).join('\n');

  return `---\nsidebar_label: "Overview"\nsidebar_position: 1\ntitle: "Pseudo CLI Modules"\ndescription: "Per-module pseudo CLI reference generated from the CodeboltJS command registry."\n---\n\nThese pages are generated from \`packages/codeboltjs/src/tools/pseudo-cli/commands.ts\` so the command list and parameter tables stay aligned with the registry.\n\n| Module | Actions | Direct API docs |\n| --- | ---: | --- |\n${rows}\n`;
}

function renderRootModuleReference(modules) {
  const rows = modules.map(moduleInfo => {
    const apiLink = getApiLink(moduleInfo.name);
    return `| [\`${moduleInfo.name}\`](./modules/${moduleInfo.name}.md) | ${moduleInfo.actions.length} | ${apiLink ? `[SDK docs](${apiLink.rootDoc})` : 'Not available'} |`;
  }).join('\n');

  return `---\nsidebar_label: "Module Reference"\nsidebar_position: 3\ntitle: "Pseudo CLI Module Reference"\ndescription: "Module inventory for the CodeboltJS pseudo CLI registry."\n---\n\nThe pseudo CLI registry is defined in \`packages/codeboltjs/src/tools/pseudo-cli/commands.ts\`. It currently exposes ${modules.length} top-level modules.\n\nUse this page as the index and use the per-module pages for the actual command reference. Each module page includes the command list, parameter tables, required flags, and command syntax generated from the registry source.\n\n## Module Docs\n\n| Module | Actions | Direct API docs |\n| --- | ---: | --- |\n${rows}\n`;
}

function ensureCleanDirectory(dir) {
  fs.mkdirSync(dir, { recursive: true });
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      fs.rmSync(full, { recursive: true, force: true });
    } else if (entry.endsWith('.md') || entry === '_category_.json') {
      fs.rmSync(full, { force: true });
    }
  }
}

function main() {
  const source = fs.readFileSync(SOURCE_FILE, 'utf8');
  const modules = parseRegistry(source);

  ensureCleanDirectory(MODULES_DIR);

  fs.writeFileSync(
    path.join(MODULES_DIR, '_category_.json'),
    JSON.stringify(
      {
        label: 'Modules',
        position: 4,
        collapsible: true,
        collapsed: true,
        className: 'red',
        link: {
          type: 'doc',
          id: 'reference/codeboltjs/pseudo-cli/modules/index',
        },
      },
      null,
      2
    ) + '\n'
  );

  fs.writeFileSync(path.join(MODULES_DIR, 'index.md'), renderModulesIndex(modules));

  for (const moduleInfo of modules) {
    fs.writeFileSync(path.join(MODULES_DIR, `${moduleInfo.name}.md`), renderModuleDoc(moduleInfo));
  }

  fs.writeFileSync(path.join(DOCS_ROOT, 'module-reference.md'), renderRootModuleReference(modules));

  console.log(`Generated pseudo CLI docs for ${modules.length} modules.`);
}

main();
