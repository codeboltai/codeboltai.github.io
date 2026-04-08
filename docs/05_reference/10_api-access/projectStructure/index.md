---
sidebar_position: 1
title: Project Structure Module
---

# Project Structure Module

The Project Structure module provides comprehensive tools for managing project metadata, packages, API routes, database tables, dependencies, and more. This is essential for agents that need to understand and modify project organization.

## Overview

The module manages:
- **Workspace Metadata** - Project-level information
- **Packages** - Logical groupings (frontend, backend, etc.)
- **API Routes** - REST endpoints
- **Database Tables** - Schema definitions
- **Dependencies** - Package dependencies
- **Run Commands** - Build/dev scripts
- **UI Routes** - Frontend routes
- **Deployment Configs** - Deployment settings
- **Git Info** - Repository information
- **Design Guidelines** - Style/design tokens

## Quick Start

```typescript
import codebolt from '@codebolt/codeboltjs';

// Get project metadata
const metadata = await codebolt.projectStructure.getMetadata();

// Create a new package
const pkg = await codebolt.projectStructure.createPackage({
  name: 'api-server',
  path: 'packages/api',
  type: 'backend',
  description: 'REST API server'
});

// Add an API route
await codebolt.projectStructure.addRoute(pkg.package.id, {
  path: '/api/users',
  method: 'GET',
  description: 'List all users',
  handler: 'getUsersHandler'
});

// Add a dependency
await codebolt.projectStructure.addDependency(pkg.package.id, {
  name: 'express',
  version: '^4.18.0',
  type: 'runtime'
});
```

## Available Methods

### Metadata Operations
| Method | Description |
|--------|-------------|
| `getMetadata()` | Get complete project metadata |
| `updateMetadata(updates)` | Update workspace metadata |

### Package Operations
| Method | Description |
|--------|-------------|
| `getPackages()` | List all packages |
| `getPackage(packageId)` | Get a specific package |
| `createPackage(data)` | Create a new package |
| `updatePackage(packageId, updates)` | Update a package |
| `deletePackage(packageId)` | Delete a package |

### API Route Operations
| Method | Description |
|--------|-------------|
| `addRoute(packageId, route)` | Add an API route |
| `updateRoute(packageId, routeId, updates)` | Update a route |
| `deleteRoute(packageId, routeId)` | Delete a route |

### Database Table Operations
| Method | Description |
|--------|-------------|
| `addTable(packageId, table)` | Add a database table |
| `updateTable(packageId, tableId, updates)` | Update a table |
| `deleteTable(packageId, tableId)` | Delete a table |

### Dependency Operations
| Method | Description |
|--------|-------------|
| `addDependency(packageId, dependency)` | Add a dependency |
| `updateDependency(packageId, dependencyId, updates)` | Update a dependency |
| `deleteDependency(packageId, dependencyId)` | Delete a dependency |

### Run Command Operations
| Method | Description |
|--------|-------------|
| `addCommand(packageId, command)` | Add a run command |
| `updateCommand(packageId, commandId, updates)` | Update a command |
| `deleteCommand(packageId, commandId)` | Delete a command |

### UI Route Operations
| Method | Description |
|--------|-------------|
| `addUiRoute(packageId, route)` | Add a UI route |
| `updateUiRoute(packageId, routeId, updates)` | Update a UI route |
| `deleteUiRoute(packageId, routeId)` | Delete a UI route |

### Deployment & Configuration
| Method | Description |
|--------|-------------|
| `addDeployment(packageId, config)` | Add deployment config |
| `updateDeployment(packageId, configId, updates)` | Update deployment |
| `deleteDeployment(packageId, configId)` | Delete deployment |
| `updateGit(gitInfo)` | Update git information |
| `updateDesignGuidelines(packageId, guidelines)` | Update design guidelines |
| `updateFrontendFramework(packageId, framework)` | Update framework info |

## Advanced Examples

### Example 1: Initialize Complete Project Structure
```typescript
async function initializeProject(projectConfig) {
  // Update workspace metadata
  await codebolt.projectStructure.updateMetadata({
    name: projectConfig.name,
    description: projectConfig.description,
    language: projectConfig.language
  });

  const packageIds = [];

  // Create packages
  for (const pkgConfig of projectConfig.packages) {
    const pkg = await codebolt.projectStructure.createPackage({
      name: pkgConfig.name,
      path: pkgConfig.path,
      type: pkgConfig.type,
      description: pkgConfig.description
    });
    packageIds.push(pkg.package.id);

    // Add dependencies
    for (const dep of pkgConfig.dependencies) {
      await codebolt.projectStructure.addDependency(pkg.package.id, dep);
    }

    // Add run commands
    for (const cmd of pkgConfig.commands) {
      await codebolt.projectStructure.addCommand(pkg.package.id, cmd);
    }

    // Add API routes for backend packages
    if (pkgConfig.type === 'backend') {
      for (const route of pkgConfig.routes) {
        await codebolt.projectStructure.addRoute(pkg.package.id, route);
      }
    }

    // Add database tables
    for (const table of pkgConfig.tables) {
      await codebolt.projectStructure.addTable(pkg.package.id, table);
    }
  }

  return packageIds;
}

// Usage
const ids = await initializeProject({
  name: 'my-app',
  description: 'A full-stack application',
  language: 'typescript',
  packages: [
    {
      name: 'frontend',
      path: 'packages/frontend',
      type: 'frontend',
      description: 'React frontend',
      dependencies: [
        { name: 'react', version: '^18.2.0', type: 'runtime' },
        { name: 'typescript', version: '^5.0.0', type: 'dev' }
      ],
      commands: [
        { name: 'dev', command: 'vite' },
        { name: 'build', command: 'tsc && vite build' }
      ],
      routes: [],
      tables: []
    },
    {
      name: 'backend',
      path: 'packages/backend',
      type: 'backend',
      description: 'Express API',
      dependencies: [
        { name: 'express', version: '^4.18.0', type: 'runtime' }
      ],
      commands: [
        { name: 'start', command: 'node dist/index.js' },
        { name: 'dev', command: 'ts-node src/index.ts' }
      ],
      routes: [
        { path: '/api/users', method: 'GET', description: 'List users' },
        { path: '/api/users', method: 'POST', description: 'Create user' }
      ],
      tables: [
        { name: 'users', columns: ['id', 'name', 'email'] }
      ]
    }
  ]
});
```

### Example 2: Generate API Documentation
```typescript
async function generateApiDocumentation() {
  const meta = await codebolt.projectStructure.getMetadata();

  const apiDocs = {
    title: 'API Documentation',
    version: '1.0.0',
    endpoints: []
  };

  for (const pkg of meta.metadata.packages) {
    if (pkg.routes && pkg.routes.length > 0) {
      for (const route of pkg.routes) {
        apiDocs.endpoints.push({
          package: pkg.name,
          path: route.path,
          method: route.method,
          description: route.description,
          handler: route.handler,
          headers: {
            'Content-Type': 'application/json'
          },
          examples: generateExampleRequest(route)
        });
      }
    }
  }

  return apiDocs;
}

function generateExampleRequest(route) {
  const resource = route.path.split('/').pop();
  switch (route.method) {
    case 'GET':
      return `curl -X GET http://localhost:3000${route.path}`;
    case 'POST':
      return `curl -X POST http://localhost:3000${route.path} -H "Content-Type: application/json" -d '{"${resource}": "data"}'`;
    default:
      return `curl -X ${route.method} http://localhost:3000${route.path}`;
  }
}
```

### Example 3: Analyze Dependencies
```typescript
async function analyzeDependencies() {
  const meta = await codebolt.projectStructure.getMetadata();

  const analysis = {
    totalDependencies: 0,
    byPackage: [],
    duplicates: [],
    outdated: [],
    securityIssues: []
  };

  const allDeps = new Map();

  for (const pkg of meta.metadata.packages) {
    const packageDeps = {
      package: pkg.name,
      runtime: [],
      dev: [],
      peer: [],
      total: 0
    };

    if (pkg.dependencies) {
      for (const dep of pkg.dependencies) {
        packageDeps[dep.type].push(dep);
        packageDeps.total++;

        // Track duplicates
        const key = dep.name;
        if (allDeps.has(key)) {
          analysis.duplicates.push({
            dependency: key,
            packages: [allDeps.get(key), pkg.name]
          });
        }
        allDeps.set(key, pkg.name);

        // Check for outdated versions (simplified)
        if (dep.version.includes('^') || dep.version.includes('~')) {
          analysis.outdated.push({
            dependency: dep.name,
            version: dep.version,
            package: pkg.name
          });
        }
      }
    }

    analysis.byPackage.push(packageDeps);
    analysis.totalDependencies += packageDeps.total;
  }

  return analysis;
}
```

### Example 4: Generate Database Schema Diagram
```typescript
async function generateSchemaDiagram() {
  const meta = await codebolt.projectStructure.getMetadata();

  const schema = {
    tables: [],
    relationships: []
  };

  for (const pkg of meta.metadata.packages) {
    if (pkg.tables && pkg.tables.length > 0) {
      for (const table of pkg.tables) {
        schema.tables.push({
          name: table.name,
          package: pkg.name,
          columns: table.columns || [],
          primaryKey: findPrimaryKey(table),
          foreignKeys: findForeignKeys(table)
        });
      }
    }
  }

  // Detect relationships
  schema.tables.forEach(table => {
    table.foreignKeys.forEach(fk => {
      const referencedTable = schema.tables.find(t => t.name === fk.references);
      if (referencedTable) {
        schema.relationships.push({
          from: table.name,
          to: referencedTable.name,
          type: 'many-to-one',
          column: fk.column
        });
      }
    });
  });

  return schema;
}

function findPrimaryKey(table) {
  return table.columns?.find(col =>
    col.name === 'id' || col.primaryKey
  );
}

function findForeignKeys(table) {
  return table.columns?.filter(col =>
    col.name.endsWith('_id') || col.foreignKey
  ) || [];
}
```

### Example 5: Sync Package with File System
```typescript
async function syncPackageWithFileSystem(packageId) {
  const [pkg, markdown] = await Promise.all([
    codebolt.projectStructure.getPackage(packageId),
    codebolt.codeutils.getAllFilesAsMarkDown()
  ]);

  if (!pkg.package) {
    throw new Error('Package not found');
  }

  const analysis = {
    package: pkg.package.name,
    documentedFiles: 0,
    actualFiles: 0,
    missingRoutes: [],
    missingTables: []
  };

  // Count actual files in package directory
  const actualFiles = markdown.files.filter(f =>
    f.path.startsWith(pkg.package.path)
  );
  analysis.actualFiles = actualFiles.length;

  // Check documented routes
  if (pkg.package.routes) {
    analysis.documentedFiles += pkg.package.routes.length;

    // Verify route files exist
    for (const route of pkg.package.routes) {
      const routeFile = actualFiles.find(f =>
        f.path.includes(route.handler) || f.path.includes(route.path.replace(/\//g, '_'))
      );
      if (!routeFile) {
        analysis.missingRoutes.push(route);
      }
    }
  }

  // Check documented tables
  if (pkg.package.tables) {
    analysis.documentedFiles += pkg.package.tables.length;

    // Verify table models exist
    for (const table of pkg.package.tables) {
      const tableFile = actualFiles.find(f =>
        f.path.toLowerCase().includes(table.name.toLowerCase())
      );
      if (!tableFile) {
        analysis.missingTables.push(table);
      }
    }
  }

  return analysis;
}
```

### Example 6: Generate Build Commands
```typescript
async function generateBuildCommands() {
  const meta = await codebolt.projectStructure.getMetadata();

  const buildPlan = {
    order: [],
    commands: []
  };

  // Topological sort based on dependencies
  const sorted = topologicalSort(meta.metadata.packages);

  for (const pkg of sorted) {
    if (pkg.commands) {
      const buildCmd = pkg.commands.find(c => c.name === 'build');
      const devCmd = pkg.commands.find(c => c.name === 'dev');

      if (buildCmd) {
        buildPlan.commands.push({
          package: pkg.name,
          command: buildCmd.command,
          type: 'build'
        });
      }

      if (devCmd) {
        buildPlan.commands.push({
          package: pkg.name,
          command: devCmd.command,
          type: 'dev'
        });
      }
    }

    buildPlan.order.push(pkg.name);
  }

  return buildPlan;
}

function topologicalSort(packages) {
  const sorted = [];
  const visited = new Set();

  function visit(pkg) {
    if (visited.has(pkg.name)) return;
    visited.add(pkg.name);

    // Visit dependencies first
    if (pkg.dependencies) {
      for (const dep of pkg.dependencies) {
        const depPkg = packages.find(p => p.name === dep.name);
        if (depPkg) visit(depPkg);
      }
    }

    sorted.push(pkg);
  }

  packages.forEach(visit);
  return sorted;
}
```

### Example 7: Export to OpenAPI/Swagger
```typescript
async function exportToOpenAPI() {
  const meta = await codebolt.projectStructure.getMetadata();

  const openApi = {
    openapi: '3.0.0',
    info: {
      title: meta.metadata.name,
      version: '1.0.0',
      description: meta.metadata.description
    },
    paths: {}
  };

  for (const pkg of meta.metadata.packages) {
    if (pkg.routes) {
      for (const route of pkg.routes) {
        if (!openApi.paths[route.path]) {
          openApi.paths[route.path] = {};
        }

        openApi.paths[route.path][route.method.toLowerCase()] = {
          summary: route.description,
          operationId: `${route.method.toLowerCase()}${route.path.replace(/\//g, '-')}`,
          tags: [pkg.name],
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: { type: 'object' }
                }
              }
            }
          }
        };
      }
    }
  }

  return openApi;
}
```

### Example 8: Validate Project Structure
```typescript
async function validateProjectStructure() {
  const meta = await codebolt.projectStructure.getMetadata();

  const validation = {
    valid: true,
    errors: [],
    warnings: []
  };

  // Check required fields
  if (!meta.metadata.name) {
    validation.errors.push('Project name is missing');
    validation.valid = false;
  }

  if (!meta.metadata.packages || meta.metadata.packages.length === 0) {
    validation.warnings.push('No packages defined');
  }

  // Validate each package
  for (const pkg of meta.metadata.packages) {
    if (!pkg.name) {
      validation.errors.push(`Package missing name at path ${pkg.path}`);
      validation.valid = false;
    }

    if (!pkg.type) {
      validation.warnings.push(`Package ${pkg.name} has no type defined`);
    }

    // Check for routes without handlers
    if (pkg.routes) {
      for (const route of pkg.routes) {
        if (!route.handler) {
          validation.warnings.push(`Route ${route.path} has no handler`);
        }
      }
    }

    // Check for duplicate dependencies
    if (pkg.dependencies) {
      const depNames = pkg.dependencies.map(d => d.name);
      const duplicates = depNames.filter((item, index) => depNames.indexOf(item) !== index);
      if (duplicates.length > 0) {
        validation.warnings.push(`Package ${pkg.name} has duplicate dependencies: ${duplicates.join(', ')}`);
      }
    }
  }

  return validation;
}
```

## Error Handling Examples

### Handle Package Creation Failures
```typescript
async function safeCreatePackage(config) {
  try {
    const pkg = await codebolt.projectStructure.createPackage(config);
    return { success: true, package: pkg };
  } catch (error) {
    if (error.message.includes('already exists')) {
      // Try to get existing package
      const existing = await codebolt.projectStructure.getPackages();
      const pkg = existing.packages.find(p => p.name === config.name);
      if (pkg) {
        return { success: true, package: { package: pkg }, existing: true };
      }
    }
    return { success: false, error: error.message };
  }
}
```

### Handle Missing Packages
```typescript
async function getPackageOrThrow(packageId) {
  const pkg = await codebolt.projectStructure.getPackage(packageId);

  if (!pkg.package) {
    throw new Error(`Package with ID ${packageId} not found`);
  }

  return pkg.package;
}
```

## Performance Considerations

1. **Batch Operations**:
   - When adding multiple routes/tables, use Promise.all() for concurrent operations
   - Group operations by package to minimize overhead

2. **Caching**:
   - Cache metadata calls to avoid repeated fetching
   - Invalidate cache when making updates

3. **Large Projects**:
   - For projects with 50+ packages, consider pagination
   - Use filtering to limit scope of operations

## Common Pitfalls

### Pitfall 1: Not Validating Before Update
```typescript
// ❌ Incorrect
await codebolt.projectStructure.updatePackage(packageId, { name: '' });

// ✅ Correct
const updates = { name: '' };
if (!updates.name || updates.name.trim().length === 0) {
  throw new Error('Package name cannot be empty');
}
await codebolt.projectStructure.updatePackage(packageId, updates);
```

### Pitfall 2: Circular Dependencies
```typescript
// ❌ Incorrect - creates circular dependency
await codebolt.projectStructure.addDependency(pkgA.id, { name: 'pkgB', ... });
await codebolt.projectStructure.addDependency(pkgB.id, { name: 'pkgA', ... });

// ✅ Correct - detect and prevent
async function addDependencySafe(packageId, dep) {
  // Check for circular dependencies
  const deps = await getAllDependencies(packageId);
  if (deps.has(dep.name)) {
    throw new Error(`Circular dependency detected: ${dep.name}`);
  }
  await codebolt.projectStructure.addDependency(packageId, dep);
}
```

### Pitfall 3: Missing Error Handling
```typescript
// ❌ Incorrect
const pkg = await codebolt.projectStructure.createPackage(config);
await codebolt.projectStructure.addRoute(pkg.package.id, route);

// ✅ Correct
const pkg = await codebolt.projectStructure.createPackage(config);
if (!pkg.package) {
  throw new Error('Failed to create package');
}
await codebolt.projectStructure.addRoute(pkg.package.id, route);
```

## Module Integration Examples

### Integration 1: ProjectStructure + Codeutils
```typescript
async function syncStructureWithFiles() {
  const [meta, markdown] = await Promise.all([
    codebolt.projectStructure.getMetadata(),
    codebolt.codeutils.getAllFilesAsMarkDown()
  ]);

  const updates = [];

  for (const pkg of meta.metadata.packages) {
    const actualFiles = markdown.files.filter(f => f.path.startsWith(pkg.path));

    // Detect new routes from files
    const routeFiles = actualFiles.filter(f =>
      f.path.includes('/routes/') || f.path.includes('/api/')
    );

    for (const file of routeFiles) {
      const jsTree = await codebolt.codeutils.getJsTree(file.path);
      if (jsTree.payload) {
        const exports = jsTree.payload.structure.filter(el => el.type === 'function');

        for (const exp of exports) {
          // Check if route is documented
          const exists = pkg.routes?.some(r => r.handler === exp.name);
          if (!exists) {
            updates.push({
              packageId: pkg.id,
              route: {
                path: `/api/${exp.name.toLowerCase()}`,
                method: 'GET',
                description: `Auto-detected: ${exp.name}`,
                handler: exp.name
              }
            });
          }
        }
      }
    }
  }

  // Add discovered routes
  for (const update of updates) {
    await codebolt.projectStructure.addRoute(update.packageId, update.route);
  }

  return updates;
}
```

### Integration 2: ProjectStructure + Codemap
```typescript
async function createStructureCodemap() {
  const meta = await codebolt.projectStructure.getMetadata();

  const codemap = await codebolt.codemap.create({
    title: 'Project Architecture Map',
    query: 'How is the project organized?'
  });

  const structure = {
    packages: meta.metadata.packages.map(pkg => ({
      name: pkg.name,
      type: pkg.type,
      dependencies: pkg.dependencies?.map(d => d.name) || [],
      routes: pkg.routes?.length || 0,
      tables: pkg.tables?.length || 0
    })),
    dependencyGraph: buildDependencyGraph(meta.metadata.packages)
  };

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: 'Project Architecture Map',
    structure
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}

function buildDependencyGraph(packages) {
  const graph = {};
  packages.forEach(pkg => {
    graph[pkg.name] = pkg.dependencies?.map(d => d.name) || [];
  });
  return graph;
}
```

### Integration 3: ProjectStructure + CodebaseSearch
```typescript
async function searchInPackage(packageName, query) {
  const meta = await codebolt.projectStructure.getMetadata();
  const pkg = meta.metadata.packages.find(p => p.name === packageName);

  if (!pkg) {
    throw new Error(`Package ${packageName} not found`);
  }

  const results = await codebolt.codebaseSearch.search(query, [pkg.path]);

  return {
    package: pkg.name,
    query,
    results: results.results,
    scopedTo: pkg.path
  };
}
```

## Common Use Cases

### Document Project Architecture
```typescript
// Get full project structure
const meta = await codebolt.projectStructure.getMetadata();
console.log(`Project: ${meta.metadata.name}`);
console.log(`Packages: ${meta.metadata.packages.length}`);

for (const pkg of meta.metadata.packages) {
  console.log(`- ${pkg.name} (${pkg.type}): ${pkg.path}`);
}
```

### Define API Endpoints
```typescript
const routes = [
  { path: '/api/users', method: 'GET', description: 'List users' },
  { path: '/api/users', method: 'POST', description: 'Create user' },
  { path: '/api/users/:id', method: 'GET', description: 'Get user' },
  { path: '/api/users/:id', method: 'PUT', description: 'Update user' },
  { path: '/api/users/:id', method: 'DELETE', description: 'Delete user' }
];

for (const route of routes) {
  await codebolt.projectStructure.addRoute(packageId, route);
}
```

### Manage Dependencies
```typescript
// Add multiple dependencies
const deps = [
  { name: 'react', version: '^18.2.0', type: 'runtime' },
  { name: 'typescript', version: '^5.0.0', type: 'dev' },
  { name: 'vitest', version: '^0.34.0', type: 'dev' }
];

for (const dep of deps) {
  await codebolt.projectStructure.addDependency(packageId, dep);
}
```
