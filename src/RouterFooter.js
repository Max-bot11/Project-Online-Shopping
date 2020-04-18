import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Direction from './components/Direction/Direction';
import Partnerts from './components/Partners/Partners';
import About from './components/About/About';
import Help from './components/Help/Help';

const Router = () => {
    return (
        <BrowserRouter>
            <div className="container">
                    <Footer />   
                    <Route path="/about" component={About}/>
                    <Route path="/direction" component={Direction}/>
                    <Route path="/help" conponent={Help}/>
                    <Route path="/partners" component={Partnerts}/>
            </div>
        </BrowserRouter>
    )
} 

export default Router;

