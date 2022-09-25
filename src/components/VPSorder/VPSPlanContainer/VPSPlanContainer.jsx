import React from "react";
import "./VPSPlanContainer.scss";
import { useSelector } from "react-redux";
import { VPSCard } from "../VPSCard/VPSCard";
import { useState } from "react";

export const VPSPlanContainer = ({currentActivityCard, setCurrentActivityCard}) => {
    const vpsPlans = useSelector(state => state.tariffs.vpsPlans);
    const plans = vpsPlans.map(i => <VPSCard key={i.id} data={i} currentActivityCard={currentActivityCard} setCurrentActivityCard={setCurrentActivityCard}/>);

    return(
        <div className="VPS_planContainer">
            {plans}
        </div>
    );
}

