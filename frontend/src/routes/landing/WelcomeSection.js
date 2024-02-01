import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

import img375 from '../../assets/images/section-one/section-one-375.webp'
import img700 from '../../assets/images/section-one/section-one-700.webp'
import img1440 from '../../assets/images/section-one/section-one-1440.webp'
import PizzaOne from '../../assets/images/welcome-section/pizza-one-parallax.webp'
import PizzaTwo from '../../assets/images/welcome-section/pizza-two-parallax.webp'
import { motion } from "framer-motion";



const WelcomeSection = () => {
  
  return (

    

    <article className="welcome-section" >
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <motion.img
          src={PizzaTwo} alt="" className=" pizza-two"
          initial={{ opacity: 0, translateX: -200 }}
          whileInView={{
            opacity: 1, translateX: -150
          }}
          transition={{ duration: 5 }}
        />
        <motion.img
          src={PizzaOne} alt="" className=" pizza-one"
          initial={{ opacity: 0, translateX: 200 }}
          whileInView={{
            opacity: 1, translateX: 150
          }}
          transition={{ duration: 5 }}
        />

        <p>
        <h2 className="txt-white">
        ДОБРО ПОЖАЛОВАТЬ В <span>4:20</span>
        </h2>
        Мы долго шли к этому дню и наконец он настал!
        Под нашим именем мы запускаем новое меню кухни, которые вы можете попробовать в наших стенах и на вынос с доставкой.
        Первые недели все работает в тестовом режиме, поэтому ждём от вас фидбэк!
        Никаких мишленовских звезд и пафосных названий, только хорошая и вкусная еда в хорошей компании.
        </p>
      </section>
      <LazyLoadImage
        className="section-two-img"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="4:20 restaurant interior with people at the tabel and the staff serving the customers"
      />
    </article>
  )
}

export default WelcomeSection;