import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCostumerA,
  getCostumerB,
  getCostumerC,
} from "../redux/actions/costumerActions";
import { dataCostumers } from "../services/dataCostumers";
import CostumerList from "../components/CostumerList";

const Home = () => {
  const { a, b, c } = useSelector((state) => ({
    a: state.costumers.a,
    b: state.costumers.b,
    c: state.costumers.c,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCostumerA(dataCostumers.dataA));
    dispatch(getCostumerB(dataCostumers.dataB));
    dispatch(getCostumerC(dataCostumers.dataC));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="card">
        <CostumerList costumers={a} title="Costumer A" />
        <CostumerList costumers={b} title="Costumer B" />
        <CostumerList costumers={c} title="Costumer C" />
      </div>
    </div>
  );
};

export default Home;
