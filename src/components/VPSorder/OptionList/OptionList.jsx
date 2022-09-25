import React, { useState } from "react";
import "./OptionList.scss";
import arrow_down from "../../../assets/img/arrow_down.svg";
import arrow_up from "../../../assets/img/arrow_up.svg";
import classNames from "classnames";

export const OptionList = ({data, activeOption, setOption, isDescription = false, currentActivityCard, setCurrentActivityCard}) => {
    const [displayOptions, setDisplayOptions] = useState(false);

    const options = data.map((op, index) => {
        const isActiveOption = op.id === activeOption.id;
        return (
            <div className={classNames("option_item", {"option_item_active": isActiveOption})} key={index} onClick={() => {setOption(op)}}>
                {op.description ? op.description : op.name}
            </div>
        );
    });

    const switchOp = () => {
        setCurrentActivityCard(prev => !prev);
        setDisplayOptions((status) => !status);
    }

    return (
        <div className="select_option" onClick={!displayOptions && !currentActivityCard ? () => switchOp() : displayOptions && currentActivityCard ? () => switchOp() : null}>
            <p className="option_title">
                {isDescription ? activeOption.description : activeOption.name}
            </p>
            <img className="arrow_icon" src={!displayOptions ? arrow_down : arrow_up} alt="-"/>

            <div className={classNames("option", {"option_active": displayOptions}) }>
                {options}
            </div>

        </div>
    );
}
