import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
// import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import HomeBanner from "./components/HomeBanner";
import Timeline from "./components/Timeline";
import Sponsors from "./components/Sponsors";
import Glimpses from "./components/Glimpses";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Fragment>
        <Navbar />
        <div
          style={
            {
              // overflowY: "scroll",
              // height: "800px",
            }
          }
        ></div>
      </Fragment>

      {/* <Banner/> */}
      <HomeBanner />
      <Timeline />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
