# Premier Markets - Trading Platform

A modern, responsive web application for Forex trading built with React, TypeScript, and Tailwind CSS. This platform provides users with access to global markets, advanced trading tools, competitive spreads, and institutional-grade execution.

## 🚀 Features

- **Modern UI/UX**: Responsive design with beautiful gradients and smooth animations
- **Trading Markets**: Access to Forex, Stocks, Indices, Commodities, Cryptocurrencies, Shares, and ETFs
- **Real-time Market Data**: Live market data strips and price updates
- **Performance Optimized**: Code-splitting, lazy loading, and memoization for optimal performance
- **Accessibility**: WCAG compliant with proper ARIA attributes and keyboard navigation
- **Error Handling**: Robust error boundaries for graceful error handling
- **Type Safety**: Full TypeScript implementation with strict mode enabled

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety and enhanced developer experience
- **Vite 7.2** - Fast build tool and development server
- **React Router DOM 7.10** - Client-side routing

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

### Code Quality
- **ESLint 9.39** - Linting and code quality
- **TypeScript ESLint** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin** - Enforce React hooks rules

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Git** (for version control)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PM-Test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 💻 Development

To start developing, run the development server:

```bash
npm run dev
```

This will start the Vite development server with hot module replacement (HMR), allowing you to see changes instantly in your browser. The application will be available at `http://localhost:5173` (or the next available port).

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server with hot module replacement |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, icons)
│   ├── icons/          # SVG and PNG icons
│   └── images/         # Image assets
├── components/          # React components
│   ├── common/         # Reusable components (Button, Card, Container, etc.)
│   ├── footer/         # Footer components
│   ├── header/         # Header and navigation components
│   └── home/           # Home page specific components
├── pages/              # Page components
│   └── home/           # Home page
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Code Standards & Best Practices

This project follows strict coding standards defined in `.cursor` rules:

### TypeScript & React
- ✅ Use `React.FC` for all functional components with props
- ✅ Implement proper TypeScript interfaces for all props and state
- ✅ Utilize TypeScript's strict mode
- ✅ Use `.tsx` extension for files with JSX

### Performance Optimization
- ✅ Use `React.memo` for components with expensive render operations
- ✅ Implement `useCallback` for functions passed as props
- ✅ Use `useMemo` for expensive computations and object/array creation
- ✅ Code-splitting with `React.lazy` and `Suspense`
- ✅ Proper dependency arrays in hooks

### Accessibility
- ✅ Semantic HTML elements
- ✅ ARIA attributes (`aria-label`, `aria-hidden`, `role`)
- ✅ Keyboard navigation support (`tabIndex`)
- ✅ Alt text for all images
- ✅ Proper focus management

### Error Handling
- ✅ Error boundaries implemented for robust error handling
- ✅ Graceful error fallbacks

### Code Quality
- ✅ ESLint with TypeScript and React plugins
- ✅ Consistent naming conventions
- ✅ Proper code organization and folder structure

## 🏗️ Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

The production build will be generated in the `dist/` directory, optimized and ready for deployment.

## 🔍 Development Guidelines

### Component Development
- Always use functional components with `React.FC`
- Define TypeScript interfaces for component props
- Use `React.memo` for reusable components
- Extract event handlers with `useCallback`
- Memoize expensive computations with `useMemo`

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design approach
- Maintain consistent spacing and typography
- Use semantic color names from Tailwind config

### File Naming
- Use PascalCase for component files (e.g., `Button.tsx`)
- Use camelCase for utility files
- Keep component files co-located with their styles if needed

## 📦 Dependencies

### Production Dependencies
- `react` - React library
- `react-dom` - React DOM renderer
- `react-router-dom` - Routing library

### Development Dependencies
- `@vitejs/plugin-react` - Vite plugin for React
- `typescript` - TypeScript compiler
- `tailwindcss` - CSS framework
- `eslint` - Linting tool
- `typescript-eslint` - TypeScript ESLint integration

## 🌐 Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Environment Variables

Currently, the project uses Vite's built-in environment variables:
- `import.meta.env.DEV` - Development mode flag
- `import.meta.env.PROD` - Production mode flag

For custom environment variables, create a `.env` file in the root directory.

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes following the code standards
3. Run `npm run lint` to ensure code quality
4. Test your changes thoroughly
5. Submit a pull request with a clear description

