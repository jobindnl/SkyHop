import Footer from "./Footer"
import DropdownNameInput from "./DropdownNameInput"
import SelectFile from "./SelectFile"
import ElapsedData from "./ElapsedData"
import ToleranceWindow from "./ToleranceWindow"
import SplitSchedule from "./SplitSchedule"
import LocationChecking from "./LocationChecking"
import Client from "./Client"

const Body = () => {

  return (
    <div className="main-body">
      <p className="title" >Document Upload</p>
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