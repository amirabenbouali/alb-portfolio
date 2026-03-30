import { useEffect, useRef, useState } from 'react'
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

const getPageFromHash = () => {
  if (window.location.hash === '#about') {
    return 'about'
  }
  if (window.location.hash === '#work') {
    return 'work'
  }
  return 'home'
}

const primaryAboutGroups = profileGroups.slice(0, 4)
const secondaryAboutGroups = profileGroups.slice(4)

const aboutSections = [
  {
    kicker: '',
    title: 'Amira Lina Benbouali',
    text:
      'I am a software engineer and full-stack developer who enjoys building digital experiences that feel thoughtful, intuitive, and well made. I care about the details people notice and the technical quality they do not see.',
    detail: 'The kind of work I am drawn to combines clarity, creativity, and strong execution.',
    panels: [
      {
        label: 'Contact',
        items: ['London, United Kingdom', 'amiralinabenbouali@gmail.com', 'github.com/amirabenbouali'],
      },
      {
        label: 'Focus',
        items: ['Full-stack web products', 'Interactive experiences', 'Design-aware engineering'],
      },
      {
        label: 'Profile',
        items: ['Curious', 'Visual', 'System-minded'],
      },
    ],
  },
  {
    kicker: 'My Story',
    title: 'I grew into tech through curiosity and making.',
    text:
      'What keeps me in tech is the mix of problem solving and creativity. I like taking an idea, shaping it carefully, and turning it into something people can actually use, trust, and enjoy.',
    detail: 'I do my best work when a project needs both technical clarity and good design judgment.',
    panels: [
      {
        label: 'Beginning',
        items: ['Started with curiosity', 'Learned by building', 'Stayed for the problem solving'],
      },
      {
        label: 'Why It Stuck',
        items: ['Code + creativity', 'Structure + experimentation', 'Real-world usefulness'],
      },
      {
        label: 'What Matters',
        items: ['Clarity', 'Meaning', 'Momentum'],
      },
    ],
  },
  {
    kicker: 'What I Create',
    title: 'Design-aware full-stack products.',
    text:
      'I enjoy working where interface design, frontend engineering, and backend systems meet. I want products to feel polished and expressive, but also stable, fast, and maintainable.',
    detail: 'For me, good work usually means reusable systems, clear interactions, and dependable implementation details.',
    panels: [
      {
        label: 'Frontend',
        items: ['React interfaces', 'Interaction design', 'Reusable systems'],
      },
      {
        label: 'Backend',
        items: ['APIs', 'Node.js services', 'Data flow thinking'],
      },
      {
        label: 'Experience',
        items: ['Motion', 'Polish', 'Consistency'],
      },
    ],
  },
  {
    kicker: 'How I Think',
    title: 'Structured, curious, and persistent.',
    text:
      'I like understanding a problem properly before rushing into code. My instinct is to simplify first, then add complexity only where it genuinely improves the result.',
    detail: 'The strongest solutions usually feel simple in the end, even when the path there was not.',
    panels: [
      {
        label: 'Approach',
        items: ['Simplify first', 'Iterate with intent', 'Refine what matters'],
      },
      {
        label: 'Traits',
        items: ['Curious', 'Patient', 'Persistent'],
      },
      {
        label: 'Standards',
        items: ['Readable code', 'Thoughtful UX', 'Reliable output'],
      },
    ],
  },
  {
    kicker: 'Beyond The Screen',
    title: 'I care about atmosphere, meaning, and craft.',
    text:
      'Beyond implementation, I care about visual storytelling, motion, tone, and the feeling a product leaves with someone. That sensitivity shapes how I approach both design and engineering decisions.',
    detail: 'I do not see design and engineering as separate worlds. The best products need both.',
    panels: [
      {
        label: 'Inspiration',
        items: ['Visual storytelling', 'Motion language', 'Editorial layouts'],
      },
      {
        label: 'Values',
        items: ['Taste', 'Care', 'Intentional detail'],
      },
      {
        label: 'Beyond Coding',
        items: ['Creativity', 'Observation', 'Aesthetic sensitivity'],
      },
    ],
  },
  {
    kicker: 'Where I’m Going',
    title: 'Toward more ambitious interactive work.',
    text:
      'I want to keep building software that feels alive, especially work that blends strong frontend craft, interactivity, and thoughtful systems underneath. I am interested in projects that challenge both my technical skills and creative instincts.',
    detail: 'My goal is not simply to ship more. It is to build work that is memorable, useful, and genuinely well crafted.',
    panels: [
      {
        label: 'Direction',
        items: ['Interactive products', 'Stronger frontend craft', 'Expressive systems'],
      },
      {
        label: 'Ambition',
        items: ['More originality', 'Higher polish', 'Deeper execution'],
      },
      {
        label: 'Looking For',
        items: ['Creative teams', 'Product-minded work', 'Technical growth'],
      },
    ],
  },
]

function ButterflySvg({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 180"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="butterfly-wing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff5f8" stopOpacity="0.98" />
          <stop offset="38%" stopColor="#ffa0c5" stopOpacity="0.96" />
          <stop offset="68%" stopColor="#ff6faa" stopOpacity="0.94" />
          <stop offset="100%" stopColor="#ff8c5c" stopOpacity="0.94" />
        </linearGradient>
      </defs>
      <g className="butterfly-wing butterfly-wing-left">
        <path d="M105 88C74 25 28 22 19 54c-8 28 11 63 53 70 14 2 24-7 33-36Z" />
        <path d="M102 92C66 103 49 131 61 154c11 22 39 17 52-8 8-16 5-34-11-54Z" />
      </g>
      <g className="butterfly-wing butterfly-wing-right">
        <path d="M115 88c31-63 77-66 86-34 8 28-11 63-53 70-14 2-24-7-33-36Z" />
        <path d="M118 92c36 11 53 39 41 62-11 22-39 17-52-8-8-16-5-34 11-54Z" />
      </g>
      <g className="butterfly-body">
        <rect x="104" y="44" width="12" height="82" rx="6" />
        <path d="M110 44c0-13 9-22 20-28" />
        <path d="M110 44c0-13-9-22-20-28" />
      </g>
    </svg>
  )
}

function App() {
  const [page, setPage] = useState(getPageFromHash)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeWorkIndex, setActiveWorkIndex] = useState(0)
  const [activeAboutIndex, setActiveAboutIndex] = useState(0)
  const [aboutFlyKey, setAboutFlyKey] = useState(0)
  const [aboutTransition, setAboutTransition] = useState(null)
  const openTimerRef = useRef(null)
  const closeTimerRef = useRef(null)
  const aboutSectionsRef = useRef([])
  const aboutScrollRef = useRef(null)
  const aboutTransitionRef = useRef(null)

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

  useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current)
      }
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current)
      }
      if (aboutTransitionRef.current) {
        window.clearTimeout(aboutTransitionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (page !== 'about') {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (!visibleEntry) {
          return
        }

        const index = Number(visibleEntry.target.getAttribute('data-index'))
        setActiveAboutIndex((current) => {
          if (current !== index) {
            setAboutFlyKey((value) => value + 1)
            return index
          }
          return current
        })
      },
      {
        root: aboutScrollRef.current,
        threshold: [0.55, 0.72],
      },
    )

    aboutSectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [page])

  const handleNavigate = (target, event) => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    const nextPage = target || 'home'

    if (nextPage === 'about' && page !== 'about') {
      const rect = event?.currentTarget?.getBoundingClientRect?.()
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2

      setAboutTransition({ x, y })
      setMenuOpen(false)

      if (aboutTransitionRef.current) {
        window.clearTimeout(aboutTransitionRef.current)
      }

      window.location.hash = '#about'
      setPage('about')
      setActiveAboutIndex(0)
      setAboutFlyKey((value) => value + 1)

      aboutTransitionRef.current = window.setTimeout(() => {
        setAboutTransition(null)
        aboutTransitionRef.current = null
      }, 1200)

      window.setTimeout(() => {
        aboutScrollRef.current?.scrollTo({ top: 0, behavior: 'auto' })
      }, 120)

      return
    }

    if (nextPage === 'work') {
      setActiveWorkIndex(0)
    }
    setPage(nextPage)
    window.location.hash = target ? `#${target}` : ''
    window.scrollTo({ top: 0, behavior: 'instant' })
    setMenuOpen(false)
  }

  const showNextWork = () => {
    setActiveWorkIndex((current) => (current + 1) % workItems.length)
  }

  const showPreviousWork = () => {
    setActiveWorkIndex((current) => (current - 1 + workItems.length) % workItems.length)
  }

  const getWorkCardState = (index) => {
    if (index === activeWorkIndex) {
      return 'is-active'
    }
    if (index === (activeWorkIndex - 1 + workItems.length) % workItems.length) {
      return 'is-prev'
    }
    if (index === (activeWorkIndex + 1) % workItems.length) {
      return 'is-next'
    }
    return 'is-hidden'
  }

  const openMenu = () => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    openTimerRef.current = window.setTimeout(() => {
      setMenuOpen(true)
      openTimerRef.current = null
    }, 180)
  }

  const scheduleCloseMenu = () => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = window.setTimeout(() => {
      setMenuOpen(false)
      closeTimerRef.current = null
    }, 140)
  }

  return (
    <div className="portfolio-page">
      <div className="ambient-blur ambient-blur-one" aria-hidden="true" />
      <div className="ambient-blur ambient-blur-two" aria-hidden="true" />
      {aboutTransition ? (
        <div
          className="butterfly-transition"
          style={{
            '--butterfly-x': `${aboutTransition.x}px`,
            '--butterfly-y': `${aboutTransition.y}px`,
          }}
        >
          <div className="butterfly-transition-backdrop" />
          <div className="butterfly-transition-shell">
            <div className="butterfly-echo butterfly-echo-one">
              <ButterflySvg className="butterfly-transition-svg butterfly-transition-svg-ghost" />
            </div>
            <div className="butterfly-echo butterfly-echo-two">
              <ButterflySvg className="butterfly-transition-svg butterfly-transition-svg-ghost" />
            </div>
            <ButterflySvg className="butterfly-transition-svg" />
            <span className="butterfly-spark butterfly-spark-one" />
            <span className="butterfly-spark butterfly-spark-two" />
            <span className="butterfly-spark butterfly-spark-three" />
            <span className="butterfly-spark butterfly-spark-four" />
            <span className="butterfly-spark butterfly-spark-five" />
          </div>
        </div>
      ) : null}

      <header className="site-header">
        <a className="site-mark" href="#">
          ALB
        </a>
        <div className="site-nav">
          <span className="site-nav-status">
            <span>
              {page === 'home' ? 'Home' : page === 'about' ? 'About Me' : 'Selected Work'}
            </span>
          </span>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(true)}
            onMouseEnter={openMenu}
            onFocus={openMenu}
            onMouseLeave={scheduleCloseMenu}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            <span>Menu</span>
          </button>
        </div>
      </header>

      <section
        className={`menu-overlay${menuOpen ? ' is-open' : ''}`}
        id="site-menu"
        aria-label="Site menu"
        aria-hidden={menuOpen ? 'false' : 'true'}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleCloseMenu}
      >
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
            <a
              className={page === 'home' ? 'is-current' : ''}
              href="#"
              onClick={(event) => {
                event.preventDefault()
                handleNavigate('')
              }}
            >
              <span>home</span>
              <small>01</small>
            </a>
            <a
              className={page === 'about' ? 'is-current' : ''}
              href="#about"
              onClick={(event) => {
                event.preventDefault()
                handleNavigate('about', event)
              }}
            >
              <span>about</span>
              <small>02</small>
            </a>
            <a
              className={page === 'work' ? 'is-current' : ''}
              href="#work"
              onClick={(event) => {
                event.preventDefault()
                handleNavigate('work')
              }}
            >
              <span>work</span>
              <small>03</small>
            </a>
          </nav>
        </div>
      </section>

      <main key={page}>
        {page === 'home' ? (
          <section className="hero-panel">
            <div className="hero-frame">
              <p className="hero-topline">Software engineer portfolio</p>
              <h1>
                welcome to Amira's
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
        ) : page === 'work' ? (
          <section className="work-panel work-page">
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

            <div className="work-carousel">
              <div className="work-stage" aria-live="polite">
                {workItems.map((item, index) => (
                  <article
                    className={`work-item ${getWorkCardState(index)}`}
                    key={item.title}
                  >
                    <span className="work-index">0{index + 1}</span>
                    <p className="work-year">{item.year}</p>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </article>
                ))}
              </div>

              <div className="work-controls">
                <button type="button" onClick={showPreviousWork}>
                  Previous
                </button>
                <div className="work-progress" aria-label="Work slides">
                  {workItems.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      className={index === activeWorkIndex ? 'is-active' : ''}
                      aria-label={`Show ${item.title}`}
                      onClick={() => setActiveWorkIndex(index)}
                    />
                  ))}
                </div>
                <button type="button" onClick={showNextWork}>
                  Next
                </button>
              </div>
            </div>
          </section>
        ) : (
          <section className="about-page">
            <div className="about-scroll" ref={aboutScrollRef}>
              <div className="about-flyby-layer" aria-hidden="true">
                <div
                  className={`about-flyby about-flyby-${activeAboutIndex % 2 === 0 ? 'right' : 'left'}`}
                  key={aboutFlyKey}
                >
                  <div className="about-flyby-trail" />
                  <ButterflySvg className="about-flyby-svg" />
                </div>
              </div>

              {aboutSections.map((section, index) => (
                <section
                  className={`about-story-section${index === 0 ? ' about-story-section-opening' : ''}`}
                  key={section.title}
                  data-index={index}
                  ref={(node) => {
                    aboutSectionsRef.current[index] = node
                  }}
                >
                  <div className={`about-story-shell${index === 0 ? ' about-story-shell-opening' : ''}`}>
                    <div className="about-story-top">
                      <div className="about-story-copy">
                        {section.kicker ? (
                          <p className="about-story-kicker">{section.kicker}</p>
                        ) : null}
                        <h2>{section.title}</h2>
                        <p className="about-story-text">{section.text}</p>
                      </div>
                    </div>

                    <div className="about-story-opening">
                      <p className="about-story-role">
                        Software engineer / full-stack developer
                      </p>
                      <p className="about-story-note about-story-note-centered">
                        {section.detail}
                      </p>
                    </div>

                    <div className="about-story-grid">
                      {section.panels.map((panel) => (
                        <article
                          className={`about-story-panel${index === 0 ? ' about-story-panel-opening' : ''}`}
                          key={panel.label}
                        >
                          <h3>{panel.label}</h3>
                          <ul>
                            {panel.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>

                    <div className="about-story-detail">
                      <p>{section.detail}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
