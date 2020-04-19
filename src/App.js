import React from 'react';
import './App.css';
import Router from './Router';
import CarouselBox from './components/CarouselBox';
import RouterFooter from './RouterFooter';

const App = () => {
  return(
    <div>
      <div>
      <Router />
      </div>

      <CarouselBox />
      

      <div>
      <RouterFooter />
      </div>
    </div>



  )

}


export default App;