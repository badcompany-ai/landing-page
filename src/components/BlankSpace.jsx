import './BlankSpace.css'

const BlankSpace = () => {
  const features = [
    {
      title: 'Visual Builder',
      description: 'Design AI workflows visually. No code required.'
    },
    {
      title: 'Agent Architecture',
      description: 'Chain tools and models together. Build complex AI systems effortlessly.'
    },
    {
      title: 'Your UI, Your Way',
      description: 'Use any components you want. No vendor lock-in.'
    },
    {
      title: 'Deploy Anywhere',
      description: 'Self-host on GCP, AWS, or run locally. You own your stack.'
    }
  ]

  const techStack = ['React', 'JavaScript', 'Node.js', 'AI/ML APIs']

  return (
    <section className="blankspace" id="blankspace">
      <div className="blankspace-content">
        <div className="blankspace-badge">Open Source</div>
        <h2>Blank Space</h2>
        <p className="blankspace-tagline">
          Build AI apps in minutes, not months. The open-source alternative to v0, Lovable, and Bolt.
        </p>

        <div className="blankspace-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <span className="tech-label">Built with:</span>
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="blankspace-cta">
          <a
            href="https://github.com/BrandeisPatrick/blank-space"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on GitHub
          </a>
          <a href="#" className="btn-secondary">
            Try Demo
          </a>
        </div>

        <p className="free-tier">Free tier: 50 requests/day</p>
      </div>
    </section>
  )
}

export default BlankSpace
