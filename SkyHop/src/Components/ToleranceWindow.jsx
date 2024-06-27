import clockImage from "../assets/clock.png"

const ToleranceWindow = () => {
  return (
    <div className="tolerance-window-wrapper">
      <p className="tolerance-window-title">Tolerance Window:</p>
      <div className="tolerance-window-left">
        <div className="toggle-wrapper">
          <input type="checkbox" id="switch" class="checkbox" />
          <label for="switch" class="toggle" />
          <p className="toggle-state">Toggle ON</p>
        </div>
      </div>
      <div className="tolerance-window-right">
        <div className="select-tolerance-level">
          <img src={clockImage} alt="" />
          <p>Select Tolerance Level</p>
        </div>
      </div>
    </div>
  )
}

export default ToleranceWindow