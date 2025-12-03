import './Sidebar.css'

const Sidebar = () => {
  const navLinks = [
    { name: 'Blank Space', href: '#blankspace' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contributors', href: '#contributors' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <a href="/" className="sidebar-logo">
          Bad Company
        </a>
      </div>

      <nav className="sidebar-nav">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="sidebar-link">
            {link.name}
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="sidebar-icon-btn" aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
