const ToleranceWindow = () => {
  return (
    <div className="tolerance-window-wrapper">
      <p className="tolerance-window-title">Tolerance Window:</p>
      <div className="toggle-wrapper">
        <input type="checkbox" id="switch" class="checkbox" />
        <label for="switch" class="toggle" />
        <p className="toggle-state">Toggle ON</p>
      </div>
    </div>
  )
}

export default ToleranceWindow