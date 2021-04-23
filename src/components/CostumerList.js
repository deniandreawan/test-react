import React, { useState } from "react";
import Modal from "./CostumerModal";
import { history } from "../routers/AppRouter";

const CostumerList = ({ costumers }) => {
  const [isOpenModal, setOpenModal] = useState({});

  const openModalHandler = (index) => {
    setOpenModal({ ...isOpenModal, [index]: true });
  };

  const closeModalHandler = (index) => {
    setOpenModal({ ...isOpenModal, [index]: false });
    history.push("/");
  };

  return (
    <div>
      {costumers.map((item) => (
        <div className="card">
          <div className="card-header" key={item.id}>
            <h3 className="card-header__title">{item.name}</h3>
          </div>
          {item.list.map((val) => (
            <>
              <Modal
                item={val}
                isOpenModal={isOpenModal[val.id]}
                closeModal={closeModalHandler}
                closeModalHandler={() => closeModalHandler(val.id)}
              />
              <div
                className="option"
                key={val.id}
                onClick={() => openModalHandler(val.id)}
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
