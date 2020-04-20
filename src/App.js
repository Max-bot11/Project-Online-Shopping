import React from 'react';
import './App.css';
import Router from './Router';
// import CarouselBox from './components/CarouselBox';
import RouterFooter from './RouterFooter';

const App = () => {
  return(
    <div className="container">
      <div>
      <Router />
      </div>

      
      

      <div>
      <RouterFooter />
      </div>
    </div>



  )

}


export default App;