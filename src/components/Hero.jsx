import { useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [inputValue, setInputValue] = useState('')

  const quickActions = [
    { label: 'Build a landing page', href: '#' },
    { label: 'Create a dashboard', href: '#' },
    { label: 'Design a form', href: '#' },
    { label: 'View templates', href: '#' },
    { label: 'Read docs', href: '#' },
  ]

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>What do you want to build?</h1>

        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Describe your app idea..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="chat-submit" aria-label="Submit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>

        <div className="quick-actions">
          {quickActions.map((action, index) => (
            <a key={index} href={action.href} className="quick-action-pill">
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
