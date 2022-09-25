import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVpsPlans } from "../../../redux/Tariffs-reducer";
import { OptionList } from "../OptionList/OptionList";

export const CategoryContainer = React.memo(() => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.tariffs.categories);

    const validCategories = [{id: "0", name: "Все", prior: "0", slug: "all"}, ...categories.filter(c => c.slug !== "kit")];
    const [activeOption, setActiveOption] = useState(validCategories[0]);

    const selectedVpsPlan = (option) => {
        setActiveOption(option);
        dispatch(setVpsPlans(option.slug))
    }

    return (
        <>
            <OptionList data={validCategories} activeOption={activeOption} setOption={selectedVpsPlan}/>
        </>
    );
});