import ReactModal from 'react-modal';
import Body from './Body';

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
      ariaHideApp={false}
      id={'modal'}
    >
      <div className="div-1">
        <Body />
      </div>
    </ReactModal>
  )
}

export default Modal