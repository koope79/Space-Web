import React, { useState } from "react";
import "./OptionList.scss";
import arrow_down from "../../../assets/img/arrow_down.svg";
import arrow_up from "../../../assets/img/arrow_up.svg";
import classNames from "classnames";

export const OptionList = ({data, activeOption, setOption, isDescription = false, isShowSelector, setIsShowSelector}) => {
    const [isDisplayOptions, setIsDisplayOptions] = useState(false);

    const options = data.map((op, index) => {
        const isActiveOption = op.id === activeOption.id;
        return (
            <div className={classNames("option_item", {"option_item_active": isActiveOption})} key={index} onClick={() => {setOption(op)}}>
                {op.description ? op.description : op.name}
            </div>
        );
    });

    const switchOp = () => {
        setIsShowSelector(prev => !prev);
        setIsDisplayOptions(status => !status);
    }

    return (
        <div className="select_option" onClick={!isDisplayOptions && !isShowSelector ? () => switchOp() : isDisplayOptions && isShowSelector ? () => switchOp() : null}>
            <p className="option_title">
                {isDescription ? activeOption.description : activeOption.name}
            </p>
            <img className="arrow_icon" src={!isDisplayOptions ? arrow_down : arrow_up} alt="-"/>

            <div className={classNames("option", {"option_active": isDisplayOptions}) }>
                {options}
            </div>

        </div>
    );
}
