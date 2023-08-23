import { Suspense, lazy } from "react";

import "./styles/ModalToolsMobile.css";
import { Skeleton } from "./skeletons/Skeletons";
const ModalForTools = lazy(() => import("./pages/02/ModalForTools"));

const ModalToolsMobile = ({ showModal, setShowModal, modalType }) => {
  const modalToolsStyle = {
    display: modalType ? "flex" : "none",
    pointerEvents: showModal ? "auto" : "none",
    opacity: showModal ? 1 : 0,
  };

  return (
    <div
      className='modal-tools'
      // @ts-ignore
      style={modalToolsStyle}
    >
      <div className='dark-bg' onClick={() => setShowModal(false)} />

      <Suspense fallback={<Skeleton elementClassName='modal-for-tools' />}>
        <ModalForTools setShowModal={setShowModal} />
      </Suspense>
    </div>
  );
};

export default ModalToolsMobile;
