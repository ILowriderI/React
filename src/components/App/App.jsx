import PeoplePage from '../PeoplePage/PeoplePage';
import { BrowserRouter, Routes, NavLink, Route, Router } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import routesConfig from '../../routes/routesConfig';
import Header from '../Header/Header';
import styles from'./App.module.css';



function App() {
  return (

        <div className={styles.wrapper}>
            <Header/>
            <Routes>
                {routesConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </div>
   
  );
}

export default App;
/*
<BrowserRouter>
<NavLink to='/'>home</NavLink>
    <NavLink to='/people'>people</NavLink>
    <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/people" element={<PeoplePage />} />
 </Routes>


</BrowserRouter>
*/