const SplitSchedule = () => {
  return (
    <div className="split-schedule-wrapper">
      <p className="split-schedule-title">Split schedule using social distancing?</p>
      <input type="radio" name="drone" value="Yes" />
      <label for="Yes">Yes</label>
      <input type="radio" name="drone" value="No" />
      <label for="No">No</label>
    </div>
  )
}

export default SplitSchedule