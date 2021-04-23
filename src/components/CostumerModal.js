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

    <p className="modal__selected">{item.email}</p>

    <p className="modal__selected">{item.fullname}</p>
    <p className="modal__selected">{item.phone}</p>
    <p className="modal__selected">{item.address}</p>

    <button className="modal__button" onClick={closeModalHandler}>
      Okay
    </button>
  </Modal>
);

export default CostumerModal;
