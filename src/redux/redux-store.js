import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { compose } from "redux";
import tariffsReducer from "./Tariffs-reducer";

let reducersStuff = combineReducers({
    tariffs: tariffsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducersStuff, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
