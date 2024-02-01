import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha"
import { Link } from "react-router-dom";
import ScrollBtn from "../../helpers/ScrollBtn";
import ContactUsLanding from "../landing/ContactUsLanding";
import ContactLanding from "../landing/ContactLanding";
//components
import validateForm from "../../components/validateForm";
import ResetLocation from "../../helpers/ResetLocation";

const Contact = () => {
  useEffect(() => {
    document.title = "About | 4:20";
  }, []);
  return (
    <motion.main
      className="about"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
     
      <section className="contact-us-img"></section>
      <section className="contact-us-content pop-font">
        <section className="contact-us-content-txt">
          <h2 className="">Связаться с нами</h2>
          <p>
          Мы очень ожидаем вашего обращения и готовы ответить на любые ваши вопросы. Пожалуйста, не стесняйтесь обращаться к нам, если вам потребуются дополнительные разъяснения или помощь. Ваши отзывы и вопросы имеют для нас первостепенное значение, и мы здесь, чтобы предоставить вам необходимую поддержку. С нетерпением ждем Вашего отзыва! </p>
        </section>
      </section>
      <ContactUsLanding />
      <ContactLanding />
      
      <ScrollBtn />
    </motion.main>
  );
}
    


export default Contact;