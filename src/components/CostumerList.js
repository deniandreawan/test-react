import React, { useState } from "react";
import Modal from "./CostumerModal";
import { history } from "../routers/AppRouter";

const CostumerList = ({ costumers, title }) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const openModalHandler = (e) => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
    history.push("/");
  };

  return (
    <div>
      <div className="card-header">
        <h3 className="card-header__title">{title}</h3>
      </div>
      {costumers.map((item, index) => (
        <div>
          <Modal isOpenModal={isOpenModal} closeModal={closeModalHandler}>
            <h3 className="modal__title">Details:</h3>

            <p className="modal__selected">{item.email}</p>

            <p className="modal__selected">{item.fullname}</p>
            <p className="modal__selected">{item.phone}</p>
            <p className="modal__selected">{item.address}</p>

            <button className="modal__button" onClick={closeModalHandler}>
              Okay
            </button>
          </Modal>
          <div
            className="option"
            key={index}
            onClick={() => openModalHandler(index)}
          >
            <p className="option__name">{item.email}</p>
          </div>
        </div>
      ))}
      {costumers.length === 0 && (
        <p className="card__message">You don't have any costumers</p>
      )}
    </div>
  );
};

export default CostumerList;
