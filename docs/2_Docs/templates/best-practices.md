---
sidebar_position: 5
sidebar_label: Best Practices
---

# Template Best Practices

This guide covers advanced patterns, optimization techniques, and quality standards for creating exceptional Codebolt templates that provide maximum value to developers.

## Template Design Principles

### 1. Modularity and Flexibility

Design templates that can be easily customized and extended:

```yaml
# codeboltconfig.yaml - Flexible configuration
technicalInfo:
  supportedLanguages:
    - TypeScript
    - JavaScript
  supportedFrameworks:
    - React
    - Next.js
    - Vite
  secrets:
    - env_name: FEATURE_FLAGS
      env_description: Comma-separated list of enabled features
    - env_name: UI_THEME
      env_description: Default UI theme (light, dark, auto)
```

**Modular Structure Example:**
```
src/
├── components/
│   ├── ui/              # Basic UI components
│   ├── layout/          # Layout components
│   └── features/        # Feature-specific components
├── hooks/               # Reusable custom hooks
├── utils/               # Utility functions
├── stores/              # State management
├── services/            # API and external services
├── types/               # TypeScript definitions
└── config/              # Configuration files
```

### 2. Progressive Enhancement

Start with a minimal viable template and provide optional enhancements:

**Base Template:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^4.1.0",
    "@vitejs/plugin-react": "^3.1.0"
  }
}
```

**Enhanced Features (Optional):**
```json
{
  "optionalDependencies": {
    "@tanstack/react-query": "^4.24.0",
    "zustand": "^4.3.0",
    "react-router-dom": "^6.8.0",
    "tailwindcss": "^3.2.0"
  }
}
```

### 3. Convention over Configuration

Establish clear conventions to reduce configuration overhead:

**File Naming Conventions:**
- Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Hooks: `use*.ts` (e.g., `useAuth.ts`)
- Utils: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `*.types.ts` (e.g., `user.types.ts`)

**Directory Conventions:**
- Group related files together
- Use index files for clean imports
- Separate concerns clearly

## Code Quality Standards

### 1. TypeScript Best Practices

**Strict Type Configuration:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true
  }
}
```

**Type Definitions:**
```typescript
// src/types/user.types.ts
export interface User {
  readonly id: string
  email: string
  name: string
  avatar?: string
  preferences: UserPreferences
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto'
  language: string
  notifications: NotificationSettings
}

export type UserRole = 'admin' | 'user' | 'moderator'
```

### 2. Error Handling Patterns

**Centralized Error Handling:**
```typescript
// src/utils/errorHandler.ts
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export const handleApiError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error
  }
  
  if (error instanceof Error) {
    return new AppError(error.message, 'UNKNOWN_ERROR')
  }
  
  return new AppError('An unexpected error occurred', 'UNKNOWN_ERROR')
}
```

**React Error Boundaries:**
```typescript
// src/components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong.</div>
    }

    return this.props.children
  }
}
```

### 3. Performance Optimization

**Code Splitting:**
```typescript
// src/pages/Dashboard.tsx
import { lazy, Suspense } from 'react'

const Analytics = lazy(() => import('../components/Analytics'))
const UserManagement = lazy(() => import('../components/UserManagement'))

export default function Dashboard() {
  return (
    <div>
      <Suspense fallback={<div>Loading analytics...</div>}>
        <Analytics />
      </Suspense>
      <Suspense fallback={<div>Loading user management...</div>}>
        <UserManagement />
      </Suspense>
    </div>
  )
}
```

**Memoization Patterns:**
```typescript
// src/hooks/useExpensiveCalculation.ts
import { useMemo } from 'react'

export const useExpensiveCalculation = (data: number[]) => {
  return useMemo(() => {
    return data.reduce((sum, value) => sum + Math.pow(value, 2), 0)
  }, [data])
}
```

## Security Best Practices

### 1. Environment Variable Management

**Secure Configuration:**
```env
# .env.example
# API Configuration
VITE_API_URL=http://localhost:3001/api
VITE_APP_ENV=development

# Feature Flags (safe to expose)
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true

# External Services (public keys only)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_GOOGLE_ANALYTICS_ID=GA-...

# DO NOT include secret keys in VITE_ variables
# These should be server-side only:
# DATABASE_URL=postgresql://...
# JWT_SECRET=your-secret-key
# STRIPE_SECRET_KEY=sk_...
```

**Environment Validation:**
```typescript
// src/config/env.ts
const requiredEnvVars = [
  'VITE_API_URL',
  'VITE_APP_ENV'
] as const

type RequiredEnvVar = typeof requiredEnvVars[number]

const validateEnv = (): Record<RequiredEnvVar, string> => {
  const env = {} as Record<RequiredEnvVar, string>
  
  for (const varName of requiredEnvVars) {
    const value = import.meta.env[varName]
    if (!value) {
      throw new Error(`Missing required environment variable: ${varName}`)
    }
    env[varName] = value
  }
  
  return env
}

export const env = validateEnv()
```

### 2. Input Validation and Sanitization

**Form Validation:**
```typescript
// src/utils/validation.ts
import { z } from 'zod'

export const userSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  age: z.number().min(18, 'Must be at least 18 years old').optional()
})

export type UserInput = z.infer<typeof userSchema>

export const validateUser = (data: unknown): UserInput => {
  return userSchema.parse(data)
}
```

### 3. Content Security Policy

**Vite CSP Configuration:**
```typescript
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    headers: {
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "connect-src 'self' https://api.example.com"
      ].join('; ')
    }
  }
})
```

## Testing Strategies

### 1. Comprehensive Testing Setup

**Testing Configuration:**
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      threshold: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        }
      }
    }
  }
})
```

**Test Utilities:**
```typescript
// src/test/utils.tsx
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </QueryClientProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
```

### 2. Testing Patterns

**Component Testing:**
```typescript
// src/components/UserProfile.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '../test/utils'
import { UserProfile } from './UserProfile'

describe('UserProfile', () => {
  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com'
  }

  it('displays user information correctly', () => {
    render(<UserProfile user={mockUser} />)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })

  it('handles edit mode toggle', async () => {
    const onUpdate = vi.fn()
    render(<UserProfile user={mockUser} onUpdate={onUpdate} />)
    
    fireEvent.click(screen.getByText('Edit'))
    
    await waitFor(() => {
      expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument()
    })
  })
})
```

**Hook Testing:**
```typescript
// src/hooks/useAuth.test.ts
import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useAuth } from './useAuth'

describe('useAuth', () => {
  it('should login user successfully', async () => {
    const { result } = renderHook(() => useAuth())

    await act(async () => {
      await result.current.login('user@example.com', 'password')
    })

    expect(result.current.user).toBeDefined()
    expect(result.current.isAuthenticated).toBe(true)
  })
})
```

## Documentation Standards

### 1. Code Documentation

**JSDoc Comments:**
```typescript
/**
 * Formats a date string according to the user's locale preferences
 * 
 * @param date - The date to format (Date object or ISO string)
 * @param locale - The locale to use for formatting (defaults to 'en-US')
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 * 
 * @example
 * ```typescript
 * formatDate(new Date(), 'en-US', { dateStyle: 'medium' })
 * // Returns: "Jan 15, 2024"
 * ```
 */
export const formatDate = (
  date: Date | string,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, options).format(dateObj)
}
```

### 2. README Structure

**Comprehensive README Template:**
```markdown
# Template Name

Brief description of what the template provides and its main use cases.

## Features

- ✨ Feature 1 with brief description
- 🚀 Feature 2 with brief description
- 🔧 Feature 3 with brief description

## Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone or use the template
2. Install dependencies
3. Configure environment
4. Start development

### Usage

Basic usage examples and common workflows.

## Project Structure

Detailed explanation of the directory structure and file organization.

## Configuration

How to configure the template for different use cases.

## Deployment

Step-by-step deployment instructions for different platforms.

## Contributing

Guidelines for contributing to the template.

## License

License information and attribution.
```

## Performance Optimization

### 1. Bundle Optimization

**Vite Configuration:**
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@headlessui/react', '@heroicons/react']
        }
      }
    }
  },
  plugins: [
    // Bundle analyzer
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true
    })
  ]
})
```

### 2. Image Optimization

**Image Component:**
```typescript
// src/components/OptimizedImage.tsx
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  loading?: 'lazy' | 'eager'
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  )
}
```

## Accessibility Standards

### 1. Semantic HTML

```typescript
// src/components/Navigation.tsx
export const Navigation = () => {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul>
        <li>
          <a href="/" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
```

### 2. Keyboard Navigation

```typescript
// src/components/Modal.tsx
import { useEffect, useRef } from 'react'

export const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus()
    }
  }, [isOpen])

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded-lg shadow-xl">
        {children}
      </div>
    </div>
  )
}
```

## Maintenance and Updates

### 1. Dependency Management

**Automated Updates:**
```json
// .github/workflows/update-dependencies.yml
name: Update Dependencies
on:
  schedule:
    - cron: '0 0 * * 1' # Weekly on Monday
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npx npm-check-updates -u
      - run: npm install
      - run: npm test
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v4
        with:
          title: 'chore: update dependencies'
```

### 2. Template Versioning

**Version Management Script:**
```javascript
// scripts/version.js
const fs = require('fs')
const path = require('path')

const updateVersion = (type = 'patch') => {
  const configPath = path.join(__dirname, '..', 'codeboltconfig.yaml')
  const packagePath = path.join(__dirname, '..', 'package.json')
  
  // Update package.json version
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
  const [major, minor, patch] = pkg.version.split('.').map(Number)
  
  let newVersion
  switch (type) {
    case 'major':
      newVersion = `${major + 1}.0.0`
      break
    case 'minor':
      newVersion = `${major}.${minor + 1}.0`
      break
    default:
      newVersion = `${major}.${minor}.${patch + 1}`
  }
  
  pkg.version = newVersion
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2))
  
  // Update codeboltconfig.yaml
  let config = fs.readFileSync(configPath, 'utf8')
  config = config.replace(/appVersion: .+/, `appVersion: ${newVersion}`)
  fs.writeFileSync(configPath, config)
  
  console.log(`Updated version to ${newVersion}`)
}

const type = process.argv[2] || 'patch'
updateVersion(type)
```

## Common Pitfalls and Solutions

### 1. Avoid Over-Engineering

**Problem:** Templates that are too complex for their intended use case.

**Solution:** Start simple and add complexity only when needed.

### 2. Dependency Bloat

**Problem:** Including too many dependencies that users might not need.

**Solution:** Use peer dependencies and optional features.

### 3. Poor Documentation

**Problem:** Insufficient or outdated documentation.

**Solution:** Maintain documentation as part of the development process.

### 4. Lack of Testing

**Problem:** Templates that break when dependencies are updated.

**Solution:** Implement comprehensive testing and CI/CD.

## Template Quality Checklist

- ✅ **Code Quality**: Clean, readable, and well-documented code
- ✅ **Performance**: Optimized for speed and efficiency
- ✅ **Security**: Secure by default with proper validation
- ✅ **Accessibility**: WCAG 2.1 AA compliant
- ✅ **Testing**: Comprehensive test coverage
- ✅ **Documentation**: Clear and complete documentation
- ✅ **Maintainability**: Easy to update and extend
- ✅ **Flexibility**: Configurable for different use cases

## Next Steps

- **[Template Examples](2_Docs/templates/examples.md)** - Study real-world template implementations
- **[Publishing Templates](publishing.md)** - Understand community standards
- **[Template Configuration](configuration.md)** - Learn sophisticated template techniques

---

Following these best practices will help you create templates that are not only functional but also maintainable, secure, and enjoyable to use. Remember that great templates evolve over time based on user feedback and changing technology landscapes. 