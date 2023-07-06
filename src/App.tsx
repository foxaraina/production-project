import React, {Suspense} from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {hover: true, selectable: true}, [`${theme}`])}>
            <BrowserRouter>
                <button onClick={toggleTheme}>Change theme</button>
                <Link to={'/'}>Main Page</Link>
                <Link to={'about'}>About</Link>
                <Suspense fallback={'Loading...'}>
                    <Routes>
                        <Route path={'/'} element={<MainPageAsync/>} />
                        <Route path={'about'} element={<AboutPageAsync/>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
};

export default App;