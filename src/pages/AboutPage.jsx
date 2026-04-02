import ButterflySvg from '../components/ButterflySvg'

function AboutPage({
  aboutScrollRef,
  activeAboutIndex,
  aboutFlyKey,
  aboutSections,
  aboutSectionsRef,
}) {
  return (
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

              {section.detail ? (
                <div className="about-story-detail">
                  <p>{section.detail}</p>
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default AboutPage
