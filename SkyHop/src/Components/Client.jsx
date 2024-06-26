const Client = () => {
  return (
    <div className="client-wrapper">
      <p className="client-title">Split schedule using social distancing?</p>
      <input type="radio" name="drone" value="Single" />
      <label for="Single">Single</label>
      <input type="radio" name="drone" value="Multiple" />
      <label for="Multiple">Multiple</label>
      <div className="client-select-wrapper">
        <div className="select-row">
          <p>Testing Center 1</p>
          <div className="select">
            <select>
              <option selected disabled>Select Client:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="select-row">
          <p>Testing Center 2</p>
          <div className="select">
            <select>
              <option selected disabled>Select Client:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="select-row">
          <p>Testing Center 3</p>
          <div className="select">
            <select>
              <option selected disabled>Select Client:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="select-row">
          <p>Testing Center 4</p>
          <div className="select">
            <select>
              <option selected disabled>Select Client:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client