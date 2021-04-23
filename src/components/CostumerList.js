import React, { useState } from "react";
import Modal from "./CostumerModal";
import { history } from "../routers/AppRouter";

const CostumerList = ({ costumers }) => {
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
      {costumers.map((item, index) => (
        <div className="card">
          <div className="card-header" key={index}>
            <h3 className="card-header__title">{item.name}</h3>
          </div>
          {item.list.map((val, index) => (
            <>
              <Modal
                item={val}
                isOpenModal={isOpenModal}
                closeModal={closeModalHandler}
                closeModalHandler={closeModalHandler}
              />
              <div
                className="option"
                key={index}
                onClick={() => openModalHandler()}
              >
                <p className="option__name">{val.email}</p>
              </div>
            </>
          ))}
        </div>
      ))}
      {costumers.length === 0 && (
        <p className="card__message">You don't have any costumers</p>
      )}
    </div>
  );
};

export default CostumerList;
