import ReactModal from 'react-modal';

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
      <p>Testing</p>
      <p>Testing</p>
      <p>Testing</p>
      <p>Testing</p>
    </ReactModal>
  )
}

export default Modal