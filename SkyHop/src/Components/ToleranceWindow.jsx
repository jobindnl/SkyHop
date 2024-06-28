import { useState } from "react"
import clockImage from "../assets/clock.png"

const ToleranceWindow = () => {
  const [toggled, setToggle] = useState(false)
  const handleChange = () => {
    setToggle(!toggled);
  }

  return (
    <div className="tolerance-window-wrapper">
      <p className="tolerance-window-title">Tolerance Window:</p>
      <div className="tolerance-window-body-wrapper">
        <div className="tolerance-window-left">
          <div className="toggle-wrapper">
            <input onChange={handleChange} type="checkbox" id="switch" class="checkbox" />
            <label for="switch" class="toggle" />
            <p className="toggle-state">Toggle {toggled ? "ON" : "OFF"}</p>
          </div>
        </div>
        <div className="tolerance-window-right">
          <div className="select-tolerance-level">
            <img src={clockImage} alt="" />
            <p>Select Tolerance Level</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToleranceWindow