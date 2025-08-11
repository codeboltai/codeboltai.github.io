---
sidebar_position: 3
sidebar_label: Configuration
---

# Template Configuration

The `codeboltconfig.yaml` file is the heart of every Codebolt template. It defines the template's metadata, technical specifications, and usage instructions. This guide provides a comprehensive reference for all configuration options.

## Configuration Schema

### Basic Structure

```yaml
appName: string                    # Template name
appUniqueId: string               # Unique identifier (username/template-name)
appInfo: object                   # Template metadata
technicalInfo: object            # Technical specifications
usage: object                     # Usage configuration
```

## Core Configuration

### App Identity

```yaml
appName: my-awesome-template
appUniqueId: yourusername/my-awesome-template
```

- **`appName`** (required): The display name of your template
  - Should be descriptive and user-friendly
  - Used in the Codebolt portal and CLI
  - Example: `"React TypeScript Starter"`

- **`appUniqueId`** (required): Unique identifier for your template
  - Format: `username/template-name`
  - Must be globally unique across all templates
  - Used for template discovery and installation
  - Example: `"johndoe/react-typescript-starter"`

### App Information

```yaml
appInfo:
  description: 'A modern React application template with TypeScript and Vite'
  appVersion: 1.0.0
  appRepoUrl: 'https://github.com/yourusername/my-awesome-template'
  appIconUrl: 'https://raw.githubusercontent.com/yourusername/my-awesome-template/main/public/icon.png'
  appAuthorUserId: yourusername
  forkedFrom: ''
```

#### Properties

- **`description`** (required): Brief description of the template
  - Should explain what the template provides
  - Displayed in template listings and search results
  - Keep it concise but informative

- **`appVersion`** (required): Template version number
  - Follow semantic versioning (e.g., `1.0.0`)
  - Increment when making changes to the template
  - Used for version tracking and updates

- **`appRepoUrl`** (optional): URL to the template's repository
  - Should point to the public GitHub repository
  - Used for source code access and contributions
  - Example: `"https://github.com/username/template-name"`

- **`appIconUrl`** (optional): URL to the template's icon/logo
  - Should be a publicly accessible image URL
  - Recommended size: 256x256 pixels
  - Supported formats: PNG, JPG, SVG
  - Example: `"https://example.com/icon.png"`

- **`appAuthorUserId`** (required): Template author's username
  - Should match your Codebolt username
  - Used for attribution and template ownership

- **`forkedFrom`** (optional): Original template if this is a fork
  - Format: `username/original-template-name`
  - Leave empty for original templates
  - Used to track template lineage

## Technical Information

```yaml
technicalInfo:
  supportedLanguages:
    - TypeScript
    - JavaScript
    - CSS
  supportedFrameworks:
    - React
    - Vite
    - React Router
  secrets:
    - env_name: VITE_API_URL
      env_description: API endpoint URL for the application
    - env_name: VITE_APP_TITLE
      env_description: Application title displayed in the browser
  services:
    - name: database
      description: PostgreSQL database for data storage
      type: postgresql
    - name: redis
      description: Redis cache for session management
      type: redis
  knowledgebases: []
  instruction:
    - "This template creates a modern React application with TypeScript"
    - "Includes routing, state management, and component library setup"
    - "Pre-configured with ESLint, Prettier, and testing framework"
```

### Supported Languages

```yaml
supportedLanguages:
  - TypeScript
  - JavaScript
  - Python
  - Java
  - Go
  - Rust
  - CSS
  - SCSS
  - HTML
```

List of programming languages used in the template. Common values include:
- **Frontend**: TypeScript, JavaScript, CSS, SCSS, HTML
- **Backend**: Python, Java, Node.js, Go, Rust, PHP
- **Mobile**: Swift, Kotlin, Dart
- **Other**: SQL, YAML, JSON, Markdown

### Supported Frameworks

```yaml
supportedFrameworks:
  - React
  - Next.js
  - Vue.js
  - Angular
  - Express.js
  - FastAPI
  - Django
  - Spring Boot
```

List of frameworks and libraries used in the template. Examples:
- **Frontend Frameworks**: React, Vue.js, Angular, Svelte
- **React Ecosystem**: Next.js, Gatsby, Remix
- **Backend Frameworks**: Express.js, FastAPI, Django, Spring Boot
- **Build Tools**: Vite, Webpack, Parcel
- **Testing**: Jest, Vitest, Cypress, Playwright

### Environment Secrets

```yaml
secrets:
  - env_name: DATABASE_URL
    env_description: PostgreSQL connection string for the database
  - env_name: JWT_SECRET
    env_description: Secret key for JWT token signing
  - env_name: STRIPE_SECRET_KEY
    env_description: Stripe secret key for payment processing
  - env_name: SENDGRID_API_KEY
    env_description: SendGrid API key for email notifications
```

Define environment variables that users need to configure:

- **`env_name`**: The environment variable name
- **`env_description`**: Human-readable description of what the variable is for

### Services

```yaml
services:
  - name: database
    description: PostgreSQL database for application data
    type: postgresql
  - name: cache
    description: Redis cache for session storage
    type: redis
  - name: storage
    description: AWS S3 bucket for file storage
    type: s3
  - name: email
    description: Email service for notifications
    type: smtp
```

Define external services that the template requires:

- **`name`**: Service identifier
- **`description`**: What the service is used for
- **`type`**: Service type (postgresql, mysql, redis, mongodb, s3, etc.)

### Knowledge Bases

```yaml
knowledgebases:
  - name: api-documentation
    description: REST API documentation and examples
    type: documentation
  - name: component-library
    description: UI component library and design system
    type: components
```

Define knowledge bases or documentation that agents can reference:

- **`name`**: Knowledge base identifier
- **`description`**: What information it contains
- **`type`**: Type of knowledge base

### Instructions

```yaml
instruction:
  - "This template creates a full-stack web application"
  - "Frontend built with React and TypeScript"
  - "Backend API using Node.js and Express"
  - "Database integration with PostgreSQL"
  - "Authentication using JWT tokens"
  - "Deployment ready for Vercel and Railway"
```

Provide setup and usage instructions for the template. These help users understand:
- What the template creates
- Key technologies and patterns used
- Important setup steps
- Deployment considerations

## Usage Configuration

The `usage` section defines how the template is used in different contexts.

### Development Configuration

```yaml
usage:
  develop:
    agents:
      - name: react-developer
        description: Helps with React component development and debugging
      - name: api-developer
        description: Assists with backend API development
    layout: 'split-view'
    run:
      - shell:
          command: npm run dev
          description: Start development server with hot reload
      - shell:
          command: npm run dev:api
          description: Start backend API server
```

#### Properties

- **`agents`**: List of recommended agents for development
  - **`name`**: Agent identifier
  - **`description`**: What the agent helps with

- **`layout`**: Preferred UI layout for development
  - `'split-view'`: Side-by-side panels
  - `'full-screen'`: Single full-screen view
  - `'tabbed'`: Tabbed interface

- **`run`**: Commands to start development
  - **`shell.command`**: Command to execute
  - **`shell.description`**: Human-readable description

### Installation Configuration

```yaml
usage:
  install:
    steps:
      - shell:
          command: npm install
          description: Install project dependencies
      - shell:
          command: cp .env.example .env.local
          description: Create environment configuration file
      - shell:
          command: npm run db:migrate
          description: Set up database schema
    customInstallationAgent:
      enabled: true
      agent: 'setup-assistant'
```

#### Properties

- **`steps`**: Installation steps to execute
  - **`shell.command`**: Command to run
  - **`shell.description`**: What the command does

- **`customInstallationAgent`**: Custom setup assistance
  - **`enabled`**: Whether to use a custom agent
  - **`agent`**: Agent identifier for setup help

### Application Usage

```yaml
usage:
  appUse:
    prerunsteps:
      - shell:
          command: npm run build
          description: Build application for production
      - shell:
          command: npm run db:seed
          description: Seed database with initial data
    agents:
      - name: deployment-helper
        description: Assists with deployment and configuration
      - name: monitoring-agent
        description: Helps set up monitoring and analytics
    layout: 'full-screen'
    appPreview:
      type: 'web'
      port: 3000
      path: '/'
```

#### Properties

- **`prerunsteps`**: Commands to run before starting the application
- **`agents`**: Agents that help with application usage
- **`layout`**: UI layout for application usage
- **`appPreview`**: Preview configuration
  - **`type`**: Preview type (`'web'`, `'mobile'`, `'desktop'`)
  - **`port`**: Port number for web applications
  - **`path`**: Default path to open

## Configuration Examples

### Frontend Template (React)

```yaml
appName: React TypeScript Starter
appUniqueId: codebolt/react-typescript-starter
appInfo:
  description: 'Modern React application with TypeScript, Vite, and Tailwind CSS'
  appVersion: 2.1.0
  appRepoUrl: 'https://github.com/codebolt/react-typescript-starter'
  appIconUrl: 'https://raw.githubusercontent.com/codebolt/react-typescript-starter/main/public/icon.png'
  appAuthorUserId: codebolt
  forkedFrom: ''

technicalInfo:
  supportedLanguages:
    - TypeScript
    - JavaScript
    - CSS
    - HTML
  supportedFrameworks:
    - React
    - Vite
    - Tailwind CSS
    - React Router
    - React Query
  secrets:
    - env_name: VITE_API_URL
      env_description: Backend API endpoint URL
    - env_name: VITE_GOOGLE_ANALYTICS_ID
      env_description: Google Analytics tracking ID
  services: []
  knowledgebases: []
  instruction:
    - "Modern React application with TypeScript and Vite"
    - "Includes routing, state management, and UI components"
    - "Pre-configured with ESLint, Prettier, and Vitest"
    - "Tailwind CSS for styling with responsive design"

usage:
  develop:
    agents:
      - name: react-developer
        description: React component development assistant
    layout: 'split-view'
    run:
      - shell:
          command: npm run dev
          description: Start Vite development server

  install:
    steps:
      - shell:
          command: npm install
          description: Install dependencies
      - shell:
          command: cp .env.example .env.local
          description: Create environment file
    customInstallationAgent:
      enabled: false
      agent: ''

  appUse:
    prerunsteps: []
    agents: []
    layout: 'full-screen'
    appPreview:
      type: 'web'
      port: 3000
      path: '/'
```

### Full-Stack Template (MERN)

```yaml
appName: MERN Stack Starter
appUniqueId: codebolt/mern-stack-starter
appInfo:
  description: 'Full-stack MERN application with authentication and deployment ready'
  appVersion: 1.5.0
  appRepoUrl: 'https://github.com/codebolt/mern-stack-starter'
  appIconUrl: 'https://raw.githubusercontent.com/codebolt/mern-stack-starter/main/public/icon.png'
  appAuthorUserId: codebolt
  forkedFrom: ''

technicalInfo:
  supportedLanguages:
    - TypeScript
    - JavaScript
    - CSS
  supportedFrameworks:
    - React
    - Node.js
    - Express.js
    - MongoDB
    - Mongoose
  secrets:
    - env_name: DATABASE_URL
      env_description: MongoDB connection string
    - env_name: JWT_SECRET
      env_description: Secret key for JWT token signing
    - env_name: CLOUDINARY_URL
      env_description: Cloudinary URL for image uploads
  services:
    - name: database
      description: MongoDB database for application data
      type: mongodb
    - name: storage
      description: Cloudinary for image and file storage
      type: cloudinary
  knowledgebases: []
  instruction:
    - "Full-stack MERN application with authentication"
    - "React frontend with TypeScript and Vite"
    - "Express.js backend with MongoDB database"
    - "JWT authentication and protected routes"
    - "File upload with Cloudinary integration"

usage:
  develop:
    agents:
      - name: fullstack-developer
        description: Full-stack development assistant
      - name: api-developer
        description: Backend API development helper
    layout: 'split-view'
    run:
      - shell:
          command: npm run dev
          description: Start both frontend and backend servers

  install:
    steps:
      - shell:
          command: npm install
          description: Install root dependencies
      - shell:
          command: cd client && npm install
          description: Install frontend dependencies
      - shell:
          command: cd server && npm install
          description: Install backend dependencies
      - shell:
          command: cp .env.example .env
          description: Create environment configuration
    customInstallationAgent:
      enabled: true
      agent: 'mern-setup-assistant'

  appUse:
    prerunsteps:
      - shell:
          command: npm run build
          description: Build frontend for production
    agents:
      - name: deployment-helper
        description: Deployment and DevOps assistant
    layout: 'full-screen'
    appPreview:
      type: 'web'
      port: 3000
      path: '/'
```

### API Template (Node.js)

```yaml
appName: Node.js API Starter
appUniqueId: codebolt/nodejs-api-starter
appInfo:
  description: 'RESTful API with Node.js, Express, PostgreSQL, and comprehensive testing'
  appVersion: 1.3.0
  appRepoUrl: 'https://github.com/codebolt/nodejs-api-starter'
  appIconUrl: 'https://raw.githubusercontent.com/codebolt/nodejs-api-starter/main/assets/icon.png'
  appAuthorUserId: codebolt
  forkedFrom: ''

technicalInfo:
  supportedLanguages:
    - TypeScript
    - JavaScript
    - SQL
  supportedFrameworks:
    - Node.js
    - Express.js
    - PostgreSQL
    - Prisma
    - Jest
  secrets:
    - env_name: DATABASE_URL
      env_description: PostgreSQL connection string
    - env_name: JWT_SECRET
      env_description: Secret key for JWT authentication
    - env_name: REDIS_URL
      env_description: Redis connection string for caching
  services:
    - name: database
      description: PostgreSQL database for application data
      type: postgresql
    - name: cache
      description: Redis for caching and session storage
      type: redis
  knowledgebases:
    - name: api-documentation
      description: OpenAPI specification and endpoint documentation
      type: documentation
  instruction:
    - "RESTful API built with Node.js and Express"
    - "PostgreSQL database with Prisma ORM"
    - "JWT authentication and authorization"
    - "Comprehensive testing with Jest and Supertest"
    - "API documentation with OpenAPI/Swagger"
    - "Docker support for development and deployment"

usage:
  develop:
    agents:
      - name: api-developer
        description: Backend API development assistant
      - name: database-expert
        description: Database design and optimization helper
    layout: 'split-view'
    run:
      - shell:
          command: npm run dev
          description: Start API server with hot reload

  install:
    steps:
      - shell:
          command: npm install
          description: Install dependencies
      - shell:
          command: cp .env.example .env
          description: Create environment configuration
      - shell:
          command: npx prisma generate
          description: Generate Prisma client
      - shell:
          command: npx prisma db push
          description: Set up database schema
    customInstallationAgent:
      enabled: true
      agent: 'api-setup-assistant'

  appUse:
    prerunsteps:
      - shell:
          command: npm run build
          description: Build API for production
      - shell:
          command: npx prisma db deploy
          description: Deploy database migrations
    agents:
      - name: api-monitor
        description: API monitoring and performance assistant
    layout: 'full-screen'
    appPreview:
      type: 'web'
      port: 3001
      path: '/api/docs'
```

## Validation and Best Practices

### Configuration Validation

Ensure your configuration is valid:

```bash
# Install YAML validator
npm install -g js-yaml

# Validate syntax
js-yaml codeboltconfig.yaml

# Check for required fields
node scripts/validate-config.js
```

### Best Practices

1. **Descriptive Names**: Use clear, descriptive names for your template
2. **Semantic Versioning**: Follow semantic versioning for `appVersion`
3. **Complete Metadata**: Fill in all relevant metadata fields
4. **Clear Instructions**: Provide clear, step-by-step instructions
5. **Environment Variables**: Document all required environment variables
6. **Service Dependencies**: List all external service dependencies
7. **Agent Recommendations**: Suggest helpful agents for different workflows

### Common Mistakes

- **Missing Required Fields**: Ensure `appName`, `appUniqueId`, and `appInfo.description` are present
- **Invalid YAML Syntax**: Use proper YAML indentation and syntax
- **Incorrect Unique ID**: Format should be `username/template-name`
- **Missing Environment Variables**: Document all required secrets
- **Incomplete Instructions**: Provide comprehensive setup instructions

## Next Steps

- **[Publishing Templates](./publishing.md)** - Learn how to publish your template
- **[Template Best Practices](./best-practices.md)** - Advanced template patterns
- **[Template Examples](./examples.md)** - Study real-world configurations

---

A well-configured `codeboltconfig.yaml` file is essential for creating templates that are easy to discover, understand, and use. Take time to craft a comprehensive configuration that helps users get the most out of your template. 