import ReactModal from 'react-modal';
import Footer from './Footer'

const Modal = () => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <ReactModal 
      isOpen={true}
      style={customStyles}
      id={'modal'}
    >
      <div id='modal-close'>+</div>
      <div className='main-content'>
        <div className='title'>
          <p>Document Upload</p>
        </div>
        <div className='body'>body</div>
        <Footer />
      </div>
    </ReactModal>
  )
}

export default Modal