import { Link } from "react-router-dom";
import React from 'react'
import { motion } from "framer-motion";

import Lottie from "lottie-react";
import "react-alice-carousel/lib/alice-carousel.css";
import HeroVideo from '../../assets/images/hero/hero-bg.mp4';
import welcomeAnimation from "../../assets/images/hero/Animation-welcome.json";
import menuAnimation from "../../assets/images/hero/Animation-menu2.json";


const Hero = () => {

 
  const styleanim = {
    // width:200
  };
  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video" >
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <section className="header-info flex-container flex-column txt-center pop-font txt-white">
        <motion.div
          initial={{ opacity: 0, translateX: 300 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <span> 
          
          <Lottie className="amination"
      animationData={welcomeAnimation}
      style={styleanim}
          />
          </span>
          <h1 className="txt-white">ПОПРОБУЙТЕ ЧТО-ТО УДИВИТЕЛЬНОЕ</h1>
          <p className="txt-white">
          На нашем сайте можно быстро и легко заказать любимую и вкусную еду.
          </p>
        </motion.div>

        <div className="header-btns flex-container flex-row">
          {/* <Link className=" passive-button-style" to="/blog">
            Read Blog
          </Link> */}
          <Link className=" passive-button-style  " to="/menu">
          <Lottie className="amination" animationData={menuAnimation}
          style={styleanim}>
          

          </Lottie>
    
        
            Меню
          </Link>
        </div>
      </section>

    </section>

  );
}

export default Hero;