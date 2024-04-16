import React, { Fragment } from "react";
// import Navbar from './components/Navbar'
// import FAQ from "./components/FAQ";
// import HomeBanner from "./components/HomeBanner";
// import Timeline from "./components/Timeline";
// import Sponsors from "./components/Sponsors";
// import Glimpses from "./components/Glimpses";
// import Footer from "./components/Footer";
import Home from "./Home";
// import Register from "./Register";

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from "./components/Register";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
      
      {/* <Fragment>
            <Navbar/>
            <div
                style={{
                    // overflowY: "scroll",
                    // height: "800px",
                }}
            ></div>
        </Fragment> */}

        {/* <Banner/> */}
        {/* <HomeBanner/>        
        <Timeline/>
        <Sponsors/>
        <Glimpses/>
        <FAQ/>
        <Footer/>         */}
        </div>
    
  )
}

export default App
