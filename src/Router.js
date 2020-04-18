import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Todo from './components/Todo/Todo';
import ContactUs from './components/ContactUs/ContactUs';
import Sell from './components/Sell/Sell';
import Gift from './components/Gift/Gift';
// import Footer from './components/Footer/Footer'
// import Direction from './components/Direction/Direction';
// import Partnerts from './components/Partners/Partners';
// import About from './components/About/About';
// import Help from './components/Help/Help';


const Router = () => {
    return (
        <BrowserRouter>
            
                
            <NavBar />
            <Route path="/" exact component={()=><Todo page="LIST"/>}/>
            <Route path="/add" component={()=><Todo page="ADD"/>}/>
            <Route path="/contactus" component={ContactUs}/>
            <Route path="/sell" component={Sell}/>
            <Route path="/gift" component={Gift}/>
            

        </BrowserRouter>
    )
} 

export default Router;

