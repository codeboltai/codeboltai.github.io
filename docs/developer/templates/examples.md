---
sidebar_position: 6
sidebar_label: Examples
---

# Template Examples

This section provides real-world examples of Codebolt templates across different categories, showcasing best practices and complete implementations.

## 1. React TypeScript Starter

A modern React application template with TypeScript, Vite, and essential development tools.

### Configuration (`codeboltconfig.yaml`)

```yaml
appName: React TypeScript Starter
appUniqueId: codebolt/react-typescript-starter
appInfo:
  description: 'Modern React application with TypeScript, Vite, Tailwind CSS, and testing setup'
  appVersion: 2.1.0
  appRepoUrl: 'https://github.com/codebolt/react-typescript-starter'
  appIconUrl: 'https://raw.githubusercontent.com/codebolt/react-typescript-starter/main/public/react-icon.png'
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
    - Zustand
  secrets:
    - env_name: VITE_API_URL
      env_description: Backend API endpoint URL
    - env_name: VITE_GOOGLE_ANALYTICS_ID
      env_description: Google Analytics tracking ID (optional)
  services: []
  knowledgebases: []
  instruction:
    - "Modern React 18 application with TypeScript and Vite"
    - "Includes routing, state management, and UI components"
    - "Pre-configured with ESLint, Prettier, and Vitest testing"
    - "Tailwind CSS for styling with responsive design"
    - "Ready for deployment to Vercel, Netlify, or similar platforms"

usage:
  develop:
    agents:
      - name: react-developer
        description: React component development and debugging assistant
    layout: 'split-view'
    run:
      - shell:
          command: npm run dev
          description: Start Vite development server with hot reload

  install:
    steps:
      - shell:
          command: npm install
          description: Install project dependencies
      - shell:
          command: cp .env.example .env.local
          description: Create environment configuration file
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

### Project Structure

```
react-typescript-starter/
├── public/
│   ├── favicon.ico
│   ├── react-icon.png
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── ErrorBoundary.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   └── useLocalStorage.ts
│   ├── stores/
│   │   ├── authStore.ts
│   │   └── appStore.ts
│   ├── utils/
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── types/
│   │   ├── auth.types.ts
│   │   └── api.types.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── components.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tests/
│   ├── setup.ts
│   └── utils.tsx
├── .env.example
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── codeboltconfig.yaml
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

### Key Files

**`package.json`:**
```json
{
  "name": "react-typescript-starter",
  "version": "2.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\""
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
    "autoprefixer": "^10.4.13",
    "eslint": "^8.33.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "postcss": "^8.4.21",
    "prettier": "^2.8.3",
    "tailwindcss": "^3.2.0",
    "typescript": "^4.9.3",
    "vite": "^4.1.0",
    "vitest": "^0.28.0"
  }
}
```

**`src/App.tsx`:**
```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { ErrorBoundary } from './components/ErrorBoundary'
import './styles/globals.css'

const queryClient = new QueryClient()

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
```

## 2. Next.js Full-Stack Template

A complete full-stack application with Next.js, TypeScript, Prisma, and authentication.

### Configuration (`codeboltconfig.yaml`)

```yaml
appName: Next.js Full-Stack Starter
appUniqueId: codebolt/nextjs-fullstack-starter
appInfo:
  description: 'Complete Next.js application with authentication, database, and API routes'
  appVersion: 1.8.0
  appRepoUrl: 'https://github.com/codebolt/nextjs-fullstack-starter'
  appIconUrl: 'https://raw.githubusercontent.com/codebolt/nextjs-fullstack-starter/main/public/nextjs-icon.png'
  appAuthorUserId: codebolt
  forkedFrom: ''

technicalInfo:
  supportedLanguages:
    - TypeScript
    - JavaScript
    - CSS
    - SQL
  supportedFrameworks:
    - Next.js
    - React
    - Prisma
    - NextAuth.js
    - Tailwind CSS
  secrets:
    - env_name: DATABASE_URL
      env_description: PostgreSQL database connection string
    - env_name: NEXTAUTH_SECRET
      env_description: Secret key for NextAuth.js session encryption
    - env_name: NEXTAUTH_URL
      env_description: Canonical URL of your site (for production)
    - env_name: GOOGLE_CLIENT_ID
      env_description: Google OAuth client ID for authentication
    - env_name: GOOGLE_CLIENT_SECRET
      env_description: Google OAuth client secret
  services:
    - name: database
      description: PostgreSQL database for application data
      type: postgresql
    - name: auth
      description: NextAuth.js for authentication and session management
      type: auth
  knowledgebases: []
  instruction:
    - "Full-stack Next.js 13+ application with App Router"
    - "PostgreSQL database with Prisma ORM"
    - "Authentication with NextAuth.js (Google, GitHub, email)"
    - "API routes for backend functionality"
    - "Responsive design with Tailwind CSS"
    - "Ready for deployment to Vercel with database"

usage:
  develop:
    agents:
      - name: fullstack-developer
        description: Full-stack Next.js development assistant
      - name: database-expert
        description: Database schema and query optimization helper
    layout: 'split-view'
    run:
      - shell:
          command: npm run dev
          description: Start Next.js development server

  install:
    steps:
      - shell:
          command: npm install
          description: Install project dependencies
      - shell:
          command: cp .env.example .env.local
          description: Create environment configuration
      - shell:
          command: npx prisma generate
          description: Generate Prisma client
      - shell:
          command: npx prisma db push
          description: Set up database schema
    customInstallationAgent:
      enabled: true
      agent: 'nextjs-setup-assistant'

  appUse:
    prerunsteps:
      - shell:
          command: npm run build
          description: Build Next.js application for production
    agents:
      - name: deployment-helper
        description: Deployment and production optimization assistant
    layout: 'full-screen'
    appPreview:
      type: 'web'
      port: 3000
      path: '/'
```

### Key Features

**Authentication Setup (`src/lib/auth.ts`):**
```typescript
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub!
      }
      return session
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id
      }
      return token
    },
  },
  session: {
    strategy: 'jwt',
  },
}
```

**API Route Example (`src/app/api/users/route.ts`):**
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        createdAt: true,
      },
    })

    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
```

## 3. Express.js API Template

A robust REST API template with Express.js, TypeScript, and comprehensive features.

### Configuration (`codeboltconfig.yaml`)

```yaml
appName: Express.js API Starter
appUniqueId: codebolt/express-api-starter
appInfo:
  description: 'Production-ready Express.js API with TypeScript, authentication, and testing'
  appVersion: 1.5.0
  appRepoUrl: 'https://github.com/codebolt/express-api-starter'
  appIconUrl: 'https://raw.githubusercontent.com/codebolt/express-api-starter/main/assets/express-icon.png'
  appAuthorUserId: codebolt
  forkedFrom: ''

technicalInfo:
  supportedLanguages:
    - TypeScript
    - JavaScript
    - SQL
  supportedFrameworks:
    - Express.js
    - Node.js
    - Prisma
    - Jest
    - Swagger
  secrets:
    - env_name: DATABASE_URL
      env_description: PostgreSQL connection string
    - env_name: JWT_SECRET
      env_description: Secret key for JWT token signing
    - env_name: REDIS_URL
      env_description: Redis connection string for caching
    - env_name: SMTP_HOST
      env_description: SMTP server for email notifications
    - env_name: SMTP_USER
      env_description: SMTP username
    - env_name: SMTP_PASS
      env_description: SMTP password
  services:
    - name: database
      description: PostgreSQL database for application data
      type: postgresql
    - name: cache
      description: Redis for caching and session storage
      type: redis
    - name: email
      description: SMTP service for email notifications
      type: smtp
  knowledgebases:
    - name: api-documentation
      description: OpenAPI specification and endpoint documentation
      type: documentation
  instruction:
    - "RESTful API built with Express.js and TypeScript"
    - "PostgreSQL database with Prisma ORM"
    - "JWT authentication and role-based authorization"
    - "Comprehensive testing with Jest and Supertest"
    - "API documentation with Swagger/OpenAPI"
    - "Docker support for development and deployment"
    - "Rate limiting, CORS, and security middleware"

usage:
  develop:
    agents:
      - name: api-developer
        description: Backend API development and debugging assistant
      - name: database-expert
        description: Database design and query optimization helper
    layout: 'split-view'
    run:
      - shell:
          command: npm run dev
          description: Start API server with hot reload and debugging

  install:
    steps:
      - shell:
          command: npm install
          description: Install project dependencies
      - shell:
          command: cp .env.example .env
          description: Create environment configuration
      - shell:
          command: npx prisma generate
          description: Generate Prisma client
      - shell:
          command: npx prisma db push
          description: Set up database schema
      - shell:
          command: npm run seed
          description: Seed database with initial data
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
        description: API monitoring and performance optimization assistant
    layout: 'full-screen'
    appPreview:
      type: 'web'
      port: 3001
      path: '/api/docs'
```

### API Structure

**Main Server (`src/server.ts`):**
```typescript
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { authRouter } from './routes/auth'
import { usersRouter } from './routes/users'
import { errorHandler } from './middleware/errorHandler'
import { logger } from './utils/logger'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger'

const app = express()
const PORT = process.env.PORT || 3001

// Security middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Body parsing
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// API documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Routes
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Error handling
app.use(errorHandler)

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
```

**Authentication Middleware (`src/middleware/auth.ts`):**
```typescript
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '../config/database'

export interface AuthRequest extends Request {
  user?: {
    id: string
    email: string
    role: string
  }
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, role: true }
    })

    if (!user) {
      return res.status(401).json({ error: 'Invalid token.' })
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token.' })
  }
}

export const authorize = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Access denied.' })
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions.' })
    }

    next()
  }
}
```

## 4. Vue.js SPA Template

A modern Vue.js single-page application with Composition API and TypeScript.

### Configuration (`codeboltconfig.yaml`)

```yaml
appName: Vue.js SPA Starter
appUniqueId: codebolt/vue-spa-starter
appInfo:
  description: 'Modern Vue.js 3 SPA with Composition API, TypeScript, and Pinia'
  appVersion: 1.3.0
  appRepoUrl: 'https://github.com/codebolt/vue-spa-starter'
  appIconUrl: 'https://raw.githubusercontent.com/codebolt/vue-spa-starter/main/public/vue-icon.png'
  appAuthorUserId: codebolt
  forkedFrom: ''

technicalInfo:
  supportedLanguages:
    - TypeScript
    - JavaScript
    - CSS
    - HTML
  supportedFrameworks:
    - Vue.js
    - Vite
    - Vue Router
    - Pinia
    - Tailwind CSS
  secrets:
    - env_name: VITE_API_URL
      env_description: Backend API endpoint URL
    - env_name: VITE_APP_TITLE
      env_description: Application title
  services: []
  knowledgebases: []
  instruction:
    - "Modern Vue.js 3 application with Composition API"
    - "TypeScript support for better development experience"
    - "Pinia for state management"
    - "Vue Router for client-side routing"
    - "Tailwind CSS for styling"
    - "Vite for fast development and building"

usage:
  develop:
    agents:
      - name: vue-developer
        description: Vue.js component development assistant
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

### Vue Component Example

**`src/components/UserProfile.vue`:**
```vue
<template>
  <div class="user-profile">
    <div class="avatar">
      <img :src="user.avatar" :alt="user.name" />
    </div>
    <div class="info">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <button @click="toggleEdit" class="btn-primary">
        {{ isEditing ? 'Cancel' : 'Edit' }}
      </button>
    </div>
    
    <form v-if="isEditing" @submit.prevent="saveUser" class="edit-form">
      <input
        v-model="editForm.name"
        type="text"
        placeholder="Name"
        required
      />
      <input
        v-model="editForm.email"
        type="email"
        placeholder="Email"
        required
      />
      <button type="submit" class="btn-success">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user'

interface User {
  id: string
  name: string
  email: string
  avatar: string
}

interface Props {
  user: User
}

const props = defineProps<Props>()
const userStore = useUserStore()

const isEditing = ref(false)
const editForm = reactive({
  name: props.user.name,
  email: props.user.email,
})

const toggleEdit = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value) {
    // Reset form
    editForm.name = props.user.name
    editForm.email = props.user.email
  }
}

const saveUser = async () => {
  try {
    await userStore.updateUser(props.user.id, {
      name: editForm.name,
      email: editForm.email,
    })
    isEditing.value = false
  } catch (error) {
    console.error('Failed to update user:', error)
  }
}
</script>

<style scoped>
.user-profile {
  @apply bg-white rounded-lg shadow-md p-6;
}

.avatar img {
  @apply w-16 h-16 rounded-full object-cover;
}

.info h2 {
  @apply text-xl font-semibold text-gray-900;
}

.info p {
  @apply text-gray-600;
}

.edit-form {
  @apply mt-4 space-y-3;
}

.edit-form input {
  @apply w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}

.btn-success {
  @apply bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600;
}
</style>
```

## 5. E-commerce Template

A complete e-commerce application template with product management, cart, and checkout.

### Configuration (`codeboltconfig.yaml`)

```yaml
appName: E-commerce Starter
appUniqueId: codebolt/ecommerce-starter
appInfo:
  description: 'Complete e-commerce solution with product management, cart, and payment integration'
  appVersion: 1.2.0
  appRepoUrl: 'https://github.com/codebolt/ecommerce-starter'
  appIconUrl: 'https://raw.githubusercontent.com/codebolt/ecommerce-starter/main/public/shop-icon.png'
  appAuthorUserId: codebolt
  forkedFrom: ''

technicalInfo:
  supportedLanguages:
    - TypeScript
    - JavaScript
    - CSS
    - SQL
  supportedFrameworks:
    - Next.js
    - React
    - Prisma
    - Stripe
    - Tailwind CSS
  secrets:
    - env_name: DATABASE_URL
      env_description: PostgreSQL database connection string
    - env_name: STRIPE_SECRET_KEY
      env_description: Stripe secret key for payment processing
    - env_name: STRIPE_PUBLISHABLE_KEY
      env_description: Stripe publishable key for frontend
    - env_name: STRIPE_WEBHOOK_SECRET
      env_description: Stripe webhook secret for payment verification
    - env_name: CLOUDINARY_URL
      env_description: Cloudinary URL for image uploads
  services:
    - name: database
      description: PostgreSQL database for products, orders, and users
      type: postgresql
    - name: payments
      description: Stripe for payment processing
      type: stripe
    - name: storage
      description: Cloudinary for product image storage
      type: cloudinary
  knowledgebases:
    - name: product-catalog
      description: Product information and inventory management
      type: catalog
  instruction:
    - "Complete e-commerce solution with Next.js and TypeScript"
    - "Product catalog with categories and search functionality"
    - "Shopping cart and wishlist features"
    - "Stripe integration for secure payments"
    - "Order management and tracking"
    - "Admin dashboard for product and order management"
    - "Responsive design optimized for mobile commerce"

usage:
  develop:
    agents:
      - name: ecommerce-developer
        description: E-commerce development and feature implementation assistant
      - name: payment-expert
        description: Payment integration and security specialist
    layout: 'split-view'
    run:
      - shell:
          command: npm run dev
          description: Start Next.js development server

  install:
    steps:
      - shell:
          command: npm install
          description: Install project dependencies
      - shell:
          command: cp .env.example .env.local
          description: Create environment configuration
      - shell:
          command: npx prisma generate
          description: Generate Prisma client
      - shell:
          command: npx prisma db push
          description: Set up database schema
      - shell:
          command: npm run seed
          description: Seed database with sample products
    customInstallationAgent:
      enabled: true
      agent: 'ecommerce-setup-assistant'

  appUse:
    prerunsteps:
      - shell:
          command: npm run build
          description: Build application for production
    agents:
      - name: ecommerce-optimizer
        description: Performance and conversion optimization assistant
    layout: 'full-screen'
    appPreview:
      type: 'web'
      port: 3000
      path: '/'
```

### E-commerce Features

**Product Component (`src/components/ProductCard.tsx`):**
```typescript
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      await addToCart(product.id, 1)
    } catch (error) {
      console.error('Failed to add to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.images[0]?.url || '/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
              -{product.discount}%
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={isLoading || product.stock === 0}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Adding...' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
        
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>
    </div>
  )
}
```

## Template Selection Guide

### Choose React TypeScript Starter for:
- Modern single-page applications
- Component-heavy interfaces
- Teams familiar with React ecosystem
- Projects requiring high interactivity

### Choose Next.js Full-Stack for:
- Applications needing SSR/SSG
- Full-stack projects with API routes
- SEO-critical applications
- Projects requiring authentication

### Choose Express.js API for:
- Standalone backend services
- Microservices architecture
- API-first development
- Projects requiring custom server logic

### Choose Vue.js SPA for:
- Teams preferring Vue.js ecosystem
- Progressive web applications
- Projects requiring gentle learning curve
- Component-based architectures

### Choose E-commerce Template for:
- Online stores and marketplaces
- Product catalog applications
- Payment processing requirements
- Inventory management needs

## Customization Tips

### 1. Adapting Templates
- Modify `codeboltconfig.yaml` for your specific needs
- Update dependencies to latest versions
- Customize styling and branding
- Add or remove features based on requirements

### 2. Environment Configuration
- Set up proper environment variables
- Configure external services (databases, APIs)
- Set up development and production environments
- Configure deployment pipelines

### 3. Testing and Quality
- Run all tests before deployment
- Set up continuous integration
- Configure code quality tools
- Implement monitoring and logging

## Next Steps

- **[Template Best Practices](./best-practices.md)** - Learn advanced template patterns
- **[Publishing Templates](./publishing.md)** - Share your customized templates
- **[Community Guidelines](./community.md)** - Contribute to the template ecosystem

---

These examples provide a solid foundation for various types of applications. Use them as starting points and customize them to fit your specific project requirements and team preferences. 