const SplitSchedule = () => {
  return (
    <div className="split-schedule-wrapper half-a-border-on-bottom">
      <p className="split-schedule-title">Split schedule using social distancing?</p>
      <div className="radio-row">
        <input type="radio" name="split-schedule-drone" value="split-schedule-Yes" />
        <label htmlFor="split-schedule-Yes">Yes</label>
        <input type="radio" name="split-schedule-drone" value="split-schedule-No" />
        <label htmlFor="split-schedule-No">No</label>
      </div>
    </div>
  )
}

export default SplitSchedule