import React from "react";
import './Companies.css'
const Companies = () => {
  return (
    <section className="company">
    <div className="c-text" >
      <h1 className="companyText">Our Partners</h1>
      <p className="companyText2">We only work with the best companies around the globe</p>
    </div>
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./prologis.png" alt="" />
        <img src="./tower.png" alt="" />
        <img src="./equinix.png" alt="" />
        <img src="./realty.png" alt="" />
      </div>
    </section>
  );
};

export default Companies;
