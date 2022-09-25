import { tariffsAPI } from "../api/api";

const SET_TARIFFS = "SET_CATEGORIES";
const SET_PLANS = "SET_PLANS";
const IS_FETCHING = "IS_FETCHING";

const initialState = {
    tariffs: [],
    categories: [],
    vpsPlans: [],
    selectOs: [],
    selectPanel: [],
    isFetching: false 
};

const tariffsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TARIFFS:
            return {
                ...state,
                tariffs: action.tariffs,
                categories: action.tariffs.categories,
                vpsPlans: action.tariffs.vpsPlans,
                selectOs: action.tariffs.selectOs,
                selectPanel: action.tariffs.selectPanel
            }
        case SET_PLANS:
            return {
                ...state,
                vpsPlans: action.plan !== "all"
                    ? state.tariffs.vpsPlans.filter(p => p.category === action.plan)
                    : state.tariffs.vpsPlans
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.flag
            }
        default:
            return state;
    }
}

export const setTariffs = (tariffs) => ({type: SET_TARIFFS, tariffs});
export const setVpsPlans = (plan) => ({type: SET_PLANS, plan});
export const setIsFetching = (flag) => ({ type: IS_FETCHING, flag });

export const getTariffsTh = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const data = await tariffsAPI.getTariffs();
            dispatch(setIsFetching(false));
            dispatch(setTariffs(data))
        }
        catch(e) {
            dispatch(setIsFetching(false));
        }
    }
}

export default tariffsReducer;