import { useState } from "react"
import fileImage from "./../assets/fileImage.png"

const SelectFile = () => {
  const handleDrop = (input) => {
    input.preventDefault()
    setUploaded(true)
    alert(input.dataTransfer.items[0].getAsFile().name + " Uploaded! ")
  }

  const handleDrag = (input) => {
    input.preventDefault()
  }
  const handleUpload = (input) => {
    setUploaded(true)
    input.preventDefault()
  }

  const [uploaded, setUploaded] = useState(false)

  return (
    <div className="select-file half-a-border-on-bottom">
      <p className="select-file-title">Select a manifest you would like to import</p>
      <div 
        className="drop-zone-wrapper"
        onDrop={handleDrop}
        onDragOver={handleDrag}
      >
        <div className="drop-zone-border">
          <img src={fileImage} id="image-file-upload" className="drop-zone-image" alt="file-icon" />
          <div
            id="drop-zone"
            >
            <p className="drop-zone-description">Drag & Drop Here Or <b>Browse</b></p>
          </div>
        </div>
        <label onChange={handleUpload} htmlFor="select-file-input" className="select-file-button">
          {uploaded ? <span>Uploaded!</span> : <span>Upload Manifest</span>}
          <input  type="file" id="select-file-input" />
        </label>
      </div>
    </div>
  )
}

export default SelectFile