import { Fragment } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';

import Header from './components/Header/index';
import Login from './pages/Login';
import Footer from './components/Footer';

function Public(){
    let path = useLocation().pathname;
    console.log(path)
return (
    <Fragment>
        <Header />
        <Routes>
            <Route path={path} element={ <Login/> } />
        </Routes>
        <Footer/>
    </Fragment>
)
}

export default Public;