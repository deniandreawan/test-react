import React, { useState } from "react";
import Modal from "./CostumerModal";
import { history } from "../routers/AppRouter";

const CostumerList = ({ costumers, title }) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
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
          <Modal
            item={item}
            isOpenModal={isOpenModal}
            closeModal={closeModalHandler}
            closeModalHandler={closeModalHandler}
          />
          <div
            className="option"
            key={index}
            onClick={() => openModalHandler()}
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
