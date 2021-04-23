import React from "react";
import Modal from "react-modal";

const CostumerModal = ({ isOpenModal, closeModal, children }) => (
  <Modal
    isOpen={isOpenModal}
    onRequestClose={closeModal}
    closeTimeoutMS={200}
    className="modal"
  >
    {children}
  </Modal>
);

export default CostumerModal;
