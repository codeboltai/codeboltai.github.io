---
sidebar_position: 1
title: Codemap Module
---

# Codemap Module

The Codemap module provides functionality for managing codemaps - visual representations of code structure that help agents and users understand project organization.

## Overview

Codemaps are hierarchical documents that describe the structure, organization, and relationships within a codebase. They can include:
- File and folder organization
- Component relationships
- Architecture diagrams
- Navigation guides

## Quick Start

```typescript
import codebolt from '@codebolt/codeboltjs';

// List all existing codemaps
const codemaps = await codebolt.codemap.list();

// Create a new codemap placeholder
const placeholder = await codebolt.codemap.create({
  title: 'API Service Architecture',
  query: 'How is the API layer organized?'
});

// Save the complete codemap content
await codebolt.codemap.save(placeholder.codemap.id, {
  id: placeholder.codemap.id,
  title: 'API Service Architecture',
  sections: [
    {
      id: 'routes',
      title: 'API Routes',
      files: ['src/routes/users.ts', 'src/routes/products.ts']
    }
  ]
});

// Mark as complete
await codebolt.codemap.setStatus(placeholder.codemap.id, 'done');
```

## Available Methods

| Method | Description |
|--------|-------------|
| `list()` | List all codemaps for a project |
| `get(codemapId)` | Get a specific codemap by ID |
| `create(data)` | Create a placeholder codemap |
| `save(codemapId, codemap)` | Save complete codemap content |
| `setStatus(codemapId, status)` | Update codemap status |
| `update(codemapId, data)` | Update codemap info |
| `delete(codemapId)` | Delete a codemap |

## Status Lifecycle

Codemaps follow a status lifecycle:

1. **creating** - Placeholder created, content being generated
2. **done** - Codemap is complete and ready
3. **error** - Generation failed

## Advanced Examples

### Example 1: Create Codemap from File Analysis
```typescript
async function createCodemapFromFiles(title) {
  // Get all project files
  const markdown = await codebolt.codeutils.getAllFilesAsMarkDown();

  // Create placeholder
  const codemap = await codebolt.codemap.create({
    title,
    query: `Project structure for ${title}`
  });

  // Build hierarchical structure
  const structure = {};
  markdown.files.forEach(file => {
    const parts = file.path.split('/');
    let current = structure;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        current[part] = { type: 'file', language: file.language };
      } else {
        current[part] = current[part] || { type: 'directory', children: {} };
        current = current[part].children;
      }
    });
  });

  // Save codemap
  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title,
    structure,
    metadata: {
      totalFiles: markdown.files.length,
      generatedAt: new Date().toISOString()
    }
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}
```

### Example 2: Create Package Architecture Map
```typescript
async function createPackageCodemap(packageName) {
  // Get project structure
  const meta = await codebolt.projectStructure.getMetadata();
  const pkg = meta.metadata.packages.find(p => p.name === packageName);

  if (!pkg) {
    throw new Error(`Package ${packageName} not found`);
  }

  // Create codemap
  const codemap = await codebolt.codemap.create({
    title: `${pkg.name} Architecture`,
    query: `How is ${pkg.name} organized?`
  });

  // Build architecture view
  const architecture = {
    package: {
      name: pkg.name,
      type: pkg.type,
      path: pkg.path
    },
    routes: pkg.routes || [],
    tables: pkg.tables || [],
    dependencies: pkg.dependencies || [],
    structure: {}
  };

  // Get file structure
  const markdown = await codebolt.codeutils.getAllFilesAsMarkDown();
  const pkgFiles = markdown.files.filter(f => f.path.startsWith(pkg.path));

  pkgFiles.forEach(file => {
    const relativePath = file.path.substring(pkg.path.length + 1);
    const parts = relativePath.split('/');
    let current = architecture.structure;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        current[part] = { type: 'file', language: file.language };
      } else {
        current[part] = current[part] || { type: 'directory', children: {} };
        current = current[part].children;
      }
    });
  });

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: `${pkg.name} Architecture`,
    architecture
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}
```

### Example 3: Create Component Relationship Map
```typescript
async function createComponentMap(componentName) {
  // Search for component references
  const searchResults = await codebolt.codebaseSearch.search(componentName);

  // Create codemap
  const codemap = await codebolt.codemap.create({
    title: `${componentName} Component Map`,
    query: `What files reference ${componentName}?`
  });

  // Analyze relationships
  const relationships = {
    component: componentName,
    files: [],
    imports: [],
    exports: []
  };

  for (const result of searchResults.results) {
    const jsTree = await codebolt.codeutils.getJsTree(result.file);

    if (jsTree.payload) {
      const imports = jsTree.payload.structure.filter(el =>
        el.nodeType?.includes('import') && el.name.includes(componentName)
      );

      const exports = jsTree.payload.structure.filter(el =>
        el.name === componentName && el.type === 'function'
      );

      relationships.files.push({
        path: result.file,
        role: exports.length > 0 ? 'definition' : 'usage',
        imports: imports.length,
        exports: exports.length
      });
    }
  }

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: `${componentName} Component Map`,
    relationships
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}
```

### Example 4: Create Dependency Visualization
```typescript
async function createDependencyCodemap() {
  const meta = await codebolt.projectStructure.getMetadata();

  const codemap = await codebolt.codemap.create({
    title: 'Project Dependencies',
    query: 'What are the project dependencies?'
  });

  const dependencyGraph = {
    packages: [],
    relationships: []
  };

  // Build dependency matrix
  for (const pkg of meta.metadata.packages) {
    const packageInfo = {
      name: pkg.name,
      dependencies: pkg.dependencies || []
    };

    dependencyGraph.packages.push(packageInfo);

    // Track inter-package dependencies
    (pkg.dependencies || []).forEach(dep => {
      const targetPkg = meta.metadata.packages.find(p =>
        p.name === dep.name || p.name.toLowerCase().includes(dep.name.toLowerCase())
      );

      if (targetPkg) {
        dependencyGraph.relationships.push({
          from: pkg.name,
          to: targetPkg.name,
          type: 'internal'
        });
      }
    });
  }

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: 'Project Dependencies',
    graph: dependencyGraph
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}
```

### Example 5: Update Codemap Incrementally
```typescript
async function updateCodemapIncrementally(codemapId) {
  const codemap = await codebolt.codemap.get(codemapId);

  if (!codemap.codemap) {
    throw new Error('Codemap not found');
  }

  // Get current file structure
  const markdown = await codebolt.codeutils.getAllFilesAsMarkDown();

  // Detect changes
  const changes = {
    added: [],
    modified: [],
    removed: []
  };

  const currentFiles = new Set(markdown.files.map(f => f.path));
  const previousFiles = new Set(
    codemap.codemap.structure ? flattenFileTree(codemap.codemap.structure) : []
  );

  // Find new and removed files
  for (const file of currentFiles) {
    if (!previousFiles.has(file)) {
      changes.added.push(file);
    }
  }

  for (const file of previousFiles) {
    if (!currentFiles.has(file)) {
      changes.removed.push(file);
    }
  }

  // Update codemap if there are changes
  if (changes.added.length > 0 || changes.removed.length > 0) {
    const newStructure = {};
    markdown.files.forEach(file => {
      const parts = file.path.split('/');
      let current = newStructure;

      parts.forEach((part, index) => {
        if (index === parts.length - 1) {
          current[part] = { type: 'file', language: file.language };
        } else {
          current[part] = current[part] || { type: 'directory', children: {} };
          current = current[part].children;
        }
      });
    });

    await codebolt.codemap.save(codemapId, {
      ...codemap.codemap,
      structure: newStructure,
      lastUpdated: new Date().toISOString(),
      changes
    });
  }

  return { codemapId, changes };
}

function flattenFileTree(tree, prefix = '') {
  let files = [];
  for (const [name, node] of Object.entries(tree)) {
    const path = prefix ? `${prefix}/${name}` : name;
    if (node.type === 'file') {
      files.push(path);
    } else if (node.children) {
      files = files.concat(flattenFileTree(node.children, path));
    }
  }
  return files;
}
```

### Example 6: Create Multi-Layer Architecture Map
```typescript
async function createLayeredArchitectureMap() {
  const meta = await codebolt.projectStructure.getMetadata();
  const codemap = await codebolt.codemap.create({
    title: 'Layered Architecture View',
    query: 'What are the architectural layers?'
  });

  const layers = {
    presentation: [], // UI, routes, controllers
    business: [],     // Services, business logic
    data: [],         // Database, repositories
    shared: []        // Utilities, helpers
  };

  // Categorize packages by layer
  for (const pkg of meta.metadata.packages) {
    if (pkg.type === 'frontend' || pkg.name.includes('ui')) {
      layers.presentation.push(pkg);
    } else if (pkg.name.includes('service') || pkg.name.includes('business')) {
      layers.business.push(pkg);
    } else if (pkg.name.includes('data') || pkg.name.includes('db')) {
      layers.data.push(pkg);
    } else if (pkg.name.includes('shared') || pkg.name.includes('common')) {
      layers.shared.push(pkg);
    }
  }

  // Build dependency flow
  const flow = [];
  flow.push({ from: 'presentation', to: 'business' });
  flow.push({ from: 'business', to: 'data' });
  flow.push({ from: 'all', to: 'shared' });

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: 'Layered Architecture View',
    layers,
    flow,
    metadata: {
      totalPackages: meta.metadata.packages.length,
      presentationCount: layers.presentation.length,
      businessCount: layers.business.length,
      dataCount: layers.data.length,
      sharedCount: layers.shared.length
    }
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}
```

### Example 7: Create Test Coverage Map
```typescript
async function createCoverageMap() {
  const codemap = await codebolt.codemap.create({
    title: 'Test Coverage Map',
    query: 'What is the test coverage?'
  });

  // Find source files
  const sourceResults = await codebolt.codebaseSearch.search('implementation', ['src']);
  // Find test files
  const testResults = await codebolt.codebaseSearch.search('test', ['tests', '__tests__', 'spec']);

  const coverage = {
    sourceFiles: sourceResults.results.length,
    testFiles: testResults.results.length,
    coverage: 0,
    uncoveredModules: []
  };

  // Match tests to source files
  const sourceModules = new Set(
    sourceResults.results.map(r =>
      r.file.split('/').pop().replace(/\.(js|ts)$/, '')
    )
  );

  const testModules = new Set(
    testResults.results.map(r =>
      r.file.split('/').pop().replace(/\.test\.(js|ts)$/, '').replace(/\.spec\.(js|ts)$/, '')
    )
  );

  // Find uncovered modules
  sourceModules.forEach(module => {
    if (!testModules.has(module)) {
      coverage.uncoveredModules.push(module);
    }
  });

  coverage.coverage = (testModules.size / Math.max(sourceModules.size, 1)) * 100;

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: 'Test Coverage Map',
    coverage,
    recommendations: coverage.uncoveredModules.length > 0 ? [
      `Add tests for ${coverage.uncoveredModules.length} uncovered modules`,
      'Target 80%+ coverage for production code'
    ] : ['Excellent test coverage!']
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}
```

### Example 8: Batch Create Codemaps
```typescript
async function createProjectCodemaps() {
  const meta = await codebolt.projectStructure.getMetadata();

  const codemaps = [];

  // Create overview codemap
  codemaps.push(await createCodemapFromFiles('Project Overview'));

  // Create package-specific codemaps
  for (const pkg of meta.metadata.packages) {
    try {
      const codemap = await createPackageCodemap(pkg.name);
      codemaps.push(codemap);
    } catch (error) {
      console.error(`Failed to create codemap for ${pkg.name}:`, error.message);
    }
  }

  // Create dependency codemap
  codemaps.push(await createDependencyCodemap());

  // Create architecture codemap
  codemaps.push(await createLayeredArchitectureMap());

  return codemaps;
}
```

## Error Handling Examples

### Handle Creation Failures
```typescript
async function safeCreateCodemap(title, query) {
  try {
    const codemap = await codebolt.codemap.create({ title, query });
    return codemap;
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.warn('Codemap already exists, updating...');
      // Handle update scenario
    } else {
      console.error('Failed to create codemap:', error.message);
      throw error;
    }
  }
}
```

### Handle Save Failures
```typescript
async function safeSaveCodemap(codemapId, content) {
  try {
    await codebolt.codemap.save(codemapId, content);
    await codebolt.codemap.setStatus(codemapId, 'done');
    return { success: true };
  } catch (error) {
    await codebolt.codemap.setStatus(codemapId, 'error', error.message);
    return { success: false, error: error.message };
  }
}
```

## Performance Considerations

1. **Large Projects**:
   - For projects with 1000+ files, consider creating scoped codemaps per package
   - Use incremental updates instead of full regeneration
   - Implement lazy loading for large codemap structures

2. **Caching**:
   - Cache codemap results to avoid redundant regeneration
   - Implement change detection to update only when necessary
   - Use file timestamps to determine if refresh is needed

3. **Concurrent Operations**:
   - Avoid creating multiple codemaps simultaneously
   - Use queue system for batch operations
   - Implement rate limiting for API calls

## Common Pitfalls

### Pitfall 1: Not Setting Status
```typescript
// ❌ Incorrect
const codemap = await codebolt.codemap.create({ title: 'My Map' });
await codebolt.codemap.save(codemap.codemap.id, content);
// Status remains 'creating'

// ✅ Correct
const codemap = await codebolt.codemap.create({ title: 'My Map' });
await codebolt.codemap.save(codemap.codemap.id, content);
await codebolt.codemap.setStatus(codemap.codemap.id, 'done');
```

### Pitfall 2: Missing Error Handling
```typescript
// ❌ Incorrect
const codemap = await codebolt.codemap.create({ title: 'My Map' });
const content = await generateContent();
await codebolt.codemap.save(codemap.codemap.id, content);
await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

// ✅ Correct
const codemap = await codebolt.codemap.create({ title: 'My Map' });
try {
  const content = await generateContent();
  await codebolt.codemap.save(codemap.codemap.id, content);
  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');
} catch (error) {
  await codebolt.codemap.setStatus(codemap.codemap.id, 'error', error.message);
}
```

### Pitfall 3: Overwriting Existing Data
```typescript
// ❌ Incorrect
await codebolt.codemap.save(codemapId, newData);

// ✅ Correct
const existing = await codebolt.codemap.get(codemapId);
const merged = { ...existing.codemap, ...newData };
await codebolt.codemap.save(codemapId, merged);
```

## Module Integration Examples

### Integration 1: Codemap + CodebaseSearch
```typescript
async function createSearchResultCodemap(query) {
  const results = await codebolt.codebaseSearch.search(query);

  const codemap = await codebolt.codemap.create({
    title: `Search: ${query}`,
    query
  });

  const clusters = clusterByFile(results.results);

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: `Search: ${query}`,
    clusters
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}

function clusterByFile(results) {
  const clusters = {};
  results.forEach(r => {
    const file = r.file;
    if (!clusters[file]) clusters[file] = [];
    clusters[file].push(r);
  });
  return clusters;
}
```

### Integration 2: Codemap + Codeutils
```typescript
async function createAnalyzedCodemap() {
  const markdown = await codebolt.codeutils.getAllFilesAsMarkDown();

  const codemap = await codebolt.codemap.create({
    title: 'Analyzed Project Structure',
    query: 'Project structure with analysis'
  });

  const analysis = {
    totalFiles: markdown.files.length,
    languages: {},
    sizeDistribution: {},
    structure: {}
  };

  markdown.files.forEach(file => {
    const lang = file.language || 'unknown';
    analysis.languages[lang] = (analysis.languages[lang] || 0) + 1;

    const size = file.content.length;
    const sizeBracket = size < 1000 ? 'small' : size < 5000 ? 'medium' : 'large';
    analysis.sizeDistribution[sizeBracket] = (analysis.sizeDistribution[sizeBracket] || 0) + 1;
  });

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: 'Analyzed Project Structure',
    analysis
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}
```

### Integration 3: Codemap + ProjectStructure
```typescript
async function createComprehensiveCodemap() {
  const [meta, markdown] = await Promise.all([
    codebolt.projectStructure.getMetadata(),
    codebolt.codeutils.getAllFilesAsMarkDown()
  ]);

  const codemap = await codebolt.codemap.create({
    title: 'Comprehensive Project View',
    query: 'Complete project overview'
  });

  const comprehensive = {
    packages: meta.metadata.packages.map(pkg => ({
      name: pkg.name,
      type: pkg.type,
      fileCount: markdown.files.filter(f => f.path.startsWith(pkg.path)).length,
      routes: pkg.routes?.length || 0,
      tables: pkg.tables?.length || 0
    })),
    totalFiles: markdown.files.length,
    dependencies: meta.metadata.packages.reduce((acc, pkg) => {
      return acc + (pkg.dependencies?.length || 0);
    }, 0)
  };

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: 'Comprehensive Project View',
    comprehensive
  });

  await codebolt.codemap.setStatus(codemap.codemap.id, 'done');

  return codemap;
}
```

## Common Use Cases

### Generate a Codemap
```typescript
// Create placeholder while generating
const map = await codebolt.codemap.create({
  title: 'Database Schema Overview'
});

try {
  // Generate content (your logic here)
  const content = { /* ... */ };

  // Save complete content
  await codebolt.codemap.save(map.codemap.id, content);
  await codebolt.codemap.setStatus(map.codemap.id, 'done');
} catch (error) {
  // Handle errors
  await codebolt.codemap.setStatus(map.codemap.id, 'error', error.message);
}
```

### Update Existing Codemap
```typescript
// Update description
await codebolt.codemap.update(codemapId, {
  description: 'Updated guide to the authentication system'
});
```
