import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import {FaRegAddressBook} from 'react-icons/fa'
import image from '../image/contact.jpg'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">To have more information contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
                        <div className="flexStart row">
            <div className="flexColCenter mode">
                <div className="flexStart">
                <div className="flexCenter icon">
                   <FaRegAddressBook size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Address</span>
                    <span className="secondaryText">N-57 Malviya Nagar <br></br>Delhi , India <br></br> </span>
                  </div>
                 </div>
             
              </div>

            <div className="flexColCenter mode">
                <div className="flexStart">
                <div className="flexCenter icon">
                <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+913838347470</span>
                  </div>
                </div>
             
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+913838347470</span>
                  </div>
                </div>
             
              </div>
            </div>
            </div>
          </div>
       
      {/* right side */}
        <div className="flexEnd c-right">
          <div className="contact-container">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
