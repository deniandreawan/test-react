import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCostumers } from "../redux/actions/costumerActions";
import { dataCostumers } from "../services/dataCostumers";
import CostumerList from "../components/CostumerList";

const Home = () => {
  const costumers = useSelector((state) => state.costumers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCostumers(dataCostumers));
  }, [dispatch]);

  return (
    <div className="container">
      <CostumerList costumers={costumers} />
    </div>
  );
};

export default Home;
