import clockImage from "../assets/clock.png"

const Client = () => {
  return (
    <div className="client-wrapper">
      <p className="client-title">Client:</p>
      <div className="radio-row">
        <input type="radio" name="drone" value="Single" />
        <label htmlFor="Single">Single</label>
        <input type="radio" name="drone" value="Multiple" />
        <label htmlFor="Multiple">Multiple</label>
      </div>
      <div className="client-select-wrapper">
        <div className="select-row">
          <p>Testing Center 1</p>
          <div className="select">
            <select defaultValue={"Select Client:"}>
              <option disabled value="Select Client:">Select Client:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <img src={clockImage} alt="" />
        </div>
        <div className="select-row">
          <p>Testing Center 2</p>
          <div className="select">
            <select defaultValue={"Select Client:"}>
              <option disabled value="Select Client:">Select Client:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <img src={clockImage} alt="" />
        </div>
        <div className="select-row">
          <p>Testing Center 3</p>
          <div className="select">
            <select defaultValue={"Select Client:"}>
              <option disabled value="Select Client:">Select Client:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <img src={clockImage} alt="" />
        </div>
        <div className="select-row">
          <p>Testing Center 4</p>
          <div className="select">
            <select defaultValue={"Select Client:"}>
              <option disabled value="Select Client:">Select Client:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <img src={clockImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Client