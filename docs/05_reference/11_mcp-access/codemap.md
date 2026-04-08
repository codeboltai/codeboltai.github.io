---
title: Codemap MCP
sidebar_label: codebolt.codemap
sidebar_position: 72
---

# codebolt.codemap

Codemap management tools for creating, visualizing, and managing code structure representations. Codemaps provide hierarchical views of codebase organization, sections, and file relationships.

## Available Tools

- `codemap_create` - Creates a placeholder codemap with status 'creating'
- `codemap_delete` - Deletes a codemap
- `codemap_get` - Retrieves a specific codemap by ID
- `codemap_list` - Lists all codemaps for a project
- `codemap_save` - Saves a complete codemap with content
- `codemap_set_status` - Sets the status of a codemap
- `codemap_update` - Updates codemap info (title, description, etc.)

## Tool Parameters

### codemap_create

Creates a placeholder codemap with status 'creating'. Call this before generating the actual codemap content.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the codemap |
| `description` | string | No | Optional description of the codemap |
| `projectPath` | string | No | Optional project path to associate the codemap with |

### codemap_delete

Deletes a codemap from the project.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `codemapId` | string | Yes | The codemap ID to delete |
| `projectPath` | string | No | Optional project path |

### codemap_get

Retrieves a specific codemap by ID including its complete structure and sections.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `codemapId` | string | Yes | The codemap ID to retrieve |
| `projectPath` | string | No | Optional project path |

### codemap_list

Lists all codemaps for a project with their metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectPath` | string | No | Optional project path |

### codemap_save

Saves a complete codemap with all content including sections, subsections, and file references.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `codemapId` | string | Yes | The codemap ID to save |
| `codemap` | object | Yes | The complete codemap data (see Codemap structure below) |
| `projectPath` | string | No | Optional project path |

**Codemap Structure:**
| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the codemap |
| `title` | string | Yes | Title of the codemap |
| `description` | string | No | Optional description |
| `query` | string | No | Optional query used to generate the codemap |
| `sections` | array | Yes | Array of codemap sections with nested subsections |
| `createdAt` | string | Yes | ISO timestamp of creation |
| `updatedAt` | string | Yes | ISO timestamp of last update |

**Section Structure:**
| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the section |
| `title` | string | Yes | Title of the section |
| `description` | string | No | Optional description |
| `files` | string[] | No | Array of file paths in this section |
| `subsections` | array | No | Array of nested subsections |

### codemap_set_status

Sets the status of a codemap to track its creation progress.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `codemapId` | string | Yes | The codemap ID to update |
| `status` | string | Yes | The new status. One of: `creating`, `done`, `error` |
| `error` | string | No | Optional error message if status is 'error' |
| `projectPath` | string | No | Optional project path |

### codemap_update

Updates codemap metadata such as title and description.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `codemapId` | string | Yes | The codemap ID to update |
| `title` | string | No | New title for the codemap |
| `description` | string | No | New description for the codemap |
| `projectPath` | string | No | Optional project path |

## Sample Usage

### Creating a New Codemap

```javascript
// Create a placeholder codemap
const createResult = await codebolt.codemap.create({
    title: 'Frontend Architecture',
    description: 'Code structure of the frontend application',
    projectPath: '/path/to/project'
});

console.log('Codemap created with ID:', createResult.id);
// Output: Codemap created with ID: cm-abc123
```

### Saving Complete Codemap with Sections

```javascript
// Save a complete codemap with hierarchical sections
await codebolt.codemap.save({
    codemapId: 'cm-abc123',
    projectPath: '/path/to/project',
    codemap: {
        id: 'cm-abc123',
        title: 'Frontend Architecture',
        description: 'Code structure of the frontend application',
        sections: [
            {
                id: 'section-1',
                title: 'Components',
                description: 'UI Components',
                files: ['src/components/Button.tsx', 'src/components/Card.tsx'],
                subsections: [
                    {
                        id: 'section-1-1',
                        title: 'Form Components',
                        files: ['src/components/Form/Input.tsx', 'src/components/Form/Select.tsx']
                    }
                ]
            },
            {
                id: 'section-2',
                title: 'Services',
                files: ['src/services/api.ts', 'src/services/auth.ts']
            }
        ],
        createdAt: '2024-01-24T10:00:00Z',
        updatedAt: '2024-01-24T10:30:00Z'
    }
});
```

### Listing and Retrieving Codemaps

```javascript
// List all codemaps in the project
const listResult = await codebolt.codemap.list({
    projectPath: '/path/to/project'
});

console.log(`Found ${listResult.codemaps.length} codemaps`);

// Get a specific codemap by ID
const getResult = await codebolt.codemap.get({
    codemapId: 'cm-abc123',
    projectPath: '/path/to/project'
});

console.log('Codemap title:', getResult.codemap.title);
console.log('Sections:', getResult.codemap.sections.length);
```

### Updating Codemap Status

```javascript
// Set status to 'creating' when starting generation
await codebolt.codemap.setStatus({
    codemapId: 'cm-abc123',
    status: 'creating',
    projectPath: '/path/to/project'
});

// Set status to 'done' when complete
await codebolt.codemap.setStatus({
    codemapId: 'cm-abc123',
    status: 'done',
    projectPath: '/path/to/project'
});

// Set status to 'error' if generation fails
await codebolt.codemap.setStatus({
    codemapId: 'cm-abc123',
    status: 'error',
    error: 'Failed to parse project structure',
    projectPath: '/path/to/project'
});
```

### Updating Codemap Metadata

```javascript
// Update codemap title and description
await codebolt.codemap.update({
    codemapId: 'cm-abc123',
    title: 'Frontend & Backend Architecture',
    description: 'Complete code structure including both frontend and backend modules',
    projectPath: '/path/to/project'
});
```

### Complete Workflow Example

```javascript
// 1. Create a new codemap
const { id: codemapId } = await codebolt.codemap.create({
    title: 'API Service Structure',
    description: 'REST API service code organization'
});

// 2. Set status to creating
await codebolt.codemap.setStatus({
    codemapId,
    status: 'creating'
});

// 3. Generate and save the codemap structure
await codebolt.codemap.save({
    codemapId,
    codemap: {
        id: codemapId,
        title: 'API Service Structure',
        sections: [
            {
                id: 'routes',
                title: 'API Routes',
                files: ['src/routes/users.ts', 'src/routes/products.ts']
            },
            {
                id: 'controllers',
                title: 'Controllers',
                files: ['src/controllers/UserController.ts', 'src/controllers/ProductController.ts']
            }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
});

// 4. Mark as done
await codebolt.codemap.setStatus({
    codemapId,
    status: 'done'
});

// 5. Retrieve and verify
const codemap = await codebolt.codemap.get({ codemapId });
console.log('Codemap ready:', codemap.codemap);
```

:::info
**Codemap Status Values:**

- **`creating`** - The codemap is being generated or updated. No sections are complete yet.

- **`done`** - The codemap generation is complete and all sections are ready for use.

- **`error`** - An error occurred during codemap generation. Use the `error` parameter to provide details.

:::
