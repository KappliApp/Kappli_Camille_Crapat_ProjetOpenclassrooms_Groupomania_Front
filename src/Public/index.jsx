import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

import Login from './pages/Login';

function Public(){
    let path = useLocation().pathname;
    console.log(path)
return (
    <Fragment>
        <Routes>
            <Route exact path={path} element={ <Login/> } />
        </Routes>
    </Fragment>
)
}

export default Public;