import './Pricing.css'

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-content">
        <h2>Pricing</h2>
        <p className="pricing-tagline">Simple and transparent</p>

        <div className="pricing-card">
          <div className="pricing-badge">Early Access</div>
          <div className="pricing-amount">
            <span className="price">$0</span>
            <span className="period">/month</span>
          </div>
          <p className="pricing-description">
            Free for all users during early access. No credit card required.
          </p>
          <ul className="pricing-features">
            <li>Unlimited projects</li>
            <li>Full access to all features</li>
            <li>Community support</li>
            <li>No usage limits</li>
          </ul>
          <a
            href="https://blankspace.build"
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-cta"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  )
}

export default Pricing
