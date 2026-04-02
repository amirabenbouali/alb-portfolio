import ButterflySvg from '../components/ButterflySvg'

function HomePage() {
  return (
    <section className="hero-panel">
      <div className="hero-meta-row">
        <p className="hero-search">software engineer portfolio</p>
      </div>

      <div className="hero-orbit hero-orbit-top" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="hero-frame">
        <div className="hero-side-note hero-side-note-left">
          <span className="hero-line" />
          <p>interactive systems</p>
          <p>full-stack craft</p>
        </div>

        <div className="hero-title-stack">
          <p className="hero-topline">2026 curriculum vitae</p>
          <h1>
            PORT
            <span>FOLIO</span>
          </h1>
          <div className="hero-butterfly-wrap" aria-hidden="true">
            <div className="hero-butterfly-glow" />
            <ButterflySvg className="hero-butterfly" />
          </div>
        </div>

        <div className="hero-side-note hero-side-note-right">
          <p className="hero-side-year">2026</p>
        </div>
      </div>

      <div className="hero-footer">
        <div>
          <p>Name</p>
          <strong>Amira Lina Benbouali</strong>
        </div>
        <div>
          <p>Role</p>
          <strong>Software Engineer / Creative Developer</strong>
        </div>
        <div>
          <p>Focus</p>
          <strong>Interactive Web Applications</strong>
        </div>
      </div>

      <div className="hero-scroll-mark" aria-hidden="true">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-dot" />
      </div>
    </section>
  )
}

export default HomePage
