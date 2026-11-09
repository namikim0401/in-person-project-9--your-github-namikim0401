import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import './styles/App.css'

function App() {
  // Theme state - will be replaced with useLocalStorage hook later
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app theme-${theme}`}>
      <header className="app-header">
        <Navigation />
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 My Portfolio. Built with React Router.</p>
      </footer>
    </div>
  )
}

export default App