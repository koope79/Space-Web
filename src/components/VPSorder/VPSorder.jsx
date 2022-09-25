import React from "react";
import "./VPSorder.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTariffsTh } from "../../redux/Tariffs-reducer";
import { VPSPlanContainer } from "./VPSPlanContainer/VPSPlanContainer";
import { CategoryContainer } from "./CategoryContainer/CategoryContainer";
import Preloader from "../Preloader/Preloader";

export const VPSorder = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.tariffs.isFetching);

    useEffect(() => {
        dispatch(getTariffsTh());
    }, []);

    return (
        <div className="VPS_wrapper">
            <div className="top_content">
                <div className="top_desc">
                    <p className="top_desc__account">Аккаунт</p>
                    <p className="top_desc__order">Заказать VPS</p>
                </div>
                <div className="optionList__categories">
                    <p className="optionList__categories__title">Категория</p>
                    <CategoryContainer />
                </div>
            </div>
            {isFetching ? <Preloader/> : <VPSPlanContainer />}
        </div>
    );
}