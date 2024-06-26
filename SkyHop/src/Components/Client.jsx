const Client = () => {
  return (
    <div className="client-wrapper">
      <p className="client-title">Split schedule using social distancing?</p>
      <input type="radio" name="drone" value="Single" />
      <label for="Single">Single</label>
      <input type="radio" name="drone" value="Multiple" />
      <label for="Multiple">Multiple</label>
    </div>
  )
}

export default Client