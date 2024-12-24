import React, { createContext, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTariffsTh } from "../../redux/Tariffs-reducer";
import Preloader from "../Preloader/Preloader";
import VPSPlanContainer from "./VPSPlanContainer/VPSPlanContainer";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import "./VPSorder.scss";

export const isShowSelectorContext = createContext(null);

const VPSorder = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.tariffs.isFetching);

  useEffect(() => {
    dispatch(getTariffsTh());
  }, [dispatch]);

  const [isShowSelector, setIsShowSelector] = useState(false);
  const store = useMemo(() => ({
    isShowSelector: [isShowSelector, setIsShowSelector],
  }), [isShowSelector]);

  return (
    <isShowSelectorContext.Provider value={store}>
      <div className={"VPS_wrapper"}>
        <div className={"top_content"}>
          <div className={"top_desc"}>
            <p className={"top_desc__account"}>Аккаунт</p>
            <p className={"top_desc__order"}>Заказать VPS</p>
          </div>
          <div className={"optionList__categories"}>
            <p className={"optionList__categories__title"}>Категория</p>
            <CategoryContainer />
          </div>
        </div>
        {isFetching ? <Preloader /> : <VPSPlanContainer />}
      </div>
    </isShowSelectorContext.Provider>

  );
};

export default VPSorder;
