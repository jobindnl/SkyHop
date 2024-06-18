import Footer from "./Footer"

const Body = () => {

  return (
    <div className="main-body">
      <p className="title" >Document Upload</p>
      <div className="logic-body">
        <div className="left">
          <div className="select">
            <select>
              <option selected disabled>Select Import Name:</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="right">
          <p>testing</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Body