const Footer = () => {
  return (
    <div className="footer-wrapper">
      <p className="footer-title">Data in the import file is correct. Please press Continue to import</p>
      <div className="button-wrapper">
        <button className="button-continue">Continue Import</button>
        <button className="button-cancel">Cancel</button>
      </div>
    </div>
  )
}

export default Footer