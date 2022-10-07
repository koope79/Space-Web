import React from "react";
import "./VPSPlanContainer.scss";
import { useSelector } from "react-redux";
import { VPSCard } from "../VPSCard/VPSCard";

export const VPSPlanContainer = () => {
    const vpsPlans = useSelector(state => state.tariffs.vpsPlans);
    const plans = vpsPlans.map(i => <VPSCard key={i.id} data={i}/>);

    return(
        <div className="VPS_planContainer">
            {plans}
        </div>
    );
}

