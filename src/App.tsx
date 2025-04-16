import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import MainLayout from "./layouts/MainLayout";
import { FilimoProvider } from "./context";

// Lazy load pages
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const MoviesPage = lazy(() => import("./pages/Movies/MoviesPage"));

// Configure future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
};

function App() {
  return (
    <ErrorBoundary>
      <FilimoProvider>
        <Router {...router}>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-background-dark">
                <LoadingSpinner size="lg" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="movies" element={<MoviesPage />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </FilimoProvider>
    </ErrorBoundary>
  );
}

export default App;
