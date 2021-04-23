import React from "react";
import Modal from "react-modal";

const CostumerModal = ({
  isOpenModal,
  closeModal,
  item,
  closeModalHandler,
}) => (
  <Modal
    isOpen={isOpenModal}
    onRequestClose={closeModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Details:</h3>
    <p className="modal__selected">Name: {item.email}</p>
    <p className="modal__selected">Full Name: {item.fullname}</p>
    <p className="modal__selected">Phone: {item.phone}</p>
    <p className="modal__selected">Address: {item.address}</p>
    <button className="modal__button" onClick={closeModalHandler}>
      Okay
    </button>
  </Modal>
);

export default CostumerModal;
