import fileImage from "./../assets/fileImage.png"

const SelectFile = () => {
  const dropHandler = (e) => {
    e.preventDefault()
  }

  const dragOverHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className="select-file">
      <p className="select-file-title">Select a manifest you would like to import</p>
      <div className="drop-zone-wrapper">
        <div className="drop-zone-border">
          <img src={fileImage} className="drop-zone-image" alt="file-icon" />
          <div
            id="drop-zone"
            onDrop={dropHandler}
            onDragOver={dragOverHandler}>
            <p className="drop-zone-description">Drag & Drop Here Or <b>Browse</b></p>
          </div>
        </div>
        <input type="file" id="select-file-input" />
        <label for="select-file-input" className="select-file-button">Upload Manifest</label>
      </div>
    </div>
  )
}

export default SelectFile