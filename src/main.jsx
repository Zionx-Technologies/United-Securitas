import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { startReveal } from './lib/reveal'
import { startSmoothScroll, lockScroll } from './lib/smoothScroll'
import { startScrollStack } from './lib/scrollStack'
import './styles/template.css'

startReveal()
startSmoothScroll()
startScrollStack()

// The page loader (index.html) covers the screen until the first page is ready; keep the
// page underneath still until it hands over.
if (document.documentElement.classList.contains('is-loading')) {
  lockScroll(true)
  window.addEventListener('loader:done', () => lockScroll(false), { once: true })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
