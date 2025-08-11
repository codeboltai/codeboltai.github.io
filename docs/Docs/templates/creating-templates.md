---
sidebar_position: 2
sidebar_label: Creating Templates
---

# Creating Codebolt Templates

This guide walks you through the process of creating your own Codebolt templates, from initial setup to publishing and sharing with the community.

## Prerequisites

Before creating a template, ensure you have:

- **Node.js**: Version 18.0.0 or higher
- **Codebolt CLI**: Latest version installed globally
- **Git**: For version control and publishing
- **Code Editor**: VS Code or your preferred editor
- **Codebolt Account**: For publishing to the registry

```bash
# Install Codebolt CLI
npm install -g codebolt-cli

# Verify installation
npx codebolt-cli --version
```

## Template Creation Methods

### Method 1: Start from Scratch

Create a completely new template from the ground up.

```bash
# Create a new directory for your template
mkdir my-awesome-template
cd my-awesome-template

# Initialize as a git repository
git init

# Create the basic structure
mkdir -p src/{components,pages,utils,styles}
mkdir -p public docs scripts

# Initialize package.json
npm init -y
```

### Method 2: Convert Existing Project

Transform an existing project into a reusable template.

```bash
# Navigate to your existing project
cd my-existing-project

# Clean up project-specific files
rm -rf node_modules
rm -rf .env.local
rm -rf dist build

# Create template-specific documentation
touch README.template.md
```

### Method 3: Fork Existing Template

Build upon an existing template from the community.

```bash
# Clone an existing template
git clone https://github.com/username/existing-template.git
cd existing-template

# Remove original git history
rm -rf .git
git init

# Customize for your needs
```

## Essential Template Files

### 1. `codeboltconfig.yaml` (Required)

The core configuration file that defines your template:

```yaml
# Template Identity
appName: my-awesome-template
appUniqueId: yourusername/my-awesome-template

# Template Information
appInfo:
  description: 'A modern React application template with TypeScript and Vite'
  appVersion: 1.0.0
  appRepoUrl: 'https://github.com/yourusername/my-awesome-template'
  appIconUrl: 'https://raw.githubusercontent.com/yourusername/my-awesome-template/main/public/icon.png'
  appAuthorUserId: yourusername
  forkedFrom: ''

# Technical Specifications
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

# Usage Configuration
usage:
  # Development workflow
  develop:
    agents:
      - name: react-developer
        description: Helps with React component development
    layout: 'split-view'
    run:
      - shell:
          command: npm run dev
          description: Start development server

  # Installation process
  install:
    steps:
      - shell:
          command: npm install
          description: Install project dependencies
      - shell:
          command: cp .env.example .env.local
          description: Create environment configuration
    customInstallationAgent:
      enabled: true
      agent: 'setup-assistant'

  # Application usage
  appUse:
    prerunsteps:
      - shell:
          command: npm run build
          description: Build application for production
    agents:
      - name: deployment-helper
        description: Assists with deployment configuration
    layout: 'full-screen'
    appPreview:
      type: 'web'
      port: 3000
      path: '/'
```

### 2. `package.json`

Define dependencies, scripts, and metadata:

```json
{
  "name": "my-awesome-template",
  "version": "1.0.0",
  "description": "A modern React application template",
  "main": "src/main.tsx",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "@tanstack/react-query": "^4.24.0",
    "zustand": "^4.3.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@typescript-eslint/eslint-plugin": "^5.50.0",
    "@typescript-eslint/parser": "^5.50.0",
    "@vitejs/plugin-react": "^3.1.0",
    "eslint": "^8.33.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "prettier": "^2.8.3",
    "typescript": "^4.9.3",
    "vite": "^4.1.0",
    "vitest": "^0.28.0"
  },
  "keywords": [
    "react",
    "typescript",
    "vite",
    "template",
    "codebolt"
  ],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/my-awesome-template.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/my-awesome-template/issues"
  },
  "homepage": "https://github.com/yourusername/my-awesome-template#readme"
}
```

### 3. `README.md`

Comprehensive documentation for template users:

```markdown
# My Awesome Template

A modern React application template with TypeScript, Vite, and best practices built-in.

## Features

- ⚡ **Vite**: Lightning-fast development server and build tool
- 🔷 **TypeScript**: Full type safety and modern JavaScript features
- ⚛️ **React 18**: Latest React with concurrent features
- 🛣️ **React Router**: Client-side routing with data loading
- 🔄 **TanStack Query**: Powerful data synchronization
- 🐻 **Zustand**: Lightweight state management
- 🎨 **Tailwind CSS**: Utility-first CSS framework
- 🧪 **Vitest**: Fast unit testing framework
- 📏 **ESLint**: Code linting and formatting
- 💅 **Prettier**: Code formatting
- 🔧 **Pre-commit Hooks**: Automated code quality checks

## Quick Start

### Using Codebolt

1. Browse to [portal.codebolt.ai](https://portal.codebolt.ai)
2. Search for "my-awesome-template"
3. Click "Use Template" to create a new project

### Using CLI

```bash
# Create new project from template
npx codebolt-cli create-from-template yourusername/my-awesome-template

# Or clone directly
git clone https://github.com/yourusername/my-awesome-template.git my-project
cd my-project
npm install
```

## Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   └── layout/         # Layout components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── stores/             # Zustand stores
├── types/              # TypeScript type definitions
├── styles/             # Global styles
└── main.tsx           # Application entry point
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_TITLE=My Awesome App
```

### Customization

1. **Branding**: Update `public/` assets and `index.html`
2. **Styling**: Modify `tailwind.config.js` and global styles
3. **Routing**: Add routes in `src/App.tsx`
4. **State**: Create stores in `src/stores/`

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker

```bash
docker build -t my-awesome-app .
docker run -p 3000:3000 my-awesome-app
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
```

### 4. Environment Configuration

Create example environment files:

**`.env.example`**:
```env
# API Configuration
VITE_API_URL=http://localhost:3001/api
VITE_API_KEY=your-api-key-here

# Application Settings
VITE_APP_TITLE=My Awesome App
VITE_APP_DESCRIPTION=A modern React application

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true

# External Services
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_GOOGLE_ANALYTICS_ID=GA-...
```

**`.env.local.example`**:
```env
# Local development overrides
VITE_API_URL=http://localhost:3001/api
VITE_ENABLE_DEBUG=true
```

### 5. Configuration Files

**`vite.config.ts`**:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

**`tsconfig.json`**:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Template Structure Best Practices

### 1. Organized Directory Structure

```
my-template/
├── .github/                 # GitHub workflows and templates
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   └── ISSUE_TEMPLATE/
├── docs/                    # Additional documentation
│   ├── deployment.md
│   ├── development.md
│   └── api.md
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── icon.png
│   └── manifest.json
├── scripts/                 # Build and utility scripts
│   ├── build.sh
│   ├── deploy.sh
│   └── setup.js
├── src/                     # Source code
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── stores/
│   ├── types/
│   ├── styles/
│   └── main.tsx
├── tests/                   # Test files
│   ├── __mocks__/
│   ├── setup.ts
│   └── utils.test.ts
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── codeboltconfig.yaml      # Codebolt configuration
├── package.json             # Dependencies and scripts
├── README.md                # Template documentation
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── vitest.config.ts         # Vitest configuration
```

### 2. Placeholder Content

Include meaningful placeholder content that demonstrates the template's capabilities:

**`src/pages/Home.tsx`**:
```typescript
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to My Awesome Template
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern React application template with TypeScript and Vite
          </p>
          <div className="space-x-4">
            <Link
              to="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/yourusername/my-awesome-template"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="⚡ Fast Development"
            description="Vite provides lightning-fast development server and build times"
          />
          <FeatureCard
            title="🔷 Type Safe"
            description="Full TypeScript support for better developer experience"
          />
          <FeatureCard
            title="🎨 Modern UI"
            description="Tailwind CSS for rapid and responsive design"
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
```

### 3. Configuration Templates

Provide configuration templates that users can easily customize:

**`src/config/app.ts`**:
```typescript
export const appConfig = {
  name: process.env.VITE_APP_TITLE || 'My Awesome App',
  description: process.env.VITE_APP_DESCRIPTION || 'A modern React application',
  version: '1.0.0',
  api: {
    baseUrl: process.env.VITE_API_URL || 'http://localhost:3001/api',
    timeout: 10000,
  },
  features: {
    analytics: process.env.VITE_ENABLE_ANALYTICS === 'true',
    debug: process.env.VITE_ENABLE_DEBUG === 'true',
  },
} as const

export type AppConfig = typeof appConfig
```

## Testing Your Template

### 1. Local Testing

```bash
# Test template creation
cd my-awesome-template

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Test production build
npm run preview
```

### 2. Template Validation

Create a validation script to ensure template integrity:

**`scripts/validate-template.js`**:
```javascript
#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

function validateTemplate() {
  const requiredFiles = [
    'codeboltconfig.yaml',
    'package.json',
    'README.md',
    '.env.example',
    'src/main.tsx'
  ]

  const requiredDirs = [
    'src',
    'public'
  ]

  console.log('🔍 Validating template structure...')

  // Check required files
  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      console.error(`❌ Missing required file: ${file}`)
      process.exit(1)
    }
  }

  // Check required directories
  for (const dir of requiredDirs) {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
      console.error(`❌ Missing required directory: ${dir}`)
      process.exit(1)
    }
  }

  // Validate package.json
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    if (!packageJson.name || !packageJson.version) {
      console.error('❌ package.json missing name or version')
      process.exit(1)
    }
  } catch (error) {
    console.error('❌ Invalid package.json:', error.message)
    process.exit(1)
  }

  // Validate codeboltconfig.yaml
  try {
    const yaml = require('js-yaml')
    const config = yaml.load(fs.readFileSync('codeboltconfig.yaml', 'utf8'))
    if (!config.appName || !config.appUniqueId) {
      console.error('❌ codeboltconfig.yaml missing appName or appUniqueId')
      process.exit(1)
    }
  } catch (error) {
    console.error('❌ Invalid codeboltconfig.yaml:', error.message)
    process.exit(1)
  }

  console.log('✅ Template validation passed!')
}

validateTemplate()
```

### 3. User Testing

Test the template from a user's perspective:

```bash
# Create a test directory
mkdir template-test
cd template-test

# Clone your template
git clone https://github.com/yourusername/my-awesome-template.git .

# Remove git history (simulate template usage)
rm -rf .git

# Test the setup process
npm install
npm run dev
```

## Next Steps

Once your template is ready:

1. **[Template Configuration](configuration.md)** - Fine-tune your `codeboltconfig.yaml`
2. **[Publishing Templates](publishing.md)** - Share your template with the community
3. **[Template Best Practices](best-practices.md)** - Learn advanced template patterns
4. **[Template Examples](Docs/templates/examples.md)** - Study successful template implementations

---

Creating high-quality templates takes time and attention to detail, but the result is a valuable resource that can help countless developers build better applications faster. 