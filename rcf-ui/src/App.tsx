import React from 'react';
import './App.css';
import MainLayout from './MainLayout';

import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

function App() {

    console.log(process.env.PUBLIC_URL);
    return (
        <div className='App'>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Route path='/app' component={MainLayout}/>
                <Route path='/home' component={Home}/>
                <Route path='/notfound' component={NotFound}/>
                {/*<Route path='*' component={NotFound}/>*/}
            </BrowserRouter>
        </div>
    );
}

export default App;
