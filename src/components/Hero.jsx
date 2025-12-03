import { useState } from 'react'
import './Hero.css'

const BLANKSPACE_URL = 'https://blankspace.build'

const Hero = () => {
  const [inputValue, setInputValue] = useState('')

  const quickActions = [
    { label: 'Build a landing page', prompt: 'Build a landing page' },
    { label: 'Create a dashboard', prompt: 'Create a dashboard' },
    { label: 'Design a form', prompt: 'Design a form' },
    { label: 'View templates', prompt: 'View templates' },
    { label: 'Read docs', prompt: 'Read docs' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      window.open(`${BLANKSPACE_URL}?prompt=${encodeURIComponent(inputValue)}`, '_blank')
    }
  }

  const handleQuickAction = (prompt) => {
    window.open(`${BLANKSPACE_URL}?prompt=${encodeURIComponent(prompt)}`, '_blank')
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>What do you want to build?</h1>

        <form className="chat-input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat-input"
            placeholder="Describe your app idea..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="chat-submit" aria-label="Submit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </form>

        <div className="quick-actions">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.prompt)}
              className="quick-action-pill"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
