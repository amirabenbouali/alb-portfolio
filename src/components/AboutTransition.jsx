import ButterflySvg from './ButterflySvg'

function AboutTransition({ aboutTransition }) {
  if (!aboutTransition) {
    return null
  }

  return (
    <div
      className="butterfly-transition"
      style={{
        '--butterfly-x': `${aboutTransition.x}px`,
        '--butterfly-y': `${aboutTransition.y}px`,
      }}
    >
      <div className="butterfly-transition-backdrop" />
      <div className="butterfly-transition-trail" />
      <div className="butterfly-transition-shell">
        <div className="butterfly-transition-portal">
          <span className="butterfly-transition-ring butterfly-transition-ring-one" />
          <span className="butterfly-transition-ring butterfly-transition-ring-two" />
          <span className="butterfly-transition-ring butterfly-transition-ring-three" />
        </div>
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
  )
}

export default AboutTransition
