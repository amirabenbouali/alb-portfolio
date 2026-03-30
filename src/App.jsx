import { useEffect, useState } from 'react'
import './App.css'

const profileGroups = [
  {
    title: 'Contact',
    items: ['London, United Kingdom', 'amiralinabenbouali@gmail.com', 'github.com/amirabenbouali'],
  },
  {
    title: 'Education',
    items: ['BSc Computer Science', 'Continuous self-learning', 'Practical project work'],
  },
  {
    title: 'Software Skills',
    items: ['JavaScript / TypeScript', 'React', 'Node.js', 'APIs'],
  },
  {
    title: 'Analogue Skills',
    items: ['Clear communication', 'Product thinking', 'Reliable execution'],
  },
  {
    title: 'Experience',
    items: ['Frontend systems', 'Full-stack delivery', 'Developer experience'],
  },
]

const workItems = [
  {
    year: '2022',
    title: 'Platform Foundations',
    summary:
      'Reusable components, cleaner UI systems, and maintainable frontend architecture.',
  },
  {
    year: '2023',
    title: 'Workflow Tools',
    summary:
      'Internal software that reduced repetitive tasks and improved team visibility.',
  },
  {
    year: '2024',
    title: 'Quality and Delivery',
    summary:
      'Better pipelines, stronger review habits, and more dependable releases.',
  },
]

const getPageFromHash = () => (window.location.hash === '#about' ? 'about' : 'home')

const primaryAboutGroups = profileGroups.slice(0, 4)
const secondaryAboutGroups = profileGroups.slice(4)

function App() {
  const [page, setPage] = useState(getPageFromHash)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavigate = (target) => {
    window.location.hash = target
    setMenuOpen(false)
  }

  return (
    <div className="portfolio-page">
      <div className="ambient-blur ambient-blur-one" aria-hidden="true" />
      <div className="ambient-blur ambient-blur-two" aria-hidden="true" />

      <header className="site-header">
        <a className="site-mark" href="#">
          ALB
        </a>
        <div className="site-nav">
          <span className="site-nav-status">
            {page === 'home' ? 'Home' : 'About Me'}
          </span>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            Menu
          </button>
        </div>
      </header>

      {menuOpen ? (
        <section className="menu-overlay" id="site-menu" aria-label="Site menu">
          <div className="menu-overlay-blur" aria-hidden="true" />
          <div className="menu-sidebar">
            <div>
              <p className="menu-kicker">ALB</p>
              <p className="menu-sidebar-text">
                software engineer
                <br />
                creative developer
              </p>
            </div>

            <div className="menu-contact">
              <p>London, United Kingdom</p>
              <p>amiralinabenbouali@gmail.com</p>
              <p>github.com/amirabenbouali</p>
            </div>

            <div className="menu-meta">
              <a href="mailto:amiralinabenbouali@gmail.com">email</a>
              <a href="https://github.com/amirabenbouali" target="_blank" rel="noreferrer">
                github
              </a>
            </div>
          </div>

          <div className="menu-main">
            <button
              className="menu-close"
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>

            <nav className="menu-links" aria-label="Overlay navigation">
              <button
                className={page === 'home' ? 'is-current' : ''}
                type="button"
                onClick={() => handleNavigate('')}
              >
                <span>home</span>
                <small>01</small>
              </button>
              <button
                className={page === 'about' ? 'is-current' : ''}
                type="button"
                onClick={() => handleNavigate('about')}
              >
                <span>about</span>
                <small>02</small>
              </button>
              <button type="button" onClick={() => setMenuOpen(false)}>
                <span>resume</span>
                <small>03</small>
              </button>
            </nav>
          </div>
        </section>
      ) : null}

      <main>
        {page === 'home' ? (
          <>
            <section className="hero-panel">
              <div className="hero-frame">
                <p className="hero-topline">Software engineer portfolio</p>
                <h1>
                  welcome to my
                  <span>portfolio</span>
                </h1>
                <p className="hero-year">2026</p>
              </div>

              <div className="hero-footer">
                <div>
                  <p>Design</p>
                  <strong>Portfolio</strong>
                </div>
                <div>
                  <p>Role</p>
                  <strong>Software Engineer</strong>
                </div>
                <div>
                  <p>Focus</p>
                  <strong>Frontend / Full-Stack</strong>
                </div>
              </div>
            </section>

            <section className="work-panel">
              <div className="work-heading">
                <div>
                  <p className="section-label">Selected Work</p>
                  <h2>Resume and project highlights</h2>
                </div>
                <p className="work-intro">
                  A tighter snapshot of the work themes I want this portfolio to
                  communicate: systems, delivery, and engineering quality.
                </p>
              </div>

              <div className="work-list">
                {workItems.map((item, index) => (
                  <article className="work-item" key={item.title}>
                    <span className="work-index">0{index + 1}</span>
                    <p className="work-year">{item.year}</p>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="about-page">
            <p className="section-label">About</p>
            <div className="about-layout">
              <aside className="profile-card">
                <div className="profile-photo" aria-hidden="true">
                  <span>ALB</span>
                </div>
                <div className="profile-meta">
                  <p>Amira Benbouali</p>
                  <p>London, United Kingdom</p>
                  <p>amiralinabenbouali@gmail.com</p>
                  <p>github.com/amirabenbouali</p>
                </div>
              </aside>

              <div className="about-content">
                <div className="about-header about-panel-block">
                  <div className="about-heading-row">
                    <div>
                      <p className="about-kicker">cv</p>
                      <h2>Amira Benbouali</h2>
                    </div>
                    <div className="about-rule" aria-hidden="true" />
                  </div>

                  <div className="about-intro">
                    <p className="about-role">software engineer &amp; full-stack developer</p>
                    <p className="about-summary">
                      I build interactive web applications and creative digital
                      experiences, with a focus on clean systems, thoughtful UI,
                      and reliable delivery.
                    </p>
                  </div>
                </div>

                <div className="about-grid about-panel-block">
                  {primaryAboutGroups.map((group) => (
                    <article className="about-card" key={group.title}>
                      <h3>{group.title}</h3>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <div className="about-grid about-grid-secondary about-panel-block">
                  {secondaryAboutGroups.map((group) => (
                    <article className="about-card about-card-wide" key={group.title}>
                      <h3>{group.title}</h3>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
