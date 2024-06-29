import fileImage from "./../assets/fileImage.png"

const SelectFile = () => {
  const handleDrop = (input) => {
    input.preventDefault()
    console.log('Dropped', input.dataTransfer.items)
  }

  const handleDrag = (input) => {
    console.log('Dragged')
    input.preventDefault()
  }
  const handleUpload = (input) => {
    console.log('Upload', input.target.files)
    input.preventDefault()
  }

  return (
    <div className="select-file half-a-border-on-bottom">
      <p className="select-file-title">Select a manifest you would like to import</p>
      <div className="drop-zone-wrapper">
        <div className="drop-zone-border">
          <img src={fileImage} id="image-file-upload" className="drop-zone-image" alt="file-icon" />
          <div
            id="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDrag}
            >
            <p className="drop-zone-description">Drag & Drop Here Or <b>Browse</b></p>
          </div>
        </div>
        <label onChange={handleUpload} htmlFor="select-file-input" className="select-file-button">
          Upload Manifest
          <input  type="file" id="select-file-input" />
        </label>
      </div>
    </div>
  )
}

export default SelectFile