import React from "react";
import "./Footer.css";
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGoogle} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="f-wrapper footer">
      <div class="grid-container">
    
  
        {/* left side */}
        <div className="col1">
          <span className="secondaryText ">
            About Site
          </span>
         <p className="para" >We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
        </div>
        <div className="col2">
          <span className="secondaryText">
            Contact Us
          </span>
          <p className="para2">N-57 Malviya Nagar <br></br>Delhi , India <br></br> +913838347470</p>
        </div>

        <div className="col3">
          <span className="secondaryText">Follow Us</span>
          <div className="f-icon">
            <p className="item"><BsInstagram/></p>
            <p className="item"><AiOutlineTwitter/></p>
            <p className="item"><AiOutlineGoogle/></p>
            <p className="item"> <AiOutlineMail/></p>
          </div>
          <div>

          </div>
        </div>
        </div>
        <div className="SecondDiv">
        <div className="flexColStart f-right margin">
        
          <span className="secondaryText"></span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>

        <div className=" margin2">
          <span>© 2023 Real Estate. Made with love.</span>
        </div>
     </div>
    </div>
  );
};

export default Footer;
