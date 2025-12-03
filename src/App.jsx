import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import BlankSpace from './components/BlankSpace'
import Support from './components/Support'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <header className="top-bar">
          <div className="top-bar-left"></div>
          <div className="top-bar-right">
            <button className="search-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            <button className="login-btn">Log in</button>
          </div>
        </header>

        <main>
          <Hero />
          <BlankSpace />
          <Support />
        </main>
      </div>
    </div>
  )
}

export default App
