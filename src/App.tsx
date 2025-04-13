import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import MainLayout from './layouts/MainLayout'

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-background-dark">
            <LoadingSpinner size="lg" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default App
