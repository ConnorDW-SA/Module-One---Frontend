import React from "react";
import logo from "./assets/logo.png";
import "./assets/Project2.css";
const Project2: React.FC = () => {
  return (
    <div className="body">
      <a href="#" className="top"></a>
      <div className="container">
        <div className="top-banner">
          <img className="logo" src={logo} />
        </div>
        <div className="navbarbox">
          <div className="navbar">
            <p> All </p>
            <p> Today's deals </p>
            <p> Customer Service </p>
            <p> Registry </p>
            <p> Gift Cards </p>
            <p> Sell </p>
          </div>
        </div>
        <div className="margincenter">
          <div className="orangebanner">
            <span>Shop All Holiday Gift Cards</span>
          </div>

          <div className="giftguides">
            <h2>Holiday Gift Guides</h2>
            <span>Be a go-gifter</span>
          </div>

          <div className="perfectgiftimages">
            <div className="perfecttext">
              <span className="perfecth">Find the perfect gift</span>
              <span className="shopnow">Shop now</span>
            </div>
            <br />
            <img className="pic1" src="assets/img_1.jpg" />
            <img className="pic2" src="assets/img_2.jpg" />
            <img className="pic3" src="assets/img_3.jpg" />
            <img className="pic4" src="assets/img_4.jpg" />
          </div>

          <div className="giftinggame">
            <img className="pic9" src="assets/img_9.png" />
          </div>

          <div className="giftingtext">
            <span className="gifttext">Play the gifting game</span>
            <span>Shop gaming</span>
          </div>

          <div className="soundofcheer">
            <img className="pic10" src="assets/img_10.png" />
          </div>
          <div className="shopaudiotext">
            <span className="soundoftext">The sound of cheer</span>
            <span>Shop Audio & Accessories</span>
          </div>
        </div>

        <div className="toplink">
          <a href="#top">Back to top</a>
        </div>
        <div className="logobottom">
          <img className="logoamazonbottom" src="assets/logo.png" />
        </div>
      </div>
    </div>
  );
};

export default Project2;

{
  /* style="color:rgb(21, 180, 127)" */
}
