import Footer from "./Footer"
import DropdownNameInput from "./DropdownNameInput"

const Body = () => {

  return (
    <div className="main-body">
      <p className="title" >Document Upload</p>
      <div className="logic-body">
        <div className="left">
          <DropdownNameInput />
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