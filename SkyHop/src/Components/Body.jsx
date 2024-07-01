import Footer from "./Footer"
import DropdownNameInput from "./DropdownNameInput"
import SelectFile from "./SelectFile"
import ElapsedData from "./ElapsedData"
import ToleranceWindow from "./ToleranceWindow"
import SplitSchedule from "./SplitSchedule"
import LocationChecking from "./LocationChecking"
import Client from "./Client"
import closeIcon from "../assets/closeIcon.jpeg"

const Body = () => {

  return (
    <div className="main-body">
      <div className="title-wrapper">
        <img className="close-modal" src={closeIcon} />
        <p className="title" >Document Upload</p>
      </div>
      <div className="logic-body">
        <div className="left">
          <DropdownNameInput />
          <SelectFile />
          <ElapsedData />
          <ToleranceWindow />
        </div>
        <div className="right">
          <SplitSchedule />
          <LocationChecking />
          <Client />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Body