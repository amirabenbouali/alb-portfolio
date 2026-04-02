import { useEffect, useRef, useState } from 'react'
import AboutTransition from './components/AboutTransition'
import MenuOverlay from './components/MenuOverlay'
import { PAGE_ENTER_MS, PAGE_SWAP_MS, aboutSections, getPageFromHash, workItems } from './data/siteContent'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import './App.css'

function App() {
  const [page, setPage] = useState(getPageFromHash)
  const [pageTransitionStage, setPageTransitionStage] = useState('idle')
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
  const pageSwapRef = useRef(null)
  const pageEnterRef = useRef(null)
  const ignoreNextHashChangeRef = useRef(false)

  useEffect(() => {
    const onHashChange = () => {
      if (ignoreNextHashChangeRef.current) {
        ignoreNextHashChangeRef.current = false
        return
      }

      if (pageSwapRef.current) {
        window.clearTimeout(pageSwapRef.current)
        pageSwapRef.current = null
      }
      if (pageEnterRef.current) {
        window.clearTimeout(pageEnterRef.current)
        pageEnterRef.current = null
      }

      setPage(getPageFromHash())
      setPageTransitionStage('is-entering')
      pageEnterRef.current = window.setTimeout(() => {
        setPageTransitionStage('idle')
        pageEnterRef.current = null
      }, PAGE_ENTER_MS)
    }
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
      if (pageSwapRef.current) {
        window.clearTimeout(pageSwapRef.current)
      }
      if (pageEnterRef.current) {
        window.clearTimeout(pageEnterRef.current)
      }
      ignoreNextHashChangeRef.current = true
      pageSwapRef.current = null
      pageEnterRef.current = null
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

    if (nextPage === page) {
      setMenuOpen(false)
      return
    }

    if (nextPage === 'about' && page !== 'about') {
      const rect = event?.currentTarget?.getBoundingClientRect?.()
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2

      setAboutTransition({ x, y })
      setMenuOpen(false)

      if (aboutTransitionRef.current) {
        window.clearTimeout(aboutTransitionRef.current)
      }
      if (pageSwapRef.current) {
        window.clearTimeout(pageSwapRef.current)
        pageSwapRef.current = null
      }
      if (pageEnterRef.current) {
        window.clearTimeout(pageEnterRef.current)
        pageEnterRef.current = null
      }

      ignoreNextHashChangeRef.current = true
      window.location.hash = '#about'
      setPage('about')
      setPageTransitionStage('idle')
      setActiveAboutIndex(0)
      setAboutFlyKey((value) => value + 1)

      aboutTransitionRef.current = window.setTimeout(() => {
        setAboutTransition(null)
        aboutTransitionRef.current = null
      }, 2450)

      window.setTimeout(() => {
        aboutScrollRef.current?.scrollTo({ top: 0, behavior: 'auto' })
      }, 120)

      return
    }

    setMenuOpen(false)
    setPageTransitionStage('is-leaving')

    if (pageSwapRef.current) {
      window.clearTimeout(pageSwapRef.current)
    }
    if (pageEnterRef.current) {
      window.clearTimeout(pageEnterRef.current)
    }

    pageSwapRef.current = window.setTimeout(() => {
      if (nextPage === 'work') {
        setActiveWorkIndex(0)
      }

      setPage(nextPage)
      ignoreNextHashChangeRef.current = true
      window.location.hash = target ? `#${target}` : ''
      window.scrollTo({ top: 0, behavior: 'instant' })
      setPageTransitionStage('is-entering')
      pageSwapRef.current = null

      pageEnterRef.current = window.setTimeout(() => {
        setPageTransitionStage('idle')
        pageEnterRef.current = null
      }, PAGE_ENTER_MS)
    }, PAGE_SWAP_MS)
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
      <AboutTransition aboutTransition={aboutTransition} />

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

      <MenuOverlay
        menuOpen={menuOpen}
        openMenu={openMenu}
        scheduleCloseMenu={scheduleCloseMenu}
        page={page}
        handleNavigate={handleNavigate}
        setMenuOpen={setMenuOpen}
      />

      <main className={`page-shell ${pageTransitionStage}`}>
        <div className="page-transition-veil" aria-hidden="true">
          <span className="page-transition-glow page-transition-glow-one" />
          <span className="page-transition-glow page-transition-glow-two" />
          <span className="page-transition-streak" />
        </div>
        {page === 'home' ? (
          <HomePage />
        ) : page === 'work' ? (
          <WorkPage
            workItems={workItems}
            activeWorkIndex={activeWorkIndex}
            getWorkCardState={getWorkCardState}
            showPreviousWork={showPreviousWork}
            showNextWork={showNextWork}
            setActiveWorkIndex={setActiveWorkIndex}
          />
        ) : (
          <AboutPage
            aboutScrollRef={aboutScrollRef}
            activeAboutIndex={activeAboutIndex}
            aboutFlyKey={aboutFlyKey}
            aboutSections={aboutSections}
            aboutSectionsRef={aboutSectionsRef}
          />
        )}
      </main>
    </div>
  )
}

export default App
