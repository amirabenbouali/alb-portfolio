import ButterflySvg from '../components/ButterflySvg'

function WorkPage({
  workItems,
  activeWorkIndex,
  getWorkCardState,
  showPreviousWork,
  showNextWork,
  setActiveWorkIndex,
}) {
  return (
    <section className="work-panel work-page">
      <div className="work-heading">
        <div>
          <p className="section-label">Selected Work</p>
          <h2>Resume and project highlights</h2>
        </div>
        <div className="work-intro-block">
          <div className="work-butterfly-wrap" aria-hidden="true">
            <div className="work-butterfly-glow" />
            <ButterflySvg className="work-butterfly" />
          </div>
          <p className="work-intro">
            A tighter snapshot of the work themes I want this portfolio to
            communicate: systems, delivery, and engineering quality.
          </p>
        </div>
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
  )
}

export default WorkPage
