import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
// import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import HomeBanner from "./components/HomeBanner";
import Timeline from "./components/Timeline";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import NewNavbar from "./components/NewNavbar";
import NewTimeline from "./components/NewTimeline";
import NewSpeakers from "./components/NewSpeakers";

const Home = () => {
  return (
    <div className="Home">
      <Fragment>
        {/* <Navbar /> */}
        <NewNavbar />
        <div
          style={
            {
              // overflowY: "scroll",
              // height: "800px",
            }
          }
        ></div>
      </Fragment>
      <HomeBanner />
      {/* <Timeline /> */}
      <NewSpeakers/>
      <NewTimeline/>
      {/* <Sponsors /> */}
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
