import { Fragment } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';

import Header from './components/Header';
import Login from './pages/Login';

function Public(){
    let path = useLocation().pathname;
    console.log(path)
return (
    <Fragment>
        <Header/>
        <Routes>
            <Route exact path={path} element={ <Login/> } />
        </Routes>
    </Fragment>
)
}

export default Public;