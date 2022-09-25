import React from "react";
import "./VPSPlanContainer.scss";
import { useSelector } from "react-redux";
import { VPSCard } from "../VPSCard/VPSCard";
import { useState } from "react";

export const VPSPlanContainer = ({isShowSelector, setIsShowSelector}) => {
    const vpsPlans = useSelector(state => state.tariffs.vpsPlans);
    const plans = vpsPlans.map(i => <VPSCard key={i.id} data={i} isShowSelector={isShowSelector} setIsShowSelector={setIsShowSelector}/>);

    return(
        <div className="VPS_planContainer">
            {plans}
        </div>
    );
}

