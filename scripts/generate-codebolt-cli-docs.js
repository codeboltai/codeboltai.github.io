const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.resolve(__dirname, '..', 'docs', '05_reference', '06_codebolt-cli');
const ACTIONS_DOCS_DIR = path.join(DOCS_ROOT, 'actions');
const COMMANDS_DOCS_DIR = path.join(DOCS_ROOT, 'commands');
const CLI_ROOT = path.resolve(__dirname, '..', '..', 'CodeBolt', 'packages', 'cli', 'src');
const ACTIONS_SRC_DIR = path.join(CLI_ROOT, 'actions');
const COMMANDS_SRC_DIR = path.join(CLI_ROOT, 'commands');

const ACTION_FILES = [
  'agent.ts',
  'tool.ts',
  'provider.ts',
  'plugin.ts',
  'skill.ts',
  'actionblock.ts',
  'capability.ts',
  'executor.ts',
];

const COMMAND_FILES = [
  'threads.ts',
  'tasks.ts',
  'jobs.ts',
  'agents.ts',
  'git.ts',
  'system.ts',
  'projects.ts',
  'chat.ts',
  'todos.ts',
  'llm.ts',
];

const TITLE_MAP = {
  llm: 'LLM',
  git: 'Git',
  actionblock: 'Action Block',
};

function humanize(name) {
  if (TITLE_MAP[name]) return TITLE_MAP[name];
  return name
    .split('-')
    .map(part => part ? part[0].toUpperCase() + part.slice(1) : part)
    .join(' ');
}

function yamlQuote(value) {
  return JSON.stringify(value);
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

function parseQuoted(line, methodName) {
  const match = line.match(new RegExp(`\\.${methodName}\\((['"\`])((?:\\\\.|(?!\\1).)*)\\1`));
  return match ? match[2].replace(/\\'/g, "'").replace(/\\"/g, '"').trim() : '';
}

function parseOption(line, methodName) {
  const re = new RegExp(`\\.${methodName}\\((['"\`])((?:\\\\.|(?!\\1).)*)\\1\\s*,\\s*(['"\`])((?:\\\\.|(?!\\3).)*)\\3`);
  const match = line.match(re);
  if (!match) return null;
  return {
    flags: match[2].trim(),
    description: match[4].replace(/\\'/g, "'").replace(/\\"/g, '"').trim(),
    required: methodName === 'requiredOption',
  };
}

function parseArgument(line) {
  const match = line.match(/\.argument\((['"`])((?:\\.|(?!\1).)*)\1\s*,\s*(['"`])((?:\\.|(?!\3).)*)\3/);
  if (!match) return null;
  return {
    syntax: match[2].trim(),
    description: match[4].replace(/\\'/g, "'").replace(/\\"/g, '"').trim(),
  };
}

function parseGroupFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const lines = source.split(/\r?\n/);
  const fileBase = path.basename(filePath, '.ts');

  let groupVar = '';
  let groupName = '';
  let groupDescription = '';
  let current = null;
  const subcommands = [];

  for (const line of lines) {
    if (!groupVar) {
      const groupMatch = line.match(/const\s+(\w+)\s*=\s*new Command\('([^']+)'\)/);
      if (groupMatch) {
        groupVar = groupMatch[1];
        groupName = groupMatch[2];
      }
    }

    if (groupVar && !groupDescription && !current && /^\s*\.description\(/.test(line)) {
      groupDescription = parseQuoted(line, 'description');
      continue;
    }

    const subMatch = groupVar ? line.match(new RegExp(`^\\s*${groupVar}\\.command\\('([^']+)'\\)`)) : null;
    if (subMatch) {
      current = {
        name: subMatch[1],
        description: '',
        arguments: [],
        options: [],
      };
      continue;
    }

    if (!current) continue;

    if (!current.description && /\.description\(/.test(line)) {
      current.description = parseQuoted(line, 'description');
      continue;
    }

    const arg = parseArgument(line);
    if (arg) {
      current.arguments.push(arg);
      continue;
    }

    const requiredOption = parseOption(line, 'requiredOption');
    if (requiredOption) {
      current.options.push(requiredOption);
      continue;
    }

    const option = parseOption(line, 'option');
    if (option) {
      current.options.push(option);
      continue;
    }

    if (/\.action\(/.test(line)) {
      subcommands.push(current);
      current = null;
    }
  }

  return {
    name: groupName || fileBase,
    title: humanize(groupName || fileBase),
    description: groupDescription,
    subcommands,
  };
}

function renderOptionsTable(options) {
  if (options.length === 0) return 'This command takes no options.';
  return [
    '| Flags | Required | Description |',
    '| --- | --- | --- |',
    ...options.map(option => `| \`${option.flags}\` | ${option.required ? 'Yes' : 'No'} | ${option.description} |`),
  ].join('\n');
}

function renderArgumentsTable(args) {
  if (args.length === 0) return 'This command takes no positional arguments.';
  return [
    '| Argument | Description |',
    '| --- | --- |',
    ...args.map(arg => `| \`${arg.syntax}\` | ${arg.description} |`),
  ].join('\n');
}

function syntaxSuffix(command) {
  const parts = [];
  for (const arg of command.arguments) {
    parts.push(arg.syntax);
  }
  if (command.options.length > 0) {
    parts.push('[options]');
  }
  return parts.length > 0 ? ` ${parts.join(' ')}` : '';
}

function renderGroupDoc(kind, group) {
  const basePrefix = kind === 'action'
    ? `codebolt action ${group.name}`
    : `codebolt command ${group.name}`;

  const introLines = [
    group.description ? group.description : `Reference for the \`${basePrefix}\` command group.`,
  ];

  if (kind === 'action') {
    introLines.push('', 'These commands manage CodeBolt extensions. Most of them create a temporary local server context through `executeAction()` before calling the extension endpoints.');
    if (group.name === 'agent') {
      introLines.push('', 'This same command group is also mounted at the top level as `codebolt agent ...`.');
    }
  } else {
    introLines.push('', 'These commands connect to a running CodeBolt server. All subcommands inherit the global `codebolt command` options `--port <number>`, `--host <string>`, and `--json`.');
  }

  const summaryRows = group.subcommands
    .map(command => `| \`${command.name}\` | ${command.description || '-'} | ${command.arguments.length} | ${command.options.length} |`)
    .join('\n');

  const sections = group.subcommands.map(command => {
    const headings = [
      `## \`${command.name}\``,
      '',
      command.description || 'No description defined in source.',
      '',
      '```text',
      `${basePrefix} ${command.name}${syntaxSuffix(command)}`,
      kind === 'action' && group.name === 'agent' ? `codebolt agent ${command.name}${syntaxSuffix(command)}` : '',
      '```',
      '',
      '### Arguments',
      '',
      renderArgumentsTable(command.arguments),
      '',
      '### Options',
      '',
      renderOptionsTable(command.options),
    ];

    return headings.filter(Boolean).join('\n');
  }).join('\n\n');

  return `---\nsidebar_label: ${yamlQuote(group.title)}\ntitle: ${yamlQuote(`${group.title} CLI`)}\ndescription: ${yamlQuote(`Reference for the ${basePrefix} command group.`)}\n---\n\n${introLines.join('\n')}\n\n## Subcommands\n\n| Subcommand | Description | Args | Options |\n| --- | --- | ---: | ---: |\n${summaryRows}\n\n${sections}\n`;
}

function renderIndex(kind, groups) {
  const title = kind === 'action' ? 'Action Commands' : 'Server Command Modules';
  const description = kind === 'action'
    ? 'Reference for `codebolt action ...` command groups.'
    : 'Reference for `codebolt command ...` modules.';
  const prefix = kind === 'action' ? './' : './';
  const rows = groups
    .map(group => `| [\`${group.name}\`](${prefix}${group.name}.md) | ${group.subcommands.length} | ${group.description || '-'} |`)
    .join('\n');

  return `---\nsidebar_label: "Overview"\nsidebar_position: 1\ntitle: ${yamlQuote(title)}\ndescription: ${yamlQuote(description)}\n---\n\n| Group | Subcommands | Description |\n| --- | ---: | --- |\n${rows}\n`;
}

function main() {
  const actionGroups = ACTION_FILES.map(file => parseGroupFile(path.join(ACTIONS_SRC_DIR, file)));
  const commandGroups = COMMAND_FILES.map(file => parseGroupFile(path.join(COMMANDS_SRC_DIR, file)));

  ensureCleanDirectory(ACTIONS_DOCS_DIR);
  ensureCleanDirectory(COMMANDS_DOCS_DIR);

  fs.writeFileSync(
    path.join(ACTIONS_DOCS_DIR, '_category_.json'),
    JSON.stringify({
      label: 'Action Commands',
      position: 3,
      collapsible: true,
      collapsed: false,
      className: 'red',
      link: {
        type: 'doc',
        id: 'reference/codebolt-cli/actions/index',
      },
    }, null, 2) + '\n'
  );

  fs.writeFileSync(
    path.join(COMMANDS_DOCS_DIR, '_category_.json'),
    JSON.stringify({
      label: 'Server Commands',
      position: 4,
      collapsible: true,
      collapsed: false,
      className: 'red',
      link: {
        type: 'doc',
        id: 'reference/codebolt-cli/commands/index',
      },
    }, null, 2) + '\n'
  );

  fs.writeFileSync(path.join(ACTIONS_DOCS_DIR, 'index.md'), renderIndex('action', actionGroups));
  fs.writeFileSync(path.join(COMMANDS_DOCS_DIR, 'index.md'), renderIndex('command', commandGroups));

  for (const group of actionGroups) {
    fs.writeFileSync(path.join(ACTIONS_DOCS_DIR, `${group.name}.md`), renderGroupDoc('action', group));
  }

  for (const group of commandGroups) {
    fs.writeFileSync(path.join(COMMANDS_DOCS_DIR, `${group.name}.md`), renderGroupDoc('command', group));
  }

  console.log(`Generated Codebolt CLI docs for ${actionGroups.length} action groups and ${commandGroups.length} command modules.`);
}

main();
