import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
import royal1 from "../image/house1.jpg"
const Hero = () => {
  return (
    <section className="hero-wrapper">
  <div className="background-overlay" style={{ backgroundImage: `url(${royal1})` }}></div>
        {/* left side */}
  <div className="flexColStart hero-left">
  <div className="hero-title">

      <motion.h1
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1}}
        transition={{
          duration: 2,
          type: "ease-in",
        }}
      >
           Find your  <br />
            home
           
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des para">
            <span>Find the perfect set of properties that suit you</span>
            <span>at minimal price</span>
          </div>
        <div>
        <SearchBar/>
        </div>
        

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        
           
     
      

    </section>
  );
};

export default Hero;
