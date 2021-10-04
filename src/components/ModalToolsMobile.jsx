
import './styles/ModalToolsMobile.css';
import ModalForTools from './pages/02/ModalForTools';

const ModalToolsMobile = ({ showModal, setShowModal, modalType }) => {

  const modalToolsStyle = {
    display: modalType ? 'flex' : 'none',
    pointerEvents: showModal ? 'auto' : 'none',
    opacity: showModal ? 1 : 0
  }

  return (
    <div className="modal-tools" 
// @ts-ignore
      style={modalToolsStyle}
    >
      <div className="dark-bg" onClick={ () => setShowModal(false) } />
      <ModalForTools setShowModal={setShowModal} />
    </div>
  )
}

export default ModalToolsMobile;