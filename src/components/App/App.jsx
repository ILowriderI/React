import { Routes, Route } from "react-router-dom";

import routesConfig from "../../routes/routesConfig";
import Header from "../Header/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
