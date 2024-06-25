const ToleranceWindow = () => {
  return (
    <div className="tolerance-window">
      <input type="checkbox" id="switch" class="checkbox" />
      <label for="switch" class="toggle" />
      <p className="toggle-state">Toggle ON</p>
    </div>
  )
}

export default ToleranceWindow