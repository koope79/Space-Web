import React from "react";
import { useSelector } from "react-redux";
import VPSCard from "../VPSCard/VPSCard";
import "./VPSPlanContainer.scss";

const VPSPlanContainer = () => {
  const vpsPlans = useSelector(state => state.tariffs.vpsPlans);
  const plans = vpsPlans.map(i => <VPSCard key={i.id} data={i} />);

  return (
    <div className={"VPS_planContainer"}>
      {plans}
    </div>
  );
};

export default VPSPlanContainer;

