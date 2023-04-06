import React from "react";
import { Banner } from "../../content";
import { bannerBg, Hero } from "../../assets";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="banner-showcase">
        <div className="banner-bg">
          <img src={bannerBg} alt="Backgroud Banner" />
        </div>
        <Banner />
      </div>
      <div className="home-about gradient-bg section__padding">
        <h4>LET ME INTRODUCE MYSELF</h4>
        <div className="row">
          <div className="introduce">
            <p>
              I'm Farel, I like things related to visuals. Such as drawing
              characters or landscapes, creating 3 models for an object and
              editing photos.
            </p>
            <p>Also I like programming, when I was in junior high
              school I was curious about how the web can be made, then I
              searched how on the internet and I found that the web was made
              with HTML and to decorate HTML it needed CSS. So I'm trying to
              make a simple web where I can put my photos onto the web and
              that's where I get excited about programming. I think it's an art
              so the neater, easier to read, and optimally a code will be, the
              better the quality. Also in the world of logic programming
              everyone is different for each problem and that I call the art of
              thinking. So programmers are like artists, and the results of the
              coding are paintings, that's why I like programming.</p>
          </div>
          <div className="myimg">
            <img src={Hero} alt="My Foto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
