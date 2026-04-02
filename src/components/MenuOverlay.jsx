function MenuOverlay({
  menuOpen,
  openMenu,
  scheduleCloseMenu,
  page,
  handleNavigate,
  setMenuOpen,
}) {
  return (
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
  )
}

export default MenuOverlay
