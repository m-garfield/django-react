import React from 'react'
import { motion } from "framer-motion";
import PizzaOne from '../../assets/images/contact-us/image-one-parallax.webp'


const ContactUsLanding = () => {
  return (
    <section className="contact-us-landing flex-container flex-row txt-white" >
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 400, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 600, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image-two"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 800, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image-three"
      />
      <section className='company-details'>
        <div>
          <h2>000 (000) 123 4567</h2>
          <p>Свяжитесь с нами если у вас есть какие-либо вопросы</p>
        </div>
        <div>
          <h2>Улица Гагарина, 1А </h2>
          <p>Архангельская обл., Мирный</p>
        </div>
        <div>
          <h2>Открыты каждый день</h2>
          <p>8:00 - 22:00</p>
        </div>
      </section>
    </section>
  );

}


export default ContactUsLanding;