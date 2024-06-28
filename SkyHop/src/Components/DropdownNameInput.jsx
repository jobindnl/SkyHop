const DropdownNameInput = () => {
  return (
    <div className="select half-a-border-on-bottom">
      <select defaultValue={"Select Import Name:"}>
        <option disabled value="Select Import Name:">Select Import Name:</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  )
}

export default DropdownNameInput