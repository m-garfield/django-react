import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import ourServices from '../../data/ourServices';



const OurServices = () => {

  

  const [index, setIndex] = useState(0);
	const neonTypeColors = [
		{
			shadow: "shadow-neon-pink",
			border: "border-neon-pink",
			text: "text-neon-pink",
		},
		{
			shadow: "shadow-neon-blue",
			border: "border-neon-blue",
			text: "text-neon-blue",
		},
		{
			shadow: "shadow-neon-yellow",
			border: "border-neon-yellow",
			text: "text-neon-yellow",
		},
		{
			shadow: "shadow-neon-blue",
			border: "border-neon-pink",
			text: "text-neon-yellow",
		},
	];

	useEffect(() => {
		const loop = setInterval(() => {
			if (index >= 3) {
				setIndex(0);
			} else {
				setIndex(index + 1);
			}
		}, 2000);
		return () => {
			clearInterval(loop);
		};
	}, [index]);

	const { shadow, text, border } = neonTypeColors[index];




  return (
    <motion.article
      className="section-3-container"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h2 className="pop-font">НАШИ СЕРВИСЫ</h2>
      <p className="pop-font section-description">
      4:20 предоставляет услуги в современном формате — различные блюда и напитки на ваш выбор! Что делает нас особенными, так это наша команда профессионалов с обширными знаниями всей кухни, которую мы можем предложить.
      </p>
      <section className="services-grid  flex-container flex-column">
        {ourServices.map((service) => (
          <Tilt key={service.id}>
            <section className="service-list flex-container flex-column ">
              <img
                width="50"
                height="50"
                className="service-img"
                src={service.img}
                alt=""
                aria-hidden="true"
              />

              <section className={'pop-font '}>
                <h3 className="pop-font ">{service.name}</h3>
                <p>{service.description}</p>
              </section>
            </section>
          </Tilt>
        ))}
      </section>
    </motion.article>
  )
}

export default OurServices;