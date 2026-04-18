---
sidebar_position: 29
---

# Project Structure

Tools for managing project metadata, structure, and configuration including packages, routes, dependencies, database tables, commands, deployments, and more.

## Tools

### project_structure_get_metadata
Retrieves complete project structure metadata including packages, routes, dependencies, and configurations.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| workspacePath | string | No | Optional workspace path to get metadata for |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_get_metadata", {});
```

---

### project_structure_update_metadata
Updates workspace metadata such as name, description, and version.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| updates | object | Yes | Key-value pairs of metadata fields to update |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_metadata", {
    updates: {
        name: "my-project",
        version: "1.0.0",
        description: "My awesome project"
    }
});
```

---

### project_structure_get_packages
Retrieves all packages in the workspace with their metadata.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| workspacePath | string | No | Optional workspace path to get packages for |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_get_packages", {});
```

---

### project_structure_get_package
Retrieves a specific package by its ID with all its metadata.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to retrieve |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_get_package", {
    packageId: "frontend-app"
});
```

---

### project_structure_create_package
Creates a new package in the project structure with the specified name, path, and optional metadata.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Name of the package |
| path | string | Yes | Path of the package |
| description | string | No | Optional description of the package |
| type | string | No | Type of the package. One of: `frontend`, `backend`, `shared`, `library`, `service` |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_create_package", {
    name: "api-service",
    path: "./packages/api",
    description: "Backend API service",
    type: "backend"
});
```

---

### project_structure_update_package
Updates an existing package with new name, description, or type.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to update |
| name | string | No | New name for the package |
| description | string | No | New description for the package |
| type | string | No | New type for the package. One of: `frontend`, `backend`, `shared`, `library`, `service` |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_package", {
    packageId: "api-service",
    description: "Updated API service description",
    type: "service"
});
```

---

### project_structure_delete_package
Deletes a package from the project structure by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to delete |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_delete_package", {
    packageId: "deprecated-package"
});
```

---

### project_structure_add_route
Adds an API route to a package with path, method, and optional metadata.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to add the route to |
| path | string | Yes | Path of the API route |
| method | string | Yes | HTTP method for the route. One of: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS` |
| description | string | No | Description of the route |
| handler | string | No | Handler function name |
| file | string | No | File path containing the handler |
| auth | boolean | No | Whether authentication is required |
| tags | string[] | No | Tags for the route |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_add_route", {
    packageId: "api-service",
    path: "/api/users",
    method: "GET",
    description: "Get all users",
    handler: "getAllUsers",
    file: "src/controllers/users.ts",
    auth: true,
    tags: ["users", "api"]
});
```

---

### project_structure_update_route
Updates an existing API route with new path, method, or other properties.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the route |
| routeId | string | Yes | ID of the route to update |
| path | string | No | New path for the route |
| method | string | No | New HTTP method. One of: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS` |
| description | string | No | New description |
| handler | string | No | New handler function name |
| file | string | No | New file path |
| auth | boolean | No | New authentication requirement |
| tags | string[] | No | New tags |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_route", {
    packageId: "api-service",
    routeId: "route-123",
    description: "Updated route description",
    auth: false
});
```

---

### project_structure_delete_route
Deletes an API route from a package by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the route |
| routeId | string | Yes | ID of the route to delete |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_delete_route", {
    packageId: "api-service",
    routeId: "route-123"
});
```

---

### project_structure_add_table
Adds a database table definition to a package with columns and optional indexes.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to add the table to |
| name | string | Yes | Name of the database table |
| columns | array | Yes | Column definitions for the table (see column structure below) |
| description | string | No | Description of the table |
| indexes | string[] | No | Index definitions |
| workspacePath | string | No | Optional workspace path |

**Column Structure:**
| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | string | Yes | Column name |
| type | string | Yes | Column data type |
| nullable | boolean | No | Whether the column is nullable |
| primaryKey | boolean | No | Whether the column is a primary key |
| foreignKey | string | No | Foreign key reference |
| defaultValue | string | No | Default value for the column |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_add_table", {
    packageId: "api-service",
    name: "users",
    description: "Users table",
    columns: [
        { name: "id", type: "uuid", primaryKey: true },
        { name: "email", type: "varchar(255)", nullable: false },
        { name: "created_at", type: "timestamp", defaultValue: "NOW()" }
    ],
    indexes: ["email"]
});
```

---

### project_structure_update_table
Updates an existing database table with new name, columns, or indexes.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the table |
| tableId | string | Yes | ID of the table to update |
| name | string | No | New name for the table |
| description | string | No | New description |
| columns | array | No | New column definitions |
| indexes | string[] | No | New index definitions |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_table", {
    packageId: "api-service",
    tableId: "table-123",
    description: "Updated users table",
    indexes: ["email", "created_at"]
});
```

---

### project_structure_delete_table
Deletes a database table from a package by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the table |
| tableId | string | Yes | ID of the table to delete |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_delete_table", {
    packageId: "api-service",
    tableId: "table-123"
});
```

---

### project_structure_add_dependency
Adds a dependency to a package with name, version, and type.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to add the dependency to |
| name | string | Yes | Name of the dependency |
| version | string | Yes | Version of the dependency |
| type | string | Yes | Type of dependency. One of: `runtime`, `dev`, `peer`, `optional` |
| description | string | No | Description of the dependency |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_add_dependency", {
    packageId: "frontend-app",
    name: "react",
    version: "^18.2.0",
    type: "runtime",
    description: "React library for building UIs"
});
```

---

### project_structure_update_dependency
Updates an existing dependency with new name, version, or type.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the dependency |
| dependencyId | string | Yes | ID of the dependency to update |
| name | string | No | New name for the dependency |
| version | string | No | New version |
| type | string | No | New dependency type. One of: `runtime`, `dev`, `peer`, `optional` |
| description | string | No | New description |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_dependency", {
    packageId: "frontend-app",
    dependencyId: "dep-123",
    version: "^18.3.0"
});
```

---

### project_structure_delete_dependency
Deletes a dependency from a package by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the dependency |
| dependencyId | string | Yes | ID of the dependency to delete |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_delete_dependency", {
    packageId: "frontend-app",
    dependencyId: "dep-123"
});
```

---

### project_structure_add_command
Adds a run command to a package with name and command string.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to add the command to |
| name | string | Yes | Name of the command |
| command | string | Yes | Command string to execute |
| description | string | No | Description of the command |
| cwd | string | No | Working directory for the command |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_add_command", {
    packageId: "frontend-app",
    name: "dev",
    command: "npm run dev",
    description: "Start development server",
    cwd: "./packages/frontend"
});
```

---

### project_structure_update_command
Updates an existing run command with new name, command string, or working directory.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the command |
| commandId | string | Yes | ID of the command to update |
| name | string | No | New name for the command |
| command | string | No | New command string |
| description | string | No | New description |
| cwd | string | No | New working directory |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_command", {
    packageId: "frontend-app",
    commandId: "cmd-123",
    command: "npm run start",
    description: "Start production server"
});
```

---

### project_structure_delete_command
Deletes a run command from a package by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the command |
| commandId | string | Yes | ID of the command to delete |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_delete_command", {
    packageId: "frontend-app",
    commandId: "cmd-123"
});
```

---

### project_structure_add_ui_route
Adds a UI route to a package with path, component, and optional metadata.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to add the route to |
| path | string | Yes | Path of the UI route |
| component | string | No | Component name for the route |
| file | string | No | File path containing the component |
| description | string | No | Description of the route |
| auth | boolean | No | Whether authentication is required |
| layout | string | No | Layout name to use |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_add_ui_route", {
    packageId: "frontend-app",
    path: "/dashboard",
    component: "Dashboard",
    file: "src/pages/Dashboard.tsx",
    description: "Main dashboard page",
    auth: true,
    layout: "MainLayout"
});
```

---

### project_structure_update_ui_route
Updates an existing UI route with new path, component, or other properties.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the route |
| routeId | string | Yes | ID of the route to update |
| path | string | No | New path for the route |
| component | string | No | New component name |
| file | string | No | New file path |
| description | string | No | New description |
| auth | boolean | No | New authentication requirement |
| layout | string | No | New layout name |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_ui_route", {
    packageId: "frontend-app",
    routeId: "ui-route-123",
    layout: "AdminLayout",
    auth: true
});
```

---

### project_structure_delete_ui_route
Deletes a UI route from a package by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the route |
| routeId | string | Yes | ID of the route to delete |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_delete_ui_route", {
    packageId: "frontend-app",
    routeId: "ui-route-123"
});
```

---

### project_structure_add_deployment
Adds a deployment configuration to a package with name, type, and optional config.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to add the deployment to |
| name | string | Yes | Name of the deployment configuration |
| type | string | Yes | Type of deployment. One of: `docker`, `kubernetes`, `serverless`, `static`, `custom` |
| description | string | No | Description of the deployment |
| config | object | No | Additional configuration object |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_add_deployment", {
    packageId: "api-service",
    name: "production",
    type: "kubernetes",
    description: "Production Kubernetes deployment",
    config: {
        replicas: 3,
        namespace: "production"
    }
});
```

---

### project_structure_update_deployment
Updates an existing deployment configuration with new name, type, or config.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the deployment |
| configId | string | Yes | ID of the deployment config to update |
| name | string | No | New name for the deployment |
| type | string | No | New deployment type. One of: `docker`, `kubernetes`, `serverless`, `static`, `custom` |
| description | string | No | New description |
| config | object | No | New configuration object |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_deployment", {
    packageId: "api-service",
    configId: "deploy-123",
    config: {
        replicas: 5,
        namespace: "production"
    }
});
```

---

### project_structure_delete_deployment
Deletes a deployment configuration from a package by its ID.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package containing the deployment |
| configId | string | Yes | ID of the deployment config to delete |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_delete_deployment", {
    packageId: "api-service",
    configId: "deploy-123"
});
```

---

### project_structure_update_git
Updates git information including repository URL, branch, and remote settings.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| repository | string | No | Repository URL |
| branch | string | No | Current branch name |
| remote | string | No | Remote name |
| mainBranch | string | No | Main branch name |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_git", {
    repository: "https://github.com/user/repo.git",
    branch: "develop",
    remote: "origin",
    mainBranch: "main"
});
```

---

### project_structure_update_design_guidelines
Updates design guidelines for a package including colors, fonts, spacing, and components.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to update |
| colors | object | No | Color palette as key-value pairs |
| fonts | string[] | No | List of fonts |
| spacing | object | No | Spacing definitions as key-value pairs |
| components | string[] | No | List of component names |
| customGuidelines | string | No | Custom guidelines text |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_design_guidelines", {
    packageId: "frontend-app",
    colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
        background: "#ffffff"
    },
    fonts: ["Inter", "Roboto", "monospace"],
    spacing: {
        small: "8px",
        medium: "16px",
        large: "32px"
    },
    components: ["Button", "Card", "Modal"],
    customGuidelines: "Use consistent border-radius of 8px for all components"
});
```

---

### project_structure_update_frontend_framework
Updates the frontend framework information for a package including name, version, and config.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to update |
| name | string | Yes | Name of the framework (e.g., React, Vue, Angular) |
| version | string | No | Framework version |
| description | string | No | Description of the framework setup |
| config | object | No | Additional configuration object |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_frontend_framework", {
    packageId: "frontend-app",
    name: "React",
    version: "18.2.0",
    description: "React with TypeScript and Vite",
    config: {
        typescript: true,
        bundler: "vite"
    }
});
```

---

### project_structure_update_section
Updates a specific section of a package with custom data.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| packageId | string | Yes | ID of the package to update |
| section | string | Yes | Name of the section to update |
| sectionData | any | Yes | Data to set for the section (can be any type) |
| workspacePath | string | No | Optional workspace path |

**Example:**
```typescript
const result = await codebolt.tools.executeTool("codebolt.projectStructure", "project_structure_update_section", {
    packageId: "api-service",
    section: "environment",
    sectionData: {
        development: {
            port: 3000,
            database: "localhost"
        },
        production: {
            port: 8080,
            database: "db.example.com"
        }
    }
});
```
