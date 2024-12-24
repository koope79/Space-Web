import { Provider } from "react-redux";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import VPSorder from "./components/VPSorder/VPSorder";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <NavBar>
        <Routes>
          <Route
            path={"/"}
            element={<Navigate replace to={"/order"} />}
          />
          <Route
            path={"/order"}
            element={<VPSorder />}
          />
          <Route
            path={"*"}
            element={<VPSorder />}
          />
        </Routes>
      </NavBar>
      <Footer />
    </div>
  );
};

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default AppContainer;
