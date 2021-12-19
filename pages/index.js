// import Head from "next/head";
import "../styles/Home.module.css";
import HomeAbout from "./components/HomeAbout";
import HomeAwards from "./components/HomeAwards";
import HomeBanner from "./components/HomeBanner";
import HomeBlog from "./components/HomeBlog";
import HomeContact from "./components/HomeContact";
import HomeEducation from "./components/HomeEducation";
import HomeExperience from "./components/HomeExperience";
import HomePortfolio from "./components/HomePortfolio";
import HomeWork from "./components/HomeWork";


// import { jQuery } from "../assets/js/custom";

export default function Home() {
  return (
    <>
      <main className="main-left">
        <HomeBanner />

        <section id="about" className="section dark-bg">
          <div className="container">
            <HomeAbout />
            {/* <!-- separated --> */}
            <div className="separated" />
            {/* <!-- End separated --> */}
            <HomeWork />
            {/* <!-- separated --> */}
            <div className="separated" />
            {/* <!-- End separated --> */}
            {/* <HomeAwards /> */}
          </div>
        </section>

        {/* <!-- Resume --> */}
        <section id="resume" className="section">
          <div className="container">
            <HomeExperience />
            {/* <!-- separated --> */}
            <div className="separated" />
            {/* <!-- End separated --> */}
            <HomeEducation />
          </div>
        </section>
        {/* <!-- Resume End --> */}
        <HomePortfolio />
        {/* <HomeBlog /> */}
        <HomeContact />
      </main>
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"
      />
      <script src="../assets/js/custom.js" type="text/javascript" />
    </>
  );
}
